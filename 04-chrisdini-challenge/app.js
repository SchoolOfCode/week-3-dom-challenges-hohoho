/*
Learning Objectives:
  1. Understand and utilize DOM element selection.
  2. Implement mouse event listeners.
  3. Manipulate CSS properties through JavaScript.

Brief:
Chris is eager to perform a magic trick — to vanish before your eyes! By harnessing the power of CSS and JavaScript, make Chris disappear when the mouse hovers over his image. 

Expected Outcomes:
  1. When the user hovers over Chris's image, he should disappear.
  2. When the user moves the mouse away, Chris should reappear.

Hint: You can achieve this in multiple ways e.g. via the opacity or style property, etc. 
*/

// Place your plan and solution below!

// Store the image in a variable.
const chris = document.getElementById("chrisImage");
// Attach a mouseover eventListener and a mouseout    eventListener to the image.
// Mouseover:
// Trigger transition by changing opacity of image (to 0) via set attributes.
chris.addEventListener("mouseover", () => {
  chris.style.opacity = 0;
});
// Mouseout:
// Set opacity to 1.
chris.addEventListener("mouseout", () => {
  chris.style.opacity = 1;
});
