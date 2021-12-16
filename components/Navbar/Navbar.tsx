import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../fontClasses.module.scss";

const navLinkClasses = "mx-2";

export default function Navbar() {
  return (
    <div
      className={`bg-primarybg flex justify-between items-center text-primarylight text-2xl ${styles.fancy}`}
    >
      <p className="text-3xl mx-6">Women</p>

      <div>
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
          <a className={navLinkClasses}>News</a>
        </Link>

        <button className="text-primarylight p-3 border boreder-primarylight">
          Sign Up
        </button>
      </div>
    </div>
  );
}
