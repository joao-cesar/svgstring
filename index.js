(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_NP_", frames: [[0,0,482,371]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._0000_drawwithjazzachars = function() {
	this.initialize(ss["index_atlas_NP_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.svg_export = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var exporter;
		var statusEl;
		
		function runExport()
		{
			var t;
			
			statusEl = document.createElement("p");
			document.body.appendChild(statusEl);
			exporter = new SVGExporter(stage, false, false, false);
			t = new Date().getTime();
			exporter.run();
			statusEl.innerHTML = "Export took: " + (new Date().getTime() - t) + "ms ";
			setTimeout(addDownload, 1);
			document.body.appendChild(exporter.svg);
		}
		
		function addDownload()
		{
			var serializer = new XMLSerializer();
			var svgStr = serializer.serializeToString(exporter.svg);
			var link = document.createElement("a");
			
			console.log(svgStr);
			
			link.innerText = "SAVE SVG TO FILE";
			link.download = "export.svg";
			link.href = "data:image/svg+xml,\n" + encodeURIComponent(svgStr);
			statusEl.appendChild(link);
		}
		
		stage.on("drawstart", runExport, null, true);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// ui
	this.text = new cjs.Text("TEST", "normal 400 70px 'Open Sans'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 94;
	this.text.lineWidth = 189;
	this.text.parent = this;
	this.text.setTransform(384.55,256.7);
	if(!lib.properties.webfonts['Open Sans']) {
		lib.webFontTxtInst['Open Sans'] = lib.webFontTxtInst['Open Sans'] || [];
		lib.webFontTxtInst['Open Sans'].push(this.text);
	}

	this.instance = new lib._0000_drawwithjazzachars();
	this.instance.parent = this;
	this.instance.setTransform(53.85,176,0.4094,0.4094);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("Aj7D8QhohpAAiTQAAiSBohpQBohpCTABQCUgBBoBpQBoBpABCSQgBCThoBpQhoBpiUgBQiTABhohpg");
	this.shape.setTransform(424.7,60.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("As4C9IAAl5IZwAAIAAF5g");
	this.shape_1.setTransform(129.7,46.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,1,1).p("A8CCVQgLovM/ExQk1GYdOn2QQJKhCvmp");
	this.shape_2.setTransform(251.5173,123.1298);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5690B1").s().p("Egq9AfQMAAAg+fMBV7AAAMAAAA+fgAURoqQDCAABEijIABgBIgBABQhECijCABIAAAAIgEAAQk1gDpxmWIgHgFIgLADIgCABIgNADIgSAFIAAAAIgMADIhpAcIAAAAIgPAEIAAAAIgGACIgEABIgHACIgLACIgEABIgEABIgIACIgDABIgNADIgBABQsMDIlPAOIAAAAIgDAAIgDAAIgDAAIgCAAIgCAAIgjABIAAAAQkpAACGi0IABgCIACgBIgKgEIAAAAIgFgCIgDgBIgBAAQkYhli2AAIgBAAIAAAAQlWAAADFjIABAIIgBgIQgDljFWAAIAAAAIABAAQC2AAEYBlIABAAIADABIAFACIAAAAIAKAEIgCABIgBACQiGC0EpAAIAAAAIAjgBIACAAIACAAIADAAIADAAIADAAIAAAAQFPgOMMjIIABgBIANgDIADgBIAIgCIAEgBIAEgBIALgCIAHgCIAEgBIAGgCIAAAAIAPgEIAAAAIBpgcIAMgDIAAAAIASgFIANgDIACgBIALgDIAHAFQJxGWE1ADIAEAAIAAAAg");
	this.shape_3.setTransform(275,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,200,275,200);
// library properties:
lib.properties = {
	id: 'D3FA938B4E210346A1E435F80D8EE58D',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_NP_.jpg?1553018377902", id:"index_atlas_NP_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D3FA938B4E210346A1E435F80D8EE58D'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;