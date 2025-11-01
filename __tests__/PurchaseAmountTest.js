import { PurchaseAmount } from "../src/entities/purchaseAmount/index.js";

describe("로또 구입 금액 클래스 테스트", () => {
  test.each([
    ["1000", true],
    ["1200", false],
    ["10000", true],
  ])(
    "구입 금액이 1000 단위가 아니면 예외가 발생한다",
    (amount, shouldThrow) => {
      if (shouldThrow) {
        expect(() => new PurchaseAmount(amount)).not.toThrow();
      } else {
        expect(() => new PurchaseAmount(amount)).toThrow("[ERROR]");
      }
    }
  );
});
