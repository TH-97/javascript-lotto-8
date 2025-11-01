import { RandomLottoNumberArray } from "../src/entities/randomLottoNumberArray/index.js";

describe("랜덤 로또 번호 모델 테스트", () => {
  test("count만큼 랜덤 로또 배열을 생성하는지 테스트", () => {
    const count = 3;
    const randomLotto = new RandomLottoNumberArray(count);
    const lottoArrays = randomLotto.getRandomLottoNumberArray();

    expect(lottoArrays).toHaveLength(count);

    lottoArrays.forEach((numbers) => {
      expect(numbers).toHaveLength(6);

      const uniqueNumbers = new Set(numbers);
      expect(uniqueNumbers.size).toBe(6);

      numbers.forEach((num) => {
        expect(num).toBeGreaterThanOrEqual(1);
        expect(num).toBeLessThanOrEqual(45);
      });
    });
  });
});
