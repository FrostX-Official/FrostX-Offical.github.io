list = [
    "known as “frost”",
    "known as “software developer”",
    "known as “hacker on lego game”",
    "known as “enoxis dev”",
    "known as “dev on python”",
    "known as “game developer”",
    "known as “8 grader”",
    "known as “undefined” ;)"
]

current = 1

document.getElementById('known-as').style.opacity = 1;
document.getElementById('known-as').style.transition = "100ms";

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.2;
    }, 10);
}
function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.2;
    }, 1);
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

setInterval(function(){
    current += 1
    document.getElementById("known-as").innerHTML = list[current];
    if (current == 6) {
        current = 0
    }
}, 4000);