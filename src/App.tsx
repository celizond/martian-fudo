import './App.scss'
import { AuthProvider } from './features/auth/context/AuthProvider'
import { AppRouter } from './Router/AppRouter'

function App() {

  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default App
