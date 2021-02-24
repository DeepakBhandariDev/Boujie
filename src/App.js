import React from 'react';
import Header from './components/Header';
import Products from './components/Products';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//import { DataProvider } from './components/DataProvider';
import Details from './components/Details';
import Cart from './components/Cart';
import { DataProvider } from './components/DataProvider';
import Login from './components/Login';
//import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import Profile from './components/Profile';
//import { Auth0Provider } from "@auth0/auth0-react";
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';


function App() {
  

  return (
    
<DataProvider>
      <div className="App">
        <Router>
          <Auth0ProviderWithHistory>
          <Header />
          

          <section>
            <Routes>
              <Route path="products" element={ <Products /> } />
              <Route path="products/:id" element={ <Details /> } />
              <Route path="cart" element={ <Cart /> } />
              <Route path="profile" element={ <Profile /> } />
              <Route path="login" element={ <Login /> } />
            </Routes>
          </section>
          </Auth0ProviderWithHistory>
        </Router>
      </div>
    </DataProvider>
     
  );
}

export default App;
