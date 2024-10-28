# ISM-3232-Coding-Challenge-12
Coding Challenge: Interactive Drawing Application with HTML5 Canvas

Introduction:
In this coding challenge, you will create an Interactive Drawing Application using the HTML5 <canvas> element and JavaScript. The goal is to allow users to draw shapes (lines, rectangles, circles), apply colors, and clear the canvas. This challenge emphasizes canvas drawing, event handling, and dynamic visual updates.

Business Case:
A small design company needs an interactive web-based drawing tool for quick sketches. The tool should allow users to:

Choose between drawing lines, rectangles, or circles.
Select a color for drawing.
Draw by clicking and dragging the mouse.
Clear the canvas with a button.

Tasks:
1. Set Up the HTML Structure

Create an HTML page with:
A <canvas> element.
Radio buttons to select the drawing tool.
A color input to select a drawing color.
A button to clear the canvas.

Commit: Setup HTML structure for the drawing application.

2. Configure the JavaScript for Drawing Context

Write JavaScript to:
Get the 2D canvas drawing context.
Add event listeners for mouse events to handle drawing.
Track user input to draw shapes dynamically.

Commit: Add canvas setup and event handling logic.

3. Implement Shape Drawing Logic

Draw shapes based on the selected tool (line, rectangle, or circle).
Use mousedown, mousemove, and mouseup events to create shapes.

Commit: Implement shape drawing logic for lines, rectangles, and circles.

4. Add Color Selection and Canvas Clearing

Use the color input to set the drawing color.
Add a button to clear the canvas when clicked.

Commit: Implement color selection and canvas clearing functionality.

Hints:

Use ctx.beginPath() to start a new shape.
Track mouse positions to determine shape size.
Use ctx.clearRect() to clear the canvas.
Make sure the drawing stops when the mouse button is released.