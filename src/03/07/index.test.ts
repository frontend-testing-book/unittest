import { wait } from '.'

test('指定時間待つと、経過時間をもってresolvesされる', async () =>
  await expect(wait(50)).resolves.toBe(50))
