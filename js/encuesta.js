var QUESTIONS = [
    {
        question: "En qué país se encuentra este punto de referencia?",
        answers: ["Ucrania", "Rumania", "Italia", "Francia"],
        correctAnswer: "Italia",
        image: "https://th.bing.com/th/id/OIP.MG4AyqHAEMuePVJz3Zen0QHaE8?w=292&h=194&c=7&r=0&o=5&pid=1.7"
    },
    {
        question: "En qué país se encuentra este punto de referencia?",
        answers: ["Estados Unidos", "Groenlandia", "Islandia", "Nepal"],
        correctAnswer: "Nepal",
        image: "https://th.bing.com/th/id/OIP.u3SX-hO82EN97udPbFKDBAHaE8?w=236&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
     
        question: "En qué país se encuentra este punto de referencia?",
        answers: ["Japón", "Bangladesh", "Indonesia", "Camboya"],
        correctAnswer: "Camboya",
        image: "https://th.bing.com/th/id/R.d7a3ce8b545ad69aae4988104d43484d?rik=Yi3%2bgqU1YSKYWw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-TzMw_1Tri9A%2fVHacW0Cx_SI%2fAAAAAAAAACU%2fr0E4JSU4mUY%2fs1600%2fadrian.jpg&ehk=hfD2ZVqiOJRU5aOFTXftvrsQX%2biPOY1aL7GCmPwhlfw%3d&risl=&pid=ImgRaw&r=0"
    },
    {
		question: "En qué país se encuentra este punto de referencia?",
        answers: ["Nicaragua", "Italia", "Panama", "Brasil"],
        correctAnswer: "Nicaragua",
        image: "https://th.bing.com/th/id/OIP.4Y5c0HALrurtijstBDenpgHaE8?pid=ImgDet&rs=1"
    },
    {	
		question: "En qué país se encuentra este punto de referencia?",
        answers: ["Alemania", "Serbia", "Venezuela", "Argentina"],
        correctAnswer: "Argentina",
        image: "https://th.bing.com/th/id/OIP.3n3iuYyQSM0cpu78cNlXYwHaEK?pid=ImgDet&rs=1"
    },
    {
		question: "En qué país se encuentra este punto de referencia?",
        answers: ["Venezuela", "Nicaragua", "Ghana", "Perú"],
        correctAnswer: "Venezuela",
        image: "https://th.bing.com/th/id/OIP.paiIrquskzORlFvdpDB4-AHaD_?pid=ImgDet&rs=1e"
    },
    {
		question: "En qué país se encuentra este punto de referencia?",
        answers: ["Bután", "Pakistán", "Rusia", "India"],
        correctAnswer: "Rusia",
        image: "https://th.bing.com/th/id/R.a3525f28b21f21ea945bc790dc1dece3?rik=xfGw8qNouw165g&pid=ImgRaw&r=0"
    },
    {
		question: "En qué país se encuentra este punto de referencia?",
        answers: ["Inglaterra", "Polonia", "Corea del Sur", "España"],
        correctAnswer: "Inglaterra",
        image: "https://th.bing.com/th/id/OIP.yjPM_xekj-eihvUZzEge4QHaEd?w=290&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
		question: "En qué país se encuentra este punto de referencia?",
        answers: ["Perú", "Chile", "Mexico", "Colombia"],
        correctAnswer: "Perú",
        image: "https://th.bing.com/th/id/OIP.cN_FoyBqvQbDW7bkzlJueQHaFY?w=211&h=180&c=7&r=0&o=5&pid=1.7e"
    },
    {
		question: "En qué país se encuentra este punto de referencia?",
        answers: ["Jordania", "Arabia Saudita", "Yemen", "Egipto"],
        correctAnswer: "Egipto",
        image: "https://th.bing.com/th/id/OIP.Wd76yRUJZJtaZHiJDdBOYgHaE8?pid=ImgDet&rs=1"
    },
    {
		question: "En qué país se encuentra este punto de referencia?",
        answers: ["Polonia", "Alemania", "Rusia", "Austria"],
        correctAnswer: "Polonia",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/08/78/23/87/shuttle-4-you-krakow.jpg"
    }
];

var correctAnswerElement;
var questionIndex = 0;
var timeLeft = 12;
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
            div.addClass("hover"); // Adds hover effect to each answer element
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