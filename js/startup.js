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