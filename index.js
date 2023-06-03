function newtxt() {
    var show = document.getElementById("q-5").innerHTML = "Welcome to Elevation academy";
}

function changeFlexDirection() {
    var container = document.querySelector(".container");
    if (container.style.flexDirection === "row") {
      container.style.flexDirection = "column";
    } else {
      container.style.flexDirection = "row";
    }
}
  
document.getElementById("ques4").innerHTML = "Hello World";


document.getElementById("heading").style.color = "red";

function updateTimer() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    var timeString = hours + ":" + minutes + ":" + seconds;

    document.getElementById("clock").textContent = timeString;
}

setInterval(updateTimer, 1000);






