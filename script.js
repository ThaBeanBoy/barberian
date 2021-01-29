const parellex = (element, speed) => {
  const el = document.querySelector(element);
  el.style.transform = `translateY(${window.scrollY * speed}px)`;
};

const showText = (element, scrollPos, rise) => {
  const el = document.querySelector(element).style;

  if (window.scrollY >= scrollPos) {
    el.opacity = '1';

    //rise animation
    if (rise) {
      el.transform = 'translateY(0%)';
    }
  }
};

const innerHeight_calc = (num) => {
  return num * window.innerHeight;
};

let landing_Completion = 0;
let nav = document.querySelector('nav').style;
let logo = document.querySelector('.logo').style;
window.addEventListener('scroll', () => {
  //Parellex animations
  parellex('#black-dude', 0.35);
  parellex('#white-dude', -0.15);
  parellex('#indian-dude', -0.45);
  parellex('#other-black-guy', -0.8);
  parellex('#asian-dude', 0.1);

  //text animtions
  showText('#para1', innerHeight_calc(0.21), false);
  showText('#para2', innerHeight_calc(0.79), false);
  showText('#cuts-services', innerHeight_calc(1.75), true);
  showText('#products-services', innerHeight_calc(1.75), true);

  landing_Completion = window.scrollY / window.innerHeight;
  if (landing_Completion <= 1) {
    const newBackground = `rgba(129, 108, 91, ${landing_Completion})`;
    const newBorder = `solid 0.1em rgba(41, 41, 41, ${landing_Completion})`;

    nav.backgroundColor = newBackground;
    nav.border = newBorder;

    logo.backgroundColor = newBackground;
    logo.border = newBorder;
  } else {
    const newBackground = `rgba(129, 108, 91, 1)`;
    const newBorder = `solid 0.1em rgba(41, 41, 41, 1)`;

    nav.backgroundColor = newBackground;
    nav.border = newBorder;

    logo.backgroundColor = newBackground;
    logo.border = newBorder;
  }
});

const open_nav_button = document.querySelector('.open-nav');
const nav_box = document.querySelector('.mobile-nav-box');
let is_nav_open = false;
open_nav_button.addEventListener('click', () => {
  //const is_nav_open = JSON.parse(nav_box.getAttribute('data-open'));
  const [hamburg1, hamburg2, hamburg3] = document.querySelectorAll('.hamburg');

  if (!is_nav_open) {
    //Opening nav
    is_nav_open = true;
    nav_box.style.width = '70vw';
    nav_box.style.paddingLeft = '1.5em';

    hamburg2.style.opacity = '0';
    setTimeout(() => {
      hamburg1.style.transform = 'translate(0, 96%) rotate(45deg)';
      hamburg3.style.transform = 'translate(0, -96%) rotate(-45deg)';
    }, 500);
  } else {
    //Closing nav
    is_nav_open = false;
    nav_box.style.width = '0vw';
    nav_box.style.paddingLeft = '0em';

    hamburg1.style.transform = 'translate(0, -35%) rotate(0deg)';
    hamburg3.style.transform = 'translate(0, 35%) rotate(0deg)';
    setTimeout(() => {
      hamburg2.style.opacity = '1';
    }, 500);
  }
});
