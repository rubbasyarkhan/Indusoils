import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Components/Layout';
import  Home from './Pages/Home'; // Import icon for use if needed
import About from './Pages/About';
import Product from './Pages/Product';
import Contact from './Pages/Contact'; // Assuming you have this component

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <Layout>
              {/* Home Page Content */}
              <Home />
            </Layout>
          } 
        />
        <Route 
          path="/about" 
          element={
            <Layout>
              <About /> {/* About Page Content */}
            </Layout>
          } 
        />
        <Route 
          path="/product" 
          element={
            <Layout>
              <Product /> {/* Product Page Content */}
            </Layout>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <Layout>
              <Contact /> {/* Assuming you have a Contact component */}
            </Layout>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
