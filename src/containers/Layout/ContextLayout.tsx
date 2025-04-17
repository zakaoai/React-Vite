import QueryClientProvider from "@/context/QueryClientProvider"
import { Outlet } from "react-router"

const ContextLayout = () => (
  <QueryClientProvider>
    <Outlet />
  </QueryClientProvider>
)

export default ContextLayout
