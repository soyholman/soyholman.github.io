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