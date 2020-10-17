function createBoard (size) {

    // let board = [];
    // for (let x = 0; x < size; x++) {
    //   let rows = [];
    //   for (let y = 0; y < size; y++) {
    //     rows.push(true);
    //   }
    //   board.push(rows);
    //   //console.log(board + "//////////")
    // }
    // console.log(board)
  
    // return board;








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
