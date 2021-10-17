(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"scene2_atlas_1", frames: [[0,1928,722,116],[0,0,854,480],[0,482,854,480],[0,964,854,480],[0,1446,854,480]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(ss["scene2_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.basketballcourt = function() {
	this.initialize(ss["scene2_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cityzoomout = function() {
	this.initialize(ss["scene2_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.classroomcolor2 = function() {
	this.initialize(ss["scene2_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.cornerstore = function() {
	this.initialize(ss["scene2_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.fadebox = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhCtAlgMAAAhK/MCFbAAAMAAABK/g");
	this.shape.setTransform(427,240);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fadebox, new cjs.Rectangle(0,0,854,480), null);


(lib.classroom = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.classroomcolor2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.classroom, new cjs.Rectangle(0,0,854,480), null);


(lib.city = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cityzoomout();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.city, new cjs.Rectangle(0,0,854,480), null);


(lib.basketballcourt_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.basketballcourt();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.basketballcourt_1, new cjs.Rectangle(0,0,854,480), null);


(lib.cornerstore_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cornerstore();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,854,480);


// stage content:
(lib.scene2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,355];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		addEventListener("click", playMusic);
		var bgmusic = createjs.Sound.play("bgmusic");
		bgmusic.stop();
		console.log(bgmusic);
		
		var root = this;
		
		function playMusic() {	
			console.log("playMusic() was called");
			bgmusic.play();
			root.play();
		
		}
	}
	this.frame_355 = function() {
		//bgmusic.stop();
		var bgmusic = createjs.Sound.stop("bgmusic");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(355).call(this.frame_355).wait(1));

	// Text
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(362,209.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(355));

	// Fading
	this.instance_1 = new lib.fadebox();
	this.instance_1.setTransform(427,240,1,1,0,0,0,427,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},16).wait(54).to({alpha:1},16).wait(1).to({alpha:0},16).wait(51).to({alpha:1},16).wait(1).to({alpha:0},16).wait(77).to({alpha:1},16).wait(1).to({alpha:0},16).wait(42).to({alpha:1},16).wait(1));

	// Backgrounds
	this.instance_2 = new lib.cornerstore_1("synched",0);
	this.instance_2.setTransform(526.95,240,1.2248,1.2248,0,0,0,426.9,240);

	this.instance_3 = new lib.basketballcourt_1();
	this.instance_3.setTransform(468,240.05,1.096,1.096,0,0,0,427,240);
	this.instance_3._off = true;

	this.instance_4 = new lib.city();
	this.instance_4.setTransform(426.9,240.05,1.5998,1.5998,0,0,0,426.9,240);
	this.instance_4._off = true;

	this.instance_5 = new lib.classroom();
	this.instance_5.setTransform(427,240,1,1,0,0,0,427,240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_2}]},83).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},83).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},89).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},19).to({state:[{t:this.instance_5}]},1).wait(75));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({x:520.95},0).to({x:334.95},83).to({_off:true},1).wait(269));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(87).to({_off:false},0).to({x:386},83).to({_off:true},1).wait(185));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(171).to({_off:false},0).to({regX:427,scaleX:1,scaleY:1,x:427.05},89).wait(1).to({regX:426.7,regY:239.8,scaleX:15.0656,scaleY:15.0656,x:-247.4,y:-1840.25},19).to({_off:true},1).wait(75));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-6278.9,-5243,12502,7055);
// library properties:
lib.properties = {
	id: '03004087CBD16D4BB545F5D88D0A7E1B',
	width: 854,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/scene2_atlas_1.png?1612924108396", id:"scene2_atlas_1"},
		{src:"sounds/bgmusic.mp3?1612924108427", id:"bgmusic"}
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
an.compositions['03004087CBD16D4BB545F5D88D0A7E1B'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;