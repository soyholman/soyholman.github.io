var QUESTIONS = [
    {
        question: "Karate",
        answers: ["Rumania", "Japón","Malasia"],
        correctAnswer: "Japón",
        image: "https://th.bing.com/th/id/R.6409384815dddf8511756b0dd0d4d4db?rik=oy%2fWLU8SZUZosQ&riu=http%3a%2f%2fwww.canalgif.net%2fGifs-animados%2fDeportes%2fKarate%2fImagen-animada-Karate-15.gif&ehk=DUgMH2p6HHagWYDDSfaGzLQZsLH1x5AHtGUELNUwBHQ%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        question: "Wing Chun",
        answers: ["China", "Japón", "Surinam"],
        correctAnswer: "China",
        image: "https://th.bing.com/th/id/R.b48ff71921b7cc91628aa68b84e500b9?rik=11l1pIGR4YTgvg&pid=ImgRaw&r=0"
    },
    {
     
        question: "Judo",
        answers: [ "Turkmenistán", "Japón","Perú"],
        correctAnswer: "Japón",
        image: "https://78.media.tumblr.com/cd67fdd2d031ac991c5fdcbdf2940b3b/tumblr_ohzkcmpom71qbrivdo1_500.gif"
    },
    {
		question: "Kung Fu",
        answers: ["Japón","China","India"],
        correctAnswer: "China",
        image: "https://th.bing.com/th/id/R.47516542b7bacb8a789a8ba51c455dd3?rik=dmH4n3rVLZ9l4w&riu=http%3a%2f%2f24.media.tumblr.com%2f02ecd5fae2007239da32f30b8f3e0fed%2ftumblr_mok6x93kwA1s37tx6o1_400.gif&ehk=oK5I5srJyt04r%2b%2bS5MaCkWOyk8hw78ic9%2f0Pu1mDmtY%3d&risl=&pid=ImgRaw&r=0"
    },
    {	
		question: "Jiu-Jitsu",
        answers: ["Vietnam", "Japón","Bután"],
        correctAnswer: "Japón",
        image: "https://th.bing.com/th/id/R.6c4e46f786187038ffa21dd747295152?rik=m88VGYev6nxEmA&pid=ImgRaw&r=0"
    },
    {
		question: "Jeet Kune Do",
        answers: ["China y Japón", "Estados Unidos y Hong Kong", "Senegal y Nepal"],
        correctAnswer: "Estados Unidos y Hong Kong",
        image: "https://media1.tenor.com/images/a68597bfa3adb8507370d52040dc4784/tenor.gif?itemid=7480326"
    },
    {
		question: "Krav Magá",
        answers: ["Israel", "España ","Pakistán"],
        correctAnswer: "Israel",
        image: "https://hypescience.com/wp-content/uploads/2015/11/movimentos-de-autodefesa-krav-maga-4.gif"
    },
    {
		question: "Capoeira",
        answers: ["Angola", "Brasil", "Egipto"],
        correctAnswer: "Angola",
        image: "https://th.bing.com/th/id/R.6e980fe5b14099c29c27c67a1346a3ce?rik=yw4h4wdtLAZ9zw&pid=ImgRaw&r=0g"
    },
    {
		question: "Taekwondo",
        answers: ["Corea", "China","Japón"],
        correctAnswer: "Corea",
        image: "https://media.giphy.com/media/qezjp0kHJtHIA/giphy.gif"
    },
    {
		question: "Aikido ",
        answers: ["Japón", "Taiwán","Nepal"],
        correctAnswer: "Japón",
        image: "https://gifimage.net/wp-content/uploads/2018/11/child-aikido-throw-gif-2.gif"
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

                $("#imageTrivia").attr("src", "https://images.angelpub.com/2016/35/39703/wrong.gif");

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

        $("#message").css("display", "block");
        $("#timeLeft").css("display", "none");
        $("#message").text("CORRECTO");

        $("#imageTrivia").attr("src", "https://media1.tenor.com/images/c69fe60c4e179c1cf21726c224353de8/tenor.gif?itemid=11296495");

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
                showCorrectAnswer();
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