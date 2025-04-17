import { createContext } from "react"

const defaultColorModeContext = {
  colorMode: "light",
  toggleColorMode: () => {
    /* default */
  }
}
const ColorModeContext = createContext(defaultColorModeContext)

export default ColorModeContext
