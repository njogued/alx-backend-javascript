const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function() {
  describe('SUM cases', function() {
    it('test round of a', function() {
      assert.equal(calculateNumber('SUM', 1.2, 4), 5);
      assert.equal(calculateNumber('SUM', -1.5, 5), 4);
      assert.equal(calculateNumber('SUM', 4.6, 0), 5);
    });
    it('test round of b', function() {
      assert.equal(calculateNumber('SUM', 1, 4.5), 6);
      assert.equal(calculateNumber('SUM', 3, -5), -2);
      assert.equal(calculateNumber('SUM', 0, 3.4), 3);
    });
    it('test round of both a and b', function() {
      assert.equal(calculateNumber('SUM', 1, 4), 5);
      assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
      assert.equal(calculateNumber('SUM', 1.1, 2.2), 3);
    });
  });

  describe('SUBTRACT cases', function() {
    it('test round of a', function() {
      assert.equal(calculateNumber('SUBTRACT', 1.2, 4), -3);
      assert.equal(calculateNumber('SUBTRACT', -1.5, 5), -6);
      assert.equal(calculateNumber('SUBTRACT', 4.6, 0), 5);
    });
    it('test round of b', function() {
      assert.equal(calculateNumber('SUBTRACT', 1, 4.5), -4);
      assert.equal(calculateNumber('SUBTRACT', 3, -5), 8);
      assert.equal(calculateNumber('SUBTRACT', 0, 3.4), -3);
    });
    it('test round of both a and b', function() {
      assert.equal(calculateNumber('SUBTRACT', 1, 4), -3);
      assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
      assert.equal(calculateNumber('SUBTRACT', 1.1, 2.2), -1);
    });
  }); 

  describe('DIVIDE cases', function() {
    it('test round of a', function() {
      assert.equal(calculateNumber('DIVIDE', 1.2, 4), 0.25);
      assert.equal(calculateNumber('DIVIDE', -1.5, 1), -1);
      assert.equal(calculateNumber('DIVIDE', 4.6, 0), 'Error');
    });
    it('test round of b', function() {
      assert.equal(calculateNumber('DIVIDE', 1, 1.5), 0.5);
      assert.equal(calculateNumber('DIVIDE', 6, 2), 3);
      assert.equal(calculateNumber('DIVIDE', 0, 3.4), 0);
    });
    it('test round of both a and b', function() {
      assert.equal(calculateNumber('DIVIDE', 1, 4), 0.25);
      assert.equal(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
      assert.equal(calculateNumber('DIVIDE', 1.1, 2.2), 0.5);
    });
  }); 
});
