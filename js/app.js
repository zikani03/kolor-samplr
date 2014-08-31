require.config({
    baseUrl: ".",
	paths: {
		"ko" : "bower_components/knockout-3.2.0",
		"jquery" : "bower_components/jquery-1.9.1.min",
		"uikit"  : "bower_components/uikit-2.9.0/js/uikit.min",
		"text"  : "bower_components/require.text",
        
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