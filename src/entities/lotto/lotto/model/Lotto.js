import { ERROR_MESSAGE } from "../../../../shard/index.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const setWinningNumber = new Set(numbers);
    if (numbers.length === 0) throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
    if (numbers.length !== 6) throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_COUNT);
    numbers.forEach((number) => {
      if (isNaN(number)) throw new Error(ERROR_MESSAGE.NUMBER_NOT_NUMBER);
      if (Number(number) < 1 || Number(number) > 45)
        throw new Error(ERROR_MESSAGE.NUMBER_OUT_OF_RANGE);
    });
    if (numbers.length !== setWinningNumber.size)
      throw new Error(ERROR_MESSAGE.DUPLICATE_LOTTO_NUMBER);
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
