var QUESTIONS = [
    {
        question: "¿El asesinato de qué dirigente fue uno de los desencadenantes de la Primera Guerra Mundial?",
        answers: ["Guillermo II","Francisco Fernando","Francisco José"],
        correctAnswer: "Francisco Fernando",
        image: "https://historia.nationalgeographic.com.es/medio/2016/04/04/francisco-fernando-de-absburgo-archiduque-de-austria-1836-1914_2bc98acd.png",
        text:"El 28 de junio de 1914 el nacionalista serbobosnio Gavrilo Princip disparó mortalmente al archiduque Francisco Fernando, heredero de la corona del Imperio austrohúngaro, y a su esposa, la condesa Sofía Chotek, en Sarajevo. El atentado fue el pretexto usado por Austria-Hungría para comenzar las hostilidades de la Gran Guerra.        "
    },
    {
        question: "¿En qué fecha y cómo arrancó el conflicto?",
        answers: ["El 1 de agosto de 1914, con la declaración de guerra de Alemania a Rusia","El 28 de julio de 1914, con la declaración de guerra de Austría-Hungría a Serbia","El 4 de agosto de 1914, con la declaración de guerra del Imperio Británico a Alemania"],
        correctAnswer: "El 28 de julio de 1914, con la declaración de guerra de Austría-Hungría a Serbia",
        text:"Austría-Hungría fue la primera nación en declarar la guerra, y a partir de ahí el entramado de pactos y alianzas lanzó una reacción en cadena que terminó con una Europa dividida.",
        image: "https://historia.nationalgeographic.com.es/medio/2016/04/04/primera-guerra-mundial_a0653e24.png"
    },
    {
     
        question: "¿Qué fue la Tregua de Navidad?",
        answers: [ "Una tregua de 24 horas propuesta por el Papa para el día de Navidad de 1914.", "Un hecho espontáneo que detuvo durante unas horas la guerra en el frente occidental. Los soldados de ambos frentes se juntaron amistosamente en terreno neutral.","Una tregua pactada por los alemanes y los franceses para que sus soldados pudieran pasar las navidades con sus familias."],
        correctAnswer: "Un hecho espontáneo que detuvo durante unas horas la guerra en el frente occidental. Los soldados de ambos frentes se juntaron amistosamente en terreno neutral.",
        text:"Durante unas horas, justo en el día de Navidad de 1914, los soldados de ambos bandos del frente occidental dejaron sus diferencias a un lado y se juntaron en tierra de nadie intercambiando tabaco, chocolate, bebidas… e incluso jugaron partidos de fútbol. Fue algo absolutamente espontáneo.  ",

        image: "https://historia.nationalgeographic.com.es/medio/2016/04/05/soldados-en-las-trincheras-durante-la-primera-guerra-mundial_91ddab58.png"
    },
    {
		question: "Hablando del atentado que desencadenó la guerra, ¿cómo se llamaba la asociación terrorista a la que pertenecía Gavrilo Princip?",
        answers: ["Joven Bosnia, que recibía ayuda de Mano Negra", "Serbia Libre","Sangre Negra"],
        correctAnswer: "Joven Bosnia, que recibía ayuda de Mano Negra",
        text:"El serbio Gavrilo Princip (la estatua de la imagen), de 17 años de edad cuando asesinó a Francisco Fernando y su esposa, pertenecía a la organización Joven Bosnia, que recibía el apoyo de la Mano Negra serbia.",
        image: "https://th.bing.com/th/id/OIP.BwpZRiwtw1OxPaNwjflfgAHaEK?pid=ImgDet&rs=1"
    },
    {	
		question: "La batalla de Verdun fue también una de las más largas del conflicto. ¿Cuántos días duró?",
        answers: ["303 días", "214 días","242 días"],
        correctAnswer: "303 días",
        text:"Los 10 meses de combate dejaron más de 700.000 bajas entre ambos bandos, casi la mitad mortales.",
        image: "https://historia.nationalgeographic.com.es/medio/2016/04/04/primera-guerra-mundial_2bca8194.png"
    },
    {
		question: "¿Qué película se desarrolla durante la Primera Guerra Mundial?",
        answers: ["La lista de Schildler","El pianista","Caballo de batalla"],
        correctAnswer: "Caballo de batalla",
        text:"La película Caballo de batalla (War Horse), dirigida por Steven Spielberg, Está ambientada en la Primera Guerra Mundial y tiene como protagonistas al hijo de un granjero que debe luchar en la contienda y su querido caballo, que también acaba participando en el conflicto.",
        image: "https://th.bing.com/th/id/R.46bd01fba7a2f861d6fa83aa33c8cc8b?rik=9IR4br2W7nH38Q&pid=ImgRaw&r=0"
    },
    {
		question: "¿Qué dos grandes potencias fueron los principales implicados en la campaña de Galípoli?",
        answers: ["El Imperio otomano y Rusia", "Los Imperios británico y otomano","Alemania y Francia"],
        correctAnswer: "Los Imperios británico y otomano",
        text:"El Imperio británico, con la ayuda de sus aliados, hostigó al ejército otomano durante meses con la intención de tomar Constantinopla y asegurarse vía marítima hasta Rusia, pero la ofensiva fracasó.",
        image: "https://historia.nationalgeographic.com.es/medio/2016/04/04/primera-guerra-mundial-1914-1918_31641c6b.jpg"
    },
    {
		question: "¿Qué dos ejércitos se enfrentaron en Verdun, en una de las batallas más grandes de la contienda?",
        answers: ["El francés y el alemán", "El británico y el alemán","El francés y el austro-húngaro"],
        correctAnswer: "El francés y el alemán",
        text:"Con más de un millón de soldados por bando, la de Verdun fue una de las grandes batallas de la Primera Guerra Mundial. El ejército francés logró repeler finalmente el ataque alemán.",
        image: "https://historia.nationalgeographic.com.es/medio/2016/04/05/batalla-verdun-primera-guerra-mundial_86102ce2.jpg"
    },
    {
		question: "¿Quiénes formaban las dos grandes alianzas previas a la Primera Guerra Mundial?",
        answers: ["Italia, Francia y el Imperio Británico (Triple Entente) / Alemania, Austria-Hungría y Bulgaria (Triple Alianza)", "Rusia, Francia y el Imperio Británico (Triple Entente) / Alemania, Austria-Hungría y el Imperio Otomano (Triple Alianza)","Rusia, Francia y el Imperio Británico (Triple Entente) / Alemania, Austria-Hungría e Italia (Triple Alianza)"],
        correctAnswer: "Rusia, Francia y el Imperio Británico (Triple Entente) / Alemania, Austria-Hungría e Italia (Triple Alianza)",
        text:"Pese a formar parte de la Triple Alianza, Italia decidió no apoyar a sus aliados ya que consideraba que la naturaleza del pacto era defensiva. Posteriormente entrarían en la guerra en el bando opuesto ",
        image: "https://historia.nationalgeographic.com.es/medio/2016/04/05/trincheras-durante-la-primera-guerra-mundial_cd316d00.jpg"
    },
 
    {
		question: "¿Qué organismo nació en 1920 con el propósito de mantener la paz mundial, y evitar así conflictos a escala global?",
        answers: ["La Sociedad de Naciones", "La ONU","La Liga Internacional"],
        correctAnswer: "La Sociedad de Naciones",
        text:"La Sociedad de Naciones se fundó en 1920 como resultado de la Conferencia de Paz de París del año anterior.",
        image: "https://historia.nationalgeographic.com.es/medio/2016/04/04/primera-guerra-mundial-1914-1918_3ed39345.jpg"
    },
 
    {
		question: "¿Quién pronunció la frase Esto no es un tratado de paz, es un armisticio de 20 años, en referencia a lo que él consideraba unos términos de rendición blandos para Alemania?",
        answers: ["Georges Clemenceau", "Philippe Pétain","Ferdinard Foch"],
        correctAnswer: "Ferdinard Foch",
        text:"El mariscal Foch abogaba por unas condiciones de paz que impidiesen a Alemania volver a convertirse de nuevo una amenaza para su país; pero fueron desestimadas por el primer ministro galo, Georges Clemenceau. La frase de Foch fue acertadísima: la Segunda Guerra Mundial comenzaba 20 años y 64 días después.",
        image: "https://historia.nationalgeographic.com.es/medio/2016/04/04/primera-guerra-mundial-1914-1918_5f447876.png"
    },
 
    {
		question: "¿Quién fue Henry Gunther?",
        answers: ["Un americano, el último soldado muerto en combate", "Un británico, piloto de los Royal Flying Corps, con el récord de aviones derribados en la Guerra","Un canadiense, miembro del servicio de contrainteligencia y responsable de haber salvado centenares de vidas"],
        correctAnswer: "Un americano, el último soldado muerto en combate",
        text:"Póstumamente promovido a sargento, Gunther fue abatido en Chaumont-devant-Damvillers a las 10:59 del 11 de noviembre de 1918, un minuto antes de que entrase en vigor el armisticio.",
        image: "https://historia.nationalgeographic.com.es/medio/2016/04/04/primera-guerra-mundial-1914-1918_2d47f30e.jpg"
    },
 
 
    {
		question: "¿Qué nombre recibió el telegrama que favoreció la entrada de Estados Unidos en el conflicto?",
        answers: ["Hindenburg", "Zimmermann","Ludendorff"],
        correctAnswer: "Zimmermann",
        text:"El telegrama Zimmermann fue una comunicación alemana enviada a su embajada en Mexico proponiendo un pacto entre ambos países en contra de Estados Unidos. El telegrama fue interceptado por la inteligencia británica, y tras su salida a la luz aceleró la entrada de los Estados Unidos en la guerra.",
        image: "https://historia.nationalgeographic.com.es/medio/2016/04/04/primera-guerra-mundial-1914-1918_6e21bf29.jpg"
    },
 
    {
		question: "¿Cambió la Primera Guerra Mundial el papel de la mujer en la sociedad?",
        answers: ["Muchas mujeres de ambos bandos debieron trabajar en las fábricas, traspasando los límites tradicionales de la casa, los hijos y la iglesia", "La mayoría de las mujeres acabaron siendo enfermeras en el frente para apoyar a sus soldados","No cambió especialmente"],
        correctAnswer: "Muchas mujeres de ambos bandos debieron trabajar en las fábricas, traspasando los límites tradicionales de la casa, los hijos y la iglesia",
        text:"Miles de mujeres suplieron a los soldados movilizados durante la guerra. Al final de la contienda la cantidad de mujeres en las fábricas era altísima. En 1915, por ejemplo, el gobierno británico hizo un llamamiento a las mujeres para trabajar en las fábricas, donde llegaban a realizar jornadas de 12 horas.",
        image: "https://historia.nationalgeographic.com.es/medio/2016/04/05/mujeres-trabajando-en-una-fabrica-durante-la-primera-guerra-mundial_2dfd5dce.png"
    },
 
    {
		question: "¿Cómo se llamaba el primer tanque en entrar en combate?",
        answers: ["El Mark I británico","El A7V alemán","El FT17 francés"],
        correctAnswer: "El Mark I británico",
        text:"El carro de combate nació en la batalla del Somme, en septiembre de 1916. Pesaba 30 toneladas, avanzaba a 3.2 km/h y transportaba 8 hombres.",
        image: "https://historia.nationalgeographic.com.es/medio/2016/04/04/primera-guerra-mundial-1914-1918_d5e15056.jpg"
    },
 
    {
		question: "¿Cuál era la capital rusa al inicio de la revolución de febrero de 1917?",
        answers: ["Moscú","Petrogrado","San Petersburgo"],
        correctAnswer: "Petrogrado",
        text:"Hoy conocida como San Petersburgo, la entonces Petrogrado (luego Leningrado) fue capital del Imperio ruso durante más de doscientos años, hasta que en marzo de 1918 la sustituyó Moscú.",
        image: "https://historia.nationalgeographic.com.es/medio/2016/04/04/nicolas-ii_de6b0548.png"
    },
 
    {
		question: "¿Qué ejército usó por primera vez armas químicas?",
        answers: ["Alemania (cloro)","Italia (gas mostaza)","Francia (gases irritantes)"],
        correctAnswer: "Francia (gases irritantes)",
        text:"La guerra química debutó en agosto de 1914, con un ataque con agentes irritantes por parte de Francia sobre sus adversarios alemanes.",
        image: "https://historia.nationalgeographic.com.es/medio/2016/04/04/primera-guerra-mundial-1914-1918_2e82ccce.png"
    },
 
    {
		question: "¿Qué barco fue uno de los símbolos de la Royal Navy británica por su avanzada tecnología y concepción??",
        answers: ["El HMS Lord Nelson","El HMS Dreadnought","El HMS Colossus"],
        correctAnswer: "El HMS Dreadnought",
        text:"El HMS Dreadnought revolucionó el escenario naval con su armamento pesado de calibre único y su propulsión mediante turbinas de vapor. Curiosamente, no participó en ninguna batalla de la guerra, aunque fue el único acorazado capaz de hundir un submarino enemigo, el SM U-29 alemán.",
        image: "https://historia.nationalgeographic.com.es/medio/2016/04/04/primera-guerra-mundial-1914-1918_5d3937a3.png"
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