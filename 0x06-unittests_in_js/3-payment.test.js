const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  it('result of spy is same as utils function', function() {
    const calculateSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    calculateSpy.calledWithExactly('SUM', 100, 20);

    calculateSpy.restore();
  });
});
