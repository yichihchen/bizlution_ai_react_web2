import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import "./assets/css/tailwind.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter basename="/bizlution_ai_react_web2/"> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
