'use strict';
import $ from 'jquery';
import ko from 'knockout';
import Component from './workspace/index.js';
import Application from './application.js';

$(function() {
    ko.components.register("ks-workspace", Component);
    
    var app = new Application();
    app.addWorkspace('/img/medium_14889020083.jpg');    
	ko.applyBindings(app);
});