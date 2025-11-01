export class PurchaseAmount {
  #purchaseAmount;

  constructor(purchaseAmount) {
    this.#vaildate(purchaseAmount);
    this.#purchaseAmount = Number(purchaseAmount);
  }

  #vaildate(purchaseAmount) {
    if (Number(purchaseAmount) % 1000 !== 0)
      throw new Error("[ERROR] 1000 단위 여야 합니다");
  }

  getPurchasedLottoCount() {
    return this.#purchaseAmount / 1000;
  }
}
