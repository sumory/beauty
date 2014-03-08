/*
 * beauty - lib/beauty.js
 * Copyright(c) 2014 sumory.wu <sumory.wu@gmail.com>
 */

//console.error('abc') ==> console.error(bold(italic((red('abc'))))
var util = require('util');
exports = module.exports = new Beauty();

function Beauty() {
	this.colors = {
		'white': ['\x1B[37m', '\x1B[39m'],
		'grey': ['\x1B[90m', '\x1B[39m'],
		'black': ['\x1B[30m', '\x1B[39m'],
		'blue': ['\x1B[34m', '\x1B[39m'],
		'cyan': ['\x1B[36m', '\x1B[39m'],
		'green': ['\x1B[32m', '\x1B[39m'],
		'magenta': ['\x1B[35m', '\x1B[39m'],
		'red': ['\x1B[31m', '\x1B[39m'],
		'yellow': ['\x1B[33m', '\x1B[39m']
	};

	this.styles = {
		'bold': ['\x1B[1m', '\x1B[22m'],
		'italic': ['\x1B[3m', '\x1B[23m'],
		'underline': ['\x1B[4m', '\x1B[24m'],
		'inverse': ['\x1B[7m', '\x1B[27m'],
		'strikethrough': ['\x1B[9m', '\x1B[29m']
	};


	this.beauties = {};
}

Beauty.prototype.init = function() {
	var self = this;
	var colors = self.colors;
	var styles = self.styles;

	for (var c in colors) {
		self.beauties[c] = (function(c) {
			return function(text) {
				return colors[c][0] + text + colors[c][1];
			};
		})(c);
	}

	for (var s in styles) {
		self.beauties[s] = (function(s) {
			return function(text) {
				return styles[s][0] + text + styles[s][1];
			};
		})(s);
	}

	return self;
};

console.print = console.log


Beauty.prototype.setTheme = function(theme) {
	var self = this;
	theme = theme || { //only one color and several styles supported
		'info': ['cyan', 'bold'],
		'warn': ['yellow', 'underline'],
		'error': ['red', 'italic', 'inverse'],
		'log': ['magenta', 'bold']
	};


	for (var t in theme) {
		console[t] = (function(t) {
			var bs = theme[t];
			var ct = console[t];

			return function() {
				var args = Array.prototype.slice.call(arguments);
				var modifiedText = args.join(' ');

				for (var i = 0; i < bs.length; i++) {
					modifiedText = self.beauties[bs[i]](modifiedText);
				}
				console.print(modifiedText);
			};
		})(t);

	}
};

Beauty.prototype.beautifyConsole = function() {
	var self = this;
	self.init();
	self.setTheme();
	return self;
};