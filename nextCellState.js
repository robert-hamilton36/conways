const isOverPopulated = require('./isOverPopulated')
const isUnderPopulated = require('./isUnderPopulated')
const isRessurectable = require('./isRessurectable')

function nextCellState (cellState, neighbourCount) {
    if(!cellState){
        return isRessurectable(neighbourCount)
    }
    return (!(isOverPopulated(neighbourCount) || isUnderPopulated(neighbourCount)))
}


module.exports = nextCellState
