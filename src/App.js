import React from 'react';
//import form spree


// import routes and route
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Explore from './pages/Explore';
import Contact from './pages/Contact';
import Error from './pages/Error'
//import pages
import Home from './pages/Home';
import ItemsDetails from './pages/itemsDetails';
import Privacy from './pages/Privacy';
import Support from './pages/Support';
import Advertise from './pages/Advertise';
//import Partnership from './pages/Partnership';
import About from './pages/about';
import Terms from './pages/Terms';
import WebdesignPage from './pages/WebdesignPage';
import CssPage from './pages/CssPage';
import ReactlibPage from './pages/ReaclibPage';
import JavascriptPage from './pages/JavascriptPage';
import ArduinoPage from './pages/ArduinosPage';


const App = () => {
  return( 
    
  <div className='bg-slate-100'>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/explore' element={<Explore />} />
      <Route path='/explore/:id' element={<ItemsDetails />} />

      
      <Route path='/explore/webdesign' element={<WebdesignPage />} />
      <Route path='/explore/css' element={<CssPage />} />
      <Route path='/explore/reactlib' element={<ReactlibPage />} />
      <Route path='/explore/javascript' element={<JavascriptPage />} />
      <Route path='/explore/arduinos' element={<ArduinoPage />} />


      <Route path='/privacy' element={<Privacy />} />
      <Route path='/terms-conditions' element={<Terms />} />
      <Route path='/support' element={<Support />} />
      <Route path='/advertise' element={<Advertise />} />
      {/* <Route path='/partnership' element={<Partnership />} /> */}
      <Route path='/about' element={<About />} />
      <Route path='*' element={<Error />} />
    </Routes>
    <Footer />
  </div>
  
  );
};

export default App;
