var QUESTIONS = [
    {
        question: "¿Quién venció a Goliat?",
        answers: ["Sansón", "David", "Saul"],
        correctAnswer: "David",
        image: "https://media.giphy.com/media/R9AtQfEyKAPhm/giphy.gif"
    },
    {
        question: "¿Quién abrió el mar en dos?",
        answers: ["Moisés", "Abraham","Jesús"],
        correctAnswer: "Moisés",
        image: "https://4.bp.blogspot.com/-_vZBgYv0VHs/UXu7TOStu9I/AAAAAAAAADY/u7sHzMLLg9E/s1600/tumblr_m8vbqdvIgz1r68q57o1_250.gif"
    },
    {
     
        question: "¿Qué tarea le fue asignada a Noé?",
        answers: [ "Liberar a los israelitas de Egipto","Construir un arca", "Revelar los sueños del faraón"],
        correctAnswer: "Construir un arca",
        image: "https://th.bing.com/th/id/R.9efcee958eb1d8e76a60b6516acff74f?rik=6xfFGkJEFPc78g&riu=http%3a%2f%2fveracidadchannel.com%2f_site%2fwp-content%2fuploads%2f2019%2f09%2fp173f9jv0i5skg168gh1r88t9o1.gif&ehk=PRIpZx7IJwnJQIjxFfnL9himgHiBi8z5uNs585o8yjo%3d&risl=&pid=ImgRaw&r=0"
    },
    {
		question: "¿Qué mujer de la Biblia era bisabuela de David, y a su vez amaba devotamente a su suegra?",
        answers: ["Ester","Debora","Rut"],
        correctAnswer: "Rut",
        image: "https://th.bing.com/th/id/R.80b605b7e6ae9231723b89c02968f64e?rik=IVrnkITVsBjoiw&riu=http%3a%2f%2fetc.usf.edu%2fclipart%2f66000%2f66065%2f66065_ruth_naomi_lg.gif&ehk=AqT01HqkVI8vDEDD9ngVRcWLbQE3Wn9MYobOfTGcR8w%3d&risl=&pid=ImgRaw&r=0"
    },
    {	
		question: "¿A qué personaje de la Biblia un gran pez lo guarda en su vientre por tres días?",
        answers: ["Isaías", "Jonás", "Daniel"],
        correctAnswer: "Jonás",
        image: "https://i.pinimg.com/originals/74/fc/9f/74fc9fee4f2a2f4b80dcca4076213f68.jpg"
    },
    {
		question: "¿Quién de los siguientes personajes no es devorado por leones hambrientos, a pesar de haber estado en una fosa con ellos?",
        answers: ["Daniel", "José", "Job"],
        correctAnswer: "Daniel",
        image: "https://th.bing.com/th/id/OIP.CkVzTi31hz4YWKTK8RYs3AHaEK?pid=ImgDet&rs=1"
    },
    {
		question: "¿A qué edad Sara dio a luz a su primogénito?",
        answers: ["A los 300 años", "A los 50 años", "A los 90 años"],
        correctAnswer: "A los 90 años",
        image: "https://media.giphy.com/media/rE9mvz5nIfjeE/200.gif"
    },
    {
		question: "¿¿Dónde nació Jesús?",
        answers: ["Belén", "Edem", "Jerusalén"],
        correctAnswer: "Belén",
        image: "https://th.bing.com/th/id/OIP.4Phsk3ImMfF6phTHvnVSmgHaIP?pid=ImgDet&rs=1"
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