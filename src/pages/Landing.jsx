import React from "react";

import landingPage from "../json/landingPage.json";

import Header from "../parts/Header";
import Hero from "../parts/Hero";

export default function Landing({ ...props }) {
  return (
    <>
      <Header {...props}></Header>
      <Hero data={landingPage.hero} />
    </>
  );
}
