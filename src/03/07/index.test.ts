import { timeout, wait } from '.'

test('指定時間待つと、経過時間をもってresolvesされる', async () =>
  expect(await wait(50)).toBe(50))

test('指定時間待つと、経過時間をもってrejectされる', async () => {
  await expect(timeout(50)).rejects.toBe(50)
})

test('指定時間待つと、経過時間をもってrejectされる', async () => {
  expect.assertions(1)
  try {
    await timeout(50)
  } catch (err) {
    expect(err).toBe(50)
  }
})
