// let progressBar = document.getElementById("progressBar");
// function progressBarScroll () {
//     let scroll  = document.body.scrollTop || document.documentElement.scrollTop,
//     height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
//     scrolled = (scroll / height) * 100;
//     progressBar.style.width = scrolled + "%";
 
// } 
// window.onscroll = function () {
//     progressBarScroll()
// }

function progressBarScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
        height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
  }
  
  window.onscroll = function () {
    progressBarScroll();
  };