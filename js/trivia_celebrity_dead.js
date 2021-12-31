var QUESTIONS = [
    {
        question: "¿Cómo murió el famoso actor Heath Ledger?",
        answers: ["ahorcamiento", "Sobredosis causada", "Sobredosis accidental"],
        correctAnswer: "Sobredosis accidental",
        image: "https://th.bing.com/th/id/R.7d53a4577b36960a61676719a8fb6a9e?rik=ARKUfm0cuDKjWQ&riu=http%3a%2f%2fvenus.com.py%2fwp-content%2fuploads%2f2020%2f01%2factor-heath-ledger-habria-cumplido-hoy-40-anos-1000x600.jpeg&ehk=%2fPt2zFMs3mbNPjdskWTj51XrO5D82uu%2bd532eOl6FZo%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        question: "Whitney Houston murió por…",
        answers: ["Sobredosis", "Mezcla de sobredosisy enfermedad coronaria", "Enfermedad coronaria"],
        correctAnswer: "Enfermedad coronaria",
        image: "https://www.out.com/sites/out.com/files/2016/02/11/tumblr_lzaymseshv1qh9nffo2_500.gif"
    },
    {
     
        question: "¿Por qué razón murió el famoso trigésimo quinto presidente de los Estados Unidos, John F. Kennedy?",
        answers: [ "Accidente aéreo", "Accidente de tránsito", "Complicaciones de la diabetes","Ninguna de las anteriores"],
        correctAnswer: "Ninguna de las anteriores",
        image: "https://media.giphy.com/media/GDx4qy4uhSfK/200.gif"
    },
    {
		question: "La causa de muerte del polifacético actor Robin Williams fue…",
        answers: ["Asfixia", "Paro respiratorio", "Paro cardíaco","Ninguna de las anteriores"],
        correctAnswer: "Asfixia",
        image: "https://3.bp.blogspot.com/-xyAIIOyFDGQ/U-oOeNK_rzI/AAAAAAAAKcc/v9wte0478-8/s1600/Robin%2BWilliams%2B2.gif"
    },
    {	
		question: "¿Cómo murió John Lennon?",
        answers: ["Asesinado por arma blanca", "Asesinado por herida de bala", "Enfermedad coronaria"],
        correctAnswer: "Asesinado por herida de bala",
        image: "https://media.giphy.com/media/g1rGb3OrQfDNu/giphy.gif"
    },
    {
		question: "Marilyn Monroe murió en 1962, por una sobredosis de…",
        answers: ["Heroína", "Barbitúricos", "Morfina","Ninguna de las anteriores"],
        correctAnswer: "Barbitúricos",
        image: "https://media1.tenor.com/images/4f229ecc3ae98b2c0e8305c4ef8f4938/tenor.gif?itemid=14026074"
    },
    {
		question: "¿Por qué murió Nelson Mandela?",
        answers: ["Infección respiratoria", "Infarto al miocardio", "Accidente cerebrovascular","Aneurisma"],
        correctAnswer: "Infección respiratoria",
        image: "https://media.giphy.com/media/S542RrScMNwLC/giphy.gif"
    },
    {
		question: "¿De qué murió el icónico actor de la trilogía ‘El padrino’, Marlon Brando?",
        answers: ["Cirrosis", "Sobredosis", "Infarto al miocardio","Insuficiencia cardíaca","Insuficiencia respiratoria"],
        correctAnswer: "Insuficiencia respiratoria",
        image: "https://th.bing.com/th/id/R.23a5d48672b08c222e95378ecb03d775?rik=MbyY%2f%2flxbG7HYg&riu=http%3a%2f%2f25.media.tumblr.com%2f557c46e0ea5eedcc1879939814a9a3cb%2ftumblr_mxmlrz1ldw1r90ooxo1_500.gif&ehk=uXkz5FYzJuvGTgLnPLT3MExTP65IQ0MKvCxtA6UrjWo%3d&risl=&pid=ImgRaw&r=0g"
    },
    {
		question: "Lady Diana murió en el año 1997, en un...:",
        answers: ["Accidente de tráfico", "Atraco a mano armada", "Secuestro"],
        correctAnswer: "Accidente de tráfico",
        image: "https://th.bing.com/th/id/R.70f8ec8318a3aa8d179f58eac27d8efd?rik=oJsVOO5EcOWIKw&pid=ImgRaw&r=0"
    },
    {
		question: "¿De qué murió Elizabeth Taylor?",
        answers: ["Cáncer", "Insuficiencia cardíaca", "Insuficiencia respiratoria","Sobredosis de barbitúricos"],
        correctAnswer: "Insuficiencia cardíaca",
        image: "https://th.bing.com/th/id/R.9d12aaecaa55bf5ad93d3b0cbf51bfac?rik=YXmg50gnAruKSw&riu=http%3a%2f%2f49.media.tumblr.com%2fc2f80e482b47663a9f7e9f08647b2274%2ftumblr_o2s69gQnRW1s9l6yxo1_500.gif&ehk=TLPBgXKVcRpQynn%2fXpieFN5BPXJfq9OkF583XxFmMi0%3d&risl=&pid=ImgRaw&r=0"
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