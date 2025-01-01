import { createRoot } from 'react-dom/client';
import Page1 from './page1.jsx';
import Page2 from './page2.jsx';
import Page3 from './page3.jsx';
import { StrictMode } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Page1/>}/>
          <Route path="/page2" element={<Page2 />}/>
          <Route path="/page3" element={<Page3 />}/>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
