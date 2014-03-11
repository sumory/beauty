//~========================================================
//
var styles = {
      //styles
      'bold': ['\x1B[1m', '\x1B[22m'],
      'italic': ['\x1B[3m', '\x1B[23m'],
      'underline': ['\x1B[4m', '\x1B[24m'],
      'inverse': ['\x1B[7m', '\x1B[27m'],
      'strikethrough': ['\x1B[9m', '\x1B[29m'],

      //text colors
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

      //background colors
      'redBG': ['\x1B[41m', '\x1B[49m'],
      'greenBG': ['\x1B[42m', '\x1B[49m'],
      'yellowBG': ['\x1B[43m', '\x1B[49m'],
      'blueBG': ['\x1B[44m', '\x1B[49m'],
      'magentaBG': ['\x1B[45m', '\x1B[49m'],
      'cyanBG': ['\x1B[46m', '\x1B[49m'],
      'whiteBG': ['\x1B[47m', '\x1B[49m']
};

function stylize(str, style) {
      return style[0] + str + style[1];
}

var defineGetter = function(style, func) {
      String.prototype.__defineGetter__(style, func);
};

defineGetter('clear', function() {
      return ("" + this).replace(/\x1B\[\d+m/g, '');
});

Object.keys(styles).forEach(function(s) {
      String.prototype.__defineGetter__(s, function() {
            return stylize(this, styles[s]);
      });
});

console.log('fdsafsd'.bold.red,'23232'.italic);