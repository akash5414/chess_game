import { ROOT_DIV } from "../Helper/constants.js";
import { globalState } from "../index.js";

function whitePawnClick(piece){
    console.log(piece);
    if(piece.current_position[1]==2) console.log("initial point");
    else console.log("moved");
}

function GlobalEvent() {
  ROOT_DIV.addEventListener("click", (event) => {
    if (event.target.localName === "img") {
      const clickId = event.target.parentNode.id;
      const flatArray = globalState.flat();
      const square=  flatArray.find((el)=> el.id==clickId);
      if(square.piece.piece_name == "WHITE_PAWN"){
        whitePawnClick(square.piece);
      }
    }
  });
}

export { GlobalEvent };
