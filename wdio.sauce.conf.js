const merge = require('deepmerge');
const wdioConf = require('./wdio.conf');
const envConfig = require('./env.conf');

exports.config = merge(wdioConf.config, {

	specs: [
	],


	//=================
	//Service Providers
	//=================
	//WebdriverIO supports Sauce Labs, Browserstack, and Testing Bot (other cloud providers
	//should work too though). These services define specific user and key (or access key)
	//values you need to put in here in order to connect to these services.
	//
	user: '',
	key: '',

	services: [ 'sauce' ],
	//Use if we want to run Sauce Connect programmatically.  Probably should have this set for any automated execution
	//sauceConnect: true,
	//sauceConnectOptions: {
	//fastFailRegexps: 'google-analytics.com,*.answerscloud.com,*facebook*,beacon.walmart.ca,*.doubleclick.net,omniture.walmart.ca,*.googlesyndication.com,hlserve.com,wishabi.com',
	//tunnelDomains: '*.walmart.ca'
	//},


	maxInstances: 100,


	capabilities: [
		{
			browserName: '',
			appiumVersion: '1.7.2',
			deviceName: 'Android GoogleAPI Emulator',
			deviceOrientation: 'portrait',
			platformVersion: '5.1',
			platformName: 'Android',
			app: '',
			waitforTimeout: 300,
			commandTimeout: 300,
			recreateChromeDriverSessions: true,
			autoAcceptAlerts: true,
			autoGrantPermissions: true,
			appWaitActivity: "",
			gpsEnabled: true,
			locationServicesAuthorized: true
		},

	],

	//see also: http://webdriver.io/guide/testrunner/reporters.html
	reporters:
		[
			'junit',
			'spec',
			//'concise',
			//'allure'
		],

	reporterOptions: {
		// allure: {
		//  outputDir: './allure-results'
		//  }
		junit: {
			outputDir: './junit-results'
		}
	},

	//seleniumLogs: 'selenium.log',
	//seleniumInstallArgs: {version: '3.0.1'},
	//seleniumArgs: {version: '3.0.1'},

	//
	//Default timeout for all waitFor* commands.
	waitforTimeout: 50000,

});
