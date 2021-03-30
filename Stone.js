class Stone {
  constructor(x, y) {
    var options = {
      'density':4,
      'friction': 9.0,
      'restitution':0.5,
    };
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 30;
    this.height = 40;
    World.add(world, this.body);
  };
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill('grey');
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
  };
};
