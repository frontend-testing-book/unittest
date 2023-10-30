const checkRange = (value: number) => {
  if (value < 0 || value > 100)
    throw new RangeError('入力値は0〜100の間で入力してください')
}

export const add = (a: number, b: number) => {
  checkRange(a)
  checkRange(b)

  const sum = a + b

  if (sum > 100) return 100

  return sum
}

export const sub = (a: number, b: number) => {
  const sum = a - b

  if (sum < 0) return 0

  return sum
}
