/* eslint-disable no-unused-vars */
import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components"; //eslint-disable-line
import TwoColumnWithVideo from "components/hero/TwoColumnWithVideo";
import Footer from "components/footers/FiveColumnDark"
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Member from 'components/forms/Member'
import Visistor from "components/forms/Visistor";
import HomePage from "pages/HomePage";
import ThanksPage from "pages/ThanksPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <AnimationRevealPage>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/member"  element={<Member/>}/>
            <Route path= '/visitor' element={<Visistor/>}/>
            <Route  path="/thanks" element={<ThanksPage/>}/>
          </Routes>
          <Footer />
        </Router>
      </AnimationRevealPage>
    </>
  );
}

export default App;
