function countdownTimer(endtime) {
  let timeRemaining = Date.parse('2017-12-17') - Date.parse(new Date());
  let sec = Math.floor((timeRemaining/1000) % 60 );
  let min = Math.floor((timeRemaining/1000/60) % 60);
  let h = Math.floor( timeRemaining/(1000*60*60) % 24 );
  let d = Math.floor( timeRemaining / ( 1000*60*60*24 ));

  let dayHtml = document.getElementById('daysRemaining');
  let hourHtml = document.getElementById('hoursRemaining');
  let minHtml = document.getElementById('minRemaining');
  let secHtml = document.getElementById('secRemaining');

  dayHtml.innerHTML = d;
  hourHtml.innerHTML = h;
  minHtml.innerHTML = min;
  secHtml.innerHTML = sec;

  return {
    seconds: sec,
    minutes: min,
    hours: h,
    days:  d
  }
}

countdownTimer();

setInterval(function() {
  let remainder = Date.parse('2017-12-17') - Date.parse(new Date());
  if(remainder > 0) {
    console.log(countdownTimer('2017-12-17'));
  }
}, 1000);

// Main Nav Controllers
function showClose() {
  document.getElementById("close").style.display = "block";
  document.getElementById("mobile-nav").style.display = "block";
  document.getElementById("hamburger").style.display = "none";
}
function showHamburger() {
  document.getElementById("hamburger").style.display = "block";
  document.getElementById("close").style.display = "none";
  document.getElementById("mobile-nav").style.display = "none";
}

// Group of listeners to close hamburger menu
document.getElementById("detailsNav").onclick = () => {
  showHamburger();
}
document.getElementById("travelNav").onclick = () => {
  showHamburger();
}
document.getElementById("storyNav").onclick = () => {
  showHamburger();
}
document.getElementById("partyNav").onclick = () => {
  showHamburger();
}
document.getElementById("picNav").onclick = () => {
  showHamburger();
}
document.getElementById("regNav").onclick = () => {
  showHamburger();
}
document.getElementById("contactNav").onclick = () => {
  showHamburger();
}
document.getElementById("close").onclick = function() {
  showHamburger();
}

// Listener to open hamburger menu
document.getElementById("hamburger").onclick = function() {
  showClose();
}



