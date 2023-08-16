// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Getter method for diameter
  get diameter() {
    return this.radius * 2;
  }

  // Setter method for diameter
  set diameter(newDiameter) {
    this.radius = newDiameter / 2;
  }

  // Getter method for circumference
  get circumference() {
    return Math.PI * this.diameter;
  }

  // Setter method for circumference
  set circumference(newCircumference) {
    this.radius = newCircumference / (2 * Math.PI);
  }

  // Getter method for area
  get area() {
    return Math.PI * this.radius ** 2;
  }

  // Setter method for area
  set area(newArea) {
    this.radius = Math.sqrt(newArea / Math.PI);
  }
}

const circle = new Circle(5);

console.log("Initial radius:", circle.radius);
console.log("Diameter:", circle.diameter); // Should be 10
console.log("Circumference:", circle.circumference); // Should be approximately 31.4159...
console.log("Area:", circle.area); // Should be approximately 78.5398...

circle.diameter = 12;
console.log("Updated radius after setting diameter:", circle.radius); // Should be 6

circle.circumference = 40;
console.log("Updated radius after setting circumference:", circle.radius); // Should be approximately 6.366...

circle.area = 100;
console.log("Updated radius after setting area:", circle.radius); // Should be approximately 5.641...
