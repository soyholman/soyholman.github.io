var QUESTIONS = [
    {
        question: "¿Quién inventó la máquina de escribir?",
        answers: ["William Perkin","Carlos Glidden","Alexander Wood"],
        correctAnswer: "Carlos Glidden",
        image: "https://c.tenor.com/1sjlk_vExCEAAAAd/cantinflas-trabajando.gif"
    },
    {
        question: "¿Qué inventó el ingeniero David Edward Hughes?",
        answers: ["El micrófono", "La radio","Los audífonos"],
        correctAnswer: "El micrófono",
        image: "https://c.tenor.com/X73EqPfwAfIAAAAM/minion-any-questions-question.gif"
    },
    {
        question: "¿Quién descubrió las vitaminas en 1912?",
        answers: ["Tolbert Lanston", "Georges Leclanché","Casimir Funk"],
        correctAnswer: "Casimir Funk",
        image: "https://media1.giphy.com/media/L2lK6IhrZ2i2EMTckQ/giphy.gif"
    }
    ,
    {
        question: "¿Qué inventó Percy L. Spencer?",
        answers: ["El horno microondas", "La plancha","La nevera"],
        correctAnswer: "El horno microondas",
        image: "https://6469da.medialib.edu.glogster.com/yxgpHrGEUsCW4IJn3LMx/media/f7/f796e0ed760a958cd0e97e1bc3857f876ff09291/spencerp.jpg"
    }
    ,
    {
        question: "¿Quién inventó la cámara polaroid?",
        answers: ["George Eastman", "Edwin Hebert Land","Otto Lilienthal"],
        correctAnswer: "Edwin Hebert Land",
        image: "https://c.tenor.com/BELxvzX4bk4AAAAd/polaroid-pic-vintage.gif"
    }
    ,
    {
        question: "¿Qué inventó Ladislao Biro?",
        answers: ["El corrector", "El bolígrafo","El lápiz"],
        correctAnswer: "El bolígrafo",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Ladislao_Biro_Argentina_Circa_1978.JPG"
    }
    ,
    {
        question: "¿Quién descubrió la insulina?",
        answers: ["Valdemar Poulsen", "John James Rickard","James Dewar"],
        correctAnswer: "John James Rickard",
        image: "https://c.tenor.com/dNG3A4DR9JYAAAAM/2020-beetus.gif"
    }
    ,
    {
        question: "¿Quién inventó el aire acondicionado?",
        answers: ["Mary Anderson", "Willis Haviland Carrier","Willem Einthoven"],
        correctAnswer: "Willis Haviland Carrier",
        image: "https://i.pinimg.com/originals/91/53/04/9153042f566196e8222d8390094c0903.gif"
    }
    ,
    {
        question: "¿Qué inventó Ígor Sikorsky?",
        answers: ["El tren", "El helicóptero","El monopatín"],
        correctAnswer: "El helicóptero",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/b7ab63d5-71b2-4b00-8a9d-54286f8ce06b/7b48c29c-7d58-4e6d-afd1-9622cbae3c94.jpg"
    }
    ,
    {
        question: "¿Quién inventó la fotocopiadora?",
        answers: ["René Lorin", "Paul Ehrlich","Chester Carlson"],
        correctAnswer: "Chester Carlson",
        image: "https://thumbs.gfycat.com/SphericalDefiniteIsabellineshrike-size_restricted.gif"
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