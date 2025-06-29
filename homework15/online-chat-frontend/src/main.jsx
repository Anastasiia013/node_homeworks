import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './shared/modules/App'
import "./shared/styles/reset.css"
import "./shared/styles/common.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
