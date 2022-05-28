class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
      console.log('height is '+ this.height);
      console.log('width is '+ this.width);
    }

  }

const p = new Rectangle(10,5);
console.log('class Rectangle.name is '+Rectangle.name);
console.log('p.name is '+p.name);

// named
let q = class Rectangle2 {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
console.log('q.name is '+q.name);
// output: "Rectangle2"