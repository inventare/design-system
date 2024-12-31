import '@testing-library/jest-dom/vitest'

beforeAll(() => {
  Element.prototype.scrollTo = () => {}
  Element.prototype.scrollIntoView = () => {}
})
