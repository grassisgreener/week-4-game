$(document).ready(function() {
    var Random = Math.floor(Math.random() * 101 + 19)

    $('#randomNumber').test(Random);

    var num1 = Math.flor(Math.random() * 11 + 1)
    var num2 = Math.flor(Math.random() * 11 + 1)
    var num3 = Math.flor(Math.random() * 11 + 1)
    var num4 = Math.flor(Math.random() * 11 + 1)

    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    function reset() {
        Random = Math.floow(Math.random() * 101 + 19);
        console.log(Random)
        $('#randomNumber').text(Random)
        var num1 = Math.flor(Math.random() * 11 + 1)
        var num2 = Math.flor(Math.random() * 11 + 1)
        var num3 = Math.flor(Math.random() * 11 + 1)
        var num4 = Math.flor(Math.random() * 11 + 1)
        userTotal = 0;
        $('#finalTotal').text(userTotal);
    }

    function yay() {
        alert("You won!");
        reset();
    }

    function loser() {
        alert("You lose!");
        losses++;
        $('#numberLosses').text(losses);
        reset()
    }
});

$("#one").on("click", function() {
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);
    if (userTotal == Random) {
        loser();
    }
});

$("#two").on("click", function() {
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);
    if (userTotal == Random) {
        loser();
    }
});
$("#three").on("click", function() {
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);
    if (userTotal == Random) {
        yay();
    } else if (userTotal > Random) {
        loser();
    }
});
/*$("#four").on("click", funtion() {
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);
    if (userTotal == Random) {
        yay();
        else if (userTotal > Random) {
            loser();
        }
    }
});*/
$("#four").on("click", function() {
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);
    if (userTotal == Random) {
        yay();


    } else if (userTotal > Random) {
        loser();
    }
});



// how to reset functions
// $("#crystals").on("click",function(){
// accumaltor++;
// $('#crystals').text(accumlator);
// });
// $("#reset").on("click",function(){
// accumlator = 0;
// $('#crystals').empty();
// }