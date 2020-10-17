function isOutOfBounds (index, array) {
    if (index < 0){
        return true
    }
    if (index > array.length){
        return true
    }
    return false
}

isOutOfBounds(-1, [])

module.exports = isOutOfBounds
