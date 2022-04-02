var QUESTIONS = [
    {
        question: "¿Cuál es la arteria más grande del cuerpo?",
        answers: ["Carotida","Femoral","Yugular","Aorta"],
        correctAnswer: "Aorta",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/4e252b71-73b9-437f-8695-7cb507b4b904/4d42be66-94d3-4099-8ee5-1c85dfb7b3ae.jpg"
       
    },
    {
        question: "¿Cómo se conoce a la capa superior de la piel?",
        answers: ["Hipodermis","Epidermis","Dermis"],
        correctAnswer: "Epidermis",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/4e252b71-73b9-437f-8695-7cb507b4b904/c2065f46-e2e1-49fd-b338-755954ffa45f.jpg"
    },
    {
     
        question: "¿Cómo se llama este hueso?",
        answers: [ "Femur","Tibia","Peroné","Humero" ],
        correctAnswer: "Femur",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/4e252b71-73b9-437f-8695-7cb507b4b904/7435c73d-99aa-4c1e-9787-eb2595d4bc60.jpg"
    },
    {
		question: "Identifica al número 4",
        answers: ["Prostata","Testiculo","Vejiga"],
        correctAnswer: "Prostata",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/4e252b71-73b9-437f-8695-7cb507b4b904/d35fe092-e878-4aba-8a15-1b22b82da29b.jpg"
    },
    {	
		question: "El sistema linfántico crea",
        answers: ["Globulos blancos","plaquetas","Globulos rojos"],
        correctAnswer: "Globulos blancos",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/4e252b71-73b9-437f-8695-7cb507b4b904/9e2bcd2a-5431-4d65-895f-2dd5337fe6cb.jpg"
    },
    {
		question: "¿Cuál es el tipo de sangre más común?",
        answers: ["B+","0-","0+","AB-"],
        correctAnswer: "0+",
        image: "https://images.unsplash.com/photo-1566410845311-1201aefbee6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
		question: "¿Cuántos músculos controlan tus ojos?",
        answers: ["25","6","9","12"],
        correctAnswer: "6",
        image: "https://images.unsplash.com/photo-1483519173755-be893fab1f46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=908&q=80"
    },
    {
		question: "¿Cuál es el único organo que puede regenerarse?",
        answers: ["Cerebro","Corazón","Pulmones","Higado"],
        correctAnswer: "Higado",
        image: "https://images.unsplash.com/photo-1525270184974-93ddafe2c9b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }
    ,
    {
		question: "¿Qué hace que nuestro cerebro sea más grande que el de la mayoría de mamiferos?",
        answers: ["Cerebelo","Corteza cerebral","Lobulo paretal","Hipotálamo"],
        correctAnswer: "Corteza cerebral",
        image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
    }
    ,
    {
		question: "¿Qué tiene más huesos?",
        answers: ["Mano","Pie"],
        correctAnswer: "Mano",
        image: "https://images.unsplash.com/photo-1539814858141-928517f6afd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    }
    ,
    {
		question: "¿Cuántas vertebras tiene el cuerpo humano?",
        answers: ["33","39","26","45"],
        correctAnswer: "33",
        image: "https://images.unsplash.com/photo-1615798581999-3f6147a2f94b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    }
    ,
    {
		question: "¿Qué es el duodeno?",
        answers: ["La parte del intestino grueso que se une al estómago","El intestino delgado","La última parte del estómago","La primera porción del intestino delgado"],
        correctAnswer: "La primera porción del intestino delgado",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/4e252b71-73b9-437f-8695-7cb507b4b904/5c46b7ec-ebf8-4a52-a844-25693401f02b.jpg"
    }
    ,
    {
		question: "¿Cómo llegan a todo tu cuerpo los nutrientes que resultan de la digestión?",
        answers: ["A través de la sangre","Por el estómago","A través de las mitocondrias","Por el intestino grueso"],
        correctAnswer: "A través de la sangre",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/4e252b71-73b9-437f-8695-7cb507b4b904/5c46b7ec-ebf8-4a52-a844-25693401f02b.jpg"
    }  ,
    {
		question: "¿Cómo se llama el fluido claro y húmedo que está situado detrás de la córnea?",
        answers: ["Humor vítreo","Humor acuoso","Humor cristalino","Humor ocular"],
        correctAnswer: "Humor acuoso",
        image: "https://images.unsplash.com/photo-1565230698474-2a8a500c35cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=487&q=80"
    }
    ,
    {
		question: "¿Cuál es el mayor organo del cuerpo humano?",
        answers: ["Piel","Cerebro","Higado","Pulmones"],
        correctAnswer: "Piel",
        image: "https://images.unsplash.com/photo-1515101659865-0902ffaaa6c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
    }
    ,
    {
		question: "¿Cuál es el mayor músculo del cuerpo humano?",
        answers: ["Sartorio","Dorsal ancho","Biceps","Glúteo Mayor"],
        correctAnswer: "Glúteo Mayor",
        image: "https://images.unsplash.com/photo-1629301771443-ea9ee4aee526?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }
    ,
    {
		question: "¿Cómo se llaman las dos cámaras inferiores del corazón humano? ",
        answers: ["Aurículas","Ventrículos"],
        correctAnswer: "Ventrículos",
        image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    }
    ,
    {
		question: "¿Cómo se llama esta parte del cuerpo humano?",
        answers: ["Laringe","Traquea","Tiroides","Esófago"],
        correctAnswer: "Laringe",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/4e252b71-73b9-437f-8695-7cb507b4b904/e39c1a51-f8a7-4327-80ae-9078ad5abd46.jpg"
    } ,
    {
        question: "¿Cuántos huesos tiene un cuerpo humano adulto?",
        answers: ["206","114","212","300"],
        correctAnswer: "206",
        image: "https://images.unsplash.com/photo-1638871735143-4d16a2f15ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
    }
    ,
    {
        question: "El cabello y las uñas siguen creciendo después de morir",
        answers: ["Falso","Verdadero"],
        correctAnswer: "Falso",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/4e252b71-73b9-437f-8695-7cb507b4b904/321ebeae-7460-461c-ab85-9e4e0b7f5e5b.jpg"
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

                // $("#message").css("display", "block");
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