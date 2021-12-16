import React from "react";
import styles from "../fontClasses.module.scss";

export default function Jumbo() {
  return (
    <div className="bg-primarybg py-5 px-5">
      <img src="/bannerlady.png" alt="" className="m-auto" />

      <div className={`text-center text-primarylight lg:text-red-500`}>
        <p className={`text-3xl py-3 ${styles.fancy}`}>
          Welcome to Women World!
        </p>
        <p>Enjoy browsing the site by region using the country below.</p>
        <p>
          For access to the complete database, which includes contact details,
          languages spoken, info, and more...
        </p>
      </div>
    </div>
  );
}
