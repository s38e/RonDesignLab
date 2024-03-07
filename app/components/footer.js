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
              Say Hello
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
            <Link className={styles.link} href="/cases">
              Cases
            </Link>
            <Link className={styles.link} href="/blog">
              Blog
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
            href="https://www.tiktok.com/@rondesignlab"
          >
            <Image className={styles.img} src={Tiktok} aria-live="TikTok" />
          </Link>
          <Link
            className={styles.link}
            href="https://www.instagram.com/rondesignlab/"
          >
            <Image
              className={styles.img}
              src={Instagram}
              aria-live="Instagram"
            />
          </Link>
          <Link
            className={styles.link}
            href="https://dribbble.com/RonDesignLab"
          >
            <Image className={styles.img} src={Dribbble} aria-live="Dribbble" />
          </Link>
          <Link
            className={styles.link}
            href="https://www.behance.net/rondesignlab"
          >
            <Image className={styles.img} src={Behance} aria-live="Behance" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Footer;
