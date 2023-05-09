let nodes = [];
let nodeCount = 100;
let maxDistance = 200;
let minSize = 5;
let maxSize = 15;

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  canvas.style('position', 'fixed');
  background(0);

  for (let i = 0; i < nodeCount; i++) {
    nodes.push(new Node());
  }
}

function draw() {
  background(0);

  for (let i = 0; i < nodes.length; i++) {
    nodes[i].update();
    nodes[i].display();
    for (let j = 0; j < nodes.length; j++) {
      if (i != j) {
        let d = dist(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
        if (d < maxDistance) {
          stroke(255, map(d, 0, maxDistance, 255, 0));
          line(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
        }
      }
    }
  }
}

class Node {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(minSize, maxSize);
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-2, 2);
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x < 0 || this.x > width) {
      this.xSpeed = -this.xSpeed;
    }

    if (this.y < 0 || this.y > height) {
      this.ySpeed = -this.ySpeed;
    }
  }

  display() {
    noStroke();
    fill(255, 100);
    ellipse(this.x, this.y, this.size);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
