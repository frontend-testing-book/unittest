import { add, sub } from '.'

describe('四則演算', () => {
  describe('add', () => {
    test('返り値は、第一引数と代二引数の「和」である', () =>
      expect(add(50, 50)).toBe(100))

    test("合計の上限は、'100'である", () => expect(add(70, 80)).toBe(100))

    test('スローされる例外がRangeErrorである', () =>
      expect(() => add(-1, 0)).toThrow(RangeError))

    test('第一引数の入力値は0〜100の範囲である', () => {
      expect(() => add(-1, 0)).toThrow('入力値は0〜100の間で入力してください')
      expect(() => add(101, 0)).toThrow('入力値は0〜100の間で入力してください')
    })

    test('第二引数の入力値は0〜100の範囲である', () => {
      expect(() => add(0, -1)).toThrow('入力値は0〜100の間で入力してください')
      expect(() => add(0, 101)).toThrow('入力値は0〜100の間で入力してください')
    })
  })

  describe('sub', () => {
    test('返り値の合計は第一引数と代二引数の「差」である', () =>
      expect(sub(51, 50)).toBe(1))

    test("返り値の合計は、下限が'0'である", () => expect(sub(70, 80)).toBe(0))
  })
})
