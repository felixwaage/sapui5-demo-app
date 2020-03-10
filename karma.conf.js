/* global module*/

module.exports = function(config) {
	"use strict";

	var webdriverConfig = {
		hostname: 'selenium',
		port: 80
	}

	config.set({

		frameworks: ['ui5'],
		
		plugins: [
			require('karma-chrome-launcher'),
			require('karma-coverage'),
			require('karma-ui5'),
			require('karma-webdriver-launcher')
		],

		customLaunchers: {
			Chrome_no_sandbox: {
			  base: 'Chrome',
			  flags: [
				'--headless',
				'--disable-web-security',
				'--disable-gpu',
				// Without a remote debugging port, Google Chrome exits immediately.
				'--remote-debugging-port=xxxx',
				'--remote-debugging-address=xxx.x.x.x'
			  ]
			}
		},

		reporters: ['progress'],

		logLevel: config.LOG_INFO,

		browserConsoleLogOptions: {
			level: 'warn'
		},

		autoWatch: true,

		browsers: ['Chrome'],

		singleRun: false
	});
};