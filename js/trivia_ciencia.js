var QUESTIONS = [
    {
        question: "¿¿Cuál es el resultado de esta operación: 834 x 10 x 0 x 1??",
        answers: ["0", "1", "873635"],
        correctAnswer: "0",
        image: "https://th.bing.com/th/id/OIP.D9T99T6q9lSgL67f-nhNVQHaD4?pid=ImgDet&rs=1"
    },
    {
        question: "¿Qué es un centauro?",
        answers: ["Mitad hombre, mitad caballo", "Mitad hombre, mitad toro", "Mitad hombre, mitad avestruz"],
        correctAnswer: "Mitad hombre, mitad caballo",
        image: "https://th.bing.com/th/id/R.b208e6a094eee109efdeceeea70db8e5?rik=Xe%2bLPcFaoLzWeA&pid=ImgRaw&r=0"
    },
    {
     
        question: "En química... ¿Qué nombre posee la fórmula HCl??",
        answers: [ "Ácido clorhídrico", "Cloro", "Potasio"],
        correctAnswer: "Ácido clorhídrico",
        image: "https://th.bing.com/th/id/OIP.vGfLXWjWxau3i1QrpjbiFAAAAA?pid=ImgDet&rs=1"
    },
    {
		question: "El número 8 es…?",
        answers: ["Un número primo", "Un número compuesto", "Un número decimal"],
        correctAnswer: "Un número compuesto",
        image: "https://th.bing.com/th/id/OIP.lbMetHEQEyAfg0ZrpiKrxQHaD9?w=335&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {	
		question: "¿Qué tipo de radiación te produce quemaduras?",
        answers: ["Ultravioleta", "Rayos X", "infrarroja"],
        correctAnswer: "Ultravioleta",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/0b2df156-897f-4ceb-85ef-9fc91a09399a/c18613cd-0e2a-415e-8127-cc9400fbbc33.jpg"
    },
    {
		question: "¿Cuál es la principal función de los globulos rojos?",
        answers: ["Combatir enfermedades", "Coagular la sangre", "Llevar oxígeno"],
        correctAnswer: "Llevar oxígeno",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/0b2df156-897f-4ceb-85ef-9fc91a09399a/03f8bbee-8ff4-497b-8b3c-5fedb633304d.jpg"
    },
    {
		question: "La velocidad a la que viaja la luz es?",
        answers: ["300,000 m/s", "300,000 km/s", "300 km/h"],
        correctAnswer: "300,000 km/s",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/0b2df156-897f-4ceb-85ef-9fc91a09399a/159f715c-f78f-4d88-89ee-4957b43a104d.jpg"
    },
    {
		question: "Un miligramo son?",
        answers: ["0,001 gramos", "1000 microgramos", "Las dos son verdaderas"],
        correctAnswer: "Las dos son verdaderas",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/0b2df156-897f-4ceb-85ef-9fc91a09399a/159f715c-f78f-4d88-89ee-4957b43a104d.jpg"
    },
    {
		question: "La columna más a la derecha de la tabla periódica esta compuesta por:",
        answers: ["Haluros", "Gases Nobles", "Minerales"],
        correctAnswer: "Gases Nobles",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/0b2df156-897f-4ceb-85ef-9fc91a09399a/dcad754e-cd0d-44e2-9333-512937f787fe.jpg"
    },
    {
		question: "¿Cómo se llaman las partículas subatómicas con carga eléctrica negativa?",
        answers: ["Neutrones", "Protones", "Electrones"],
        correctAnswer: "Electrones",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/0b2df156-897f-4ceb-85ef-9fc91a09399a/fba347e1-d3a5-4680-928f-30dfb55529af.jpg"
    },
    {
		question: "Para el pan y para la cerveza se utilizan para fermentar:",
        answers: ["Microbios", "Bacterias", "Levaduras"],
        correctAnswer: "Levaduras",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/0b2df156-897f-4ceb-85ef-9fc91a09399a/e1bd868d-cd2a-4ef0-87bf-ac152e67efbc.jpg"
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