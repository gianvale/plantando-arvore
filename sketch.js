function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let arvores = [];  


class Arvore {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.altura = 0;  
    this.crescendo = true;  
  }

  
  desenhar() {
    
    fill(139, 69, 19);  
    rect(this.x - 5, this.y - this.altura, 10, this.altura);  
    
    
    if (this.altura > 20) {
      fill(34, 139, 34);  
      ellipse(this.x, this.y - this.altura, 40, 40);  
    }
  }

  
  crescer() {
    if (this.crescendo) {
      this.altura += 0.3;  
      if (this.altura > 50) {
        this.crescendo = false;  
      }
    }
  }

  clicada(px, py) {
    
    let distancia = dist(px, py, this.x, this.y - this.altura);
    return distancia < 20;  
  }
}

function setup() {
  createCanvas(600, 400);  
  background(220);  
}

function draw() {
  background(220);  
  for (let i = 0; i < arvores.length; i++) {
    arvores[i].crescer();
    arvores[i].desenhar();
  }
}


function mousePressed() {
  
  for (let i = arvores.length - 1; i >= 0; i--) {
    if (arvores[i].clicada(mouseX, mouseY)) {
      arvores.splice(i, 1);  
      return;
    }
  }
  
  let novaArvore = new Arvore(mouseX, mouseY);
  arvores.push(novaArvore);
}