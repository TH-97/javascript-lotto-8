import { ERROR_MESSAGE } from "../../../shard/index.js";

export class PurchaseAmount {
  #purchaseAmount;

  constructor(purchaseAmount) {
    this.#validate(purchaseAmount);
    this.#purchaseAmount = Number(purchaseAmount);
  }

  #validate(purchaseAmount) {
    if (purchaseAmount.length === 0) throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
    if (Number(purchaseAmount) % 1000 !== 0)
      throw new Error(ERROR_MESSAGE.THOUSAND_UNIT_ONLY);
  }

  getPurchasedLottoCount() {
    return this.#purchaseAmount / 1000;
  }
}
