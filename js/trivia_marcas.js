var QUESTIONS = [
    {
        question: "Chevrolet",
        answers: ["Estados Unidos", "Japón","Canadá"],
        correctAnswer: "Estados Unidos",
        image: "https://th.bing.com/th/id/OIP.sn8LHaOURg__N51OKLuj6wHaDt?pid=ImgDet&rs=1"
    },
    {
     
        question: "LG",
        answers: [ "Japón", "Corea del sur","Corea del norte"],
        correctAnswer: "Corea del sur",
        image: "https://th.bing.com/th/id/R.16c6fac84be4475bc382f7da31f7c671?rik=x3tk5eDldUlFmw&riu=http%3a%2f%2fglobalgeeknews.com%2fwp-content%2fuploads%2f2011%2f03%2flg-logo.gif&ehk=pyrHX1wY6Px6lL00UiUsf7l%2bgQtQBshXLq7FXiF9RQE%3d&risl=&pid=ImgRaw&r=0"
    },
    {
		question: "Lenovo",
        answers: ["Filipinas", "China","Mongolia"],
        correctAnswer: "China",
        image: "https://th.bing.com/th/id/R.576da75e7a369f2dc787e5b688595b53?rik=ekaMEgy9j4FJkA&pid=ImgRaw&r=0"
    },
    {	
		question: "Ferraria",
        answers: ["Italia", "España","Grecia"],
        correctAnswer: "Italia",
        image: "https://giffiles.alphacoders.com/988/98859.gif"
    },
    {
		question: "Siemens",
        answers: ["Francia","Bélgica","Alemania"],
        correctAnswer: "Alemania",
        image: "https://th.bing.com/th/id/OIP.d9iv-xgUaW-Upl3tKl2o9AHaBw?pid=ImgDet&rs=1"
    },
    {
		question: "Nintendo",
        answers: ["China", "Japón","Malasia"],
        correctAnswer: "Japón",
        image: "https://media.giphy.com/media/h9ylbGfDQfNDy/giphy.gif"
    },
    {
		question: "Facebook",
        answers: ["Estados Unidos", "Inglaterra","Australia"],
        correctAnswer: "Estados Unidos",
        image: "https://www.audienciaelectronica.net/wp-content/uploads/2017/03/facebook-gif.gif"
    },
    {
		question: "Peugeot",
        answers: ["España", "Francia","Alemania"],
        correctAnswer: "Francia",
        image: "https://th.bing.com/th/id/OIP.cMLEkQoLRzdyAs6L0fZTtgAAAA?pid=ImgDet&rs=1"
    },
 
    {
		question: "Apple",
        answers: ["Escocia", "Inglaterra","Estados Unidos"],
        correctAnswer: "Estados Unidos",
        image: "https://1000marken.net/wp-content/uploads/2021/01/Apple-logo.png"
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
            $("#Titles").css("font-size", "medium");  // Adds hover effect to each answer element
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