(function(){
  var descs = document.querySelectorAll('.clanek .desc');
  
   var multiClickHandler = function (handlers, delay) {
    var clicks = 0, timeout, delay = delay || 250;
    return function (e) {
      clicks++;
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        if(handlers[clicks]) handlers[clicks](e);
        clicks = 0;
      }, delay);
    };
  }
  
  for (var i = 0; i < descs.length; i++) {
    var handler = multiClickHandler({
      2: function (e) {
        e.target.classList.toggle("expand");
        return false;
        e.preventDefault();
      }
    });
    descs[i].addEventListener("touchend", handler, false);
    descs[i].addEventListener("click", handler, false);
  }
})()