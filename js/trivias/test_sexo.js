var QUESTIONS = [
    {
        question: "¿De cuánto es el récord de mayor cantidad de orgásmos en una hora?",
        answers: ["76", "233", "189","134"],
        correctAnswer: "134",
        image: "https://th.bing.com/th/id/R.f17618d3170df739d975400bd532ab40?rik=qSafn8GKCiC8qA&pid=ImgRaw&r=0"
    },
    {
        question: "¿Cuál es el pene más pequeño registrado?",
        answers: ["2 cm", "1 cm", "2,5 cm", "3 cm"],
        correctAnswer: "2,5 cm",
        image: "https://th.bing.com/th/id/R.76ac0d4e5ac602f7e401dbe89a13bb14?rik=a1gF84mqxSw1vg&pid=ImgRaw&r=0"
    },
    {
     
        question: "Todos hemos escuchado hablar acerca de los papas, sabes ¿cuántos murieron teniendo sexo?",
        answers: [ "1", "4", "3","7"],
        correctAnswer: "4",
        image: "https://media.giphy.com/media/u3Zaekoa4yxY4/giphy.gif"
    },
    {
		question: "¿Los hombres de qué país tienen en promedio el pene más grande?",
        answers: ["Rep. D. del Congo", "Venezuela", "Nicaragua","Brasil"],
        correctAnswer: "Rep. D. del Congo",
        image: "https://media1.tenor.com/images/6d9ff8fd16b6c824fd17c7666ac96946/tenor.gif?itemid=14500287"
    },
    {	
		question: "¿Cuál es el récord de mayor cantidad de parejas sexuales en una sola sesión de sexo?",
        answers: ["115", "919", "800","378"],
        correctAnswer: "919",
        image: "https://th.bing.com/th/id/R.143b1b1d0faa2c0e24a485d43930672d?rik=R20RdwCcM7a%2bRg&riu=http%3a%2f%2fmedia.giphy.com%2fmedia%2fAYdTf5AjCAtWw%2fgiphy.gif&ehk=Sutm3OpgSIArkLTqaKh%2bXQikPiQzsb7amEcvsEKKyfs%3d&risl=&pid=ImgRaw&r=0"
    },
    {
		question: " ¿Cuál de este grupo de animales practica el sexo oral?",
        answers: ["Murciélago,osos y lobos", "Ratas, gatos y cerdos", "Ovejas, vacas y cabras","Delfínes, perros y zorros"],
        correctAnswer: "Murciélago,osos y lobos",
        image: "https://th.bing.com/th/id/R.69cae7c4513aa131810c0e0056cebbbe?rik=DIts2G5W1WwpGA&pid=ImgRaw&r=0"
    },
    {
		question: "¿Cual ha sido la sesión masturbatoria más larga documentada?",
        answers: ["8 horas y 7 segundos", "1 hora y 34 minutos", "9 horas y 59 segundos","4 horas y 15 minutos"],
        correctAnswer: "9 horas y 59 segundos",
        image: "https://c.tenor.com/dgUh_SFKdEgAAAAd/tom-tired.gif"
    },
    {
		question: "¿Qué uso se le dio al semen durante la Primera Guerra Mundial?",
        answers: ["Tinta invisible", "Comida", "Tratar heridas","Método de torturas"],
        correctAnswer: "Tinta invisible",
        image: "https://d3tm5b2ro6wsgk.cloudfront.net/tmp/2017-01-20/1484939809629-giphy%20(36).gif"
    },
    {
		question: "¿Dónde se llevó a cabo la mayor orgía documentada de la historia?",
        answers: ["Grecia", "Japón", "Italia","Alemania"],
        correctAnswer: "Japón",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/43d6aabe-24c9-4796-89d4-df46e892882d/aa88fc75-43a6-49eb-a86b-8e3e4c431462.jpg"
    },
    {
		question: "¿Cuál ha sido la distancia más larga recorrida por el semen en una eyaculación?",
        answers: ["7,89 mts", "12,63 mts", "5,76 mts","8,95 mts"],
        correctAnswer: "5,76 mts",
        image: "https://thumbs.gfycat.com/BlushingFastAntarcticfurseal-size_restricted.gif"
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

                $("#imageTrivia").attr("src", "https://media.baamboozle.com/uploads/images/49869/1618223208_15917_gif-url.gif");

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
        $("#timer").css("display", "none");
        $("#message").css("display", "none");
        $("#timeLeft").css("display", "none");
        // $("#message").text("CORRECTO");

        Swal.fire({
           
            icon: 'success',
            title: 'Correcto',
            showConfirmButton: false,
            timer: 1600
          })
    }
    function showCorrectAnswertimer() {

        $("#answers").children().not(correctAnswerElement).addClass("wrong");
        correctAnswerElement.append("<span> &#10004;</span>");
        correctAnswerElement.addClass("correct");

        $("#answers").children().removeClass("hover");
        $("#answers").children().off("click");
      
        $("#message").css("display", "none");
        $("#timeLeft").css("display", "none");
        // $("#message").text("CORRECTO");

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
              showCorrectAnswertimer();
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
            $("#timer").css("display", "flex");
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