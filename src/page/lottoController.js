import { PurchaseAmount } from "../entities/purchaseAmount/index.js";
import { inputPurchaseAmount } from "../features/input/index.js";
import { outputPurchaseAmountMessge } from "../features/output/index.js";

export default async function lottoController() {
  outputPurchaseAmountMessge();
  const input = await inputPurchaseAmount();
  const purchaseAmount = new PurchaseAmount(input).getPurchaseAmount();
}
