import { WinningLotto } from "../src/entities/lotto/index.js";

describe("winnginLotto 클래스 테스트", () => {
  test("보너스 넘버와 로또 번호가 중복식 예외 발생", () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6], 1);
    }).toThrow("[ERROR]");
  });
  test("보너스 넘버 잘못된 입력시 예외 발생", () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6], 46);
    }).toThrow("[ERROR]");
  });
  test("보너스 넘버 잘못된 입력시 예외 발생2", () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6], -1);
    }).toThrow("[ERROR]");
  });
  test("3개가 2개 match시", () => {
    const winning = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
    const result = winning.getMatchNumbs([
      [1, 2, 3, 10, 11, 12],
      [1, 2, 7, 10, 11, 12],
    ]);

    expect(result).toEqual({
      matchThree: 2,
      matchFour: 0,
      matchFive: 0,
      matchFourAndBonus: 0,
      matchSix: 0,
    });
  });
  test("4개가 1개 match시", () => {
    const winning = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
    const result = winning.getMatchNumbs([
      [1, 2, 3, 4, 11, 12],
      [1, 2, 4, 7, 11, 12],
    ]);

    expect(result).toEqual({
      matchThree: 0,
      matchFour: 2,
      matchFive: 0,
      matchFourAndBonus: 0,
      matchSix: 0,
    });
  });
  test("4개 + 보너스 1개 match시", () => {
    const winning = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
    const result = winning.getMatchNumbs([[1, 2, 3, 4, 7, 12]]);

    expect(result).toEqual({
      matchThree: 0,
      matchFour: 0,
      matchFive: 0,
      matchFourAndBonus: 1,
      matchSix: 0,
    });
  });
  test("5개 match시", () => {
    const winning = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
    const result = winning.getMatchNumbs([[1, 2, 3, 4, 5, 12]]);

    expect(result).toEqual({
      matchThree: 0,
      matchFour: 0,
      matchFive: 1,
      matchFourAndBonus: 0,
      matchSix: 0,
    });
  });
  test("6개 match시", () => {
    const winning = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
    const result = winning.getMatchNumbs([
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
    ]);

    expect(result).toEqual({
      matchThree: 0,
      matchFour: 0,
      matchFive: 0,
      matchFourAndBonus: 0,
      matchSix: 2,
    });
  });
});
