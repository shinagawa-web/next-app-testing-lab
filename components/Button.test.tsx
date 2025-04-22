import { render, screen } from '@testing-library/react'
import { Button } from './Button'

test('テスト①: 正しくラベルが表示されるか', () => {
  render(<Button label="Click me" onClick={() => {}} />)
  expect(screen.getByText('Click me')).toBeInTheDocument()
})

test('テスト②: クリックされたときにハンドラが呼ばれるか', () => {
  const handleClick = jest.fn()
  render(<Button label="Click me" onClick={handleClick} />)

  screen.getByRole('button').click()
  expect(handleClick).toHaveBeenCalledTimes(1)
})