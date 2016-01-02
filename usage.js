// Import the library entry file
var lib = require('./dist/webpack2bower');

// It exports a class Lib42
new lib.Lib42().about();

// ...and a const (Immutable.Map) INITIAL_STATE
console.log(lib.INITIAL_STATE.set('key', 42));