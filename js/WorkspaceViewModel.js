define(['ko', 'ColorSample', 'KsMarker'], function(ko, ColorSample, KsMarker){

	function WorkspaceViewModel( Canvas ){    
		var self = this;
		
		self.preview = new ColorSample(255, 255, 255, 0, 0);
		
		self.samples = ko.observableArray([]);
		
		self.imgSrc  = "img/test.jpg" || arguments[1] ;
		self.image   = new Image();
		// http://js
		self.image.crossOrigin = true;
		self.canvas  = Canvas ;
		
		// store image data
		self.imageData;
		// canvas context
		self.context ;
        
        
        /** initialisation stuff  **/
        self.init = function(){
            self.image.src = self.imgSrc;
        };
        
        self.image.onload = function(){
            
            self.context = self.canvas.getContext('2d') ;	
            
            self.context.drawImage( self.image, 0, 0);
            
            self.imageData = self.context.getImageData(0, 0, self.image.width, self.image.height);
        };
        
        self.init();
    }
    
/**
 *  
 * returns a color sample from the colors at the give coordinates in
 * the workspace image 
 */

    WorkspaceViewModel.prototype.getColorSample = function(x, y){
        /**
         *  NOTE:
         * 
         * image data are kept as a one-dimensional array of pixels.
         * with entries being [R, G, B,A, R1, G1, B1,A1....RN,GN,BN,AN]
         * 
         */
        var width = this.imageData.width;
        var red = ( width * y + x ) * 4;
        
        var green = red + 1, 
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

    WorkspaceViewModel.prototype.addSample = function(){
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

    WorkspaceViewModel.prototype.removeSample = function( sample ){
        this.samples.remove( sample );
    }

    WorkspaceViewModel.prototype.reverseSamples = function(){
        this.samples.reverse();
    }
	
    WorkspaceViewModel.prototype.clearAll = function(){
        this.samples.removeAll();
    }
	
    WorkspaceViewModel.prototype.updatePreview = function(data, event) {
        var x = event.pageX - this.canvas.offsetLeft;
        var y = event.pageY - this.canvas.offsetTop;
        
        var c = this.getColorSample(x, y);
        this.preview.R( c.R() );
        this.preview.G( c.G() );
        this.preview.B( c.B() );
        this.preview.x(x);
        this.preview.y(y);
        
    }
    
    WorkspaceViewModel.prototype.addMarker = function(colorSample){
        var marker = new KsMarker(colorSample);
        marker.setWorkspace(this.canvas.parentNode);
        return true;
    }
    
    return WorkspaceViewModel;
});