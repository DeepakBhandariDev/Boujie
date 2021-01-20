import React from 'react';
import Header from './components/Header';
import Products from './components/Products';
import { Routes, Route} from 'react-router-dom';
import { DataProvider } from './components/DataProvider';
import Details from './components/Details';
import Cart from './components/Cart';
//import Login from './components/Login';
//import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import Profile from './components/Profile';
import { useAuth0 } from "@auth0/auth0-react";


function App() {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  
  }

  return (
    <div className="App">
      <DataProvider>
     
          <Header />
          
          <section>
            <Routes>
              <Route path="products" element={<Products />} />
              <Route path="products/:id" element={<Details />} />
              <Route path="cart" element={<Cart/>} />
              <Route path="profile" element={<Profile/>} />
              
            </Routes>
          </section>
      
        </DataProvider>
     
      </div>
  );
}

export default App;
