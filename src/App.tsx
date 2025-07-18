import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.scss'
import { AuthProvider } from './features/auth/context/AuthProvider'
import { AppRouter } from './Router/AppRouter'

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
