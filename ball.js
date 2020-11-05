class Ball {
    constructor (){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
            
        }

        this.ball = Bodies.circle(200,615,40,options);

        World.add(world,this.ball);
    }
    display(){
        ellipseMode(CENTER);
        fill ("white");
        ellipse(200,615,80,80);
    }
}