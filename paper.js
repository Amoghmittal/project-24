class Paper{
    constructor(x,y,raidus){
        this.body=Bodies.circle(x,y,raidus,{restitution:0.5});
        this.raidus=raidus
        World.add(world,this.body);
    }

    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle)
        stroke("yellow");
        strokeWeight(10);
        fill("red");
        elipseMode(CENTER);
        elipse(0,0,this.width,this.height);
        pop()
    }


}