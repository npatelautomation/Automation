const ChooseLeagueModule  = require(`../../modules/${platformName}/theScore/chooseLeagues.module`);
const ChooseTeamModule  = require(`../../modules/android/theScore/chooseTeams.module`);
const TheScoreModule  = require(`../../modules/android/theScore/theScore.module`);
const NBABasketBallModule  = require(`../../modules/android/theScore/nbaBasketBall.module`);
const NBALeadersModule  = require(`../../modules/android/theScore/nbaLeaders.module`);
const PlayerDetailsModule  = require(`../../modules/android/theScore/playerDetails.module`);
const OnBoardingModule  = require(`../../modules/android/theScore/OnBoarding.module`);


suite("NBA player details: ", function() {
	setup("Complete on boarding ", function () {
		//Step 1: Complete OnBoarding
		OnBoardingModule.completeOnBoarding();
	});

	test(`Select two NBA teams and verify player details`, function () {
	    //League screen
		//Step 2: Verify League screen
		ChooseLeagueModule.verifyListOfLeaguesScreen();
		//Step 3: Select  "NBA"
		ChooseLeagueModule.clickLeagueName("NBA");
		//Step 4: Verify if correct league showing up
		ChooseLeagueModule.verifyLeagueHeader("NBA");
		//Step 5: Click Next button
		ChooseLeagueModule.clickNextBtn();

		//Team screen
		//Step 6: Verify Choose your Team screen
		ChooseTeamModule.verifyChooseYourTeamScreen();
		//Step 7: Click on NBA tab
		ChooseTeamModule.clickNBATab();
		//Step 8: Select any two teams from NBA tab.
		ChooseTeamModule.selectAnyTwoTeams();
		//Step 9: Verify if the correct team have been selected?
		ChooseTeamModule.verifySelectedTeam();
		//Step 10: Click Next button
		ChooseTeamModule.clickNextBtn();
		//Step 11: Accept Alert
		ChooseTeamModule.verifyAlertScreen();

		//Score screen
		//Step 12: Verify the score screen
		TheScoreModule.verifyScoreBoard();
		//Step 13: Click on NBA logo
		TheScoreModule.clickNBALogoImage();

		//NBA Basketball screen
		//Step 14: Verify NBA screen
		NBABasketBallModule.verifyNBAScreen();
		//Step 15: Click on Leaders tab
		NBABasketBallModule.clickNBALeadersTab();

		//NBA Leaders screen
		//Step 16: Verify Leaders screen
		NBALeadersModule.verifyLeadersScreen();
		//Step 17: Click on random player and return the player name.
		let expectedPlayer = NBALeadersModule.clickRandomPlayerFromLeadersScreen();

		//Player Details screen
		//Step 18: Verify Player details
		PlayerDetailsModule.verifyPayerDetails(expectedPlayer);
	});
});