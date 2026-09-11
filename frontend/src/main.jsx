import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

// "npm run build:admin" builds the admin site, "npm run build:public" builds the public site.
// Vite drops the unused branch, so admin code never ships in the public bundle.
const loadApp = import.meta.env.MODE === 'admin'
  ? () => import('./AdminApp.jsx')
  : () => import('./PublicApp.jsx')

loadApp().then(({ default: App }) => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  )
})
