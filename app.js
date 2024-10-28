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

// Task 4: Add Color Selection and Canvas Clearing

document.getElementById("colorPicker").addEventListener("input", (e) => {
    color = e.target.value
})

document.getElementById("clearCanvas").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

// Task 3: Implement Shape Drawing Logic

let isDrawing = false
let startX, startY

// Start drawing on mousedown, stop drawing on mouseup/mouseleave
canvas.addEventListener("mousedown", (e) => {
    isDrawing = true
    startX = e.offsetX
    startY = e.offsetY
})

canvas.addEventListener("mouseup", () => isDrawing = false)
canvas.addEventListener("mouseleave", () => isDrawing = false)

// Draw shape on mousemove while drawing
canvas.addEventListener("mousemove", (e) => {
    if (!isDrawing) return

    // Clear only the area to avoid overlapping shapes while dragging
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.strokeStyle = color

    // Line drawing logic
    if (shape === "line") {
        ctx.moveTo(startX, startY)
        ctx.lineTo(e.offsetX, e.offsetY)
    }
    // Rectangle drawing logic
    else if (shape === "rectangle") {
        const width = e.offsetX - startX
        const height = e.offsetY - startY
        ctx.fillRect(startX, startY, width, height)
    }
    // Circle drawing logic
    else if (shape === "circle") {
        const radius = Math.sqrt((e.offsetX - startX) ** 2 + (e.offsetY - startY) ** 2)
        ctx.arc(startX, startY, radius, 0, 2 * Math.PI)
    }

    ctx.stroke()
})

