# beauty

Beautiful console: colorful && stylized. Use it without doing anything to `console`.

![](https://raw.github.com/sumory/beauty/master/assets/console.png)

## Install

```
npm install beauty
```

## Usage

Default:

```
var beauty = require('beauty');

beauty.beautifyConsole();

console.log('log:','just','logging');
console.info('info: let it go...');
console.warn('warn:', 'warning');
console.error('error:', 'something is error');
```

Customized theme:

```
//only one color and several styles supported
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
```

