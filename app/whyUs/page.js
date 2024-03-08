"use client";
import "./whyUs-module.css";
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
    const getFreeEstimate = document.querySelector(
      ".headerWhyUsPage .right .btn"
    );
    const footerLink = document.querySelector("#SayHalloLink");
    const header_link = document.querySelector(
      ".headerWhyUsPage .left .link:last-child"
    );
    const menuLink_1 = document.querySelector(
      ".menu .container .btns .btn:nth-child(1)"
    );
    const menuLink_2 = document.querySelector(
      ".menu .container .btns .btn:nth-child(2)"
    );
    menuLink_1.addEventListener("click", function () {
      SayHalloPage.style.display = "block";
    });
    menuLink_2.addEventListener("click", function () {
      SayHalloPage.style.display = "block";
    });
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
    gsap.to(".hero_section .video", {
      scale: "1.1",
      duration: 1,
      scrollTrigger: {
        trigger: ".hero_section .video",
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
      ".section_1 .header_section_1 .title_section_1",
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
          trigger: ".section_1 .header_section_1 .title_section_1",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
    // ----------- Head Section_2 Animation ----------- //
    gsap.fromTo(
      ".section_2 .header_section_2 .title_section_2",
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
          trigger: ".section_2 .header_section_2 .title_section_2",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
    // ----------- Head Section_3 Animation ----------- //
    gsap.fromTo(
      ".section_3 .header_section_3 .title_section_3",
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
          trigger: ".section_3 .header_section_3 .title_section_3",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
    // ----------- Head Section_4 Animation ----------- //
    gsap.fromTo(
      ".section_4 .header_section_4 .section_4_title",
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
          trigger: ".section_4 .header_section_4 .section_4_title",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
    // ----------- Head Section_5 Animation ----------- //
    gsap.fromTo(
      ".section_5 .header_section_5 .section_5_title",
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
          trigger: ".section_5 .header_section_5 .section_5_title",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
    // ----------- Animation Pin Image ----------- //
    let workInfoItems = document.querySelectorAll(".section_4_work_photo_item");
    workInfoItems.forEach(function (item, index) {
      item.style.zIndex = workInfoItems.length - index;
    });
    gsap.set(".section_4_work_photo_item", {
      clipPath: function () {
        return "inset(0px 0px 0px 0px)";
      },
    });
    const animation = gsap.to(".section_4_work_photo_item:not(:last-child)", {
      clipPath: function () {
        return "inset(0px 0px 100% 0px)";
      },
      stagger: 0.5,
      ease: "none",
    });
    ScrollTrigger.create({
      trigger: ".section_4 .body_section_4",
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
      <main className="pageWhyUsPage">
        <section className="hero_section section">
          <div className="heading">
            <h1>
              <div className="top">
                So why
                <div className="img_bar">
                  <div className="div_img">
                    <Image
                      className="img"
                      src={section_3_images}
                      alt="Description of the image"
                    />
                  </div>
                  <div className="background"></div>
                </div>
                us?
              </div>
            </h1>
          </div>
          <div className="title">
            <p>
              We team up with digital experts to boost
              <br />
              investments and fortify your team.
            </p>
          </div>
          <div className="video">
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
        <section className="section_1 section">
          <div className="header_section_1">
            <h2 className="title_section_1">
              Guess who&apos;s at the <br /> top of Behance? <br /> That&apos;s
              right, we are!
            </h2>
            <p className="text">
              Over 1.2 million people saw us, and we earned <br /> 30+ awards in
              various categories.
            </p>
          </div>
          <SwiperSection />
        </section>
        <section className="section_2 section">
          <div className="header_section_2">
            <h2 className="title_section_2">
              Guess who&apos;s at the <br /> top of Dribbble? <br /> That&apos;s
              right, we are!
            </h2>
            <p className="text">
              In the last 90 days, we hit 4.6 million views, got
              <br /> 25,000 likes, and 2,200 saves — impressive stats.
            </p>
          </div>
          <ul className="list">
            <li className="item_dribbble">
              <a
                target="_blank"
                className="dribbble__link"
                href="https://dribbble.com/shots/22806186-SugarCRM-Discover-Advanced-Analytics-Tool"
              >
                <div className="dribbble__image">
                  <Image
                    alt="SugarCRM Discover – Advanced Analytics Tool"
                    className="img"
                    src={whyUs_section_2_01}
                  />
                </div>
                <div className="dribbble__content">
                  <div className="dribbble__info">
                    <p className="dribbble__company">Dribbble</p>
                    <h4 className="dribbble__title">
                      SugarCRM Discover – Advanced Analytics Tool
                    </h4>
                  </div>
                  <ul className="dribbble__stats">
                    <li className="dribbble__stat">
                      <div className="category">⭐ 33.7k Views</div>
                    </li>
                    <li className="dribbble__stat">
                      <div className="category">🏆 4 days in the top</div>
                    </li>
                  </ul>
                </div>
              </a>
            </li>
            <li className="item_dribbble">
              <a
                target="_blank"
                className="dribbble__link"
                href="https://dribbble.com/shots/23173951-Fishbowl-CRM-Business-Management-Solution"
              >
                <div className="dribbble__image">
                  <Image
                    alt="Fishbowl CRM - Business Management Solution"
                    className="img"
                    src={whyUs_section_2_02}
                  />
                </div>
                <div className="dribbble__content">
                  <div className="dribbble__info">
                    <p className="dribbble__company">Dribbble</p>
                    <h4 className="dribbble__title">
                      Fishbowl CRM - Business Management Solution
                    </h4>
                  </div>
                  <ul className="dribbble__stats">
                    <li className="dribbble__stat">
                      <div className="category">⭐ 52.6k Views</div>
                    </li>
                    <li className="dribbble__stat">
                      <div className="category">🏆 15 days in the top</div>
                    </li>
                  </ul>
                </div>
              </a>
            </li>
            <li className="item_dribbble">
              <a
                target="_blank"
                className="dribbble__link"
                href="https://dribbble.com/shots/23181420-Salesforce-Sales-Analytics-Software"
              >
                <div className="dribbble__image">
                  <Image
                    alt="Salesforce - Sales Analytics Software CRM System"
                    className="img"
                    src={whyUs_section_2_03}
                  />
                </div>
                <div className="dribbble__content">
                  <div className="dribbble__info">
                    <p className="dribbble__company">Dribbble</p>
                    <h4 className="dribbble__title">
                      Salesforce - Sales Analytics Software CRM System
                    </h4>
                  </div>
                  <ul className="dribbble__stats">
                    <li className="dribbble__stat">
                      <div className="category">⭐ 10.8k Views</div>
                    </li>
                    <li className="dribbble__stat">
                      <div className="category">🏆 14 days in the top</div>
                    </li>
                  </ul>
                </div>
              </a>
            </li>
            <li className="item_dribbble">
              <a
                target="_blank"
                className="dribbble__link"
                href="https://dribbble.com/shots/23203289-Salesforce-CRM-Invoice-Management-Software"
              >
                <div className="dribbble__image">
                  <Image
                    alt="Salesforce - CRM Invoice Management Software"
                    className="img"
                    src={whyUs_section_2_04}
                  />
                </div>
                <div className="dribbble__content">
                  <div className="dribbble__info">
                    <p className="dribbble__company">Dribbble</p>
                    <h4 className="dribbble__title">
                      Salesforce - CRM Invoice Management Software
                    </h4>
                  </div>
                  <ul className="dribbble__stats">
                    <li className="dribbble__stat">
                      <div className="category">⭐ 44.5k Views</div>
                    </li>
                    <li className="dribbble__stat">
                      <div className="category">🏆 23 days in the top</div>
                    </li>
                  </ul>
                </div>
              </a>
            </li>
          </ul>
        </section>
        <section className="section_3 section">
          <div className="header_section_3">
            <h2 className="title_section_3">What else?</h2>
          </div>
          <ul className="list">
            <li className="item">
              <div className="sticky">
                <div className="title">
                  <div className="row">
                    <h3>
                      We&apos;re experts in <br />
                      modern trends and
                    </h3>
                  </div>
                  <div className="row">
                    <h3>offer</h3>
                    <div className="image">
                      <Image
                        alt="Mary S."
                        className="img"
                        src={aboutSection_4_01}
                      />
                    </div>
                    <h3>practical</h3>
                  </div>
                  <div className="row">
                    <h3>solutions.</h3>
                  </div>
                  <div className="quote">“</div>
                </div>
                <div className="text">
                  <p>
                    Customized <span> design solutions </span> to fit your needs
                    perfectly
                  </p>
                </div>
              </div>
              <ul className="reviews">
                <li className="review">
                  <div className="wrapper">
                    <div className="wrapper_header">
                      <div className="image">
                        <Image
                          alt="Stan Reznik"
                          className="img"
                          src={whyus_reviews_01}
                        />
                      </div>
                      <div className="info">
                        <h4 className="name">Stan Reznik</h4>
                        <p className="position">Director of Marketing</p>
                      </div>
                    </div>
                    <div className="body">
                      <p className="text">
                        Rondesignlab has a very good eye for what is
                        <span> modern </span> and what looks good while making
                        it
                        <span> functional. </span>
                      </p>
                      <div className="quote">“</div>
                    </div>
                    <div className="footer">
                      <div className="category">🏢 Healthcare</div>
                    </div>
                  </div>
                  <a
                    target="_blank"
                    className="link"
                    href="https://clutch.co/profile/rondesignlab#review-1800933"
                  >
                    View full review
                  </a>
                </li>
                <li className="review">
                  <div className="wrapper">
                    <div className="wrapper_header">
                      <div className="image">
                        <Image
                          alt="Diana Regal"
                          className="img"
                          src={whyus_reviews_02}
                        />
                      </div>
                      <div className="info">
                        <h4 className="name">Diana Regal</h4>
                        <p className="position">VP of R&D, Payer Compass</p>
                      </div>
                    </div>
                    <div className="body">
                      <p className="text">
                        They cared a great deal about
                        <span> bringing our vision </span> for the site to life.
                        Their project manager was wonderful.
                      </p>
                      <div className="quote">“</div>
                    </div>
                    <div className="footer">
                      <div className="category">🏢 Consumer Products</div>
                    </div>
                  </div>
                  <a
                    target="_blank"
                    className="link"
                    href="https://clutch.co/profile/rondesignlab#review-1800933"
                  >
                    View full review
                  </a>
                </li>
                <li className="review">
                  <div className="wrapper">
                    <div className="wrapper_header">
                      <div className="image">
                        <Image
                          alt="Vivek Jagtap"
                          className="img"
                          src={whyus_reviews_03}
                        />
                      </div>
                      <div className="info">
                        <h4 className="name">Vivek Jagtap</h4>
                        <p className="position">Head of Product, Broker</p>
                      </div>
                    </div>
                    <div className="body">
                      <p className="text">
                        They really understood what we needed and it
                        <span> reflected in their work. </span> Speed and design
                        skills were also key to success.
                      </p>
                      <div className="quote">“</div>
                    </div>
                    <div className="footer">
                      <div className="category">🏢 Real Estate</div>
                    </div>
                  </div>
                  <a
                    target="_blank"
                    className="link"
                    href="https://clutch.co/profile/rondesignlab#review-1800933"
                  >
                    View full review
                  </a>
                </li>
              </ul>
            </li>
            <li className="item">
              <ul className="reviews">
                <li className="review">
                  <div className="wrapper">
                    <div className="wrapper_header">
                      <div className="image">
                        <Image
                          alt="Ben Callaghan"
                          className="img"
                          src={whyus_reviews_04}
                        />
                      </div>
                      <div className="info">
                        <h4 className="name">Ben Callaghan</h4>
                        <p className="position">VP of Launch, Goodroot</p>
                      </div>
                    </div>
                    <div className="body">
                      <p className="text">
                        Rondesignlabs employs top-level designers from around
                        the world. Amazing design work.
                      </p>
                      <div className="quote">“</div>
                    </div>
                    <div className="footer">
                      <div className="category">🏢 Healthcare</div>
                    </div>
                  </div>
                  <a
                    target="_blank"
                    className="link"
                    href="https://clutch.co/profile/rondesignlab#review-1800933"
                  >
                    View full review
                  </a>
                </li>
                <li className="review">
                  <div className="wrapper">
                    <div className="wrapper_header">
                      <div className="image">
                        <Image
                          alt="Alex Nozdrin"
                          className="img"
                          src={whyus_reviews_05}
                        />
                      </div>
                      <div className="info">
                        <h4 className="name">Alex Nozdrin</h4>
                        <p className="position">CEO, Goodworks</p>
                      </div>
                    </div>
                    <div className="body">
                      <p className="text">
                        They showed a variety of <span> skill sets </span> on
                        their team — from branding, illustration, and UX,to
                        animation.
                      </p>
                      <div className="quote">“</div>
                    </div>
                    <div className="footer">
                      <div className="category">🏢 Software</div>
                    </div>
                  </div>
                  <a
                    target="_blank"
                    className="link"
                    href="https://clutch.co/profile/rondesignlab#review-1800933"
                  >
                    View full review
                  </a>
                </li>
                <li className="review">
                  <div className="wrapper">
                    <div className="wrapper_header">
                      <div className="image">
                        <Image
                          alt="Don Stein"
                          className="img"
                          src={whyus_reviews_06}
                        />
                      </div>
                      <div className="info">
                        <h4 className="name">Don Stein</h4>
                        <p className="position">Head of Product, Broker</p>
                      </div>
                    </div>
                    <div className="body">
                      <p className="text">
                        Rondesignlab’s <span> speed and quality </span> of
                        delivery was better than most agencies. The team paid
                        close attention to detail.
                      </p>
                      <div className="quote">“</div>
                    </div>
                    <div className="footer">
                      <div className="category">🏢 Telecoms</div>
                    </div>
                  </div>
                  <a
                    target="_blank"
                    className="link"
                    href="https://clutch.co/profile/rondesignlab#review-1800933"
                  >
                    View full review
                  </a>
                </li>
              </ul>
              <div className="sticky">
                <div className="title">
                  <div className="row">
                    <h3>Our team consists of</h3>
                  </div>
                  <div className="row">
                    <h3>specialists</h3>
                    <div className="image">
                      <Image
                        alt="Jack L."
                        className="img"
                        src={aboutSection_4_02}
                      />
                    </div>
                    <h3>with</h3>
                  </div>
                  <div className="row">
                    <h3>vast experience.</h3>
                  </div>
                  <div className="quote">“</div>
                </div>
                <div className="text">
                  <p>
                    Rely on our top-notch designers to transform your ideas into
                    reality. We uphold high standards, meet deadlines, and
                    deliver tasks promptly.<span> 8+ Years of experience.</span>
                  </p>
                </div>
              </div>
            </li>
            <li className="item">
              <div className="sticky">
                <div className="title">
                  <div className="row">
                    <h3>Our primary goal is</h3>
                  </div>
                  <div className="row">
                    <h3>to identify</h3>
                    <div className="image">
                      <Image
                        alt="Stan D."
                        className="img"
                        src={aboutSection_4_03}
                      />
                    </div>
                    <h3>your</h3>
                  </div>
                  <div className="row">
                    <h3>
                      project&apos;s needs and
                      <br />
                      objectives.
                    </h3>
                  </div>
                  <div className="quote">“</div>
                </div>
                <div className="text">
                  <p>
                    We stay ahead of trends to deliver innovative and
                    <span> functional design solutions,</span> providing
                    versatility that caters precisely to your
                    <span> unique requirements.</span>
                  </p>
                </div>
              </div>
              <ul className="reviews">
                <li className="review">
                  <div className="wrapper">
                    <div className="wrapper_header">
                      <div className="image">
                        <Image
                          alt="Eden D."
                          className="img"
                          src={whyus_reviews_07}
                        />
                      </div>
                      <div className="info">
                        <h4 className="name">Eden D.</h4>
                        <p className="position">CTO, Cryptocurrency</p>
                      </div>
                    </div>
                    <div className="body">
                      <p className="text">
                        Their unique talent is in their ability to
                        <span> extract goals and ideas </span> and put them into
                        an excellent final product.
                      </p>
                      <div className="quote">“</div>
                    </div>
                    <div className="footer">
                      <div className="category">🏢 Financial</div>
                    </div>
                  </div>
                  <a
                    target="_blank"
                    className="link"
                    href="https://clutch.co/profile/rondesignlab#review-1800933"
                  >
                    View full review
                  </a>
                </li>
                <li className="review">
                  <div className="wrapper">
                    <div className="wrapper_header">
                      <div className="image">
                        <Image
                          alt="Dmitry Terner"
                          className="img"
                          src={whyus_reviews_08}
                        />
                      </div>
                      <div className="info">
                        <h4 className="name">Dmitry Terner</h4>
                        <p className="position">Websites Manager</p>
                      </div>
                    </div>
                    <div className="body">
                      <p className="text">
                        Their eye for visual composition and motion in support
                        of the established UX was <span> very impressive.</span>
                        <span>functional. </span>
                      </p>
                      <div className="quote">“</div>
                    </div>
                    <div className="footer">
                      <div className="category">🏢 Education</div>
                    </div>
                  </div>
                  <a
                    target="_blank"
                    className="link"
                    href="https://clutch.co/profile/rondesignlab#review-1800933"
                  >
                    View full review
                  </a>
                </li>
                <li className="review">
                  <div className="wrapper">
                    <div className="wrapper_header">
                      <div className="image">
                        <Image
                          alt="Markus Skergeth"
                          className="img"
                          src={whyus_reviews_09}
                        />
                      </div>
                      <div className="info">
                        <h4 className="name">Markus Skergeth</h4>
                        <p className="position">CEO, Goodworks</p>
                      </div>
                    </div>
                    <div className="body">
                      <p className="text">
                        They took their time to
                        <span> really understand our needs </span> and
                        challenges. They completed the job on time.
                      </p>
                      <div className="quote">“</div>
                    </div>
                    <div className="footer">
                      <div className="category">🏢 Software</div>
                    </div>
                  </div>
                  <a
                    target="_blank"
                    className="link"
                    href="https://clutch.co/profile/rondesignlab#review-1800933"
                  >
                    View full review
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section className="section_4 section">
          <div className="header_section_4">
            <h2 className="section_4_title">
              What does it entail to achieve excellence in the field of design?
            </h2>
            <div className="section_4_info">
              <p className="section_4_text">
                A couple of words
                <br /> about our vision.
              </p>
            </div>
          </div>
          <div className="body_section_4">
            <div className="section_4_text">
              <div className="section_4_work_info">
                <h1 className="section_4_work_heading">Evolving</h1>
                <p className="section_4_work_title">
                  Excellence is meeting precise project needs by
                  <span> understanding everyone involved: </span> the client,
                  users, and algorithms.
                </p>
              </div>
              <div className="section_4_work_info">
                <h1 className="section_4_work_heading">Design</h1>
                <p className="section_4_work_title">
                  Creating designs that are user-friendly and visually appealing
                  <span> is key.</span>
                </p>
              </div>
              <div className="section_4_work_info">
                <h1 className="section_4_work_heading">Mastery</h1>
                <p className="section_4_work_title">
                  Continuous self-improvement involves staying updated,
                  following trends, and occasionally pioneering new ones — a
                  journey toward
                  <span> being exceptional.</span>
                </p>
              </div>
              <div className="section_4_work_info">
                <h1 className="section_4_work_heading">Excellence</h1>
                <p className="section_4_work_title">
                  Excellence acts as our jet engine, propelling us to greater
                  heights and
                  <span> faster success.</span>
                </p>
              </div>
            </div>
            <div className="section_4_photo">
              <div className="section_4_work_photo_item">
                <Image src={section_4_1} alt="" className="img" />
              </div>
              <div className="section_4_work_photo_item">
                <Image src={section_4_2} alt="" className="img" />
              </div>
              <div className="section_4_work_photo_item">
                <Image src={section_4_3} alt="" className="img" />
              </div>
              <div className="section_4_work_photo_item">
                <Image src={section_4_4} alt="" className="img" />
              </div>
            </div>
          </div>
          <div className="body_section_4_responsive">
            <div className="item_responsive">
              <div className="image">
                <Image src={section_4_1} alt="" className="img" />
              </div>
              <h1 className="section_4_work_heading">Evolving</h1>
              <p className="section_4_work_title">
                Excellence is meeting precise project needs by
                <span> understanding everyone involved: </span> the client,
                users, and algorithms.
              </p>
            </div>
            <div className="item_responsive">
              <div className="image">
                <Image src={section_4_2} alt="" className="img" />
              </div>
              <h1 className="section_4_work_heading">Design</h1>
              <p className="section_4_work_title">
                Creating designs that are user-friendly and visually appealing
                <span> is key.</span>
              </p>
            </div>
            <div className="item_responsive">
              <div className="image">
                <Image src={section_4_3} alt="" className="img" />
              </div>
              <h1 className="section_4_work_heading">Mastery</h1>
              <p className="section_4_work_title">
                Continuous self-improvement involves staying updated, following
                trends, and occasionally pioneering new ones — a journey toward
                <span> being exceptional.</span>
              </p>
            </div>
            <div className="item_responsive">
              <div className="image">
                <Image src={section_4_4} alt="" className="img" />
              </div>
              <h1 className="section_4_work_heading">Excellence</h1>
              <p className="section_4_work_title">
                Excellence acts as our jet engine, propelling us to greater
                heights and
                <span> faster success.</span>
              </p>
            </div>
          </div>
        </section>
        <section className="section_5 section">
          <div className="header_section_5">
            <h2 className="section_5_title">
              Ready to transform your idea with the finest expertise?
            </h2>
          </div>
          <div className="body_section_5">
            <div className="left">
              <h3 className="left_header">
                First things first... please share your contact details
              </h3>
              <p className="title">
                This will help our team get in touch with you
                <span> within 24 to 48 hours via email.</span>
              </p>
            </div>
            <div className="right">
              <div className="right_header">
                <h3 className="head_text">
                  First things first...please share your professional contact
                  details*
                </h3>
                <p className="title">
                  This will help our team get in touch with you within 24 to 48
                  hours via email.
                </p>
              </div>
              <form className="form">
                <div className="input">
                  <label for="firstName">First name *</label>
                  <input type="text" name="firstName" placeholder="Saeed" />
                </div>
                <div className="input">
                  <label for="lastName">Last name *</label>
                  <input type="text" name="lastName" placeholder="Khaled" />
                </div>
                <div className="input">
                  <label for="phoneNumber">Phone number *</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="201020304050"
                  />
                </div>
                <div className="input">
                  <label for="email">Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="input">
                  <label for="company">Company *</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Acme Corporation"
                  />
                </div>
              </form>
              <button href="" className="button">
                <p>OK</p>
                <svg height="13" width="16">
                  <path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path>
                </svg>
              </button>
              <div className="counter">
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
        <section className="section_6 section">
          <div className="talk__body">
            <div className="talk__text">Shall we chat?</div>
            <Link href="mailto:hello@rondesignlab.com" className="talk__link">
              hello@rondesignlab.com
            </Link>
          </div>

          <a
            aria-label="Link to Pilot page"
            class="talk__wrapper"
            href="/pilot"
          >
            To persuade <br class="mobile-br" /> even the <br /> most skeptical,
            <span class="weve">we&apos;ve</span>
            <div class="talk__title">
              <div class="desktop">
                <div class="talk__motion">
                  <span class="weve">we&apos;ve</span>designed
                  <div class="talk__image">
                    <div>
                      <Image
                        alt="The girl smiles"
                        src={yellow_girl_smile}
                        className="img"
                      />
                    </div>
                    <div class="talk__background"></div>
                  </div>
                  <p class="text">Pilot</p>
                </div>
                <div class="motion">
                  <p class="pilot-motion-text mobile">Pilot</p>
                  <button
                    title="Open Typeform Say Hello"
                    class="talk__button mobile"
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
              <button title="Open Typeform Say Hello" class="talk__button">
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
          </a>
        </section>
      </main>
      <Footer />
      <SayHallo />
    </>
  );
}

export default WhyUs;
