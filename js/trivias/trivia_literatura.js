var QUESTIONS = [
    {
        question: "Quién escribió 'La Ilíada'?",
        answers: ["Marco Tulio Cicerón", "Homero", "Séneca","Heródoto"],
        correctAnswer: "Homero",
        image: "https://images.gr-assets.com/hostedimages/1607217737ra/30479569.gif"
    },
    {
        question: "Autor de 'El arte de la guerra'",
        answers: ["Shi Jing", "Sun Tzu", "Dao De Jing", "Confucio"],
        correctAnswer: "Sun Tzu",
        image: "https://img.wattpad.com/7c86033c96a73a71ceae75dd50cd448ccdc8c35b/68747470733a2f2f766973696f6e6573747261746567696361697465736f323031322e66696c65732e776f726470726573732e636f6d2f323031322f30332f67656e6572616c5f736f6e675f7975655f6665692e676966?s=fit&h=360&w=360&q=80"
    },
    {
     
        question: "¿Quién es el autor de la 'Divina Comedia'?",
        answers: [ "Dante Alighieri", "Petrarca", "Giovanni Bocaccio","Maquiavelo"],
        correctAnswer: "Dante Alighieri",
        image: "https://i.pinimg.com/originals/dc/66/78/dc6678f5dd9b6e61d9852666981afe7b.gif"
    },
    {
		question: "Filosofo griego, autor de 'La República'",
        answers: ["Socrates", "Democrates", "Aristóteles","Platón"],
        correctAnswer: "Platón",
        image: "https://j.gifs.com/KYekO1.gif"
    },
    {	
		question: "¿Por qué El Principito decide abandonar su planeta?",
        answers: ["Porque quería conocer la tierra", "Porque estaba enfermo", "Porque el rey le ordena irse","Porque sentía que una rosa se aprovechaba de el"],
        correctAnswer: "Porque sentía que una rosa se aprovechaba de el",
        image: "https://64.media.tumblr.com/bd0c51482256f64f5a3ae72345939115/tumblr_ny7ai43jBS1ubda8zo1_500.gif"
    },
    {
		question: "¿Quién escribió 'Frankenstein'?",
        answers: ["Mary Shelley", "Adele Gerhard", "Jane Austin","Rosalie Loveling"],
        correctAnswer: "Mary Shelley",
        image: "https://c.tenor.com/UBy9dJi88hwAAAAC/frankenstein-monster-hero.gif"
    },
    {
		question: "¿Cuál de estas obras no es de William Shakespeare?",
        answers: ["Alejandro Magno", "Julio César", "El sueño de una noche de verano","Hamlet"],
        correctAnswer: "Alejandro Magno",
        image: "https://c.tenor.com/YyjJWH0YMxoAAAAd/william-shakespeare-shakespeare.gif"
    },
    {
		question: "¿Cuál es el libro más vendido de los últimos 50 años?",
        answers: ["La Biblia", "Harry Potter(Saga)", "El Señor De Los Anilos(Saga)","Citas Del Presiente Mao"],
        correctAnswer: "La Biblia",
        image: "https://c.tenor.com/zuUY55sg8PQAAAAC/books.gif"
    },
    {
		question: "¿Cuál de estas obras de teatro es obra de Federico García Lorca?",
        answers: ["La Casa de Bernarda Alba", "Cinco Horas Con Mario", "Tres Sombreros De Copa","La Venganza de Don Mendo"],
        correctAnswer: "La Casa de Bernarda Alba",
        image: "https://i.pinimg.com/originals/c5/64/1f/c5641f863bbe84c67b8a04d397b3aeab.gif"
    },
    {
		question: "¿De que novela es protagonista Edmond Dantes?",
        answers: ["El Conde De Monte Cristo", "Los Tres Mosqueteros", "Los Miserables","La Reina Margot"],
        correctAnswer: "El Conde De Monte Cristo",
        image: "https://c.tenor.com/kwxAG50f_g8AAAAd/count-of-monte-cristo-long-hair.gif"
    },
    {
		question: "¿Dónde comenzó y terminó 'La vuelta al mundo en ochenta días'?",
        answers: ["Ámsterdam", "Berlín", "Londres","Viena"],
        correctAnswer: "Londres",
        image: "https://4.bp.blogspot.com/-b2IcZma3Kpk/WBuqE_jFbaI/AAAAAAAACOA/LBm-IJELB_gjvxGBCHB-F2ySSWkio-B7QCLcB/s1600/000.gif"
    },
    {
		question: "¿Qué animal quería ser domesticado por El Principito?",
        answers: ["Un lobo", "Un zorro", "Un gato","Una rana"],
        correctAnswer: "Un zorro",
        image: "https://c.tenor.com/o6_K3VGU7QEAAAAC/el-principito.gif"
    },  {
		question: "En mitología griega, ¿quién traslada a los muertos hacia el inframundo?",
        answers: ["Orfeo", "Caronte", "Minos","Hades"],
        correctAnswer: "Caronte",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/2011b54c-5d5b-4fea-8c65-73b15c6bf6db/2e263f3e-2d8e-475a-829f-7c7ad8982af8.jpg"
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
            $("#Titles").css("font-size", "medium");
            $("h3").css("font-size", "larger"); // Adds hover effect to each answer element
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