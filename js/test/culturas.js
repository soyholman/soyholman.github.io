var QUESTIONS = [
    {
        question: "En este país se acostumbra luego de ofrecer un brindis, mirar a los ojos a las personas con las que brindaste mientras bebes…",
        answers: ["Polonia","Austria","Alemania"],
        correctAnswer: "Alemania",
        image: "https://i.gifer.com/3JA.gif",
        text:"De no seguir esta costumbre, se dice que tendrás 7 años de malas relaciones sexuales."
    },
    {
        question: "Si quieres buscar trabajo en este país no debes colocar información personal (sexo, fecha de nacimiento, estado marital e incluso foto de perfil) en tu CV…  ",
        answers: ["Estados Unidos","Reino Unido","Todas las anteriores"],
        correctAnswer: "Todas las anteriores",
        text:"En estos países al igual que en Irlanda, la legislación de igualdad de oportunidades requiere que los empleadores contraten solo por mérito. ",
        image: "https://c.tenor.com/KZZTEP9gzLwAAAAC/interview-jobinterview.gif"
    },
    {
     
        question: "En este país se prohibió en el 2015 el uso de prendas de vestir de color amarillo…",
        answers: [ "Malasia","Vietnam","Islandia" ],
        correctAnswer: "Malasia",
        text:"Este color se prohibió debido a que representaba a los protestantes que querían la renuncia del primer ministro de este país, por alegaciones de corrupción.",

        image: "https://i.gifer.com/1kYr.gif"
    },
    {
		question: "La cultura de este país establece que luego de las comidas principales se debe beber vino tinto acompañado de una degustación de queso…",
        answers: ["Portugal","Holanda","Francia"],
        correctAnswer: "Francia",
        text:"Si se quiere cambiar de vino tinto a vino blanco, no se debe verter en la misma copa sin limpiarla antes… De lo contrario se reirán de ti. ",
        image: "https://i.gifer.com/DvEs.gif"
    },
    {	
		question: "En este país asiático es de mala educación soplarse o limpiarse la nariz con fuerza mientras se está en público o acompañado…",
        answers: ["China", "Japón","Indonesia"],
        correctAnswer: "Japón",
        text:"Esta acción está considerada como un hábito grosero por parte de los japoneses… Lo correcto es hacerlo en privado. ",
        image: "https://c.tenor.com/RvRsu3tqRPsAAAAC/mr-bean-snot.gif"
    },
    {
		question: "La costumbre de sentarse en familia unos minutos antes de emprender un viaje es muy importante en este país… ",
        answers: ["Uruguay","Australia","Ucrania"],
        correctAnswer: "Ucrania",
        text:"El hacer esto significa recibir buena suerte durante el viaje.",
        image: "https://www.edreams.com/blog/wp-content/uploads/sites/3/2016/03/fly-travel-plane.gif"
    },
    {
		question: "País donde se puede ver en las calles a dos hombres caminando agarrados de la mano como señal de amistad…",
        answers: ["India","España","China"],
        correctAnswer: "India",
        text:"En este país se encuentra la familia más grande del mundo. Un hombre vive con sus 39 esposas y 94 hijos en una misma casa.",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1553003268/hdzlpfkyecbnpxww59cl.jpg"
    },
    {
		question: "Se considera de mala educación usar la mano izquierda para comer y para otras actividades en este país…",
        answers: ["Singapur","Corea","Sri. Lanka"],
        correctAnswer: "Sri. Lanka",
        text:"En este país al igual que en India, usan la mano izquierda luego de usar el baño… Por lo que usar esta mano para otras actividades es considerado insultante y sucio.",
        image: "https://acegif.com/wp-content/gifs/handshake-8.gif"
    }
    ,
    {
		question: "La costumbre de este país es que en la celebración de año nuevo se debe saltar sobre 7 olas en el mar, pidiendo un deseo por cada ola…",
        answers: ["Brasil","Australia","Bahamas"],
        correctAnswer: "Brasil",
        text:"Esta es una costumbre realizada en la playa Copacabana en Río de Janeiro.",
        image: "https://c.tenor.com/ifORYs1Ex1UAAAAC/rio-brazil.gif"
    }
    ,
    {
		question: "Se dice que en este país toparse con una monja en la calle es señal de muerte… ",
        answers: ["Rusia","Italia","España"],
        correctAnswer: "Italia",
        text:"Gracias a esta creencia, las personas al toparse con una monja o con una ambulancia, se realizan la señal de la cruz para así, alejar la muerte.",
        image: "https://c.tenor.com/SH_UYCQOizsAAAAC/raging-nun-nun.gif"
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

var firebaseref=firebase.database().ref('Test/'+document.getElementById('Titles').textContent+'/'+data_carpet+'/'+user.displayName);
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