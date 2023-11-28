

import {
	GameEngine,
	SimplePhysicsEngine
} from "lance-gg";


export default class Game extends GameEngine {

	constructor(options) {
		super(options);
		this.physicsEngine = new SimplePhysicsEngine({ gameEngine: this });

		//common
		this.on("postStep",this.gameLogic.bind(this));

		//server only code
		this.on("server__init",this.serverSideInit.bind(this));
		this.on("server__playerJoined",this.serverSidePlayerJoined.bind(this));
		this.on("server__playerDisconnected",this.serverSidePlayerDisconnected.bind(this));

		//client only code
		this.on("client__rendererReady",this.clientSideInit.bind(this));
		this.on("client__draw",this.clientSideDraw.bind(this));
		
	}
}



