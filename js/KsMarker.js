define(['ko', 'ColorSample'], function(ko, ColorSample) {
    
    function KsMarker(sample) {
        this.visible = ko.observable(true);
        this.tag = ko.observable(KsMarker.prototype.defaults.tagName);
        this.className = ko.observable(KsMarker.prototype.defaults.className);
        
        this.el = document.createElement("i");
        
        this.el.className = this.className();
		this.el.style.display = this.visible() ? "block" : "none";
		this.el.style.top  = sample.y() + "px";
		this.el.style.left = sample.x() + "px";
    }
    
    KsMarker.prototype.setWorkspace = function(domElement) {
        this.workspace = domElement;
        this.workspace.appendChild(this.el);
    }
    
    KsMarker.prototype.defaults = {
        icon : "uk-icon-tag",
        tagName  : "i",
        className : "marker"
    };
    
    return KsMarker;
});