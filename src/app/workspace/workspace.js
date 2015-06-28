'use strict';
import ko from 'knockout';
import $ from 'jquery';

import ColorSample from './color_sample.js';
import Marker from './marker.js';

class Workspace {
    
    constructor (imgUrl, options) {
        // set the preview sample
        this.preview = new ColorSample(255, 255, 255, 0, 0);
        
        this.mode = ko.observable(Workspace.SAMPLING_MODE);
        
        // auto-assigned id for the canvas element
        this.workspaceCanvasId = ko.observable(new Date() * 1);
        
        this.samples = ko.observableArray([]);
        
        this.imgUrl  = ko.observable(imgUrl);
        
        this.canvas  = document.getElementById(self.workspaceCanvasId);
        
        this.initialize();
    }

    initialize () {
        this.image   = new Image();
        this.image.onload = this.onImageLoaded;
        this.image.crossOrigin = true;
        this.image.src = self.imgUrl;
    }

    loadCanvas() {
        this.canvas = document.getElementById(this.workspaceCanvasId);
    }
    
    onImageLoaded () {
        if (! this.canvas) {
            this.loadWorkspaceCanvas();
        }

        this.canvas.width  = this.image.width;
        this.canvas.height = this.image.height;

        this.context = self.canvas.getContext('2d');
        this.context.drawImage(this.image, 0, 0);
        this.imageData = this.context.getImageData(0, 0, this.image.width, this.image.height);
        
        /*
         * Add draggable support via jquery ui
        $(self.canvas).draggable({
            start: function(event, ui) {
                self.mode(DRAG_MODE);
            },
            stop: function(event, ui) {
                window.setTimeout(function() {
                    self.mode(SAMPLING_MODE);
                }, 250);
            }
        });
        */
    }
    
    /**
     *  
     * returns a color sample from the colors at the give coordinates in
     * the workspace image 
     */
    createColorSample (x, y) {
        /**
         *  NOTE:
         * 
         * image data are kept as a one-dimensional array of pixels.
         * with entries being [R, G, B,A, R1, G1, B1,A1....RN,GN,BN,AN]
         * 
         */
        const width = this.imageData.width;
        const red = ( width * y + x ) * 4;
        
        const green = red + 1, 
            blue  = red + 2,
            alpha = red + 3;
            
        return new ColorSample(
            this.imageData.data[red],
            this.imageData.data[green],
            this.imageData.data[blue],
            this.imageData.data[alpha],
            x,
            y 
        );
    }

    
    addMarker (colorSample) {
        const marker = new Marker(colorSample);
        marker.setWorkspace(this.canvas.parentNode);
        return true;
    }
    
    saveColorSample () {
        if (SAMPLING_MODE === this.mode()) {
            var newSample = new ColorSample( 
                this.preview.R(),
                this.preview.G(),
                this.preview.B(),
                this.preview.x(),
                this.preview.y()
            );
            
            this.samples.unshift( newSample );
            // this.addMarker(newSample);
        }
    }

    deleteSample ( sample ){
        this.samples.remove( sample );
    }
    
    clearSamples(){
        this.samples.removeAll();
    }
    
    updatePreview (data, event) {
        if (Workspace.DRAG_MODE === this.mode()) return true;
        
        var x = event.pageX - this.canvas.offsetLeft;
        var y = event.pageY - this.canvas.offsetTop;
        
        var c = this.getColorSample(x, y);
        this.preview.R( c.R() );
        this.preview.G( c.G() );
        this.preview.B( c.B() );
        this.preview.x(x);
        this.preview.y(y);
        
    }

    toggleColorSampleOrder (property){
        // TODO: toggle by the property provided
        this.samples.reverse();
    }
}

// until ES has class level statics
Workspace.DRAG_MODE = 1;
Workspace.SAMPLING_MODE = 2;

export Workspace;