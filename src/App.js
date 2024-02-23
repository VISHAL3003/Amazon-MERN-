// @ts-nocheck
import './App.css';
import Navbar from './components/header/Navbar.js';
import Newnav from './components/header/newnavbar/Newnav.js';
import Maincomp from './components/home/Maincomp.js';
import Footer from './components/footer/Footer.js';

function App() {
  return (
    <>
      <Navbar />
      <Newnav />
      <Maincomp />
      <Footer />
    </>
  );
}

export default App;
