// Start it up, woo woo
dojo.provide("IllusPhD.init");

// Some requirements
dojo.require('dojox.gfx');

dojo.ready(function(){
	// Variables in here for cleaner scope
	var container, guide, gwidth, gheight,
		cx, cy,
		allKnown, elem, hs, bsGrp, bsBase, bsSpec, phdPre, phdPost,
		rAll, rElem, rHS, rBS, rBSSpec, offsetBSSpec,
		colElem, colHS, colBS, colMS;

	// Mmm, log
	console.log('IllusPhD.init starting...');

	// Set up our guide graphic
	container = dojo.byId('gfxContainer');
	gwidth = 1024;
	gheight = 768;
	guide = dojox.gfx.createSurface(container, gwidth, gheight);

	// Set a buncha stuff up here to be clean
	cx = gwidth / 2;
	cy = gheight / 2;
	rAll = cy - 20;
	rElem = rAll * 0.10;
	colElem = dojo.colorFromString('#0d5dd0');
	rHS = rAll * 0.18;
	colHS = dojo.colorFromString('#97d065');
	rBS = rAll * 0.25;
	colBS = dojo.colorFromString('#f18a81');
	rBSSpec = rAll * 0.08;
	offsetBSSpec = rAll * 0.18;
	colMS = dojo.colorFromString('#ef5f54');

	// Draw the elements
	bsBase = guide.createCircle({cx: cx, cy: cy, r: rBS}).setFill(colBS);
	bsSpec = guide.createCircle({cx: cx + offsetBSSpec, cy: cy - offsetBSSpec, r: rBSSpec}).setFill(colBS);
	bsGrp = guide.createGroup();
	bsGrp.add(bsBase).add(bsSpec);
	hs = guide.createCircle({cx: cx, cy: cy, r: rHS}).setFill(colHS);
	elem = guide.createCircle({cx: cx, cy: cy, r: rElem}).setFill(colElem);
	allKnown = guide.createCircle({cx: cx, cy: cy, r: rAll}).setStroke({color: 'black', width: 2});
	window.elem = elem;

	// We're done! Hide the loading, show the content
	console.log('IllusPhD.init complete!');
	dojo.byId('loading').style.display = 'none';
	dojo.byId('content').style.display = '';
});
