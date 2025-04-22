const pushMock = jest.fn()
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: pushMock,
  }),
  useSearchParams: () => new URLSearchParams('tab=home'),
}))

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DashboardPage from '../page'

describe('DashboardPage', () => {
  it('初期表示でホームタブが選択されていること', () => {
    render(<DashboardPage />)

    expect(screen.getByRole('heading', { name: 'ダッシュボード' })).toBeInTheDocument()
    expect(screen.getByText('ホームタブの内容')).toBeInTheDocument()
  })

  it('「設定タブへ」ボタンをクリックすると router.push が呼ばれる', async () => {
    render(<DashboardPage />)

    const button = screen.getByRole('button', { name: '設定タブへ' })
    await userEvent.click(button)

    expect(pushMock).toHaveBeenCalledWith('/dashboard?tab=settings')
    expect(pushMock).toHaveBeenCalledTimes(1)
  })
})
