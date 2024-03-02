import React from "react";
import styles from "./header.module.css";
import Link from "next/link";

function HeaderSayHallo() {
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
      </div>
      <div className={styles.right}>
        <Link href="" className={styles.btn}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Icon">
              <path
                id="â³ Icon Color"
                d="M4.94449 4.94449C5.25133 4.63765 5.74881 4.63765 6.05565 4.94449L11.0001 9.88828L15.9445 4.94449C16.2277 4.66125 16.6734 4.63946 16.9816 4.87912L17.0557 4.94449C17.3625 5.25133 17.3625 5.74881 17.0557 6.05565L12.1119 11.0001L17.0557 15.9445C17.3389 16.2277 17.3607 16.6734 17.121 16.9816L17.0557 17.0557C16.7488 17.3625 16.2513 17.3625 15.9445 17.0557L11.0001 12.1119L6.05565 17.0557C5.77242 17.3389 5.32673 17.3607 5.01851 17.121L4.94449 17.0557C4.63765 16.7488 4.63765 16.2513 4.94449 15.9445L9.88828 11.0001L4.94449 6.05565C4.66125 5.77242 4.63946 5.32673 4.87912 5.01851L4.94449 4.94449Z"
                fill="inherit"
              ></path>
            </g>
          </svg>
        </Link>
      </div>
    </header>
  );
}

export default HeaderSayHallo;
