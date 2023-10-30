import { timeout, wait } from '.'

test('指定時間待つと、経過時間をもってresolvesされる', async () =>
  expect(await wait(50)).toBe(50))

test('指定時間待つと、経過時間をもってrejectされる', async () => {
  await expect(timeout(50)).rejects.toBe(50)
})
