"use client";
import styles from "./whyUs.module.css";
import React from "react";
import HeaderWhyUs from "./header";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
const { useEffect } = require("react");
import section_3_images from "@/public/assets/section_3_images-9.webp";
import whyUs_section_2_01 from "@/public/assets/whyUs_section_2_01.webp";
import whyUs_section_2_02 from "@/public/assets/whyUs_section_2_02.webp";
import whyUs_section_2_03 from "@/public/assets/whyUs_section_2_03.webp";
import whyUs_section_2_04 from "@/public/assets/whyUs_section_2_04.webp";
import aboutSection_4_01 from "@/public/assets/aboutSection_4-02.webp";
import aboutSection_4_02 from "@/public/assets/aboutSection_4-01.webp";
import aboutSection_4_03 from "@/public/assets/aboutSection_4-03.webp";
import whyus_reviews_01 from "@/public/assets/whyus_reviews_01.webp";
import whyus_reviews_02 from "@/public/assets/whyus_reviews_02.webp";
import whyus_reviews_03 from "@/public/assets/vivek-jagtap.webp";
import whyus_reviews_04 from "@/public/assets/ben-callaghan.webp";
import whyus_reviews_05 from "@/public/assets/whyus_reviews_03.webp";
import whyus_reviews_06 from "@/public/assets/whyus_reviews_04.webp";
import whyus_reviews_07 from "@/public/assets/whyus_reviews_05.webp";
import whyus_reviews_08 from "@/public/assets/whyus_reviews_06.webp";
import whyus_reviews_09 from "@/public/assets/whyus_reviews_07.webp";
import section_4_1 from "@/public/assets/section_4_pin_img_01.svg";
import section_4_2 from "@/public/assets/section_6_01.svg";
import section_4_3 from "@/public/assets/section_6_02.svg";
import section_4_4 from "@/public/assets/section_4_pin_img_02.svg";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import SwiperSection from "@/app/components/swiper";
import Footer from "@/app/components/footer";
import Link from "next/link";
import yellow_girl_smile from "@/public/assets/yellow-girl-smile.webp";
import SayHallo from "../sayHallo/page";

gsap.registerPlugin(ScrollTrigger);

function WhyUs() {
  useEffect(() => {
    // ----------- Open Say Hallo Form ----------- //
    const closeBtn = document.querySelector(".header_btn__Jtgac");
    const SayHalloPage = document.querySelector(".SayHalloPage");
    const getFreeEstimate = document.querySelector(".header_btn__2Aib6");
    const footerLink = document.querySelector("#SayHalloLink");
    const header_link = document.querySelector(
      ".header_link__dHPJT:last-child"
    );
    closeBtn.addEventListener("click", function () {
      SayHalloPage.style.display = "none";
    });
    header_link.addEventListener("click", function () {
      SayHalloPage.style.display = "block";
    });
    getFreeEstimate.addEventListener("click", function () {
      SayHalloPage.style.display = "block";
    });
    footerLink.addEventListener("click", function () {
      SayHalloPage.style.display = "block";
    });
    // ----------- Animation Scale Video ----------- //
    gsap.to(".whyUs_video__G7Lqo", {
      scale: "1.1",
      duration: 1,
      scrollTrigger: {
        trigger: ".whyUs_video__G7Lqo",
        start: "top center",
        end: "+=500",
        scrub: 1,
      },
    });
    // ----------- Smooth Scroll ----------- //
    const lenis = new Lenis({
      duration: 1.2,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    // ----------- Head Section_1 Animation ----------- //
    gsap.fromTo(
      ".whyUs_title_section_1__l6liu",
      {
        opacity: 0,
        y: -40,
        scale: 1.1,
        z: 0,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".whyUs_title_section_1__l6liu",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
    // ----------- Head Section_2 Animation ----------- //
    gsap.fromTo(
      ".whyUs_title_section_2__fEq8C",
      {
        opacity: 0,
        y: -40,
        scale: 1.1,
        z: 0,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".whyUs_title_section_2__fEq8C",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
    // ----------- Head Section_3 Animation ----------- //
    gsap.fromTo(
      ".whyUs_title_section_3__9EbxZ",
      {
        opacity: 0,
        y: -40,
        scale: 1.1,
        z: 0,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".whyUs_title_section_3__9EbxZ",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
    // ----------- Head Section_4 Animation ----------- //
    gsap.fromTo(
      ".whyUs_section_4_title__WIwYK",
      {
        opacity: 0,
        y: -40,
        scale: 1.1,
        z: 0,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".whyUs_section_4_title__WIwYK",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
    // ----------- Head Section_5 Animation ----------- //
    gsap.fromTo(
      ".whyUs_section_5_title__0YnID",
      {
        opacity: 0,
        y: -40,
        scale: 1.1,
        z: 0,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".whyUs_section_5_title__0YnID",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
    // ----------- Animation Pin Image ----------- //
    let workInfoItems = document.querySelectorAll(
      ".whyUs_section_4_work_photo_item__D8pJ8"
    );
    workInfoItems.forEach(function (item, index) {
      item.style.zIndex = workInfoItems.length - index;
    });
    gsap.set(".whyUs_section_4_work_photo_item__D8pJ8", {
      clipPath: function () {
        return "inset(0px 0px 0px 0px)";
      },
    });
    const animation = gsap.to(
      ".whyUs_section_4_work_photo_item__D8pJ8:not(:last-child)",
      {
        clipPath: function () {
          return "inset(0px 0px 100% 0px)";
        },
        stagger: 0.5,
        ease: "none",
      }
    );
    ScrollTrigger.create({
      trigger: ".whyUs_body_section_4__SMRZO",
      start: "top top",
      end: "bottom bottom",
      animation: animation,
      scrub: 1,
    });
    // ----------- Animation Last Section ----------- //
    gsap.fromTo(
      ".whyUs_section_5__QDAj8 .whyUs_body_section_5__xquiB .whyUs_left__198ji",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".whyUs_body_section_5__xquiB",
        },
      }
    );
    gsap.fromTo(
      ".whyUs_section_5__QDAj8 .whyUs_body_section_5__xquiB .whyUs_right__MzCmt",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.4,
        scrollTrigger: {
          trigger: ".whyUs_body_section_5__xquiB",
        },
      }
    );
  });

  return (
    <>
      <HeaderWhyUs />
      <main className={styles.page}>
        <section className={styles.hero_section}>
          <div className={styles.heading}>
            <h1>
              <div className={styles.top}>
                So why
                <div className={styles.img_bar}>
                  <div className={styles.div_img}>
                    <Image
                      className={styles.img}
                      src={section_3_images}
                      alt="Description of the image"
                    />
                  </div>
                  <div className={styles.background}></div>
                </div>
                us?
              </div>
            </h1>
          </div>
          <div className={styles.title}>
            <p>
              We team up with digital experts to boost
              <br />
              investments and fortify your team.
            </p>
          </div>
          <div className={styles.video}>
            <video
              src="/assets/hero.mp4"
              width="640"
              height="360"
              autoPlay
              muted
              loop
            />
          </div>
        </section>
        <section className={styles.section_1}>
          <div className={styles.header_section_1}>
            <h2 className={styles.title_section_1}>
              Guess who&apos;s at the <br /> top of Behance? <br /> That&apos;s
              right, we are!
            </h2>
            <p className={styles.text}>
              Over 1.2 million people saw us, and we earned <br /> 30+ awards in
              various categories.
            </p>
          </div>
          <SwiperSection />
        </section>
        <section className={styles.section_2}>
          <div className={styles.header_section_2}>
            <h2 className={styles.title_section_2}>
              Guess who&apos;s at the <br /> top of Dribbble? <br /> That&apos;s
              right, we are!
            </h2>
            <p className={styles.text}>
              In the last 90 days, we hit 4.6 million views, got
              <br /> 25,000 likes, and 2,200 saves — impressive stats.
            </p>
          </div>
          <ul className={styles.list}>
            <li className={styles.item_dribbble}>
              <a
                target="_blank"
                className={styles.dribbble__link}
                href="https://dribbble.com/shots/22806186-SugarCRM-Discover-Advanced-Analytics-Tool"
              >
                <div className={styles.dribbble__image}>
                  <Image
                    alt="SugarCRM Discover – Advanced Analytics Tool"
                    className={styles.img}
                    src={whyUs_section_2_01}
                  />
                </div>
                <div className={styles.dribbble__content}>
                  <div className={styles.dribbble__info}>
                    <p className={styles.dribbble__company}>Dribbble</p>
                    <h4 className={styles.dribbble__title}>
                      SugarCRM Discover – Advanced Analytics Tool
                    </h4>
                  </div>
                  <ul className={styles.dribbble__stats}>
                    <li className={styles.dribbble__stat}>
                      <div className={styles.category}>⭐ 33.7k Views</div>
                    </li>
                    <li className={styles.dribbble__stat}>
                      <div className={styles.category}>
                        🏆 4 days in the top
                      </div>
                    </li>
                  </ul>
                </div>
              </a>
            </li>
            <li className={styles.item_dribbble}>
              <a
                target="_blank"
                className={styles.dribbble__link}
                href="https://dribbble.com/shots/23173951-Fishbowl-CRM-Business-Management-Solution"
              >
                <div className={styles.dribbble__image}>
                  <Image
                    alt="Fishbowl CRM - Business Management Solution"
                    className={styles.img}
                    src={whyUs_section_2_02}
                  />
                </div>
                <div className={styles.dribbble__content}>
                  <div className={styles.dribbble__info}>
                    <p className={styles.dribbble__company}>Dribbble</p>
                    <h4 className={styles.dribbble__title}>
                      Fishbowl CRM - Business Management Solution
                    </h4>
                  </div>
                  <ul className={styles.dribbble__stats}>
                    <li className={styles.dribbble__stat}>
                      <div className={styles.category}>⭐ 52.6k Views</div>
                    </li>
                    <li className={styles.dribbble__stat}>
                      <div className={styles.category}>
                        🏆 15 days in the top
                      </div>
                    </li>
                  </ul>
                </div>
              </a>
            </li>
            <li className={styles.item_dribbble}>
              <a
                target="_blank"
                className={styles.dribbble__link}
                href="https://dribbble.com/shots/23181420-Salesforce-Sales-Analytics-Software"
              >
                <div className={styles.dribbble__image}>
                  <Image
                    alt="Salesforce - Sales Analytics Software CRM System"
                    className={styles.img}
                    src={whyUs_section_2_03}
                  />
                </div>
                <div className={styles.dribbble__content}>
                  <div className={styles.dribbble__info}>
                    <p className={styles.dribbble__company}>Dribbble</p>
                    <h4 className={styles.dribbble__title}>
                      Salesforce - Sales Analytics Software CRM System
                    </h4>
                  </div>
                  <ul className={styles.dribbble__stats}>
                    <li className={styles.dribbble__stat}>
                      <div className={styles.category}>⭐ 10.8k Views</div>
                    </li>
                    <li className={styles.dribbble__stat}>
                      <div className={styles.category}>
                        🏆 14 days in the top
                      </div>
                    </li>
                  </ul>
                </div>
              </a>
            </li>
            <li className={styles.item_dribbble}>
              <a
                target="_blank"
                className={styles.dribbble__link}
                href="https://dribbble.com/shots/23203289-Salesforce-CRM-Invoice-Management-Software"
              >
                <div className={styles.dribbble__image}>
                  <Image
                    alt="Salesforce - CRM Invoice Management Software"
                    className={styles.img}
                    src={whyUs_section_2_04}
                  />
                </div>
                <div className={styles.dribbble__content}>
                  <div className={styles.dribbble__info}>
                    <p className={styles.dribbble__company}>Dribbble</p>
                    <h4 className={styles.dribbble__title}>
                      Salesforce - CRM Invoice Management Software
                    </h4>
                  </div>
                  <ul className={styles.dribbble__stats}>
                    <li className={styles.dribbble__stat}>
                      <div className={styles.category}>⭐ 44.5k Views</div>
                    </li>
                    <li className={styles.dribbble__stat}>
                      <div className={styles.category}>
                        🏆 23 days in the top
                      </div>
                    </li>
                  </ul>
                </div>
              </a>
            </li>
          </ul>
        </section>
        <section className={styles.section_3}>
          <div className={styles.header_section_3}>
            <h2 className={styles.title_section_3}>What else?</h2>
          </div>
          <ul className={styles.list}>
            <li className={styles.item}>
              <div className={styles.sticky}>
                <div className={styles.title}>
                  <div className={styles.row}>
                    <h3>
                      We&apos;re experts in <br />
                      modern trends and
                    </h3>
                  </div>
                  <div className={styles.row}>
                    <h3>offer</h3>
                    <div className={styles.image}>
                      <Image
                        alt="Mary S."
                        className={styles.img}
                        src={aboutSection_4_01}
                      />
                    </div>
                    <h3>practical</h3>
                  </div>
                  <div className={styles.row}>
                    <h3>solutions.</h3>
                  </div>
                  <div className={styles.quote}>“</div>
                </div>
                <div className={styles.text}>
                  <p>
                    Customized <span> design solutions </span> to fit your needs
                    perfectly
                  </p>
                </div>
              </div>
              <ul className={styles.reviews}>
                <li className={styles.review}>
                  <div className={styles.wrapper}>
                    <div className={styles.header}>
                      <div className={styles.image}>
                        <Image
                          alt="Stan Reznik"
                          className={styles.img}
                          src={whyus_reviews_01}
                        />
                      </div>
                      <div className={styles.info}>
                        <h4 className={styles.name}>Stan Reznik</h4>
                        <p className={styles.position}>Director of Marketing</p>
                      </div>
                    </div>
                    <div className={styles.body}>
                      <p className={styles.text}>
                        Rondesignlab has a very good eye for what is
                        <span> modern </span> and what looks good while making
                        it
                        <span> functional. </span>
                      </p>
                      <div className={styles.quote}>“</div>
                    </div>
                    <div className={styles.footer}>
                      <div className={styles.category}>🏢 Healthcare</div>
                    </div>
                  </div>
                  <a
                    target="_blank"
                    className={styles.link}
                    href="https://clutch.co/profile/rondesignlab#review-1800933"
                  >
                    View full review
                  </a>
                </li>
                <li className={styles.review}>
                  <div className={styles.wrapper}>
                    <div className={styles.header}>
                      <div className={styles.image}>
                        <Image
                          alt="Diana Regal"
                          className={styles.img}
                          src={whyus_reviews_02}
                        />
                      </div>
                      <div className={styles.info}>
                        <h4 className={styles.name}>Diana Regal</h4>
                        <p className={styles.position}>
                          VP of R&D, Payer Compass
                        </p>
                      </div>
                    </div>
                    <div className={styles.body}>
                      <p className={styles.text}>
                        They cared a great deal about
                        <span> bringing our vision </span> for the site to life.
                        Their project manager was wonderful.
                      </p>
                      <div className={styles.quote}>“</div>
                    </div>
                    <div className={styles.footer}>
                      <div className={styles.category}>
                        🏢 Consumer Products
                      </div>
                    </div>
                  </div>
                  <a
                    target="_blank"
                    className={styles.link}
                    href="https://clutch.co/profile/rondesignlab#review-1800933"
                  >
                    View full review
                  </a>
                </li>
                <li className={styles.review}>
                  <div className={styles.wrapper}>
                    <div className={styles.header}>
                      <div className={styles.image}>
                        <Image
                          alt="Vivek Jagtap"
                          className={styles.img}
                          src={whyus_reviews_03}
                        />
                      </div>
                      <div className={styles.info}>
                        <h4 className={styles.name}>Vivek Jagtap</h4>
                        <p className={styles.position}>
                          Head of Product, Broker
                        </p>
                      </div>
                    </div>
                    <div className={styles.body}>
                      <p className={styles.text}>
                        They really understood what we needed and it
                        <span> reflected in their work. </span> Speed and design
                        skills were also key to success.
                      </p>
                      <div className={styles.quote}>“</div>
                    </div>
                    <div className={styles.footer}>
                      <div className={styles.category}>🏢 Real Estate</div>
                    </div>
                  </div>
                  <a
                    target="_blank"
                    className={styles.link}
                    href="https://clutch.co/profile/rondesignlab#review-1800933"
                  >
                    View full review
                  </a>
                </li>
              </ul>
            </li>
            <li className={styles.item}>
              <ul className={styles.reviews}>
                <li className={styles.review}>
                  <div className={styles.wrapper}>
                    <div className={styles.header}>
                      <div className={styles.image}>
                        <Image
                          alt="Ben Callaghan"
                          className={styles.img}
                          src={whyus_reviews_04}
                        />
                      </div>
                      <div className={styles.info}>
                        <h4 className={styles.name}>Ben Callaghan</h4>
                        <p className={styles.position}>
                          VP of Launch, Goodroot
                        </p>
                      </div>
                    </div>
                    <div className={styles.body}>
                      <p className={styles.text}>
                        Rondesignlabs employs top-level designers from around
                        the world. Amazing design work.
                      </p>
                      <div className={styles.quote}>“</div>
                    </div>
                    <div className={styles.footer}>
                      <div className={styles.category}>🏢 Healthcare</div>
                    </div>
                  </div>
                  <a
                    target="_blank"
                    className={styles.link}
                    href="https://clutch.co/profile/rondesignlab#review-1800933"
                  >
                    View full review
                  </a>
                </li>
                <li className={styles.review}>
                  <div className={styles.wrapper}>
                    <div className={styles.header}>
                      <div className={styles.image}>
                        <Image
                          alt="Alex Nozdrin"
                          className={styles.img}
                          src={whyus_reviews_05}
                        />
                      </div>
                      <div className={styles.info}>
                        <h4 className={styles.name}>Alex Nozdrin</h4>
                        <p className={styles.position}>CEO, Goodworks</p>
                      </div>
                    </div>
                    <div className={styles.body}>
                      <p className={styles.text}>
                        They showed a variety of <span> skill sets </span> on
                        their team — from branding, illustration, and UX,to
                        animation.
                      </p>
                      <div className={styles.quote}>“</div>
                    </div>
                    <div className={styles.footer}>
                      <div className={styles.category}>🏢 Software</div>
                    </div>
                  </div>
                  <a
                    target="_blank"
                    className={styles.link}
                    href="https://clutch.co/profile/rondesignlab#review-1800933"
                  >
                    View full review
                  </a>
                </li>
                <li className={styles.review}>
                  <div className={styles.wrapper}>
                    <div className={styles.header}>
                      <div className={styles.image}>
                        <Image
                          alt="Don Stein"
                          className={styles.img}
                          src={whyus_reviews_06}
                        />
                      </div>
                      <div className={styles.info}>
                        <h4 className={styles.name}>Don Stein</h4>
                        <p className={styles.position}>
                          Head of Product, Broker
                        </p>
                      </div>
                    </div>
                    <div className={styles.body}>
                      <p className={styles.text}>
                        Rondesignlab’s <span> speed and quality </span> of
                        delivery was better than most agencies. The team paid
                        close attention to detail.
                      </p>
                      <div className={styles.quote}>“</div>
                    </div>
                    <div className={styles.footer}>
                      <div className={styles.category}>🏢 Telecoms</div>
                    </div>
                  </div>
                  <a
                    target="_blank"
                    className={styles.link}
                    href="https://clutch.co/profile/rondesignlab#review-1800933"
                  >
                    View full review
                  </a>
                </li>
              </ul>
              <div className={styles.sticky}>
                <div className={styles.title}>
                  <div className={styles.row}>
                    <h3>Our team consists of</h3>
                  </div>
                  <div className={styles.row}>
                    <h3>specialists</h3>
                    <div className={styles.image}>
                      <Image
                        alt="Jack L."
                        className={styles.img}
                        src={aboutSection_4_02}
                      />
                    </div>
                    <h3>with</h3>
                  </div>
                  <div className={styles.row}>
                    <h3>vast experience.</h3>
                  </div>
                  <div className={styles.quote}>“</div>
                </div>
                <div className={styles.text}>
                  <p>
                    Rely on our top-notch designers to transform your ideas into
                    reality. We uphold high standards, meet deadlines, and
                    deliver tasks promptly.<span> 8+ Years of experience.</span>
                  </p>
                </div>
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.sticky}>
                <div className={styles.title}>
                  <div className={styles.row}>
                    <h3>Our primary goal is</h3>
                  </div>
                  <div className={styles.row}>
                    <h3>to identify</h3>
                    <div className={styles.image}>
                      <Image
                        alt="Stan D."
                        className={styles.img}
                        src={aboutSection_4_03}
                      />
                    </div>
                    <h3>your</h3>
                  </div>
                  <div className={styles.row}>
                    <h3>
                      project&apos;s needs and
                      <br />
                      objectives.
                    </h3>
                  </div>
                  <div className={styles.quote}>“</div>
                </div>
                <div className={styles.text}>
                  <p>
                    We stay ahead of trends to deliver innovative and
                    <span> functional design solutions,</span> providing
                    versatility that caters precisely to your
                    <span> unique requirements.</span>
                  </p>
                </div>
              </div>
              <ul className={styles.reviews}>
                <li className={styles.review}>
                  <div className={styles.wrapper}>
                    <div className={styles.header}>
                      <div className={styles.image}>
                        <Image
                          alt="Eden D."
                          className={styles.img}
                          src={whyus_reviews_07}
                        />
                      </div>
                      <div className={styles.info}>
                        <h4 className={styles.name}>Eden D.</h4>
                        <p className={styles.position}>CTO, Cryptocurrency</p>
                      </div>
                    </div>
                    <div className={styles.body}>
                      <p className={styles.text}>
                        Their unique talent is in their ability to
                        <span> extract goals and ideas </span> and put them into
                        an excellent final product.
                      </p>
                      <div className={styles.quote}>“</div>
                    </div>
                    <div className={styles.footer}>
                      <div className={styles.category}>🏢 Financial</div>
                    </div>
                  </div>
                  <a
                    target="_blank"
                    className={styles.link}
                    href="https://clutch.co/profile/rondesignlab#review-1800933"
                  >
                    View full review
                  </a>
                </li>
                <li className={styles.review}>
                  <div className={styles.wrapper}>
                    <div className={styles.header}>
                      <div className={styles.image}>
                        <Image
                          alt="Dmitry Terner"
                          className={styles.img}
                          src={whyus_reviews_08}
                        />
                      </div>
                      <div className={styles.info}>
                        <h4 className={styles.name}>Dmitry Terner</h4>
                        <p className={styles.position}>Websites Manager</p>
                      </div>
                    </div>
                    <div className={styles.body}>
                      <p className={styles.text}>
                        Their eye for visual composition and motion in support
                        of the established UX was <span> very impressive.</span>
                        <span>functional. </span>
                      </p>
                      <div className={styles.quote}>“</div>
                    </div>
                    <div className={styles.footer}>
                      <div className={styles.category}>🏢 Education</div>
                    </div>
                  </div>
                  <a
                    target="_blank"
                    className={styles.link}
                    href="https://clutch.co/profile/rondesignlab#review-1800933"
                  >
                    View full review
                  </a>
                </li>
                <li className={styles.review}>
                  <div className={styles.wrapper}>
                    <div className={styles.header}>
                      <div className={styles.image}>
                        <Image
                          alt="Markus Skergeth"
                          className={styles.img}
                          src={whyus_reviews_09}
                        />
                      </div>
                      <div className={styles.info}>
                        <h4 className={styles.name}>Markus Skergeth</h4>
                        <p className={styles.position}>CEO, Goodworks</p>
                      </div>
                    </div>
                    <div className={styles.body}>
                      <p className={styles.text}>
                        They took their time to
                        <span> really understand our needs </span> and
                        challenges. They completed the job on time.
                      </p>
                      <div className={styles.quote}>“</div>
                    </div>
                    <div className={styles.footer}>
                      <div className={styles.category}>🏢 Software</div>
                    </div>
                  </div>
                  <a
                    target="_blank"
                    className={styles.link}
                    href="https://clutch.co/profile/rondesignlab#review-1800933"
                  >
                    View full review
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section className={styles.section_4}>
          <div className={styles.header_section_4}>
            <h2 className={styles.section_4_title}>
              What does it entail to achieve excellence in the field of design?
            </h2>
            <div className={styles.section_4_info}>
              <p className={styles.section_4_text}>
                A couple of words
                <br /> about our vision.
              </p>
            </div>
          </div>
          <div className={styles.body_section_4}>
            <div className={styles.section_4_text}>
              <div className={styles.section_4_work_info}>
                <h1 className={styles.section_4_work_heading}>Evolving</h1>
                <p className={styles.section_4_work_title}>
                  Excellence is meeting precise project needs by
                  <span> understanding everyone involved: </span> the client,
                  users, and algorithms.
                </p>
              </div>
              <div className={styles.section_4_work_info}>
                <h1 className={styles.section_4_work_heading}>Design</h1>
                <p className={styles.section_4_work_title}>
                  Creating designs that are user-friendly and visually appealing
                  <span> is key.</span>
                </p>
              </div>
              <div className={styles.section_4_work_info}>
                <h1 className={styles.section_4_work_heading}>Mastery</h1>
                <p className={styles.section_4_work_title}>
                  Continuous self-improvement involves staying updated,
                  following trends, and occasionally pioneering new ones — a
                  journey toward
                  <span> being exceptional.</span>
                </p>
              </div>
              <div className={styles.section_4_work_info}>
                <h1 className={styles.section_4_work_heading}>Excellence</h1>
                <p className={styles.section_4_work_title}>
                  Excellence acts as our jet engine, propelling us to greater
                  heights and
                  <span> faster success.</span>
                </p>
              </div>
            </div>
            <div className={styles.section_4_photo}>
              <div className={styles.section_4_work_photo_item}>
                <Image src={section_4_1} alt="" className={styles.img} />
              </div>
              <div className={styles.section_4_work_photo_item}>
                <Image src={section_4_2} alt="" className={styles.img} />
              </div>
              <div className={styles.section_4_work_photo_item}>
                <Image src={section_4_3} alt="" className={styles.img} />
              </div>
              <div className={styles.section_4_work_photo_item}>
                <Image src={section_4_4} alt="" className={styles.img} />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section_5}>
          <div className={styles.header_section_5}>
            <h2 className={styles.section_5_title}>
              Ready to transform your idea with the finest expertise?
            </h2>
          </div>
          <div className={styles.body_section_5}>
            <div className={styles.left}>
              <h3 className={styles.header}>
                First things first... please share your contact details
              </h3>
              <p className={styles.title}>
                This will help our team get in touch with you
                <span> within 24 to 48 hours via email.</span>
              </p>
            </div>
            <div className={styles.right}>
              <div className={styles.header}>
                <h3 className={styles.head_text}>
                  First things first...please share your professional contact
                  details*
                </h3>
                <p className={styles.title}>
                  This will help our team get in touch with you within 24 to 48
                  hours via email.
                </p>
              </div>
              <form className={styles.form}>
                <div className={styles.input}>
                  <label for="firstName">First name *</label>
                  <input type="text" name="firstName" placeholder="Saeed" />
                </div>
                <div className={styles.input}>
                  <label for="lastName">Last name *</label>
                  <input type="text" name="lastName" placeholder="Khaled" />
                </div>
                <div className={styles.input}>
                  <label for="phoneNumber">Phone number *</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="201020304050"
                  />
                </div>
                <div className={styles.input}>
                  <label for="email">Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className={styles.input}>
                  <label for="company">Company *</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Acme Corporation"
                  />
                </div>
              </form>
              <button href="" className={styles.button}>
                <p>OK</p>
                <svg height="13" width="16">
                  <path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path>
                </svg>
              </button>
              <div className={styles.counter}>
                <span>1</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 16 16"
                  class="shouldFlipIfRtl"
                >
                  <path
                    d="M8.47 1.97a.75.75 0 0 1 1.06 0l4.897 4.896a1.25 1.25 0 0 1 0 1.768L9.53 13.53a.75.75 0 0 1-1.06-1.06l3.97-3.97H1.75a.75.75 0 1 1 0-1.5h10.69L8.47 3.03a.75.75 0 0 1 0-1.06"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section_6}>
          <div className={styles.talk__body}>
            <div className={styles.talk__text}>Shall we chat?</div>
            <Link
              href="mailto:hello@rondesignlab.com"
              className={styles.talk__link}
            >
              hello@rondesignlab.com
            </Link>
          </div>
          <div className={styles.talk__title}>
            <div className={styles.talk__wrapper}>
              <h3>
                To persuade even the
                <br />
                most skeptical, we&apos;ve
              </h3>
              <div className={styles.talk__motions}>
                <div className={styles.talk__motion}>
                  designed
                  <div className={styles.talk__image}>
                    <div>
                      <Image
                        className={styles.img}
                        alt="Let us show your strength"
                        src={yellow_girl_smile}
                      />
                    </div>
                    <div className={styles.talk__background}></div>
                  </div>
                  <p>Pilot</p>
                </div>
                <button
                  title="Open Typeform Say Hello"
                  className={styles.talk__button}
                >
                  <svg
                    width="32"
                    height="16"
                    viewBox="0 0 32 16"
                    fill="black"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Arrow 1"
                      d="M31.7071 8.70711C32.0976 8.31658 32.0976 7.68342 31.7071 7.29289L25.3431 0.928932C24.9526 0.538408 24.3195 0.538408 23.9289 0.928932C23.5384 1.31946 23.5384 1.95262 23.9289 2.34315L29.5858 8L23.9289 13.6569C23.5384 14.0474 23.5384 14.6805 23.9289 15.0711C24.3195 15.4616 24.9526 15.4616 25.3431 15.0711L31.7071 8.70711ZM0 9H31V7H0V9Z"
                      fill="inherit"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <SayHallo />
    </>
  );
}

export default WhyUs;
