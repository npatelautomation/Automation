const selector = require('../../../util/selector');
const assert = require('chai').assert;
let Chance = require('chance');
let chance = new Chance();

class NbaLeadersModule {
	//Leaders screen
	get mainContainer()			            { return $(selector.resourceID("main_container")); }
	get pointsperGameTitle()                { return $(selector.text(this.strings.pointsperGameText)); }
	get bigLeaders()						{ return $$(selector.resourceID("big_leader")); }
	get smallLeaders()						{ return $$(selector.resourceID(`leader${leaderIndex}`)); }
	get leaderNames()                       { return $$(selector.resourceID("txt_name")); }
	get seeAllLinks()                       { return $$(selector.resourceID("btn_go_to_full")); }

	get strings() {
		if (language == "FR") {
			return {
				pointsperGameText: "",
			}
		} else {
			return {
				pointsperGameText: "Points per Game",
			}
		}
	}

	hasLoaded() {
		this.mainContainer.waitForVisible();
	}

	verifyLeadersScreen() {
		this.hasLoaded();
		this.pointsperGameTitle.waitForVisible();
		browser.waitUntil(() => this.seeAllLinks.length > 0, "FAIL: See all links are not showing up");
	}

	clickRandomPlayerFromLeadersScreen() {
		let i = chance.integer({min: 0, max: this.leaderNames.length - 1});
		let expectedLeaderName = this.leaderNames[i].getText();
		this.leaderNames[i].click();
		return expectedLeaderName;
	}
}
module.exports = new NbaLeadersModule();

