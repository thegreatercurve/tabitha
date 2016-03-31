(function( w ) {

	'use strict';

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

		init: function() {
			this.validateSetUp();
			this.bindClickEvent();
		},

		validateSetUp: function() {
			if (this.tabHeadings.children.length !== this.tabPanels.children.length)
				throw new Error('The number of tabs does not seem to match the number of tab panels.');
			if (getActiveChildIndex(this.tabHeadings.querySelector('.active')) !== getActiveChildIndex(this.tabPanels.querySelector('.active')))
				throw new Error('The active tab heading is not set for the correct tab panel.');
		},

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

		toggleActiveClass: function(index) {
			removeClass(this.tabHeadings.querySelector('.active'), 'active').addClass(this.tabHeadings.children[index], 'active');
			removeClass(this.tabPanels.querySelector('.active'), 'active').addClass(this.tabPanels.children[index], 'active');
		}
	};

	function addClass(node, className) {
		if (node.classList)
			node.classList.add(className);
		else
			node.className += ' ' + className;
		return this;
	};

	function removeClass(node, className) {
		if (node.classList)
			node.classList.remove(className);
		else
			node.className = node.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		return this;
	};

	function getActiveChildIndex(node) {
		var i = 0;
		while (node = node.previousElementSibling)
			i++;
		return i;
	};

	window.Tabitha = Tabitha;

})( window )
