var QUESTIONS = [
    {
        question: "El primer automóvil estuvo propulsado por…",
        answers: ["Motor funcional base de vapor", "Motor cilíndrico de gas", "Motor a base de agua"],
        correctAnswer: "Motor cilíndrico de gas",
        image: "https://i.pinimg.com/originals/e7/42/54/e742545a2bf420b81f35a42176f42853.gif"
    },
    {
        question: "¿Cuál fue el primer modelo en producirse de forma masiva?",
        answers: ["Rolls-Royce Silver Ghost", "Hispano-Suiza 15T","Ford Modelo T"],
        correctAnswer: "Ford Modelo T",
        image: "https://c.tenor.com/WV_2T2FcyWUAAAAd/vintage-cars.gif"
    },
    {
     
        question: "Actualmente la marca de automóvil más vendido es…",
        answers: [ "Ford", "Toyota", "Honda"],
        correctAnswer: "Ford",
        image: "https://codillave.es/images/codillave/codillave_autocerrajeria_marcas_de_coches.gif"
    },
    {
		question: "¿Cuántas piezas puede tener un automóvil?",
        answers: ["Entre 4.000 a 30.000", "Entre 20.000 a 50.000", "Entre 75.000 a 90.000"],
        correctAnswer: "Entre 75.000 a 90.000",
        image: "https://thumbs.gfycat.com/SeveralHastyGelada-max-1mb.gif"
    },
    {	
		question: "¿Cuál es el auto que recorre mayor velocidad hasta ahora?",
        answers: ["Koenigsegg Agera RS","Hennessey Venom F5","SSC Tuatara"],
        correctAnswer: "Hennessey Venom F5",
        image: "https://acegif.com/wp-content/gifs/race-car-5.gif"
    },
    {
		question: "El automóvil más caro hasta el 2019 es…",
        answers: ["Bugatti Divo", "Rolls-Royce Sweptail","Bugatti La Voiture Noire"],
        correctAnswer: "Bugatti La Voiture Noire",
        image: "https://media2.giphy.com/media/WE84doiUvrJMk/giphy.gif"
    },
    {
		question: "Existen tres tipos de vehículos…",
        answers: ["Vehículo Eléctrico,hibrido, e híbrido enchufado", "Vehículo híbrido, de vapor y agua","Vehículo híbrido enchufado, eléctrico y a bateria"],
        correctAnswer: "Vehículo Eléctrico,hibrido, e híbrido enchufado",
        image: "https://th.bing.com/th/id/R.a8352343c1dd790d3e5ac20a36af9a5f?rik=Fjprd1gOfUR1DA&riu=http%3a%2f%2fwww.canalgif.net%2fGifs-animados%2fMecanica%2fMotores%2fImagen-animada-Motor-15.gif&ehk=NmIWOGcuexPA8RkWlgN07PZG2qroCY9T9%2bAoE5E8aWw%3d&risl=&pid=ImgRaw&r=0"
    },
    {
		question: "¿Cuánto tiempo tarda en construirse un automóvil?",
        answers: ["60 horas", "16 horas","80 horas"],
        correctAnswer: "16 horas",
        image: "https://c.tenor.com/PdrxYeomL44AAAAM/car-fail.gif"
    },
    {
		question: "¿Cuáles son las tres empresas automovilísticas más antiguas?",
        answers: ["Mercedes-Benz, Fiat y Renault", "Cadillac, Renault y Opel","Mercedes-Benz, Peugeot y Tatra"],
        correctAnswer: "Mercedes-Benz, Peugeot y Tatra",
        image: "https://reygif.com/media/6/antiguo-mercedes-benz-78570.gif"
    },
    {
		question: "Velocidad mínima y máxima en la que se puede manejar un automóvil…",
        answers: ["60 km/h - 120 km/h", "20 km/h - 60 km/h","25 km/h - 50 km"],
        correctAnswer: "60 km/h - 120 km/h",
        image: "https://acegif.com/wp-content/gifs/race-car-36.gif"
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