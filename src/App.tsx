import './App.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.ts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const App = () => (
    <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
    </QueryClientProvider>
)

export default App
