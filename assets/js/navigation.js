$(document).ready(() => {
  hideOrCloseSumMenu = (element, req, done) => {
    if (req && req === "close") {
      element.toggleClass("open");
      element.animate(
        {
          height: 0,
        },
        300,
        "linear",
        function () {
          done();
        }
      );
    } else {
      if (element.hasClass("open")) {
        element.toggleClass("open");
        element.animate(
          {
            height: 0,
          },
          300,
          "linear",
          function () {
            done();
          }
        );
      } else {
        element.toggleClass("open");
        element.animate(
          {
            height: 120,
          },
          300,
          "linear",
          function () {
            done();
          }
        );
      }
    }
  };
  openOrCloseLeftNav = (element) => {
    if (element.hasClass("open")) {
      element.toggleClass("open");
      element.animate(
        {
          width: 300,
        },
        200,
        "linear"
      );
    } else {
      element.toggleClass("open");
      element.animate(
        {
          width: 65,
        },
        300,
        "linear"
      );
    }
  };
  
  animateImageLogo = (element) => {
    if (element.hasClass("open")) {
      element.toggleClass("open");
      element.animate(
        {
          height: 100,
        },
        200,
        "linear"
      );
    } else {
      element.toggleClass("open");
      element.animate(
        {
          height: 45,
        },
        300,
        "linear"
      );
    }
  };

  $("#orders").on("click", function () {
    if ($("#left-navigation").hasClass('open')) {
      animateImageLogo($("#logo-image"));
      openOrCloseLeftNav($("#left-navigation"));
      hideOrCloseSumMenu($("#orders-submenu"), null, () => {});
    } else {
       hideOrCloseSumMenu($("#orders-submenu"), null, () => {});
    }
  
  });

  $("#products").on("click", function () {
    if ($("#left-navigation").hasClass('open')) {
      animateImageLogo($("#logo-image"));
      openOrCloseLeftNav($("#left-navigation"));
       hideOrCloseSumMenu($("#products-submenu"), null, () => {});
    } else {
      hideOrCloseSumMenu($("#products-submenu"), null, () => {});
    }
  
  });

  $("#open-menu-btn").on("click", function () {
    hideOrCloseSumMenu($("#orders-submenu"), 'close', () => {
      hideOrCloseSumMenu($("#products-submenu"), 'close', () => {
        animateImageLogo($("#logo-image"));
        openOrCloseLeftNav($("#left-navigation"));
      });
    });
  });
});
