// Black Pieces
function blackPawn(current_position) {
  return {
    current_position,
    img: "images/pieces/black/pawn.png",
    piece_name: "BLACK_PAWN",
  };
}
function blackRook(current_position) {
  return {
    current_position,
    img: "images/pieces/black/rook.png",
    piece_name: "BLACK_ROOK",
  };
}
function blackQueen(current_position) {
  return {
    current_position,
    img: "images/pieces/black/queen.png",
    piece_name: "BLACK_QUEEN",
  };
}
function blackKnight(current_position) {
  return {
    current_position,
    img: "images/pieces/black/knight.png",
    piece_name: "BLACK_KNIGHT",
  };
}
function blackKing(current_position) {
  return {
    current_position,
    img: "images/pieces/black/king.png",
    piece_name: "BLACK_KING",
  };
}
function blackBishop(current_position) {
  return {
    current_position,
    img: "images/pieces/black/bishop.png",
    piece_name: "BLACK_BISHOP",
  };
}

// White Pieces
function whitePawn(current_position) {
  return {
    current_position,
    img: "images/pieces/white/pawn.png",
    piece_name: "WHITE_PAWN",
  };
}
function whiteRook(current_position) {
  return {
    current_position,
    img: "images/pieces/white/rook.png",
    piece_name: "WHITE_ROOK",
  };
}
function whiteQueen(current_position) {
  return {
    current_position,
    img: "images/pieces/white/queen.png",
    piece_name: "WHITE_QUEEN",
  };
}
function whiteKnight(current_position) {
  return {
    current_position,
    img: "images/pieces/white/knight.png",
    piece_name: "WHITE_KNIGHT",
  };
}
function whiteKing(current_position) {
  return {
    current_position,
    img: "images/pieces/white/king.png",
    piece_name: "WHITE_KING",
  };
}
function whiteBishop(current_position) {
  return {
    current_position,
    img: "images/pieces/white/bishop.png",
    piece_name: "WHITE_BISHOP",
  };
}

export {
  blackPawn,
  blackBishop,
  blackKing,
  blackKnight,
  blackQueen,
  blackRook,
  whitePawn,
  whiteBishop,
  whiteKing,
  whiteKnight,
  whiteQueen,
  whiteRook,
};
