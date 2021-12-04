$(function (){
    var question1;
    var question2;
    var question3;
    var question4;
    var question5;
    var question6;
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
            result = question1 + question2 + question3 + question4+question5+question6;
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
                    $("#comment").text("Quiza necesitas intentarlo una vez mas :(!")
                }
    }
    
    function timeUp (){
        $("#quizArea").hide();
        $("#playAgain").show();
    }
        
    })