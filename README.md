Kolor Samplr
=

A simple KnockoutJS application for picking colors from an image. Inspired in kind by Photoshop.

Check out the ES5 requirejs version under the `master` branch

## Demo

Check it out [here](http://zikani03.github.com/kolor-samplr)

## Building 

You will need to download and install [node.js](http://nodejs.org/download/).

```
    $ npm install -g browserify simple-server lessc
    $ npm start
``

If all the steps in the build succeed, you can open http://localhost:3000/dist/index.html in your browser. 

If you have any problems (hopefully,  none :) shoot me an e-mail: zikani.nmwase [at] ymail.com


## TO DO

* add markers for sample points
* load images from the internet
* grid view for samples
* removing individual samples from a workspace
* [done] dragging/moving the workspace canvas around
* [done] multiple workspace support

* Add a Workspace Manager to manage
    * workspace switching
    * creating new workspaces
    * removing workspaces
    
* attach preview ColorSample to cursor
* save workspace data to webservice (corollary, create a backend api)
* improve UI   


## License

MIT License, zikani03