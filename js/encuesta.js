

$(function(){
	alert('Cada pregunta que responda correctamente le da un punto. ¡Obtén 10 puntos para subir de nivel! !');
	var level = 0;
	
	function choice(array){
		return array[Math.floor(Math.random() * array.length)];
	}
	
	function sample(arr, size) {
		var shuffled = arr.slice(0), i = arr.length, min = i - size, temp, index;
		while (i-- > min) {
			index = Math.floor((i + 1) * Math.random());
			temp = shuffled[index];
			shuffled[index] = shuffled[i];
			shuffled[i] = temp;
		}
		return shuffled.slice(min);
	}
	
	function getQ(){
		states = sample(Object.keys(statesInfo),4);
		state = choice(states);
		correctAnswer = statesInfo[state];
		return states;
	}
	
	function display(states){
	    $('#question').text(state);
		for(var index = 0;index < states.length;index++){
		    $('#option' + index).text(statesInfo[states[index]]);
		}
	}
	
	function check(chosen){
	    if(chosen == correctAnswer){
			$('#correct').text('Correcto!');
			$('#correct').css('color','green');
			points++;
			
			if(points == 10){
				points = 0;
				level += 1;
				$('#level').html('Level&nbsp;' + level);
				if(level == 10){
					alert('Felicidades bien hecho!');
				}
			}
		}
		
		else{
			$('#correct').text('Incorrecto. Respuesta correcta: ' + correctAnswer);
			$('#correct').css('color','red');
			points--;
			
			if(points < 0){
				points = 0;
			}
		}
		$('#inner').animate({'width':points * 10 + '%'});
		$('#text').val('');
	}
	
	var state,correctAnswer,chosen;
	var points = 0;
    var img = new Image();
    

	var statesInfo = {'Albania' : 'Tirana','Alemania':'Berlín','Argelia':'Argel','Egipto':'El Cairo','Ghana':'Accra','Chipre':'Nicosia','Ciudad del Vaticano':'Ciudad del Vaticano','Croacia':' Zagreb','Dinamarca ':'Copenhague','Eslovaquia':'Bratislava','España':'Madrid','Francia ':'París','Hungría ':' Budapest','Italia':'Roma','Kazajistán':'Astaná','Rusia ':'Moscú','Canadá ':'Ottawa','Costa rica':'San José','El Salvador ':'San Salvador','Nicaragua Libre':'Managua','Panamá ':'Panamá','Argentina':'Buenos Aires','Venezuela':'Caracas','Antigua y Barbuda':'Saint John','Cuba':'La Habana','Montana':'Helena','Nebraska':'Lincoln','New Hampshire':'Concord','Angola':'Luanda','Camerún':'Yaundé','Congo':'Brazzaville','Eritrea':'Asmara','Etiopía':'Adis Abeba','Kenya':'Nairobi','Liberia':'Monrovia','Irán':'Teherán','Iraq':'Bagdad','Israel':'Jerusalén','Japón':'Tokio','Jordania':'Ammán','Kuwait':' Al-kuwait','Mongolia':'Ulan Bator ','Nepal,':'Katmandú','Pakistán':'Islamabad','República De Corea':'Seúl','Siria':'Damasco','Sri Lanka,':'Colombo'};

	display(getQ());
    $('#option0').on('click',function(){
        chosen = $('#option0').text();
        check(chosen);
        display(getQ());
    });
    
    $('#option1').on('click',function(){
        chosen = $('#option1').text();
        check(chosen);
        display(getQ());
    });
    
    $('#option2').on('click',function(){
        chosen = $('#option2').text();
        check(chosen);
        display(getQ());
    });
    
    $('#option3').on('click',function(){
        chosen = $('#option3').text();
        check(chosen);
        display(getQ());
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