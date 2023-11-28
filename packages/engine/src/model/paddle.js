
import {
	DynamicObject,
	BaseTypes
} from "lance-gg";



export default class Paddle extends DynamicObject {

	constructor(gameEngine,options,props) {
		super(gameEngine,options,props);
		this.power = 1;
	}

	static get netScheme() {
		return Object.assign({
			power: { type: BaseTypes.TYPES.INT16 }
		}, super.netScheme);
	}

	syncTo(other) {
		super.syncTo(other);
		this.power = other.power;
	}
	
}


