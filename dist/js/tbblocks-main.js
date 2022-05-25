/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./src/js/tbblocks-main.js ***!
  \*********************************/
document.addEventListener('DOMContentLoaded', function () {
  /**
   * Header Toggle
   */
  let slideUp = function (target) {
    let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.boxSizing = "border-box";
    target.style.height = target.offsetHeight + "px";
    target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.style.display = "none";
      target.style.removeProperty("height");
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property"); //alert("!");
    }, duration);
  };

  let slideDown = function (target) {
    let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    target.style.removeProperty("display");
    let display = window.getComputedStyle(target).display;
    if (display === "none") display = "block";
    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = "border-box";
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = height + "px";
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    window.setTimeout(() => {
      target.style.removeProperty("height");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
    }, duration);
  };

  let slideToggle = function (target) {
    let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

    if (window.getComputedStyle(target).display === "none") {
      return slideDown(target, duration);
    } else {
      return slideUp(target, duration);
    }
  };

  let screen_width = screen.width;

  if (screen_width <= 1140) {
    var menu_btn = document.getElementById('menu--btn');
    var menu = document.querySelector('.header--nav');
    var site_nav = document.querySelector('.site--nav');
    let rect = site_nav.getBoundingClientRect();
    site_nav.style = "width:" + screen_width + "px;left:-" + rect.left + "px;";
    let speedAnimation = 400;
    const sub_menu_trigger = document.querySelectorAll('.menu-item-has-children svg');
    menu_btn.addEventListener('click', event => {
      menu.classList.toggle("is--active");
      menu_btn.classList.toggle("is--active");

      if (!document.querySelectorAll('.is--active').length) {
        sub_menu_trigger.forEach(sub_menu => {
          var parent_ele = sub_menu.closest("li");
          var target = parent_ele.getElementsByClassName("sub-menu");
          slideUp(target[0], speedAnimation);
        });
      }
    });
    sub_menu_trigger.forEach(sub_menu => {
      sub_menu.addEventListener('click', function handleClick(event) {
        event.preventDefault();
        var parent_ele = sub_menu.closest("li");
        var target = parent_ele.getElementsByClassName("sub-menu");
        slideToggle(target[0], speedAnimation);
      });
    });
  } // header toggle ends 

});
/******/ })()
;
//# sourceMappingURL=tbblocks-main.js.map