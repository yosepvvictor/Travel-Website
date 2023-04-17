import React from "react";
import { Link, useLocation } from "react-router-dom";

import Button from "../components/Button/Button";
import Logo from "./Logo";

export default function Header(props) {
  const location = useLocation();
  // console.log(location);
  const getNavLinkClass = (path) => {
    return location.pathname == path ? " text-primary" : " text-grayish ";
  };
  return (
    <header className="relative space-x-2 border-b-[1px] border-b-gray-200 font-poppins">
      <div className="containera">
        <nav className="navbar-expand-lg navbar-light flex h-[80px] flex-row items-center justify-between px-16 py-10">
          <Logo />
          <div className="collapses navbar-collapse hidden md:block">
            <ul className="ml-auto flex flex-row text-sm">
              <li className={`nav-item${getNavLinkClass("/")}`}>
                <Button className="px-4 hover:underline" type="link" href="/">
                  Home
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                <Button
                  className="px-4 hover:underline"
                  type="link"
                  href="/browse-by"
                >
                  Browse by
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/stories")}`}>
                <Button
                  className="px-4 hover:underline"
                  type="link"
                  href="/stories"
                >
                  Stories
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/agents")}`}>
                <Button
                  className="px-4 hover:underline"
                  type="link"
                  href="/agents"
                >
                  Agents
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
