

import {
	TwoVector
} from "lance-gg";

import {
	Paddle,
	Ball
} from "../model/index.js";

import {
	WIDTH,
	HEIGHT,
	PADDING
} from "../constants.js";

export function ServerSideInit() {
	this.addObjectToWorld(new Paddle(this, null, { playerID: 0, position: new TwoVector(PADDING, 0) }));
	this.addObjectToWorld(new Paddle(this, null, { playerID: 0, position: new TwoVector(WIDTH - PADDING, 0) }));
	this.addObjectToWorld(new Ball(this, null, {
		position: new TwoVector(WIDTH / 2, HEIGHT / 2),
		velocity: new TwoVector(2, 2)
	}));
}

export function ServerSidePlayerJoined(ev) {
	let paddles = this.world.queryObjects({ instanceType: Paddle });
	if(paddles[0].playerId === 0) {
		paddles[0].playerId = ev.playerId;
	} else if(paddles[1].playerId === 0) {
		paddles[1].playerId = ev.playerId;
	}
}

export function ServerSidePlayerDisconnected(ev) {
	let paddles = this.world.queryObjects({ instanceType: Paddle });
	if(paddles[0].playerId === ev.playerId) {
		paddles[0].playerId = 0;
	} else if(paddles[1].playerId === ev.playerId) {
		paddles[1].playerId = 0;
	}
}
