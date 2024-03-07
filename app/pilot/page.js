"use client";
import Link from "next/link";
import React from "react";
import styles from "./pilot.module.css";
import Image from "next/image";
import yellow_girl_smile from "@/public/assets/yellow-girl-smile.webp";
import CheckMark from "@/public/assets/checkMark.svg";
import HeroImg from "@/public/assets/hero_pilot.webp";
import circleSection from "@/public/assets/circleSection_1.svg";
import GoodrootClutchReview from "@/public/assets/GoodrootClutchReview.webp";
import MorticeClutchReview from "@/public/assets/MorticeClutchReview.webp";
import BrokerClutchReview from "@/public/assets/BrokerClutchReview.webp";
import DrippiClutchReview from "@/public/assets/DrippiClutchReview.webp";
import benCallaghan from "@/public/assets/ben-callaghan.webp";
import vivek_jagtap from "@/public/assets/vivek-jagtap.webp";
import dean_h from "@/public/assets/dean-h.webp";
import nick_cooke from "@/public/assets/nick-cooke.webp";
import bg_section_6_pilot from "@/public/assets/bg_section_6_pilot.webp";
import Star from "@/public/assets/star.svg";
import clutch_logo from "@/public/assets/clutch-logo.svg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Footer from "@/app/components/footer";
import HeaderPilot from "./header";
import SayHallo from "../sayHallo/page";
const { useEffect } = require("react");

gsap.registerPlugin(ScrollTrigger);

function Pilot() {
  useEffect(() => {
    // ----------- Open Say Hallo Form ----------- //
    const closeBtn = document.querySelector(
      ".header_header__sjyk8 .header_right__mGDpM .header_btn__Jtgac"
    );
    const SayHalloPage = document.querySelector(".SayHalloPage");
    const footerLink = document.querySelector("#SayHalloLink");
    const getFreeEstimate = document.querySelector(".header .right .btn");
    const header_link = document.querySelector(
      ".header .left .link:last-child"
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
    // ----------- Animation Scale Photo ----------- //
    gsap.to(".pilot_section_6_container__cydN2", {
      scale: "1.1",
      duration: 1,
      scrollTrigger: {
        trigger: ".pilot_section_6_container__cydN2",
        start: "top center",
        end: "+=500",
        scrub: 1,
      },
    });
  });
  return (
    <>
      <HeaderPilot />
      <main className={styles.page}>
        <section className={styles.hero_section}>
          <div className={styles.heading}>
            <h1>
              <div className={styles.top}>
                Pilot
                <div className={styles.img_bar}>
                  <div className={styles.div_img}>
                    <Image
                      className={styles.img}
                      src={HeroImg}
                      alt="Description of the image"
                      style={{
                        width: "85%",
                        height: "auto",
                      }}
                    />
                  </div>
                  <div className={styles.background}></div>
                </div>
                Sprint
              </div>
            </h1>
          </div>
          <div className={styles.title}>
            <p>
              We know you have <span>innovative ideas.</span> Let’s spread it
              with the
              <br /> entire world. How? Just reach us, and we will help you
              embody
              <br /> the ambitious dream project.
              <span> Quickly. Effectively. Joyfully.</span>
              <br /> Consider initiating a <span>pilot collaboration</span> with
              us.
            </p>
          </div>
        </section>
        <section className={styles.section_1}>
          <ul className={styles.pilot__wrapper}>
            <li className={styles.pilot__enterprise}>
              <div className={styles.pilot__box}>
                <div className={styles.sprints__wrapper}>
                  <div className={styles.sprints__header}>
                    <div className={styles.pilot__info}>
                      <h3 className={styles.pilot__title}>For Enterprise</h3>
                      <p className={styles.pilot__text}>
                        Ideal for leaders overseeing new departments to enhance
                        existing teams.
                      </p>
                    </div>
                  </div>
                  <div className={styles.sprints__body}>
                    <ul className={styles.pilot__list}>
                      <li className={styles.pilot__item}>
                        <Image alt="Check mark icon" src={CheckMark} />
                        Product-Market Fit
                      </li>
                      <li className={styles.pilot__item}>
                        <Image alt="Check mark icon" src={CheckMark} />
                        Test the Hypothesis
                      </li>
                      <li className={styles.pilot__item}>
                        <Image alt="Check mark icon" src={CheckMark} />
                        UX Architecture
                      </li>
                      <li className={styles.pilot__item}>
                        <Image alt="Check mark icon" src={CheckMark} />
                        Project Road Map
                      </li>
                      <li className={styles.pilot__item}>
                        <Image alt="Check mark icon" src={CheckMark} />
                        Agile Design Process
                      </li>
                      <li className={styles.pilot__item}>
                        <Image alt="Check mark icon" src={CheckMark} />
                        Client-Focused Upgrades
                      </li>
                      <li className={styles.pilot__item}>
                        <Image alt="Check mark icon" src={CheckMark} />
                        Enterprise-scale Interface
                      </li>
                      <li className={styles.pilot__item}>
                        <Image alt="Check mark icon" src={CheckMark} />
                        User Journey Optimization
                      </li>
                      <li className={styles.pilot__item}>
                        <Image alt="Check mark icon" src={CheckMark} />
                        Flexible Team
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.sprints__footer}>
                  <a className={styles.pilot__link}>Check</a>
                </div>
              </div>
            </li>
            <li className={styles.pilot__startups}>
              <div className={styles.pilot__box}>
                <div className={styles.sprints__wrapper}>
                  <div className={styles.sprints__header}>
                    <div className={styles.pilot__info}>
                      <h3 className={styles.pilot__title}>For Startups</h3>
                      <p className={styles.pilot__text}>
                        This service helps your tech department boost
                        conversions and attract investments.
                      </p>
                    </div>
                  </div>
                  <div className={styles.sprints__body}>
                    <ul className={styles.pilot__list}>
                      <li className={styles.pilot__item}>
                        <Image alt="Check mark icon" src={CheckMark} />
                        Product Refinement
                      </li>
                      <li className={styles.pilot__item}>
                        <Image alt="Check mark icon" src={CheckMark} />
                        User Trust Building
                      </li>
                      <li className={styles.pilot__item}>
                        <Image alt="Check mark icon" src={CheckMark} />
                        Belief Instigation
                      </li>
                      <li className={styles.pilot__item}>
                        <Image alt="Check mark icon" src={CheckMark} />
                        Fixed Team
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.sprints__footer}>
                  <a className={styles.pilot__link}>Check</a>
                </div>
              </div>
            </li>
            <li className={styles.pilot__you}>
              <div className={styles.pilot__box}>
                <div className={styles.sprints__wrapper}>
                  <div className={styles.sprints__header}>
                    <div className={styles.pilot__info}>
                      <h3 className={styles.pilot__title}>For You</h3>
                      <p className={styles.pilot__text}>
                        Your idea or concept = our solution.
                      </p>
                    </div>
                  </div>
                  <div className={styles.sprints__body}>
                    <ul className={styles.pilot__list}>
                      <li className={styles.pilot__item}>
                        <Image alt="Check mark icon" src={CheckMark} />
                        Formulating Business Goals
                      </li>
                      <li className={styles.pilot__item}>
                        <Image alt="Check mark icon" src={CheckMark} />
                        Concept &amp; Moodboard
                      </li>
                      <li className={styles.pilot__item}>
                        <Image alt="Check mark icon" src={CheckMark} />
                        Optimizing the Prototype
                      </li>
                      <li className={styles.pilot__item}>
                        <Image alt="Check mark icon" src={CheckMark} />
                        Fixed Team
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.sprints__footer}>
                  <a className={styles.pilot__link}>Check</a>
                </div>
              </div>
            </li>
            <li className={styles.pilot__price}>
              <div className={styles.pilot__box}>
                <div className={styles.sprints__header}>
                  <div className={styles.pilot__info}>
                    <p className={styles.pilot__text}>
                      The price and duration of the pilot are determined based
                      on your choice and request.
                    </p>
                  </div>
                </div>
                <div className={styles.sprints__footer}>
                  <div className={styles.pilot__wrapper}>
                    <div className={styles.pilot__content}>
                      <p>starts with</p>
                      <div className={styles.pilot__span}>
                        <span>$17,000</span>
                      </div>
                    </div>
                    <div className={styles.pilot__content}>
                      <p>from</p>
                      <div className={styles.pilot__span}>
                        <span>2 weeks</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className={styles.pilot__consulting}>
              <div className={styles.pilot__box}>
                <div className={styles.sprints__header}>
                  <div className={styles.pilot__info}>
                    <h3 className={styles.pilot__title}>Consulting</h3>
                    <p className={styles.pilot__text}>
                      Leverage our expertise to implement your project.
                    </p>
                  </div>
                </div>
                <div className={styles.sprints__body}>
                  <ul className={styles.pilot__list}>
                    <li className={styles.pilot__item}>
                      <Image alt="Check mark icon" src={CheckMark} />
                      Risk Analysis
                    </li>
                    <li className={styles.pilot__item}>
                      <Image alt="Check mark icon" src={CheckMark} />
                      Strategic Planning
                    </li>
                    <li className={styles.pilot__item}>
                      <Image alt="Check mark icon" src={CheckMark} />
                      Project Road Map
                    </li>
                  </ul>
                </div>
                <div className={styles.sprints__footer}>
                  <div className={styles.pilot__wrapper}>
                    <div className={styles.pilot__content}>
                      <p>from</p>
                      <div className={styles.pilot__span}>
                        <span>$100</span>
                        <p>/h</p>
                      </div>
                    </div>
                    <a className={styles.pilot__link}>Check</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section className={styles.section_2}>
          <div className={styles.section__header}>
            <div className={styles.section__content}>
              <h2 className={styles.section__title}>For Enterprise</h2>
              <div className={styles.section__info}>
                <p className={styles.section__text}>
                  Designed for those spearheading <space />
                  <span>
                    new <br /> projects and team leaders.
                  </span>
                </p>
                <ul className={styles.section__list}>
                  <li className={styles.section__item}>
                    <Image className={styles.img} alt="" src={circleSection} />
                    Product-Market Fit
                  </li>
                  <li className={styles.section__item}>
                    <Image className={styles.img} alt="" src={circleSection} />
                    UX Architecture
                  </li>
                  <li className={styles.section__item}>
                    <Image className={styles.img} alt="" src={circleSection} />
                    Client-Focused Upgrades
                  </li>
                  <li className={styles.section__item}>
                    <Image className={styles.img} alt="" src={circleSection} />
                    Flexible Team
                  </li>
                </ul>
              </div>
            </div>
            <button
              type="button"
              className={styles.section__button}
              title="Open Typeform Pilot"
            >
              Book a pilot 👉
            </button>
          </div>
          <div className={styles.section__wrapper}>
            <div className={styles.section__body}>
              <div className={styles.section__top}>
                <div className={styles.section__left}>
                  <h3 className={styles.section__title}>
                    Goodroot Application
                  </h3>
                  <p className={styles.section__text}>
                    You need a <span> strength team</span> for embodiment of
                    your project.
                    <span> We have it. </span>
                    Deadline is a <span>deadline.</span> We <span>honor </span>
                    deadlines. <br /> <br />
                    Our team created an adaptable system, customizable to any
                    brand, with a user-friendly design. We optimized performance
                    through refined application architecture.
                  </p>
                </div>
                <div className={styles.section__right}>
                  <div className={styles.section__image}>
                    <Image
                      alt="Goodroot Clutch Review"
                      src={GoodrootClutchReview}
                      className={styles.img}
                    />
                    <button
                      type="button"
                      className={styles.section__button}
                      title="Download Goodroot PDF"
                    >
                      Download Goodroot PDF
                      <div className={styles.footer__icon}>
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
                  </div>
                </div>
              </div>
              <div className={styles.section__info}>
                <ul className={styles.section__list}>
                  <li className={styles.section__item}>
                    <h3 className={styles.section__subtitle}>HealthTech</h3>
                    <p className={styles.section__text}>Company type</p>
                  </li>
                  <li className={styles.section__item}>
                    <h3 className={styles.section__subtitle}>Application</h3>
                    <p className={styles.section__text}>Project type</p>
                  </li>
                  <li className={styles.section__item}>
                    <h3 className={styles.section__subtitle}>5 People</h3>
                    <p className={styles.section__text}>Pilot team</p>
                  </li>
                </ul>
              </div>
              <div className={styles.section__review}>
                <div className={styles.section__body}>
                  <h3 className={styles.section__subtitle}>
                    Goodroot Clutch Review
                  </h3>
                  <div className={styles.section__wrapper}>
                    <div className={styles.section__content}>
                      <p className={styles.section__text}>
                        Rondesignlabs employs
                        <span> top-level </span> designers from around the
                        world. I was very impressed with their concepts.
                        <br /> <br />
                        They were also
                        <span>
                          <span> </span>
                          accommodating in meeting out tight timeline, payment
                          schedule needs <span> </span>
                        </span>
                        and high standard for design. The project was broken
                        into 6 weeks.
                      </p>
                      <div className={styles.section__quote}>“</div>
                      <div className={styles.about_us__clutch}>
                        <div className={styles.about_us__left}>
                          <div className={styles.left__image}>
                            <Image
                              alt="Clutch logo"
                              src={clutch_logo}
                              className={styles.img}
                            />
                          </div>
                          <div className={styles.left__grade}>
                            <p className={styles.left__value}>5</p>
                            <ul className={styles.left__stars}>
                              <li className={styles.left__star}>
                                <Image
                                  alt="Star"
                                  src={Star}
                                  className={styles.img}
                                />
                              </li>
                              <li className={styles.left__star}>
                                <Image
                                  alt="Star"
                                  className={styles.img}
                                  src={Star}
                                />
                              </li>
                              <li className={styles.left__star}>
                                <Image
                                  alt="Star"
                                  className={styles.img}
                                  src={Star}
                                />
                              </li>
                              <li className={styles.left__star}>
                                <Image
                                  alt="Star"
                                  className={styles.img}
                                  src={Star}
                                />
                              </li>
                              <li className={styles.left__star}>
                                <Image
                                  alt="Star"
                                  className={styles.img}
                                  src={Star}
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className={styles.about_us__right}>
                          <button
                            target="_blank"
                            className={styles.right__link}
                            href="https://clutch.co/profile/rondesignlab#reviews"
                          >
                            View all reviews
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className={styles.body_section__human}>
                      <div className={styles.body_section__image}>
                        <Image
                          alt="<span>Ben Callaghan, </span> VP,
		<br /> Launch at Goodroot"
                          loading="lazy"
                          className={styles.img}
                          src={benCallaghan}
                        />
                      </div>
                      <p className={styles.about_us__name}>
                        <span>Ben Callaghan, </span> VP,
                        <br /> Launch at Goodroot
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.section__bottom}>
                <div className={styles.section__content}>
                  <h3 className={styles.section__subtitle}>
                    However, that’s not all…
                  </h3>
                  <p className={styles.section__text}>
                    Rondesignlab divided the project into six weeks of sprints
                    that focused on different sets of screens for the health
                    app. They conducted meetings twice a week and delivered
                    tasks on time.
                    <span>
                      <span> </span>
                      The team&apos;s innovative concepts and high design
                      standards highly impressed the client.
                    </span>
                    <br /> <br /> The project was broken into 6 weeks of
                    sprints, each focusing on a different set of screens for the
                    app. The primary goal was to design a breakthrough app in
                    the self-funded health benefits space.
                    <span>
                      <span> </span>
                      Speed of completion and top quality design were the
                      primary drivers of success.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.section__footer}>
              <button
                className={styles.section__button}
                title="Download &amp; Share PDF"
              >
                Download &amp; Share PDF 😊
                <div className={styles.footer__icon}>
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
            </div>
          </div>
        </section>
        <section className={styles.section_3}>
          <div className={styles.section__header}>
            <div className={styles.section__content}>
              <h2 className={styles.section__title}>For Startups</h2>
              <div className={styles.section__info}>
                <p className={styles.section__text}>
                  Empower your tech department to
                  <span> optimize conversions, attract investments, </span> and
                  achieve business goals through refined digital strategies and
                  <span> enhanced user experiences.</span>
                </p>
                <ul className={styles.section__list}>
                  <li className={styles.section__item}>
                    <Image
                      className={styles.img}
                      alt="Circle Icon"
                      src={circleSection}
                    />
                    Product Refinement
                  </li>
                  <li className={styles.section__item}>
                    <Image
                      className={styles.img}
                      alt="Circle Icon"
                      src={circleSection}
                    />
                    User Trust Building
                  </li>
                  <li className={styles.section__item}>
                    <Image
                      className={styles.img}
                      alt="Circle Icon"
                      src={circleSection}
                    />
                    Belief Instigation
                  </li>
                  <li className={styles.section__item}>
                    <Image
                      className={styles.img}
                      alt="Circle Icon"
                      src={circleSection}
                    />
                    Fixed Team
                  </li>
                </ul>
              </div>
            </div>
            <button
              type="button"
              className={styles.section__button}
              title="Open Typeform Pilot"
            >
              Book a pilot 👉
            </button>
          </div>
          <div className={styles.section__wrapper}>
            <div className={styles.section__body}>
              <div className={styles.section__top}>
                <div className={styles.section__left}>
                  <h3 className={styles.section__title}>Broker Application</h3>
                  <p className={styles.section__text}>
                    During the project&apos;s development,
                    <span>
                      <span> </span>
                      the interface became overly complex, requiring
                      extensiveuser training.
                    </span>
                    <br /> <br />
                    Our solution streamlined key flows into
                    <span> intuitive navigation, </span> simplifying access to
                    main functions and reducing the need for support and
                    training.
                  </p>
                </div>
                <div className={styles.section__right}>
                  <div className={styles.section__image}>
                    <Image
                      className={styles.img}
                      alt="Broker Clutch Review"
                      src={BrokerClutchReview}
                    />
                    <button
                      type="button"
                      className={styles.section__button}
                      title="Download Broker PDF"
                    >
                      Download Broker PDF
                      <div className={styles.footer__icon}>
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
                  </div>
                </div>
              </div>
              <div className={styles.section__info}>
                <ul className={styles.section__list}>
                  <li className={styles.section__item}>
                    <h3 className={styles.section__subtitle}>≈ $25 00 000 +</h3>
                    <p className={styles.section__text}>Investments received</p>
                  </li>
                  <li className={styles.section__item}>
                    <h3 className={styles.section__subtitle}>Application</h3>
                    <p className={styles.section__text}>Project type</p>
                  </li>
                  <li className={styles.section__item}>
                    <h3 className={styles.section__subtitle}>57% lower</h3>
                    <p className={styles.section__text}>Churn Rate</p>
                  </li>
                </ul>
              </div>
              <div className={styles.section__review}>
                <div className={styles.section__body}>
                  <h3 className={styles.section__subtitle}>
                    Broker Clutch Review
                  </h3>
                  <div className={styles.section__wrapper}>
                    <div className={styles.section__content}>
                      <p className={styles.section__text}>
                        <span> They really understood what we needed </span> and
                        it reflected in their work. <br /> <br /> What stood out
                        the most was their eagerness to present solutions that
                        were helpful to the client.
                        <span>
                          Their speed and design skills were also key to
                          success.
                        </span>
                      </p>
                      <div className={styles.section__quote}>“</div>
                      <div className={styles.about_us__clutch}>
                        <div className={styles.about_us__left}>
                          <div className={styles.left__image}>
                            <Image
                              className={styles.img}
                              alt="Clutch logo"
                              src={clutch_logo}
                            />
                          </div>
                          <div className={styles.left__grade}>
                            <p className={styles.left__value}>5</p>
                            <ul className={styles.left__stars}>
                              <li className={styles.left__star}>
                                <Image
                                  alt="Star"
                                  src={Star}
                                  className={styles.img}
                                />
                              </li>
                              <li className={styles.left__star}>
                                <Image
                                  alt="Star"
                                  src={Star}
                                  className={styles.img}
                                />
                              </li>
                              <li className={styles.left__star}>
                                <Image
                                  alt="Star"
                                  src={Star}
                                  className={styles.img}
                                />
                              </li>
                              <li className={styles.left__star}>
                                <Image
                                  alt="Star"
                                  src={Star}
                                  className={styles.img}
                                />
                              </li>
                              <li className={styles.left__star}>
                                <Image
                                  alt="Star"
                                  src={Star}
                                  className={styles.img}
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className={styles.about_us__right}>
                          <button
                            target="_blank"
                            className={styles.right__link}
                            href="https://clutch.co/profile/rondesignlab#reviews"
                          >
                            View all reviews
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className={styles.body_section__human}>
                      <div className={styles.body_section__image}>
                        <Image
                          alt="<span>Vivek Jagtap, </span> Head of
		<br /> Product, Broker Network"
                          src={vivek_jagtap}
                          className={styles.img}
                        />
                      </div>
                      <p className={styles.about_us__name}>
                        <span>Vivek Jagtap, </span> Head of
                        <br /> Product, Broker Network
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.section__bottom}>
                <div className={styles.section__content}>
                  <h3 className={styles.section__subtitle}>But wait…</h3>
                  <p className={styles.section__text}>
                    Thank you for your contribution to making the 2.0 app for
                    Broker Network. Because of your support &amp; excellence in
                    design, we as an app company have managed to
                    <span> raise 50 million for BrokerNetwork App.</span>
                    <br /> <br />
                    It wouldn&apos;t have been possible without your &amp;
                    team&apos;s efforts. What distinguishes the design in the
                    app is - simplicity &amp; clarity reflecting the app obout
                    our business which helped us raise the vast capital. Also,
                    to add to the design comment -
                    <span>
                      even after being a new concept for app, we need not
                      educate &amp; design help them to thain without any human
                      support.
                    </span>
                    <br /> <br />
                    Thank you from BrokerNetwork team.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.section__footer}>
              <button
                className={styles.section__button}
                title="Download &amp; Share PDF"
              >
                Download &amp; Share PDF 😊
                <div className={styles.footer__icon}>
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
            </div>
          </div>
        </section>
        <section className={styles.section_4}>
          <div className={styles.section__header}>
            <div className={styles.section__content}>
              <h2 className={styles.section__title}> For You</h2>
              <div className={styles.section__info}>
                <p className={styles.section__text}>
                  If you&apos;ve got an idea brewing, we&apos;re here
                  <span> to turn it into a vibrant reality.</span> From crafting
                  prototypes to shaping your business goals, developing
                  concepts, creating mood boards, and understanding your needs,
                  <span> we&apos;re hands-on every step of the way.</span>
                </p>
                <ul className={styles.section__list}>
                  <li className={styles.section__item}>
                    <Image
                      className={styles.img}
                      alt="Circle Icon"
                      src={circleSection}
                    />
                    Formulating Business Goals
                  </li>
                  <li className={styles.section__item}>
                    <Image
                      className={styles.img}
                      alt="Circle Icon"
                      src={circleSection}
                    />
                    Concept &amp; Moodboard
                  </li>
                  <li className={styles.section__item}>
                    <Image
                      className={styles.img}
                      alt="Circle Icon"
                      src={circleSection}
                    />
                    Optimizing the Prototype
                  </li>
                  <li className={styles.section__item}>
                    <Image
                      className={styles.img}
                      alt="Circle Icon"
                      src={circleSection}
                    />
                    Fixed Team
                  </li>
                </ul>
              </div>
            </div>
            <button
              type="button"
              className={styles.section__button}
              title="Open Typeform Pilot"
            >
              Book a pilot 👉
            </button>
          </div>
          <div className={styles.section__wrapper}>
            <div className={styles.section__body}>
              <div className={styles.section__top}>
                <div className={styles.section__left}>
                  <h3 className={styles.section__title}>Mortice Desktop</h3>
                  <p className={styles.section__text}>
                    Mortice is your go-to system for keeping
                    <span> data secure </span> and boosting team collaboration
                    among engineers. When our client shared their initial idea
                    and basic wireframes, they looked to us for a unified design
                    approach.&nbsp;
                    <br /> <br />
                    Our job? We crafted a <span> seamless UI/UX </span> for
                    desktop and mobile apps, focusing on
                    <span> easy access and user-friendliness.</span>
                  </p>
                </div>
                <div className={styles.section__right}>
                  <div className={styles.section__image}>
                    <Image
                      className={styles.img}
                      alt="Mortice Clutch Review"
                      src={MorticeClutchReview}
                    />
                    <button
                      type="button"
                      className={styles.section__button}
                      title="Download Broker PDF"
                    >
                      Download Mortice PDF
                      <div className={styles.footer__icon}>
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
                  </div>
                </div>
              </div>
              <div className={styles.section__info}>
                <ul className={styles.section__list}>
                  <li className={styles.section__item}>
                    <h3 className={styles.section__subtitle}>SaaS Software</h3>
                    <p className={styles.section__text}>Company type</p>
                  </li>
                  <li className={styles.section__item}>
                    <h3 className={styles.section__subtitle}>Desktop</h3>
                    <p className={styles.section__text}> Project type</p>
                  </li>
                  <li className={styles.section__item}>
                    <h3 className={styles.section__subtitle}>Idea</h3>
                    <p className={styles.section__text}> Project stage</p>
                  </li>
                </ul>
              </div>
              <div className={styles.section__review}>
                <div className={styles.section__body}>
                  <h3 className={styles.section__subtitle}>
                    Mortice Clutch Review
                  </h3>
                  <div className={styles.section__wrapper}>
                    <div className={styles.section__content}>
                      <p className={styles.section__text}>
                        <span>
                          They helped us to really understand how the flow
                          through the application would work
                        </span>
                        <span> </span> and what theusers needed to achieve at
                        each point.
                        <br /> <br />
                        Using other tools like Figma and Miro made it really
                        easy for us to keep updated on designs...
                      </p>
                      <div className={styles.section__quote}>“</div>
                      <div className={styles.about_us__clutch}>
                        <div className={styles.about_us__left}>
                          <div className={styles.left__image}>
                            <Image
                              className={styles.img}
                              alt="Clutch logo"
                              src={clutch_logo}
                            />
                          </div>
                          <div className={styles.left__grade}>
                            <p className={styles.left__value}>5</p>
                            <ul className={styles.left__stars}>
                              <li className={styles.left__star}>
                                <Image
                                  alt="Star"
                                  src={Star}
                                  className={styles.img}
                                />
                              </li>
                              <li className={styles.left__star}>
                                <Image
                                  alt="Star"
                                  src={Star}
                                  className={styles.img}
                                />
                              </li>
                              <li className={styles.left__star}>
                                <Image
                                  alt="Star"
                                  src={Star}
                                  className={styles.img}
                                />
                              </li>
                              <li className={styles.left__star}>
                                <Image
                                  alt="Star"
                                  src={Star}
                                  className={styles.img}
                                />
                              </li>
                              <li className={styles.left__star}>
                                <Image
                                  alt="Star"
                                  src={Star}
                                  className={styles.img}
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className={styles.about_us__right}>
                          <button
                            target="_blank"
                            className={styles.right__link}
                            href="https://clutch.co/profile/rondesignlab#reviews"
                          >
                            View all reviews
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className={styles.body_section__human}>
                      <div className={styles.body_section__image}>
                        <Image
                          alt="<span>Dean H., </span> CEO,
		<br /> Data Privacy Platform
		"
                          src={dean_h}
                          className={styles.img}
                        />
                      </div>
                      <p className={styles.about_us__name}>
                        <span>Dean H., </span> CEO,
                        <br /> Data Privacy Platform
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.section__bottom}>
                <div className={styles.section__content}>
                  <h3 className={styles.section__subtitle}>But wait…</h3>
                  <p className={styles.section__text}>
                    <span>
                      The workflow was excellent, and there was a high level of
                      communication and collaboration.<span> </span>
                    </span>
                    We used Slack for instant communication and Zoom for our
                    progress calls.
                    <br /> <br />
                    <span>
                      Their portfolio of work was far superior to anything else
                      we saw from other companies<span> </span>
                    </span>
                    and they had a really collaborative way of working that made
                    it really quick to work through questions.
                    <span>
                      <span> </span>
                      Overall we were really happy with how the project was run.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.section__footer}>
              <button
                className={styles.section__button}
                title="Download &amp; Share PDF"
              >
                Download &amp; Share PDF 😊
                <div className={styles.footer__icon}>
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
            </div>
          </div>
        </section>
        <section className={styles.section_5}>
          <div className={styles.section__header}>
            <div className={styles.section__content}>
              <h2 className={styles.section__title}>Individual Consulting</h2>
              <div className={styles.section__info}>
                <p className={styles.section__text}>
                  If you&apos;re looking to navigate your path forward, count on
                  us to <span> pinpoint your goals,</span> assess risks, and
                  chart the <span> perfect starting point </span> for your
                  journey ahead.
                </p>
                <ul className={styles.section__list}>
                  <li className={styles.section__item}>
                    <Image
                      className={styles.img}
                      alt="Circle Icon"
                      src={circleSection}
                    />
                    Goal Identification
                  </li>
                  <li className={styles.section__item}>
                    <Image
                      className={styles.img}
                      alt="Circle Icon"
                      src={circleSection}
                    />
                    Risk Analysis
                  </li>
                  <li className={styles.section__item}>
                    <Image
                      className={styles.img}
                      alt="Circle Icon"
                      src={circleSection}
                    />
                    Strategic Planning
                  </li>
                  <li className={styles.section__item}>
                    <Image
                      className={styles.img}
                      alt="Circle Icon"
                      src={circleSection}
                    />
                    Project Road Map
                  </li>
                </ul>
              </div>
            </div>
            <button
              type="button"
              className={styles.section__button}
              title="Open Typeform Pilot"
            >
              Take a Conversation 👉
            </button>
          </div>
          <div className={styles.section__wrapper}>
            <div className={styles.section__body}>
              <div className={styles.section__top}>
                <div className={styles.section__left}>
                  <h3 className={styles.section__title}>Drippi Desktop</h3>
                  <p className={styles.section__text}>
                    Drippi caters to creative minds with a specialized financial
                    platform. It helps you track income,
                    <span> manage taxes easily, </span> and visualize cash
                    flow.&nbsp;
                    <br /> <br />
                    Our team studied how users interact with it and designed a
                    <span> user-friendly web interface. </span> We focused on
                    presenting data, creating tables, simplifying taxes, and
                    ensuring a <span> smooth user experience.</span>
                  </p>
                </div>
                <div className={styles.section__right}>
                  <div className={styles.section__image}>
                    <Image
                      className={styles.img}
                      alt="Drippi Clutch Review"
                      src={DrippiClutchReview}
                    />
                    <button
                      type="button"
                      className={styles.section__button}
                      title="Download Broker PDF"
                    >
                      Download Drippi PDF
                      <div className={styles.footer__icon}>
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
                  </div>
                </div>
              </div>
              <div className={styles.section__info}>
                <ul className={styles.section__list}>
                  <li className={styles.section__item}>
                    <h3 className={styles.section__subtitle}>SaaS Software</h3>
                    <p className={styles.section__text}>Company type</p>
                  </li>
                  <li className={styles.section__item}>
                    <h3 className={styles.section__subtitle}>Desktop</h3>
                    <p className={styles.section__text}>Project type</p>
                  </li>
                  <li className={styles.section__item}>
                    <h3 className={styles.section__subtitle}>Conversions</h3>
                    <p className={styles.section__text}>Project problem</p>
                  </li>
                </ul>
              </div>
              <div className={styles.section__review}>
                <div className={styles.section__body}>
                  <h3 className={styles.section__subtitle}>
                    Drippi Clutch Review
                  </h3>
                  <div className={styles.section__wrapper}>
                    <div className={styles.section__content}>
                      <p className={styles.section__text}>
                        We were really happy with the responses to our notes and
                        <span>
                          <span> </span> how they took them on board for the
                          final iteration.
                        </span>
                        <br /> <br />
                        Upon kicking off the project with them, we were then
                        able to gel really well with them. And of course,
                        <span> we were impressed with the final output!</span>
                      </p>
                      <div className={styles.section__quote}>“</div>
                      <div className={styles.about_us__clutch}>
                        <div className={styles.about_us__left}>
                          <div className={styles.left__image}>
                            <Image
                              className={styles.img}
                              alt="Clutch logo"
                              src={clutch_logo}
                            />
                          </div>
                          <div className={styles.left__grade}>
                            <p className={styles.left__value}>5</p>
                            <ul className={styles.left__stars}>
                              <li className={styles.left__star}>
                                <Image
                                  alt="Star"
                                  src={Star}
                                  className={styles.img}
                                />
                              </li>
                              <li className={styles.left__star}>
                                <Image
                                  alt="Star"
                                  src={Star}
                                  className={styles.img}
                                />
                              </li>
                              <li className={styles.left__star}>
                                <Image
                                  alt="Star"
                                  src={Star}
                                  className={styles.img}
                                />
                              </li>
                              <li className={styles.left__star}>
                                <Image
                                  alt="Star"
                                  src={Star}
                                  className={styles.img}
                                />
                              </li>
                              <li className={styles.left__star}>
                                <Image
                                  alt="Star"
                                  src={Star}
                                  className={styles.img}
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className={styles.about_us__right}>
                          <button
                            target="_blank"
                            className={styles.right__link}
                            href="https://clutch.co/profile/rondesignlab#reviews"
                          >
                            View all reviews
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className={styles.body_section__human}>
                      <div className={styles.body_section__image}>
                        <Image
                          alt="<span>Nick Cooke, </span>
		<br /> Co-Founder, Drippi
		"
                          className={styles.img}
                          src={nick_cooke}
                        />
                      </div>
                      <p className={styles.about_us__name}>
                        <span>Nick Cooke, </span>
                        <br /> Co-Founder, Drippi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.section__bottom}>
                <div className={styles.section__content}>
                  <h3 className={styles.section__subtitle}>
                    However, that’s not all…
                  </h3>
                  <p className={styles.section__text}>
                    <span>
                      We really liked primarily their vibe and portfolio -
                      matched exactly what we were looking for when we were
                      researching.
                    </span>
                    <br /> <br />
                    They were very open, transparent and honest about progress
                    and any time crunch issues we faced.
                    <span>
                      <span></span> The team were very friendly and quick to
                      respond.
                      <span> </span>
                    </span>
                    We were really happy with the responses to our notes and how
                    they took them on board for the final iteration.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.section__footer}>
              <button
                className={styles.section__button}
                title="Download &amp; Share PDF"
              >
                Download &amp; Share PDF 😊
                <div className={styles.footer__icon}>
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
            </div>
          </div>
        </section>
        <section className={styles.section_6}>
          <div className={styles.section_6_container}>
            <div className={styles.trial__wrapper}>
              <div className={styles.trial__image}>
                <Image
                  alt="Pilot Image"
                  src={bg_section_6_pilot}
                  className={styles.img}
                />
              </div>
              <div className={styles.trial__body}>
                <div className={styles.section__text}>
                  Download the <span> PDF version </span>of the Pilot Period
                  information below
                </div>
                <button
                  type="button"
                  title="Download &amp; Share PDF"
                  className={styles.section__button}
                >
                  Download &amp; Share PDF 😊
                  <div className={styles.footer__icon}>
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
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section_7}>
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
            <div className={styles.talk__motion}>
              Let’s
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
              <p>talk</p>
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
        </section>
      </main>
      <Footer />
      <SayHallo />
    </>
  );
}

export default Pilot;
