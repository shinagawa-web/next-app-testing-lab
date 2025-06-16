import { render, screen } from '@testing-library/react'
import SalesChart from './ReCharts'
import '@testing-library/jest-dom'

jest.mock('recharts', () => {
  const OriginalModule = jest.requireActual('recharts')
  return {
      ...OriginalModule,
      ResponsiveContainer: ({ children }: { children: React.ReactNode } ) => (
          <OriginalModule.ResponsiveContainer width={800} height={800}>
              {children}
          </OriginalModule.ResponsiveContainer>
      ),
  }
})

describe('SalesChart', () => {
  it('初期描画でラベルと凡例が表示されていること', async () => {
    render(<SalesChart />)

    // X軸ラベルの一部
    const dateElements = screen.getAllByText(/2025-05-/)
    expect(dateElements.length).toBeGreaterThan(0)

    // Y軸ラベル
    expect(screen.getByText('(千円)')).toBeInTheDocument()

    // 凡例（ネックレス・ピアス）
    expect(screen.getByText('ネックレス')).toBeInTheDocument()
    expect(screen.getByText('ピアス')).toBeInTheDocument()
  })

  it('ツールチップコンポーネントが定義されていること', () => {
    // ツールチップ自体はホバーしないと表示されないので
    // ここではレンダー時にクラッシュしないことを確認する意味で描画のみ
    expect(() => render(<SalesChart />)).not.toThrow()
  })
})
