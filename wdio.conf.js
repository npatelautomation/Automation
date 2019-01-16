/* eslint-disable */
const debug = process.env.DEBUG;
const loadCustomCommands = require('./util/customCommands');
const envConfig = require('./env.conf');

exports.config = {
	packageID: envConfig.packageID,
	implicitTimeout: 5000,
	inAppPaymentEnabled: process.env._INAPPPAYMENTFLAG || true,
	//Language to test the site in, can be EN or FR.
	language: 'EN',
	shortWait:1000,
	testEnv: envConfig.testEnvironment,



	//
	// ==================
	// Specify Test Files
	// ==================
	// Define which test specs should run. The pattern is relative to the directory
	// from which `wdio` was called. Notice that, if you are calling `wdio` from an
	// NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
	// directory is where your package.json resides, so `wdio` will be called from there.
	//

	suites: {
	},

	// Patterns to exclude.
	 exclude: [
	 ],


	// If you have trouble getting all important capabilities together, check out the
	// Sauce Labs platform configurator - a great tool to configure your capabilities:
	// https://docs.saucelabs.com/reference/platforms-configurator
	//

	//
	// ===================
	// Test Configurations
	// ===================
	// Define all options that are relevant for the WebdriverIO instance here
	//
	// By default WebdriverIO commands are executed in a synchronous way using
	// the wdio-sync package. If you still want to run your tests in an async way
	// e.g. using promises you can set the sync option to false.
	sync: true,
	//
	// Level of logging verbosity: silent | verbose | command | data | result | error
	logLevel: 'error',
	//
	// Enables colors for log output.
	coloredLogs: true,
	//
	// Saves a screenshot to a given path if a command fails.
	//screenshotPath: './errorShots/',

	//services: ['appium'],



	//
	// Default timeout in milliseconds for request
	// if Selenium Grid doesn't send response
	connectionRetryTimeout: 90000,
	//
	// Default request retries count
	connectionRetryCount: 1,
	//
	// Initialize the browser instance with a WebdriverIO plugin. The object should have the
	// plugin name as key and the desired plugin options as properties. Make sure you have
	// the plugin installed before running any tests. The following plugins are currently
	// available:
	// WebdriverCSS: https://github.com/webdriverio/webdrivercss
	// WebdriverRTC: https://github.com/webdriverio/webdriverrtc
	// Browserevent: https://github.com/webdriverio/browserevent
	// plugins: {
	//     webdrivercss: {
	//         screenshotRoot: 'my-shots',
	//         failedComparisonsRoot: 'diffs',
	//         misMatchTolerance: 0.05,
	//         screenWidth: [320,480,640,1024]
	//     },
	//     webdriverrtc: {},
	//     browserevent: {}
	// },
	//
	//
	// Test runner services
	// Services take over a specific job you don't want to take care of. They enhance
	// your test setup with almost no effort. Unlike plugins, they don't add new
	// commands. Instead, they hook themselves up into the test process.
	// Framework you want to run your specs with.
	// The following are supported: Mocha, Jasmine, and Cucumber
	// see also: http://webdriver.io/guide/testrunner/frameworks.html
	//
	// Make sure you have the wdio adapter package for the specific framework installed
	// before running any tests.
	framework: 'mocha',

	// Options to be passed to Mocha.
	// See the full list at http://mochajs.org/
	//

	mochaOpts: {
		ui: 'tdd',
		timeout: debug ? (24 * 60 * 60 * 1000) : 500000,
		//reporter: 'wdio-allure-reporter'
	},
	// =====
	// Hooks
	// =====
	// WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
	// it and to build services around it. You can either apply a single function or an array of
	// methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
	// resolved to continue.
	//
	// Gets executed once before all workers get launched.
	// onPrepare: function (config, capabilities) {
	// },
	//
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // beforeSession: function (config, capabilities, specs) {
    //     capabilities.noReset = true ;
    //     capabilities.appWaitActivity = "";
    // },



    // Gets executed before test execution begins. At this point you can access all global
	// variables, such as `browser`. It is the perfect place to define custom commands.
	before: function(capabilities, specs) {
        language = this.language;
        shortWait = this.shortWait;
		global.assert = require('chai').assert;
		packageID = this.packageID;
		browser.timeouts('implicit', this.implicitTimeout);
		platformName = browser.desiredCapabilities.platformName.toLowerCase(); //use this in test files to determine the set of modules to use
		loadCustomCommands();
        inAppPaymentEnabled = this.inAppPaymentEnabled;
        testEnv = this.testEnv;


	},

	// Hook that gets executed before the suite starts
	beforeSuite: function(suite) {
		console.log(suite.title);
	},
	//
	// Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
	// beforeEach in Mocha)
	// beforeHook: function () {
	// },
	//
	// Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
	// afterEach in Mocha)
	// afterHook: function() {
	// },
	//
	// Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
	// beforeTest: function (test) {
     //    if(test.title.includes("@noReset")) browser.desiredCapabilities.noReset = true ;
	// },
	//
	// Runs before a WebdriverIO command gets executed.
	// beforeCommand: function (commandName, args) {
	// 	try{
	// 		browser.alertAccept();
	// 	}catch(e){
	// 		console.log("there is no alert need to be accepted");
	// 	}
	// },

	// Runs after a WebdriverIO command gets executed
	// afterCommand: function (commandName, args, result, error) {
	// },
	//
	// Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
	afterTest: function(test) {
		if (debug) browser.debug();
	},
	//
	// Hook that gets executed after the suite has ended
	//afterSuite: function (suite) {
	//
	//},
	//
	// Gets executed after all tests are done. You still have access to all global variables from
	// the test.
	// after: function (result, capabilities, specs) {
	// },
	//
	// Gets executed after all workers got shut down and the process is about to exit. It is not
	// possible to defer the end of the process using a promise.
	// onComplete: function(exitCode) {
	// }
}
