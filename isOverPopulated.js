function isOverPopulated (neighbourCount) {
    if(neighbourCount > 3){
        return true
    }
    return false
}

module.exports = isOverPopulated
