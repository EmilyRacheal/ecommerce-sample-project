import React from "react";
import styles from "./home.module.css";

import Card from "../../../component/Card";
import { productData } from "../../../datas/CartDatas";
import { AiOutlineSearch } from "react-icons/ai";

const Index = () => {
  return (
    <div className="w-full px-6">
      <div className={`${styles.topMenu} block sm:hidden`}>
        <div className={`${styles.topMenuBox} flex gap-x-4 items-center`}>
          <AiOutlineSearch size={20} />
          <button className={`${styles.btnT} py-1 px-3`}>All</button>
          <button className={`${styles.btn} py-1 `}>Boots</button>
          <button className={`${styles.btn} py-1 `}>Oxford Shoes</button>
          <button className={`${styles.btn} py-1 `}>Sneakers</button>
        </div>
      </div>

      <div className="mt-9">
        <h3 className={`${styles.title}`}>All</h3>
      </div>

      <div
        className={`${styles.cardBox} w-full flex flex-wrap justify-between`}
      >
        {productData.map(
          (
            { productImage, productName, name, productcode, slashCode, button },
            i
          ) => {
            return (
              <div key={i} className={`${styles.card} mt-7`}>
                <Card
                  productImage={productImage}
                  productName={productName}
                  name={name}
                  productcode={productcode}
                  slashCode={slashCode}
                />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Index;
