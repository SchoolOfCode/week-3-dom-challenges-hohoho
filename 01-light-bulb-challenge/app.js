/*
Learning Objectives:
  1. Understand and utilize DOM element selection.
  2. Implement event listeners on buttons.
  3. Manipulate image attributes dynamically based on user interactions.

Brief:
You're provided with two images of a lightbulb: one turned on and one turned off. Your task is to implement the functionality to control the bulb's illumination. Use the 'Turn On' and 'Turn Off' buttons to switch the src attribute of the image tag, effectively lighting up or dimming the bulb.

Expected Outcomes:
  1. When the "Turn On" button is clicked, the lightbulb image should change to its 'on' state.
  2. When the "Turn Off" button is clicked, the lightbulb image should change to its 'off' state.
  3. The bulb's state should only change when the respective button is clicked.
*/

// Place your plan and solution below!

// Capture the turn on and turn off buttons in variables.
const onBtn = document.getElementById("turnBulbOn");
const offBtn = document.getElementById("turnBulbOff");

// Capture the img tag in a variable.
const image = document.querySelector("img");

// Add "click" event listeners to the turn on and turn off buttons.
onBtn.addEventListener("click", () => {
  // When turn on btn is clicked, change the img src to lightbulbon png
  image.src = "light-bulb-on.png";
});

offBtn.addEventListener("click", () => {
  // When turn on btn is clicked, change the img src to lightbulbon png
  image.src = "light-bulb-off.png";
});

// When turn off btn clicked, change src to lightBulbOff png/
