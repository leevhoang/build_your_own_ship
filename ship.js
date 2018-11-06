// Javascript/JQuery code to make each ship part draggable

// Global variables

// Which part are we dragging, and
// are we currently dragging that part?
var whichpart = 0;
var isdraggable = false;

// Relative position for each part
var posX = 0;
var posY = 0;


// Start dragging the object once the user clicks on it
jQuery('.candrag').on('mousedown', function(event) {
	isdraggable = true;
	
	// DEBUG
	console.log("Start to drag");

	// Select the correct part to drag.
	whichpart = jQuery(this);

	// Obtain the relative position of the ship part
	posX = event.pageX - jQuery(this).offset().left;
	posY = event.pageY - jQuery(this).offset().top;

});


// Stop dragging the object (alternative)
jQuery('.candrag').on('mouseup', function() {
	isdraggable = false;

	// DEBUG
	console.log("STOP on DRAG");

});


// Update the object's position as the user drags it around
jQuery(document).on('mousemove', function(event) {
	if (isdraggable === true) {
		// DEBUG
		console.log("dragging");

		// Adjust the part's position
		whichpart.css({
			'cursor': 'pointer',
			'position': 'absolute',
			'top': (event.pageY - posY) + 'px',
			'left': (event.pageX - posX) + 'px'
	
		});
	}

});


// Stop dragging the object once we lift the mouse
jQuery(document).on('mouseup', function() {
	isdraggable = false;		

	// DEBUG
	console.log("STOP on DOC");
	console.log("Part: ");
	console.log(jQuery(whichpart).attr("id"));
});

// End of file
