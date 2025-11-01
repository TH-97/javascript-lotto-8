import { PurchaseAmount } from "../entities/purchaseAmount/index.js";
import { RandomLottoNumberArray } from "../entities/randomLottoNumberArray/index.js";
import { inputPurchaseAmount } from "../features/input/index.js";
import {
  outputPurchaseAmountMessge,
  outputPurchaseCount,
  outputRandomLottoNumbers,
} from "../features/output/index.js";

export default async function lottoController() {
  outputPurchaseAmountMessge();
  const input = await inputPurchaseAmount();
  const purchasedLottoCount = new PurchaseAmount(
    input
  ).getPurchasedLottoCount();
  outputPurchaseCount(purchasedLottoCount);
  const randomLottoArray = new RandomLottoNumberArray(
    purchasedLottoCount
  ).getRandomLottoNumberArray();
  outputRandomLottoNumbers(randomLottoArray);
}
