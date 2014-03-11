# beauty

Beautiful console and strings: colorful && stylized. Use it without doing anything to `console`.

<img src='https://raw.github.com/sumory/beauty/master/assets/console.png' width='450px;'/>


## Install

```
npm install beauty
```

## Usage

Default:

```
var beauty = require('beauty');
beauty.beautifyConsole();//use default theme

console.log('log:', 'one', 'two');
console.info('info:','three');
console.warn('warn:', 'four');
console.error('error:', 'five');
```

Customize theme:

```
//only one color and several styles supported
var theme = {
	'log': ['blue','underline'],
	'info': ['cyan','inverse'],
	'warn': ['yellow','italic'],
	'error': ['red','bold','underline']
};
beauty.setTheme(theme);//set new theme

console.debug('debug:', 'zero');
console.log('log:', 'one', 'two');
console.info('info:','three');
console.warn('warn:', 'four');
console.error('error:', 'five');
```

Beautify string:

```
beauty.beautifyStr();//make strings colorful and stylized

console.debug('debug:', 'one'.red.bold,'two'.yellow.italic,'three'.green.underline);
console.log('log:', 'five'.italic);
console.info('info:','six');
console.warn('warn:', 'seven'.black.yellowBG);
console.error('error:', 'eight'.underline, 'nine'.black.blueBG);
```

Support formatted string:

```
console.log();
console.print('-> support formatted strings.');
var a =['%s %s%s. %d %s','Give me one','bit','coin',0,' Blockchain'.black.bold];
console.warn.apply(null,a)

console.log('%d%d %s every day. %s every block.', 500, 0, 'bitcoin'.red, '25'.green)
console.log('%s%s %s every day. %s every block.', '500', 0, 'bitcoin'.red, '25'.green)
```

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/sumory/beauty/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
