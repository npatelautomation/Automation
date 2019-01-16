const selector = require('../../../util/selector');
let Chance = require('chance');
let chance = new Chance();
let team = {};

class ChooseTeamsModule {
	get popularInYourAreaTab()              { return $(selector.text(this.strings.popularInYourArea)); }
	get chooseYourFavoriteTeams()           { return $(selector.text(this.strings.chooseYourFavoriteTeams)); }
	get nbaTab()                            { return $$(selector.text(this.strings.nbaTabText)); }
	get nextBtn()							{ return $(selector.resourceID("btn_next")); }
	get logosImage()		                { return $$(selector.resourceID("img_logo")); }
	get logosTitle()		                { return $$(selector.resourceID("title")); }
	get teamNames()                         { return $$(selector.resourceID("txt_name")); }



	//Alert screen
	get notificationAlert()				    { return $(selector.resourceID("mg_notification_bg")); }
	get allowBtn()                          { return $(selector.resourceID("btn_allow")); }
	get disAllowBtn()                       { return $(selector.resourceID("btn_disallow")); }

	//Popup
	get favouriteAlert()				    { return $(selector.resourceID("content_container")); }
	get doneBtn()                           { return $(selector.resourceID("btn_allow")); }

	get strings() {
		if (language == "FR") {
			return {
				popularInYourArea: "",
				chooseYourFavoriteTeams: "",
				nbaTabText: "",
			}
		} else {
			return {
				popularInYourArea: "POPULAR IN YOUR AREA",
				chooseYourFavoriteTeams: "Choose your favorite teams",
				nbaTabText: "NBA",
			}
		}
	}

	hasLoaded() {
		this.chooseYourFavoriteTeams.waitForVisible();
	}

	verifyChooseYourTeamScreen() {
		this.hasLoaded();
		browser.waitUntil(() => this.popularInYourAreaTab.isSelected(), "FAIL: POPULAR IN YOUR AREA tab is not selected.");
	}

	clickNBATab() {
		if (this.nbaTab.length > 1) {
			this.nbaTab[1].waitForVisible();
			this.nbaTab[1].click();
		} else {
			this.nbaTab[0].waitForVisible();
			this.nbaTab[0].click();
		}
	}

	selectAnyTwoTeams() {
	    team.first = this.teamNames[0].getText();
		this.logosImage[1].click();   //Select first team
		browser.waitUntil(() => this.logosTitle.length >= 2);
		let i = chance.integer({min: 3, max: this.logosImage.length - 1});  //Find random index
		team.second = this.teamNames[i - 1].getText();
		this.logosImage[i].click();  //Select second team
		browser.waitUntil(() => this.logosTitle.length >= 3);
	}

	verifySelectedTeam() {
	    let expectedTeamName = {};
	    expectedTeamName.first = this.logosTitle[1].getText();
	    expectedTeamName.second = this.logosTitle[0].getText();
	    assert.deepEqual(team, expectedTeamName, "FAIL: Team names are not correct.")
	}

	clickNextBtn() {
		this.nextBtn.waitForEnabled();
		this.nextBtn.click();
	}

	verifyAlertScreen() {
		this.allowBtn.waitForVisible();
		this.allowBtn.click();
		this.favouriteAlert.waitForVisible();
		this.doneBtn.waitForVisible();
		this.doneBtn.click();
	}
}
module.exports = new ChooseTeamsModule();

