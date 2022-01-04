var QUESTIONS = [
    {
        question: "¿En qué año 'descubrió' América Cristóbal Colón?",
        answers: ["En 1493", "En 1492","En 1500"],
        correctAnswer: "En 1492",
        image: "https://quizizz.com/media/resource/gs/quizizz-media/quizzes/789dbe4e-cfc6-4b63-9b87-e29aa16f8041"
    },
    {
        question: "¿Quién fue el primer emperador del Imperio romano?",
        answers: ["Augusto", "Bruto","Antonio"],
        correctAnswer: "Augusto",
        image: "https://i.pinimg.com/originals/4c/09/20/4c0920277ae989702e7f939372cced5d.gif"
    },
    {
     
        question: "¿Quién fue el creador de la imprenta?",
        answers: [ "Leonardo da Vinci", "Erasmo de Rotterdam","Johannes Guterberg"],
        correctAnswer: "Johannes Guterberg",
        image: "https://reygif.com/media/6/imprenta-clasica-75897.gif"
    },
    {
		question: "¿Cuándo llegó el hombre a la luna?.",
        answers: ["El 16 de julio de 1969", "El 21 de julio de 1969","El 21 de julio de 1696"],
        correctAnswer: "El 21 de julio de 1969",
        image: "https://c.tenor.com/9M1S2MyeQ-4AAAAC/astronaut-victory-yeah.gif"
    },
    {	
		question: "¿Cómo se llama el presidente de Estados Unidos que fue asesinado durante los años 60?",
        answers: ["John F. Kennedy", "Abraham Lincoln", "Lyndon B. Johnson"],
        correctAnswer: "John F. Kennedy",
        image: "https://i.pinimg.com/originals/d8/2c/eb/d82ceb4115a61312692b0301262012e6.gif"
    },
    {
		question: "¿Cuánto duró la Guerra de los Cien Años?",
        answers: ["Cien años", "99 años y 345 días","116 años"],
        correctAnswer: "116 años",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Lenepveu%2C_Jeanne_d%27Arc_au_si%C3%A8ge_d%27Orl%C3%A9ans.jpg/220px-Lenepveu%2C_Jeanne_d%27Arc_au_si%C3%A8ge_d%27Orl%C3%A9ans.jpg"
    },
    {
		question: "¿Quiénes fueron los 3 líderes políticos que dirigieron las fuerzas aliadas durante la Segunda Guerra Mundial?",
        answers: ["Mao Zedong, Lósif Stalin, Franklin Delano Roosevelt", "Wiston Churchill,Lósif Stalin, Franklin Delano Roosevelt","Vladimir Lenin, Wiston Churchill, Jorge VI"],
        correctAnswer: "Wiston Churchill,Lósif Stalin, Franklin Delano Roosevelt",
        image: "https://c.tenor.com/Gx2LgDXbSFQAAAAC/normandy-ww2.gif"
    },
    {
		question: "¿Cuál es el nombre de la batalla en la que Napoleón fue derrotado de manera definitiva?",
        answers: ["Batalla de salamina", "Batalla de Lygni","Batalla de Waterloo"],
        correctAnswer: "Batalla de Waterloo",
        image: "https://i.giphy.com/media/26tn4OE1UmYoJzTPi/giphy.gif"
    },
    {
		question: "¿En qué año se publicó ‘El origen de las especies’ de Charles Darwin?",
        answers: ["1859", "1857", "1860"],
        correctAnswer: "1859",
        image: "https://media4.giphy.com/media/o37e1VlwzOvFS/giphy.gif"
    },
    {
		question: "¿En qué año se redactó la Declaración Universal de los Derechos Humanos?",
        answers: ["1948", "1949", "1950"],
        correctAnswer: "1948",
        image: "http://4.bp.blogspot.com/-ltSn03hx8OA/VU5xkF90YlI/AAAAAAAAACw/gnPh93gXUz4/s320/GIF%2BD_H%2B%23%2B8.gif"
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
            timeLeft = 20;
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