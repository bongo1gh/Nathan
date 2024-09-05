function toggleNav() {
  var sideNav = document.getElementById("sidenav");
  if (sideNav.style.width === "250px") {
    sideNav.style.width = "0";
  } else {
    sideNav.style.width = "250px";
  }
}

  

  let slideIndex = 0;
  showSlide(slideIndex);

  function showSlide(index) {
    const slides = document.getElementsByClassName("slide");
    const slider = document.getElementsByClassName("slider")[0];

    // Wrap around to the first slide if index is out of bounds
    if (index >= slides.length) {
      index = 0;
    } else if (index < 0) {
      index = slides.length - 1;
    }

    // Update slide position
    slider.style.transform = `translateX(-${index * 100}%)`;

    slideIndex = index;
  }

  // Automatic slide show
  setInterval(function() {
    showSlide(slideIndex + 1);
  }, 3000);

  //reset form
function resetForm() {
  document.getElementById("contact-form").reset();
}