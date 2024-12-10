/*
Learning Objectives:
  1. Manipulate DOM elements based on user input.
  2. Dynamically create and delete elements based on slider values.
  3. Enhance understanding of event-driven programming.

Brief:
You're provided with a slider (ranging from 1 to 5) and an empty space to populate star icons. Your task is to create or remove stars dynamically based on the value of the slider.

Expected Outcomes:
  1. The number of star icons should match the slider's value.
  2. Adjusting the slider should immediately reflect the change in the number of star icons.
*/
//What object/element/thing needs to change its state for us to meet the brief? (This is probably where the listener goes)
//What thing on the page is changing its state as a result of something the user is doing? How can we hook into the aspect of it that is changing (eg its value attribute, or whatever)
//What kind of eventListener can let us do that?

// Place your plan and solution below!

// what is the problem? When slider goes up 1 star added
// when slider goes down stars go down
// variable id connected starSlider
const starSlider = document.getElementById("starSlider");
// query select div . span
const starIcon = document.querySelector("div > span");

function updateStars(){
//when it starslider values increased the stars move
//starSlider.value = starDiv.value;
//adjust number of spans, to match starSlider.value
//repeat 
let starMessage = `★`.repeat(starIcon.value);

starIcon.textContent = starMessage;
}

starIcon.addEventListener("input", updateStars);
//Function that adjust the starSlider when star-icon +1 and -1
//Event listener to listen for slider moving
