let startTime;

function startCount(){
    let num = document.getElementById("number");
    num.innerHTML = "0";
    num.classList.add("on");
    startTime = new Date().getTime();
    //count();
    for(let i = 0; i < 100000000; i++){
        let trash = i / Math.random();
    }
    let nowTime = new Date().getTime();
    let timePassed = nowTime - startTime;
    num.innerHTML = timePassed + "<span class='mini'>ms / 100M divisions</span>";
    rate(parseInt(num.innerHTML), document.getElementById("header"), document.body);
    
    startCount = function(){}; // Немного жестокости... Зато без ошибок!
}

/*function count(){
    let num = document.getElementById("number");
    num.innerHTML = parseInt(num.innerHTML) + 1;
    setTimeout(count, 0);
    let nowTime = new Date().getTime();
    let timePassed = nowTime - startTime;
    if(timePassed >= 1000) {
        num.innerHTML = num.innerHTML + "<span class='mini'>fps</span>";
        rate(parseInt(num.innerHTML), document.getElementById("header"), document.body);
        count = function(){}; // Опять немного жестокости... Зато без ошибок!
    }
}*/

function rateN(number){
    if(number < 56)
        return 0;
    else if(number < 66)
        return 1;
    else
        return 2;
}

function rate(number, el, body){
    let n = rateN(number);
    switch(n) {
        case 0:
            el.innerHTML = "Bad speed."
            body.classList.add("badspeed");
            return;
        case 1:
            el.innerHTML = "Not bad!"
            body.classList.add("okspeed");
            return;
        case 2:
            el.innerHTML = "Exellent!"
            body.classList.add("goodspeed");
    }
}