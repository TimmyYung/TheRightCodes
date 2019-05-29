// Get the canvas from the HTML page
const canvas = document.getElementById('tetris');
// Allows to draw on the canvas
const context = canvas.getContext("2d");

// Changes the size of the piece to be bigger
context.scale(20, 20);

// Constructs how the T-Piece looks like
// There is an empty row at the top so that it rotates properly
const matrix = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0],
]

function draw(){
    // Make the canvas background colour black
    context.fillStyle = "#000";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draws the block
    drawMatrix(player.matrix, player.pos);
}

function drawMatrix(matrix, offset){
// Colours the piece when there is a piece there
    matrix.forEach((row, y) => {
        row.forEach((value, x) =>{
            if (value !== 0) {
                context.fillStyle ="red";
                // Makes the piece height and width 1 
                context.fillRect(x + offset.x, 
                                    y + offset.y,
                                    1, 1)
            }
        });
    });
}

// Makes it constantly draw a new block 
function update(){
    draw();
    requestAnimationFrame(update);
}

// Makes a constant to where to place the blocks
const player = {
    pos:{x:5, y:5},
    matrix: matrix,
}

update();
