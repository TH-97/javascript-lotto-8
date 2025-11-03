export class WinningLotto {
  #winningNumber;
  #bonusNumber;
  #match = {
    matchThree: 0,
    matchFour: 0,
    matchFive: 0,
    matchFourAndBonus: 0,
    matchSix: 0,
  };

  constructor(lotto, bonusNumber) {
    this.#validateBonusNumber(bonusNumber);
    this.#validateWinningNumberMatchBounsNumber(lotto, bonusNumber);
    this.#winningNumber = lotto;
    this.#bonusNumber = bonusNumber;
  }

  #validateWinningNumberMatchBounsNumber(lotto, bonusNumber) {
    if (lotto.some((number) => Number(number) === Number(bonusNumber)))
      throw new Error(
        "[ERROR] 보너스 넘버는 당첨 번호와 같은 숫자를 가질 수 없습니다"
      );
  }
  #validateBonusNumber(bonusNumber) {
    if (isNaN(bonusNumber)) throw new Error("[ERROR] 숫자만 입력 가능합니다");
    if (Number(bonusNumber) < 1 || Number(bonusNumber) > 45)
      throw new Error("[ERROR] 1 ~ 45 숫자만 입력 가능합니다");
  }

  #howManyMatches(lottoNumber) {
    const matchCount = this.#winningNumber.filter((value) =>
      lottoNumber.includes(Number(value))
    ).length;
    if (lottoNumber.includes(Number(this.#bonusNumber))) {
      return { matchCount: matchCount, matchBonus: 1 };
    }
    return { matchCount: matchCount, matchBonus: 0 };
  }
  getMatchNumbs(array) {
    array.forEach((array) => {
      const matchInfo = this.#howManyMatches(array);
      this.#upCount(matchInfo);
    });
    return this.#match;
  }
  #upCount(matchInfo) {
    if (matchInfo.matchCount + matchInfo.matchBonus === 3)
      this.#match.matchThree += 1;
    if (matchInfo.matchCount + matchInfo.matchBonus === 4) {
      this.#match.matchFour += 1;
    }
    if (matchInfo.matchCount === 4 && matchInfo.matchBonus === 1) {
      this.#match.matchFourAndBonus += 1;
    }
    if (matchInfo.matchCount === 5 && matchInfo.matchBonus === 0)
      this.#match.matchFive += 1;
    if (matchInfo.matchCount + matchInfo.matchBonus === 6)
      this.#match.matchSix += 1;
  }
}
