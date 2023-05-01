let d = new Date();
let time = d.toLocaleTimeString();

function checkTime() {
    console.log(time);
}

setInterval(checkTime, 1000);