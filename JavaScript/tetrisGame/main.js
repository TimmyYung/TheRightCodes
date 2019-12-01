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

const tetri = [];

const playerElements = document.querySelectorAll(".player");
[...playerElements].forEach(element => {
    const tetris = new Tetris(element);
    tetri.push(tetris);
});

// Everytime a key is pressed
const keyListener = (event) => {
    [
        [65, 68, 81, 87, 83],
        [37, 39, 80, 38, 40],
    ].forEach((key, index) => {
        const player = tetri[index].player;
        if (event.type === "keydown"){
            // Move left when you press the left arrow key
            if (event.keyCode === key[0]){
                player.move(-1);
            } 
            // Move right when you press the right arrow key
            else if(event.keyCode === key[1]){
                player.move(1);
            }
        
            // Rotate counter-clockwise when you press the Q key
            else if(event.keyCode === key[2]) {
                player.rotate(-1);
            }
        
            // Rotate clockwise when you press the up arrow key
            else if(event.keyCode === key[3]) {
                player.rotate(1);
            }
        }

        // Move down when you press the down arrow key
        if(event.keyCode === key[4]){
            if(event.type === "keydown"){
                if(player.dropInterval !== player.DROP_FAST){
                    player.drop();
                    player.dropInterval = player.DROP_FAST;
                }
            }else{
                player.dropInterval = player.DROP_SLOW;
            }
        }
    });
};

document.addEventListener("keydown", keyListener);
document.addEventListener("keyup", keyListener);