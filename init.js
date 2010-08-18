// Start it up, woo woo
dojo.provide("IllusPhD.init");

// Some requirements
dojo.require('dojox.gfx');
dojo.require('dojox.gfx.fx');

dojo.ready(function(){
	// Variables in here for cleaner scope
	var container, guide, gwidth, gheight,
		cx, cy, offsetBScx, offsetBScy,
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
	offsetBScx = cx + offsetBSSpec;
	offsetBScy = cy - offsetBSSpec;
	colMS = dojo.colorFromString('#ef5f54');

	// Draw the elements
	ms = guide.createPath();
	ms.setTransform([
		dojox.gfx.matrix.translate(offsetBScx, offsetBScy),
		dojox.gfx.matrix.rotateg(-135)
	]);
	ms.moveTo(-rBSSpec, 0).curveTo(-rBSSpec, rAll * 0.5, rBSSpec, rAll * 0.5, rBSSpec, 0);
	ms.closePath().setFill(colMS);
	bsGrp = guide.createGroup();
	bsBase = bsGrp.createCircle({cx: cx, cy: cy, r: rBS}).setFill(colBS);
	bsSpec = bsGrp.createCircle({cx: offsetBScx, cy: offsetBScy, r: rBSSpec}).setFill(colBS);
	hs = guide.createCircle({cx: cx, cy: cy, r: rHS}).setFill(colHS);
	elem = guide.createCircle({cx: cx, cy: cy, r: rElem}).setFill(colElem);
	allKnown = guide.createCircle({cx: cx, cy: cy, r: rAll}).setStroke({color: 'black', width: 2});

	// Expose a thing or two for debugging
	// TODO Remove these later
	dojo.global.guide = guide;
	dojo.global.bsGrp = bsGrp;

	// We're done! Hide the loading, show the content
	console.log('IllusPhD.init complete!');
	dojo.byId('loading').style.display = 'none';
	dojo.byId('content').style.display = '';
});
