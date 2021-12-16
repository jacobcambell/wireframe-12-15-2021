import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../fontClasses.module.scss";

const navLinkClasses = "mx-2 hover:underline";

export default function Navbar() {
  return (
    <div
      className={`bg-primarybg py-3 px-10 flex justify-center lg:justify-between items-center text-primarylight text-xl ${styles.fancy}`}
    >
      <img src="/logo.png" alt="" className="h-14 md:h-20" />

      <div className="hidden lg:block">
        <Link href="/">
          <a className={navLinkClasses}>Database</a>
        </Link>
        <Link href="/">
          <a className={navLinkClasses}>About</a>
        </Link>
        <Link href="/">
          <a className={navLinkClasses}>Grants</a>
        </Link>
        <Link href="/">
          <a className={navLinkClasses}>Mentorship</a>
        </Link>
        <Link href="/">
          <a className={navLinkClasses}>Workshop</a>
        </Link>
        <Link href="/">
          <a className={`mr-5 ${navLinkClasses}`}>News</a>
        </Link>

        <button className="text-primarylight p-3 border boreder-primarylight">
          Sign Up
        </button>
      </div>
    </div>
  );
}
