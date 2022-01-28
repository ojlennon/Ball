const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const button = document.getElementById("button");
const p = document.getElementById("pp");
const bb = document.getElementById("balls");
var isMoving = true;
var balls = [];
function addBall() {
  let b = new Ball();
  balls.push(b);
}
class Ball {
  constructor() {
    this.x = Math.random() * 300 + 20;
    this.y = Math.random() * 300 + 20;
    this.rad = 20;
    this.xV = Math.random() * 5 + 1;
    this.yV = Math.random() * 5 + 1;
  }

  drawB() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
  }
  update() {
    this.x += this.xV;
    this.y += this.yV;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
    if (this.x + this.rad >= canvas.width || this.x - this.rad <= 0) {
      this.xV *= -1;
    }
    if (this.y + this.rad >= canvas.height || this.y - this.rad <= 0) {
      this.yV *= -1;
    }
  }
}

function removeBall() {
  balls.pop();
}

function clearBalls() {
  balls = [];
}

function moving() {
  if (isMoving) {
    isMoving = false;
    p.innerHTML = "Stopped";
  } else {
    isMoving = true;
    p.innerHTML = "Start";
  }
}

function cont() {
  bb.innerHTML = balls.length;
  if (isMoving) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let v = 0; v < balls.length; v++) {
      balls[v].update();
    }
  } else {
    for (let v = 0; v < balls.length; v++) {
      balls[b].drawB();
    }
  }
}

setInterval(cont, 10);
