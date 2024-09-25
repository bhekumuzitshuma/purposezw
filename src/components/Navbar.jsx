import React from "react";
import { RiSearch2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="navbar z-50 max-w-6xl mx-auto bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 min-w-max p-2 shadow"
            >
              <li>
                <a>About</a>
                <ul className="p-2">
                  <li>
                    <a href="/our-team">Our Team</a>
                  </li>
                  <li>
                    <a href="/about-us">About Us</a>
                  </li>
                  <li>
                    <a href="/vunani">Vunani</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Products & Services</a>
                <ul className="p-2">
                  <li>
                    <a>Fixed Income Portfolio Management</a>
                  </li>
                  <li>
                    <a>Cash Management</a>
                  </li>
                  <li>
                    <a>Investment Advisory Services</a>
                  </li>
                  <li>
                    <a>Alternative Trading Platform</a>
                  </li>
                  <li>
                    <a>Property Fund</a>
                  </li>
                  <li>
                    <a>Stock Market Portfolio</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/investment-process">Investment Process</a>
              </li>
              <li>
                <a href="/prices">Perfomance</a>
              </li>
              <li>
                <a href="/forms">Forms</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img src="/logo_a.png" className="w-[160px]" alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu z-50 menu-horizontal px-1">
            <li>
              <details>
                <summary>About</summary>
                <ul className="p-2 w-[200px] border">
                  <li>
                    <a href="/our-team">Our Team</a>
                  </li>
                  <li>
                    <a href="/about-us">About Us</a>
                  </li>
                  <li>
                    <a href="/vunani">Vunani</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Products & Services</summary>
                <ul className="p-2 border w-[300px]">
                  <li>
                    <a>Fixed Income Portfolio Management</a>
                  </li>
                  <li>
                    <a>Cash Management</a>
                  </li>
                  <li>
                    <a>Investment Advisory Services</a>
                  </li>
                  <li>
                    <a>Alternative Trading Platform</a>
                  </li>
                  <li>
                    <a>Property Fund</a>
                  </li>
                  <li>
                    <a>Stock Market Portfolio</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a href="/investment-process">Investment Process</a>
            </li>
            <li>
              <a href="/prices">Perfomance</a>
            </li>
            <li>
              <a href="/forms">Forms</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-1">
          <a className="btn btn-sm hidden md:flex bg-teal-200">Contact</a>
          <a className="btn btn-sm bg-teal-200">
            <RiSearch2Line />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
