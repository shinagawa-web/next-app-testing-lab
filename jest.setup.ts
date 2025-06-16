import '@testing-library/jest-dom'
// setupTests.ts or jest.setup.ts に追加
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserver
