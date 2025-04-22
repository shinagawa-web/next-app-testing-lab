/**
 * @jest-environment node
 */
import { fetchPost } from './fetchPost'

// fetch をモックする
global.fetch = jest.fn()

describe('fetchPost (Server Action with external API)', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('投稿IDを指定するとタイトルが返る', async () => {
    const mockJson = jest.fn().mockResolvedValue({ id: 1, title: 'mock title' })
    ;(fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: mockJson,
    })

    const result = await fetchPost(1)
    expect(result).toBe('mock title')
    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts/1')
  })

  it('APIのレスポンスがエラーだった場合、例外を投げる', async () => {
    ;(fetch as jest.Mock).mockResolvedValue({ ok: false })

    await expect(fetchPost(99)).rejects.toThrow('投稿の取得に失敗しました')
  })
})
