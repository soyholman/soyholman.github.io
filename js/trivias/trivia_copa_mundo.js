var QUESTIONS = [
    {
        question: "BONUS: ¿De qué país fue mascota Naranjito?",
        answers: ["España", "México", "Argentina","Holanda"],
        correctAnswer: "España",
        image: "https://th.bing.com/th/id/R.652b272b80b19a23c9b228d1865c0b85?rik=ZMKTW6LaknpBfQ&riu=http%3a%2f%2fimg.europapress.es%2ffotoweb%2ffotonoticia_20150306081737_800.jpg&ehk=ZEOBJYRSLjFnliK%2bIIzevu8M%2fIC2y5NDomxrIhn3QfY%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        question: "¿En cuál Mundial fue suspendido Diego Maradona tras ser acusado por dopaje?",
        answers: ["Estados Unidos 1994", "Italia 1990","Francia 1998","Ninguna de las anteriores"],
        correctAnswer: "Estados Unidos 1994",
        image: "https://th.bing.com/th/id/R.9f93a140fddc7b5438f8c902f75804ee?rik=tkf0OhHT7q8ePw&riu=http%3a%2f%2fwww.polvo.com.ar%2fwp-content%2fuploads%2f2017%2f11%2ftenor.gif&ehk=LEYfVRWlt%2fkrHyM19Tgwl%2fqe1QnzkB5a3XHCVwaqyW4%3d&risl=&pid=ImgRaw&r=0"
    },
    {
     
        question: "En el Mundial de Francia de 1938, Mussolini envió un mensaje que causó furor en la selección de Italia, ¿qué decía el mensaje?",
        answers: [ "Vencer o morir", "El poder esta en sus pies", "Italia vencedora hasta la muerte","Campeones o vencidos, pero unidos a intentarlo"],
        correctAnswer: "Vencer o morir",
        image: "https://media.giphy.com/media/QYRs4esUS6Ot2/200.gif"
    },
    {
		question: "¿Cuál es el nombre de la canción que cantó Ricky Martin en el Mundial de 1998?",
        answers: ["GOL GOL GOL", "ALLEZ ALLEZ ALLEZ", "El mundo está de pie","La copa de la vida"],
        correctAnswer: "La copa de la vida",
        image: "https://media.giphy.com/media/l0MYAp4DXCrhfLp6g/giphy.gif"
    },
    {	
		question: "¿Quién fue el máximo goleador de la Copa del Mundo del 2002?",
        answers: ["Ronaldo el fenómeno","Puyol","Zinédine Zidane","Roberto Carlos"],
        correctAnswer: "Ronaldo el fenómeno",
        image: "https://th.bing.com/th/id/R.2858cd5505e58f19e0e1212b2442270d?rik=W6PAjr83RPgh6A&riu=http%3a%2f%2fhumorfutbolclub.com%2fwp-content%2fuploads%2f2012%2f05%2fgif-gracioso-futbol-lanzamiento-falta-barrera-gol-propia-puerta.gif&ehk=381QMqXEXP4WHRTJNrWhOT12FDaf5IjHSFUc%2f%2fY4%2fLY%3d&risl=&pid=ImgRaw&r=0"
    },
    {
		question: "¿Cómo se llamó la mascota del Mundial Sudáfrica 2010?",
        answers: ["Waka Waka", "Zakumi","Mundialito","Wakanda"],
        correctAnswer: "Zakumi",
        image: "https://i7.glitter-graphics.org/pub/2804/2804227ya0s2fr5e7.gif"
    },
    {
		question: "¿Cuál es el orden cronológico correcto de las últimas 5 sedes del Mundial? (De más reciente a más antiguo).",
        answers: ["Rusia,brasil,Sudáfrica,Alemania, Japón-Corea", "Rusia,Sudáfrica,Brasil,Alemania,Francia","Rusia,Brasil  ,Alemania,Sudáfrica,México"],
        correctAnswer: "Rusia,brasil,Sudáfrica,Alemania, Japón-Corea",
        image: "https://thumbs.gfycat.com/LonelyWaterloggedJumpingbean-max-1mb.gif"
    },
    {
		question: "¿Qué país ganó la Copa del Mundo en Alemania 2006?",
        answers: ["Alemania", "Francia","Italia","Argentina"],
        correctAnswer: "Italia",
        image: "https://c.tenor.com/Wa0kczXZac0AAAAC/grosso-2006.gif"
    },
    {
		question: "¿En qué año se estrenó la famosa canción de Shakira Waka Waka?",
        answers: ["2010", "2006", "2014","2002"],
        correctAnswer: "2010",
        image: "https://i.pinimg.com/originals/d7/1c/08/d71c08719e70a97f34ab66da29d9d7ce.gif"
    },
    {
		question: "¿Cuántas veces ha ganado Brasil la Copa del Mundo?",
        answers: ["5", "6", "3","4"],
        correctAnswer: "5",
        image: "https://thumbs.gfycat.com/PettyAgitatedBluetickcoonhound-size_restricted.gif"
    },
    {
		question: "¿Qué selección salió vencedora en la primera Copa del Mundo en 1930?",
        answers: ["Uruguay", "Italia", "Alemania","Francia"],
        correctAnswer: "Uruguay",
        image: "https://phoneky.co.uk/thumbs/screensavers/down/sports/worldcup_xwks2dvf.gif"
    },
    {
		question: "¿Quién es el jugador con más goles en la historia del Mundial?",
        answers: ["Josef Klose", "Pelé", "Maradona","KaKá"],
        correctAnswer: "Josef Klose",
        image: "https://i0.wp.com/33.media.tumblr.com/e7a7a0b4582c994fcd471073627089d8/tumblr_n8pckvNZg81r1hfqdo1_400.gif?resize=350%2C196&ssl=1"
    }

];

var correctAnswerElement;
var questionIndex = 0;
var timeLeft = 20;
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
            $("#Titles").css("font-size", "medium"); 
            $("h3").css("font-size", "larger");  // Adds hover effect to each answer element
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
                timeLeft = 20;
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
            timeLeft =20;
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