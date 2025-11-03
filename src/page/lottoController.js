import { Console } from "@woowacourse/mission-utils";
import { PurchaseAmount } from "../entities/purchaseAmount/index.js";
import { RandomLottoNumberArray } from "../entities/randomLottoNumberArray/index.js";
import { WinningLotto, Lotto } from "../entities/lotto/index.js";
import { calculateProfit } from "../features/calculate/index.js";
import { inputValue } from "../features/input/index.js";
import {
  outputPurchaseAmountMessage,
  outputPurchaseCount,
  outputRandomLottoNumbers,
  outputWinningNumberMessage,
  outputBonusNumberMessage,
  outputMatchMessage,
  outputProfit,
} from "../features/output/index.js";
import { stringSplitter } from "../features/splitter/index.js";

export default async function lottoController() {
  try {
    const { lottoCount, purchaseAmount } = await getPurchaseAmount();

    outputPurchaseCount(lottoCount);

    const randomLottoArray = generateRandomLottos(lottoCount);

    outputRandomLottoNumbers(randomLottoArray);

    const { numbers, bonus } = await getWinningNumbers();

    checkWinning(randomLottoArray, numbers, bonus, purchaseAmount);
  } catch (error) {
    Console.print(error.message);
  }
  async function getPurchaseAmount() {
    outputPurchaseAmountMessage();
    const input = await inputValue();
    const lottoCount = new PurchaseAmount(input).getPurchasedLottoCount();
    return {
      lottoCount: lottoCount,
      purchaseAmount: Number(input),
    };
  }

  function generateRandomLottos(lottoCount) {
    const randomLottos = new RandomLottoNumberArray(
      lottoCount
    ).getRandomLottoNumberArray();
    return randomLottos;
  }

  async function getWinningNumbers() {
    outputWinningNumberMessage();
    const input = await inputValue();
    outputBonusNumberMessage();
    const bonusInput = await inputValue();
    const numbers = stringSplitter(input);
    return { numbers: new Lotto(numbers).getNumbers(), bonus: bonusInput };
  }

  function checkWinning(randomLottos, numbers, bonus, purchaseAmount) {
    const matchObject = new WinningLotto(numbers, bonus).getMatchNumbs(
      randomLottos
    );

    outputMatchMessage(matchObject);
    const profit = calculateProfit(matchObject, purchaseAmount);
    outputProfit(profit);
  }
}
