const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

// When you hover on the left section, it adds a new container
left.addEventListener("mouseenter", () => {
    container.classList.add("hover-left");
});

// Remove the container when you leave the section
left.addEventListener("mouseleave", () => {
    container.classList.remove("hover-left");
});

// When you hover on the right section, it adds a new container
right.addEventListener("mouseenter", () => {
    container.classList.add("hover-right");
});

// Remove the container when you leave the sections 
right.addEventListener("mouseleave", () => {
    container.classList.remove("hover-right");
});