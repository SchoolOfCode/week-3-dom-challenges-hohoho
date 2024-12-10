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

//whats our problem: We want the color picker to cause the canvas to change color 
//Grab color picker input
const colorInput = document.getElementById("colorPicker");
//Grab canvas
const canvas = document.getElementById("canvas");
//what needs to listen to what?
//event listener: canvas to listen to the color picker
//canvas should be listening every time
//

function test(){
//console.log("hi");
//get current color in value(in colorInput.value)
//change canvas.style.background to colorInput.value
canvas.style.background = colorInput.value;
};

//canvas 
//canvas.addEventListener('mouse over', test) 
colorInput.addEventListener('input', test);
