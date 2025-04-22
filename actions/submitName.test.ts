/**
 * @jest-environment node
 */
import { submitName } from './submitName'

describe('submitName (Server Action)', () => {
  it('正しい名前を送信したとき、メッセージが返る', async () => {
    const result = await submitName('太郎')
    expect(result).toBe('こんにちは、太郎さん！')
  })

  it('空欄を送信したとき、エラーが投げられる', async () => {
    await expect(submitName('')).rejects.toThrow('名前が空です')
  })
})
