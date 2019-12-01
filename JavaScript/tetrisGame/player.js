class Player{
    constructor(tetris)
    {
        this.DROP_SLOW = 1000;
        this.DROP_FAST = 50;

        this.tetris = tetris;
        this.arena = tetris.arena;
        this.dropCounter = 0;
        // Every second, drop the piece one step
        this.dropInterval = this.DROP_SLOW;

        this.pos = {x: 0, y:0};
        this.matrix = null;
        this.score = 0;

        this.reset();
    }

    // Makes the piece move down
    drop(){
        this.pos.y++;
        // When you collide with both the arena and player
        if (this.arena.collide(this)){
            // Moves the player back up
            this.pos.y--;
            this.arena.merge(this);
            // Sets the player at the top
            this.reset();
            this.score += this.arena.sweep();
            this.tetris.updateScore(this.score);
        }
        // Delayes the next key press by a second
        this.dropCounter = 0;
    }

    // Creates collision on the left and right
    move(dir)
    {
        this.pos.x += dir;
        if (this.arena.collide(this)){
            this.pos.x -= dir;
        }
    }

    // Randomizes what pieces show
    reset(){
        const pieces = "ILJOTSZ";
        this.matrix = createPiece(pieces[pieces.length * Math.random() | 0]);
        this.pos.y = 0;
        this.pos.x = (this.arena.matrix[0].length/2 | 0) - 
                     (this.matrix[0].length/2 | 0);
        // When the canvas is filled, resets the board
        if(this.arena.collide(this)){
            this.arena.clear();
            this.score = 0;
            this.tetris.updateScore(0);
        }
    }

    rotate(dir)
    {
        const pos = this.pos.x;
        let offset = 1;
        this._rotateMatrix(this.matrix, dir);
        // Makes it so you can't rotate into a wall
        while(this.arena.collide(this)){
            this.pos.x += offset;
            offset = -(offset + (offset > 0 ? 1: -1));
            if (offset > this.matrix[0].length){
                this._rotateMatrix(this.matrix, -dir);
                this.pos.x = pos;
                return;
            }
        }
    }

    // To rotate the piece, we transpose it (Change from columns to rows)
    // Then we reverse the numbers
    _rotateMatrix(matrix, dir){
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


    update(deltaTime)
    {
        this.dropCounter += deltaTime;
        if (this.dropCounter > this.dropInterval){
            this.drop();
        }
    }
}