import React, { useState } from "react";
import styles from "../fontClasses.module.scss";

export default function LocationSelect() {
  const [locations, setLocations] = useState<string[]>([
    "All",
    "Africa",
    "Asia",
    "USA",
    "Canada",
    "Latin America",
    "Europe",
  ]);

  return (
    <div
      className={`${styles.fancy} bg-primarybg px-5 py-10 text-primarylight`}
    >
      <select
        name=""
        id=""
        className="bg-primarybg border border-primarylight text-primarylight text-xl m-auto block w-full p-3 md:hidden"
      >
        {locations.map((loc) => {
          return <option value="">{loc}</option>;
        })}
      </select>

      <div className="hidden md:flex items-center justify-center">
        {locations.map((loc) => {
          return (
            <div>
              <a className="text-xl mx-3 hover:underline" href="/">
                {loc}
              </a>
              //
            </div>
          );
        })}
      </div>
    </div>
  );
}
