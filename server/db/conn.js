const { MongoClient } = require("mongodb");
const Db_ConnectionString = process.env.CONNECTION_STRING;
const client = new MongoClient(Db_ConnectionString);

var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      console.log("connecting client");
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("tasks");
        console.log("Successfully connected to MongoDB.");
      }
      return callback(err);
         });
  },

  getDb: function () {
    return _db;
  },
};
