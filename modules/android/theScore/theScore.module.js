const selector = require('../../../util/selector');
const assert = require('chai').assert;

class TheScoreModule {
	get logosImage()		                { return $$(selector.resourceID("img_logo")); }
	get logosTitle()		                { return $$(selector.resourceID("title")); }
	get favouriteStar()		                { return $(selector.resourceID("img_view")); }

	//scoreBoard
	get favouriteCircleView()				{ return $(selector.resourceID("favorites_circle_view")); }
	get teamLogosImage()		            { return $$(selector.resourceID("team_logo_view")); }

	get strings() {
		if (language == "FR") {
			return {
			}
		} else {
			return {
			}
		}
	}

	hasLoaded() {
		this.favouriteCircleView.waitForVisible();
	}

	verifyScoreBoard() {
		this.hasLoaded();
		assert.isTrue(this.teamLogosImage.length >= 2, "FAIL: Two teams logo should appear on the header");
	}

	clickNBALogoImage() {
		if (this.teamLogosImage.length >= 6) {
			this.teamLogosImage[5].swipeLeft(600, 150);
			do {
				this.teamLogosImage[5].swipeLeft(600, 150);
			} while (!this.logosImage[0].isExisting())
			this.logosImage[0].waitForVisible();
			this.logosImage[0].click();
		} else {
			this.logosImage[0].waitForVisible();
			this.logosImage[0].click();
		}
	}
}
module.exports = new TheScoreModule();

