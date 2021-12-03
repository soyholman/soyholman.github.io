$(function (){
    var question1;
    var question2;
    var question3;
    var question4;
    var result;
    var countStart = 21;
    var timer;

    $(".startGame").on("click", function () {  
        startGame();
        $("#playAgain").hide();
        $("#resultArea").hide();
        //Clear all checked button
        $("input[type=radio]").prop("checked",false);
    })
    
    function startGame(){
        $("#start").appendTo("#playAgain");
        question1 = "";
        question2 = "";
        question3 = "";
        question4 = "";
        playGame();
    
        setTimeout (function (){

            var can=document.querySelector('#quizArea');
            can.width=W;can.height=H;can.style.background='white';
            $("#quizArea").show();
        }, 1000);
    }
    
    function countTime(){
        countStart--;
        $("#timeDisplay").html("<h3>Tiempo restante : " + countStart + "</h3>");
        if (countStart === -1){
            clearInterval(timer);
            $("#timeDisplay").html("<h3>Se ha agotado el tiempo !!</h3>");
    
            setTimeout(timeUp, 2000);
        }
    }
    
    function playGame() {
        countStart = 30;
        timer = setInterval(countTime,1000);
        
        $("#submitButton").on("click", function () {
            
            if ($("input[type = 'radio']:checked").length < 4) {
                alert("¡Por favor, elija una respuesta para cada pregunta!!")
            } else {
            clearInterval(timer);    
            question1 = parseInt($('input[name = "organ"]:checked').val(),10);
            question2 = parseInt($("input[name = 'phobia']:checked").val(),10);
            question3 = parseInt($("input[name = 'softDrink']:checked").val(),10);
            question4 = parseInt($("input[name = 'americans']:checked").val(),10);
            
            result = question1 + question2 + question3 + question4;
            gameResult();
            }
        });
    }
    
    function gameResult (){
        $("#quizArea").hide();
        $("#playAgain").show();
        $("#resultArea").show();
        $("#result").text("Tu resultado es" + " " + result + "/100");
                if (result >= 75){
                    $("#comment").text("Muy Bien !");
                }else{
                    
                    $("#comment").text("No muy bien !")
                }
    }
    
    function timeUp (){
        $("#quizArea").hide();
        $("#playAgain").show();
    }
        
    })


    "use strict"
class Circle {
constructor(x,y,r,c,v,e){
this.x=x;
this.y=y;
this.r=r;
this.c=c;
this.v=v;
this.e=e;
this.a=.5;
}
draw(){this.sn+=.3
       this.y-=this.v;
       this.y<this.e?this.a-=.02:'';
       san.beginPath();
       san.arc(this.x,this.y,this.r,0,44/7,false);
       san.fillStyle=`rgb(0,0,0)`;
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