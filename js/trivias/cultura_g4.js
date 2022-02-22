var QUESTIONS = [
    {
        question: "¿Qué hierba se puede ver en la fotografía?",
        answers: ["Perejil", "Orégano", "Cilantro"],
        correctAnswer:"Cilantro",
        image: "https://canastadeverduras.com/wp-content/uploads/2020/10/propiedades-del-cilantro.jpg"
    },
    {
        question: "¿En qué género musical destaca Carlos Vives?",
        answers: ["Merengue", "Bachata","Vallenato"],
        correctAnswer: "Vallenato",
        image: "https://c.tenor.com/ajekvGt_grMAAAAC/carlosvives-carlos.gif"
    },
    {
        question: "¿Por qué los jardineros de 'Alicia en el país de las maravillas' pintan las rosas del jardín real de color rojo?",
        answers: ["Porque están enamorados", "Es una manía de la Reina de Corazones","Para que la Reina no descubriera que eran blancas"],
        correctAnswer: "Para que la Reina no descubriera que eran blancas",
        image: "https://observandoelparaiso.files.wordpress.com/2014/03/disney13-alicia3.jpg?w=584"
    }
    ,
    {
        question: "Según el inventor Thomas Edison, ¿qué está compuesto por 1% de inspiración y 99% de transpiración?",
        answers: ["La invención", "El éxito", "El genio"],
        correctAnswer: "El genio",
        image: "https://media4.giphy.com/media/48drEHg9jIKWc/200.gif"
    }
    ,
    {
        question: "¿Cuántas veces cabría aproximadamente el territorio de El Salvador sobre el territorio de Canadá?",
        answers: ["370 veces", "270 veces", "470 veces"],
        correctAnswer: "470 veces",
        image: "https://c.tenor.com/2IppwrsdhW0AAAAd/travolta-canada-confused.gif"
    }
    ,
    {
        question: "¿En qué país se encuentra la segunda línea ferroviaria más alta del mundo?",
        answers: ["Perú", "Suiza","Nepal"],
        correctAnswer: "Perú",
        image: "https://s03.s3c.es/imag/_v0/770x535/5/0/5/200519-adif.gif"
    }
    ,
    {
        question: "¿Cuál de los siguientes no es un famoso futbolista?",
        answers: ["El Pelusa", "El Lagartijo","El Mono Burgo"],
        correctAnswer: "El Lagartijo",
        image: "https://www.gifsanimados.org/data/media/165/futbol-americano-y-futbol-imagen-animada-0093.gif"
    }
    ,
    {
        question: "¿Cuál de los siguientes países fue el último en declarar su independencia en la América española?",
        answers: ["Cuba", "Venezuela","México"],
        correctAnswer: "Cuba",
        image: "https://i.pinimg.com/originals/09/a7/88/09a7881482e04f1f621280158f747677.gif"
    }
    ,
    {
        question: "¿Cuál de las siguientes canciones no la canta Ricardo Arjona?",
        answers: ["«Mujeres»", "«Unicornio»","«No sirve de nada»"],
        correctAnswer: "«Unicornio»",
        image: "https://media4.giphy.com/media/x0TvRjdsXKFsk/giphy.gif?cid=790b76113acc62f1c48fd5e1c2d94a225ac4b27b5f8d62f3&rid=giphy.gif&ct=g"
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
            var user = firebase.auth().currentUser;
auth.onAuthStateChanged(user=>{
    var hoy = new Date();
var dd = hoy.getDate();
var mm = hoy.getMonth()+1;
var yyyy = hoy.getFullYear();
var data_carpet=dd+'_'+mm+'_'+yyyy;

var firebaseref=firebase.database().ref('Trivia/'+document.getElementById('Titles').textContent+'/'+data_carpet+'/'+user.displayName);
const fs=firebase.firestore();


        firebaseref.push({
// fecha:dd+'/'+mm+'/'+yyyy,
usuario:user.displayName,
Hora: hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds(),
Correctas:correct,
incorrectas:incorrect
});
   
   
   


})
      
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