import React from "react";

import landingPage from "../json/landingPage.json";

import Header from "../parts/Header";
import Hero from "../parts/Hero";
import MostPicked from "../parts/MostPicked";

export default function Landing({ ...props }) {
  return (
    <>
      <Header {...props}></Header>
      <Hero data={landingPage.hero} />
      <MostPicked data={landingPage.mostPicked} />
    </>
  );
}
