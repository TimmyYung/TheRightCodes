// Constructs all the 7 pieces
// Some are in a 3 by 3 to rotate more easily
function createPiece(type){
    if(type === "T"){
        return[
            [0, 0, 0],
            [1, 1, 1],
            [0, 1, 0],
        ];
    } 
    
    else if (type === "O"){
        return[
            [2, 2],
            [2, 2],
        ];
    } 
    
    else if (type === "L"){
        return[
            [0, 3, 0],
            [0, 3, 0],
            [0, 3, 3],
        ];
    }

    else if(type === "J"){
        return[
            [0, 4, 0],
            [0, 4, 0],
            [4, 4, 0],  
        ];     
    }

    else if(type === "I"){
        return[
            [0, 5, 0, 0],
            [0, 5, 0, 0],
            [0, 5, 0, 0],  
            [0, 5, 0, 0], 
        ];  
    }

    else if(type === "S"){
        return[
            [0, 6, 6],
            [6, 6, 0],
            [0, 0, 0],  
        ];     
    }

    else if(type === "Z"){
        return[
            [7, 7, 0],
            [0, 7, 7],
            [0, 0, 0],  
        ];     
    }
}

function updateScore() {
    document.getElementById('score').innerText = tetris.player.score;
}

const playerElements = document.querySelectorAll(".player");
console.log(playerElements);

// Get the canvas from the HTML page
const canvas = document.getElementById('tetris');
const tetris = new Tetris(canvas);

// Everytime a key is pressed
document.addEventListener('keydown', event =>{
    const player = tetris.player;
    // Move left when you press the left arrow key
    if (event.keyCode === 37){
        player.move(-1);
    } 
    // Move right when you press the right arrow key
    else if(event.keyCode === 39){
        player.move(1);
    }

    // Move down when you press the down arrow key
    else if(event.keyCode === 40){
        player.drop();
    }

    // Rotate counter-clockwise when you press the Q key
    else if(event.keyCode === 81) {
        player.rotate(-1);
    }

    // Rotate clockwise when you press the up arrow key
    else if(event.keyCode === 38) {
        player.rotate(1);
    }
});

updateScore();