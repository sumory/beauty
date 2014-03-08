var beauty = require('../index.js');

beauty.beautifyConsole();

console.log('log:','just','logging');
console.info('info: let it go...');
console.warn('warn:', 'warning');
console.error('error:', 'something is error');


var theme = {
	'log':['blue'],
	'info': ['cyan'],
	'warn': ['yellow'],
	'error': ['red', 'bold', 'underline']
};
beauty.setTheme(theme);

console.log();

//test it
console.log('log:','after setting another theme');
console.info('info: show');
console.warn('warn:', 'ignore it');
console.error('error:', 'shut down');

