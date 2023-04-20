import React from "react";

import Logo from "./Logo";
import Button from "../components/Button/Button";

function Footer() {
  return (
    <footer className="flex flex-col justify-center border-t-2 px-16 pb-8 pt-8 font-poppins">
      <div className="flex flex-row text-sm font-light text-gray-400">
        <div className="w-2/5">
          <Logo />
          <p className="mt-2 text-base">
            We kaboom your beautiful holiday instantly and memorable
          </p>
        </div>
        <div className="flex w-1/5 flex-col gap-y-4 p-2 pt-0">
          <h5 className="font-semibold text-black">For Beginners</h5>
          <Button type="link" href={"/register"}>
            New Account
          </Button>
          <Button type="link" href={"/properties"}>
            Start Booking Room
          </Button>
          <Button type="link" href={"/use-payment"}>
            Use Payments
          </Button>
        </div>
        <div className="flex w-1/5 flex-col gap-y-4 p-2 pt-0">
          <h5 className="font-semibold text-black">Explore Us</h5>
          <Button type="link" href={"/careers"}>
            Our Careers
          </Button>
          <Button type="link" href={"/privacy"}>
            Privacy
          </Button>
          <Button type="link" href={"/terms"}>
            Terms & Conditions
          </Button>
        </div>
        <div className="flex w-1/5 flex-col gap-y-4 p-2 pt-0">
          <h5 className="font-semibold text-black">Connect Us</h5>
          <Button isExternal type="link" href={"mailto:support@staycation.id"}>
            support@staycation.id
          </Button>
          <Button isExternal type="link" href={"tel:+622109212312"}>
            021 - 0921 - 2312
          </Button>
          <p>Staycation, Kemang, Jakarta</p>
        </div>
      </div>
      <div className="mt-12 text-center text-sm text-gray-400">
        Copyright 2019 • All rights reserved • Staycation{" "}
      </div>
    </footer>
  );
}

export default Footer;
