function createBoard (size) {
    let board = []
    for(let i = 0; i<size; i++){
        rowi = []
        for(let j = 0; j<size; j++){
            let random = (Math.random() >= 0.9)
            if(random){
                rowi.push(true)
            }else{
                rowi.push(false)
            }
        }
        board.push(rowi)
    }
    return board

}

// console.log(createBoard(2)) 

module.exports = createBoard
