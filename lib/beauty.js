/*
 * beauty - lib/beauty.js
 * Copyright(c) 2014 sumory.wu <sumory.wu@gmail.com>
 */

var util = require('util');

console.print = console.log;
exports = module.exports = new Beauty();

function Beauty() {
	this.styles = {
		//fg colors
		'grey': ['\x1B[90m', '\x1B[39m'],
		'black': ['\x1B[30m', '\x1B[39m'],
		'red': ['\x1B[31m', '\x1B[39m'],
		'green': ['\x1B[32m', '\x1B[39m'],
		'yellow': ['\x1B[33m', '\x1B[39m'],
		'blue': ['\x1B[34m', '\x1B[39m'],
		'magenta': ['\x1B[35m', '\x1B[39m'],
		'cyan': ['\x1B[36m', '\x1B[39m'],
		'white': ['\x1B[37m', '\x1B[39m'],

		//bg colors
		'redBG': ['\x1B[41m', '\x1B[49m'],
		'greenBG': ['\x1B[42m', '\x1B[49m'],
		'yellowBG': ['\x1B[43m', '\x1B[49m'],
		'blueBG': ['\x1B[44m', '\x1B[49m'],
		'magentaBG': ['\x1B[45m', '\x1B[49m'],
		'cyanBG': ['\x1B[46m', '\x1B[49m'],
		'whiteBG': ['\x1B[47m', '\x1B[49m'],


		//styles
		'bold': ['\x1B[1m', '\x1B[22m'],
		'italic': ['\x1B[3m', '\x1B[23m'],
		'underline': ['\x1B[4m', '\x1B[24m'],
		'inverse': ['\x1B[7m', '\x1B[27m'],
		'strikethrough': ['\x1B[9m', '\x1B[29m']
	};

	this.defaultTheme ={ //only one color and several styles supported
		'log': ['blue'],
		'info': ['cyan'],
		'warn': ['yellow'],
		'error': ['red'],
		'debug': ['grey']
	};


	this.beauties = {};
}

Beauty.prototype.stylizeStr = function() {
	var self = this;
	var styles = self.styles;
	Object.keys(styles).forEach(function(key) {
		Object.defineProperty(String.prototype, key, {
			get: function() {
				return styles[key][0] + this.valueOf() + styles[key][1];
			}
		});
	});

	return self;
};

Beauty.prototype.stylizeConsole = function() {
	var self = this;
	var styles = self.styles;

	for (var s in styles) {
		self.beauties[s] = (function(s) {
			return function(text) {
				return styles[s][0] + text + styles[s][1];
			};
		})(s);
	}

	return self;
};



Beauty.prototype.setTheme = function(theme) {
	var self = this;
	theme = theme || self.defaultTheme;

	for (var t in theme) {
		console[t] = (function(t) {
			var bs = theme[t];
			var ct = console[t];

			return function() {
				var args = Array.prototype.slice.call(arguments);
				if (args && args.lenght >= 1) {
					if (args[0].indexOf('%i') != -1 || args[0].indexOf('%s') != -1 || args[0].indexOf('%d') != -1 || args[0].indexOf('%f') != -1 || args[0].indexOf('%o') != -1) {

					}
				}
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
	self.stylizeConsole();
	self.setTheme();
	return self;
};

Beauty.prototype.beautifyStr = function() {
	var self = this;
	self.stylizeStr();
	return self;
};