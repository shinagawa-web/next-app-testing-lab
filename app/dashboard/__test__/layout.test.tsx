import { render, screen } from '@testing-library/react'
import RootLayout from '../layout'

describe('RootLayout', () => {
  it('ヘッダーと children を表示する', () => {
    render(
      <RootLayout>
        <p>これはテスト用の中身です</p>
      </RootLayout>
    )

    // ヘッダーが表示されているか
    expect(screen.getByRole('banner')).toBeInTheDocument()

    // childrenが描画されているか
    expect(screen.getByText('これはテスト用の中身です')).toBeInTheDocument()
  })
})
