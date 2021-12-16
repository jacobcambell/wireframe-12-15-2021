import React from "react";
import styles from "./MemberTile.module.scss";

export default function MemberTile({
  name,
  location,
  website,
  handle,
  imageURL,
}) {
  return (
    <div
      className={`${styles.tile}`}
      style={{ backgroundImage: `url(${imageURL})` }}
    >
      <div className={`${styles.details}`}>
        <p className="text-white text-lg font-bold">{name}</p>
        <p className="text-white text-sm">{location}</p>
        <p className="text-white text-sm">{website}</p>
        <p className="text-white text-sm">{handle}</p>
      </div>
    </div>
  );
}
