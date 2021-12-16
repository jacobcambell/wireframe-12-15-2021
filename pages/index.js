import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Jumbo from "../components/Jumbo/Jumbo";
import LocationSelect from "../components/LocationSelect/LocationSelect";

export default function Index() {
  return (
    <div>
      <Navbar />
      <Jumbo />
      <LocationSelect />
    </div>
  );
}
