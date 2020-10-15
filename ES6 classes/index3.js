class Shape {
    move() {
        console.log('move');
    }
}

class Circle extends Shape {
    //Method Overriding
    move() {
        super.move();
        console.log('move circle');
    }
}

const c = new Circle();