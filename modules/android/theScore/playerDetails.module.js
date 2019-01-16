const selector = require('../../../util/selector');
const assert = require('chai').assert;

class PlayerDeatailsModule {
	//Player Details
	get playerName()						{ return $(selector.resourceID("txt_player_name")); }
	get playerSubTitle()                    { return $(selector.resourceID("detail_subtitle")); }
	get playerFavouriteStar()               { return $(selector.resourceID("menu_favorite")); }
	get newsTab()                           { return $(selector.text(this.strings.newsTabText)); }
	get statsTab()                          { return $(selector.text(this.strings.statsTabText)); }
	get gameLogTab()                        { return $(selector.text(this.strings.gameLogTabText)); }
	get infoTab()                           { return $(selector.text(this.strings.infoTabText)); }

	get strings() {
		if (language === "FR") {
			return {
				newsTabText: "",
				statsTabText: "",
				gameLogTabText: "",
				infoTabText: "",
			}
		} else {
			return {
				newsTabText: "NEWS",
				statsTabText: "STATS",
				gameLogTabText: "GAME LOG",
				infoTabText: "INFO",
			}
		}
	}

	hasLoaded() {
		this.playerName.waitForVisible();
	}

	verifyPayerDetails(expectedPlayerName) {
	    this.hasLoaded();
		let playerName = this.playerName.getText().split(" ");
		let actualPlayerName = playerName[0].replace(playerName[0].slice(1, playerName[0].length), ".") + " " + playerName[1];
		assert.isTrue(this.newsTab.isSelected(), "FAILS: News tab is not selected by default.");
		assert.equal(actualPlayerName, expectedPlayerName, "FAIL: Player name mismatched");
		this.playerSubTitle.waitForVisible();
		this.playerFavouriteStar.waitForVisible();
		this.statsTab.waitForVisible();
		this.gameLogTab.waitForVisible();
		this.infoTab.waitForVisible();
	}
}
module.exports = new PlayerDeatailsModule();

