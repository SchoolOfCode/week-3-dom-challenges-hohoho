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

// Make a random number 0 / 1 generating function.
function isTrue() {
  const door = Math.floor(Math.random() * 2 + 1);
  return door === 1 ? true : false;
}

const doorReset = () => {
  for (let d of door) {
    d.src = "door-closed.png";
  }
};

// Store the pointer to the doors div in a variable.
const doorsDiv = document.querySelector("div");
const door = document.querySelectorAll(".door");
// add an event listener to it.
// When clicked the first child should generate either 0 or one.
// if it gets false:
//     its src changes to open door and last child src is Loz.
// else if it gets true:
//    its src changes to Loz and last chils src is open door.
doorsDiv.addEventListener("click", () => {
  const lozDoor = isTrue();
  console.log(lozDoor);
  if (lozDoor) {
    door[0].src = "door-open-loz.png";
    door[1].src = "door-open-empty.png";
  } else {
    door[1].src = "door-open-loz.png";
    door[0].src = "door-open-empty.png";
  }
  setTimeout(doorReset, 3000);
});

//add timer to close doors/

