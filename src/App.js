import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Blog from "./components/blog";
import Registration from "./components/registration";
import Faqs from "./components/faqs";
import Albums from "./components/albums";
import Council from "./components/council";
import Record from "./components/record";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/faqs" element={<Faqs />} />
          <Route exact path="/albums" element={<Albums />} />
          <Route exact path="/record" element={<Record />} />
          <Route exact path="/council" element={<Council />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
