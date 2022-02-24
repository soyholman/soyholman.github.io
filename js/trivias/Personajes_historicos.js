var QUESTIONS = [
    {
        question: "1/20",
        answers: ["Napoleón Bonaparte","Luis XVI"],
        correctAnswer: "Napoleón Bonaparte",
        image: "https://c.tenor.com/rxvHL9J8t0oAAAAd/napoleon-bonaparte-singing.gif"
    },
    {
        question: "2/20",
        answers: ["Willian Shakespeare","Dante Alighieri"],
        correctAnswer: "Willian Shakespeare",
        image: "https://media4.giphy.com/media/oveqQA2LxpwYg/giphy.gif"
    },
    {
        question: "3/20",
        answers: ["Wolfgang Amadeus Mozart","George Washington" ],
        correctAnswer: "Wolfgang Amadeus Mozart",
        image: "https://c.tenor.com/rEJ7NFj5Os4AAAAC/mozart-wink.gif"
    }
    ,
    {
        question: "4/20",
        answers: ["Luis XVI","Enrique VII" ],
        correctAnswer: "Enrique VII",
        image: "https://i0.wp.com/www.mavipastor.com/wp-content/uploads/2020/03/enrique-viii-retrato-de-hans_holbein_el-joven.jpg?fit=893%2C1024&ssl=1"
    }
    ,
    {
        question: "5/20",
        answers: ["Aristóteles","Homero"],
        correctAnswer: "Aristóteles",
        image: "https://www.abramoscomillas.com/images/aristotelesbiografia205x232.jpg?crc=3931880477"
    }
    ,
    {
        question: "6/20",
        answers: ["Atila","Julio Cesar"],
        correctAnswer: "Julio Cesar",
        image: "https://media.vozpopuli.com/2021/12/11/caesar-by-rubens-e1639234694388.jpg"
    }
    ,
    {
        question: "7/20",
        answers: ["Marco Polo","Cristóbal Colón"],
        correctAnswer: "Cristóbal Colón",
        image: "https://media.giphy.com/media/T9Q2NTOaP3mQU/giphy.gif"
    }
    ,
    {
        question: "8/20",
        answers: ["Julio Cesar","Alejandro Magno"],
        correctAnswer: "Alejandro Magno",
        image: "https://www.biografiasyvidas.com/biografia/a/fotos/alejandro_magno_6.jpg"
    }
    ,
    {
        question: "9/20",
        answers: ["René Descartes","Juana de Arco"],
        correctAnswer: "Juana de Arco",
        image: "https://www.radioestrelladelmar.org/wp-content/uploads/2018/05/Piffard_Harold_H_Joan_Of_Arc.jpg"
    }
    ,
    {
        question: "10/20",
        answers: ["Augusto","Leonardo da Vinci"],
        correctAnswer: "Leonardo da Vinci",
        image: "http://3.bp.blogspot.com/-yUwAXXJHZp8/UTBivcFpB1I/AAAAAAAAGn0/qylKzdZ-65M/s1600/portrait+leonardo+da+vinci+renacimiento+renaissance+pintor+495.jpg"
    }
    ,
    {
        question: "11/20",
        answers: ["Genghis Khan","Sun Tzu"],
        correctAnswer: "Genghis Khan",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/YuanEmperorAlbumGenghisPortrait.jpg/245px-YuanEmperorAlbumGenghisPortrait.jpg"
    }
    ,
    {
        question: "12/20",
        answers: ["Galileo Galilei","Friedrich Nietzsche"],
        correctAnswer: "Galileo Galilei",
        image: "https://c.tenor.com/uMPBfyipAKQAAAAd/galileo-galilei.gif"
    }
    ,
    {
        question: "13/20",
        answers: ["Nefertiti","Cleopatra"],
        correctAnswer: "Cleopatra",
        image: "https://historia.nationalgeographic.com.es/medio/2019/12/11/cleopatra_13d2dee2_1280x720.png"
    }
    ,
    {
        question: "14/20",
        answers: ["John Adams","Mark Twain"],
        correctAnswer: "Mark Twain",
        image: "https://i.pinimg.com/originals/55/74/6d/55746d8729152b4ac5372767017cbcda.gif"
    }
    ,
    {
        question: "15/20",
        answers: ["Vincent van Gogh","Claude Monet"],
        correctAnswer: "Vincent van Gogh",
        image: "https://c.tenor.com/TLBoeqXBJ7gAAAAd/loving-vincent-paint.gif"
    }
    ,
    {
        question: "16/20",
        answers: ["Marie Curie","Frida Kahlo"],
        correctAnswer: "Frida Kahlo",
        image: "https://c.tenor.com/8ME5bGnwIqwAAAAd/frida-kahlo.gif"
    }
    ,
    {
        question: "17/20",
        answers: ["Nikola Tesla","Miguel Ángel"],
        correctAnswer: "Miguel Ángel",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Miguel_%C3%81ngel%2C_por_Daniele_da_Volterra_%28detalle%29.jpg"
    }
    ,
    {
        question: "18/20",
        answers: ["Emily Brontë","Jane Austen"],
        correctAnswer: "Emily Brontë",
        image: "https://www.poemas-del-alma.com/blog/wp-content/uploads/2017/10/emily-bronte-400x348.jpg"
    }
    ,
    {
        question: "19/20",
        answers: ["Sigmund Freud","Charles Darwin"],
        correctAnswer: "Charles Darwin",
        image: "https://www.biografiasyvidas.com/monografia/darwin/fotos/darwin_1881.jpg"
    }
    ,
    {
        question: "20/20",
        answers: ["Benjamin Franklin","Isaac Newton"],
        correctAnswer: "Isaac Newton",
        image: "https://i.gifer.com/origin/4d/4db34cea6b43dafb9d682d92deedc895.gif"
    }
];

var correctAnswerElement;
var questionIndex = 0;
var timeLeft = 10;
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
                timeLeft = 10;
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
            timeLeft = 10;
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