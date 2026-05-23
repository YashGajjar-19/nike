function locoAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    scrollbar: false,
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
  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
}
locoAnimations();

function navbarAnimation() {
  gsap.to("#navleft img", {
    yPercent: -100,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -1%",
      scrub: 0.5,
    },
  });

  gsap.to("#navright #links a", {
    opacity: 0,
    y: -10,
    delay: 0.1,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -2%",
      scrub: 0.5,
    },
  });

  var menu = document.querySelector("#menuBar");
  var isMenuOpen = false;

  menu.addEventListener("click", function () {
    if (isMenuOpen) {
      gsap.to("#menu-overlay", {
        y: "-100%",
        opacity: 0,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });

      gsap.to(".menu-link", {
        y: "100%",
        duration: 0.4,
        stagger: 0.1,
        ease: "power3.in",
      });

      gsap.to(".menu-footer-col", {
        opacity: 0,
        y: 15,
        duration: 0.3,
      });

      gsap.to("#navbar #links", {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.3,
      });

      gsap.to("#navbar #links a", { color: "black", duration: 0.4 });
      gsap.to("#navbar #icons", { backgroundColor: "#f7f7f7", duration: 0.4 });
      gsap.to("#navbar #icons span", {
        color: "rgba(0, 0, 0, 0.8)",
        duration: 0.4,
      });
      gsap.to("#navleft img", { filter: "none", duration: 0.4 });

      menu.textContent = "equal";
      isMenuOpen = false;
    } else {
      gsap.to("#menu-overlay", {
        y: "0%",
        opacity: 1,
        autoAlpha: 1,
        duration: 0.3,
        ease: "power3.inOut",
      });

      gsap.fromTo(
        ".menu-link",
        { y: "100%" },
        {
          y: "0%",
          duration: 0.5,
          stagger: 0.07,
          ease: "power3.out",
          delay: 0.25,
        },
      );

      gsap.fromTo(
        ".menu-footer-col",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.1,
          stagger: 0.07,
          ease: "power3.out",
          delay: 0.4,
        },
      );

      gsap.to("#navbar #links", {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3,
      });

      gsap.to("#navbar #icons", {
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        duration: 0.4,
      });
      gsap.to("#navbar #icons span", { color: "#ffffff", duration: 0.4 });
      gsap.to("#navleft img", {
        filter: "brightness(0) invert(1)",
        duration: 0.4,
      });

      menu.textContent = "close";
      isMenuOpen = true;
    }
  });
}
navbarAnimation();

function videoconAnimation() {
  var videocon = document.querySelector("#video-container");
  var playbtn = document.querySelector("#play");

  gsap.set(playbtn, { xPercent: -50, yPercent: -50 });

  videocon.addEventListener("mouseenter", function () {
    gsap.to(playbtn, {
      scale: 1,
      opacity: 1,
    })
  });

  videocon.addEventListener("mouseleave", function () {
    gsap.to(playbtn, {
      scale: 0,
      opacity: 0,
    })
  });

  videocon.addEventListener("mousemove", function (dets) {
    var rect = videocon.getBoundingClientRect();
    gsap.to(playbtn, {
      left: dets.clientX - rect.left,
      top: dets.clientY - rect.top,
    })
  });
}
videoconAnimation();

function loadAnimation() {
  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
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

// All scroll reveal animations
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