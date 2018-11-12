var _ = require('lodash');
var Mocha = require('mocha')
var assert = require('assert')
var mocha = new Mocha()

mocha.suite.emit('pre-require', this, 'solution', mocha)


/************ APP ************/

const main = () => {
  console.log('main');
}


/******************* TESTS *******************/

describe('Test suite', function() {
  // https://github.com/browserify/commonjs-assert
  it('should work', function() {
    assert(true)
  })
})

mocha.run()
main();
