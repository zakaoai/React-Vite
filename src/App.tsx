import { ColorModeProvider } from "@/context/ColorModeProvider"
import { SnackbarProvider } from "notistack"
import { RouterProvider } from "react-router"
import router from "./routes"

const App = () => (
  <SnackbarProvider>
    <ColorModeProvider>
      <RouterProvider router={router} />
    </ColorModeProvider>
  </SnackbarProvider>
)

export default App
