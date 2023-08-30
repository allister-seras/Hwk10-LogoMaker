const {Cirlce, Triangle, Square} = require("./shape.js")

describe("Triangle Test", () => {
    test("shape should match the user input", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
    })
}) 

