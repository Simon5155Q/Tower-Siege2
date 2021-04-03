class Chain{
    constructor(bodyA ,pointB) {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.05,
            length:22,
        }
        
        this.Chain = Constraint.create(options);
        this.pointB = pointB
        World.add(world, this.Chain);
      }
      
      release(){
        this.Chain.bodyA = null;
      }
      
      display(){
        
        if(this.Chain.bodyA){
          var pointA = this.Chain.bodyA.position
          var pointb = this.pointB
          strokeWeight(4);
          line(pointA.x, pointA.y, pointb.x, pointb.y); 
        }

      }
}