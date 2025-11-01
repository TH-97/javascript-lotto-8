import { PurchaseAmount } from "../entities/purchaseAmount/index.js";
import { inputPurchaseAmount } from "../features/input/index.js";
import {
  outputPurchaseAmountMessge,
  outputPurchaseCount,
} from "../features/output/index.js";

export default async function lottoController() {
  outputPurchaseAmountMessge();
  const input = await inputPurchaseAmount();
  const purchasedLottoCount = new PurchaseAmount(
    input
  ).getPurchasedLottoCount();
  outputPurchaseCount(purchasedLottoCount);
}
