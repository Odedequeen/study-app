import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './Theme/Variable.css'
import './Theme/Globla.css'
import App from './App.jsx'

console.log('Starting app — attempting to mount React')
const rootEl = document.getElementById('root')
if (!rootEl) {
  // Provide a visible fallback so it's obvious in the browser
  document.body.innerHTML = '<div style="padding:24px;font-family:Arial;">Error: <strong>#root</strong> element not found. Check <code>index.html</code>.</div>'
  console.error('React mount failed: #root element not found')
} else {
  const root = createRoot(rootEl)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
  console.log('React mounted successfully')
}
