var hitrn = 0;


function makeBubble() {
  var clutter = "";
  var rn = "";

  for (var i = 1; i <= 133; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

var timer = 60;
function runTimer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector("#pbtm").innerHTML = `<h1 id = "gme">Game Over</h1>`
    }
  }, 1000);
}

function getNewHit() {
     hitrn = Math.floor(Math.random()*10)
     document.querySelector("#hitval").textContent = hitrn

}

var score = 0
function increaseScore() {
   score += 10;
   document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function(details) {
     var clickedNum = Number(details.target.textContent)
      if (clickedNum === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
      }
})
getNewHit();
runTimer();
makeBubble();
