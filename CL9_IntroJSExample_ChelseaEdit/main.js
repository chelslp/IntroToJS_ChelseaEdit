$(document).ready(function() {
	'use strict';

	paper.install(window); 
	paper.setup(document.getElementById('mainCanvas')); 

	// TODO 

	paper.view.draw();

	var path = new Path.Rectangle({
		center: view.center,
		point: [200, 200],
		size: [150, 150],
		fillColor: 'lavender'
});

	view.onFrame = function(event) {
   path.fillColor.hue += 1;
    }

	function onFrame(event) {
		console.log(event.count);
	}

	//console.log(event.count);
	console.log('main.js loaded');
});

