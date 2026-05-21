function locomotiveAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    lerp: 0.08,
    multiplier: 1,
    smartphone: {
      smooth: true,
    },
    tablet: {
      smooth: true,
    },
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();

  window.addEventListener("load", function () {
    locoScroll.update();
    ScrollTrigger.refresh();
  });

  return locoScroll;
}

const locoScroll = locomotiveAnimations();

function navbarAnimation() {
  gsap.to("#nav-part1 img", {
    yPercent: -100,
    ease: "none",
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top top",
      end: "top -5%",
      scrub: 1,
    },
  });

  gsap.to("#nav-part2 #links", {
    yPercent: -100,
    opacity: 0,
    ease: "none",
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top top",
      end: "top -5%",
      scrub: 1,
    },
  });
}

navbarAnimation();

function loadAnimation() {
  const tl = gsap.timeline({
    defaults: {
      ease: "power4.out",
    },
  });

  tl.from("#nav", {
    y: -36,
    opacity: 0,
    duration: 0.8,
  })
    .from(
      "#page1 h1",
      {
        y: 120,
        opacity: 0,
        duration: 0.95,
        stagger: 0.22,
      },
      "-=0.35"
    )
    .from(
      "#page1 #video-container",
      {
        y: 50,
        scale: 0.94,
        opacity: 0,
        duration: 0.75,
      },
      "-=0.35"
    );
}

loadAnimation();

function revealAnimation(selector, trigger, options) {
  gsap.from(selector, {
    y: options?.y ?? 80,
    opacity: 0,
    duration: options?.duration ?? 0.95,
    stagger: options?.stagger ?? 0.12,
    ease: options?.ease ?? "power3.out",
    scrollTrigger: {
      trigger,
      scroller: "#main",
      start: options?.start ?? "top 78%",
      once: true,
    },
  });
}

function scrollRevealAnimations() {
  revealAnimation("#intro h2, #intro p, #intro a", "#intro", {
    y: 90,
    stagger: 0.16,
  });

  revealAnimation("#page2 .elem", "#page2", {
    y: 110,
    stagger: 0.16,
    start: "top 72%",
  });

  revealAnimation("#page2 .dets", "#page2", {
    y: 28,
    duration: 0.55,
    stagger: 0.1,
    start: "top 62%",
  });

  revealAnimation("#mission h2, .mission-copy p, .mission-copy a", "#mission", {
    y: 85,
    stagger: 0.13,
  });

  revealAnimation(".child", "#page3", {
    y: 95,
    stagger: 0.12,
    start: "top 72%",
  });

  revealAnimation(
    ".message-rule, .message-row article, #messages h2",
    "#messages",
    {
      y: 75,
      stagger: 0.1,
      start: "top 74%",
    }
  );

  revealAnimation(".impact-copy > *, .impact-image", "#impact", {
    y: 85,
    stagger: 0.14,
    start: "top 72%",
  });

  revealAnimation(".footer-column, .footer-logo, .footer-legal, .footer-bottom p", "#footer", {
    y: 70,
    stagger: 0.12,
    start: "top 78%",
  });
}

scrollRevealAnimations();

function videoconAnimation() {
  const videocon = document.querySelector("#video-container");
  const playbtn = document.querySelector("#play");
  const canHover =
    window.matchMedia("(hover: hover)").matches && window.innerWidth > 760;

  if (!videocon || !playbtn) return;

  if (!canHover) {
    gsap.set(playbtn, {
      clearProps: "all",
    });
    return;
  }

  gsap.set(playbtn, {
    xPercent: -50,
    yPercent: -50,
    scale: 0,
    opacity: 0,
  });

  const moveX = gsap.quickTo(playbtn, "left", {
    duration: 0.35,
    ease: "power3.out",
  });
  const moveY = gsap.quickTo(playbtn, "top", {
    duration: 0.35,
    ease: "power3.out",
  });

  videocon.addEventListener("mouseenter", function () {
    gsap.to(playbtn, {
      scale: 1,
      opacity: 1,
      duration: 0.32,
      ease: "power3.out",
    });
  });

  videocon.addEventListener("mouseleave", function () {
    gsap.to(playbtn, {
      scale: 0,
      opacity: 0,
      duration: 0.32,
      ease: "power3.out",
    });
  });

  videocon.addEventListener("mousemove", function (event) {
    moveX(event.clientX);
    moveY(event.clientY);
  });
}

videoconAnimation();

function cardHoverAnimation() {
  document.querySelectorAll("#page2 .elem").forEach(function (elem) {
    const image = elem.querySelector("img");
    const dets = elem.querySelector(".dets");

    elem.addEventListener("mouseenter", function () {
      gsap.to(image, {
        duration: 0.7,
        ease: "power3.out",
      });
      gsap.to(dets, {
        duration: 0.35,
        ease: "power3.out",
      });
    });

    elem.addEventListener("mouseleave", function () {
      gsap.to(image, {
        duration: 0.7,
        ease: "power3.out",
      });
      gsap.to(dets, {
        duration: 0.35,
        ease: "power3.out",
      });
    });
  });
}

cardHoverAnimation();

function cursorAnimation() {
  const cursor = document.querySelector("#cursor");
  const canHover = window.matchMedia("(hover: hover)").matches;

  if (!cursor || !canHover) return;

  gsap.set(cursor, {
    xPercent: -50,
    yPercent: -50,
    scale: 0,
  });

  const moveX = gsap.quickTo(cursor, "left", {
    duration: 0.42,
    ease: "power3.out",
  });
  const moveY = gsap.quickTo(cursor, "top", {
    duration: 0.42,
    ease: "power3.out",
  });

  document.addEventListener("mousemove", function (event) {
    moveX(event.clientX);
    moveY(event.clientY);
  });

  const colors = ["#e4e4e4ff"];

  document.querySelectorAll(".child").forEach(function (child, index) {
    child.addEventListener("mouseenter", function () {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: colors[index % colors.length],
        duration: 0.35,
        ease: "power3.out",
      });
    });

    child.addEventListener("mouseleave", function () {
      gsap.to(cursor, {
        scale: 0,
        duration: 0.35,
        ease: "power3.out",
      });
    });
  });
}

cursorAnimation();

function messageAnimation() {
  const messages = document.querySelectorAll(".message-row article");
  const headline = document.querySelector("#messages h2");

  messages.forEach(function (message) {
    message.addEventListener("mouseenter", function () {
      messages.forEach(function (item) {
        item.classList.remove("active");
      });

      message.classList.add("active");

      gsap.fromTo(
        headline,
        {
          y: 18,
          opacity: 0.55,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.35,
          ease: "power3.out",
        }
      );
    });
  });
}

messageAnimation();
