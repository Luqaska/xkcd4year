// I put this here to stop the API for being overcalled
var start = new Date();
document.getElementById("comic").src = "https://xkcd-proxy.lu700.repl.co/?n=" + start.getFullYear() + "&img";


function main() {
  // Get today's date and time
  var now = new Date();
  var year = now.getFullYear();
  
  // Details
  document.getElementById("year").innerHTML = year;
  document.getElementById("link").href = "https://xkcd.com/" + year + "/";
  
  // Count down
  var cdDate = new Date("Jan 1, " + (year+1) + " 00:00:00").getTime();

  // Find the distance between now and the count down date
  var distance = cdDate - now;

  // Time calculations for days, hours, minutes and seconds
  var d = Math.floor(distance / (1000 * 60 * 60 * 24));
  var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("cd").innerHTML = "<b>" + d + "</b>d <b>" + h + "</b>h <b>" + m + "</b>m <b>" + s + "</b>s<span id='nxt'><br>For the next comic</span>";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("comic").src = "https://xkcd-proxy.lu700.repl.co/?n=" + year + "&img";
    document.getElementById("msg").innerHTML = "🥳 HAPPY NEW YEAR!!! 🎉";
  }

}

// The program will update every second
setInterval(main, 1000);
