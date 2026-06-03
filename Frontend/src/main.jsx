import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './Context/AuthContext' // AuthContext import kiya

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Poori app ko AuthProvider se wrap kiya taaki tokens har jagah mil sakein */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)