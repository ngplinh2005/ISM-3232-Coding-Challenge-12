// Task 2: Configure the JavaScript for Drawing Context

// Get the 2D canvas drawing context
const canvas = document.getElementById("drawingCanvas")
const ctx = canvas.getContext("2d")
// Add event listeners for mouse events to handle drawing
shape = "line"
color = "#000000"

document.getElementById("line").addEventListener("change", () => {
    shape = "line"
})
document.getElementById("rectangle").addEventListener("change", () => {
    shape = "rectangle"
})
document.getElementById("circle").addEventListener("change", () => {
    shape = "circle"
})
