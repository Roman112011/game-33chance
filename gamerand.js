function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let rand = getRandomInt(2);

document.getElementById("one").onclick = function() {
    let rand = getRandomInt(3);
    alert("випало.....");
    alert(rand)
    if (rand == 1) {
        alert("вітаю ви вгадали)")
    }
    else{
        alert("ви не вгадали(")
    }
}
document.getElementById("two").onclick = function() {
    let rand = getRandomInt(3);
    alert("випало...");
    alert(rand)
    if (rand == 2) {
        alert("вітаю ви вгадали)")
    }else{
        alert("ви не вгадали(")
    }
    
}