$(function (){
    var question1;
    var question2;
    var question3;
    var question4;
    var question5;
    var question6;
    var question7;
    var question8;
    var question9;
    var question10;
    var question11;
    var question12;
    var question13;
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
        question5 = "";
        question6 = "";
        question7="";
        question8="";
        question9="";
        question10="";
        question11="";
        question12="";
        question13="";
        playGame();
    
        setTimeout (function (){
            $("#quizArea").show();
        }, 1000);
    }
    
    function countTime(){
        countStart--;
        $("#timeDisplay").html("<h3>Tiempo Restante: " + countStart + "</h3>");
        if (countStart === -1){
            clearInterval(timer);
            $("#timeDisplay").html("<h3>El tiempo se ha acabado !!</h3>");
    
            setTimeout(timeUp, 2000);
        }
    }

    function playGame() {
        countStart = 80;
        timer = setInterval(countTime,1000);
        
        $("#submitButton").on("click", function () {
            
            if ($("input[type = 'radio']:checked").length <6    ) {
                alert("¡Por favor, elija una respuesta para cada pregunta!!")
            } else {
            clearInterval(timer);    
            question1 = parseInt($('input[name = "1"]:checked').val(),10);
            question2 = parseInt($("input[name = '2']:checked").val(),10);
            question3 = parseInt($("input[name = '3']:checked").val(),10);
            question4 = parseInt($("input[name = '4']:checked").val(),10);
            question5 = parseInt($("input[name = '5']:checked").val(),10);
            question6 = parseInt($("input[name = '6']:checked").val(),10);
            question6 = parseInt($("input[name = '7']:checked").val(),10);
            question6 = parseInt($("input[name = '8']:checked").val(),10);
            question6 = parseInt($("input[name = '9']:checked").val(),10);
            question6 = parseInt($("input[name = '10']:checked").val(),10);
            question6 = parseInt($("input[name = '11']:checked").val(),10);
            question6 = parseInt($("input[name = '12']:checked").val(),10);
            question6 = parseInt($("input[name = '13']:checked").val(),10);
            result = question1 + question2 + question3 + question4+question5+question6+question7+question8+question9+question10+question11+question13;
            gameResult();
            }
        });
    }
    
    function gameResult (){
        $("#quizArea").hide();
        $("#playAgain").show();
        $("#resultArea").show();
        $("#result").text("Tu resultado es:" + " " + result + "/100");
                if (result >= 74){
                    $("#comment").text("Bien hecho !");
                }else{
                    $("#comment").text("Mejor suerte la próxima vez. :(!")
                }
    }
    
    function timeUp (){
        $("#quizArea").hide();
        $("#playAgain").show();
    }
        
    })