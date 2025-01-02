import './index.css';
import Page1 from './page1.jsx';
import Page2 from './page2.jsx';
import Page3 from './page3.jsx';
import {BrowserRouter,Routes,Route,NavLink} from 'react-router-dom';
export default function Home(){
    return(
        <BrowserRouter>
                <nav>
                    <NavLink to="/page1">Link 1</NavLink>
                    <NavLink to="/page2">Link 2</NavLink>
                    <NavLink to="/page3">Link 3</NavLink>
                </nav>
                <Routes>
                    <Route path="/page1" element={<Page1 />}/>
                    <Route path="/page2" element={<Page2 />}/>
                    <Route path="/page3" element={<Page3 />}/>
                </Routes>
        </BrowserRouter>
    );
}