const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const cases = require('../src/functions.js');
const expect = chai.expect;
const assert = chai.assert;
chai.use(sinonChai);

describe('functions', () => {
  describe('addNums', () => {
    const addNums = cases.addNums;
    it('should be a function', () => {
      expect(addNums).to.be.a('function');
    });
    it('should return the proper output given specific input', () => {
      expect(addNums(1, 2)).to.equal(3);
    });
  });

  describe('callBackInvoker', () => {
    it('should be a function', () => {
      const callBackInvoker = cases.callBackInvoker;
      expect(callBackInvoker).to.be.a('function');
    });
    it('should invoke a given callback passed to it', () => {
      // this is where you're going to be using 'chai's sinon' spy function.
      const callBack = sinon.spy();
      const newCbInvoker = cases.callBackInvoker;
      // pass our spy `callBack` to our newCbInvoker fn.
      // write a test that to see if our callback has been called.
      // hint - you will need to look at https://github.com/domenic/sinon-chai to see syntax around this
    });
  });

  describe('iterator', () => {
    it('should be a function', () => {
      const iterator = cases.iterator;
      expect(iterator).to.be.a('function');
    });
    //similiar to above where we are utilizing our spy from sinon, this assertion should test if a cb is called x times.
    it('should call a callback for n times passed to cases.iterator', () => {});
  });

  describe('each', () => {
    let testArray = [];
    const each = cases.each;
    beforeEach(() => {
      testArray = [1, 2, 3, 4, 'eggs', 'cheese', 'milk'];
    });

    afterEach(() => {
      testArray = [];
    });

    it('should be a function', () => {
      expect(each).to.be.an('function');
    });
    it('should call a callback for each item in the array', () => {
      const myLength = testArray.length;
      const callBack = sinon.spy();
      each(testArray, callBack);
      expect(callBack).to.have.callCount(7);
      expect(callBack).to.have.been.calledWith(1);
      expect(callBack).to.have.been.calledWith(14);
    });
  });
});