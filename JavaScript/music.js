// After the event "load" happens, the code then runs
window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
      ];

    // Loads sounds
    //Index looks at the numbers for each sound
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
            //Can plyay multiple times and hear the same sound at the same time
          sounds[index].currentTime = 0;
          sounds[index].play();
          createBubble(index);
        });
      });

      //Creates bubble animations
      const createBubble = index => {
        //Create bubbles
        const bubble = document.createElement("div");
        //Attach bubble to the visual div
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = `jump 1s ease`;
        bubble.addEventListener("animationend", function() {
            // Removes bubble when finished animation
          visual.removeChild(this);
        });
      };
    });