import { PurchaseAmount } from "../entities/purchaseAmount/index.js";
import { RandomLottoNumberArray } from "../entities/randomLottoNumberArray/index.js";
import { WinningLotto } from "../entities/winningLotto/index.js";
import { inputValue } from "../features/input/index.js";
import {
  outputPurchaseAmountMessge,
  outputPurchaseCount,
  outputRandomLottoNumbers,
  outputWinningNumberMessge,
  outputBounsNumberMessge,
} from "../features/output/index.js";

export default async function lottoController() {
  outputPurchaseAmountMessge();

  const input = await inputValue();

  const purchasedLottoCount = new PurchaseAmount(
    input
  ).getPurchasedLottoCount();

  outputPurchaseCount(purchasedLottoCount);

  const randomLottoArray = new RandomLottoNumberArray(
    purchasedLottoCount
  ).getRandomLottoNumberArray();

  outputRandomLottoNumbers(randomLottoArray);

  outputWinningNumberMessge();
  const inputWinningNumber = await inputValue();
  outputBounsNumberMessge();
  const inputBounsNumber = await inputValue();

  const winnginLotto = new WinningLotto(inputWinningNumber, inputBounsNumber);
  const matchObject = winnginLotto.getMatchNumbs(randomLottoArray);
  console.log(matchObject);
}
