import React, { useEffect, useState } from "react";
import Link from 'next/link'
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";


function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const {asPath} = useRouter();

  useEffect(() => {
    setExpandNavbar(false);
  }, [asPath]);

  return (
    <div className={styles.navbar} id={expandNavbar ? styles.open : styles.close}>
      <div className={styles.toggleButton}>
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
         
        </button>
      </div>
      <div className={styles.links}>
        <Link href="/"> Home </Link>
        <Link href="/projects"> Projects </Link>
        <Link href="/experience"> Experience </Link>
      </div>
    </div>
  );
}

export default Navbar;
