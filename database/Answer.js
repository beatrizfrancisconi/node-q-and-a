const Sequelize = require("sequelize");
const connection = require("./database");

const Answer = connection.define("answers",{
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    answerBody:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    questionId:{
        type: Sequelize.INTEGER,
        allowNull: false
    }


});

Answer.sync({force: false});
module.exports = Answer;