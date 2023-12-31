const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const section_1 = document.getElementById("about");
const col_left = document.querySelector(".col_left");
const timeln = gsap.timeline({ paused: true });

timeln.fromTo(col_left, {y: 0}, {y: '110vh', duration: 1, ease: 'none'}, 0);

const scroll_1 = ScrollTrigger.create({
    animation: timeln,
    trigger: section_1,
    start: 'top center',
    end: 'bottom center',
    scrub: true
});

const section_2 = document.getElementById("projects");
const col_left2 = document.querySelector(".project_title");
const timeln2 = gsap.timeline({ paused: true });

timeln2.fromTo(col_left2, {y: 0}, {y: '15vh', duration: 1, ease: 'none'}, 0);

const scroll_2 = ScrollTrigger.create({
    animation: timeln2,
    trigger: section_2,
    start: 'top center',
    end: 'bottom center',
    scrub: true
});

const section_3 = document.getElementById("projects");
const col_right = document.querySelector(".project_desc");
const timeln3 = gsap.timeline({ paused: true });

timeln3.fromTo(col_right, {y: 0}, {y: '10vh', duration: 1, ease: 'yes'}, 0);

const scroll_3 = ScrollTrigger.create({
    animation: timeln3,
    trigger: section_3,
    start: 'top center',
    end: 'bottom center',
    scrub: true
});

const section_4 = document.getElementById("projects");
let box_items = gsap.utils.toArray(".horizontal__item");

gsap.to(box_items, {
  xPercent: -220 * (box_items.length - 1),
  ease: "sine.out",
  scrollTrigger: {
    trigger: section_4,
    pin: true,
    scrub: 5,
    snap: 0,
    end: "+=" + section_4.offsetWidth
  }
});

const section_5 = document.getElementById("end");
const lets = document.querySelector(".end_text");
const timeln5 = gsap.timeline({ paused: true });

timeln5.fromTo(lets, {y: 0}, {y: '80vh', duration: 1, ease: 'none'}, 0);

const scroll_5 = ScrollTrigger.create ({
    animation: timeln5,
    trigger: section_5,
    start: 'top center',
    end: 'bottom center',
    scrub: true
});