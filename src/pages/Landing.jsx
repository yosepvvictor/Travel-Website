import React from "react";

import Header from "../parts/Header";

export default function Landing({ ...props }) {
  return (
    <>
      <Header {...props}></Header>
      <p>Hello</p>
    </>
  );
}
