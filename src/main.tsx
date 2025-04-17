import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"

// Why Did You Render Helper
// import "./wdyr"

const prepare = async (): Promise<void> => {
  // if (import.meta.env.DEV) {
  //   const { worker } = await import("./mocks/browser")
  //   void worker.start()
  // }
}

const rootDom = document.getElementById("root")
if (rootDom !== null) {
  await prepare().finally(() => {
    createRoot(rootDom).render(
      <StrictMode>
        <App />
      </StrictMode>
    )
  })
}
