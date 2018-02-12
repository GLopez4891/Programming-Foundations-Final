function populate() {
    if (quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show choices
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;

}

function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'> Your scores: " + quiz.score + "<h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}

var questions = [
    new Question("What is JavaScript?", ["Coffee making directions", "Ancient writing", "A Object-oriented programming language", "Abstract Art"], "A Object-oriented programming language"),
    new Question("What does HTML stand for?", ["How To Make Lunch", "Hyper Text Markup Language", "How To Make Lemonade", "Here They Make Luck"], "Hyper Text Markup Language"),
    new Question("There are _____ main components of object oriented programming.", ["1", "6", "2", "4"], "4"),
    new Question("In order to link your HTML to your JavaScript you must use a _____ tag.", ["body", "link", "script", "footer"], "script"),
    new Question("____ is used to style your webpage.", ["piant", "JavaScript", "CSS", "your mouse"], "CSS")
];

var quiz = new Quiz(questions);

populate();
