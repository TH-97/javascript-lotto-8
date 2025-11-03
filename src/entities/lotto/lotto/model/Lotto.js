class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const setWinningNumber = new Set(numbers);

    if (numbers.length !== 6)
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    numbers.forEach((number) => {
      if (isNaN(number)) throw new Error("[ERROR] 숫자만 입력 가능합니다");
      if (Number(number) < 1 || Number(number) > 45)
        throw new Error("[ERROR] 1 ~ 45 숫자만 입력 가능합니다");
    });
    if (numbers.length !== setWinningNumber.size)
      throw new Error("[ERROR] 중복된 숫자는 당첨번호가 될 수 없습니다");
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
