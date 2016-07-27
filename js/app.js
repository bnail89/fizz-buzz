$(document).ready(function(){
    function fizzBuzz(maxVal){
        for (var count = 1; count <= maxVal; count++) {

            if (count % 3 == 0 && count % 5 == 0) {
                $('.content').append('FizzBuzz ');
            }

            else if (count % 3 == 0){
               $('.content').append('Fizz ');
            }

            else if (count % 5 == 0){
                $('.content').append('Buzz ');
            }

            else{
                $('.content').append(count + ' ');
            }
        }
    }

    $("#enterNumber").on('click', function(){
        var getValue = $("#numberInput").val();
        if (getValue % 1 == 0 && getValue <= 500) {
            $(".content").empty();
                fizzBuzz(getValue);
                $("#numberInput").val("");
            }
            else {
                alert("Type only numbers between 1 and 500.");
                $("#numberInput").val("");
            }
    });
});