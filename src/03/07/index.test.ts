import { timeout, wait } from '.'

test('指定時間待つと、経過時間をもってresolvesされる', async () =>
  expect(await wait(50)).toBe(50))

test('指定時間待つと、経過時間をもってrejectされる', () => {
  return timeout(50).catch((duration) => expect(duration).toBe(50))
})
