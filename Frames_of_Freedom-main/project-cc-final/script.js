// Loader animation
const count = document.querySelector('.count');

// Increment count every 28ms until 2023
setInterval(() => {
    if (Number(count.innerHTML) < 2023) {
        count.innerHTML = Number(count.innerHTML) + 1;
    }
}, 28);


gsap.fromTo(".count", { scale: 0.3 }, { scale: 1, duration: 1 });
gsap.fromTo(".count", { scale: 1 }, { scale: 2.5, duration: 1, opacity: 0, delay: 2 });

// loader animation ends





// Text animation
let tl = gsap.timeline();
tl.from("li , .nav-center", {
    opacity: 0,
    duration: 1.5,
    y: -40,
    delay: 3,
    stagger: 0.5,
});

tl.from("main h1:first-child", {
    opacity: 0.5,
    duration: 1,
    x: -1160,
});

tl.from(".second-heading", {
    opacity: 0.5,
    duration: 1,
    x: 1160,
});


// Scroll down arrow animation
tl.from(".scroll", {
    y: 10,
    repeat: -1,
    yoyo: true,
});

// Image section animations using ScrollTrigger
gsap.to(".img-section3", {
    scrollTrigger: {
        trigger: ".test-div",
        scroller: "body",
        scrub: 15,
        start: "top top",
    },
    width: "100%",
});

// Other image section animations
const animateImageSection = function (selector, xDirection)  {
    gsap.to(selector, {
        scrollTrigger: {
            trigger: ".test-div",
            scroller: "body",
            scrub: 10,
            start: "top 0",
        },
        width: 0,
        x: xDirection,
    });
};

animateImageSection(".img-section2", -200);
animateImageSection(".img-section4", 200);
animateImageSection(".img-section1", -400);
animateImageSection(".img-section5", 400);

// Timeline section animations using ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const animateTimelineBox = (boxIndex) => {
    const boxSelector = `.box${boxIndex}`;
    const contentSelector = `.content${boxIndex}`;
    const imageSelector = `.image${boxIndex}`;

    gsap.fromTo(contentSelector, {
        opacity: 0,
        y: -30,
    }, {
        opacity: 1,
        y: -100,
        duration: 1,
        delay: 0.1,
        ease: "back.inOut",
        scrollTrigger: {
            trigger: boxSelector,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "restart reverse restart reverse",
        },
    });

    gsap.fromTo(imageSelector, {
        scale: 0,

    }, {
        scale: 1,
        duration: 1,
        //ease: "back",
        scrollTrigger: {
            trigger: boxSelector,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "restart reverse restart reverse",
        },
    });
};

// Apply animations to timeline sections from 1 to 8
for (let i = 1; i <= 8; i++) {
    animateTimelineBox(i);
}

let currentScroll = 0;
let isScrollingDown = true;

let tween = gsap.to(".marquee__part", {xPercent: -100, repeat: -1, duration: 10, ease: "linear"}).totalProgress(0.5);

gsap.set(".marquee__inner", {xPercent: -50});

window.addEventListener("scroll", function(){
  
  if ( window.pageYOffset > currentScroll ) {
    isScrollingDown = true;
  } else {
    isScrollingDown = false;
  }
   
  gsap.to(tween, {
    timeScale: isScrollingDown ? 1 : -1
  });
  
  currentScroll = window.pageYOffset
});
