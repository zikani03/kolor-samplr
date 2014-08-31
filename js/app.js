require.config({
    baseUrl: ".",
	paths: {
		"ko" : "bower_components/knockoutjs/dist/knockout",
		"text"  : "bower_components/text/text",
        
		"jquery" : "bower_components/jquery-1.11.1.min/index",
		"uikit"  : "bower_components/uikit-2.9.0/js/uikit.min",
        
        "ColorSample" : "js/ColorSample",
        "KsMarker" : "js/KsMarker"
	},
    shim: {
        "uikit": { deps: ["jquery"] }
    }
});

require(['ko', 'jquery', 'uikit'], function(ko){
    ko.components.register("ks-workspace", { require: "components/workspace/Workspace" });
    
	//var app = new WorkspaceViewModel(document.getElementById('canvasItem'), './img/medium_14889020083.jpg');
	
	ko.applyBindings();
	
	var requestAnimFrame = (function(){
		window.requestAnimationFrame       ||
             window.webkitRequestAnimationFrame ||
             window.mozRequestAnimationFrame    ||
             window.oRequestAnimationFrame      ||
             window.msRequestAnimationFrame     ||
             function( callback ){
               window.setTimeout( callback, 1000/60);
             };
   })();
});