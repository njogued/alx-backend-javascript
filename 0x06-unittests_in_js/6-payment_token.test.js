const Utils = requie("./utils");

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = Utils.calculateNumber("SUM", totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
0x06 - unittests_in_js / 5 - payment.js;
