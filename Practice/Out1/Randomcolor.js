function getRandomHexColor() {
        const RandomColor1 = Math.floor(Math.random() * 16777215)
        const hexColor = `#${RandomColor1.toString(16).padStart(6, '0')}`
        return hexColor

  
}

// Example usage:
console.log(getRandomHexColor()) // Outputs a random hex color like #1A3B5F
console.log(getRandomHexColor()) // Outputs another random hex color like #D4E6A1
