
import { resolve } from "node:path";

import express from "express";
import socketIO from "socket.io";

import {
	Lib,
	ServerEngine
} from "lance-gg";

import Game from "pongers-engine";
import GameMarkup from "pongers-markup";
//const gameMarkup = GameMarkup();


const defaults = {
	port: 3000,
	//templateData: {},
	staticDir: ,
	updateRate: 6
}


export default class ServerService {

	#updateRate;
	#port;
	#markup;
	#staticDir;
	#server;
	#requestHandler;
	#io;
	#gameEngine;
	#serverEngine;
	constructor(options = {}) {
		const opts = Object.assign(defaults, options);
		this.#updateRate = opts.updateRate;
		this.#port = opts.port;
		this.#markup = GameMarkup(opts.templateData);
		this.#staticDir = opts.staticDir;
		
		this.#server = express();

		this.#server.get("/", this.serveMarkup.bind(this));
		//this.#server.use("/", this.serveStatic.bind(this));
		this.#server.use("/", express.static(this.#staticDir));

		this.#gameEngine = new Game({ traceLevel: Lib.Trace.TRACE_ALL });
	}
	start() {
		this.#requestHandler = this.#server.listen(this.#port, () => {
			
		});
		this.#io = socketIO(this.#requestHandler);
		this.#serverEngine = new ServerEngine(this.#io, this.#gameEngine, { debug: {}, updateRate: this.#updateRate });
		this.#serverEngine.start();
	}

	
	serveMarkup(req,res,next) {
		res.send(this.#markup);	
	} 
	/*
	serveStatic(req,res,next) {
		
	}
	*/

	
}

