const submenutrigger = document.querySelectorAll(".nav-bar > li");
const dropBackground = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".topnavBar");
/*activate submenu*/
function activeSub() {
  this.classList.add("trigger-enter");
  setTimeout(
    () =>
      this.classList.contains("trigger-enter") &&
      this.classList.add("trigger-enter-active"),
    100
  );
  dropBackground.classList.add("open");
  /*get position on mouseover*/
  const dropdown = this.querySelector(".dropdown");
  // console.log(dropdown);
  const dropdownPos = dropdown.getBoundingClientRect();
  // console.log(dropdownPos);
  const navPos = nav.getBoundingClientRect();
  // console.log(navPos);
  const pos = {
    height: dropdownPos.height,
    width: dropdownPos.width,
    top: dropdownPos.top - navPos.top,
    left: dropdownPos.left - navPos.left,
  };
  /*set position of the arrow and submenu on mouseover*/
  dropBackground.style.setProperty("width", `${pos.width}px`);
  dropBackground.style.setProperty("height", `${pos.height}px`);
  dropBackground.style.setProperty(
    "transform",
    `translate(${pos.left}px, ${pos.top}px)`
  );
}
/*deactivate submenu*/
function deactiveSub() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  dropBackground.classList.remove("open");
}
/*mouse events*/
submenutrigger.forEach((trigger) =>
  trigger.addEventListener("mouseenter", activeSub)
);
submenutrigger.forEach((trigger) =>
  trigger.addEventListener("mouseleave", deactiveSub)
);

// MOBILE
$(document).ready(function () {
  // Scroll window
  $(document).scroll(function () {
    const currentPos = $(this).scrollTop();
    $(".header__bottom").toggleClass("active", currentPos > 250);
  });
});

// $(document).on("click", ".dropdown-mini", function (e) {
//   e.preventDefault();

//   $(".menu-level2").removeClass("active");
//   $(this).parents("a").siblings(".menu-level2").toggleClass("active");
// });
// toggle main-menu-mobile
$(document).on("click", ".bar .fa-bars", function (e) {
  e.preventDefault();
  $(".menu-mobile-overlay").addClass("active");
});

// cancel main-menu0mobile
$(document).click(function (e) {
  const target = e.target;

  // cancel main-menu0mobile
  if (
    target.classList.contains("close") ||
    target.classList.contains("menu-mobile-overlay")
  ) {
    $(".menu-mobile-overlay").removeClass("active");
  }
});
// Main menu mobile;
$(".nav-level-1 li").on("click", function () {
  $(".nav-level-1 li").removeClass("active");
  $(this).addClass("active");
});

$(".makeup__nav-tab li").on("click", function () {
  $(".makeup__nav-tab li").removeClass("active");
  $(this).addClass("active");
});
