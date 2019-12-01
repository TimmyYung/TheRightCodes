class Arena{
    constructor(w, h)
    {
        const matrix = [];
        while(h--){
            // Makes a new array and fills if with zeros
            matrix.push(new Array(w).fill(0));
        }
        this.matrix = matrix;
    }

    clear(){
        this.matrix.forEach(row => row.fill(0));
    }

    // Creates collision for the canvas
    collide(player){
        const [m, o] = [player.matrix, player.pos];
        for (let y = 0; y < m.length; ++y){
            for(let x = 0; x < m[y].length; ++x){
                // Check the matrix at y and x if it is 0
                if(m[y][x] !== 0 && 
                    (this.matrix[y + o.y] &&
                    this.matrix[y +o.y][x+o.x]) !== 0){
                        return true;
                    }
            }
        }
        return false
    }

    // Copies the piece into the console table
    merge(player) {
        player.matrix.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    this.matrix[y + player.pos.y][x + player.pos.x] = value;
                }
            });
        });
    }

    // Clear the line when it is full
    sweep()
    {
        let rowCount = 1;
        let score = 0;
        // If you set a label, then you can make continue outer
        outer: for(let y = this.matrix.length - 1; y > 0; --y){
            for(let x = 0; x < this.matrix[y].length; ++x){
                // Check if the rows have a 0, then it is not populated
                if (this.matrix[y][x] === 0){
                    continue outer;
                }
            }

            // Takes the arena row out and fills it with 0s
            const row = this.matrix.splice(y, 1)[0].fill(0);
            // Put it at the top of the arena
            this.matrix.unshift(row);
            ++y

            score += rowCount * 10;
            rowCount *= 2;
        }
        return score;
    }
}