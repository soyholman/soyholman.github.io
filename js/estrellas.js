
	
	let $ = c.getContext("2d"),
		// оприделяем переменные 
		w = c.width = window.innerWidth, // h and w = ширене окна браузера
	   h = c.height = window.innerHeight,
		random =n=>Math.random()*n,
		stars = new Array(1000).fill().map(()=>{
			 return {r: random(w), s: random(0.01), a: random(Math.PI*2)}; // r - radius s - speed a - угол
		});
		
	  console.log(stars)
  function loop(){
	$.fillStyle = "rgba(0,0,8,.1)";
	$.fillRect(0,0,w,h);
	stars.forEach(e=>{
	  e.a+=e.s; // увелич угол (угол + скорость)
	  $.beginPath();
	  $.arc(Math.cos(e.a)*e.r + w/2, Math.sin(e.a)*e.r + h/2, 1,0,Math.PI*2); // сложная но простая функция
	  $.closePath();
	  $.fillStyle = "white";
	  $.fill();
	})

	requestAnimationFrame(loop);
  }
  
	requestAnimationFrame(loop); // вызов
	
	window.addEventListener("resize", ()=>{
	w = c.width = window.innerWidth;
	h = c.height = window.innerHeight;
  }) // на ресайз 
	
