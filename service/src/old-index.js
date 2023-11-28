
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


const PORT = process.env.PORT || 3000;
// todo make index part of app module
//const INDEX = resolve(__dirname,"dist/index.html");
const STATIC = resolve(__dirname, "dist");


const server = express();

server.get("/",(req,res,next) => {
	//res.sendFile(INDEX);
	res.send(GameMarkup);
	//res.send(gameMarkup);
});

server.use("/", express.static(STATIC));

let requestHandler = server.listen(PORT, () => {
	
});

const io = socketIO(requestHandler);


const gameEngine = new Game({ traceLevel: Lib.Trace.TRACE_ALL });
const serverEngine = new ServerEngine(io,gameEngine, { debug: {}, updateRate: 6 });

serverEngine.start();

