class Tetris
{
    constructor(canvas)
    {
        this.canvas = canvas;
        // Allows to draw on the canvas
        this.context = canvas.getContext("2d");

        // Changes the size of the piece to be bigger
        this.context.scale(20, 20);

        this.arena = new Arena(12, 20);
        // Runs the class in player.js, make the object
        this.player = new Player(this);

        this.colors = [
            null,
            '#FF0D72',
            '#0DC2FF',
            '#0DFF72',
            '#F538FF',
            '#FF8E0D',
            '#FFE138',
            '#3877FF',
        ];

        let lastTime = 0;
        // Makes it draw a new block 
        const update = (time = 0) => {
            const deltaTime = time-lastTime;
            lastTime = time;

            this.player.update(deltaTime)

            this.draw();
            requestAnimationFrame(update);
        };
        update();
    }

    draw()
    {
        // Make the canvas background colour black
        this.context.fillStyle = "#000";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draws the piece when it collides with the arena
        this.drawMatrix(this.arena.matrix, {x:0, y:0});
        // Draws the block
        this.drawMatrix(this.player.matrix, this.player.pos);
    }

    drawMatrix(matrix, offset)
    {
        // Colours the piece when there is a piece there
        matrix.forEach((row, y) => {
            row.forEach((value, x) =>{
                if (value !== 0) {
                    // Fills the block with a colour depending on the number
                    this.context.fillStyle = this.colors[value];
                    // Makes the piece height and width 1 
                    this.context.fillRect(x + offset.x, 
                                    y + offset.y,
                                    1, 1);
                }
            });
        });
    }
}
