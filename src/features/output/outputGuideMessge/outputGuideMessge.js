import { Console } from "@woowacourse/mission-utils";

export function outputPurchaseAmountMessge() {
  Console.print("구입금액을 입력해 주세요.");
}

export function outputPurchaseCount(count) {
  Console.print(`${count}개를 구매했습니다.`);
}

export function outputRandomLottoNumbers(array) {
  array.forEach((numberArray) => {
    Console.print(numberArray);
  });
}

export function outputWinningNumberMessge() {
  Console.print("당첨 번호를 입력해 주세요.");
}
export function outputBounsNumberMessge() {
  Console.print("보너스 번호를 입력해 주세요.");
}
