var QUESTIONS = [
    {
        question: "¿Cómo comenzó la Segunda Guerra Mundial?",
        answers: ["La guerra más destructiva de la historia comenzó con la invasión de la URSS por parte de Alemania el 1 de septiembre de 1939","La Segunda Guerra Mundial comenzó con el pacto expansionista firmado por Japón, Italia y Alemania el 1 de septiembre de 1939","Comenzó con la invasión de Polonia por parte de Alemania el 1 de septiembre de 1939"],
        correctAnswer: "Comenzó con la invasión de Polonia por parte de Alemania el 1 de septiembre de 1939",
        image: "https://historia.nationalgeographic.com.es/medio/2016/04/29/infanteria-polaca-en-una-marcha-durante-la-segunda-guerra-mundial_6732d2a0.jpg",
        text:"La invasión de Polonia por parte de Alemania fue el detonante para que otras grandes potencias declarasen la guerra al Tercer Reich el 1 de septiembre de 1939."
    },
    {
        question: "¿En qué año accedió Hitler y el partido nacional-socialista al poder?",
        answers: ["1933","1936","1939"],
        correctAnswer: "1933",
        text:"Hitler, como líder del partido nacional-socialista, fue nombrado canciller de Alemania el 30 de enero de 1933",
        image: "https://gifimage.net/wp-content/uploads/2017/09/adolf-hitler-gif-10.gif"
    },
    {
     
        question: "¿Con qué nombre fue conocido el pacto de no agresión entre alemanes y soviéticos?",
        answers: [ "Pacto Ribbentrop-Mólotov","Pacto de Varsovia","Pacto de Brandeburgo" ],
        correctAnswer: "Pacto Ribbentrop-Mólotov",
        text:"El pacto de no agresión entre Alemania y la URSS se firmó en Moscú el 23 de agosto de 1939, nueve días antes del comienzo de la Segunda Guerra Mundial.",

        image: "https://historia.nationalgeographic.com.es/medio/2016/04/29/firma-del-pacto-de-ribbentrop-molotov_b495d570.png"
    },
    {
		question: "¿En qué consistía la guerra relámpago o blitzkrieg llevada a cabo por los alemanes?",
        answers: ["Consistía en la acción coordinada de unidades de artillería, blindadas, aviación y comunicaciones para debilitar rápidamente las defensas del enemigo", "Consistía en atacar los objetivos clave siempre coincidiendo con tormentas y mal tiempo para mermar más fácilmente las defensas del enemigo","Consistía en usar armas químicas junto con bombardeos continuos"],
        correctAnswer: "Consistía en la acción coordinada de unidades de artillería, blindadas, aviación y comunicaciones para debilitar rápidamente las defensas del enemigo",
        text:"La acción simultánea de la aviación, la artillería, las unidades blindadas y contra las comunicaciones del enemigo hizo que Alemania ocupara rápidamente gran parte de Europa durante los primeros meses de la guerra.",
        image: "https://historia.nationalgeographic.com.es/medio/2016/04/29/luftwaffe_77cefb54.jpg"
    },
    {	
		question: "Hitler sufrió muchos atentados (todos ellos fallidos). ¿Cuántos exactamente?",
        answers: ["23", "32","43"],
        correctAnswer: "43",
        text:"El atentado más famoso y cercano a conseguir su objetivo fue el cinematográfico intento del 20 de julio de 1944, planeado por el coronel del Estado Mayor Claus von Stauffenberg. Sin embargo, el dictador alemán, según los historiadores, sufrió otras 42 tentativas de terminar con su vida.",
        image: "https://media1.tenor.com/images/907038fa5d954a628676cc52d7d07861/tenor.gif?itemid=11175591"
    },
    {
		question: "¿Cómo se llamaba el avión que transportó la bomba atómica que se lanzó sobre Hiroshima?",
        answers: ["Little Boy","Enola Gay","Little Wings"],
        correctAnswer: "Enola Gay",
        text:"El nombre del bombardero B-29 en el que se transportó la famosa bomba atómica Little Boy era Enola Gay.",
        image: "https://historia.nationalgeographic.com.es/medio/2016/04/29/enola-gay_856fd1da.jpg"
    },

    {
		question: "¿Qué representa esta famosa imagen de la Segunda Guerra Mundial?",
        answers: ["Soldados americanos tras ganar la batalla de Normandía","Soldados americanos tras conquistar Berlín","Soldados americanos tras la batalla de Iwo Jima"],
        correctAnswer: "Soldados americanos tras la batalla de Iwo Jima",
        text:"Esta imagen, una de las más famosas de la Segunda Guerra Mundial, la tomó el fotógrafo Joe Rosenthal 23 de febrero de 1945 en el monte Suribachi durante la batalla de Iwo Jima.",
        image: "https://historia.nationalgeographic.com.es/medio/2016/04/29/us-marine-corps-war-memorial_cf03ab42.jpg"
    }
    ,
    {
		question: "¿Cómo se llama la máquina que utilizaban los alemanes para encriptar sus mensajes y que los aliados no supieran qué decían?",
        answers: ["Enigma","Die Maschine (La Máquina en alemán)","Unübersetzbar (intraducible en alemán)"],
        correctAnswer: "Enigma",
        text:"La mejor máquina de encriptación de la época, Enigma, fue un continuo quebradero de cabeza para los aliados hasta que, gracias al trabajo de Alan Turing y su equipo de Bletchley Park, Gran Bretaña, consiguieron crear un sistema para descifrar los mensajes de los nazis.",
        image: "https://historia.nationalgeographic.com.es/medio/2016/04/29/maquina-de-cifrado-alemana-enigma_81be01c4.jpg"
    }
    ,
    {
		question: "¿Cuál fue el último país en rendirse concluyendo de este modo la Segunda Guerra Mundial?",
        answers: ["Alemania","Italia","Japón"],
        correctAnswer: "Japón",
        text:"El país asiático fue el último en capitular firmando su rendición el 2 de septiembre de 1945.",
        image: "https://historia.nationalgeographic.com.es/medio/2016/04/29/estadounidenses-celebran-la-rendicion-de-japon-y-el-final-de-la-segunda-guerra-mundial_dbb795d1.png"
    }
    ,
    {
		question: "¿Cuándo comenzó la operación Barbarroja, el ataque de las tropas de Hitler a la URSS?",
        answers: ["El 22 de junio de 1941, exactamente el mismo día en qué Napoleón había anunciado su intención de invadir Rusia en 1812","El 16 de enero de 1941, en pleno invierno, lo que decantó la balanza a favor de la URSS","El 4 de julio de 1941, coincidiendo con el día de la Independencia de Estados Unidos"],
        correctAnswer: "El 22 de junio de 1941, exactamente el mismo día en qué Napoleón había anunciado su intención de invadir Rusia en 1812",
        text:"A las tres de la madrugada del 22 de junio de 1941, el mismo día en que Napoleón había anunciado su intención de invadir Rusia en 1812, dio comienzo la operación Barbarroja, el ataque de las tropas de Hitler a la URSS.",
        image: "https://78405a.medialib.edu.glogster.com/PJGfXtLSqXRHIZ9BZ9m0/media/a0/a0e7b83fc571f96e07506bec85631c626fe4c531/nazi.gif"
    }
    ,
    {
		question: "El Holocausto, el asesinato masivo y sistemático de población judía ¿con cuántas vidas terminó?",
        answers: ["Entre 2.000.000 y 3.000.000 de personas fueron ejecutadas en el Holocausto","Entre 5.900.000 y 7.100.000 personas fueron asesinadas vilmente","Entre 15.00.000 y 18.000.000 personas fueron asesinadas en el Holocausto"],
        correctAnswer: "Entre 5.900.000 y 7.100.000 personas fueron asesinadas vilmente",
        text:"Según la restricción del criterio que se adopta la cantidad de muertos en el Holocausto fue entre 5.900.000 y 7.100.000 hombres, mujeres y niños.",
        image: "https://thumbs.gfycat.com/SoulfulLeanGharial-size_restricted.gif"
    }
    ,
    {
		question: "¿Con qué nombre en clave se conocía el decisivo desembarco de Normandía?",
        answers: ["Operación Führer","Operación Overlord","Operación Freedom"],
        correctAnswer: "Operación Overlord",
        text:"El 6 de junio de 1944 tuvo lugar el desembarco de Normandía, el día D o la Operación Overlord, una batalla clave para la derrota final de Alemania en la Segunda Guerra Mundial.",
        image: "https://c.tenor.com/nKhVfCkp-H8AAAAC/normandie.gif"
    }
    ,
    {
		question: "¿En qué ciudad se lanzó primero la bomba atómica?",
        answers: ["Nagasaki","Hiroshima","Pearl Harbour"],
        correctAnswer: "Hiroshima",
        text:"Hiroshima fue escenario del primer bombardeo atómico de la historia el 6 de agosto de 1945.",
        image: "https://i.gifer.com/6Ij.gif"
    }
    ,
    {
		question: "¿Cuándo se rindió definitivamente Alemania?",
        answers: ["El 8 de mayo de 1945","El 30 de abril de 1945","Alemania nunca firmó la rendición incondicional propiamente dicha"],
        correctAnswer: "El 8 de mayo de 1945",
        text:"La rendición incondicional alemana se produjo el 8 de mayo de 1945 pocos días después de la muerte de Adolf Hitler el 30 de abril de 1945.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4nWzEOwdKR3AqasdFTHkfpaFj0eCJ2yEWMw&usqp=CAU"
    }
    ,
    {
		question: "¿En qué famosa reunión se decidió la división de Alemania entre los aliados?",
        answers: ["En la Conferencia de Yalta","En la Conferencia de Nuremberg","En la Conferencia de París"],
        correctAnswer: "En la Conferencia de Yalta",
        text:"Los líderes de las potencias que aliadas que ganaron la Segunda Guerra Mundial ratificaron en Potsdam la repartición del país en cuatro partes, pero la decisión la tomaron meses antes en la famosa conferencia de Yalta, a orillas del Mar Negro.",
        image: "https://historia.nationalgeographic.com.es/medio/2016/04/29/conferencia-de-yalta_ac5e4658.png"
    }
    ,
    {
		question: "Los japoneses también realizaron brutales experimentos con humanos similares a los realizados por los nazis bajo la dirección de Josef Mengele. ¿Quién se conoce como el Mengele Nipón?",
        answers: ["Falso, Japón nunca realizó experimentos con humanos","Mamoru Shigemitsu","Shiro Ishii"],
        correctAnswer: "Shiro Ishii",
        text:"Shiro Ishii, el “Mengele nipón”, fue un médico japonés que estuvo al frente de la Unidad 731, ubicada en Harbin, al noreste de China y destinada a la experimentación de armas biológicas.",
        image: "https://historia.nationalgeographic.com.es/medio/2016/04/29/shiro-ishii_c5eb5788.png"
    }
    ,
    {
		question: "¿Con qué mujer se casó Hitler?",
        answers: ["Nunca se casó","Con Eva Braun","Con Else Krüger"],
        correctAnswer: "Con Eva Braun",
        text:"Justo antes de suicidarse Adolf Hitler contrajo matrimonio con Eva Braun en el búnker donde murieron, en el centro de Berlín.",
        image: "https://i.gifer.com/9Vc5.gif"
    },
    {
		question: "¿Qué significa la frase Arbeit macht frei escrita en muchas de las entradas a los campos de concentración?",
        answers: ["Trabajar purifica el alma","Trabaja o muere","El trabajo hace libre"],
        correctAnswer: "El trabajo hace libre",
        text:"Los nazis daban la bienvenida a sus prisioneros en los campos de concentración con esta frase que, aunque es bastante ambigua, puede traducirse como el trabajo hace libre. Además, para los propios guardianes de los campos servía como liberación de la culpa.",
        image: "https://historia.nationalgeographic.com.es/medio/2016/04/29/arbeit-macht-frei_4d282eac.jpg"
    }
    ,
    {
		question: "¿Cuál fue el país que sufrió un mayor número de bajas militares y civiles? ",
        answers: ["Alemania","URSS","Inglaterra"],
        correctAnswer: "URSS",
        text:"La URSS sufrió casi 24 millones de bajas entre militares y civiles, muy por encima del resto de participantes en la Segunda Guerra Mundial.",
        image: "https://ik.imagekit.io/smdxc0e2g3/userscontent2-endpoint/images/89cbd64a-f77b-4e3d-a685-a09a90a4e0d0/598777fcfa753b25ae07c079d6aa625a.gif?tr=w-0,rt-0"
    } ,
    {
		question: "¿Cuál de estas películas no transcurre durante la Segunda Guerra Mundial?",
        answers: ["Objetivo Birmania","Platoon","El día más largo"],
        correctAnswer: "Platoon",
        text:"Platoon se desarrolla en la guerra de Vietnam. Las historias narradas en Objetivo Birmania y El día más largo, por su parte, sí se desarrollan entre los años 1939 y 1945.",
        image: "https://historia.nationalgeographic.com.es/medio/2016/04/29/guardias-alemanes-de-la-ss-a-punto-de-ser-fusilados_c72d04bd.png"
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
            var user = firebase.auth().currentUser;
auth.onAuthStateChanged(user=>{
    var hoy = new Date();
var dd = hoy.getDate();
var mm = hoy.getMonth()+1;
var yyyy = hoy.getFullYear();
var data_carpet=dd+'_'+mm+'_'+yyyy;

var firebaseref=firebase.database().ref('Test/'+document.getElementById('Titles').textContent+'/'+user.displayName);
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