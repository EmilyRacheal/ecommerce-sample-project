import React from "react";
import styles from "./card.module.css";
import Footshoe from "../../img/11.jpg";

const Index = ({
  productImage,
  productName,
  name,
  productcode,
  slashCode,
  button,
}) => {
  return (
    <>
      <div className={`${styles.card} `}>
        <img
          src={productImage}
          alt="Footshoe"
          className={`${styles.cardImg}`}
        />

        <div className="p-3">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-xl capitalize ">Chelsea Boot</h1>
            <p className={`${styles.textType}`}>{name}</p>
          </div>
          <p className={`${styles.codeText} my-2`}>{productName}</p>

          <div className="flex justify-between">
            <div className={`${styles.textMoney}`}>
              <h2>{productcode}</h2>
              <h4>
                <del>{slashCode}</del>
              </h4>
            </div>
            <div className={`${styles.addToCart}`}>
              <button className={`${styles.button}`}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
