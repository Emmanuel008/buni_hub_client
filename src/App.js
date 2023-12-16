import React from "react";
import HomePage from "./components/homePage";
import VisitorRegistrationFrom from "./components/visitorRegistrationFrom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import ThanksPage from "./components/thanksPage";
import VerifyDetails from "./components/verifyDetails";
import ThanksVerify from "./components/thanksVerify";
function App() {
  return (
    <div className="flex flex-col items-center h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/visitor" element={<VisitorRegistrationFrom />} />
          <Route path="/member" element={<VerifyDetails />} />
          <Route path="/thanks" element={<ThanksPage/>}/>
          <Route path="/verify" element={<ThanksVerify/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
