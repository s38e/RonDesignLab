"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import yellow_girl_smile from "../public/assets/yellow-girl-smile.webp";
import samsung from "../public/assets/samsung.svg";
import huawei from "../public/assets/huawei.svg";
import kohler from "../public/assets/kohler.svg";
import vessel from "../public/assets/vessel.svg";
import colgate from "../public/assets/colgate.svg";
import fox from "../public/assets/fox.svg";
import ford from "../public/assets/ford.svg";
import fighting_1 from "../public/assets/fighting_1.webp";
import fighting_2 from "../public/assets/fighting_2.webp";
import fighting_3 from "../public/assets/fighting_3.webp";
import section_6_1 from "../public/assets/section_6_01.svg";
import section_6_2 from "../public/assets/section_6_02.svg";
import section_6_3 from "../public/assets/section_6_03.svg";
import section_3_images_1 from "../public/assets/section_3_images-1.webp";
import section_3_images_2 from "../public/assets/section_3_images-2.webp";
import section_3_images_3 from "../public/assets/section_3_images-3.webp";
import section_3_images_4 from "../public/assets/section_3_images-4.webp";
import section_3_images_5 from "../public/assets/section_3_images-5.webp";
import section_3_images_6 from "../public/assets/section_3_images-6.webp";
import section_3_images_7 from "../public/assets/section_3_images-7.webp";
import section_3_images_8 from "../public/assets/section_3_images-8.webp";
import section_3_images_9 from "../public/assets/section_3_images-9.webp";
import ArrowRight from "../public/assets/arrow-right.svg";
import Section_5_back from "../public/assets/section_5_back.png";
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import SplitType from "split-type";
import SayHallo from "./sayHallo/page";

const { useEffect } = require("react");

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    // ----------- Open Say Hallo Form ----------- //
    const closeBtn = document.querySelector(".header_btn__Jtgac");
    const SayHalloPage = document.querySelector(".SayHalloPage");
    const getFreeEstimate = document.querySelector(".header_btn__VAD9l");
    const footerLink = document.querySelector("#SayHalloLink");
    const header_link = document.querySelector(
      ".header_link___CESc:last-child"
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
    gsap.to(".page_hero_section__pHumS .page_video___Lden", {
      scale: "1.1",
      duration: 1,
      scrollTrigger: {
        trigger: ".page_hero_section__pHumS .page_video___Lden",
        start: "top center",
        end: "+=500",
        scrub: 1,
      },
    });
    // ----------- Animation Scale Photo ----------- //
    gsap.to(".page_animation_Div__UAZV_", {
      scale: "1.1",
      duration: 1,
      scrollTrigger: {
        trigger: ".page_animation_Div__UAZV_",
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
      ".page_head__NZsX9",
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
          trigger: ".page_head__NZsX9",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
    // ----------- Head Section_3 Animation ----------- //
    gsap.fromTo(
      ".page_heading_section_3__bqAja",
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
          trigger: ".page_heading_section_3__bqAja",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
    // ----------- Head Section_4 Animation ----------- //
    gsap.fromTo(
      ".page_heading_section_4__f9Hbt",
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
          trigger: ".page_heading_section_4__f9Hbt",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
    // ----------- Head Section_6 Animation ----------- //
    gsap.fromTo(
      ".page_section_6_title__bTcT_",
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
          trigger: ".page_section_6_title__bTcT_",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
    // ----------- Head Section_6 Animation ----------- //
    // gsap.to(".page_div_img__2gAs4", {});
    // gsap.to(".page_background__dpzbb", {});
    // gsap.to(".page_img_bar__o7os6", {});
    // ----------- Card_1 Section_4 Animation ----------- //
    gsap.fromTo(
      ".page_card__Cf__u:nth-child(1)",
      {
        x: -200,
        z: 0,
        rotation: -10,
      },
      {
        x: 0,
        rotation: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".page_body_section_4__esBBh",
          start: "top 80%",
          end: "bottom 80%",
          toggleActions: "play none none none",
          scrub: 1,
        },
      }
    );
    // ----------- Card_2 Section_4 Animation ----------- //
    gsap.fromTo(
      ".page_card__Cf__u:nth-child(2)",
      {
        x: 200,
        z: 0,
        rotation: 10,
      },
      {
        x: 0,
        rotation: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".page_body_section_4__esBBh",
          start: "top 80%",
          end: "bottom 80%",
          toggleActions: "play none none none",
          scrub: 1,
        },
      }
    );
    // ----------- Animation Pin Image ----------- //
    let workInfoItems = document.querySelectorAll(
      ".page_work_photo_item___RGoa"
    );
    workInfoItems.forEach(function (item, index) {
      item.style.zIndex = workInfoItems.length - index;
    });
    gsap.set(".page_work_photo_item___RGoa", {
      clipPath: function () {
        return "inset(0px 0px 0px 0px)";
      },
    });
    const animation = gsap.to(".page_work_photo_item___RGoa:not(:last-child)", {
      clipPath: function () {
        return "inset(0px 0px 100% 0px)";
      },
      stagger: 0.5,
      ease: "none",
    });
    ScrollTrigger.create({
      trigger: ".page_body__9Qj2F",
      start: "top top",
      end: "bottom bottom",
      animation: animation,
      scrub: 1,
    });
    // ----------- Animation Pin Image Section_6 ----------- //
    let workInfoItemsSection_6 = document.querySelectorAll(
      ".page_section_6_work_photo_item__2GokW"
    );
    workInfoItemsSection_6.forEach(function (item, index) {
      item.style.zIndex = workInfoItemsSection_6.length - index;
    });
    gsap.set(".page_section_6_work_photo_item__2GokW", {
      clipPath: function () {
        return "inset(0px 0px 0px 0px)";
      },
    });
    const animationSection_6 = gsap.to(
      ".page_section_6_work_photo_item__2GokW:not(:last-child)",
      {
        clipPath: function () {
          return "inset(0px 0px 100% 0px)";
        },
        stagger: 0.5,
        ease: "none",
      }
    );
    ScrollTrigger.create({
      trigger: ".page_body_section_6__iYBCb",
      start: "top top",
      end: "bottom bottom",
      animation: animationSection_6,
      scrub: 1,
    });
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
              markers: false,
              toggleActions: "play play reverse reverse",
            },
          }
        );
      });
    };

    const aboutHeadingElements = document.querySelectorAll(
      "#page_heading_section_1__W4jXW"
    );
    const partnersTextElements = document.querySelectorAll(
      ".page_partners__text__OXfD0"
    );

    if (aboutHeadingElements.length > 0) {
      applySplitTypeAnimation(aboutHeadingElements);
    }

    if (partnersTextElements.length > 0) {
      applySplitTypeAnimation(partnersTextElements);
    }
  }, []);
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero_section}>
          <div className={styles.heading}>
            <h1>
              <div className={styles.top}>
                Let us
                <div className={styles.img_bar}>
                  <div className={styles.div_img}>
                    <Image
                      className={styles.img}
                      src={yellow_girl_smile}
                      alt="Description of the image"
                      style={{
                        width: "85%",
                        height: "auto",
                      }}
                    />
                  </div>
                  <div className={styles.background}></div>
                </div>
                show
              </div>
              your strength
            </h1>
          </div>
          <div className={styles.title}>
            <p>
              We attract digital experts to raise investments
              <br />
              and strengthen your team
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
          <h1
            className={styles.heading}
            id={styles.heading_section_1}
            data-bg-color="#cccccc"
            data-fg-color="#000"
          >
            Since 2015, our solutions have been trusted by
          </h1>
          <div className={styles.partners__list}>
            <div className={styles.partners__item}>
              <div className={styles.partners__image_big}>
                <Image src={samsung} className={styles.img} alt="" />
              </div>
              <p
                className={styles.partners__text}
                data-bg-color="#cccccc"
                data-fg-color="#000"
              >
                Samsung,
              </p>
            </div>
            <div className={styles.partners__item}>
              <div className={styles.partners__image}>
                <Image src={huawei} className={styles.img} alt="" />
              </div>
              <p
                className={styles.partners__text}
                data-bg-color="#cccccc"
                data-fg-color="#000"
              >
                Huawei,
              </p>
            </div>
            <div className={styles.partners__item}>
              <div className={styles.partners__image_big}>
                <Image src={kohler} className={styles.img} alt="" />
              </div>
              <p
                className={styles.partners__text}
                data-bg-color="#cccccc"
                data-fg-color="#000"
              >
                Kohler,
              </p>
            </div>
            <div className={styles.partners__item}>
              <div className={styles.partners__image}>
                <Image src={vessel} className={styles.img} alt="" />
              </div>
              <p
                className={styles.partners__text}
                data-bg-color="#cccccc"
                data-fg-color="#000"
              >
                Vessel,
              </p>
            </div>
            <div className={styles.partners__item}>
              <div className={styles.partners__image}>
                <Image src={colgate} className={styles.img} alt="" />
              </div>
              <p
                className={styles.partners__text}
                data-bg-color="#cccccc"
                data-fg-color="#000"
              >
                Colgate,
              </p>
            </div>
            <div className={styles.partners__item}>
              <div className={styles.partners__image}>
                <Image src={fox} className={styles.img} alt="" />
              </div>
              <p
                className={styles.partners__text}
                data-bg-color="#cccccc"
                data-fg-color="#000"
              >
                Fox Sports,
              </p>
            </div>
            <div className={styles.partners__item}>
              <div className={styles.partners__image_big}>
                <Image src={ford} className={styles.img} alt="" />
              </div>
              <p
                className={styles.partners__text}
                data-bg-color="#cccccc"
                data-fg-color="#000"
              >
                Ford
              </p>
            </div>
          </div>
        </section>
        <section className={styles.section_2}>
          <div className={styles.heading}>
            <h1 className={styles.head}>
              What are we
              <br />
              fighting against?
            </h1>
            <p className={styles.title}>
              Users do not use my design or project
            </p>
          </div>
          <div className={styles.body}>
            <div className={styles.work_photo}>
              <div className={styles.work_photo_item}>
                <Image src={fighting_1} alt="" className={styles.img} />
              </div>
              <div className={styles.work_photo_item}>
                <Image src={fighting_2} alt="" className={styles.img} />
              </div>
              <div className={styles.work_photo_item}>
                <Image src={fighting_3} alt="" className={styles.img} />
              </div>
            </div>
            <div className={styles.work_text}>
              <div className={styles.work_info}>
                <h1 className={styles.work_heading}>Team Extension</h1>
                <p className={styles.work_title}>
                  <span>Hire a cohesive team.</span> A team that is integrated
                  into your process and
                  <span> offers practical solutions</span> aligned with your
                  priorities and goals.
                </p>
                <div className={styles.work_hashtags}>
                  <div className={styles.work_hashtag}>Staff Augmentation</div>
                  <div className={styles.work_hashtag}>Consulting</div>
                  <div className={styles.work_hashtag}>Outstaff</div>
                </div>
              </div>
              <div className={styles.work_info}>
                <h1 className={styles.work_heading}>
                  UX Architect & CX Design
                </h1>
                <p className={styles.work_title}>
                  Besides complex architectural solutions, you get a
                  personalized approach to
                  <span> enhance user experience</span>, helping you achieve
                  business goals of the brand.
                </p>
                <div className={styles.work_hashtags}>
                  <div className={styles.work_hashtag}>Discovery</div>
                  <div className={styles.work_hashtag}>Analysis</div>
                  <div className={styles.work_hashtag}>Research</div>
                </div>
              </div>
              <div className={styles.work_info}>
                <h1 className={styles.work_heading}>UI & Visual Design</h1>
                <p className={styles.work_title}>
                  Get <span>world-class graphic and interface design </span>
                  that effectively conveys your brand&apos;s message.
                </p>
                <div className={styles.work_hashtags}>
                  <div className={styles.work_hashtag}>Mobile Application</div>
                  <div className={styles.work_hashtag}>Websites</div>
                  <div className={styles.work_hashtag}>Branding</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section_3}>
          <div className={styles.body}>
            <div className={styles.wrapper}>
              <h2 className={styles.heading_section_3}>
                Everyone deserves
                <br />
                a clear & distinct
                <br />
                design
              </h2>
              <div className={styles.title}>
                <div className={styles.quote}>“</div>
                <div className={styles.wrapper}>
                  <p className={styles.text}>
                    For <span>88% of users</span>, lack of ease of use may
                    <br />
                    be the reason they never return to a site
                  </p>
                  <p className={styles.sub_text}>Selz</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.images}>
            <div className={styles.image}>
              <Image
                className={styles.img}
                src={section_3_images_1}
                alt=""
              ></Image>
            </div>
            <div className={styles.image}>
              <Image
                className={styles.img}
                src={section_3_images_2}
                alt=""
              ></Image>
            </div>
            <div className={styles.image}>
              <Image
                className={styles.img}
                src={section_3_images_3}
                alt=""
              ></Image>
            </div>
            <div className={styles.image}>
              <Image
                className={styles.img}
                src={section_3_images_4}
                alt=""
              ></Image>
            </div>
            <div className={styles.image}>
              <Image
                className={styles.img}
                src={section_3_images_5}
                alt=""
              ></Image>
            </div>
            <div className={styles.image}>
              <Image
                className={styles.img}
                src={section_3_images_6}
                alt=""
              ></Image>
            </div>
            <div className={styles.image}>
              <Image
                className={styles.img}
                src={section_3_images_7}
                alt=""
              ></Image>
            </div>
            <div className={styles.image}>
              <Image
                className={styles.img}
                src={section_3_images_8}
                alt=""
              ></Image>
            </div>
            <div className={styles.image}>
              <Image
                className={styles.img}
                src={section_3_images_9}
                alt=""
              ></Image>
            </div>
          </div>
        </section>
        <section className={styles.section_4}>
          <h1 className={styles.heading_section_4}>
            Your challenges,
            <br />
            our expertise
            <br />
            in solving them
          </h1>
          <div className={styles.body_section_4}>
            <div className={styles.card}>
              <div className={styles.left}>
                <h3 className={styles.challenges__title}>
                  Launching new products <br /> for enterprises
                </h3>
                <p className={styles.challenges_text}>
                  For the last 2 years we saved over<span> $11.000.000 </span>
                  for our enterprise customers.
                </p>
              </div>
              <div className={styles.right}>
                <p className={styles.challenges_value}>$5M+</p>
                <div className={styles.challenges_content}>
                  <div className={styles.challenges_info}>
                    <div className={styles.challenges_image}>
                      <Image
                        className={styles.img}
                        alt="Kohler logo"
                        src={kohler}
                      />
                    </div>
                    <p className={styles.challenges_company}>
                      Acquisition of Kohler
                    </p>
                  </div>
                  <p className={styles.challenges_strategy}>
                    Creating a new mobile app with an existing team in the
                    company
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.left}>
                <div className={styles.challenges__title}>
                  <h3>
                    We make money <br /> for startups.
                  </h3>
                  <div className={styles.challenges__wrapper}>
                    <h3>Series A </h3>
                    <Image alt="Arrow right" src={ArrowRight} />
                    <h3> Series B</h3>
                  </div>
                </div>
                <p className={styles.challenges_text}>
                  Last 3 years over<span> $120.000.000 </span>
                  clients’ investment.
                </p>
              </div>
              <div className={styles.right}>
                <p className={styles.challenges_value}>$22M+</p>
                <div className={styles.challenges_content}>
                  <div className={styles.challenges_info}>
                    <div className={styles.challenges_image}>
                      <Image
                        className={styles.img}
                        alt="Kohler logo"
                        src={vessel}
                      />
                    </div>
                    <p className={styles.challenges_company}>
                      Acquisition of Vessel
                    </p>
                  </div>
                  <p className={styles.challenges_strategy}>Rebranding 360</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section_5}>
          <div className={styles.animation_Div}>
            <div className={styles.trial__wrapper}>
              <div className={styles.trial__image}>
                <Image
                  className={styles.img}
                  alt="Design trial"
                  src={Section_5_back}
                />
              </div>
              <div className={styles.trial__body}>
                <div className={styles.trial__text}>
                  Design pilot. Get started with your first pilot
                </div>
                <Link className={styles.trial__link} href="/pilot">
                  Book a pilot
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section_6}>
          <div className={styles.heading_section_6}>
            <h2 className={styles.section_6_title}>What’s next</h2>
            <div className={styles.section_6_info}>
              <p className={styles.section_6_text}>
                How will our cooperation <br /> go after the start of work
              </p>
            </div>
          </div>
          <div className={styles.body_section_6}>
            <div className={styles.section_6_text}>
              <div className={styles.section_6_work_info}>
                <h1 className={styles.section_6_work_heading}>Brief</h1>
                <p className={styles.section_6_work_title}>
                  You will <span>get to know our team</span> while we dive into
                  project details for effective communication
                </p>
                <ul className={styles.section_6_work_hashtags}>
                  <li className={styles.section_6_work_hashtag}>
                    <p className={styles.text}>Our questionnaire</p>
                  </li>
                  <li className={styles.section_6_work_hashtag}>
                    <p className={styles.text}>Introductory call</p>
                  </li>
                  <li className={styles.section_6_work_hashtag}>
                    <p className={styles.text}>Project documentation</p>
                  </li>
                </ul>
              </div>
              <div className={styles.section_6_work_info}>
                <h1 className={styles.section_6_work_heading}>Proposal</h1>
                <p className={styles.section_6_work_title}>
                  You&apos;ll receive a detailed proposal with
                  <span> project goals and timeline</span> to foster mutual
                  understanding
                </p>
                <ul className={styles.section_6_work_hashtags}>
                  <li className={styles.section_6_work_hashtag}>
                    <p className={styles.text}>Budget</p>
                  </li>
                  <li className={styles.section_6_work_hashtag}>
                    <p className={styles.text}>Team size</p>
                  </li>
                  <li className={styles.section_6_work_hashtag}>
                    <p className={styles.text}>Timeline</p>
                  </li>
                </ul>
              </div>
              <div className={styles.section_6_work_info}>
                <h1 className={styles.section_6_work_heading}>Contract</h1>
                <p className={styles.section_6_work_title}>
                  We <span>coordinate all necessary documentation</span> from
                  both sides before the project starts for seamless
                  collaboration
                </p>
                <ul className={styles.section_6_work_hashtags}>
                  <li className={styles.section_6_work_hashtag}>
                    <p className={styles.text}>Invoice and contract issuance</p>
                  </li>
                  <li className={styles.section_6_work_hashtag}>
                    <p className={styles.text}>Making deposit</p>
                  </li>
                  <li className={styles.section_6_work_hashtag}>
                    <p className={styles.text}>Start project</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.section_6_photo}>
              <div className={styles.section_6_work_photo_item}>
                <Image src={section_6_1} alt="" className={styles.img} />
              </div>
              <div className={styles.section_6_work_photo_item}>
                <Image src={section_6_2} alt="" className={styles.img} />
              </div>
              <div className={styles.section_6_work_photo_item}>
                <Image src={section_6_3} alt="" className={styles.img} />
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
};

export default Home;
