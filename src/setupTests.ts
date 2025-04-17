import "@testing-library/jest-dom/vitest"
import { afterAll, afterEach, beforeAll, beforeEach, vi } from "vitest"
import "whatwg-fetch"
import { API_BASE_URL } from "./constants/config"
import { server } from "./mocks/server"
import {
  mockWindowHistory,
  mockWindowLocation,
  restoreWindowHistory,
  restoreWindowLocation
} from "./utils/mockWindowLocation"

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  }))
})

// eslint-disable-next-line @typescript-eslint/unbound-method -- fix
const { getComputedStyle } = window
window.getComputedStyle = elt => getComputedStyle(elt)

beforeEach(() => {
  mockWindowLocation(API_BASE_URL)
  mockWindowHistory()
})

afterEach(() => {
  restoreWindowLocation()
  restoreWindowHistory()
})

beforeAll(() => {
  // Establish requests interception layer before all tests.
  server.listen()
})

afterAll(() => {
  // Clean up after all tests are done, preventing this

  // interception layer from affecting irrelevant tests.

  server.close()
})
