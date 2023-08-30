function calculateNumber(a, b) {
  const roundValA = Math.round(a);
  const roundValB = Math.round(b);

  return roundValA + roundValB;
}

module.exports = calculateNumber;
