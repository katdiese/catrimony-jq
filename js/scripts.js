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

document.getElementById("detailsNav").onclick = () => {
  console.log('vanilla!');
}

document.getElementById("hamburger").onclick = function() {
  showClose();
}

document.getElementById("close").onclick = function() {
  showHamburger();
}

function countdownTimer(endtime) {
  var timeRemaining = Date.parse('2017-12-17') - Date.parse(new Date());
  var sec = Math.floor((timeRemaining/1000) % 60 );
  var min = Math.floor((timeRemaining/1000/60) % 60);
  var h = Math.floor( timeRemaining/(1000*60*60) % 24 );
  var d = Math.floor( timeRemaining / ( 1000*60*60*24 ));

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



