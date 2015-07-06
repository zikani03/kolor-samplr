'use strict';
import ko from 'knockout';

class ColorSample {
    constructor ( r, g, b, x, y) {
		this.R = ko.observable( r );
		this.G = ko.observable( g );
		this.B = ko.observable( b );
		
		this.x = ko.observable( x );
		this.y = ko.observable( y );
	}
		
	get hex() {
        return ko.pureComputed(() => '#' + this.R().toString(16) + this.G().toString(16) + this.B().toString(16));
    }
    
    get rgb() {
        return ko.computed(() => "rgba(" + this.R() + "," + this.G() +"," + this.B() +",1)");
    }
}

export default ColorSample;