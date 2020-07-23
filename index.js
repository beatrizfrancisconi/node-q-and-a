const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Question = require("./database/Question");
const Answer = require("./database/Answer");
//Database connection
connection.authenticate().then( () => {
    console.log("The database connection has succedeed...");
}).catch( (erro) => {
    console.log("The database connection has failed...")
});

//View engine
app.set('view engine', 'ejs');

//Using body parser to refrain data from the form
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Static files
app.use(express.static('public'));


//Index route
app.get("/", (req, res) => {
    Question.findAll({raw: true, order:[ 
        ['id', 'DESC']
    ]}).then( Question => { 
    res.render("index",{
        Question: Question
    });
    });
});

//Question route
app.get("/question/:id", (req, res) =>{
    var id = req.params.id;
    Question.findOne({
        where:{id:id}
    }).then(question => {//Question found
        if(question != undefined){
            Answer.findAll({
                where:{questionId: question.id},
                order: [ ['id', 'DESC'] ]

            }).then(answers =>{//Answers found
                res.render("question", {//Sending the answers to the intended question
                    question: question,
                    answers: answers
                });
            });


        }else{//Question not found
            res.redirect("/");
        }
    });
});

//Saving question
app.post("/savequestion", (req,res) => {
    var title = req.body.title;
    var description = req.body.description;
    Question.create({
        title: title,
        description: description
    }).then( () => {
        res.redirect("/");
    });
});

//Saving answer
app.post("/saveanswer", (req,res) =>{
    var name = req.body.name;
    var answerBody = req.body.answerBody;
    var questionId = req.body.questionId;
    Answer.create({
        name: name,
        answerBody: answerBody,
        questionId: questionId
    }).then( () => {
        res.redirect("/question/" + questionId);
    });

});






app.listen(8080, () => { console.log("The aplication is running...")});