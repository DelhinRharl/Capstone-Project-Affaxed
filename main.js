// modal
const modal = document.getElementById('mcontainer');

document.getElementById('hamburger').addEventListener('click', () => {
  modal.style.display = 'block';
});
const close = document.getElementById('times');
close.onclick = function () {
  modal.style.display = 'none';
};
const program = document.getElementById('programpage');

program.onclick = function () {
  modal.style.display = 'none';
};
const sponsor = document.getElementById('sponsor');

sponsor.onclick = function () {
  modal.style.display = 'none ';
};
const news = document.getElementById('news');

news.onclick = function () {
  modal.style.display = 'none';
};
const booking = document.getElementById('bookpage');

booking.onclick = function () {
  modal.style.display = 'none';
};
