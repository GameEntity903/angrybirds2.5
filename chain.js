class chain{
    constructor(bodyA,bodyB){
       var options=
        {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.2,
            length:5
        }
this.cain = Matter.Constraint.create(options);
    World.add(world,this.cain);
}
display(){
    stroke(10);
    line(this.cain.bodyA.position.x,this.cain.bodyA.position.y,this.cain.bodyB.position.x,this.cain.bodyB.position.y);
}
}