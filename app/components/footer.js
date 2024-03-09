"use client";
import React, { useEffect } from "react";
import styles from "./styles/footer.module.css";
import Image from "next/image";
import Link from "next/link";
import Qr_Code from "@/public/assets/qr-code.svg";
import share_image from "@/public/assets/share-image.webp";
import Whatsapp from "@/public/assets/whatsapp.svg";
import Twitter from "@/public/assets/twitter.svg";
import Behance from "@/public/assets/behance.svg";
import Dribbble from "@/public/assets/dribbble.svg";
import Instagram from "@/public/assets/instagram.svg";
import Tiktok from "@/public/assets/tiktok.svg";
import Mail from "@/public/assets/mail.svg";
import { Yuji_Syuku } from "next/font/google";

const Footer = () => {
  useEffect(() => {
    // const footerHight = document.querySelector(
    //   ".footer_footer_button__e4gPV"
    // ).clientHeight;
    // console.log(footerHight);
    // -------------- Open Menu and Height Header -------------- //=
    const handleShareButtonClick = () => {
      const shareButton = document.querySelector(
        ".footer_social_button__viDvs"
      );
      const shareLinkOverlay = document.querySelector(
        ".footer_share_link_overlay__HSgPr"
      );
      shareLinkOverlay.style.display = "flex";
    };
    const handleCloseButtonClick = () => {
      const shareLinkOverlay = document.querySelector(
        ".footer_share_link_overlay__HSgPr"
      );
      shareLinkOverlay.style.display = "none";
    };
    const shareButton = document.querySelector(".footer_social_button__viDvs");
    const closeButton = document.querySelector(
      ".footer_section_2__ubqjA .footer_social_share__jpkZh .footer_share_link_overlay__HSgPr .footer_link_wrapper__51yHS .footer_link_header__fuG4j .footer_button_close__OqfIK"
    );
    const LinkOverlay = document.querySelector(
      ".footer_share_link_overlay__HSgPr"
    );
    shareButton.addEventListener("click", handleShareButtonClick);
    closeButton.addEventListener("click", handleCloseButtonClick);
    LinkOverlay.addEventListener("click", handleCloseButtonClick);
    return () => {
      shareButton.removeEventListener("click", handleShareButtonClick);
      closeButton.removeEventListener("click", handleCloseButtonClick);
    };
  });
  return (
    <div className={styles.footer}>
      <section className={styles.section_1}>
        <div className={styles.insights__body}>
          <div className={styles.insights__image}>
            <Image className={styles.img} alt="QR-Code" src={Qr_Code} />
          </div>
          <div className={styles.insights__content}>
            <h3 className={styles.insights__title}>Insights every day</h3>
            <p className={styles.insights__text}>
              We try to publish content every day, so you will receive insights
              and/or interesting content regularly.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.section_2}>
        <div className={styles.social_share}>
          <p className={styles.social_text}>
            If you know someone we can <br /> help, please share this site
          </p>
          <button
            type="button"
            className={styles.social_button}
            title="Open pop-up Share The Link"
          >
            Share the Link
            <div className={styles.button_icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="black"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.7071 8.29289C21.0976 8.68342 21.0976 9.31658 20.7071 9.70711C20.3166 10.0976 19.6834 10.0976 19.2929 9.70711L15 5.41421L15 17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17L13 5.41421L8.70711 9.70711C8.31658 10.0976 7.68342 10.0976 7.29289 9.70711C6.90237 9.31658 6.90237 8.68342 7.29289 8.29289L13.2928 2.29303L13.2929 2.29289C13.4874 2.09839 13.7421 2.00076 13.997 2C13.998 2 13.999 2 14 2C14.001 2 14.002 2 14.003 2C14.1375 2.0004 14.2657 2.02735 14.3828 2.07588C14.499 2.12395 14.6079 2.19487 14.7028 2.28864M20.7071 8.29289L14.7076 2.29342L20.7071 8.29289ZM4 17.6428V16C4 15.4477 4.44772 15 5 15C5.55229 15 6 15.4477 6 16L6 17.6C6 18.7366 6.00078 19.5289 6.05118 20.1458C6.10062 20.7509 6.19279 21.0986 6.32698 21.362C6.6146 21.9265 7.07354 22.3854 7.63803 22.673C7.90138 22.8072 8.24907 22.8994 8.85424 22.9488C9.47108 22.9992 10.2634 23 11.4 23H16.6C17.7366 23 18.5289 22.9992 19.1458 22.9488C19.7509 22.8994 20.0986 22.8072 20.362 22.673C20.9265 22.3854 21.3854 21.9265 21.673 21.362C21.8072 21.0986 21.8994 20.7509 21.9488 20.1458C21.9992 19.5289 22 18.7366 22 17.6V16C22 15.4477 22.4477 15 23 15C23.5523 15 24 15.4477 24 16V17.6428V17.6429C24 18.7267 24 19.6008 23.9422 20.3086C23.8826 21.0375 23.7568 21.6777 23.455 22.27C22.9757 23.2108 22.2108 23.9757 21.27 24.455C20.6777 24.7568 20.0375 24.8826 19.3086 24.9422C18.6008 25 17.7266 25 16.6429 25H16.6428H11.3572C10.2734 25 9.39926 25 8.69138 24.9422C7.96253 24.8826 7.32234 24.7568 6.73005 24.455C5.78924 23.9757 5.02433 23.2108 4.54497 22.27C4.24318 21.6777 4.11737 21.0375 4.05782 20.3086C3.99998 19.6007 3.99999 18.7266 4 17.6428V17.6428Z"
                  fill="inherit"
                ></path>
              </svg>
            </div>
          </button>
          <div className={styles.share_link_overlay}>
            <div className={styles.link_wrapper}>
              <div className={styles.link_header}>
                <div className={styles.link_image}>
                  <Image
                    className={styles.img}
                    alt="We attract digital experts to raise investments &amp; strengthen your team"
                    src={share_image}
                  />
                  <button
                    type="button"
                    className={styles.button_close}
                    title="Close button"
                  >
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
                  </button>
                </div>
              </div>
              <div className={styles.link_body_social_share}>
                <h4 className={styles.share_title}>With Social</h4>
                <ul className={styles.share_list}>
                  <li className={styles.share_item}>
                    <div className={styles.share_link}>
                      <Image
                        className={styles.img}
                        alt="WhatsApp"
                        src={Whatsapp}
                      />
                    </div>
                  </li>
                  <li className={styles.share_item}>
                    <div className={styles.share_link}>
                      <Image
                        className={styles.img}
                        alt="Twitter"
                        src={Twitter}
                      />
                    </div>
                  </li>
                  <li className={styles.share_item}>
                    <div className={styles.share_link}>
                      <Image className={styles.img} alt="Mail" src={Mail} />
                    </div>
                  </li>
                </ul>
              </div>
              <div className={styles.link_bottom}>
                <h6 className={styles.share_title}>Copy link or share pdf</h6>
                <div className={styles.share_buttons}>
                  <div className={styles.share_copy}>
                    <p className={styles.share_text}>
                      https://rondesignlab.com/why-us
                    </p>
                    <button
                      type="button"
                      title="Copy url"
                      className={styles.share_button}
                    >
                      <p className={styles.share_copy_text}>Copy</p>
                      <p className={styles.share_success}>👌</p>
                    </button>
                  </div>
                  <a
                    href="/assets/RondesignlabPresentationGuide.pdf"
                    download="Rondesignlab Presentation Guide.pdf"
                    className={styles.share_download}
                    title="Download & Share PDF"
                  >
                    Download &amp; Share PDF
                    <div className={styles.share_icon}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="black"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4 17.6428V16C4 15.4477 4.44772 15 5 15C5.55229 15 6 15.4477 6 16L6 17.6C6 18.7366 6.00078 19.5289 6.05118 20.1458C6.10062 20.7509 6.19279 21.0986 6.32698 21.362C6.6146 21.9265 7.07354 22.3854 7.63803 22.673C7.90138 22.8072 8.24907 22.8994 8.85424 22.9488C9.47108 22.9992 10.2634 23 11.4 23H16.6C17.7366 23 18.5289 22.9992 19.1458 22.9488C19.7509 22.8994 20.0986 22.8072 20.362 22.673C20.9265 22.3854 21.3854 21.9265 21.673 21.362C21.8072 21.0986 21.8994 20.7509 21.9488 20.1458C21.9992 19.5289 22 18.7366 22 17.6V16C22 15.4477 22.4477 15 23 15C23.5523 15 24 15.4477 24 16V17.6428C24 18.7266 24 19.6008 23.9422 20.3086C23.8826 21.0375 23.7568 21.6777 23.455 22.27C22.9757 23.2108 22.2108 23.9757 21.27 24.455C20.6777 24.7568 20.0375 24.8826 19.3086 24.9422C18.6008 25 17.7266 25 16.6429 25H11.3572C10.2734 25 9.39926 25 8.69138 24.9422C7.96253 24.8826 7.32234 24.7568 6.73005 24.455C5.78924 23.9757 5.02433 23.2108 4.54497 22.27C4.24318 21.6777 4.11737 21.0375 4.05782 20.3086C3.99998 19.6007 3.99999 18.7266 4 17.6428Z"
                        ></path>
                        <path d="M7.29289 11.7071C6.90237 11.3166 6.90237 10.6834 7.2929 10.2929C7.68342 9.90237 8.31658 9.90237 8.70711 10.2929L13 14.5858L13 3C13 2.44771 13.4477 2 14 2C14.5523 2 15 2.44771 15 3L15 14.5858L19.2929 10.2929C19.6834 9.90237 20.3166 9.90237 20.7071 10.2929C21.0976 10.6834 21.0976 11.3166 20.7071 11.7071L14.7072 17.707C14.5127 17.9015 14.2579 17.9992 14.003 18L14 18L13.997 18C13.8625 17.9996 13.7343 17.9727 13.6172 17.9241C13.501 17.876 13.3921 17.8051 13.2972 17.7114L7.29289 11.7071Z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section_3}>
        <div className={styles.col}>
          <div className={styles.footer_text}>
            <p>
              For whose daily routines involve PDF
              <br /> presentations
            </p>
          </div>
          <a
            href="/assets/RondesignlabPresentationGuide.pdf"
            download="Rondesignlab Presentation Guide.pdf"
            className={styles.footer_button}
            title="Download & Share PDF"
          >
            Download &amp; Share PDF
            <div className={styles.share_icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="black"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 17.6428V16C4 15.4477 4.44772 15 5 15C5.55229 15 6 15.4477 6 16L6 17.6C6 18.7366 6.00078 19.5289 6.05118 20.1458C6.10062 20.7509 6.19279 21.0986 6.32698 21.362C6.6146 21.9265 7.07354 22.3854 7.63803 22.673C7.90138 22.8072 8.24907 22.8994 8.85424 22.9488C9.47108 22.9992 10.2634 23 11.4 23H16.6C17.7366 23 18.5289 22.9992 19.1458 22.9488C19.7509 22.8994 20.0986 22.8072 20.362 22.673C20.9265 22.3854 21.3854 21.9265 21.673 21.362C21.8072 21.0986 21.8994 20.7509 21.9488 20.1458C21.9992 19.5289 22 18.7366 22 17.6V16C22 15.4477 22.4477 15 23 15C23.5523 15 24 15.4477 24 16V17.6428C24 18.7266 24 19.6008 23.9422 20.3086C23.8826 21.0375 23.7568 21.6777 23.455 22.27C22.9757 23.2108 22.2108 23.9757 21.27 24.455C20.6777 24.7568 20.0375 24.8826 19.3086 24.9422C18.6008 25 17.7266 25 16.6429 25H11.3572C10.2734 25 9.39926 25 8.69138 24.9422C7.96253 24.8826 7.32234 24.7568 6.73005 24.455C5.78924 23.9757 5.02433 23.2108 4.54497 22.27C4.24318 21.6777 4.11737 21.0375 4.05782 20.3086C3.99998 19.6007 3.99999 18.7266 4 17.6428Z"
                ></path>
                <path d="M7.29289 11.7071C6.90237 11.3166 6.90237 10.6834 7.2929 10.2929C7.68342 9.90237 8.31658 9.90237 8.70711 10.2929L13 14.5858L13 3C13 2.44771 13.4477 2 14 2C14.5523 2 15 2.44771 15 3L15 14.5858L19.2929 10.2929C19.6834 9.90237 20.3166 9.90237 20.7071 10.2929C21.0976 10.6834 21.0976 11.3166 20.7071 11.7071L14.7072 17.707C14.5127 17.9015 14.2579 17.9992 14.003 18L14 18L13.997 18C13.8625 17.9996 13.7343 17.9727 13.6172 17.9241C13.501 17.876 13.3921 17.8051 13.2972 17.7114L7.29289 11.7071Z"></path>
              </svg>
            </div>
          </a>
        </div>
        <div className={styles.col}>
          <h3 className={styles.head}>Pages</h3>
          <div className={styles.links}>
            <Link className={styles.link} href="" id="SayHalloLink">
              <p>Say Hello</p>
            </Link>
            <Link className={styles.link} href="/pilot">
              <p>Pilot</p>
            </Link>
            <Link className={styles.link} href="/about">
              <p>About Us</p>
            </Link>
            <Link className={styles.link} href="/whyUs">
              <p>Why Us</p>
            </Link>
            <Link className={styles.link} href="/cases">
              <p>Cases</p>
            </Link>
            <Link className={styles.link} href="/blog">
              <p>Blog</p>
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.last_section}>
        <p className={styles.copyright}>© 2023, Rondesign</p>
        <div className={styles.links}>
          <Link className={styles.link} href="">
            Sitemap
          </Link>
          <Link className={styles.link} href="">
            Privacy Policy
          </Link>
          <Link className={styles.link} href="">
            Terms of Use
          </Link>
          <Link className={styles.link} href="">
            Cookie Policy
          </Link>
        </div>
        <div className={styles.Social}>
          <Link
            className={styles.link}
            href="https://dribbble.com/RonDesignLab"
          >
            <span className={styles.svgContainer}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM5.14386 17.8201C3.81099 16.2515 3.00683 14.2197 3.00683 12L3.00683 11.9978C6.61307 11.9618 9.57567 11.4838 12.2422 10.5779C12.4668 11.0605 12.6847 11.5534 12.8956 12.0564C12.5555 12.1691 12.221 12.2949 11.8918 12.4335C9.24177 13.5489 7.00538 15.4612 5.14386 17.8201ZM6.60614 19.1967C8.10884 20.3248 9.97636 20.9932 12 20.9932C13.2188 20.9932 14.3809 20.7507 15.4409 20.3114C14.9668 18.0368 14.352 15.907 13.6265 13.9217C13.3003 14.0264 12.9807 14.1451 12.6677 14.2768C10.356 15.2499 8.33843 16.9649 6.60614 19.1967ZM15.5924 13.4765C16.2479 15.3019 16.8129 17.2399 17.267 19.2902C19.048 18.0013 20.338 16.0757 20.8032 13.8473C18.9143 13.3589 17.1821 13.2604 15.5924 13.4765ZM14.8575 11.5662C16.754 11.2412 18.7996 11.3067 20.9917 11.8332C20.9578 9.97415 20.3599 8.25291 19.3619 6.8334C17.6358 8.0531 15.9276 9.06168 14.1111 9.85398C14.3687 10.4121 14.6177 10.9829 14.8575 11.5662ZM11.3457 8.76846C8.99734 9.53429 6.39047 9.94463 3.2312 9.9948C3.85725 7.24565 5.74294 4.97565 8.24906 3.82401C9.34941 5.31262 10.3933 6.96064 11.3457 8.76846ZM13.2302 8.05623C14.8876 7.34152 16.4466 6.43089 18.0282 5.32624C16.4333 3.88469 14.3192 3.00683 12 3.00683C11.4014 3.00683 10.8165 3.06531 10.2506 3.17688C11.3103 4.66337 12.3129 6.28992 13.2302 8.05623Z"
                  fill="#0F0F0F"
                />
              </svg>
            </span>
            <span className={styles.BG}></span>
          </Link>
          <Link
            className={styles.link}
            href="https://www.tiktok.com/@rondesignlab"
          >
            <span className={styles.svgContainer}>
              <svg
                fill="#000000"
                viewBox="0 0 512 512"
                id="icons"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
              </svg>
            </span>
            <span className={styles.BG}></span>
          </Link>
          <Link
            className={styles.link}
            href="https://www.instagram.com/rondesignlab/"
          >
            <span className={styles.svgContainer}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  fill="#0F0F0F"
                />
                <path
                  d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                  fill="#0F0F0F"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                  fill="#0F0F0F"
                />
              </svg>
            </span>
            <span className={styles.BG}></span>
          </Link>
          <Link
            className={styles.link}
            href="https://www.behance.net/rondesignlab"
          >
            <span className={styles.svgContainer}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.5 19C1.67157 19 1 18.3284 1 17.5V6.5C1 5.67157 1.67157 5 2.5 5H8C13 5 13 11.5 10 11.5C13 11.5 14 19 8 19H2.5ZM4.5 11C4.22386 11 4 10.7761 4 10.5V7.5C4 7.22386 4.22386 7 4.5 7H7C7 7 9 7 9 9C9 11 7 11 7 11H4.5ZM4.5 13C4.22386 13 4 13.2239 4 13.5V16.5C4 16.7761 4.22386 17 4.5 17H8C8 17 9.5 17 9.5 15C9.5 13 8 13 8 13H4.5Z"
                  fill="#0F0F0F"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.499 14.0034C22.3279 14.0034 23.0212 13.3199 22.8522 12.5085C21.6065 6.52886 12.9128 7.08088 13 14.0034C13.0665 19.2762 20.4344 20.9671 22.6038 16.1898C22.9485 15.4308 22.1747 14.9997 21.5372 14.9997C20.9706 14.9997 20.5313 15.5223 20.1693 15.9582C19.1272 17.2132 15.9628 17.1221 15.5449 14.5142C15.5005 14.2375 15.7304 14.0034 16.0106 14.0034H21.499ZM15.8184 11.9997C15.671 11.9997 15.5758 11.8453 15.6545 11.7207C16.7141 10.0424 19.2614 10.0605 20.3398 11.7189C20.4207 11.8434 20.3257 11.9997 20.1772 11.9997H15.8184Z"
                  fill="#0F0F0F"
                />
                <path
                  d="M16 6C15.4477 6 15 6.44772 15 7C15 7.55228 15.4477 8 16 8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H16Z"
                  fill="#0F0F0F"
                />
              </svg>
            </span>
            <span className={styles.BG}></span>
          </Link>
        </div>
        {/* <div className={styles.Social}>
          <Link
            className={styles.link}
            href="https://www.tiktok.com/@rondesignlab"
          >
            <Image className={styles.img} src={Tiktok} alt="TikTok" />
          </Link>
          <Link
            className={styles.link}
            href="https://www.instagram.com/rondesignlab/"
          >
            <Image className={styles.img} src={Instagram} alt="Instagram" />
          </Link>
          <Link
            className={styles.link}
            href="https://dribbble.com/RonDesignLab"
          >
            <Image className={styles.img} src={Dribbble} alt="Dribbble" />
          </Link>
          <Link
            className={styles.link}
            href="https://www.behance.net/rondesignlab"
          >
            <Image className={styles.img} src={Behance} alt="Behance" />
          </Link>
        </div> */}
      </section>
    </div>
  );
};

export default Footer;
