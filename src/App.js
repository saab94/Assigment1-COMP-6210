import React from 'react';
import Navbar from './component/Navbar';
import Banner from './component/Banner';
import SCPdetail from './component/SCPdetails';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <SCPdetail />
      <Footer />
    </div>
  );
}

export default App;
