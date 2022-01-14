var QUESTIONS = [
    {
        question: "Como se llama el Lord comandante de la Guardia Real de Robert baratheon?",
        answers: ["Lord Arryn", "Sir Barristan","Sir Jaime Lanister"],
        correctAnswer: "Sir Barristan",
        image: "https://i.gifer.com/M1Z5.gif"
    },
    {
        question: "Como se llama el caballero de las flores?",
        answers: ["Sir Marce Tyrell", "Sir Garlan", "Sir Loras Tyrell"],
        correctAnswer: "Sir Loras Tyrell",
        image: "https://pa1.narvii.com/6749/e626db86d5342433627c7d5a04665238aec7c5c5_hq.gif"
    },
    {
        question: "Cuál es el verdadero nombre de Little Finger?",
        answers: ["Lord Arryn","Lord Harrenhal","Lord Petyr Baelish"],
        correctAnswer: "Lord Petyr Baelish",
        image: "https://c.tenor.com/Sonw96wJuYUAAAAC/little-finger.gif"
    }
    ,
    {
        question: "Cuál es el lema de las islas de hierro?",
        answers: ["Hombre de hierro en el resto de poniente", "Nosotros no sembramos", "Viejas Costumbres"],
        correctAnswer: "Nosotros no sembramos",
        image: "https://c.tenor.com/s2VH-FbLeSIAAAAC/theon-greyjoy-game-of-thrones.gif"
    }
    ,
    {
        question: "Cual es el lema de la casa baratheon?",
        answers: ["Un ciervo Rampante", "Coronado en campo de oro","Nuestra es la furia"],
        correctAnswer: "Nuestra es la furia",
        image: "http://pa1.narvii.com/6819/968b4ebc66fe6cae49d56061cdddf5b413d7fe0c_00.gif"
    }
    ,
    {
        question: "Cual es el lema de la casa lasnister?",
        answers: ["Los leones dorados", "Un lanister siempre paga sus deudas","Oye mi rugido"],
        correctAnswer: "Oye mi rugido",
        image: "http://media4.popsugar-assets.com/files/thumbor/4f2DJKbSx7OtW0kx-zYDE4lzrKM=/fit-in/1024x1024/2015/04/13/848/n/1922283/7966b009874c57b1_tumblr_m1tzr3dX9S1qfv91lo2_500/i/Declaration.gif"
    }
    ,
    {
        question: "Como se llama la espada de Arya Stark ",
        answers: ["Lady", "Aguja","Stark"],
        correctAnswer: "Aguja",
        image: "https://media0.giphy.com/media/3oEhn8HISbX78FH8L6/giphy.gif"
    }
    ,
    {
        question: "Como Murio John Arryn",
        answers: ["Envenenado por lagrimas de lis", "En la batalla contra el rey loco","A manos de cersei Lanister"],
        correctAnswer:"Envenenado por lagrimas de lis",
        image: "https://media1.giphy.com/media/toB3AnUDkqE3GENKx0/giphy.gif"
    }
    ,
    {
        question: "Como se llama el hijo no nacido de daenerys targaryen",
        answers: ["Drogo", "Viserion", "Rhaego"],
        correctAnswer: "Rhaego",
        image: "https://i.gifer.com/OTGs.gif"
    }
    ,
    {
        question: "Que episodio de la sexta temporada es llamado la batalla de los bastardos?",
        answers: ["Episodio 9", "Episodio 4","Episodio 1"],
        correctAnswer: "Episodio 9",
        image: "https://media4.giphy.com/media/3oEjI1erPMTMBFmNHi/giphy.gif"
    }
    ,
    {
        question: "Que fue lo que dijo Aerys Targeryen antes de ser apuñalado por la espalda?",
        answers: ["Fuego y sangre predominara en los siete", "Quemalo todo","Fuego de valyrio"],
        correctAnswer: "Quemalo todo",
        image: "https://th.bing.com/th/id/R.751fe4263619ae94caa87053b48fd883?rik=qq2WwxS%2fFGkNBA&riu=http%3a%2f%2fmedia.vanityfair.com%2fphotos%2f574bc338b1a9903a48827728%2fmaster%2fw_690%2cc_limit%2fflashback-aerys.gif&ehk=OnOV0iGdvTfoKp8xdw4yhahnNZYObaBl2qH%2fKFeOyvU%3d&risl=&pid=ImgRaw&r=0"
    }

    ,
    {
        question: "Como se llama el maestro de danza de Arya Stark?",
        answers: ["Jaquen Hghar", "Daario Naharis","Syrio Forel"],
        correctAnswer: "Syrio Forel",
        image: "https://media.vanityfair.com/photos/55367e406f26d9cb486ad3e5/master/w_1600%2Cc_limit/syrio-two.gif"
    }
    ,
    {
        question: "Un leon no se preocupa por la opinion de las ovejas, Quien lo dijo?",
        answers: ["Cersei", "Jaime Lanister","Tywin Lanister"],
        correctAnswer: "Tywin Lanister",
        image: "https://33.media.tumblr.com/1bfef7f3b599960e475b5a402f0d9c38/tumblr_nj7zlnAzHD1s95j2so1_500.gif"
    }
    ,
    {
        question: "Valar Morghulis",
        answers: ["Dāria", "Valar Dohaeris","Nūho Glaeso Hūrus"],
        correctAnswer: "Valar Dohaeris",
        image: "https://c.tenor.com/kjurCnkA_gUAAAAC/game-of-thrones-well-played.gif"
    }

];

var correctAnswerElement;
var questionIndex = 0;
var timeLeft = 10;
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
            $("#colaborador").css("width", "60px"); // Adds hover effect to each answer element
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
                timeLeft = 10;
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
            timeLeft = 10;
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