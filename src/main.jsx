import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Pagination from './components/Pagination.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
  
    <Pagination/>
  </StrictMode>
);
