var lastKnownScrollPosition = 0;
var ticking = false;
var arrow = document.getElementById("arrow");

function doSomething(scrollPos) {

    if(scrollPos < 100 || (window.innerHeight + scrollPos) >= document.body.offsetHeight) {
        arrow.classList.add("hidden");
    } else if(scrollPos >= 100) {
        arrow.classList.remove("hidden");
    }

}

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    // Throttle the event to "do something" every 20ms
    setTimeout(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    }, 20);

    ticking = true;
  }
});