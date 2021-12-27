var QUESTIONS = [
    {
        question: "¿Cuánto tiempo de cardio se recomienda hacer para bajar de peso?",
        answers: ["25 minutos", "35 minutos", "45 minutos","1 hora"],
        correctAnswer: "45 minutos",
        image: "https://www.dir.cat/blog/wp-content/uploads/2019/06/ejercicios-cardio-squat.gif"
    },
    {
        question: "El ejercicio cardiovascular: ¿antes o después del entrenamiento de pesas?",
        answers: ["Se recomienda después del entrenamiento de pesas", "Se recomienda antes del entrenamiento de pesas","Da igual, lo importante es hacerlo"],
        correctAnswer: "Se recomienda después del entrenamiento de pesas",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1540767027/as9iepmwrdupbviwx2b2.jpg"
    },
    {
     
        question: "¿La grasa se endurece?",
        answers: [ "Cierto", "Falso", "Depende de la zona"],
        correctAnswer: "Falso",
        image: "https://img.buzzfeed.com/buzzfeed-static/static/2017-01/3/7/asset/buzzfeed-prod-fastlane-01/anigif_sub-buzz-4249-1483444852-2.gif"
    },
    {
		question: "La celulitis no se puede eliminar de nuestro cuerpo...",
        answers: ["Cierto", "Falso"],
        correctAnswer: "Cierto",
        image: "https://media.giphy.com/media/3o6nUWGofghgLAHrkQ/giphy.gif"
    },
    {	
		question: "¿Cuántos litros de agua debe tomar una persona que entrena?",
        answers: ["2-3 litros de agua","3-4 litros de agua","4-5 litros de agua"],
        correctAnswer: "3-4 litros de agua",
        image: "https://i.gifer.com/origin/f3/f37dfb7b4fc2657ebc1a1bc44c1a4948.gif"
    },
    {
		question: "Las mujeres no pueden levantar mucho peso porque entonces desarrollarían el cuerpo de un hombre. ¿Mito o realidad?",
        answers: ["Mito","Realidad"],
        correctAnswer: "Mito",
        image: "https://i.pinimg.com/originals/99/8b/f1/998bf1db1b90c2c3752c92fa237cc28c.gif"
    },
    {
		question: "Al dejar de consumir carbohidratos aumentarás la masa muscular.",
        answers: ["Sí","No"],
        correctAnswer: "No",
        image: "https://c.tenor.com/ymiqCoMt7mQAAAAd/strong-strong-man.gif"
    },
    {
		question: "El 60% de nuestro cuerpo es agua...",
        answers: ["Verdadero", "Falso","Es el 65% de nuestro cuerpo"],
        correctAnswer: "Falso",
        image: "https://static.wixstatic.com/media/195074_893f083b518a49cb8e111e7160f1a451~mv2.gif/v1/fill/w_400,h_500,al_c,q_90/file.jpg"
    },
    {
		question: "1 kilogramo de grasa ocupa 3 veces el espacio de 1 kilogramo de músculo.",
        answers: ["Verdadero","Falso"],
        correctAnswer: "Falso",
        image: "https://media2.giphy.com/media/l3UcnjcKsKHOtaK1a/giphy.gif"
    },
    {
		question: "¿Cuántos kilos en agua pueden aumentar las mujeres durante su período menstrual?",
        answers: ["2 kilos", "3 kilos","5 kilos"],
        correctAnswer: "3 kilos",
        image: "https://c.tenor.com/6BEXiOznGvcAAAAM/powerpuff-girls-aesthetic.gif"
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
            div.addClass("hover"); // Adds hover effect to each answer element
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