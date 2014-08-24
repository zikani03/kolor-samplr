require.config({
	paths: {
		ko: 'lib/knockout-2.2.0'
	}
});

require(['ko','WorkspaceViewModel'], function(ko, WorkspaceViewModel){
        
	var app = new WorkspaceViewModel(document.getElementById('canvasItem'));
	
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