import { createRoot } from 'react-dom/client';
import Home from './home.jsx';
import Page1 from './page1.jsx';
import Page2 from './page2.jsx';
import Page3 from './page3.jsx';
import { StrictMode } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

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
