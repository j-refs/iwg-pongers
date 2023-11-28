

import {
	KeyboardControls
} from "lance-gg";

import {
	Paddle,
	Ball
} from "../model/index.js";


export function ClientSideInit() {
	this.controls = new KeyboardControls(this.renderer.clientEngine);
	this.controls.bindKey("up","up",{ repeat: true } );
	this.controls.bindKey("down","down",{ repeat: true } );
}

export function ClientSideDraw() {

	function updateEl(el,obj) {
		let power = obj.power > 0 ? obj.power : 15;
		el.style.top = obj.position.y + 10 + "px";
		el.style.left = obj.position.x + "px";
		el.style.background = `#ff${power.toString(16)}f${power.toString(16)}f`;
	}

	let paddles = this.world.queryObjects({instanceType: Paddle });
	let ball = this.world.queryObject({instanceType: Ball });
	if(!ball || paddles.length !== 2) return;
	updateEl(document.querySelector(".ball"),ball);
	updateEl(document.querySelector(".paddle1"),paddles[0]);
	updateEl(document.querySelector(".paddle2"),paddles[1]);
}




