export function calculateProfit(matchObject, inputPurchaseAmount) {
  const profit =
    matchObject.matchThree * 5000 +
    matchObject.matchFour * 50000 +
    matchObject.matchFive * 1500000 +
    matchObject.matchFourAndBonus * 30000000 +
    matchObject.matchSix * 2000000000;

  const investmentMoney = Number(inputPurchaseAmount);

  const rate = (profit / investmentMoney) * 100;

  return `${rate.toFixed(1)}%`;
}
