import { wait } from '.'

test('指定時間待つと、経過時間をもってresolvesされる', async () =>
  expect(await wait(50)).toBe(50))
