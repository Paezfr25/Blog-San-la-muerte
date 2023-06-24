window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.querySelector('.back-to-top').classList.add('show');
    } else {
      document.querySelector('.back-to-top').classList.remove('show');
    }
  }