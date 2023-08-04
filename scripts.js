gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
gsap.from(".hero p", { opacity: 0, y: 50, delay: 0.5, duration: 1 });
gsap.from(".cta-btn", { opacity: 0, scale: 0.5, delay: 1, duration: 1 });

gsap.from(".service-item", {
  opacity: 0,
  y: 50,
  stagger: 0.3,
  duration: 1,
  scrollTrigger: {
    trigger: ".services-list",
    start: "top center",
  },
});

gsap.from("form", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: "form",
    start: "top center",
  },
});
