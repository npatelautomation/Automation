# NBA

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
