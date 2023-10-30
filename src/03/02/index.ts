export function add(a: number, b: number) {
  const sum = a + b

  if (sum > 100) return 100

  return sum
}

export function sub(a: number, b: number) {
  return a - b
}
