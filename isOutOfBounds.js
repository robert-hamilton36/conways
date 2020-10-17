function isOutOfBounds (index, array) {

    // return(array[index] == undefined)

    // console.log(array)
    // console.log(index)
    if (index < 0){
        return true
    }else if(index >= array.length){
        return true
    }
    return false
}

// console.log(isOutOfBounds(1, [2, 4]))

module.exports = isOutOfBounds
