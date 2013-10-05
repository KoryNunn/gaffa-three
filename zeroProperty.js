var Gaffa = require('gaffa');

function ZeroProperty () {}
ZeroProperty = Gaffa.createSpec(ZeroProperty, Gaffa.Property);
ZeroProperty.prototype.value = 0;

module.exports = ZeroProperty;