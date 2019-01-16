/* eslint-disable */
const merge = require('deepmerge');
const wdioConf = require('./wdio.conf');
const envConfig = require('./env.conf');

exports.config = merge(wdioConf.config, {
	specs: [
		'./tests/playerDetails/nbaPlayerDetails.spec.js'
	],

	maxInstances: 1,

	capabilities: [

        {
         	platformName: 'Android',
         	platformVersion: '8.1',
         	deviceName: 'Android Emulator',
         	newCommandTimeout: 240,
         	autoAcceptAlerts: true,
         	waitforTimeout: 30000,
         	commandTimeout: 30000,
         	app: '/Users/nicpatel1/testEx/theso/app/com.fivemobile.thescore-6.27.0@APK4Fun.com.apk', //this is relative to the appium server
         	autoGrantPermissions: true,
			fullReset: true,
	        unicodeKeyboard: true
		  },

	],

	host: '127.0.0.1',
	port: 4723,


	// // Default timeout for all waitFor* commands.
	waitforTimeout: 30000,

	reporters: [
		'dot',
		'spec',
		//'allure'
	],
});
