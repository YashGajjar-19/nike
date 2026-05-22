function locoAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    scrollbar: false,
    lerp: 0.075,
    multiplier: 1,
    smartphone: { smooth: true },
    tablet: { smooth: true },
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

}
videoconAnimation();