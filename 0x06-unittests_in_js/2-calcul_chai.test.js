const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', function() {
  describe('SUM cases', function() {
    it('test round of a', function() {
      expect(calculateNumber('SUM', 1.2, 4)).to.equal(5);
      expect(calculateNumber('SUM', -1.5, 5)).to.equal(4);
      expect(calculateNumber('SUM', 4.6, 0)).to.equal(5);
    });
    it('test round of b', function() {
      expect(calculateNumber('SUM', 1, 4.5)).to.equal(6);
      expect(calculateNumber('SUM', 3, -5)).to.equal(-2);
      expect(calculateNumber('SUM', 0, 3.4)).to.equal(3);
    });
    it('test round of both a and b', function() {
      expect(calculateNumber('SUM', 1, 4)).to.equal(5);
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
      expect(calculateNumber('SUM', 1.1, 2.2)).to.equal(3);
    });
  });

  describe('SUBTRACT cases', function() {
    it('test round of a', function() {
      expect(calculateNumber('SUBTRACT', 1.2, 4)).to.equal(-3);
      expect(calculateNumber('SUBTRACT', -1.5, 5)).to.equal(-6);
      expect(calculateNumber('SUBTRACT', 4.6, 0)).to.equal(5);
    });
    it('test round of b', function() {
      expect(calculateNumber('SUBTRACT', 1, 4.5)).to.equal(-4);
      expect(calculateNumber('SUBTRACT', 3, -5)).to.equal(8);
      expect(calculateNumber('SUBTRACT', 0, 3.4)).to.equal(-3);
    });
    it('test round of both a and b', function() {
      expect(calculateNumber('SUBTRACT', 1, 4)).to.equal(-3);
      expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 1.1, 2.2)).to.equal(-1);
    });
  }); 

  describe('DIVIDE cases', function() {
    it('test round of a', function() {
      expect(calculateNumber('DIVIDE', 1.2, 4)).to.equal(0.25);
      expect(calculateNumber('DIVIDE', -1.5, 1)).to.equal(-1);
      expect(calculateNumber('DIVIDE', 4.6, 0)).to.equal('Error');
    });
    it('test round of b', function() {
      expect(calculateNumber('DIVIDE', 1, 1.5)).to.equal(0.5);
      expect(calculateNumber('DIVIDE', 6, 2)).to.equal(3);
      expect(calculateNumber('DIVIDE', 0, 3.4)).to.equal(0);
    });
    it('test round of both a and b', function() {
      expect(calculateNumber('DIVIDE', 1, 4)).to.equal(0.25);
      expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
      expect(calculateNumber('DIVIDE', 1.1, 2.2)).to.equal(0.5);
    });
  }); 
});
