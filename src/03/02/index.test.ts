import { add, sub } from '.'

describe('四則演算', () => {
  describe('add', () => {
    test('返り値は、第一引数と代二引数の「和」である', () =>
      expect(add(50, 50)).toBe(100))

    test("合計の上限は、'100'である", () => expect(add(70, 80)).toBe(100))
  })

  describe('sub', () => {
    test('1 - 1 は 0', () => expect(sub(1, 1)).toBe(0))

    test('2 - 1 は 1', () => expect(sub(2, 1)).toBe(1))
  })
})
