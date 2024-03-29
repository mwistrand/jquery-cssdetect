module.exports = function(config) {
	config.set({
		// base path, that will be used to resolve files
		// if you set it to current dir like here, all your other paths can just be relative to it
		basePath: ".",

		frameworks: ["jasmine"],

		// list of files / patterns to load in the browser
		files: [
			// dependencies
			"vendor/jquery.min.js",

			// code you want to test
			"src/js/*.js",

			// test code
			"test/spec/*.spec.js"
		],

		// list of files to exclude
		exclude: [],
		preprocessors: {"*/.html": [] },

		// test results reporter to use
		// possible values: "dots", "progress", "junit"
		reporters: ["progress"],

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: ["Chrome"],

		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 20000,

		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: false,

		plugins: [
			"karma-jasmine",
			"karma-chrome-launcher"
		]
	});
};
