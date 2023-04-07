import React from "react";
import { render } from "@testing-library/react"; 
import { expect } from "vitest";

import Button from "./Button.jsx";

test("Should not allowed to click button if isDisabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector('span.disabled')).toBeInTheDocument();
})