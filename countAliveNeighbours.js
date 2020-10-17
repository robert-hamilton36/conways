const getNeighbours = require('./getNeighbours')

function countAliveNeighbours (cellRow, cellColumn, board) {
    //yuck
    // return getNeighbours(cellRow, cellColumn, board).reduce((x, i) => {if(i){x++} return x},0)

    //yuck twice
    // return getNeighbours(cellRow, cellColumn, board).reduce(function(x, i){
    //     if(i){
    //         x++
    //     }
    //     return x
    // },0)

    let arr = getNeighbours(cellRow, cellColumn, board)
    let count = 0
    for(x of arr){
        if(x){
            count+=1
        }
    }

    return count

}

module.exports = countAliveNeighbours
