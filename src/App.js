import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Products from 'components/Products';
import CheckoutPage from 'components/CheckoutPage';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from 'components/Signin';
import SignUp from 'components/Signup';
import { auth } from './firebase'
import { actionTypes } from 'reducer';
import { useStateValule } from "./StateProvider";
import Checkout from 'components/CheckoutForm/Checkout';

function App() {
  const [{ user }, dispatch] = useStateValule();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log(authUser);
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        })
      };
    })
  }, [])

  return (
    <Router>
      <div>
        <Navbar/>
        < Switch>
          <Route path="/checkout">
            <Checkout/>
          </Route>
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

