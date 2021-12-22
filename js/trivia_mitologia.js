var QUESTIONS = [
    {
        question: "Cupido es hijo del dios de la guerra.",
        answers: ["No, es hijo de Apolo,dios de la belleza", "No,es hijo Dionisio dios del placer", "No, es hijo de Zeus, dios omnipotente","Sí, es hijo de Ares,dios de la guerra"],
        correctAnswer: "Sí, es hijo de Ares,dios de la guerra",
        image: "https://ayeunicornioliterario.files.wordpress.com/2019/02/giphy.gif?w=356"
    },
    {
        question: "Aracne era una joven increíblemente talentosa que con sus tejidos impactaba al pueblo. Atenea, envidiosa de sus talentos, decidió convertirla en araña.",
        answers: ["Verdadero", "Falso"],
        correctAnswer: "Verdadero",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1538717700/ohkmyyg7su5y881tjkjq.jpg"
    },
    {
     
        question: "Zeus se enamoró de Dánae, una joven que estaba encerrada en una caja de cobre. Para poder pretenderla, se transformó en….",
        answers: [ "Viento", "Lluvia de estrellas", "Corriente de agua","En un colibrí"],
        correctAnswer: "Lluvia de estrellas",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1538717499/nd9owable2invkzs5cbd.jpg"
    },
    {
		question: "Apolo, el dios de la música, despellejó vivo a un músico porque le tenía envidia.",
        answers: ["Verdadero", "Falso"],
        correctAnswer: "Verdadero",
        image: "https://i.pinimg.com/originals/00/1e/91/001e91b2ff24ce51611bbb4daf78622c.gif"
    },
    {	
		question: "Una terrible guerra desatada por el amor de una mujer. ¿Quién predijo la guerra de Troya?",
        answers: ["Discordia", "Atenea", "Artemisa","Cassandra"],
        correctAnswer: "Cassandra",
        image: "https://i.pinimg.com/originals/e5/5c/b9/e55cb998cae6e73da2fbf6836090a296.gif"
    },
    {
		question: "Cupido es el dios del amor, el responsable de unir corazones. Una vez, se enamoró… ¿Quién lo enamoró?",
        answers: ["Afrodita", "Psique", "Atenea","Éride"],
        correctAnswer: "Psique",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1538717229/ubhptz5yjfab6xtgj1rw.jpg"
    },
    {
		question: "Ariadne se enamoró perdidamente de Teseo, quien había decidido entregar su vida por el bienestar de su pueblo ¿Qué hizo para salvarlo?",
        answers: ["Se sacrificó ella en su nombre", "Envió a su más fiel pretendiente a que tomara su lugar", "Creó  un río de lágrimas para inundar el puebloy salvarlo","Le dio un hilo que se convertiría en su salvación"],
        correctAnswer: "Le dio un hilo que se convertiría en su salvación",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1538717082/gwizf3lctrzckxf7zelr.jpg"
    },
    {
		question: "¿Quién le hace los rayos a Zeus?",
        answers: ["Él mismo los fabrica", "Los hace Atenea","Los diseña Artemisa","Los fabrican los Cíclopes"],
        correctAnswer: "Los fabrican los Cíclopes",
        image: "https://c.tenor.com/acJ0bxQyO4QAAAAC/zeus-god.gif"
    },
    {
		question: "¿Quién enseñó medicina a Asclepio, el dios de la salud?",
        answers: ["Apolo su padre", "Zeus, el dios más poderoso", "Atenea, la diosa más sabia","Quirón, el centauro"],
        correctAnswer: "Quirón, el centauro",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1538716780/zbwusphrzsfwkbnrgxmg.jpg"
    },
    {
		question: "¿Quién mató a Medusa?",
        answers: ["Paris", "Aquiles", "Perseo","Apolo"],
        correctAnswer: "Perseo",
        image: "https://c.tenor.com/AtkogyYmzwYAAAAd/medusa-percy.gif"
    },
    {
		question: "¿Por qué en la mitología, los poderosos usan coronas de laurel?",
        answers: ["Por su olor agradable", "Porque era una hierba extremadamente costosa", "Porque es la planta consagrada de Apolo","Porque tiene propiedades mágicas y curativas"],
        correctAnswer: "Porque es la planta consagrada de Apolo",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1538716455/zek95oovmajw4nxexalp.jpg"
    },
    {
		question: "La reina Pasífae, se enamoró de un toro y de la unión, nació un minotauro que debieron encerrar en un laberinto. ¿Quién construyó el laberinto?",
        answers: ["El rey Minos", "Dédalo", "Ícaro","Aquiles"],
        correctAnswer: "Dédalo",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1538716286/m3p0c45gv19aklwqxtqc.png"
    },  {
		question: "En la mitología griega, Amazonas era una tribu de mujeres guerreras que NO compartía con hombres.",
        answers: ["Verdadero", "Falso"],
        correctAnswer: "Verdadero",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1538716204/tnukkwawn6pgi68tf92b.jpg"
    }

];

var correctAnswerElement;
var questionIndex = 0;
var timeLeft = 20;
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
                timeLeft = 20;
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
            timeLeft = 20;
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