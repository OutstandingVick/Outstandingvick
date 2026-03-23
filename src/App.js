import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import './App.css';
import Home from './Home';
import Works from './Works';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <div className='min-h-screen dark:bg-dain bg-main bg-center px-5 md:px-20'>
        <ScrollToTop />
        <Navbar />
        <div className='p-0'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Works' element={<Works />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
