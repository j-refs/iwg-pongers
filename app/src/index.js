

import querystring from "query-string";
import {
	Lib,
	Renderer,
	ClientEngine
} from "lance-gg";

import Game from "pongers-engine";


const qsOptions = querystring.parse(location.search);

const defaults = {
	
};

let options = Object.assign(defaults,qsOptions);


const gameEngine = new Game(options);
const clientEngine = new ClientEngine(gameEngine, options, Renderer);

document.addEventListener("DOMContentLoaded", e => {
	clientEngine.start();
})

