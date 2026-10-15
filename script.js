
// --------------------------------------------------
// SCENES
// Read through the comments below to see what this section does
//
// TO CUSTOMIZE THIS SECTION
// 1) add fields for each scene, as relevant, to match your mockup
// 2) customize the scenes to fit your story
// 3) add any new fields to the function below
// --------------------------------------------------

// First, we create a variable for the current scene being displayed
let currentScene = "controlRoom";

// Then, we create an object that stores the data for each scene,
const scenes = {
  // See "backyard" for the first example
  controlRoom: {
    title: "Location: Control Room",
    text: "The main room with red emergency light and broken screen and monitor",
    image: "https://img.magnific.com/free-vector/spaceship-control-center-illustration_107791-5306.jpg?semt=ais_hybrid&w=740&q=80",
    // you can choose how many choices to include
    // each choice can have text, an action, and/or nextScene
    choices: [
      {
        text: "Search console",
        action: function () {
          pickUpCode("1st Number");
          messageDisplay.textContent = "You wipe off the dusty screen and find a number in the corner";
        },
      },
      {
        text: "Go to Science Lab",
        action: function () {
          messageDisplay.textContent = "You walk through the sliding doors into the Science Lab";
        },
        nextScene: "scienceLab"
      },
      {
        text: "Go to Engine room",
        action: function () {
          messageDisplay.textContent = "You walk down the stairs into the Engine Room";
        },
        nextScene: "engineRoom"
      }
    ]
  },

  scienceLab: {
    title: "Location: Science Lab",
    text: "A cold room that contains abandoned work station and a large glass tank filled with a blue liquid",
    image: "https://img.magnific.com/free-vector/cartoon-spaceship-lab-interior-design_107791-20618.jpg?semt=ais_hybrid&w=740&q=80",
    choices: [
      {
        text: "Search desk",
        action: function () {
          pickUpItem("Security Keycard");
          messageDisplay.textContent = "You open the desk drawers and find some kind of card";
        }
      },
         {
        text: "Search glass tank",
        action: function () {
          pickUpCode("2nd Number");
          messageDisplay.textContent = "You look though the blue liquid and spot a number at the bottom of the glass";
        }
      },
      {
        text: "Go back to Control room",
        action: function () {
          messageDisplay.textContent = "You walk back to the Control Room";
        },
        nextScene: "controlRoom"
      }
    ]
  },

  engineRoom: {
    title: "Location: Engine Room",
    text: "A hot burning room with power generators, filled with loose wires hanging from the ceiling",
    image: "https://media.moddb.com/cache/images/games/1/26/25055/thumb_620x2000/station_concept_3.jpg",
    choices: [
      {
        text: "Search fuse box",
        action: function () {
          pickUpCode("3rd Number");
          messageDisplay.textContent = "You open the fuse box and find a piece of paper taped inside with a number";
        },
      },
      {
        text: "Open locked door to Storage room",
        action: function () {
          unlockDoor();
        }
      },
      {
        text: "Go back to Control room",
        action: function () {
          messageDisplay.textContent = "You walk back to the Control Room";
        },
        nextScene: "controlRoom"
      }
    ]
  },

   storageRoom: {
    title: "Location: Storage Room",
    text: "A dark and cramped room filled with metal supply crates and boxes",
    image: "https://cdna.artstation.com/p/assets/images/images/016/506/842/large/isaac-kho-unity02.jpg?1552417459",
    choices: [
      {
        text: "Search storages crates",
        action: function () {
          pickUpCode("4th Number");
          messageDisplay.textContent = "You open a supply crate and see a number carved inside the lid";
        }
      },
      {
        text: "Go to Escape room",
        action: function () {
          messageDisplay.textContent = "You walk to the Escape Room";
        },
        nextScene: "escapeRoom"
      },
      {
        text: "Go back to Engine room",
        action: function () {
          messageDisplay.textContent = "You walk back to the Engine Room";
        },
        nextScene: "engineRoom"
      }
    ]
  },

   escapeRoom: {
    title: "Location: Escape Room",
    text: "A small emergency room that contains an escape pod with a keypad on the wall, waiting for a code",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmtHARjidbR6LTCgURTCNlGtkzbIt3gXQsuYpc8FXh6CS7h0wASF5RM6A&s=10",
    choices: [
      {
        text: "Enter the 4 digit code into the console",
        action: function () {
          checkCode();
        }
      },
      {
        text: "Go back to Storage room",
        action: function () {
          messageDisplay.textContent = "You walk back to the Storage Room";
        },
        nextScene: "storageRoom"
      }
    ]
  },

   winScene: {
    title: "You Win",
    text: "You enter the correct code. The vr system closes and your VR headgear turn off, you safely take off your headgear and promise to never play any game again",
    image: "https://cdn.displate.com/artwork/270x380/2025-08-06/ba18731a-27cf-4665-9a0f-ba933ebf4b98.jpg",
    choices: []
  },

   loseScene: {
    title: "You Lose",
    text: "Your sanity has crumbled and your headgear overheats frying your brain, your vision go blank and you slowly start losing your consciousness",
    image: "https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2024/07/man-with-cracked-vr-headset.png?w=1600&h=1600&fit=crop",
    choices: []
  }
};

// --------------------------------------------------
// UPDATE SCENES
// Read through the comments below to see what this section does
//
// TO CUSTOMIZE THIS SECTION
// 1) add a new const variable for each new field you added above
// Make sure to match the ids used in your mock up with the fields 
// 2) set the .textContent of each variable to the corresponding field in the scene object
// Use sceneTitle as a model
// --------------------------------------------------

// First, we create variables to hold the references to the HTML elements
// Technically you could just use document.getElementById('id-name') 
// in the function itself, but that would be very wordy 
// and make the code harder to read
const sceneTitle = document.getElementById("scene-title");
const sceneText = document.getElementById("scene-text");
const choicesContainer = document.getElementById("choices-container");
const characterName = document.getElementById("character-name");
const sceneImage = document.getElementById("scene-image");

// Then, we create a function to update the scene,
function updateScene(sceneName) {

  //This update the variable currentScene with the new scene passed as a parameter
  currentScene = sceneName;

  //This accesses the scene object based on the scene name
  const scene = scenes[sceneName];

  // Here, for each html element, you change the textContent to match
  // the appropriate text from the scene object
  sceneTitle.textContent = scene.title;
  sceneText.textContent = scene.text;
  characterName.textContent = scene.character;
  sceneImage.src = scene.image;

  // Clear the old buttons before creating new ones
  choicesContainer.innerHTML = "";

  // Loop through each choice in the scene, connecting an action and nextScene if included
  scene.choices.forEach(function (choice) {
    const button = document.createElement("button");

    button.textContent = choice.text;

    button.addEventListener("click", function () {
      if (choice.action) {
        choice.action();
      }

      if (choice.nextScene) {
        updateScene(choice.nextScene);
      }
    });

    choicesContainer.appendChild(button);
  });
}

// This updates the screen with the current scene
updateScene(currentScene);


// --------------------------------------------------
// HEALTH
// Read through the comments below to see what this section does
//
// TO CUSTOMIZE THIS SECTION
// Either customize the name from health to steps, stress, etc...
// OR
// create a copy of each step for each additional state you want to track throughout the game
// --------------------------------------------------

// Create a variable for health
let health = 100;

// Display current health
const healthDisplay = document.getElementById("health-display");

// Create a function to update health 
function updateHealth(amount) {
  health += amount;
  healthDisplay.textContent = health + "%";

  if (health <= 0) {
    updateScene("loseScene");
  }
}

// This refreshes the health display
updateHealth(0);

// --------------------------------------------------
// INVENTORY
// Read through the comments below to see what this section does
//
// For now, you are probably leaving this section as is. 
// --------------------------------------------------

// Create a variable for inventory
let inventory = [];

// Display current inventory
const inventoryDisplay = document.querySelector("#inventory-display");
const messageDisplay = document.getElementById("message-display");

// Create a function to update inventory 
function pickUpItem(itemName) {
    // Add itemName to the inventory array
    // Show the updated inventory on the page

    if (!inventory.includes(itemName)) {
        inventory.push(itemName);
        messageDisplay.textContent = "You picked up: " + itemName;
        inventoryDisplay.textContent = inventory.join(", ");
    }
}

let codeTracker = [];

// Display current inventory
const codeTrackerDisplay = document.querySelector("#codeTracker-display");

// Create a function to update inventory 
function pickUpCode(itemName) {
    // Add itemName to the inventory array
    // Show the updated inventory on the page

    if (!codeTracker.includes(itemName)) {
        codeTracker.push(itemName);
        messageDisplay.textContent = "You found: " + itemName;
        codeTrackerDisplay.textContent = codeTracker.join(", ");
    }
}

// --------------------------------------------------
// CONDITIONAL 
// Depending on how you want to implement the conditional logic, you may 
// simply adjust the names below or you may need to expand upon this section
// --------------------------------------------------

// Create a function that checks if the inventory contains one item and if so shows the win condition scene.
function unlockDoor() {
  if (inventory.includes("Security Keycard")) {
    updateScene("storageRoom");
    messageDisplay.textContent = "You swiped the keycard across the lock, the scanner turns green and the heavy steel door slides open";
  } else {
    messageDisplay.textContent = "You were denied access to the the storage room, the heavy steel door stays locked. Maybe you need a keycard to open it";
    updateHealth(-30);
  }
}

function checkCode() {
  if (codeTracker.includes("1st Number") && codeTracker.includes("2nd Number") && codeTracker.includes("3rd Number") && codeTracker.includes("4th Number")) {
    messageDisplay.textContent = "It shows a green success, you safely escape in the escape pod";
    updateScene("winScene");
  } else {
    messageDisplay.textContent = "It shows a red error and the screen sparks violently, you need to find all 4 numbers to escape";
    updateHealth(-50);
  }
}

