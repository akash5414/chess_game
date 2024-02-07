import { ROOT_DIV } from "../Helper/constants.js";
import * as pieces from "../data/pieces.js";

//use when you want to render pieces on board
function pieceRender(data){
    data.forEach((row)=>{
        row.forEach((square)=>{
            if(square.piece){
                const squarel = document.getElementById(square.id);

                //create piece:
                const piece = document.createElement("img");
                piece.src = square.piece.img;
                piece.classList.add("piece");

                //insert piece into square:
                squarel.appendChild(piece);
            }
        })
    })
}

//use when you want to render board for first time when game start
function initGameRender(data) {
  data.forEach((element) => {
    const rowEL = document.createElement("div");
    element.forEach((square) => {
        const squareDiv = document.createElement("div");
        squareDiv.id = square.id;
        squareDiv.classList.add(square.color, "square");
        //render black_pawn
        if(square.id[1]==7){
            square.piece = pieces.blackPawn(square.id);
        }
        //render black_rook
        if(square.id=="h8" || square.id=="a8"){
            square.piece = pieces.blackRook(square.id);
        }
        //render black_king
        if(square.id=="e8"){
            square.piece = pieces.blackKing(square.id);
        }
        //render black_queen
        if(square.id=="d8"){
            square.piece = pieces.blackQueen(square.id);
        }
        //render black_knight
        if(square.id=="g8" || square.id=="b8"){
            square.piece = pieces.blackKnight(square.id);
        }
        //render black_bishop
        if(square.id=="c8" || square.id=="f8"){
            square.piece = pieces.blackBishop(square.id);
        }
        //render white_pawn 
        if(square.id[1]==2){
            square.piece = pieces.whitePawn(square.id);
        }
        //render white_rook
        if(square.id=="h1" || square.id=="a1"){
            square.piece = pieces.whiteRook(square.id);
        }
        //render white_king
        if(square.id=="d1"){
            square.piece = pieces.whiteKing(square.id);
        }
        //render white_queen
        if(square.id=="e1"){
            square.piece = pieces.whiteQueen(square.id);
        }
        //render white_knight
        if(square.id=="g1" || square.id=="b1"){
            square.piece = pieces.whiteKnight(square.id);
        }
        //render white_bishop
        if(square.id=="c1" || square.id=="f1"){
            square.piece = pieces.whiteBishop(square.id);
        }
        rowEL.appendChild(squareDiv);
        
    });
    rowEL.classList.add("squareRow");
    ROOT_DIV.appendChild(rowEL);
  });
  pieceRender(data);
}

export { initGameRender };
