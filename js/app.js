require.config({
	paths: {
		"ko" : "../bower_components/knockout-3.2.0",
		"jquery" : "../bower_components/jquery-1.9.1.min",
		"uikit"  : "../bower_components/uikit-2.9.0/js/uikit.min"
	},
    shim: {
        "uikit": { deps: ["jquery"] }
    }
});

require(['ko','WorkspaceViewModel'], function(ko, WorkspaceViewModel){
        
	var app = new WorkspaceViewModel(document.getElementById('canvasItem'), './img/tumblr_n9ca6yN7X71qz6f9yo1_500.jpg');
	
	ko.applyBindings(app);
	
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