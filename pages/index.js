import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Jumbo from "../components/Jumbo/Jumbo";
import LocationSelect from "../components/LocationSelect/LocationSelect";
import MemberList from "../components/MemberList/MemberList";
export default function Index() {
  return (
    <div>
      <Navbar />
      <Jumbo />
      <LocationSelect />
      <MemberList />
    </div>
  );
}
