var inc = 1000;
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var day =  today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('klokDisplay').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
  var date = day + "-" + month + "-" + year;
  document.getElementById("dateDisplay").innertext = date;
  document.getElementById("dateDisplay").textContent = date;
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
function dayTime() {
  var currentTime = new Date().getHours();
  if (7 <= currentTime && currentTime < 18) {
    if (document.body) {
        document.getElementById("klokDisplay").style.backgroundColor = "#E5E7E9";
        document.getElementById("klokDisplay").style.color = "#1A5276";
        document.getElementById("dateDisplay").style.backgroundColor = "#E5E7E9";
        document.getElementById("dateDisplay").style.color = "#1A5276";
        document.getElementById("navigation").style.opacity = "0.8";
        document.getElementById("navigation").style.color = "#1A5276";
        document.getElementById('momentOfTheDay').innerHTML =
        "Day-time"
        document.getElementById("momentOfTheDay").style.backgroundColor = "#E5E7E9";
        document.getElementById("momentOfTheDay").style.color = "#1A5276";
    }
}
else {
    if (document.body) {
      document.getElementById("klokDisplay").style.backgroundColor = "#1A5276";
      document.getElementById("klokDisplay").style.color = "#E5E7E9";
      document.getElementById("dateDisplay").style.backgroundColor = "#1A5276";
      document.getElementById("dateDisplay").style.color = "#E5E7E9";
      document.getElementById("navigation").style.opacity = "0.5";
      document.getElementById("navigation").style.color = "#E5E7E9";
      document.getElementById('momentOfTheDay').innerHTML =
      "Night-time"
      document.getElementById("momentOfTheDay").style.backgroundColor = "#1A5276";
      document.getElementById("momentOfTheDay").style.color = "#E5E7E9"

    }
}
}
checkTime();
startTime();
dayTime();
TweenMax.to("#klokDisplay", 0.4, { y: -10, ease: Power1.easeOut, yoyoEase:true, yoyo:true, repeat:-1, repeatDelay:0.1 });
TweenMax.from("#momentOfTheDay", 1.5, {opacity: 0.5, scale:0.8, ease:Power3.easeOut,  x:1000, delay: 0.1});
TweenMax.from("#dateDisplay", 1.5, {opacity: 0.5, scale:0.8, ease:Power3.easeOut,  x:-1000, delay: 0.1});
