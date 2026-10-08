let puntos = [];

function setup() {
  const c = createCanvas(windowWidth, windowHeight);
  c.parent("fondo");
  const n = floor((width * height) / 18000);
  for (let i = 0; i < n; i++) {
    puntos.push({
      p: createVector(random(width), random(height)),
      v: p5.Vector.random2D().mult(random(0.2, 0.7)),
    });
  }
}

function draw() {
  background(6, 26, 51);
  for (const a of puntos) {
    a.p.add(a.v);
    if (a.p.x < 0 || a.p.x > width) a.v.x *= -1;
    if (a.p.y < 0 || a.p.y > height) a.v.y *= -1;
    noStroke();
    fill(77, 163, 255);
    circle(a.p.x, a.p.y, 4);
  }
  const m = createVector(mouseX, mouseY);
  for (let i = 0; i < puntos.length; i++) {
    for (let j = i + 1; j < puntos.length; j++) {
      const d = puntos[i].p.dist(puntos[j].p);
      if (d < 120) {
        stroke(30, 136, 229, map(d, 0, 120, 160, 0));
        line(puntos[i].p.x, puntos[i].p.y, puntos[j].p.x, puntos[j].p.y);
      }
    }
    if (puntos[i].p.dist(m) < 150) {
      stroke(156, 201, 255, 120);
      line(puntos[i].p.x, puntos[i].p.y, m.x, m.y);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
