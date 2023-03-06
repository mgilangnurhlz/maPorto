function myFunction(x) {
  if (x.matches) {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 148 ||
        document.documentElement.scrollTop > 148
      ) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-70px";
      }
    }
  } else {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 390 ||
        document.documentElement.scrollTop > 390
      ) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-70px";
      }
    }
  }
}

var x = window.matchMedia("(max-width: 700px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction);
