var QUESTIONS = [
    {
        question: "¿Para qué se utiliza un contador Geiger?",
        answers: ["Para medir los niveles de ruido","Para medir el nivel de agua","Para medir la radiación"],
        correctAnswer: "Para medir la radiación",
        image: "https://th.bing.com/th/id/R.b4bcc090c90f742a960623e35e0e7c73?rik=N9PonriTeRslYQ&riu=http%3a%2f%2fwww.moebius-bcn.com%2fwp-content%2fuploads%2f2012%2f09%2fGeiger-Counter-300x300.jpg&ehk=m8EOd2zos%2fQiRjAcp6D51S6xR9NWmMUpwBNxUvQZyqk%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
    },
    {
        question: "¿Cuál es el planeta más cercano a la Tierra?",
        answers: ["Marte", "Venus"],
        correctAnswer: "Venus",
        image: "https://th.bing.com/th/id/R.ce9101dd0f5053ad8ba4bf4adb0f09dd?rik=r1K334Mgu4WsYg&riu=http%3a%2f%2fi.giphy.com%2f3o72Fhfx9eyMQsqbL2.gif&ehk=7dk27KIotOyaflQldxrL4pXdJtYngHRXK80ScQlttAA%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        question: "¿Cuántas cuerdas tiene el violín típico?",
        answers: ["5", "4", "6"],
        correctAnswer: "4",
        image: "https://bestanimations.com/Music/Instruments/Violins/playing-violing-animated-gif-7.gif"
    }
    ,
    {
        question: "¿Qué personaje de la mitología griega convertía en oro todo lo que tocaba?",
        answers: ["Prometeo","Midas","Narciso"],
        correctAnswer: "Midas",
        image: "https://th.bing.com/th/id/OIP.nKhwSIs1pyn751E7Z9q2zwHaEy?pid=ImgDet&rs=1"
    }
    ,
    {
        question: "¿En qué año la Madre Teresa de Calcuta ganó el Premio Nobel de la Paz?",
        answers: ["1979","1978","1980"],
        correctAnswer: "1979",
        image: "https://th.bing.com/th/id/OIP.sCrHgjXSqlMC86YwPBTCXwHaFs?pid=ImgDet&rs=1"
    }
    ,
    {
        question: "¿Cuál es la capital de Islandia?",
        answers: ["Akureyri","Keflavik","Reikiavik"],
        correctAnswer: "Reikiavik",
        image: "https://th.bing.com/th/id/R.95fb2a9dc5e9d5399dae7157a7082e96?rik=vBS954gW9cnEiw&pid=ImgRaw&r=0"
    }
    ,
    {
        question: "¿En qué año terminó la Guerra Fría?",
        answers: ["1991","1992","1990"],
        correctAnswer: "1991",
        image: "https://th.bing.com/th/id/R.d63ec9291529031e4bd585ca4c35e10b?rik=If%2f7vZSzJmCZ1A&riu=http%3a%2f%2fwww.todoestudo.com.br%2fwp-content%2fuploads%2f2015%2f03%2feua-uniao-sovietica.gif&ehk=1rdj0zLK1t502IjugOI%2f1vultajm5tUyQLlrxZoSBZ4%3d&risl=&pid=ImgRaw&r=0"
    }
    ,
    {
        question: "¿En qué hemisferio de la Tierra está ubicado Honduras?",
        answers: ["Norte","Sur","Este"],
        correctAnswer: "Norte",
        image: "https://th.bing.com/th/id/R.36030caff46a69e648af90e8bdb4e0ed?rik=yaUVjuEgpjUAeA&riu=http%3a%2f%2fimg.webmensajes.com%2fhonduras%2f35.gif&ehk=OcjkRAg16aF%2bGf1XOBX67XDRn0lgnigUiaLgWwmjDHA%3d&risl=&pid=ImgRaw&r=0"
    }
    ,
    {
        question: "¿Cuál es la actual princesa de Asturias?",
        answers: ["Leonor de Borbón","Leonor de Aragón","Leonor de Castilla"],
        correctAnswer: "Leonor de Borbón",
        image: "https://th.bing.com/th/id/OIP._AWHKSeD6IsFkDPkY2S5wgHaHa?pid=ImgDet&rs=1"
    }
    ,
    {
        question: "¿Quién es el autor de esta obra?",
        answers: ["Edvard Munch","Caravaggio","Salvador Dalí"],
        correctAnswer: "Edvard Munch",
        image: "https://th.bing.com/th/id/OIP.s38c8zuprT5bEJBJhSfRmAHaEK?pid=ImgDet&rs=1"
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