define(['ko'],function(ko){
	
	var ColorSample = function( r, g, b, x, y){
		
		var self = this;
	
		self.R = ko.observable( r );
		self.G = ko.observable( g );
		self.B = ko.observable( b );
		
		this.x = ko.observable( x );
		this.y = ko.observable( y );
		
		self.rgb = ko.computed(function(){
			return "rgba(" + self.R() + "," + self.G() +"," + self.B() +",1)";
		});
		
		self.hex = ko.computed(function(){
			var _hex = self.R().toString(16) + self.G().toString(16) + self.B().toString(16);
			
			return "#" + _hex;
		});
	};
	
	return ColorSample;
});