Kolor Samplr
=

A simple KnockoutJS application for picking colors from an image.
Inspired in kind by Photoshop.

Running the app

You will need to download and install [node.js](http://nodejs.org/download/).
You might need to install [bower](http://bower.io) which I'm using to manage the
front-end dependencies for this app.

> Bower works by fetching and installing packages from all over, taking care of hunting, finding, downloading, and saving the stuff you’re looking for. Bower keeps track of these packages in a manifest file, `bower.json`.

After installing node, run the following command to install bower on your machine
(using `cmd.exe` or powershell on windows)

```
    $ npm install -g bower
``

After that you can cd into the directory where you extracted the app and run `bower install`
which should fetch the dependencies (i.e. RequireJS, Knockout, jQuery, jQuery UI and UIKit).

```
    $ cd /path/to/kolor-samplr
    $ bower install
```

You can open index.html file in your browser. But I'd recommend you use your 
favorite web server (e.g. apache) to serve the files to avoid any browser related issues.

If you have any problems (hopefully,  none :) shoot me an e-mail: zikani.nmwase [at] ymail.com

# TO DO

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

# License

MIT License, zikani03