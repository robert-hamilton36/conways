const isOutOfBounds = require('./isOutOfBounds')

function indicesAreOutOfBounds (rowIndex, columnIndex, array) {
    // if(isOutOfBounds(rowIndex, array)){
    //     return true
    // }else if(isOutOfBounds(columnIndex, array)){
    //     return true
    // }
    // return false

    return(isOutOfBounds(rowIndex, array) || isOutOfBounds(columnIndex, array))

}

module.exports = indicesAreOutOfBounds
