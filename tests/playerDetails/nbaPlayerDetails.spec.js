const ChooseLeagueModule  = require(`../../modules/${platformName}/theScore/chooseLeagues.module`);
const ChooseTeamModule  = require(`../../modules/android/theScore/chooseTeams.module`);
const TheScoreModule  = require(`../../modules/android/theScore/theScore.module`);
const NBABasketBallModule  = require(`../../modules/android/theScore/nbaBasketBall.module`);
const NBALeadersModule  = require(`../../modules/android/theScore/nbaLeaders.module`);
const PlayerDetailsModule  = require(`../../modules/android/theScore/playerDetails.module`);
const OnBoardingModule  = require(`../../modules/android/theScore/OnBoarding.module`);


suite("NBA player details: ", function() {
	setup("Complete on boarding ", function () {
		OnBoardingModule.completeOnBoarding();
	});

	test(`Select two NBA teams and verify player details`, function () {
	    //League screen
		ChooseLeagueModule.verifyListOfLeaguesScreen();
		ChooseLeagueModule.clickLeagueName("NBA");
		ChooseLeagueModule.verifyLeagueHeader("NBA");
		ChooseLeagueModule.clickNextBtn();

		//Team screen
		ChooseTeamModule.verifyChooseYourTeamScreen();
		ChooseTeamModule.clickNBATab();
		ChooseTeamModule.selectAnyTwoTeams();
		ChooseTeamModule.verifySelectedTeam();
		ChooseTeamModule.clickNextBtn();
		ChooseTeamModule.verifyAlertScreen();

		//Score screen
		TheScoreModule.verifyScoreBoard();
		TheScoreModule.clickNBALogoImage();

		//NBA Basketball screen
		NBABasketBallModule.verifyNBAScreen();
		NBABasketBallModule.clickNBALeadersTab();

		//NBA Leaders screen
		NBALeadersModule.verifyLeadersScreen();
		let expectedPlayer = NBALeadersModule.clickRandomPlayerFromLeadersScreen();

		//Player Details screen
		PlayerDetailsModule.verifyPayerDetails(expectedPlayer);
	});
});