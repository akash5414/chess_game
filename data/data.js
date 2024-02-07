// for each square:
function Square(color, id, piece) {
  return { color, id, piece };
}

function squareRow(rowId) {
  const squareRow = [];
  const abcd = ["a", "b", "c", "d", "e", "f", "g", "h"];
  abcd.forEach((element, index) => {
    if (rowId % 2 == 0) {
      if(index%2==0)
        squareRow.push(Square("white",element+rowId, null));
      else 
        squareRow.push(Square("black",element+rowId, null));
    } else {
        if(index%2==0)
        squareRow.push(Square("black",element+rowId, null));
      else 
        squareRow.push(Square("white",element+rowId, null));
    }
  });
  return squareRow;
}

// To reset the game:
function initGame() {
  return [
    squareRow(8),
    squareRow(7),
    squareRow(6),
    squareRow(5),
    squareRow(4),
    squareRow(3),
    squareRow(2),
    squareRow(1),
  ];
}
initGame();
export { initGame };
