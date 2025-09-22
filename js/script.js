// Hiện nút back to top khi cuộn xuống
const backToTop = document.getElementById("backToTop");

window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};

// Cuộn lên đầu trang khi bấm nút
backToTop.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
