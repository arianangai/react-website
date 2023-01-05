import React from 'react';
import './App.css';
//import {HashRouter, Route} from 'react-router-dom';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>          
      <Navbar />
      <Home />
      <Footer />  
    </Router>


    /*<HashRouter>         uses HashRouter
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/services' component={Services} />
      <Route exact path='/products' component={Products} />
      <Route exact path='/signup' component={SignUp} />
      <Footer />
    </HashRouter>*/
  
    
    /*<Router>            uses BrowserRouter
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
      </Routes>
      <Footer />
  </Router>*/
  );
}

export default App;
