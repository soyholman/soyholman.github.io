var QUESTIONS = [
    {
        question: "Un ‘balfín’ es la mezcla de un…",
        answers: ["Un delfín nariz de botella hembra y una orca negra macho", "Un delfín común macho y una orca pigmea"],
        correctAnswer: "Un delfín nariz de botella hembra y una orca negra macho",
        image: "https://th.bing.com/th/id/OIP.D9T99T6q9lSgL67f-nhNVQHaD4?pid=ImgDet&rs=1"
    },
    {
        question: "Un ‘cama’ es la mezcla de…",
        answers: ["Un camello hembra y un caballo macho","Un dromedario macho y una llama hembra"],
        correctAnswer: "Un dromedario macho y una llama hembra",
        image: "https://th.bing.com/th/id/R.86ea5b3c50cbeda0d145a2ee81bb15e5?rik=a19TQLB7YhlfqQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-c09Lhutce7I%2fUdiLll_81OI%2fAAAAAAAAEMk%2f3Z2lBmHGALY%2fs1600%2fcama%2bhibrido%2bcammello%2bmas%2bllama.jpg&ehk=N77txF1%2bYy2vVxLA8ONcgyh2OpYIeXDjc60lzITLfeE%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
    },
    {
     
        question: "Una ‘mula’ es la mezcla de…",
        answers: [ "Una yegua y un burro", "Un buey y una burra"],
        correctAnswer: "Una yegua y un burro",
        image: "https://elcampesino.co/wp-content/uploads/2015/08/Burritu.jpg"
    },
    {
		question: "Una leona y un tigre macho criados en cautiverio dan como resultado un…",
        answers: ["Tigón", "Ligre"],
        correctAnswer: "Tigón",
        image: "https://th.bing.com/th/id/OIP.NW-u-exkzVuzVz0_TV06owAAAA?pid=ImgDet&rs=1"
    },
    {	
		question: "'Motty' fue el único híbrido comprobado de ...",
        answers: ["Un orangután y un mono tití", "Un elefante asiático y uno africano"],
        correctAnswer: "Un elefante asiático y uno africano",
        image: "https://th.bing.com/th/id/R.be9ff22d81a7e33721e3625705be2a66?rik=%2byUgnMrYyvD4TQ&riu=http%3a%2f%2fwww.todopaisajes.com%2fImagenes%2fatardecer-en-la-sabana.jpg&ehk=2SaKnjVIqhtzDbValhHwaIaw4xmHp8CNWa%2b4Yo1HAbM%3d&risl=&pid=ImgRaw&r=0"
    },
    {
		question: "Un 'grolar' es la mezcla de..",
        answers: ["Un oso pardo y oso polar","Un oso negro y un oso polar"],
        correctAnswer: "Un oso pardo y oso polar",
        image: "https://th.bing.com/th/id/OIP.GZc07fZggSxwsMgAaRxKmQHaFH?pid=ImgDet&rs=1"
    },
    {
		question: "Un 'perro lobo checoslovaco' es una mezcla de...",
        answers: ["Un pastor alemán y un lobo europeo", "Un lobo blanco y un pastor ovejero"],
        correctAnswer: "Un pastor alemán y un lobo europeo",
        image: "https://th.bing.com/th/id/R.ef51d0f8b25de5358a4d436714565e57?rik=EnAHezLxSZTFOA&riu=http%3a%2f%2fperrosycachorros.net%2fwp-content%2fuploads%2f2016%2f07%2fPerro-Lobo-Checoslovaco.jpg&ehk=h3lb49NI0kdFoYeWnm8HNOq25hWCO2DLUVD5RPZG628%3d&risl=&pid=ImgRaw&r=0"
    },
    {
		question: "Un 'zubrón' es una mezcla de..",
        answers: ["Una vaca y un bisonte europeo", "Una cebra y un asno"],
        correctAnswer: "Una vaca y un bisonte europeo",
        image: "https://th.bing.com/th/id/R.d51f30e10cbe08a4e660ccf670555b23?rik=ynDD4xebqxC4tA&riu=http%3a%2f%2fep00.epimg.net%2fccaa%2fimagenes%2f2012%2f03%2f20%2fgalicia%2f1332275936_017921_1332276305_noticia_normal.jpg&ehk=Hp6s1iTrtxnXTobuHMHaukUt183WO0REA4a7noTqNYA%3d&risl=&pid=ImgRaw&r=0"
    },
    {
		question: "Un 'burdégano' es la mezcla de..",
        answers: ["Un caballo y una asna", "Un yegua y un asno"],
        correctAnswer: "Un caballo y una asna",
        image: "https://th.bing.com/th/id/R.d76163e9ecb25a6b63625f86019868a3?rik=uryFtsYe4eihuw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-ONcFbEChaMY%2fTVpNQgSBhxI%2fAAAAAAAAADA%2fLJ4eXWDLciA%2fs1600%2f14256665%5b1%5d.jpg&ehk=fTQNrfz6WLz6YYqZQoWPOReCqCNzZ141kehp2WX9EbE%3d&risl=&pid=ImgRaw&r=0"
    },
 
    {
		question: "Un 'Bengala' es la mezcla de",
        answers: ["Un tigre de bengala y un tigre blanco", "Un gato doméstico y un gato leopardo"],
        correctAnswer: "Un gato doméstico y un gato leopardo",
        image: "https://th.bing.com/th/id/OIP.K8k8DGjVBAQy11jujq1LHgHaFh?pid=ImgDet&rs=1"
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