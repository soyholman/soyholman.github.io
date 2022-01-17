var QUESTIONS = [
    {
        question: "¿Cómo se llama este personaje de Coraje, el perro cobarde?",
        answers: ["Kitty", "Muriel","Shirley"],
        correctAnswer: "Shirley",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/4181f6f7-32f1-4ce7-83f9-dd3ca2a9dc0e/80d79f33-1c71-445e-a537-004a40c146e1.jpg"
    },
    {
        question: "¿De cuánto es el coeficiente intelectual de Jimmy Neutrón?",
        answers: ["241","240","242"],
        correctAnswer: "242",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/4181f6f7-32f1-4ce7-83f9-dd3ca2a9dc0e/13437181-726e-4944-8023-abc3367558c9.jpg"
    },
    {
     
        question: "¿Cómo se llaman los bebés de los Rugrats?",
        answers: [ "Didi, Carlitos,Betty,Fili, Lili", "Taffy,Luci,Carlitos,Tommy, Kimi  y Susie","Tommy,Carlitos,Fili,Lili,Dil,Kimi"],
        correctAnswer: "Tommy,Carlitos,Fili,Lili,Dil,Kimi",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/4181f6f7-32f1-4ce7-83f9-dd3ca2a9dc0e/36a3f00e-476d-4cd9-84f0-ac601864a5db.jpg"
    },
    {
		question: "¿Dónde tenía Dexter su laboratorio secreto?",
        answers: ["En la sala", "En el patio","En su habitación"],
        correctAnswer: "En su habitación",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/4181f6f7-32f1-4ce7-83f9-dd3ca2a9dc0e/1d2453fa-5bcc-4022-8e5b-648cec4b8744.jpg"
    },
    {	
		question: "¿Qué edad tiene Arnold?",
        answers: ["9", "10","8"],
        correctAnswer: "9",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/4181f6f7-32f1-4ce7-83f9-dd3ca2a9dc0e/5b806931-f455-45f6-8dcb-c946196a72d2.jpg"
    },
    {
		question: "¿Cuál es el nombre correcto de este personaje?",
        answers: ["Jhonny Bravo","Jonnhy Bravo","Johnny Bravo"],
        correctAnswer: "Johnny Bravo",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/4181f6f7-32f1-4ce7-83f9-dd3ca2a9dc0e/22ac6532-2e23-481d-bec8-4ea440bc32cc.jpg"
    },
    {
		question: "¿Cómo se llaman los miembros del Equipo Rocket?",
        answers: ["Otto,Ray,Trish y Sam", "Reggie,Sam,Otto y Twister","Sherry,Reggie Twister y tito"],
        correctAnswer: "Reggie,Sam,Otto y Twister",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/4181f6f7-32f1-4ce7-83f9-dd3ca2a9dc0e/ae89df88-8ad3-4d1c-82f8-d0d5a7886b41.jpg"
    },
    {
		question: "¿Cuál es el nombre de este dibujo animado?",
        answers: ["Rocko y sus amigos", "La vida moderna de Rocko","La familia de Rocko"],
        correctAnswer: "La vida moderna de Rocko",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/4181f6f7-32f1-4ce7-83f9-dd3ca2a9dc0e/d6282422-fe3a-4fbd-836a-31c87847268a.jpg"
    },
    {
		question: "¿De qué color tiene la lengua Ed?",
        answers: ["Verde", "Amarillo","Azul"],
        correctAnswer: "Azul",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/4181f6f7-32f1-4ce7-83f9-dd3ca2a9dc0e/fcd0ac8b-8899-4cf5-8048-d8b9aa54f0cd.jpg"
    },
 
    {
		question: "¿Cómo se llama este personaje de Los Supersónicos?",
        answers: ["Robocina", "Robotin","Robotina"],
        correctAnswer: "Robotina",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/4181f6f7-32f1-4ce7-83f9-dd3ca2a9dc0e/60238ae6-8953-4dc3-8c29-353dab9c0a10.jpg"
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