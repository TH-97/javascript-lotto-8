// constants.js
export const MESSAGE = {
  PURCHASE: {
    AMOUNT: "구입금액을 입력해 주세요.",
    COUNT: (count) => `${count}개를 구매했습니다.`,
  },
  LOTTO: {
    WINNING_NUMBER: "당첨 번호를 입력해 주세요.",
    BONUS_NUMBER: "보너스 번호를 입력해 주세요.",
    MATCH: {
      MATCH_THREE: "3개 일치 (5,000원)",
      MATCH_FOUR: "4개 일치 (50,000원)",
      MATCH_FIVE: "5개 일치 (1,500,000원)",
      MATCH_FIVE_BONUS: "5개 일치, 보너스 볼 일치 (30,000,000원)",
      MATCH_SIX: "6개 일치 (2,000,000,000원)",
    },
  },
  PROFIT: {
    TOTAL: (profit) => `총 수익률은 ${profit}입니다.`,
  },
};

export const ERROR_MESSAGE = {
  EMPTY_INPUT: "[ERROR] 입력값이 공백입니다",
  NUMBER_DUPLICATE:
    "[ERROR] 보너스 넘버는 당첨 번호와 같은 숫자를 가질 수 없습니다",
  NUMBER_NOT_NUMBER: "[ERROR] 숫자만 입력 가능합니다",
  NUMBER_OUT_OF_RANGE: "[ERROR] 1 ~ 45 숫자만 입력 가능합니다",
  THOUSAND_UNIT_ONLY: "[ERROR] 1000 단위 여야 합니다",
  LOTTO_NUMBER_COUNT: "[ERROR] 로또 번호는 6개여야 합니다",
  DUPLICATE_LOTTO_NUMBER: "[ERROR] 중복된 숫자는 당첨번호가 될 수 없습니다",
};
