var targetPage;

$(function(){ 
  $('.nav > li').click(function(){
    if($(this).hasClass('active')) return;
       
    $('.nav > li.active').removeClass('active');
    $(this).addClass('active');
    targetPage = $(this).attr('data-targetPage');
    HidePage($('.page.active'));
  });
});

function ShowPage(elem, oldElem) {
  elem.addClass('active');
  elem.addClass('page-showAnim');

  elem.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
    elem.removeClass('page-showAnim');
  });
}

function HidePage(elem) {
  elem.addClass("page-hideAnim");

  elem.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
    elem.removeClass('active');
    elem.removeClass("page-hideAnim");
    ShowPage($(targetPage), elem);
  });
}

function esconde_div(){
  var elemento = document.getElementById("main-c");
  elemento.style.display = 'none';
}

function visible_div(){
  var elemento = document.getElementById("main-c");
  elemento.style.display = 'block';
}

function myFunction() {
  var dots = document.getElementById("dotsabrham");
  var moreText = document.getElementById("moreabraham");
  var btnText = document.getElementById("myBtnabrham");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Leer más"; 
    moreText.style.display = "none";
    esconde_div();
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Leer menos"; 
    moreText.style.display = "inline";

    visible_div();
  }
}

function myFunctionadriano() {
  var dots = document.getElementById("dotsadriano");
  var moreText = document.getElementById("moreadriano");
  var btnText = document.getElementById("myBtnadriano");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Leer más"; 
    moreText.style.display = "none";
 
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Leer menos"; 
    moreText.style.display = "inline";

   
  }
}


