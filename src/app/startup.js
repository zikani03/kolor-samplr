import ko from 'knockout';
import Application from './application.js';

ko.components.register("ks-workspace", { require: "workspace/index" });

// request animation frame polyfill - do we still need this?
(function(){
    window.requestAnimationFrame       ||
         window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame    ||
         window.oRequestAnimationFrame      ||
         window.msRequestAnimationFrame     ||
         function( callback ){
           window.setTimeout( callback, 1000/60);
         };
})();

$(function() {
    var app = new Application();
    app.addWorkspace('/img/medium_14889020083.jpg');    
	ko.applyBindings(app);
});