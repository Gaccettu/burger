var express = require ("express");

var router = express.Router();

var Burger = require("../config/orm.js");

router.get("/", function(req, res) {
    Burger.all (function (err, data) {
        if (err) {
            throw err;
        }
        res.render("index", {burgers: data});
        console.log(data);
    });
      
    });
  
  router.post("/api/burgers", function(req, res) {
    Burger.create(
      req.body.burger_name, function(result) { 
      res.json({ id: result.id });
    });
  });

  router.put("/api/burgers/:id", function(req, res) {
    var id = req.params.id;
  
    console.log("condition", id);
  
    Burger.update(
      id, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

// Export routes for server.js to use.
module.exports = router;