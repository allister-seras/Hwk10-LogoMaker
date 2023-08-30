class Shape {
    constructor () {
        this.color=""
    }

    setColor(color) {
        this.color = color
    }
}

class Cirlce extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="40" fill="${this.color}"/>`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="90" y="50" width="120" height="120" fill="${this.color}"/>`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
}

module.exports = {Cirlce, Triangle, Square}