const selector = require('../../../util/selector');

class OnboardingModule {

	get container()                         { return $(selector.resourceID("container")); }
	get onBoardingGetStartedButton()		{ return $(selector.resourceID("btn_get_started")); }

	get strings() {
		if (language === "FR") {
			return {
			}
		} else {
			return {
			}
		}
	}

	completeOnBoarding() {
	    this.container.waitForVisible();
		if (this.onBoardingGetStartedButton.isExisting()) {
			this.onBoardingGetStartedButton.waitForVisible();
			this.onBoardingGetStartedButton.click();
		}
	}
}
module.exports = new OnboardingModule();

