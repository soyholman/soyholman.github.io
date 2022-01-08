var QUESTIONS = [
    {
        question: "¿Cuánto pesa de media el cerebro humano?",
        answers: ["400 gramos aproximadamente","1.400 gramos aproximadamente","6.500 gramos aproximadamente"],
        correctAnswer: "1.400 gramos aproximadamente",
        image: "https://c.tenor.com/PsN4eCzazqEAAAAC/brain.gif",
        text:"El cerebro humano tiene un peso medio 1.400 gramos. Sin embargo es uno de los órganos de mayores requerimientos energéticos de nuestro organismo. De hecho el 25% de la energía que consumimos diariamente esta destinada al funcionamiento del mismo."
    },
    {
        question: "Llamamos cerebro a la parte central del sistema nervioso de los vertebrados encerrada y protegida en la cavidad craneal. Usamos esta denominación de forma común, sin embargo el cerebro es tan solo una parte de lo que en conjunto se denomina encéfalo. ¿Sabrías decir cuál de estas partes no pertenece al encéfalo?",
        answers: ["Cerebelo","Tiroides","Hipotálamo"],
        correctAnswer: "Tiroides",
        text:"Aunque la actividad de la tiroides esta íntimamente relacionada con el funcionamiento del sistema nervioso central , se trata de una glándula situada en la parte superior de la tráquea que es la encargada de segregar ciertas hormonas que influyen en el metabolismo y el crecimiento. Por el contrario, además del cerebro, también son partes del encéfalo el tálamo, el hipotálamo, la amígdala cerebral, los colículos, el puente, el bulbo raquídeo, el cerebelo",
        image: "https://media0.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif"
    },
    {
     
        question: "Las neuronas de un ser humano adulto no se regeneran",
        answers: [ "Verdadero","Falso" ],
        correctAnswer: "Falso",
        text:"Se trata de una falsa creencia muy extendida. Efectivamente se regeneran unas 1.400 neuronas diarias según demostraron en un estudio del Instituto Médico Karolinska, en Suecia. Sin embargo es cierto que, a medida que envejecemos, esta tasa de regeneración neuronal disminuye",

        image: "https://i.gifer.com/1unj.gif"
    },
    {
		question: "Tan solo usamos el 10% de nuestro cerebro",
        answers: ["Verdadero","Falso"],
        correctAnswer: "Falso",
        text:"Efectivamente se trata de otra creencia infundada; una falacia puesta en boca de Albert Einstein. Y aunque viendo el comportamiento diario de algunos Homo sapiens se torne legítimo cuestionarse la afirmación de que nuestro cerebro no este funcionando a pleno rendimiento, lo cierto es que el ser humano utiliza toda su capacidad cerebral.",
        image: "https://www.elkilombonews.com/wp-content/uploads/2019/09/tenor-20.gif"
    },
    {	
		question: "Cuál es la región del cerebro encargada de gestionar la emociones?",
        answers: ["El sistema límbico", "Cerebelo","La médula espinal"],
        correctAnswer: "El sistema límbico",
        text:"El sistema límbico es la parte del encéfalo que incluye al tálamo, el hipotálamo y la amígdala cerebral, y que regula las emociones, la memoria, el hambre y los instintos sexuales. Por así decirlo, se trata del centro de mando del cerebro para las reacciones emocionales.",
        image: "https://qph.fs.quoracdn.net/main-qimg-353a8b0d4da9269ab2ce1d487efb1230"
    },
    {
		question: "Por las funciones que realiza, es muy habitual comparar el cerebro humano con el funcionamiento de una computadora ¿Sabes, comparativamente con un ordenador, a que velocidad se producen todos estos procesos en el interior de nuestra cabeza?",
        answers: ["1 GHz","20 GHz","1.000 GHz"],
        correctAnswer: "1.000 GHz",
        text:"Sobre la velocidad a la que el encéfalo procesa la información los expertos afirman que si comparáramos esta con la velocidad a la que lo hacen los ordenadores, obtendríamos que la potencia de cada neurona sería de 1 KHz. Así, si sumáramos la frecuencia de procesamiento de todas las neuronas de un cerebro obtendríamos que la potencia media de este asciende hasta los 1.000 GHz. No esta nada mal si tenemos en cuenta los 20 GHz a los que se acercan los ordenadores y smartphones en la actualidad.",
        image: "https://i.gifer.com/7Ulw.gif"
    },
    {
		question: "También en él guardamos información, recuerdos. Si seguimos comparando nuestro cerebro con un ordenador ¿Sabrías decir de cuánta memoria dispone un cerebro humano?",
        answers: ["Entre 1-10 terabytes","Entre 10 – 100 terabytes","Aproximadamente 1 millón de terabytes"],
        correctAnswer: "Entre 10 – 100 terabytes",
        text:"Hasta el momento la mayoría de los estudios realizados apuntan a que la capacidad de nuestra memoria podría situarse entre los 10 y 100 terabytes. Sin embargo otros estudios más recientes elevan la cifra hasta 1 petabyte (1000 veces un terabyte).",
        image: "https://media3.giphy.com/media/aohvgsGTzqqYg/giphy.gif?cid=dc79c3575a85cbaf5655587149ea1ebc"
    },
    {
		question: "¿Sabes cómo se llama el proceso que permite que la información viaje por el cerebro?",
        answers: ["Sinapsis","Electroforesis","Fotosíntesis"],
        correctAnswer: "Sinapsis",
        text:"Efectivamente este proceso es conocido como sinapsis y es el modo en que se lleva a cabo el impuso nervioso a través de las neuronas. Consiste en una descarga química que se traduce en una señal eléctrica que viaja a través de las redes neuronales de nuestro encéfalo a una velocidad vertiginosa.",
        image: "https://i.makeagif.com/media/1-31-2016/pn1WhA.gif"
    }
    ,
    {
		question: "La estructura del encéfalo puede cambiar",
        answers: ["Verdadero","Falso"],
        correctAnswer: "Verdadero",
        text:"Cada vez que aprendes algo la estructura de tu encéfalo sufre variaciones. Por ejemplo, cuando somos pequeños montar una bicicleta nos parece una hazaña imposible al principio, pero muy pronto acabamos dominando la técnica ¿Cómo ocurre esto? A medida que practicas con la bicicleta, tu cerebro gestiona la información a través de tus redes neuronales una y otra vez, formando nuevas conexiones y dando forma constantemente a la estructura del encéfalo.",
        image: "https://i.gifer.com/QdkN.gif"
    }
    ,
    {
		question: "Sabemos que el cerebro de un ser humano comienza a formarse a partir de los 18 días de gestación. Desde entonces no para de crecer y madurar, hasta que llegada cierta edad comienza a deteriorarse poco a poco ¿Sabes a que edad alcanza la madurez nuestro órgano director?",
        answers: ["A los 16 años","A los 21 años","A los 30 años"],
        correctAnswer: "A los 30 años",
        text:"Si tienes menos de 30 años estás de enhorabuena; puede decirse que aún no has alcanzado el límite de tus capacidades cerebrales. Desde que nacemos nuestro encéfalo permanece en constante evolución hasta aproximadamente los 30. De hecho un estudio del Instituto de Neurociencia Cognitiva de Londres afirma que, en algunos casos, el proceso podría prolongarse incluso hasta los 40 años.",
        image: "https://i.gifer.com/MUJw.gif"
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