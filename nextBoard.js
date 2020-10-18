const nextCellState = require('./nextCellState')
const countAliveNeighbours = require('./countAliveNeighbours')

function nextBoard (currentBoard) {
//for cell in board
//count alive neighbours
//get next board cell state
    let nextBoard = []

    for(var i = 0; i < currentBoard.length; i++){
        nextBoard[i] = []
        for(var j = 0; j< currentBoard[i].length; j++){
            let currentCellState = false
            if(currentBoard[i][j]){
                currentBoard[i][j] = true
            }
            let neighbourCount = countAliveNeighbours(i, j, currentBoard)
            nextBoard[i][j] = nextCellState(currentCellState, neighbourCount)
        }
    }



    return nextBoard
}

module.exports = nextBoard
