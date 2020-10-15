
// const _radius = Symbol();//Private property
// const _draw = Symbol();//Private Method

// class Circle{
//     constructor(radius){
//         this[_radius]=radius;
//     }

//     [_draw](){

//     }
// }

// const c= new Circle(1);

//Inheritance in classes
class Shape {
    constructor(color) {
        this.color = color;
    }
    move() {
        console.log('move');
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color),
            this.radius = radius
    }
    draw() {
        console.log('draw');
    }
}

const c = new Circle('red', 1);