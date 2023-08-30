const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const {Cirlce, Triangle, Square} = require("./shape.js")

function CLI () {
    inquirer.prompt([
        {
            type: "list",
            name: "shapeType",
            message: "Select the shape of your logo.",
            choices: ["circle", "triangle", "square"]
        },
        {
            type:"input",
            name: "shapeColor",
            message: "What color would you like your logo to be?"
        },
        {
            type:"input",
            name: "text",
            message: "What text would you like inside your logo? /n(must be no more than 3 characters)",
            validate: (response) => response.length <= 3 || "You can only input 3 or less characters."
        },
        {
            type:"input",
            name: "textColor",
            message: "What color would you like your font to appear as?"
        }

    ]).then(({shapeType, shapeColor, text, textColor}) => {
        let newShape;
        switch(shapeType) {
            case "circle":
                newShape = new Cirlce();
                break;
            case "triangle":
                newShape = new Triangle();
                break;
            case "square":
                newShape = new Square();
                break;
            default:
                newShape = new Cirlce();
                break;
        }
        newShape.setColor(shapeColor)

        writeFile("example/logo.svg", generateSVG(newShape, text, textColor))
    })
}

function generateSVG(newShape, text, textColor) {
    return `<svg width="300" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${newShape.render()} 
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`
}


module.exports = CLI;