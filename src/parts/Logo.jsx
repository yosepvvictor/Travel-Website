import React from "react";

import Button from "../components/Button/Button";

export default function Logo() {
  return (
    <Button
      className="text-3xl font-semibold text-primary"
      type="link"
      href="/"
    >
      Stay<span className="text-grayish">cation.</span>
    </Button>
  );
}
