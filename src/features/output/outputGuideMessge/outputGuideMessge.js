import { Console } from "@woowacourse/mission-utils";

export function outputPurchaseAmountMessge() {
  Console.print("구입금액을 입력해 주세요.");
}

export function outputPurchaseCount(count) {
  Console.print(`${count}개를 구매했습니다.`);
}
