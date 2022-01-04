var QUESTIONS = [
    {
        question: "¿Quién es el creador de Facebook?",
        answers: ["Mark Zuckerberg", "Mike Krieger", "Kevin Systrom"],
        correctAnswer: "Mark Zuckerberg",
        image: "https://c.tenor.com/uZXKLJVE1lYAAAAC/facebook-logo.gif"
    },
    {
        question: "¿La banda de rock Queen es originaria de que país?",
        answers: ["Estados Unidos", "Inglaterra","Australia"],
        correctAnswer: "Inglaterra",
        image: "https://c.tenor.com/EoxK74SVeRAAAAAC/queen-band.gif"
    },
    {
     
        question: "¿Cuál es la primera ley de Newton?",
        answers: [ "¿Cuál es la primera ley de Newton?","Principio de inercia", "Principio fundamental de la dinámica"],
        correctAnswer: "Principio de inercia",
        image: "https://media2.giphy.com/media/3LN9HQjb04ESc/giphy.gif"
    },
    {
		question: "¿A qué película pertenece el personaje Frodo?",
        answers: ["‘Harry Potter’","‘El Señor de los Anillos’","‘Las Crónicas de Narnia’"],
        correctAnswer: "‘El Señor de los Anillos’",
        image: "https://c.tenor.com/X_3OP3qT-n0AAAAC/frodo-frodon.gif"
    },
    {	
		question: "¿Por qué condenó la Iglesia a Galileo Galilei?",
        answers: ["Por decir que la Tierra giraba alrededor del Sol", "Por decir que la Tierra es redonda", "Por negar la existencia de Dios"],
        correctAnswer: "Por decir que la Tierra giraba alrededor del Sol",
        image: "https://i2.wp.com/www.hisour.com/wp-content/uploads/2017/10/Galileo-Galilei-Astronomy-Revolution-From-San-Marco-to-the-Moon-Italian-Youth-Committee-UNESCO.jpg?fit=737%2C800&ssl=1"
    },
    {
		question: "¿Quién fue Sigmund Freud?",
        answers: ["Un artista", "Un matemático", "Un neurólogo"],
        correctAnswer: "Un neurólogo",
        image: "https://www.rhythm89.com/image0412/yqHsTte8UCiVowW3Qr7cVB-320-80.jpg"
    },
    {
		question: "¿Qué tipo de radiación produce quemaduras?",
        answers: ["Ultravioleta", "Rayos X", "Infrarroja"],
        correctAnswer: "Ultravioleta",
        image: "https://media3.giphy.com/media/xTiN0IuPQxRqzxodZm/giphy.gif"
    },
    {
		question: "¿Por qué el francés, el español y el italiano se conocen como lenguas romances?",
        answers: ["Porque suenan muy románticas", "Porque encuentran sus raíces en el latín, hablado por los romanos", "Porque eran habladas por los romaníes"],
        correctAnswer: "Porque encuentran sus raíces en el latín, hablado por los romanos",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/92/Question_Mark_3D_Animation_POV-Ray.gif"
    },
    {
		question: "¿Qué filósofo oriental ideó los principios del taoísmo?",
        answers: ["Sun Tzu", "Confucio", "Lao-Tsé"],
        correctAnswer: "Lao-Tsé",
        image: "https://i.gifer.com/origin/99/9930e52a25fc4c8950a070fe3cbb1ae1.gif"
    },
    {
		question: "¿Qué expresa esta fórmula: e = mc²?",
        answers: ["Equivalencia entre masa y energía", "Volumen de un cubo", "Circunferencia de un círculo"],
        correctAnswer: "Equivalencia entre masa y energía",
        image: "http://gifimgs.com/animations/jobs-people/scientists/EMC_squared.gif"
    }
];

var correctAnswerElement;
var questionIndex = 0;
var timeLeft = 15;
var timer;
var correct = 0;
var incorrect = 0;

$(function () {

    // Function gets Questions-Data and append it to HTML and
    // returns element containing correct answer
    function getTrivia() {

        var correctAnswer;
        $("#answers").empty();
        $("#question-header").text(QUESTIONS[questionIndex].question);
        QUESTIONS[questionIndex].answers.forEach(function (answer) {
            var div = $("<div>").append(answer);
            div.appendTo($("#answers"));
            if (div.text() === QUESTIONS[questionIndex].correctAnswer) {
                correctAnswer = div;
            }
            div.addClass("hover"); 
            $("#Titles").css("font-size", "medium"); // Adds hover effect to each answer element
        });

        return correctAnswer;
    }

    // Function adds click event to each answer element and
    // checks for correct answer. If clicked element has
    // correct answer, text turns green and appends check mark
    // else text turns color gray and appends an X mark
    function checkCorrectAnswer() {

        $("#answers").children().click(function () {

            resetIntervalTimer();

            if ($(this).text() === correctAnswerElement.text()) {

                correct++;
                showCorrectAnswer();

            } else {

                incorrect++;
                $(this).addClass("wrong");
                $(this).append("<span> &#10008;</span>");
                $(this).siblings().not(correctAnswerElement).addClass("wrong");

                correctAnswerElement.append("<span> &#10004;</span>");
                correctAnswerElement.addClass("correct");

                $("#message").css("display", "block");
                $("#timeLeft").css("display", "none");
                $("#message").text("INCORRECTO");

                $("#imageTrivia").attr("src", "https://images.angelpub.com/2016/35/39703/wrong.gif");

            }

            $(this).parent().children().off("click"); // Prevent click event
            $("#answers").children().removeClass("hover"); // Turn off hover effect

        });

    }

    // Function shows the correct trivia answer
    function showCorrectAnswer() {

        $("#answers").children().not(correctAnswerElement).addClass("wrong");
        correctAnswerElement.append("<span> &#10004;</span>");
        correctAnswerElement.addClass("correct");

        $("#answers").children().removeClass("hover");
        $("#answers").children().off("click");

        $("#message").css("display", "block");
        $("#timeLeft").css("display", "none");
        $("#message").text("CORRECTO");

        $("#imageTrivia").attr("src", "https://media1.tenor.com/images/c69fe60c4e179c1cf21726c224353de8/tenor.gif?itemid=11296495");

    }

    // Function creates a countdown which is display on HTML
    // If timeLeft variable reach zero, correct answer shows up
    // and then wait for 4 seconds to restart
    function intervalTimer() {

        timer = setInterval(function () {

            timeLeft--;
            $("#timerSeconds").text(timeLeft);

            if (timeLeft == 0) {
                incorrect++;
                showCorrectAnswer();
                clearInterval(timer);
                timeLeft = 15;
                $("#timeLeft").css("display", "none");
                $("#message").text("se acabó el tiempo!");
                $("#message").css("display", "block");

                setTimeout(function () {
                    questionIndex++;
					startGame();
                    $("#message").css("display", "none");
                    $("#timeLeft").css("display", "block");
                    $("#timerSeconds").text(timeLeft);
                    $("#imageTrivia").attr("src", QUESTIONS[questionIndex].image);
                  
                }, 5000);
            }

        }, 1000);
    }


    // Function clears countdown after an answer is click and
    // waits four seconds to restart
    function resetIntervalTimer() {

        clearInterval(timer);

        setTimeout(function () {
            questionIndex++;
            timeLeft = 15;
			startGame();
            $("#message").css("display", "none");
            $("#message").text("SE HA TERMINADO EL TIEMPO!");
            $("#timeLeft").css("display", "block");
            $("#timerSeconds").text(timeLeft);
            $("#imageTrivia").attr("src",QUESTIONS[questionIndex].image);
        

        }, 2000);

    }

    // Function starts the game
    // If questionIndex reach QUESTIONS length, game ends and score
    // shows up, otherwise the games keeps running until last question
    function startGame() {

        if (questionIndex <QUESTIONS.length) {

            correctAnswerElement = getTrivia();

            checkCorrectAnswer();

            intervalTimer();

        } else {
            questionIndex = 0;
            $("#card").css("display", "none");
            $("#correct").text("Correcto: " + correct);
            $("#incorrect").text("Incorrecto: " + incorrect);
            $("#score").css("display", "block");
        }

    }

    // Click event button starts game
    $("#button").click(function(){
        correct = 0;
        incorrect = 0;
        questionIndex = 0;
        $("#card").css("display", "flex");
        $("#button").css("display", "none");
        startGame();
    });

    // Click event close score pop-up
    $("#close").click(function(){
        $("#score").css("display", "none");
        $("#button").css("display", "inline-block");
    });

});

    "use strict"
class Circle {
constructor(x,y,r,c,v,e){
this.x=x;
this.y=y;
this.r=r;
this.c=c;
this.v=v;
this.e=e;
this.a=.2;
}
draw(){this.sn+=.3
       this.y-=this.v;
       this.y<this.e?this.a-=.02:'';
       san.beginPath();
       san.arc(this.x,this.y,this.r,0,44/7,false);
       san.fillStyle=`rgb(0,0,240)`;
       san.fill()
       san.closePath();
}
static push(n){var rad=Mnx(1,5),cx=Mnx(rad,W-rad),cy=n?Mnx(H+rad,H+rad+100):Mnx(H*1.2,H*.3),cl=Mnx(100,250),vl=Mnx(.5,2),en=Mnx(H*.8,H*.25);
return new Circle(cx,cy,rad,cl,vl,en)}
}
var Mnx=(n,x)=>{return Math.random()*(x-n)+n},W=window.innerWidth,H=window.innerHeight,san;
var ar=[];
for(var i=0;i<550;i++){
ar.push(Circle.push(false))
}

var draw=()=>{for(var i=0;i<ar.length;i++){
ar[i].draw();if(ar[i].a<0){ar[i]=Circle.push(true)};}}
var init=()=>{
var can=document.querySelector('canvas');
can.width=W;can.height=H;can.style.background='white';can.style.position='fixed';can.style.left=0;can.style.top=0;window.backdropFilter='blur(2px)';san=can.getContext('2d');
var up=()=>{
//san.fillStyle=`rgba(0,0,0,.1)`
san.clearRect(0,0,W,H);
draw();webkitRequestAnimationFrame(up);};
webkitRequestAnimationFrame(up);
};
onload=init;