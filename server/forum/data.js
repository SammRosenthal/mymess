const pgp = require("pg-promise")();
const { Send } = require("@material-ui/icons");
const { Client } = require("pg");

const connection = new Client();
connection.user = process.env.DB_USERNAME;
console.log(process.env.DB_USERNAME);
connection.password = process.env.DB_PASSWORD;
console.log(process.env.DB_PASSWORD);
connection.database = "postgres";
connection.host = "localhost";
connection.port = 5432;
connection.ssl = false;

const db = pgp(connection);

module.exports = {
  getAllPosts: () => {
    db.one("SELECT * FROM forum")
      .then((v) => {
        console.log(v);
      })
      .catch((e) => console.log(e));
  },
};
