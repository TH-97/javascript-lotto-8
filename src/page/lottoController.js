import { PurchaseAmount } from "../entities/purchaseAmount/index.js";
import { RandomLottoNumberArray } from "../entities/randomLottoNumberArray/index.js";
import { WinningLotto } from "../entities/winningLotto/index.js";
import { inputValue } from "../features/input/index.js";
import {
  outputPurchaseAmountMessage,
  outputPurchaseCount,
  outputRandomLottoNumbers,
  outputWinningNumberMessage,
  outputBounsNumberMessage,
  outputMatchMessage,
} from "../features/output/index.js";

export default async function lottoController() {
  outputPurchaseAmountMessage();

  const input = await inputValue();

  const purchasedLottoCount = new PurchaseAmount(
    input
  ).getPurchasedLottoCount();

  outputPurchaseCount(purchasedLottoCount);

  const randomLottoArray = new RandomLottoNumberArray(
    purchasedLottoCount
  ).getRandomLottoNumberArray();

  outputRandomLottoNumbers(randomLottoArray);

  outputWinningNumberMessage();
  const inputWinningNumber = await inputValue();
  outputBounsNumberMessage();
  const inputBounsNumber = await inputValue();

  const winnginLotto = new WinningLotto(inputWinningNumber, inputBounsNumber);
  const matchObject = winnginLotto.getMatchNumbs(randomLottoArray);
  outputMatchMessage(matchObject);
}
