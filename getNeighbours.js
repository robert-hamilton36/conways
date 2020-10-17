const indicesAreOutOfBounds = require('./indicesAreOutOfBounds')

function getNeighbours (cellRow, cellColumn, board) {
    // const i = cellRow
    // const j = cellColumn

    //each cell could have 8 neighbours
    //from (cellRow -1 to cellRow +1)
    //from (cellColumn -1 to cellColumn +1)

    // define possible min max levels

    let rowMin = cellRow-1
    let rowMax = cellRow+1
    let columnMin = cellColumn-1
    let columnMax = cellColumn+1

    //check validity of min max levels

    // console.log("rowMax: " + rowMax)
    // console.log("rowMin: " + rowMin)
    // console.log("columnMax: " + columnMax)
    // console.log("columnMin: " + columnMin)

    arr = []

    for(var i = rowMin; i < rowMax+1; i++){
        for(var j = columnMin; j < columnMax+1; j++){
            if( i === cellRow && j ===cellColumn){
                // cell is one checking for neighbours
                continue
            }
            if(!indicesAreOutOfBounds(cellRow + i, cellColumn + j, board)){
                arr.push(board[i][j])
            }
        }
    }
    return arr

}
getNeighbours(0, 0, [[1,2,3],[4,5,6],[7,8,9]])

module.exports = getNeighbours
