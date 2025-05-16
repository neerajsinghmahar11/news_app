import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer';
import Home from './Home/Home';


export default function App() {




    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path='' element={<Home />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    )

}
