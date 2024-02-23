// @ts-nocheck
import './App.css';
import Navbar from './components/header/Navbar.js';
import Newnav from './components/header/newnavbar/Newnav.js';
import Maincomp from './components/home/Maincomp.js';

function App() {
  return (
    <>
      <Navbar />
      <Newnav />
      <Maincomp />
    </>
  );
}

export default App;
