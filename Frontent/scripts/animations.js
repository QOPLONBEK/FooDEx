const tl = gsap.timeline();

// Main
tl.fromTo(
  ".main-content-title",
  { opacity: 0, y: 25 },
  { opacity: 1, y: 0, duration: 0.25, ease: "power4" },
  "-=0.3"
);

$(".main-content-grid div").each(function () {
  console.log(this);
  tl.fromTo(
    this,
    { opacity: 0, y: 25 },
    { opacity: 1, y: 0, duration: 0.25, ease: "power4" },
    "-=0.2"
  );
});

// Order

const initalOrderWidth = $(".order").css("width");
const initalOrderPadding = $(".order").css("padding");
tl.fromTo(
  ".order",
  { opacity: 0, width: "0px", padding: "0px" },
  {
    opacity: 1,
    width: initalOrderWidth,
    padding: initalOrderPadding,
    duration: 0.35,
    ease: "power4",
  },
  "-=0.6"
);