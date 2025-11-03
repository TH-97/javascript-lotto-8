export class PurchaseAmount {
  #purchaseAmount;

  constructor(purchaseAmount) {
    this.#validate(purchaseAmount);
    this.#purchaseAmount = Number(purchaseAmount);
  }

  #validate(purchaseAmount) {
    if (Number(purchaseAmount) % 1000 !== 0)
      throw new Error("[ERROR] 1000 단위 여야 합니다");
  }

  getPurchasedLottoCount() {
    return this.#purchaseAmount / 1000;
  }
}
