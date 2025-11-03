import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../../../shard/index.js";

export function outputPurchaseAmountMessage() {
  Console.print(MESSAGE.PURCHASE.AMOUNT);
}

export function outputPurchaseCount(count) {
  Console.print(MESSAGE.PURCHASE.COUNT(count));
}

export function outputRandomLottoNumbers(array) {
  array.forEach((numberArray) => {
    Console.print(`[${numberArray.join(", ")}]`);
  });
}

export function outputWinningNumberMessage() {
  Console.print(MESSAGE.LOTTO.WINNING_NUMBER);
}

export function outputBonusNumberMessage() {
  Console.print(MESSAGE.LOTTO.BONUS_NUMBER);
}

export function outputMatchMessage(matchObject) {
  Console.print(
    `${MESSAGE.LOTTO.MATCH.MATCH_THREE} - ${matchObject.matchThree}개\n` +
      `${MESSAGE.LOTTO.MATCH.MATCH_FOUR} - ${matchObject.matchFour}개\n` +
      `${MESSAGE.LOTTO.MATCH.MATCH_FIVE} - ${matchObject.matchFive}개\n` +
      `${MESSAGE.LOTTO.MATCH.MATCH_FIVE_BONUS} - ${matchObject.matchFourAndBonus}개\n` +
      `${MESSAGE.LOTTO.MATCH.MATCH_SIX} - ${matchObject.matchSix}개`
  );
}

export function outputProfit(calculatedProfit) {
  Console.print(MESSAGE.PROFIT.TOTAL(calculatedProfit));
}
