import React from "react";
import styles from "./sidebar.module.css";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { FiFacebook } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import ProfileIcon from "../../img/profile.svg";

const Index = ({ menuRef }) => {
  return (
    <div ref={menuRef} className={` ${styles.container} px-5`}>
      <img src={ProfileIcon} alt="profile icon" />

      <div className="flex my-4">
        <a href="" className={`text-sm block sm:hidden ${styles.text}`}>
          Login
        </a>
        <span className="block sm:hidden mx-1"> / </span>
        <a href="" className={`text-sm block sm:hidden ${styles.text}`}>
          Create account
        </a>
      </div>

      {/* searchbar */}
      <div
        className={`${styles.searchbar} my-4 flex sm:hidden items-center px-2`}
      >
        <AiOutlineSearch size={18} />
        <input
          type="text"
          placeholder="search items"
          className={`${styles.input} ml-1 outline-none border-none bg-transparent`}
        />
      </div>
      {/* end of searchbar */}

      <div className={`${styles.contactDetails}`}>
        <p className={` ${styles.subCat} font-bold text-lg `}>Categories</p>

        <div className="flex items-start gap-x-3 mt-3">
          <input type="radio" name="" id="" className="mt-2" />
          <div>
            <p className="my-1">All</p>
            <p className="my-1">Chelsea Boots</p>
            <p className="my-1">Oxford Shoes</p>
            <p className="my-1">Sneakers</p>
          </div>
        </div>
        <div className={` ${styles.line} mt-7`}></div>
      </div>

      <div className="pt-7">
        <p className={` ${styles.subCat} font-bold text-lg `}>Sort by</p>

        <div className={`${styles.contactDetails}`}>
          <div className="flex items-start gap-x-3 mt-3">
            <input type="radio" name="" id="" className="mt-2" />
            <div>
              <p className="my-1">Categories</p>
              <p className="my-1">Lowest price</p>
              <p className="my-1">A-Z</p>
              <p className="my-1">Z-A</p>
            </div>
          </div>
        </div>

        <div className={` ${styles.line} mt-7`}></div>
      </div>

      <div className="pt-7">
        <p className={` ${styles.subCat} font-bold text-lg `}>Layout</p>

        <div className={`${styles.contactDetails}`}>
          <div className="flex items-start gap-x-3 mt-3">
            <input type="radio" name="" id="" className="mt-2" />
            <div>
              <p className="my-1">Instaview</p>
              <p className="my-1">List view</p>
            </div>
          </div>
        </div>

        <div className={` ${styles.line} mt-7`}></div>
      </div>

      <div className="pt-7">
        <p className={` ${styles.subCat} font-bold text-lg `}>Store info</p>

        <div className="flex items-start gap-x-3 mt-3">
          <div className={`${styles.contactDetails}`}>
            <div className="flex items-center">
              <div>
                <AiOutlineWhatsApp />
              </div>
              <p className="my-1 ml-2">+233 203 567 890</p>
            </div>

            <div className="flex items-center">
              <div>
                <BsTelephone />
              </div>
              <p className="my-1 ml-2">+233 203 567 890</p>
            </div>

            <div className="flex items-center">
              <div>
                <BsInstagram />
              </div>
              <p className="my-1 ml-2">@Emmy_shoes</p>
            </div>

            <div className="flex items-center">
              <div>
                <FiFacebook />
              </div>
              <p className="my-1 ml-2">@Emmy_shoes</p>
            </div>

            <div className="flex items-center">
              <div>
                <GrLocation />
              </div>
              <p className="my-1 ml-2">Accra, Ghana</p>
            </div>

            <div className="flex items-center">
              <div>
                <HiOutlineMail />
              </div>
              <p className="my-1 ml-2">emmy_shoes@gmail.com</p>
            </div>

            <div className="flex items-center">
              <p className={` ${styles.workHours} my-1`}>
                working hours 9am-6pm Mon-Sat
              </p>
            </div>
          </div>
        </div>
        <div className={` ${styles.line} mt-7`}></div>
      </div>
    </div>
  );
};

export default Index;
