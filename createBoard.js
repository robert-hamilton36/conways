function createBoard (size) {
    let board = []
    for(let i = 0; i<size; i++){
        rowi = []
        for(let j = 0; j<size; j++){
            rowi.push(0)
        }
        board.push(rowi)
    }
    return board

}

// console.log(createBoard(2)) 

module.exports = createBoard
