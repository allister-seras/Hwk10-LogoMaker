const {Cirlce, Triangle, Square} = require("./shape.js")

describe("Shape Test", () => {
    test("Shape should match the user input", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
    });
    test("shape should match the user input", () => {
        const shape = new Cirlce();
        shape.setColor("green");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="40" fill="green"/>');
    });
    test("shape should match the user input", () => {
        const shape = new Square();
        shape.setColor("red");
        expect(shape.render()).toEqual('<rect x="90" y="50" width="120" height="120" fill="red"/>');
    });
}) 

