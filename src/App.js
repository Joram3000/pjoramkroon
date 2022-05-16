import React, { useEffect } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import Homepage from "./pages/Home/Home";
import ImgCarousel from "./components/ImgCarousel/ImgCarousel";
import TheFirstStatementpage from "./pages/The First Statement/TheFirstStatement";
import BandcampCarousel from "./components/BandcampCarousel/BandcampCarousel";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";

import HeroBanner from "./components/HeroBanner";

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

      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/other" element={<TheFirstStatementpage />} />
        <Route path="/bc" element={<BandcampCarousel />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;