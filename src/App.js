import React, { useEffect } from "react";
import "./App.css";
import { ParallaxProvider } from "react-scroll-parallax";

import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import Homepage from "./pages/Home/Home";
import PracexGnawa2 from "./pages/PracexGnawa/PracexGnawa2";
import TheFirstStatementpage from "./pages/TheFirstStatement/TheFirstStatement";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />

      <MessageBox />
      {isLoading ? <Loading /> : null}

      <ParallaxProvider>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/tfs" element={<TheFirstStatementpage />} />
          <Route path="/gnawa" element={<PracexGnawa2 />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ParallaxProvider>
    </div>
  );
}

export default App;
