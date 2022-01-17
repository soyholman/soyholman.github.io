var QUESTIONS = [
    {
        question: "El órgano humano más grande ..",
        answers: ["Cerebro", "Piel", "Higado","Riñón"],
        correctAnswer: "Piel",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/582d7eae-2beb-4c9a-8c3f-1792a2dcb789/11ca6905-7cdc-4f0f-b57a-4fcc53a2d19b.jpg"
    },
    {
        question: "¿Cuántas cinturas tienen los seres humanos?",
        answers: ["1", "2","3", "4"],
        correctAnswer: "2",
        image: "https://4.bp.blogspot.com/-c46gwHmLDAg/TVg2tA43EVI/AAAAAAAAAL8/XFVLcwrlS78/s1600/Human+Anatomy.7.jpg"
    },
    {
     
        question: "¿Cuántos huesos conforman el cráneo humano?",
        answers: [ "4", "10", "8","5"],
        correctAnswer: "8",
        image: "https://www.publicdomainpictures.net/pictures/250000/nahled/human-anatomy-1517256616AlU.jpg"
    },
    {
		question: "La “campanilla” de la boca recibe el nombre de…",
        answers: ["Úgula","Úvula", "Únula","Úbula"],
        correctAnswer: "Úvula",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1566666772/rwals7je5wah3029woja.png"
    },
    {	
		question: "¿Qué papilas gustativas son las receptoras del sabor dulce?",
        answers: ["Foliadas", "Caliciformes", "Fungiformes","Espungiformes"],
        correctAnswer: "Caliciformes",
        image: "https://images.fineartamerica.com/images-medium-large-5/tongue-anatomy-artwork-henning-dalhoff.jpg"
    },
    {
		question: "El gastrocnemio es un músculo que queda ubicado en...?",
        answers: ["El estomago", "El corazón", "La pierna","Las manos"],
        correctAnswer: "La pierna",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1566668404/rjshgd5zq3khzapgadzr.jpg"
    },
    {
		question: "La membrana que rodea y protege al corazón externamente es el…",
        answers: ["Pericardio", "Miocardio", "Endocardio","Cetocardio"],
        correctAnswer: "Pericardio",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1566666940/qrmpbpsckm8s3cycxik1.jpg"
    },
    {
		question: "La coroides es una membrana presente en el…",
        answers: ["Ojo", "Cerebro", "Riñón","Higado"],
        correctAnswer: "Ojo",
        image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/human-anatomy-of-head-with-skull-eye-pixelchaos.jpg"
    },
    {
		question: "El trapezoide es un hueso que está en la…",
        answers: ["Mano", "Escapula", "Pierna","Hombros"],
        correctAnswer: "Mano",
        image: "https://th.bing.com/th/id/OIP.sz_6_dgwB3UGXpx7K5APMwAAAA?pid=ImgDet&w=450&h=600&rs=1"
    },
    {
		question: "La lúnula es una parte de… ",
        answers: ["El diente", "La Uña", "El oido","El codo"],
        correctAnswer: "La Uña",
        image: "https://th.bing.com/th/id/R.9f2d9da7c8a70c8bdab8f8129a89bf04?rik=RYiaTf2V%2bX%2fdqg&riu=http%3a%2f%2fcode7700.com%2fimages%2fphysiology_biology_q_and_a.jpg&ehk=4WlH1oQ6JoHVmPTFM%2bVnFFJduZSNejuCI1av3UcatJI%3d&risl=&pid=ImgRaw&r=0"
    },
    {
		question: "¿Cuántos dientes generalmente tiene un humano adulto?",
        answers: ["28", "30", "32","40"],
        correctAnswer: "32",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1566668083/pywgj5dicvxmwx0uqwlj.jpg"
    },
    {
		question: "¿Qué pulmón es más pequeño?",
        answers: ["Derecho", "Izquierdo"],
        correctAnswer: "Izquierdo",
        image: "https://preview.free3d.com/img/2017/10/1870533495437132975/2rc5t9rd-900.jpg"
    },
    {
		question: "¿Con qué otro nombre se conoce a la glándula pituitaria?",
        answers: ["Hipófisis", "Hipocampo","Hipotálamo","Necrotálamo"],
        correctAnswer: "Hipófisis",
        image: "https://pymstatic.com/3914/conversions/glandula-pituitaria-hipofisis-social.jpg"
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