window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    var button = document.getElementById("btnVolverArriba");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  }
  
  // Hace scroll hacia arriba cuando se hace clic en el botón
  document.getElementById("btnVolverArriba").onclick = function() {
    scrollToTop();
  };
  
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }