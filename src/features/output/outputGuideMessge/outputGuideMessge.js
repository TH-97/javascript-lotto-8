import { Console } from "@woowacourse/mission-utils";

export function outputPurchaseAmountMessage() {
  Console.print("구입금액을 입력해 주세요.");
}

export function outputPurchaseCount(count) {
  Console.print(`${count}개를 구매했습니다.`);
}

export function outputRandomLottoNumbers(array) {
  array.forEach((numberArray) => {
    Console.print(`[${numberArray.join(", ")}]`);
  });
}

export function outputWinningNumberMessage() {
  Console.print("당첨 번호를 입력해 주세요.");
}
export function outputBounsNumberMessage() {
  Console.print("보너스 번호를 입력해 주세요.");
}
export function outputMatchMessage(matchObject) {
  Console.print(`
3개 일치 (5,000원) - ${matchObject.matchThree}개
4개 일치 (50,000원) - ${matchObject.matchFour}개
5개 일치 (1,500,000원) - ${matchObject.matchFive}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchObject.matchFourAndBonus}개
6개 일치 (2,000,000,000원) - ${matchObject.matchSix}개`);
}
export function outputProfit(calculatedProfit) {
  Console.print(`총 수익률은 ${calculatedProfit}입니다.`);
}
