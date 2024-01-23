const express = require("express");

var dummydata = [];

const recordRoutes = express.Router();

const dbo = require("../db/conn");

// get a list of all records
recordRoutes.route("/record").get(function (req, res) {
  res.json(dummydata);
});

// get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
  res.json(dummydata.filter(function (record) {
    if (record.id == req.params.id) {
      return true;
    } else {
      return false;
    }
  }));
});

// create a new record
recordRoutes.route("/record/add").post(function (req, res) {
  dummydata.push(req.body);
  res.json(dummydata);
});

// mark a record as done/edit a record by id
// unfinished
recordRoutes.route("/update/:id").post(function (req, res) {
  dummydata[req.params.id].done = true;
  res.json(dummydata);
});

// This section will help you delete a record by id
recordRoutes.route("/:id").delete((req, res) => {
  let data = dummydata.filter(function (record) {
    if (record.id == req.params.id) {
      return false;
    } else {
      return true;
    }
  });
  dummydata = data;
  res.json(dummydata);
});

module.exports = recordRoutes;
