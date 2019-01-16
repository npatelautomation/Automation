const selector = require('../../../util/selector');

class NbaBasketBallModule {
	//NBA basketball
	get mainContainer()			            { return $(selector.resourceID("main_container")); }
	get nbaBasketBallTitle()                { return $(selector.text(this.strings.nbaBasketBallText)); }
	get leadersTab()                        { return $(selector.text(this.strings.leadersTabText)); }

	get strings() {
		if (language == "FR") {
			return {
				nbaBasketBallText: "",
				leadersTabText: "",

			}
		} else {
			return {
				nbaBasketBallText: "NBA BASKETBALL",
				leadersTabText: "LEADERS",
			}
		}
	}

	hasLoaded() {
		this.mainContainer.waitForVisible();
	}

	verifyNBAScreen() {
		this.hasLoaded();
		this.nbaBasketBallTitle.waitForVisible();
	}

	clickNBALeadersTab() {
		this.leadersTab.waitForVisible();
		this.leadersTab.click();
		browser.waitUntil(() => this.leadersTab.isSelected(), "FAIL: Leaders tab is not selected.");
	}
}
module.exports = new NbaBasketBallModule();

