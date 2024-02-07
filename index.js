import { GlobalEvent } from "./Events/global.js";
import { ROOT_DIV } from "./Helper/constants.js";
import { initGame } from "./data/data.js";
import { initGameRender } from "./render/main.js";


//will be usefull till game ends
const globalState = initGame();
console.log(globalState)
initGameRender(globalState);
GlobalEvent();

export { globalState };

