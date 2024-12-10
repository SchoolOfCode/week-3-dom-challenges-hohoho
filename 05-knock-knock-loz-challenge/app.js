/*
Learning Objectives:
  1. Understand and utilize DOM element selection.
  2. Implement event listeners on images.
  3. Manipulate image attributes dynamically based on user interactions and randomness.

Brief:
You're presented with two closed doors. Your task is to choose one to reveal what's behind both. Will you find Loz behind the door you chose or the other one? The outcome should be random.

Expected Outcomes:
  1. Initially, both doors are closed.
  2. When one door is clicked, both doors should open, revealing either an empty room or Loz behind them.
*/

// Place your plan and solution below!

// Make a random number generating function that returns true/false.
function isTrue() {
  const door = Math.floor(Math.random() * 2 + 1);
  return door === 1 ? true : false;
}

//Add timer to close doors/
const doorReset = () => {
  for (let d of door) {
    d.src = "door-closed.png";
  }
};

// Store the pointer to the doors div and imgs in variables.
// Add event listeners.
// When clicked generate true or false with isTrue().
// if it gives false:
//   First img src changes to open door and second img src becomes Loz.
// else if it gets true:
//    first imgs src changes to Loz and second's src becomes open door.
const doorsDiv = document.querySelector("div");
const door = document.querySelectorAll(".door");

doorsDiv.addEventListener("click", () => {
  const lozDoor = isTrue();
  if (lozDoor) {
    door[0].src = "door-open-loz.png";
    door[1].src = "door-open-empty.png";
  } else {
    door[1].src = "door-open-loz.png";
    door[0].src = "door-open-empty.png";
  }
  setTimeout(doorReset, 3000);
});
