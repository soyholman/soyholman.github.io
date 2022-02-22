var QUESTIONS = [
    {
        question: "¿De qué país es emblema el castor?",
        answers: ["Canadá", "Noruega", "Francia"],
        correctAnswer: "Canadá",
        image: "https://c.tenor.com/cOnxTqFSldoAAAAC/castor-maisfermezlaaa.gif"
    },
    {
        question: "¿De qué país es emblema el lobo de tundra?",
        answers: ["Groenlandia", "Islandia","Rusia"],
        correctAnswer: "Rusia",
        image: "https://acegif.com/wp-content/gif/howling-wolf-23.gif"
    },
    {
     
        question: "¿De qué país es emblema el fénix?",
        answers: [ "Rumania","Grecia", "Turkmenistán"],
        correctAnswer: "Grecia",
        image: "https://phoneky.co.uk/thumbs/screensavers/down/misc/avefenix_2hsvu6cl.gif"
    },
    {
		question: "¿De qué país es emblema el oso panda gigante?",
        answers: ["Nepal","Mongolia","China"],
        correctAnswer: "China",
        image: "https://i.pinimg.com/originals/bd/7f/86/bd7f86118bf3db117f2440d336113ac8.gif"
    },
    {	
		question: "¿De qué país es emblema la vicuña?",
        answers: ["Perú", "Ecuador", "Chile"],
        correctAnswer: "Perú",
        image: "https://i.gifer.com/origin/88/88c7dd9aaf7d885feda9acf4a3208d6a.gif"
    },
    {
		question: "¿De qué país es emblema el dragón de Komodo?",
        answers: ["Vietnam", "Indonesia", "Nepal"],
        correctAnswer: "Indonesia",
        image: "https://c.tenor.com/gIzmfcS1-rcAAAAC/komodo-wild-animals.gif"
    },
    {
		question: "¿De qué país es emblema el unicornio?",
        answers: ["Inglaterra", "Suecia", "Escocia"],
        correctAnswer: "Escocia",
        image: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1348,w_2400,x_0,y_386/f_auto,q_auto,w_1100/v1607526035/shape/mentalfloss/638775-wikimedia-unicorn.jpg"
    },
    {
		question: "¿De qué país es emblema el oso frontino?",
        answers: ["Venezuela", "Colombia", "Surinam"],
        correctAnswer: "Venezuela",
        image: "https://i.pinimg.com/originals/09/5f/85/095f85b75db8cd5cb3ff746090643fbc.jpg"
    },
    
    {
		question: "¿De qué país es emblema el perro de San Bernardo?",
        answers: ["Noruega", "Suecia", "Suiza"],
        correctAnswer: "Suiza",
        image: "https://c.tenor.com/HfiCZ0jz6d4AAAAC/dog-tongue.gif"
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