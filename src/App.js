import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Navbar1 from "./Navbar1";
import Checkout from "./Checkout";
import Paymentpage from "./Paymentpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loginpage from "./Loginpage";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51LqB1XSARhAM609t7mcvqRiT32jFKFn5kd4wOuIfLjf71FBxxmZexMVXpWn78aOyve4Vohmb5aoRSTZPbqjDie59001l7Oq99v"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //its like if statement in react
    // will only run once when the app component Loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Loginpage" element={<Loginpage />} />
          <Route
            path="/Checkout"
            element={
              <>
                <Header />
                <Navbar1 />
                <Checkout />
              </>
            }
          />
          <Route
            path="/Paymentpage"
            element={
              <>
                <Header />
                <Navbar1 />
                <Elements stripe={promise}>
                <Paymentpage />
                </Elements>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Navbar1 />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
