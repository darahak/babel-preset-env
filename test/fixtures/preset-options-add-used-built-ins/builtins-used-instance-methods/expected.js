import 'core-js/modules/es6.array.from';
import 'core-js/modules/es6.map';
import 'core-js/modules/es7.array.includes';
import 'core-js/modules/es6.string.includes';
import 'core-js/modules/es6.array.find';
import 'core-js/modules/es6.array.find-index';
import 'core-js/modules/es6.array.fill';
import 'core-js/modules/es7.string.pad-start';
import 'core-js/modules/es7.string.pad-end';
import 'core-js/modules/es6.string.starts-with';
import 'core-js/modules/es6.string.code-point-at';
import 'core-js/modules/es6.string.ends-with';
Array.from; // static function
Map; // top level built-in

// instance methods may have false positives (which is ok)
a.includes(); // method call
b['find']; // computed string?
c.prototype.findIndex(); // .prototype
d.fill.bind(); //.bind
e.padStart.apply(); // .apply
f.padEnd.call(); // .call
String.prototype.startsWith.call; // prototype.call
var _k = k,
    codePointAt = _k.codePointAt,
    endsWith = _k.endsWith; // destructuring