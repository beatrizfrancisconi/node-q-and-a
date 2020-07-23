const Sequelize = require("sequelize");
var db = "q-and-a";//Database name
var user = ""; 
var pass = "";
var host = "localhost";//You can alterate the host if needed...
const connection = new Sequelize(db, user, pass, {
    host: host,
    dialect: 'mysql'
});
module.exports = connection;