

import {
	Paddle,
	Ball
} from "../model/index.js";

import {
	WIDTH,
	HEIGHT,
	PADDING,
	PADDLE_WIDTH,
	PADDLE_HEIGHT
} from "../constants.js";


export function GameLogic() {
	let paddles = this.world.queryObjects({ instanceType: Paddle });
	let ball = this.world.queryObject({ instanceType: Ball });
	if(!ball || paddles.length !== 2) return;

	if( ball.position.x <= PADDING + PADDLE_WIDTH &&
		ball.position.y >= paddles[0].y && 
		ball.position.y <= paddles[0].position.y + PADDLE_HEIGHT &&
		ball.velocity.x < 0) {
		// hit left paddle (player 1)
		ball.velocity.x *= -1;
		ball.position.x = PADDING + PADDLE_WIDTH + 1;
	} else if( ball.position.x <= 0) {
		// hit left wall
		ball.velocity.x *= -1;
		ball.position.x = 0;
		// player 2 score
		paddles[0].power = 0;
	}

	if( ball.position.x >= WIDTH - PADDING - PADDLE_WIDTH &&
		ball.position.y >= paddles[1].position.y &&
		ball.position.y <= paddles[1].position.y + PADDLE_HEIGHT &&
		ball.velocity.x > 0) {
		// hit right paddle (player 2)
		ball.velocity.x *= -1;
		ball.position.x = WIDTH - PADDING - PADDLE_WIDTH - 1;
	} else if(ball.position.x >= WIDTH) {
		// hit right wall
		ball.velocity.x *= -1;
		ball.position.x = WIDTH - 1;
		// player 1 score
		paddles[1].power = 0;
	}

	if(ball.position.y <= 0) {
		ball.position.y = 1;
		ball.velocity.y *= -1;
	} else if(ball.position.y >= HEIGHT) {
		ball.position.y = HEIGHT - 1;
		ball.velocity.y *= -1;
	}
	
}



