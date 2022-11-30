class Circle {
    _radius : number;
    constructor(radius:number=2){
        this._radius = radius;
    }

    set radius(newRadius: number){
        console.log('seter')
        if(newRadius > 0 ){
            this._radius = newRadius
        }
    }
    get area(){
        console.log("Getter")
        return Math.PI * this._radius * this._radius
    }
  
}
let circle = new Circle(5);
circle.radius = -1
console.log('Circle' , circle.area)