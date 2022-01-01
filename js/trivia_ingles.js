var QUESTIONS = [
    {
        question: "Again, pick the sentence with the correct word order.",
        answers: ["Have shouldn’t I been so friendly in high school.", "In high school I have been shouldn’t so friendly.","I shouldn’t have been so friendly in high school."],
        correctAnswer: "I shouldn’t have been so friendly in high school.",
        image: "https://wallpapercave.com/wp/wp4442388.png"
    },
    {
        question: "Pick the sentence with the correct word order.",
        answers: ["Never work I on Sundays.", "I never work on Sundays.","Never work I on Sundays."],
        correctAnswer: "I never work on Sundays.",
        image: "https://www.qs.com/wp-content/uploads/2015/07/English-Student.png"
    },
    {
     
        question: "These days chat rooms ______ by universities to host student discussions.",
        answers: [ "are used", "are been used", "are being used"],
        correctAnswer: "are being used",
        image: "https://images.agreatertown.com/image3427355.png"
    },
    {
		question: "If Akiko _____ for directions, we ______ the streets looking for the restaurant now.",
        answers: ["hadn’t asked – would be wandering", "haven’t asked – would be wandering","asked – would wandering"],
        correctAnswer: "hadn’t asked – would be wandering",
        image: "https://ihcairoeg.com/wp-content/uploads/2020/04/study-english.jpg"
    },
    {	
		question: "He was frightened but he kept _____",
        answers: ["walking","walk","to walk"],
        correctAnswer: "walking",
        image: "http://darrowmillerandfriends.com/wp-content/uploads/2016/04/puzzled-student.png"
    },
    {
		question: "When I told Jerry that I’d had an accident with his car, he _____.",
        answers: ["blew up","blow up","blown up"],
        correctAnswer: "blew up",
        image: "https://s3.envato.com/files/324450467/envato44566.jpg"
    },
    {
		question: "The first thing ___ bugged me was the people on the bus ___ played loud music during the whole ride.",
        answers: ["who – which","that – which","that – who"],
        correctAnswer: "that – who",
        image: "https://www.english.com/blog/wp-content/uploads/2020/10/Readiness-test-blog-banner-01.png"
    },
    {
		question: "He didn’t mind _____ through the forest alone.",
        answers: ["going", "go","to go"],
        correctAnswer: "going",
        image: "https://s3-eu-west-1.amazonaws.com/eflanguagesblog/wp-content/uploads/2020/05/06094626/which_English_exam_hero.jpg"
    },
    {
		question: "___________________ this letter for an hour.",
        answers: ["I have written","I have been writing","I been written"],
        correctAnswer: "I have been writing",
        image: "https://www.thelawyerportal.com/wp-content/uploads/2018/05/GettyImages-902787158.jpg"
    },
    {
		question: "____ I stay at home watching TV, I ____ watch ‘Stranger Things’ on Netflix.",
        answers: ["If – see", "When – will be","If – will"],
        correctAnswer: "If – will",
        image: "https://images.moneycontrol.com/static-mcnews/2020/05/Online-exam-770x433.jpg?impolicy=website&width=770&height=431"
    },
    {
		question: "Miss Moore: “They’ll make a lovely couple”. Report this sentence.",
        answers: ["Miss Moore said that they made a lovely couple", "Miss Moore said that they would make a lovely couple","Miss Moore said that they had made a lovely couple"],
        correctAnswer: "Miss Moore said that they would make a lovely couple",
        image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202104/stressed_student_1200x768.jpeg?7yjlzHi171SG.N.BC5aQYgxPxay5M_kX&size=770:433"
    },
    {
		question: "Keep _____ for the keys. They have to be somewhere.",
        answers: ["Look up", "Looked for","Looking for"],
        correctAnswer: "Looking for",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmK1tJ_YP7O5Ao8fSCk3PXT5IB8mbNRgcBu_yb91IstMxQy8fTi8ZfoQ4t2MziYY_ZE3M&usqp=CAU"
    }
];

var correctAnswerElement;
var questionIndex = 0;
var timeLeft = 30;
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
                timeLeft = 30;
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
            timeLeft =30;
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