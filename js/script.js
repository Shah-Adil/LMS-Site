const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  preloader.style = "display: none; ";
});

// img gallery

$(".img-view-btn").click(function () {
  let imgCon = $(".image-attr");
  imgCon.attr("src", this.src);
  $(".img-gallery-modal").addClass("active");
});

$("#img-gallery-close").click(function () {
  $(".img-gallery-modal").removeClass("active");
});

// img gallery  end

$("#footer-menu-btn").click((e) => {
  e.preventDefault();
  $(".mobile-nav").addClass("active");
});
$(".course-sidenav-title i").click((e) => {
  e.preventDefault();
  $(".mobile-nav").removeClass("active");
});

$(".mobile-sidenav-menu-close").click(function (params) {
  // e.preventDefault()
  $(".mobile-nav").removeClass("active");
  $(".mobile-sidenav-menu-close").removeClass("active");
  $(this).addClass("active");
});

$("#arrow-left").click((e) => {
  e.preventDefault();
  $(".aside-nav").toggleClass("active");
});
//

const $list = document.querySelectorAll(".footer-menu li");

function activeLink() {
  $list.forEach(($li) => {
    $li.classList.remove("active");
  });
  this.classList.add("active");
}

$list.forEach(($li) => {
  $li.addEventListener("click", activeLink);
});

//
