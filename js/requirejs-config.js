var require = {
    baseUrl: ".",
	paths: {
		"ko"        : "bower_components/knockoutjs/dist/knockout",
		"text"      : "bower_components/text/text",
		"jquery"    : "bower_components/jquery-1.11.1.min/index",
		"jquery.ui" : "bower_components/jquery-ui/jquery-ui.min",
		"uikit"     : "bower_components/uikit-2.9.0/js/uikit.min"
	},
    shim: {
        "uikit": { deps: ["jquery"] },
        "jquery.ui": { deps: ["jquery"] }
    }
};