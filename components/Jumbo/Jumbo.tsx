import React from "react";
import styles from "../fontClasses.module.scss";

export default function Jumbo() {
  return (
    <div className="bg-primarybg py-5 overflow-auto">
      <div className="w-4/5 m-auto overflow-auto lg:flex lg:items-center lg:flex-row-reverse 2xl:w-2/3">
        <img src="/bannerlady.png" alt="" className="m-auto w-1/2 md:w-1/3" />

        <div
          className={`text-center text-primarylight lg:w-2/3 lg:pr-28 lg:text-left`}
        >
          <p className={`text-3xl py-3 ${styles.fancy}`}>
            Welcome to Women World!
          </p>
          <p className="text-lg pb-3">
            Enjoy browsing the site by region using the country below.
          </p>
          <p className="text-lg">
            For access to the complete database, which includes contact details,
            languages spoken, info, and more...
          </p>
        </div>
      </div>
    </div>
  );
}
