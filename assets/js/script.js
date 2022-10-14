$(document).ready(function() {
    var input = "";
    var first = " ";
    var last = " ";
    var equ = 0;
    $("#result").val("");



    $("#one").on("click", function() {
        input = input + 1;
        $("#result").val(input);
    })
    $("#two").on("click", function() {
        input = input + 2;
        $("#result").val(input);
    })
    $("#three").on("click", function() {
        input = input + 3;
        $("#result").val(input);
    })
    $("#four").on("click", function() {
        input = input + 4;
        $("#result").val(input);
    })
    $("#five").on("click", function() {
        input = input + 5;
        $("#result").val(input);
    })
    $("#six").on("click", function() {
        input = input + 6;
        $("#result").val(input);
    })
    $("#seven").on("click", function() {
        input = input + 7;
        $("#result").val(input);
    })
    $("#eight").on("click", function() {
        input = input + 8;
        $("#result").val(input);
    })
    $("#nine").on("click", function() {
        input = input + 9;
        $("#result").val(input);
    })
    $("#zero").on("click", function() {
        input = input + 0;
        $("#result").val(input);
    })
    $("#add").on("click", function() {
        var value = 0;
        for (i = 0; i < input.length; i++) {
            if (input[i] == "+" || input[i] == "-" || input[i] == "*" || input[i] == "/") {
                value = parseInt(value) + 1;
            }
        }
        if (value == 0) {
            input = input + "+";
            $("#result").val(input);
        }
    })
    $("#sub").on("click", function() {
        var value = 0;
        for (i = 0; i < input.length; i++) {
            if (input[i] == "+" || input[i] == "-" || input[i] == "*" || input[i] == "/") {
                value = parseInt(value) + 1;
            }
        }
        if (value == 0) {
            input = input + "-";
            $("#result").val(input);
        }
    })
    $("#mul").on("click", function() {
        var value = 0;
        for (i = 0; i < input.length; i++) {
            if (input[i] == "+" || input[i] == "-" || input[i] == "*" || input[i] == "/") {
                value = parseInt(value) + 1;
            }
        }
        if (value == 0) {
            input = input + "*";
            $("#result").val(input);
        }
    })
    $("#div").on("click", function() {
        var value = 0;
        for (i = 0; i < input.length; i++) {
            if (input[i] == "+" || input[i] == "-" || input[i] == "*" || input[i] == "/") {
                value = parseInt(value) + 1;
            }
        }
        if (value == 0) {
            input = input + "/";
            $("#result").val(input);
        }
    })
    $("#reset").on("click", function() {
        input = "";
        first = " ";
        last = " ";
        $("#result").val(input);


    })
    $("#equal").on("click", function() {

        for (i = 0; i < input.length; i++) {
            if (input[i] == "=") {
                equ = parseInt(equ) + 1;

            }
        }
        if (equ == 0) {
            var result = " ";
            for (i = 0; i < input.length; i++) {

                if (input[i] == "+" || input[i] == "-" || input[i] == "*" || input[i] == "/") {
                    var tempVar = i;
                    var value = input[i];
                }
            }
            for (j = 0; j < input.length; j++) {
                if (j < tempVar) {
                    first = first + input[j];
                } else if (j > tempVar) {
                    last = last + input[j];
                }
            }

            if (value == "+") {
                result = parseInt(first) + parseInt(last);
                $("#result").val(input + "=" + result);
                input = result;
                last = "";
                first = "";
                result = "";
            } else if (value == "-") {
                result = parseInt(first) - parseInt(last);
                $("#result").val(input + "=" + result);
                input = result;
                last = "";
                first = "";
                result = "";

            } else if (value == "*") {
                result = parseInt(first) * parseInt(last);
                $("#result").val(input + "=" + result);
                input = result;
                last = "";
                first = "";
                result = "";


            } else if (value == "/") {
                result = parseInt(first) / parseInt(last);
                $("#result").val(input + "=" + result);
                input = result;
                last = "";
                first = "";
                result = "";


            }
        } else {
            alert();
        }
    })
})