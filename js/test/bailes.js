var QUESTIONS = [
    {
        question: "El joropo es un baile folclórico de…",
        answers: ["Ecuador","Perú","Venezuela","Colombia"],
        correctAnswer: "Venezuela",
        image: "hhttps://i.makeagif.com/media/11-29-2015/-XY-5c.gif",
        text:"El joropo es un género musical y baile perteneciente al folclor venezolano, pero de origen español. Es un ritmo típico de la cultura llanera y tiene varias vertientes, como el joropo oriental y el joropo tuyero."
    },
    {
        question: "¿De dónde es la tarantela?",
        answers: ["Sur de Italia","Norte de Italia","Oeste de Italia","Ninguna de las anteriores"],
        correctAnswer: "Sur de Italia",
        text:"La tarantela es un baile famoso en el sur de Italia, específicamente de la ciudad de Nápoles. Hay varias teorías acerca de su origen y surgimiento. Una de ellas es que la danza imita la forma de espantar a una tarántula, común en la zona mediterránea.",
        image: "https://c.tenor.com/ua2MU92ui7gAAAAC/italian-traditional-dance-taranta.gif"
    },
    {
     
        question: "¿De dónde proviene el kizomba?",
        answers: [ "Zambia","Surinam","Angola" ],
        correctAnswer: "Angola",
        text:"El kizomba es un género musical y un baile originario de Angola, resultante de una mezcla de ritmos como el ‘zouk’ (de las Antillas Francesas) y la ‘semba’ (originaria de África).",

        image: "https://media0.giphy.com/media/zcrduQTZjawiA/giphy.gif"
    },
    {
		question: "¿De dónde es originalmente el danzón?",
        answers: ["Cuba","Puerto Rico","República Dominicana"],
        correctAnswer: "Cuba",
        text:"El danzón es un baile de origen cubano, que surge como vertiente de un baile denominado danza. Se le atribuye su origen al compositor Miguel Faílde.",
        image: "https://media4.giphy.com/media/3o6wrpuU5dmc1SOlVK/200.gif"
    },
    {	
		question: "La polca es originaria de…",
        answers: ["Austria", "Rumanía","Checoslovaquia","República Checa"],
        correctAnswer: "República Checa",
        text:"La polca proviene de la República Checa, específicamente de la región de Bohemia. Es una danza y un género musical muy popular en países latinoamericanos como Uruguay, Paraguay y Argentina.",
        image: "https://c.tenor.com/hRPYq6_GSC0AAAAC/polka-polka-dance.gif"
    },
    {
		question: "¿De dónde viene el baile denominado pericón?",
        answers: ["Paraguay y Chile","Argentina, Uruguay, Paraguay y Chile","Argentina y Uruguay","Ninguno de las anteriores"],
        correctAnswer: "Argentina, Uruguay, Paraguay y Chile",
        text:"El pericón es un baile folclórico. Es típica de Argentina, Chile, Uruguay y Paraguay. Su origen es discutido, aunque muchos estudiosos se guían hacia la hipótesis de que el baile surge de la contradanza.",
        image: "https://rodriguezfrassa.files.wordpress.com/2013/03/pericon-del-centenario.jpg"
    },
    {
		question: "La bachata nace en…",
        answers: ["República Dominicana","Panamá","Puerto Rico","Ninguno de las anteriores"],
        correctAnswer: "República Dominicana",
        text:"Aunque la bachata es un género musical y un baile nacido en República Dominicana, goza de una popularidad inmensa en casi todos los países hispanohablantes y Estados Unidos.",
        image: "https://i.pinimg.com/originals/ef/2d/d4/ef2dd49042745af37e9fe86018c78cbb.gif"
    },
    {
		question: "El zaouli es una danza africana, específicamente de…",
        answers: ["Camerún","Ghana","Costa de Marfil","Sudáfrica"],
        correctAnswer: "Costa de Marfil",
        text:"El zaouli es una danza proveniente de Costa de Marfil. Se basa en mover las piernas y los pies de forma rápida, sin mover el resto de las extremidades.",
        image: "https://thumbs.gfycat.com/DisfiguredLateGoldenmantledgroundsquirrel-size_restricted.gif"
    }
    ,
    {
		question: "El jopak proviene de…",
        answers: ["Rusia","Suecia","Ucrania"],
        correctAnswer: "Ucrania",
        text:"El jopak es un baile popular de Kiev, Ucrania. Su nombre proviene de la palabra ‘¡jop!’, que pronuncian al bailar y especialmente al saltar.",
        image: "https://thumbs.gfycat.com/AbsoluteBowedDutchshepherddog-max-1mb.gif"
    }
    ,
    {
		question: "¿De dónde es la danza ‘kathakali’?",
        answers: ["Pakistán","Camboya","India"],
        correctAnswer: "India",
        text:"El kathakali es originario de la India. Es una danza que tiene elementos teatrales y la mayoría de los personajes son interpretados por hombres.",
        image: "https://thumbs.gfycat.com/NecessaryDelightfulChickadee-size_restricted.gif"
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

       

            if ($(this).text() === correctAnswerElement.text()) {
                resetIntervalTimer();
                correct++;
                showCorrectAnswer();
                

            } else {
               
    
                resetIntervalTimer();
                    Swal.fire({
                        icon: 'error',
                        title: 'Respuesta Incorrecta',
                      html: '<small><p>'+QUESTIONS[questionIndex].text+'<p></strong>',
                     footer: '<strong>Respuesta correcta:<p style="color:mediumseagreen;justify-content: center;">'+QUESTIONS[questionIndex].correctAnswer+'<p> </strong>',

                     
                      
              
                      }).then(function(){
                     
                     
                          incorrect++;
                      
                        $(this).addClass("wrong");
                        $(this).append("<span> &#10008;</span>");
                        $(this).siblings().not(correctAnswerElement).addClass("wrong");
        
                        correctAnswerElement.append("<span> &#10004;</span>");
                        correctAnswerElement.addClass("correct");
        
                        $("#message").css("display", "block");
                        $("#message").css("background", "red");
                        $("#timeLeft").css("display", "none");
                        $("#message").text("INCORRECTO");
        
                        // $("#imageTrivia").attr("src", "https://images.angelpub.com/2016/35/39703/wrong.gif");
    
                      });
                      
                

            }

            $(this).parent().children().off("click"); // Prevent click event
            $("#answers").children().removeClass("hover"); // Turn off hover effect

        });

    }

    // Function shows the correct trivia answer
    function showCorrectAnswer() {

        // $("#answers").children().not(correctAnswerElement).addClass("wrong");
        // correctAnswerElement.append("<span> &#10004;</span>");
        // correctAnswerElement.addClass("correct");

        // $("#answers").children().removeClass("hover");
        // $("#answers").children().off("click");

        // $("#message").css("display", "block");
        // $("#timer").css("display", "block");
        // $("#message").text("CORRECTO");

        // $("#imageTrivia").attr("src", "https://c.tenor.com/BntXpMlrGuEAAAAC/check-correct.gif");
        Swal.fire({
           
            icon: 'success',
            title: 'Correcto',
            showConfirmButton: false,
            timer: 1600
          })

    }

    // Function creates a countdown which is display on HTML
    // If timeLeft variable reach zero, correct answer shows up
    // and then wait for 4 seconds to restart
    function intervalTimer() {

        timer = setInterval(function () {

          
         

            if (timeLeft == 0) {
                incorrect++;
                showCorrectAnswer();
                clearInterval(timer);
              
                $("#timer").css("display", "none");
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
   
			startGame();
            $("#message").css("display", "none");
            $("#timer").css("display", "block");
            $("#timeLeft").css("display", "block");
          
            $("#imageTrivia").attr("src",QUESTIONS[questionIndex].image);
        

        }, 2000);

    }

    function resetInervalfalse(){

        questionIndex++;
   
        startGame();
        $("#message").css("display", "none");

        $("#timeLeft").css("display", "block");
      
        $("#imageTrivia").attr("src",QUESTIONS[questionIndex].image);
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
var firebaseref=firebase.database().ref('Test/'+document.getElementById('Titles').textContent+'/'+data_carpet+'/'+user.displayName);
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