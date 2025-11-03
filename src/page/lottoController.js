import { Console } from "@woowacourse/mission-utils";
import { PurchaseAmount } from "../entities/purchaseAmount/index.js";
import { RandomLottoNumberArray } from "../entities/randomLottoNumberArray/index.js";
import { WinningLotto } from "../entities/lotto/index.js";
import { calculateProfit } from "../features/calculate/index.js";
import { inputValue } from "../features/input/index.js";
import {
  outputPurchaseAmountMessage,
  outputPurchaseCount,
  outputRandomLottoNumbers,
  outputWinningNumberMessage,
  outputBounsNumberMessage,
  outputMatchMessage,
  outputProfit,
} from "../features/output/index.js";
import { stringSplitter } from "../features/splitter/index.js";
import Lotto from "../entities/lotto/lotto/model/Lotto.js";

export default async function lottoController() {
  try {
    outputPurchaseAmountMessage();

    const inputPurchaseAmount = await inputValue();

    const purchasedLottoCount = new PurchaseAmount(
      inputPurchaseAmount
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

    const lottoArray = stringSplitter(inputWinningNumber);
    const lotto = await new Lotto(lottoArray).getNumbers();

    console.log(lotto);

    const winnginLotto = new WinningLotto(lotto, inputBounsNumber);
    const matchObject = winnginLotto.getMatchNumbs(randomLottoArray);
    outputMatchMessage(matchObject);
    const calculatedProfit = calculateProfit(matchObject, inputPurchaseAmount);
    outputProfit(calculatedProfit);
  } catch (error) {
    Console.print(error.message);
  }
}
