    var QUESTIONS = [
    {
        question: "Te empezó a sangrar la nariz, ¿qué debes hacer?",
        answers: ["Inclinaré la cabeza hacia adelante y cerraré las alas de la nariz con los dedos"," Me pondré un algodón en las fosas nasales","Llevaré la cabeza hacia atrás para que la sangre deje de escurrir"],
        correctAnswer: "Inclinaré la cabeza hacia adelante y cerraré las alas de la nariz con los dedos",
        image: "https://media3.giphy.com/media/go3OUPg8pYvCw/200.gif"
    },
    {
        question: "¿Qué hacer si te lesionaste seriamente?",
        answers: ["Lavar la herida, eliminar los cuerpos extraños y aplicar una venda de gaza","No limpiar la herida y aplicar una venda de gaza que haga presión","Limpiar la herida con mertiolate o yodo"],
        correctAnswer: "No limpiar la herida y aplicar una venda de gaza que haga presión",
        image: "https://media4.giphy.com/media/ehankPc9FFdWnfOPBN/giphy.gif"
    },
    {
        question: "¿Qué debes hacer en caso de una quemadura?",
        answers: ["Mantener el área quemada en el agua fría y, después, aplicar una venda floja","¡Fácil! Según me enseñó mi abuela, hay que untar el área afectada con aceite o crema","Aplicar hielo a la quemadura"],
        correctAnswer: "Mantener el área quemada en el agua fría y, después, aplicar una venda floja",
        image: "https://i.pinimg.com/originals/d4/9d/d1/d49dd1adf0dad609c45a1d1e63d37f73.gif"
    }
    ,
    {
        question: "¿Qué debes hacer si una persona se desmaya?",
        answers: ["Voltear a la persona de lado"," Darle a oler amoníaco","Sacarle la lengua"],
        correctAnswer: "Voltear a la persona de lado",
        image: "http://2.bp.blogspot.com/-CgyQHBjI0n8/U4TkJK3QPII/AAAAAAAAEBs/adYlamBuNjo/s1600/desmayo.gif"
    }
    ,
    {
        question: "Te congelaste los dedos, ¿qué debes hacer?",
        answers: ["Cubrir la parte congelada del cuerpo","Frotarlos bien. Y si es con alcohol, mejor","Mantener las manos en agua caliente"],
        correctAnswer: "Cubrir la parte congelada del cuerpo",
        image: "https://c.tenor.com/14NTeoPGrKgAAAAC/jack-nicholson-frozen.gif"
    }
    ,
    {
        question: "¿Cómo ayudarle a una persona atragantada?",
        answers: ["Darle un pan duro","Inclinarla hacia adelante, sujetarla con los brazos y con un movimiento rápido presionarle el estómago","Darle unas palmadas en la espalda"],
        correctAnswer: "Inclinarla hacia adelante, sujetarla con los brazos y con un movimiento rápido presionarle el estómago",
        image: "https://c.tenor.com/IlZ2FuyDH5IAAAAM/toser-enchufetv.gif"
    }
    ,
    {
        question: "Tu amigo se cayó de una bicicleta y se dislocó una pierna, ¿qué harás?",
        answers: ["Me aseguraré de que la pierna quede inmóvil hasta que llegue la ambulancia","Intentaré enderezar la pierna y ponerle un torniquete","Intentaré acomodarla bien y fijar la pierna"],
        correctAnswer: "Me aseguraré de que la pierna quede inmóvil hasta que llegue la ambulancia",
        image: "https://c.tenor.com/65V05QYtEiQAAAAC/cycling-fail.gif"
    }
    ,
    {
        question: "¿Qué debes hacer en primer lugar en una fractura abierta?",
        answers: ["Inmovilizar la extremidad y aplicar un torniquete","Acomodar el hueso","Detener el sangrado"],
        correctAnswer: "Detener el sangrado",
        image: "https://j.gifs.com/vJag6X.gif"
    }
    ,
    {
        question: "¿Qué NO debes hacer al darle primeros auxilios a una persona electrocutada?",
        answers: ["Jalar al lesionado lejos del equipo bajo presión","Tocar con las manos desnudas al lesionado que está en el área afectada","Ponerte guantes de goma"],
        correctAnswer: "Tocar con las manos desnudas al lesionado que está en el área afectada",
        image: "https://media2.giphy.com/media/xUySTIzc2BkMmQ9Zo4/200.gif"
    }
    ,
    {
        question: "Eres testigo de un accidente. El conductor de uno de los autos perdió la conciencia. ¿Qué harás?",
        answers: ["Lo pondré en el asiento trasero e intentaré darle respiración boca a boca","Nada. Llamaré a una ambulancia y a la policía","Lo sacaré del auto"],
        correctAnswer: "Nada. Llamaré a una ambulancia y a la policía",
        image: "https://i.gifer.com/9J8n.gif"
    }
 
];

var correctAnswerElement;
var questionIndex = 0;
var timeLeft = 24;
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
                timeLeft = 24;
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
            timeLeft = 24;
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