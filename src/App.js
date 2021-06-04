import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Products from 'components/Products';
import CheckoutPage from 'components/CheckoutPage';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from 'components/Signin';
import SignUp from 'components/Signup';

function App() {

  // useEffect(() => {
  //   auth.onAuthStateChanged((authuser) => {
  //     console.log(authuser);
  //     if (authuser) {
  //       dispatch({

  //       })
  //     }
  //   })
  // }, [])

  return (
    <Router>
      <div>
        <Navbar/>
        < Switch>
          <Route path="/signin">
            <SignIn/>
          </Route>
          <Route path="/signup">
            <SignUp/>
          </Route>
          <Route path="/checkout-page">
            <CheckoutPage/>
          </Route>
          <Route path="/">
            <Products/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

