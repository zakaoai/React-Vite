import { ThemeProvider, createTheme } from "@mui/material/styles"

import useMediaQuery from "@mui/material/useMediaQuery"
import { useMemo, useState, type PropsWithChildren } from "react"
import ColorModeContext from "./ColorModeContext"

export const ColorModeProvider = ({ children }: PropsWithChildren) => {
  const prefersLightMode = useMediaQuery("(prefers-color-scheme: light)")

  const defaultColorMode = useMemo<"light" | "dark">(() => (prefersLightMode ? "light" : "dark"), [prefersLightMode])

  const [colorMode, setColorMode] = useState(defaultColorMode)

  const toggleColorMode = () => {
    setColorMode(colorMode === "light" ? "dark" : "light")
  }

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: colorMode
        }
      }),
    [colorMode]
  )

  return (
    <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}
