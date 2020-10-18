function displayBoard (board) {
  // eslint-disable-next-line no-console
  process.stdout.write('\x1B[2J\x1B[0f')

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
