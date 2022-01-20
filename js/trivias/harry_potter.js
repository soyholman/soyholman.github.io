var QUESTIONS = [
    {
        question: "- ¿Qué haces ahí abajo? - Me caí - ¿Para qué?  - No fue a propósito",
        answers: ["Harry Potter y las reliquias de la muerte","Harry Potter y el prisionero de Azkaban"],
        correctAnswer: "Harry Potter y el prisionero de Azkaban",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/d228510a-5683-4dd9-857b-a85a101f3a1d/c905b3e1-c69e-49e8-89e2-ee9522a54f61.jpg"
    },
    {
        question: "Juro solemnemente que esto es una travesura",
        answers: ["Harry Potter y el prisionero de Azkaban","Harry Potter y la orden del Fénix"],
        correctAnswer: "Harry Potter y el prisionero de Azkaban",
        image: "https://i.pinimg.com/originals/85/f3/ff/85f3ff9d7e7c558b70161d97ebc11ed4.jpg"
    },
    {
        question: "Todos tenemos luz y oscuridad en nuestro interior. Lo que importa es qué parte elegimos potenciar",
        answers: ["Harry Potter y la piedra filosofal","Harry Potter y la orden del Fénix"],
        correctAnswer: "Harry Potter y la orden del Fénix",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/d228510a-5683-4dd9-857b-a85a101f3a1d/35986273-1bc0-464c-9b4e-5376c2747bdf.jpg"
    }
    ,
    {
        question: "En Hogwarts siempre se prestará ayuda a quien la pida",
        answers: ["Harry Potter y las reliquias de la muerte(Parte 1)","Harry Potter y la camara secreta"],
        correctAnswer: "Harry Potter y la camara secreta",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/d228510a-5683-4dd9-857b-a85a101f3a1d/2da62c5e-e4df-42d9-8cb8-2bcf5c926304.jpg"
    }
    ,
    {
        question: "¿Conoces el baño para prefectos de la quinta planta? No es mal lugar para darse un baño",
        answers: ["Harry Potter y el cáliz de fuego", "Harry Potter y las reliquias de la muerte(Parte 2)"],
        correctAnswer: "Harry Potter y el cáliz de fuego",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/d228510a-5683-4dd9-857b-a85a101f3a1d/05c03810-ba96-4cfc-9ae3-29ac9025a21c.jpg"
    }
    ,
    {
        question: "Dobby no tiene amos. Dobby es un elfo libre y Dobby ha venido a salvar a Harry Potter y a sus amigos",
        answers: ["Harry Potter y la camara secreta", "Harry Potter y las reliquias de la muerte(Parte 1)"],
        correctAnswer: "Harry Potter y las reliquias de la muerte(Parte 1)",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/d228510a-5683-4dd9-857b-a85a101f3a1d/8913284f-2a49-4eb5-b512-d5a868f7f798.jpg"
    }
    ,
    {
        question: "Escuchad, suena muy bien cuando lo contáis así, pero la verdad es que casi todo fue pura suerte. No sabía lo que hacía casi nunca y casi siempre tuve ayuda",
        answers: ["Harry Potter y la piedra filosofal","Harry Potter y la orden del Fénix"],
        correctAnswer: "Harry Potter y la orden del Fénix",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/d228510a-5683-4dd9-857b-a85a101f3a1d/f93ef1e4-5e79-4669-bcf2-2020da09a066.jpg"
    }
    ,
    {
        question: "-¿Después de todo este tiempo?-Siempre",
        answers: ["Harry Potter y las reliquias de la muerte(Parte 2)", "Harry Potter y la piedra filosofal"],
        correctAnswer: "Harry Potter y las reliquias de la muerte(Parte 2)",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/d228510a-5683-4dd9-857b-a85a101f3a1d/c61903a0-d3f5-4661-abb0-b96edd57b30e.jpg"
    }
    ,
    {
        question: "¿Ya estamos contentos? ¿Eh? ¡Al final lo has hecho! ¡Al final le has vuelto tonto!",
        answers: ["Harry Potter y el misterio del principe", "Harry Potter y el prisionero de Azkaban"],
        correctAnswer: "Harry Potter y el misterio del principe",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/d228510a-5683-4dd9-857b-a85a101f3a1d/6e8e4d1e-fde2-498e-b0b8-ae36c3e000a1.jpg"
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

var firebaseref=firebase.database().ref('Trivia/'+document.getElementById('Titles').textContent+'/'+user.displayName);
const fs=firebase.firestore();


        firebaseref.push({
fecha:dd+'/'+mm+'/'+yyyy,
usuario:user.displayName,
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