import React from "react";
import styles from "./header.module.css";
import Link from "next/link";

function HeaderWhyUs() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link href="/" className={styles.logo}>
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Frame" clip-path="url(#clip0_1337_68)">
              <path
                id="Vector"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.361328 0.361898H11.1561C13.8017 0.327037 16.003 1.89227 17.7599 5.0576C19.5169 8.22293 18.8916 11.5367 15.8839 14.9989L20.3954 20.6051H12.86L9.92006 17.2465H0.361328V0.361898ZM6.40957 6.20968H10.6518C11.9532 6.62776 12.6058 7.51248 12.6099 8.86384C12.6139 10.2152 11.9612 11.0459 10.6518 11.3558L6.40957 11.2907V6.20968Z"
                fill="inherit"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_1337_68">
                <rect
                  width="20.2778"
                  height="20.2778"
                  fill="inherit"
                  transform="translate(0.361328 0.361328)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
        </Link>
        <Link className={styles.link} href="/pilot">
          Pilot
        </Link>
        <Link className={styles.link} href="/about">
          About Us
        </Link>
        <Link className={styles.link} href="/whyUs">
          Why Us
        </Link>
        <Link className={styles.link} href="">
          Say Hello 👋
        </Link>
      </div>
      <div className={styles.right}>
        <Link href="" className={styles.btn}>
          Get Free Estimate
        </Link>
        <div className={styles.icon_menu}>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default HeaderWhyUs;
