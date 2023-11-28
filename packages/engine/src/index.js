

import {
	GameEngine,
	SimplePhysicsEngine
} from "lance-gg";


import {
	GameLogic,
	ClientSideInit,
	ClientSideDraw,
	ServerSideInit,
	ServerSidePlayerJoined,
	ServerSidePlayerDisconnected
} from "./game/index.js";

import {
	Paddle,
	Ball
} from "./model/index.js";

export default class Game extends GameEngine {

	constructor(options) {
		super(options);
		this.physicsEngine = new SimplePhysicsEngine({ gameEngine: this });

		//common
		this.on("postStep",GameLogic.bind(this));

		//server only code
		this.on("server__init",ServerSideInit.bind(this));
		this.on("server__playerJoined",ServerSidePlayerJoined.bind(this));
		this.on("server__playerDisconnected",ServerSidePlayerDisconnected.bind(this));

		//client only code
		this.on("client__rendererReady",ClientSideInit.bind(this));
		this.on("client__draw",ClientSideDraw.bind(this));
		
	}

	registerClasses(serializer) {
		serializer.registerClass(Paddle);
		serializer.registerClass(Ball);
	}

	processInput(inputData, playerId) {
		super.processInput(inputData, playerId);

		let playerPaddle = this.world.queryObject({ playerId });
		if(playerPaddle) {
			if(inputData.input === "up") {
				playerPaddle.position.y -= 5;
			} else if(inputData.input === "down") {
				playerPaddle.position.y += 5;
			}
		}
	}
	
}



