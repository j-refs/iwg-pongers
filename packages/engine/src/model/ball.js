
import {
	DynamicObject,
	BaseTypes
} from "lange-gg";



export default class Ball extends DynamicObject {

	constructor(gameEngine,options,props) {
		super(gameEngine,options,props);
	}

	get bending() {
		return { velocity: { percent: 0.0 } };
	}

	syncTo(other) {
		super.syncTo(other);
	}
	
}


