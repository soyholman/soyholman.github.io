var QUESTIONS = [
    {
        question: "¿Qué día pisó Armstrong la Luna?",
        answers: ["16 julio de 1969","21 julio de 1969","4 julio de 1969"],
        correctAnswer: "21 julio de 1969",
        image: "https://c.tenor.com/-F32PQyIBB0AAAAd/man-on-the-moon-astronaut.gif",
        text:"Marcando un hito en la historia de la exploración espacial y la astronomía, Neil Armstrong pisó la Luna el 21 de julio de 1969 a las 2:56 UTC."
    },
    {
        question: "¿Cuál es la estrella más cercana al sistema solar?",
        answers: ["La Estrella Polar","Próxima Centauri","Pólux"],
        correctAnswer: "Próxima Centauri",
        text:"Próxima Centauri es una enana roja descubierta en 1915 por Robert Innes, director del Observatorio Union de Sudáfrica. Es la estrella más cercana al Sol. No obstante, su intensidad lumínica es demasiado débil para ser observada sin instrumentos astronómicos.",
        image: "https://media2.giphy.com/media/dNEozThYwtPbrt4m06/200.gif"
    },
    {
     
        question: "¿En qué siglo se inventó el primer telescopio?",
        answers: [ "Siglo IX","Siglo XII","Siglo XVII" ],
        correctAnswer: "Siglo XVII",
        text:"Su invención se atribuye a Galileo Galilei, ya que fue el primero en patentar un modelo y presentarlo en sociedad en 1609. Sin embargo, se trata de un tema controvertido, al existir documentos que otorgan su autoría algunos años antes al holandés Hans Lippershey o al español Juan Roget.",

        image: "https://astromania.co/modules/ph_simpleblog/covers/8.jpg"
    },
    {
		question: "¿Es cierto que se puede ver la Estación Espacial Internacional desde la Tierra sin necesidad de telescopios?",
        answers: ["Imposible, siempre se necesita un telescopio, aunque sea pequeño","No se puede ver ni siquiera con el mejor de los telescopios de aficionados","Sí, se puede ver a ciertas horas, pero debes conocer la trayectoria y la hora exactas"],
        correctAnswer: "Sí, se puede ver a ciertas horas, pero debes conocer la trayectoria y la hora exactas",
        text:"correcta a una hora determinada podrás observar el paso de la Estación Espacial Internacional por el cielo. De hecho, existe un servicio de la NASA que, indicando simplemente tu ciudad y tu correo electrónico, avisa de su paso: (https://spotthestation.nasa.gov/signup.cfm)",
        image: "https://www.nationalgeographic.com.es/medio/2016/05/30/iss_7f834e96.png"
    },
    {	
		question: "¿A qué corresponde una Unidad Astronómica (UA)?",
        answers: ["A un año luz", "A la distancia entre la Tierra y el Sol","La distancia entre el Sol y el centro de la Vía Láctea"],
        correctAnswer: "A la distancia entre la Tierra y el Sol",
        text:"Efectivamente. Una UA (en inglés AU) es la distancia media existente entre la Tierra y el Sol. Como la órbita terrestre es elíptica, se trata de un promedio que equivale aproximadamente a unos 150 millones de kilómetros.",
        image: "https://www.nationalgeographic.com.es/medio/2016/05/30/modelo-mecanico-del-sistema-solar_b952e92a.png"
    },
    {
		question: "¿Cómo se llama el proyecto destinado a la búsqueda de vida inteligente más allá de la Tierra?",
        answers: ["Proyecto Área 51","Proyecto SETI","Proyecto Isaac Asimov"],
        correctAnswer: "Proyecto SETI",
        text:"SETI es el acrónimo inglés de Search for ExtraTerrestrial Intelligence (Búsqueda de Inteligencia Extraterrestre). Existen numerosos proyectos SETI que tratan de encontrar vida extraterrestre inteligente, bien a través de señales electromagnéticas o bien enviando mensajes de distinta naturaleza al espacio con la esperanza de que alguno de ellos sea contestado.",
        image: "https://www.nationalgeographic.com.es/medio/2016/05/30/radiotelescopio-array-australia_5b23f444.jpg"
    },
    {
		question: "¿A qué fenómeno alude el término nova?",
        answers: ["A la muerte de una estrella","Al nacimiento de una estrella","A la formación de nuevas galaxias"],
        correctAnswer: "A la muerte de una estrella",
        text:"Las novas, supernovas y las teóricas hipernovas son grandes explosiones estelares en las que se liberan enormes cantidades de energía. Su brillo puede superar en 100.000 veces el de la estrella original. Las supernovas puede producirse por 2 motivos: el colapso de una estrella al agotar el combustible de su núcleo o la fusión de 2 estrellas pertenecientes a un sistema binario cerrado.",
        image: "https://c.tenor.com/Q8fVwMJacFcAAAAC/nova-glowing.gif"
    },
    {
		question: "¿Qué sistema estelar recibe su nombre de un conocido literato universal?",
        answers: ["Sistema Cervantes","Sistema de Ernest Hemingway","Sistema de William Shakespeare"],
        correctAnswer: "Sistema Cervantes",
        text:"Bautizada gracias a una iniciativa conjunta de la Sociedad Española de Astronomía y el planetario de Pamplona, se encuentra desde 2015, en la constelacion del Altar, a unos 49,8 años luz de distancia de la Tierra, una estrella nombrada en honor al quizás mayor literato español de todos los tiempos, Miguel de Cervantes Saavedra. Los planetas que orbitan la estrella cervantina reciben, en orden de proximidad a la misma, los nombres de Rocinante, Dulcinea, Quijote y Sancho.",
        image: "https://www.nationalgeographic.com.es/medio/2016/05/30/constelacion-del-altar_7b6109b0.jpg"
    }
    ,
    {
		question: "¿Cuál es la estrella mas grande conocida por el ser humano?",
        answers: ["Arcturus","UY Scuti","VY Canis Majoris"],
        correctAnswer: "UY Scuti",
        text:"UY Scuti es probablemente la estrella conocida de mayor radio. Está situada en la constelación del Escudo, a unos 9.500 años luz de la Tierra. Se trata de una supergigante roja que, aunque mucho menos densa, es químicamente muy similar al Sol. Posee un radio entre 1.516 y 1.900 veces el de nuestra estrella, es decir, unos 1,2 billones de kilómetros, lo cual da lugar a una circunferencia de 7,5 billones de kilómetros. ¡Si el centro de la estrella se situara en el lugar en el que se encuentra el Sol, su corona casi alcanzaría la órbita de Júpiter!",
        image: "https://www.nationalgeographic.com.es/medio/2016/05/30/constelacion-del-escudo_bd730821.jpg"
    }
    ,
    {
		question: "¿Sabes qué temperaturas se pueden llegar a alcanzar en el Sol?",
        answers: ["2.000.000 ºC","10.000.000 ºC","15.000.000 ºC"],
        correctAnswer: "15.000.000 ºC",
        text:"Nuestro sol pertenece a la categoría de las enanas amarillas y es una estrella bastante modesta. Su parte más externa, llamada fotosfera, alcanza los 5.500 ºC, una temperatura que casualmente resulta ideal para posibilitar la existencia de agua en estado líquido en la superficie de la Tierra, situada a 150 millones de kilómetros. La temperatura en su núcleo alcanza los 15 millones de grados centígrados.",
        image: "https://thumbs.gfycat.com/AggressiveOpenDragon-max-1mb.gif"
    }
    ,
    {
		question: "La imagen de la fotografía corresponde una formación que recibe el nombre de los Pilares de la Creación. ¿Sabes en qué nebulosa se encuentra?",
        answers: ["La nebulosa del Águila","La nebulosa del Dragón","La nebulosa del Reloj de Arena"],
        correctAnswer: "La nebulosa del Águila",
        text:"Los Pilares de la Creación forman parte de la nebulosa del Águila, situada en la constelación de la Serpiente. Se trata de una región del espacio en constante ebullición donde nacen y mueren estrellas. De ahí su nombre.",
        image: "https://www.nationalgeographic.com.es/medio/2016/05/30/los-pilares-de-la-creacion_f70c83b6.png"
    }
    ,
    {
		question: "¿Qué nombre recibe la región del sistema solar comprendida entre las órbitas de Marte y Júpiter?",
        answers: ["Cinturón de asteroides","Cinturón de Kuiper","Cinturón de Orión"],
        correctAnswer: "Cinturón de asteroides",
        text:"La zona comprendida entre las órbitas de Marte y Júpiter recibe el nombre de cinturón de asteroides. Se cree que los fragmentos que lo conforman pertenecen a un planeta que no llegó a formarse durante los albores del sistema solar, debido a la influencia de la gravedad de Júpiter. Más de la mitad de la masa total del cinturón corresponde a los cinco objetos de mayor tamaño: los asteroides Ceres, Palas, Vesta, Higia y Juno.",
        image: "https://www.nationalgeographic.com.es/medio/2016/05/30/cinturon-de-asteroides_2e4e7ef3.jpg"
    }
    ,
    {
		question: "¿Sabes cuál es el objeto fabricado por el hombre que actualmente se encuentra más alejado de la Tierra?",
        answers: ["Sonda espacial Cassini","Sonda espacial Voyager 1","El Halcón Milenario"],
        correctAnswer: "Sonda espacial Voyager 1",
        text:"La sonda espacial Voyager 1 fue lanzada al espacio el 5 de septiembre de 1977 desde Cabo Cañaveral. Hace unos 4 años, el 25 de agosto de 2012, a unos 19.000 millones de kilómetros del Sol (122 UA), la sonda dejaba atrás la heliopausa, siendo la primera en alcanzar el espacio interestelar, el cual sigue surcando una velocidad constante de 17,1 km/s.",
        image: "https://i.blogs.es/19982d/md3jfssp-1502946085/1366_2000.jpg"
    },
    {
		question: "¿Sabes cómo se llama y dónde se encuentra la montaña más alta del sistema solar?",
        answers: ["El Monte Olimpo, en Marte","El Altar de Zeus, en Júpiter","La Morada de los Titanes, en Júpiter"],
        correctAnswer: "El Monte Olimpo, en Marte",
        text:"Efectivamente. La montaña más alta del sistema solar se encuentra en el planeta rojo. Se trata de un volcán marciano con una altura de 27 kilómetros. ¡Tres veces mayor que el monte Everest!",
        image: "https://www.nationalgeographic.com.es/medio/2016/05/30/monte-olimpo-marte_b1cbaa6c.jpg"
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