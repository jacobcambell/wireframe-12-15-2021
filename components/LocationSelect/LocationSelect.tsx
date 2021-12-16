import React from "react";
import styles from "../fontClasses.module.scss";

export default function LocationSelect() {
  return (
    <div className={`${styles.fancy} bg-primarybg px-5 py-10`}>
      <select
        name=""
        id=""
        className="bg-primarybg border border-primarylight text-primarylight text-xl m-auto block w-full p-3"
      >
        <option value="">All</option>
        <option value="">Africa</option>
        <option value="">Asia</option>
        <option value="">Middle East</option>
      </select>
    </div>
  );
}
