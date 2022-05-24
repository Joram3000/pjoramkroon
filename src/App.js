import React, { useEffect } from "react";
import "./App.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";

import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import Homepage from "./pages/Home/Home";
import ImgCarousel from "./components/ImgCarousel/ImgCarousel";
import TheFirstStatementpage from "./pages/TheFirstStatement/TheFirstStatement";
import PracexGnawa from "./pages/PracexGnawa/PracexGnawa";
import BandcampCarousel from "./components/BandcampCarousel/BandcampCarousel";
import Parallaxtest from "./components/Parallaxtest/parallaxtest";

import CssBlox2 from "./components/csstest/cssblox2";
import CssBlox3 from "./components/csstest/cssblox3";

import Paraslidelight from "./components/csstest/Paraslidelight";

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
          <Route path="/gnawa" element={<PracexGnawa />} />
          <Route path="/parallaxtest" element={<Parallaxtest />} />
          <Route path="/cssblox2" element={<CssBlox2 />} />
          <Route path="/cssblox3" element={<CssBlox3 />} />
          <Route path="para" element={<Paraslidelight />} />
          <Route path="/bc" element={<BandcampCarousel />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ParallaxProvider>
    </div>
  );
}

export default App;
