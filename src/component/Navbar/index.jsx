import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { BiMenu } from "react-icons/bi";
import Logo from "../../img/Group 1000004892.svg";

import styles from "./navbar.module.css";

function Nav({ handleOpenMenu }) {
  return (
    <div className={`${styles.container} py-3`}>
      <nav className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img alt="logo" src={Logo} className="logo" />
              </div>
            </div>

            {/* searchbar */}
            <div
              className={`${styles.searchbar} hidden sm:flex items-center px-2`}
            >
              <AiOutlineSearch size={18} />
              <input
                type="text"
                placeholder="search items"
                className={`${styles.input} ml-1 outline-none border-none bg-transparent`}
              />
            </div>
            {/* end of searchbar */}

            {/* cart */}

            <div className="flex items-center ">
              <div className="relative mr-9">
                <AiOutlineShoppingCart size={30} color="#323232" />
                <span
                  className={`${styles.cartbox} top-0 left-5 text-xs absolute flex justify-center items-center text-white`}
                >
                  2
                </span>
              </div>
              <a href="" className={`text-sm hidden sm:block ${styles.text}`}>
                Login
              </a>
              <span className="hidden sm:block">/</span>
              <a href="" className={`text-sm hidden sm:block ${styles.text}`}>
                Create account
              </a>
              <VscAccount color="#323232" className="ml-3 hidden sm:block" />

              {/* button */}
              <div className="block sm:hidden" onClick={handleOpenMenu}>
                <BiMenu size={33} />
              </div>
              {/* end of button */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
