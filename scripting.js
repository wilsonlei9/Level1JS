let clock = 7;
let random;
let answer;

    function init() {
        document.getElementById("clockNum").innerHTML = clock;
        random = Math.floor(Math.random() * 3) + 1;
    }

    function guess() {
        clock--;
        document.getElementById("clockNum").innerHTML = clock;
            
    }

    function storeAnswer() {
        document.querySelector('#buttons')
        .addEventListener('click', event => {
        let target = event.target;
        if (target.matches('button')) {
      let value = target.innerHTML
      
      document.querySelector('#output').value += value
    }
    });
    }




