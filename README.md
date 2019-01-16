# NBA

# Prerequisite
The only prerequisite to be able to run desktop regression tests is to have NodeJS installed. Currently, Node 6.x is required.
Setup
1.	Clone this repository to a new directory
2.	run npm install to install all of the dependencies described in ./package.json
# Executing tests
Tests can be run locally 
# Local execution
To run locally, the base command is npm test. As can be seen in ./package.json, this is equivalent to running the wdio testrunner with the local config file (wdio.local.conf.js). You might want to specify a particular spec or suite file to run in addition to using this, which can be configured via the local config file or via command line. A list of suites is contained within the base config file (wdio.conf.js). See below for more examples of how to run tests locally.
To do so via command line, you can use the command npm test -- --spec='./path/to/spec', or npm test -- --suite <suite> To run backend search tests via command line, you can use the command mocha "./request_tests/" --ui=tdd --timeout=6000
Check the package.json file for full script running details. There are a couple of convenience commands created to execute tests only for a specific stream, ex. npm run test-buy to run a set of suites that pertain to the Buy team.

## Getting started on the mobile automation project?

1.	**What should be installed?**
   Android and iOS Simulator
   Appium 

2.	**How to install Android simulator?**
    The normal way is via android virtual device manager of Android studio.  
    Here is the link: https://developer.android.com/studio/index.html 
   
3.	**Why I cannot create virtual Device?**
You may need to enable Virtualization Technology in BIOS. (https://amiduos.com/support/knowledge-base/article/enabling-virtualization-in-bios)  Virtualization Technology would be enabled by default in most of the recent systems. However if it is disabled in BIOS, Please follow the below steps to enable, 
Power ON the System. 
Enter the BIOS setup by pressing 'F2' or 'Del' or 'Enter' key (The key may vary depending on your System Model, please follow the on screen instruction during Power ON). 
Look for an option labeled by 'Virtualization Technology' or 'Intel® Virtualization Technology' under 'CPU Configurations', 'System Configurations', 'Advanced' or 'Security' tab and check if the option is enabled or disabled. 
If the option is disabled, enable the same. 
Save the BIOS settings and Boot into Windows by pressing 'F10' key (The key may vary depending on your System Model). 

4.	**How can I get an iOS simulator?**
You'll need a Mac with xCode installed. 

5.	**How to install Appium?**
If you have node.js installed, it will easy for you to install it via “npm install -g appium”. After Appium installed, you can use “appium” to start Appium in your local. 

6.	**How to check everything is installed correctly?**
Install Appium doctor to help to check the issues. Command: npm install -g Appium-doctor, after you install Appium doctor, type appium-doctor in your CLI 

7.	**Useful website**
Old Chrome apk download website:  https://www.apkmirror.com/apk/google-inc/chrome/

## How to execute the NBA Automation Project
#### For Android
Steps:
1. Launch android simulator in android studio(make sure the simulator installed with play
store available)
2. Start Appium service in local via “npm start” in your CLI
Go to NBA project folder, and find wdio.conf.local.js file and make sure the capabilities value is what you wanted especially app value is updated.
For example:

```javascript
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
```
3. Trigger the test suite that you want to test
For example: npm test -- --suite “android” will test the all android related spec files which is defined in the base wdio.conf.js file; npm test -- -- spec “specific file path” will test specific spec file
