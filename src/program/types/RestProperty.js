import Node from '../Node.js';

export default class RestProperty extends Node {
	transpile ( code, transforms ) {
		code.remove( this.start, this.argument.start );
    console.log('here', this);
		code.remove( this.argument.end, this.end );

		super.transpile( code, transforms );
	}
}
