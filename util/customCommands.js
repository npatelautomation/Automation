module.exports = function() {

	//The element being passed here is the element you want to start the scroll from
	//Therefore it has to be visible on the screen when this method is called
	//Negative yVal = scroll down, positive = scroll up
	browser.addCommand("scrollFrom", function(elem, yVal = -300, xVal = 0) {
		browser.touchAction(elem.selector, [
			'press',
			{
				action: 'moveTo', x: xVal, y: yVal
			},
			'release'
		]);
	});

	browser.addCommand("visibleAndHasText", function(elem) {
		elem.waitForVisible();
		elem.waitForText();
	});

	browser.addCommand("switchToNativeContext", function() {
		if (browser.context().value !== 'NATIVE_APP') { browser.context('NATIVE_APP'); }
	});

	browser.addCommand("performAction", function(action, dir, elem = 0) {
		if (action === 'scroll') { browser.execute('mobile: scroll', {direction: dir}); } else if (action === 'swipe') { browser.execute('mobile: swipe', {element: elem, direction: dir}); }
	});

};
