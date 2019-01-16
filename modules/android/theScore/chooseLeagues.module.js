const selector = require('../../../util/selector');
const assert = require('chai').assert;

class ChooseLeaguesModule {
	get container()                         { return $(selector.resourceID("container")); }
	get leaguesTitle()                      { return $(selector.text(this.strings.leaguesTitle)); }
	get leagueNames()			            { return $$(selector.resourceID("txt_league_name")); }
	get leagueImages()		                { return $$(selector.resourceID("img_league")); }
	get leagueStars()		                { return $$(selector.resourceID("img_follow")); }
	get logosImage()		                { return $$(selector.resourceID("img_logo")); }
	get logosTitle()		                { return $$(selector.resourceID("title")); }
	get favouriteStar()		                { return $(selector.resourceID("img_view")); }
	get nextBtn()							{ return $(selector.resourceID("btn_next")); }
	get nascarRacingLeague()                { return $(selector.text(this.strings.nascarRacingLeague)); }
	get cflFootballLeague()                 { return $(selector.text(this.strings.cflFootballLeague)); }
	get pgaTourLeague()                     { return $(selector.text(this.strings.pgaTour)); }
	get eglandSoccerLeague()                { return $(selector.text(this.strings.eglandSoccer)); }


	get strings() {
		if (language == "FR") {
			return {
				leaguesTitle: "",
				nascarRacingLeague: "",
				cflFootballLeague: "",
				pgaTour: "",
				eglandSoccer: "",
			}
		} else {
			return {
				leaguesTitle: "Choose your favorite leagues",
				nascarRacingLeague: "NASCAR Racing",
				cflFootballLeague: "CFL Football",
				pgaTour: "PGA Tour",
				eglandSoccer: "Egland Soccer",
			}
		}
	}

	hasLoaded() {
	    this.container.waitForVisible();
		this.leaguesTitle.waitForVisible();
		return this;
	}

	verifyListOfLeaguesScreen() {
		this.hasLoaded();
		assert.equal(this.leagueNames.length, 8, "FAIL: List of league names are not correct");
		assert.equal(this.leagueImages.length, 8, "FAIL: List of league images are not correct");
		assert.equal(this.leagueStars.length, 8, "FAIL: List of league stars are not correct");
	}


	clickLeagueName(leagueName) {
		let index = this.findLeagueByName(leagueName);
	    this.selectLeague(index)
	}

	verifyLeagueHeader(leagueName, index = 0) {
		browser.waitUntil(() => this.logosImage.length > 0, "FAIL: Logo image is not showing up");
		assert.equal(this.logosTitle[index].getText(), leagueName, "FAIL: Incorrect league title");
	}

	clickNextBtn() {
	    this.nextBtn.waitForEnabled();
	    this.nextBtn.click();
	}

	selectLeague(index) {
		this.leagueNames[index].waitForVisible();
		this.leagueNames[index].click();
	}

	findLeagueByName(leagueName) {
		let name = this.leagueNames.filter(l => l.getText().includes(leagueName))[0];
		if (name === undefined) { return -1; } else { return name['index']; }
	}
}
module.exports = new ChooseLeaguesModule();

