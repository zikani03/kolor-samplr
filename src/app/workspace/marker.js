'use strict';
import ko from 'knockout';
import ColorSample from './color_sample.js';

class Marker {
    constructor (sample) {
        this.visible = ko.observable(true);
        this.tag = ko.observable(Marker.defaults.tagName);
        this.className = ko.observable(Marker.defaults.className);

        this.el = document.createElement("i");

        this.el.className = this.className();
        this.el.style.display = this.visible() ? "block" : "none";
        this.el.style.top  = sample.y() + "px";
        this.el.style.left = sample.x() + "px";
    }

    setWorkspace = function(domElement) {
        this.workspace = domElement;
        this.workspace.appendChild(this.el);
    }
}

Marker.defaults = {
    icon : "uk-icon-tag",
    tagName  : "i",
    className : "marker"
};

export Marker;