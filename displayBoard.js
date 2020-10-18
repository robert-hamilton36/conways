function displayBoard (board) {
  for(row of board){
    let disRow = []
    for (col of row){
      if(col){
        disRow.push("*")
      }else{
        disRow.push("^")
      }
    }
    console.log(disRow.join(" "))
  }
}

module.exports = displayBoard
