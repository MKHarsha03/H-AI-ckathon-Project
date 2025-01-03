import { createRoot } from 'react-dom/client';
import Home from './home.jsx';
import { StrictMode } from 'react';

export default function App(){
  return (
    <Home />
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
