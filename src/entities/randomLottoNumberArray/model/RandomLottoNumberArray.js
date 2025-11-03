import { Random } from "@woowacourse/mission-utils";
export class RandomLottoNumberArray {
  #randomLottoNumberArray = [];

  constructor(count) {
    this.#createRandomLottoNumbers(count);
  }

  #createRandomLottoNumbers(count) {
    for (let i = 0; i < count; i++) {
      this.#randomLottoNumberArray.push(
        Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b)
      );
    }
  }
  getRandomLottoNumberArray() {
    return this.#randomLottoNumberArray;
  }
}
