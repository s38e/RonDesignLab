"use client";
import React from "react";
import HeaderAbout from "./header";
import Footer from "@/app/components/footer";
import "./about-module.css";
import Image from "next/image";
import samsung from "@/public/assets/samsung.svg";
import huawei from "@/public/assets/huawei.svg";
import kohler from "@/public/assets/kohler.svg";
import vessel from "@/public/assets/vessel.svg";
import colgate from "@/public/assets/linkedinLogo.svg";
import fox from "@/public/assets/fox.svg";
import ford from "@/public/assets/ford.svg";
import linkedinLogo from "@/public/assets/linkedinLogo.svg";
import section_3_images from "@/public/assets/section_3_images-9.webp";
import aboutPageHero from "@/public/assets/aboutPageHero.webp";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ArrowRight from "@/public/assets/arrow-right.svg";
import Lenis from "@studio-freight/lenis";
import Star from "@/public/assets/star.svg";
import clutch_logo from "@/public/assets/clutch-logo.svg";
import Clutch from "@/public/assets/clutch.svg";
import CSSDA from "@/public/assets/cssda.webp";
import cssWinner from "@/public/assets/css-winner.svg";
import cssAwards from "@/public/assets/css-awards.webp";
import bestCSS from "@/public/assets/best-css.svg";
import benCallaghan from "@/public/assets/ben-callaghan.webp";
import Link from "next/link";
import yellow_girl_smile from "@/public/assets/yellow-girl-smile.webp";
import SplitType from "split-type";
import aboutSection_4_01 from "@/public/assets/aboutSection_4-01.webp";
import aboutSection_4_02 from "@/public/assets/aboutSection_4-02.webp";
import aboutSection_4_03 from "@/public/assets/aboutSection_4-03.webp";
import aboutSection_4_04 from "@/public/assets/aboutSection_4-04.webp";
import section_7_images_01 from "@/public/assets/section_7_images-01.webp";
import section_7_images_02 from "@/public/assets/section_7_images-02.webp";
import section_7_images_03 from "@/public/assets/section_7_images-03.webp";
import section_7_images_04 from "@/public/assets/section_7_images-04.webp";
import section_7_images_05 from "@/public/assets/section_7_images-05.webp";
import Decor from "@/public/assets/decor.webp";
import USA from "@/public/assets/usa.webp";
import Map from "@/public/assets/map.webp";
import Office from "@/public/assets/Office.webp";
import placeIcon from "@/public/assets/placeIcon.svg";
import SayHallo from "../sayHallo/page";

const { useEffect } = require("react");
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // ----------- Open Say Hallo Form ----------- //
    const closeBtn = document.querySelector(".header_btn__Jtgac");
    const SayHalloPage = document.querySelector(".SayHalloPage");
    const footerLink = document.querySelector("#SayHalloLink");
    const getFreeEstimate = document.querySelector(
      ".headerAboutPage .right .btn"
    );
    const menuLink_1 = document.querySelector(
      ".menu .container .btns .btn:nth-child(1)"
    );
    const menuLink_2 = document.querySelector(
      ".menu .container .btns .btn:nth-child(2)"
    );
    const header_link = document.querySelector(
      ".headerAboutPage .left .link:last-child"
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
    menuLink_1.addEventListener("click", function () {
      SayHalloPage.style.display = "block";
    });
    menuLink_2.addEventListener("click", function () {
      SayHalloPage.style.display = "block";
    });
    // ----------- Animation Scale Photo ----------- //
    gsap.to(".hero_section .scale_photo", {
      scale: "1.1",
      duration: 1,
      scrollTrigger: {
        trigger: ".hero_section .scale_photo",
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
    // ----------- Head Section_2 Animation ----------- //
    gsap.fromTo(
      ".home__title",
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
          trigger: ".home__title",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
    // ----------- Head Section_2 Animation ----------- //
    gsap.fromTo(
      ".section_4 .heading .head",
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
          trigger: ".section_4 .heading .head",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    // ----------- Head Section_5 Animation ----------- //
    gsap.fromTo(
      ".headerSection_5",
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
          trigger: ".headerSection_5",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
    // ----------- Head Section_6 Animation ----------- //
    gsap.fromTo(
      ".section_6 .bodySection_6 .things__wrapper .things__motion .title",
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
          trigger:
            ".section_6 .bodySection_6 .things__wrapper .things__motion .title",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
    // ----------- Head Section_7 Animation ----------- //
    gsap.fromTo(
      ".section_7 .headerSection_7",
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
          trigger: ".section_7 .headerSection_7",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
    // ----------- Head Section_8 Animation ----------- //
    gsap.fromTo(
      ".section_8 .office__header",
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
          trigger: ".section_8 .office__header",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
    // ----------- Card_1 Section_2 Animation ----------- //
    gsap.fromTo(
      ".section_2 .home__body .home__list .home__item:nth-child(1)",
      {
        x: "-50%",
        z: 0,
      },
      {
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".section_2 .home__body .home__list",
          start: "top 100%",
          end: "bottom 100%",
          toggleActions: "play none none none",
          scrub: 1,
        },
      }
    );
    // ----------- Card_2 Section_2 Animation ----------- //
    gsap.fromTo(
      ".section_2 .home__body .home__list .home__item:nth-child(2)",
      {
        x: "50%",
        z: 0,
      },
      {
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".section_2 .home__body .home__list",
          start: "top 100%",
          end: "bottom 100%",
          toggleActions: "play none none none",
          scrub: 1,
        },
      }
    );
    // ----------- Animation Trans Human ----------- //
    if (window.innerWidth >= 768) {
      const moveDistance =
        (document.querySelector(".section_3 .body").clientHeight * 30) / 100;
      gsap.to(".section_3 .body .human", {
        y: moveDistance,
        scrollTrigger: {
          start: "top 30%",
          end: "bottom 30%",
          trigger: ".section_3 .body",
          scrub: 1,
        },
      });
    }
    // ----------- applySplitTypeAnimation -----------
    const applySplitTypeAnimation = (elements) => {
      elements.forEach((element) => {
        const bg = element.dataset.bgColor;
        const fg = element.dataset.fgColor;
        const text = new SplitType(element, { types: "chars" });

        gsap.fromTo(
          text.chars,
          {
            color: bg,
          },
          {
            color: fg,
            duration: 0.3,
            stagger: 0.02,
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "top 20%",
              scrub: true,
              // markers: false,
              toggleActions: "play play reverse reverse",
            },
          }
        );
      });
    };
    const aboutHeadingElements = document.querySelectorAll(
      ".section_1 #heading_section_1"
    );
    const partnersTextElements = document.querySelectorAll(
      ".section_1 .partners__list .partners__item .partners__text"
    );

    if (aboutHeadingElements.length > 0) {
      applySplitTypeAnimation(aboutHeadingElements);
    }

    if (partnersTextElements.length > 0) {
      applySplitTypeAnimation(partnersTextElements);
    }
    // ----------- Animation Pin Image Section_4 ----------- //
    let workInfoItemsSection_4 = document.querySelectorAll(".work_photo_item");
    workInfoItemsSection_4.forEach(function (item, index) {
      item.style.zIndex = workInfoItemsSection_4.length - index;
    });
    gsap.set(".work_photo_item", {
      clipPath: function () {
        return "inset(0px 0px 0px 0px)";
      },
    });
    const animationSection_4 = gsap.to(".work_photo_item:not(:last-child)", {
      clipPath: function () {
        return "inset(0px 0px 100% 0px)";
      },
      stagger: 0.5,
      ease: "none",
    });
    ScrollTrigger.create({
      trigger: ".body_section_4",
      start: "top top",
      end: "bottom bottom",
      animation: animationSection_4,
      scrub: 1,
    });
    // ----------- moments__images -----------
    gsap.to(".moments__images", {
      x: -1200,
      z: 0,
      scrollTrigger: {
        trigger: ".moments__images",
        start: "top 85%",
        end: "bottom 0%",
        scrub: 1,
        // markers: true,
      },
    });
  }, []);
  return (
    <>
      <HeaderAbout />
      <main className="pageAboutPage">
        <section className="hero_section section">
          <div className="heading">
            <h1>
              <div className="top">
                The first
                <div className="img_bar">
                  <div className="div_img">
                    <Image
                      className="img"
                      src={section_3_images}
                      alt="Description of the image"
                      style={{
                        width: "85%",
                        height: "auto",
                      }}
                    />
                  </div>
                  <div className="background"></div>
                </div>
                <span>impression</span>
              </div>
              <span>impression</span> that matters
            </h1>
          </div>
          <div className="scale_photo">
            <Image src={aboutPageHero} alt="Hero Photo" className="img" />
            <div className="about_us__label">
              May this be our least <br /> awkward one yet! ☺️.
            </div>
          </div>
        </section>
        <section className="section_1 section">
          <h1
            className="heading"
            id="heading_section_1"
            data-bg-color="#cccccc"
            data-fg-color="#000"
          >
            Since 2015, our solutions have been trusted by
          </h1>
          <div className="partners__list">
            <div className="partners__item">
              <div className="partners__image_big">
                <Image src={samsung} className="img" alt="" />
              </div>
              <p
                className="partners__text"
                data-bg-color="#cccccc"
                data-fg-color="#000"
              >
                Samsung,
              </p>
            </div>
            <div className="partners__item">
              <div className="partners__image">
                <Image src={huawei} className="img" alt="" />
              </div>
              <p
                className="partners__text"
                data-bg-color="#cccccc"
                data-fg-color="#000"
              >
                Huawei,
              </p>
            </div>
            <div className="partners__item">
              <div className="partners__image_big">
                <Image src={kohler} className="img" alt="" />
              </div>
              <p
                className="partners__text"
                data-bg-color="#cccccc"
                data-fg-color="#000"
              >
                Kohler,
              </p>
            </div>
            <div className="partners__item">
              <div className="partners__image">
                <Image src={vessel} className="img" alt="" />
              </div>
              <p
                className="partners__text"
                data-bg-color="#cccccc"
                data-fg-color="#000"
              >
                Vessel,
              </p>
            </div>
            <div className="partners__item">
              <div className="partners__image">
                <Image src={colgate} className="img" alt="" />
              </div>
              <p
                className="partners__text"
                data-bg-color="#cccccc"
                data-fg-color="#000"
              >
                Colgate,
              </p>
            </div>
            <div className="partners__item">
              <div className="partners__image">
                <Image src={fox} className="img" alt="" />
              </div>
              <p
                className="partners__text"
                data-bg-color="#cccccc"
                data-fg-color="#000"
              >
                Fox Sports,
              </p>
            </div>
            <div className="partners__item">
              <div className="partners__image_big">
                <Image src={ford} className="img" alt="" />
              </div>
              <p
                className="partners__text"
                data-bg-color="#cccccc"
                data-fg-color="#000"
              >
                Ford
              </p>
            </div>
          </div>
        </section>
        <section className="section_2 section">
          <h2 className="home__title">
            Your challenges, <br /> our expertise <br /> in solving them
          </h2>
          <div className="home__body">
            <ul className="home__list">
              <li className="home__item">
                <div className="challenges__left">
                  <h3 className="challenges__title">
                    Launching new <br /> products <br /> for enterprises
                  </h3>
                  <p className="challenges__text">
                    For the last 2 years we saved over
                    <span> $11.000.000</span> for our enterprise customers.
                  </p>
                </div>
                <div className="challenges__right">
                  <p className="challenges__value">$5M+</p>
                  <div className="challenges__content">
                    <div className="challenges__info">
                      <div className="challenges__image">
                        <Image alt="Kohler logo" src={kohler} className="img" />
                      </div>
                      <p className="challenges__company">
                        Acquisition of Kohler
                      </p>
                    </div>
                    <p className="challenges__strategy">
                      Creating a new mobile app with an existing team in the
                      company
                    </p>
                  </div>
                </div>
              </li>
              <li className="home__item">
                <div className="challenges__left">
                  <div className="challenges__title">
                    <h3>
                      We make money <br /> for startups.
                    </h3>
                    <div className="challenges__wrapper">
                      <h3>Series A </h3>
                      <Image
                        alt="Arrow right"
                        className="challenges__arrow"
                        src={ArrowRight}
                      />
                      <h3> Series B</h3>
                    </div>
                  </div>
                  <p className="challenges__text">
                    Last 3 years over <span> $120.000.000</span> <br />
                    clients’ investment.
                  </p>
                </div>
                <div className="challenges__right">
                  <p className="challenges__value">$22M+</p>
                  <div className="challenges__content">
                    <div className="challenges__info">
                      <div className="challenges__image">
                        <Image alt="Vessel logo" className="img" src={vessel} />
                      </div>
                      <p className="challenges__company">
                        Acquisition of Vessel
                      </p>
                    </div>
                    <p className="challenges__strategy">Rebranding 360</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="section_3 section">
          <p className="quote">“</p>
          <div className="body" id="section_3_trigger">
            <div className="content">
              <p className="text">
                Rondesignlabs employs <span> top-level </span> designers from
                around the world. I was very impressed with their concepts.
              </p>
              <p className="text">
                They were also
                <span>
                  <span> </span>
                  accommodating in meeting out tight timeline, payment schedule
                  needs<span> </span>
                </span>
                and high standard for design.
              </p>
              <div className="clutch">
                <div className="left">
                  <div className="image">
                    <Image
                      alt="Clutch logo"
                      className="img"
                      src={clutch_logo}
                    />
                  </div>
                  <div className="grade">
                    <p className="value">5</p>
                    <ul className="stars">
                      <li className="star">
                        <Image alt="Star" className="img" src={Star} />
                      </li>
                      <li className="star">
                        <Image alt="Star" className="img" src={Star} />
                      </li>
                      <li className="star">
                        <Image alt="Star" className="img" src={Star} />
                      </li>
                      <li className="star">
                        <Image alt="Star" className="img" src={Star} />
                      </li>
                      <li className="star">
                        <Image alt="Star" className="img" src={Star} />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="right">
                  <button
                    target="_blank"
                    className="right__link"
                    href="https://clutch.co/profile/rondesignlab#reviews"
                  >
                    View all reviews
                  </button>
                </div>
              </div>
            </div>
            <div className="human">
              <div className="image">
                <Image alt="Ben Callaghan" src={benCallaghan} className="img" />
              </div>
              <p className="name">
                <span>Ben Callaghan, </span> VP, <br /> Launch at Goodroot
              </p>
            </div>
          </div>
        </section>
        <section className="section_4 section">
          <div className="heading">
            <h1 className="head">
              What are we
              <br />
              fighting against?
            </h1>
            <p className="title">Users do not use my design or project</p>
          </div>
          <div className="body_section_4">
            <div className="work_photo">
              <div className="work_photo_item">
                <Image src={aboutSection_4_01} alt="" className="img" />
                <div className="desk">
                  <div className="name">Jack L.</div>
                  <a
                    target="_blank"
                    className="link"
                    href="https://www.linkedin.com/in/jack-l-rondesignlab/"
                  >
                    <Image alt="LinkedIn" className="img" src={linkedinLogo} />
                  </a>
                </div>
              </div>
              <div className="work_photo_item">
                <Image src={aboutSection_4_02} alt="" className="img" />
                <div className="desk">
                  <div className="name">Mari S.</div>
                  <a
                    target="_blank"
                    className="link"
                    href="https://www.linkedin.com/in/managmentrondesign/"
                  >
                    <Image alt="LinkedIn" className="img" src={linkedinLogo} />
                  </a>
                </div>
              </div>
              <div className="work_photo_item">
                <Image src={aboutSection_4_03} alt="" className="img" />
                <div className="desk">
                  <div className="name">Stan D.</div>
                  <a
                    target="_blank"
                    className="link"
                    href="https://www.linkedin.com/in/stan-d/"
                  >
                    <Image alt="LinkedIn" className="img" src={linkedinLogo} />
                  </a>
                </div>
              </div>
              <div className="work_photo_item">
                <Image src={aboutSection_4_04} alt="" className="img" />
                <div className="desk">
                  <div className="name">Jack R.</div>
                  <a
                    target="_blank"
                    className="link"
                    href="https://www.linkedin.com/in/jack-r-rondesign/"
                  >
                    <Image alt="LinkedIn" className="img" src={linkedinLogo} />
                  </a>
                </div>
              </div>
            </div>
            <div className="work_text">
              <div className="work_info">
                <h1 className="work_heading">Chief executive officer</h1>
                <p className="work_title">
                  He is responsible for
                  <span> developing and implementing successful projects,</span>
                  with his experience and leadership playing an invaluable role
                  in <span> achieving exceptional results</span>
                </p>
                <div className="work_hashtags">
                  <div className="work_hashtag">✈️ Traveling</div>
                  <div className="work_hashtag">👪 Family</div>
                  <div className="work_hashtag">🍕 Delicious food</div>
                </div>
              </div>
              <div className="work_info">
                <h1 className="work_heading">UX Architect & CX Design</h1>
                <p className="work_title">
                  Besides complex architectural solutions, you get a
                  personalized approach to<span> enhance user experience</span>,
                  helping you achieve business goals of the brand.
                </p>
                <div className="work_hashtags">
                  <div className="work_hashtag">📷 Photography</div>
                  <div className="work_hashtag">🐾 Pets</div>
                  <div className="work_hashtag">🚗 Cars</div>
                </div>
              </div>
              <div className="work_info">
                <h1 className="work_heading">Chief information officer</h1>
                <p className="work_title">
                  With exceptional skills in management, Stan
                  <span> ensures smooth project and process operations, </span>
                  providing solutions and guidance to resolve project-related
                  questions and issues.
                </p>
                <div className="work_hashtags">
                  <div className="work_hashtag">📚 Books</div>
                  <div className="work_hashtag">🎾 Tennis</div>
                  <div className="work_hashtag">🏂 Snowboard</div>
                </div>
              </div>
              <div className="work_info">
                <h1 className="work_heading">Co-Founder</h1>
                <p className="work_title">
                  He is responsible for the
                  <span> company&apos;s strategic development. </span> He plays
                  a pivotal role in developing the company&apos;s
                  <span>
                    <span> </span>
                    marketing strategy, increasing its market presence and
                    visibility.
                  </span>
                </p>
                <div className="work_hashtags">
                  <div className="work_hashtag">⛳ Golf</div>
                  <div className="work_hashtag">🎣 Fishing</div>
                  <div className="work_hashtag">💰 Investing</div>
                </div>
              </div>
            </div>
          </div>
          <div className="body_section_4_responsive">
            <div className="item_responsive">
              <div className="image">
                <Image src={aboutSection_4_01} alt="" className="img" />
                <div className="desk">
                  <div className="name">Jack L.</div>
                  <a
                    target="_blank"
                    className="link"
                    href="https://www.linkedin.com/in/jack-l-rondesignlab/"
                  >
                    <Image alt="LinkedIn" className="img" src={linkedinLogo} />
                  </a>
                </div>
              </div>
              <h1 className="work_heading">Chief executive officer</h1>
              <p className="work_title">
                He is responsible for
                <span> developing and implementing successful projects,</span>
                with his experience and leadership playing an invaluable role in
                <span> achieving exceptional results</span>
              </p>
              <div className="work_hashtags">
                <div className="work_hashtag">✈️ Traveling</div>
                <div className="work_hashtag">👪 Family</div>
                <div className="work_hashtag">🍕 Delicious food</div>
              </div>
            </div>
            <div className="item_responsive">
              <div className="image">
                <Image src={aboutSection_4_02} alt="" className="img" />
                <div className="desk">
                  <div className="name">Mari S.</div>
                  <a
                    target="_blank"
                    className="link"
                    href="https://www.linkedin.com/in/managmentrondesign/"
                  >
                    <Image alt="LinkedIn" className="img" src={linkedinLogo} />
                  </a>
                </div>
              </div>
              <h1 className="work_heading">UX Architect & CX Design</h1>
              <p className="work_title">
                Besides complex architectural solutions, you get a personalized
                approach to<span> enhance user experience</span>, helping you
                achieve business goals of the brand.
              </p>
              <div className="work_hashtags">
                <div className="work_hashtag">📷 Photography</div>
                <div className="work_hashtag">🐾 Pets</div>
                <div className="work_hashtag">🚗 Cars</div>
              </div>
            </div>
            <div className="item_responsive">
              <div className="image">
                <Image src={aboutSection_4_03} alt="" className="img" />
                <div className="desk">
                  <div className="name">Stan D.</div>
                  <a
                    target="_blank"
                    className="link"
                    href="https://www.linkedin.com/in/stan-d/"
                  >
                    <Image alt="LinkedIn" className="img" src={linkedinLogo} />
                  </a>
                </div>
              </div>
              <h1 className="work_heading">Chief information officer</h1>
              <p className="work_title">
                With exceptional skills in management, Stan
                <span> ensures smooth project and process operations, </span>
                providing solutions and guidance to resolve project-related
                questions and issues.
              </p>
              <div className="work_hashtags">
                <div className="work_hashtag">📚 Books</div>
                <div className="work_hashtag">🎾 Tennis</div>
                <div className="work_hashtag">🏂 Snowboard</div>
              </div>
            </div>
            <div className="item_responsive">
              <div className="image">
                <Image src={aboutSection_4_04} alt="" className="img" />
                <div className="desk">
                  <div className="name">Jack R.</div>
                  <a
                    target="_blank"
                    className="link"
                    href="https://www.linkedin.com/in/jack-r-rondesign/"
                  >
                    <Image alt="LinkedIn" className="img" src={linkedinLogo} />
                  </a>
                </div>
              </div>
              <h1 className="work_heading">Co-Founder</h1>
              <p className="work_title">
                He is responsible for the
                <span> company&apos;s strategic development. </span> He plays a
                pivotal role in developing the company&apos;s
                <span>
                  <span> </span>
                  marketing strategy, increasing its market presence and
                  visibility.
                </span>
              </p>
              <div className="work_hashtags">
                <div className="work_hashtag">⛳ Golf</div>
                <div className="work_hashtag">🎣 Fishing</div>
                <div className="work_hashtag">💰 Investing</div>
              </div>
            </div>
          </div>
        </section>
        <section className="section_5 section">
          <h2 className="headerSection_5">Meet our team</h2>
          <div className="bodySection_5">
            <div className="team__image">
              <Image alt="World map" src={Map} className="img" />
            </div>
            <div className="team__decor">
              <div className="team__wrapper">
                <Image alt="Decor Image" src={Decor} className="img" />
                <div className="team__info">
                  <div className="team__flag">
                    <Image alt="USA" src={USA} className="img" />
                  </div>
                  <p className="team__country">USA</p>
                </div>
              </div>
            </div>
            <ul className="team__list">
              <li className="team__item">
                Our team operates in more than<span> 9 countries</span> ✈️
              </li>
              <li className="team__item">
                <span>8</span> time zones 🕙
              </li>
            </ul>
          </div>
        </section>
        <section className="section_6 section">
          <div className="bodySection_6">
            <div className="things__wrapper">
              <div className="things__motion">
                <h2 className="title">
                  A few things <br /> about us
                </h2>
              </div>
            </div>
          </div>
          <ul className="imagesSection_6">
            <li className="things__item">
              <div className="things__body">
                <h4 className="things__title">350+</h4>
                <p className="things__text">Happy Clients</p>
              </div>
            </li>
            <li className="things__item">
              <div className="things__body">
                <Image alt="Clutch" className="img" src={Clutch} />
                <p className="things__text">
                  <span>29</span> Clutch Reviews
                </p>
              </div>
            </li>
            <li className="things__item">
              <div className="things__body">
                <h4 className="things__title">8+</h4>
                <p className="things__text"> Years of Services</p>
              </div>
            </li>
            <li className="things__item">
              <div className="things__body">
                <Image alt="CSSDA" className="img" src={CSSDA} />
                <p className="things__text">
                  <span>🏆 x5</span> Awards
                </p>
              </div>
            </li>
            <li className="things__item">
              <div className="things__body">
                <Image alt="CSS Winner" className="img" src={cssWinner} />
                <p className="things__text">
                  <span>🏆 x1</span> Site of the Day
                </p>
              </div>
            </li>
            <li className="things__item">
              <div className="things__body">
                <Image alt="CSS Awards" className="img" src={cssAwards} />
                <p className="things__text">
                  <span>🏆 x1</span> Site of the Day
                </p>
              </div>
            </li>
            <li className="things__item">
              <div className="things__body">
                <Image alt="Best CSS" className="img" src={bestCSS} />
                <p className="things__text">
                  <span>🏆 x1</span> Site of the Day
                </p>
              </div>
            </li>
          </ul>
        </section>
        <section className="section_7 section">
          <h3 className="headerSection_7">
            Pleasant moments
            <br />
            together
          </h3>
          <div className="bodySection_7">
            <ul className="moments__images">
              <li className="moments__image">
                <Image
                  alt="Working process 🤔"
                  className="img"
                  src={section_7_images_01}
                />
                <div className="moments__label">Working process 🤔</div>
              </li>
              <li className="moments__image">
                <Image
                  alt="Mountain hike ⛰️"
                  className="img"
                  src={section_7_images_02}
                />
                <div className="moments__label">Mountain hike ⛰️</div>
              </li>
              <li className="moments__image">
                <Image
                  alt="Kayaking 🚣‍♂️"
                  className="img"
                  src={section_7_images_03}
                />
                <div className="moments__label">Kayaking 🚣‍♂️</div>
              </li>
              <li className="moments__image">
                <Image
                  alt="Barbecue ♨"
                  className="img"
                  src={section_7_images_04}
                />
                <div className="moments__label">Barbecue ♨</div>
              </li>
              <li className="moments__image">
                <Image
                  alt="Camping 🏕️"
                  className="img"
                  src={section_7_images_05}
                />
                <div className="moments__label">Camping 🏕️</div>
              </li>
            </ul>
          </div>
        </section>
        <section className="section_8 section">
          <h2 className="office__header">Our office</h2>
          <div className="office__wrapper">
            <div className="office__image">
              <Image alt="Our Office" className="img" src={Office} />
            </div>
            <div className="office__label">
              <div className="office__icon">
                <Image alt="Place icon" className="img" src={placeIcon} />
              </div>
              <div className="office__content">
                <h6 className="office__city">Kraków, Poland</h6>
                <p className="office__address">ul. Gęsia 8/205, 31-054</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section_9 section">
          <div className="talk__body">
            <div className="talk__text">Shall we chat?</div>
            <Link href="mailto:hello@rondesignlab.com" className="talk__link">
              hello@rondesignlab.com
            </Link>
          </div>
          <div className="talk__title">
            <div className="talk__motion">
              Let’s
              <div className="talk__image">
                <div>
                  <Image
                    className="img"
                    alt="Let us show your strength"
                    src={yellow_girl_smile}
                  />
                </div>
                <div className="talk__background"></div>
              </div>
              <p>talk</p>
            </div>
            <button title="Open Typeform Say Hello" className="talk__button">
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
};

export default About;
