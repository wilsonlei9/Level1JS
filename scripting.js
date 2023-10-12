let clock = 7;
let random;
let answer;
let clickCount;
let num1 = "1";
let num2 = "2";
let num3 = "3";



    function init() {
        document.getElementById("clockNum").innerHTML = clock;
        clickCount = 0;
        random = ((Math.floor(Math.random() * 3) + 1).toString()) + ((Math.floor(Math.random() * 3) + 1).toString()) + ((Math.floor(Math.random() * 3) + 1).toString())
        return random;
    }

    function guess() {
        // clock--;
        // document.getElementById("clockNum").innerHTML = clock;
        // answer = num1 + num2 + num3;
        // if (answer = random)
        // {
        
        // }
    }

    function button1() {
        var text = document.getElementById("display1");
        text.style.display = "block";
        // num1 = num1.toString();
        clickCount++;
        if (clickCount == 3)
        {
            answer = num1 + num2 + num3;
            answerNum = parseInt(answer);
            clock--;
            document.getElementById("clockNum").innerHTML = clock;
            if (answerNum < random)
            {
                var text = document.getElementById("less");
                var text2 = document.getElementById("greater");
                text.style.display = "block";
                text2.style.display = "none";
                answer = 0;
            }
            if (answerNum > random)
            {
                var text = document.getElementById("greater");
                var text2 = document.getElementById("less");
                text.style.display = "block";
                text2.style.display = "none";
                answer = 0;
            }
            if (answerNum == random)
            {
                clock = 8;
            }
            if (clock == 0)
            {
                document.getElementById("button1").disabled = true;
                document.getElementById("button2").disabled = true;
                document.getElementById("button3").disabled = true;
            }
            clickCount = 0;
        }
    }

    function button2() {
        var text = document.getElementById("display2");
        text.style.display = "block";
        // num2 = num2.toString();
        clickCount++;
        if (clickCount == 3)
        {
            answer = num1 + num2 + num3;
            answerNum = parseInt(answer);
            clock--;
            document.getElementById("clockNum").innerHTML = clock;
            if (answerNum < random)
            {
                var text = document.getElementById("less");
                var text2 = document.getElementById("greater");
                text.style.display = "block";
                text2.style.display = "none";
                answer = 0;
            }
            if (answerNum > random)
            {
                var text = document.getElementById("greater");
                var text2 = document.getElementById("less");
                text.style.display = "block";
                text2.style.display = "none";
                answer = 0;
            }
            if (answerNum == random)
            {
                clock = 8;
            }
            if (clock == 0)
            {
                document.getElementById("button1").disabled = true;
                document.getElementById("button2").disabled = true;
                document.getElementById("button3").disabled = true;
            }
            clickCount = 0;
        }
    }

    function button3() {
        var text = document.getElementById("display3");
        text.style.display = "block";
        // num3 = num3.toString();
        clickCount++;
        if (clickCount == 3)
        {
            answer = num1 + num2 + num3;
            answerNum = parseInt(answer);
            clock--;
            document.getElementById("clockNum").innerHTML = clock;
            if (answerNum < random)
            {
                var text = document.getElementById("less");
                var text2 = document.getElementById("greater");
                text.style.display = "block";
                text2.style.display = "none";
                answer = 0;
            }
            if (answerNum > random)
            {
                var text = document.getElementById("greater");
                var text2 = document.getElementById("less");
                text.style.display = "block";
                text2.style.display = "none";
                answer = 0;
            }
            if (answerNum == random)
            {
                clock = 8;
            }
            if (clock == 0)
            {
                document.getElementById("button1").disabled = true;
                document.getElementById("button2").disabled = true;
                document.getElementById("button3").disabled = true;
            }
            clickCount = 0;
        }
    }

   

    function clear() {
        document.getElementbById("display1").style = "display:none;";
    }




