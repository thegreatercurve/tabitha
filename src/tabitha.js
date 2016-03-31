(function( w ) {

	'use strict';

	// Function constructor with paramater type and length checks.
	function Tabitha( container, tabHeadings, tabPanels ) {
		if ( typeof container !== 'string' && typeof tabHeadings !== 'string' && typeof tabPanels !== 'string' )
			throw new Error('Please enter a valid CSS selector.');
		if ( arguments.length > 3 )
			throw new Error('You seem to have too have added too many parameters.')
		else if ( arguments.length < 3 )
			throw new Error('You seem to have too have added too few parameters.')

		this.container = document.querySelector(container);
		this.tabHeadings = this.container.querySelector(tabHeadings);
		this.tabPanels = this.container.querySelector(tabPanels);
	};

	Tabitha.prototype = {

		// Wraps the initialization in it's own seperate function.
		init: function() {
			this.validateSetUp();
			this.bindClickEvent();
		},

		// Checks if tab headings and tab panels are the same length, and if the initial active state are applied to the same index DOM node.
		validateSetUp: function() {
			if (this.tabHeadings.children.length !== this.tabPanels.children.length)
				throw new Error('The number of tabs does not seem to match the number of tab panels.');
			if (getActiveChildIndex(this.tabHeadings.querySelector('.active')) !== getActiveChildIndex(this.tabPanels.querySelector('.active')))
				throw new Error('The active tab heading is not set for the correct tab panel.');
		},

		// Binds a click event to each of the tab headings. When clicked, will toggle the active state of the tab panel with the same index.
		bindClickEvent: function() {
			var that = this
			for (var i = 0; i < this.tabHeadings.children.length; i++) {
				(function(j){
					that.tabHeadings.children[j].addEventListener('click', function(e) {
						e.preventDefault();
						Tabitha.prototype.toggleActiveClass.call(that, j);
					})
				}(i))
			}
		},

		// Adds or removes '.active' to tab headings and tab panels.
		toggleActiveClass: function(index) {
			removeClass(this.tabHeadings.querySelector('.active'), 'active');
			removeClass(this.tabPanels.querySelector('.active'), 'active');
			addClass(this.tabHeadings.children[index], 'active');
			addClass(this.tabPanels.children[index], 'active');
		}
	};

	// Helper function for adding CSS class to DOM node with back up for older browsers.
	function addClass(node, className) {
		if (node.classList)
			node.classList.add(className);
		else
			node.className += ' ' + className;
	};

	// Helper function for removing CSS class from DOM node with back up for older browsers.
	function removeClass(node, className) {
		if (node.classList)
			node.classList.remove(className);
		else
			node.className = node.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	};

	// Helper function for getting DOM node with
	function getActiveChildIndex(node) {
		var i = 0;
		while (node = node.previousElementSibling)
			i++;
		return i;
	};

	// Exposes to global context, ready to be initialized on the DOM.
	window.Tabitha = Tabitha;

})( window )
