// Get the canvas from the HTML page
const canvas = document.getElementById('tetris');
// Allows to draw on the canvas
const context = canvas.getContext("2d");

// Changes the size of the piece to be bigger
context.scale(20, 20);

// Clear the line when it is full
function arenaSweep(){
    let rowCount = 1;
    // If you set a label, then you can make continue outer
    outer: for(let y = arena.length - 1; y > 0; --y){
        for(let x = 0; x < arena[y].length; ++x){
            // Check if the rows have a 0, then it is not populated
            if (arena[y][x] === 0){
                continue outer;
            }
        }

        // Takes the arena row out and fills it with 0s
        const row = arena.splice(y, 1)[0].fill(0);
        // Put it at the top of the arena
        arena.unshift(row);
        ++y

        player.score += rowCount * 10;
        rowCount *= 2;
    }
}

// Creates collision for the canvas
function collide(arena, player){
    const [m, o] = [player.matrix, player.pos];
    for (let y = 0; y < m.length; ++y){
        for(let x = 0; x < m[y].length; ++x){
            // Check the matrix at y and x if it is 0
            if(m[y][x] !== 0 && 
                (arena[y + o.y] &&
                arena[y +o.y][x+o.x]) !== 0){
                    return true;
                }
        }
    }
    return false
}

// Makes a lot of matrixes
function createMatrix(w, h){
    const matrix = [];
    while(h--){
        // Makes a new array and fills if with zeros
        matrix.push(new Array(w).fill(0));
    }
    return matrix;
}

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

function drawMatrix(matrix, offset){
    // Colours the piece when there is a piece there
        matrix.forEach((row, y) => {
            row.forEach((value, x) =>{
                if (value !== 0) {
                    // Fills the block with a colour depending on the number
                    context.fillStyle = colors[value];
                    // Makes the piece height and width 1 
                    context.fillRect(x + offset.x, 
                                        y + offset.y,
                                        1, 1)
                }
            });
        });
    }

function draw(){
    // Make the canvas background colour black
    context.fillStyle = "#000";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draws the piece when it collides with the arena
    drawMatrix(arena, {x:0, y:0})
    // Draws the block
    drawMatrix(player.matrix, player.pos);
}

// Copies the piece into the console table
function merge(arena, player) {
    player.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                arena[y + player.pos.y][x + player.pos.x] = value;
            }
        });
    });
}


// Makes the piece move down
function playerDrop(){
    player.pos.y++
    // When you collide with both the arena and player
    if (collide(arena, player)){
        // Moves the player back up
        player.pos.y--;
        merge(arena, player);
        // Sets the player at the top
        playerReset();
        arenaSweep();
        updateScore();
    }
    // Delayes the next key press by a second
    dropCounter = 0;
}

// Creates collision on the left and right
function playerMove(dir){
    player.pos.x += dir;
    if (collide(arena, player)){
        player.pos.x -= dir;
    }
}

// Randomizes what pieces show
function playerReset(){
    const pieces = "ILJOTSZ";
    player.matrix = createPiece(pieces[pieces.length * Math.random() | 0]);
    player.pos.y = 0;
    player.pos.x = (arena[0].length/2 | 0) - 
                    (player.matrix[0].length/2 | 0);
    // When the canvas is filled, resets the board
    if(collide(arena, player)){
        arena.forEach(row => row.fill(0));
        player.score = 0;
        updateScore();
    }
}

function playerRotate(dir){
    const pos = player.pos.x;
    let offset = 1;
    rotate(player.matrix, dir);
    // Makes it so you can't rotate into a wall
    while(collide(arena, player)){
        player.pos.x += offset;
        offset = -(offset + (offset > 0 ? 1: -1));
        if (offset > player.matrix[0].length){
            rotate(player.matrix, -dir);
            player.pos.x = pos;
            return;
        }
    }
}

// To rotate the piece, we transpose it (Change from columns to rows)
// Then we reverse the numbers
function rotate(matrix, dir){
    for(let y = 0; y < matrix.length; ++y){
        for(let x = 0; x< y; ++x){
            [
                matrix[x][y],
                matrix[y][x],
            ] = [
                matrix[y][x],
                matrix[x][y],
            ];
        }
    }

    if (dir >0){
        matrix.forEach(row=> row.reverse());
    } else{
        matrix.reverse();
    }
}

let dropCounter =0;
// Every second, drop the piece one step
let dropInterval = 1000;

let lastTime = 0;
// Makes it draw a new block 
function update(time = 0){
    const deltaTime = time-lastTime;
    lastTime = time;

    dropCounter += deltaTime;
    if (dropCounter > dropInterval){
        playerDrop();
    }

    draw();
    requestAnimationFrame(update);
}

function updateScore() {
    document.getElementById('score').innerText = player.score;
}

const colors = [
    null,
    '#FF0D72',
    '#0DC2FF',
    '#0DFF72',
    '#F538FF',
    '#FF8E0D',
    '#FFE138',
    '#3877FF',
];

const arena = createMatrix(12, 20);

// Makes a constant to where to place the blocks
const player = {
    pos:{x:0, y:0},
    matrix: null,
    score: 0,
}

// Everytime a key is pressed
document.addEventListener('keydown', event =>{
    // Move left when you press the left arrow key
    if (event.keyCode === 37){
        playerMove(-1);
    } 
    // Move right when you press the right arrow key
    else if(event.keyCode === 39){
        playerMove(1);
    }

    // Move down when you press the down arrow key
    else if(event.keyCode === 40){
        playerDrop();
    }

    // Rotate counter-clockwise when you press the Q key
    else if(event.keyCode === 81) {
        playerRotate(-1);
    }

    // Rotate clockwise when you press the up arrow key
    else if(event.keyCode === 38) {
        playerRotate(1);
    }
});

playerReset();
updateScore();
update();
