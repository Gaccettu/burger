drop database if exists bugers_db;

create database burgers_db;

use burgers_db;

CREATE TABLE burgers (
  
  id integer(11) auto_increment primary key,

  burger_name varchar(255),

  devoured boolean default false
);