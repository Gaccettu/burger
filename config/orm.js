// Import MySQL connection.
var connection = require("./connection.js");

var Burger = function(burger_name) {
    this.burger_name = burger_name
};

// We don't need an object to search, so we'll 
// add it directly to the function
// gather all records
Burger.all = function(cb) {
    // request all records from the database
    connection.query("SELECT * FROM BURGERS;", cb);
};
// We don't need an object to search, so we'll 
// add it directly to the function
// criteria = { "name" : "sarah"} or {"id": 1} for example
Burger.find = function (criteria, cb) {
    connection.query("SELECT * FROM STUDENT WHERE ?", criteria, cb);
};
// We add the method to the prototype
// since we are having an object to save
// create a record
Burger.create = function (passedBurger) {
    var burgerData = passedBurger;
    connection.query("INSERT INTO BURGERS (burger_name, devoured) VALUES (?, FALSE)", burgerData, function(err, result){;
        if (err) {
            throw err;
        }
        console.log(result);
    });

};

Burger.update = function (passedID) {
    var burgerData = passedID;
    connection.query("UPDATE BURGERS SET devoured = TRUE WHERE id = ?", burgerData, function(err, result){
        if (err){
            throw err;
        }
        return(result);
    });
};

module.exports = Burger;