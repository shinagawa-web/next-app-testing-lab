import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SimpleForm } from './SimpleForm'

describe('SimpleForm', () => {
  it('テスト①: 名前を入力して送信するとメッセージが表示される', async () => {
    render(<SimpleForm />)

    const input = screen.getByLabelText('名前：')
    const button = screen.getByRole('button', { name: '送信' })

    await userEvent.type(input, '太郎')
    await userEvent.click(button)

    expect(screen.getByText('こんにちは、太郎さん！')).toBeInTheDocument()
  })

  it('テスト②: 空欄で送信してもメッセージは表示されない', async () => {
    render(<SimpleForm />)

    const button = screen.getByRole('button', { name: '送信' })
    await userEvent.click(button)

    expect(screen.queryByText(/こんにちは、/)).not.toBeInTheDocument()
  })
})