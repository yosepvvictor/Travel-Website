import React from "react";

import landingPage from "../json/landingPage.json";

import Header from "../parts/Header";
import Hero from "../parts/Hero";
import MostPicked from "../parts/MostPicked";
import Categories from "../parts/Categories";

export default function Landing({ ...props }) {
  return (
    <>
      <Header {...props}></Header>
      <Hero data={landingPage.hero} />
      <MostPicked data={landingPage.mostPicked} />
      <Categories data={landingPage.categories} />
    </>
  );
}
