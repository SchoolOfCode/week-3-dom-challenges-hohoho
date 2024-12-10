/*
Learning Objectives:
  1. Understand and utilize DOM input events.
  2. Manipulate the style properties of DOM elements.
  3. React to changes in input fields dynamically.

Brief:
You're presented with a canvas and a color picker. Your task is to implement the functionality to change the background color of the canvas based on the color selected in the color picker.

Expected Outcomes:
  1. When a color is selected using the color picker, the canvas should instantly reflect that color.
  2. The canvas should always display the current color selected in the color picker.
*/

// Place your plan and solution below!

// When the input element gets input set the canvas' background colour to
// the value attribute of input.

// Store Canvas and input elements in variables.
const canvas = document.querySelector('#canvas');
const colourInput = document.querySelector('#colorPicker');
// Add an eventListener to the input
colourInput.addEventListener('input', (e) => {
  canvas.setAttribute("style", `background: ${e.target.value}`)
})
// in the eventListener function set the canvas background to
// input's value;