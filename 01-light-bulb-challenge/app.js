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
const lightOnButton = document.getElementById("turnBulbOn");
const lightBulbImg = document.getElementById("lightbulb");
//create a function
function turnOnLight(){
  lightBulbImg.src = "light-bulb-on.png" 
};

//pass the name of the function to the event handler
//think in physical terms

lightOnButton.addEventListener('click', turnOnLight);

// Place your plan and solution below!

const lightOffButton = document.getElementById("turnBulbOff");
//create a function
function turnOffLight(){
  lightBulbImg.src = "light-bulb-off.png" 
};

//pass the name of the function to the event handler
//think in physical terms

lightOffButton.addEventListener('click', turnOffLight);