const artists = [
  {
    name: 'Clean Bandit',
    role: 'Music Group',
    title: 'Artists',
    about:
      'Clean Bandit is a music group behind the hit songs Rather Be and Rockaybye. They are comprised of 3 members',
    img: './images/clean-bandit.jpg',
  },
  {
    name: 'David Guetta',
    role: 'Dj, Producer',
    about:
      'He featured greately in the Tomorrowlad  festival since its inception and has been one of the top electronic dance djs of all time',
    img: './images/dg.jpg',
  },
  {
    name: 'Martin Garrix',
    role: 'Music Producer and Dj',
    about:
      'Martijn Gerard Garritsen is one of the youngest in the industry and began his music career less than 10 years ago. He is behind the hit single Animals.',
    img: './images/mrtin garrix.jpg',
  },
  {
    name: 'Avicii',
    role: 'DJ, Music Producer',
    about:
      'Arguably the best in the business. Has worked with over a dozen top Djs including pop artists like Rita Ora',
    img: './images/av.jpg',
  },
  {
    name: 'Dj Snake',
    role: 'Dj, Producer',
    about:
      'He broke the internet and the world with is 2013 hit song Turn Down for What Has worked with other top musicians like Selena Gomez',
    img: './images/djsnake.png',
  },
  {
    name: 'Alan Walker',
    role: 'Director, musician, dj',
    about:
      'He has had success since releasing Faded in 2016. He has  a wide variety of followers, knows as the Walkers',
    img: './images/alw.jpg',
  },
];

function cleanBandit() {
  document.getElementById('artistss').innerHTML = artists[0].title;
  document.getElementById('img1').src = artists[0].img;
  document.getElementById('h1').innerHTML = artists[0].role;
  document.getElementById('ha').innerHTML = artists[0].name;
  document.getElementById('p1').innerHTML = artists[0].about;
}
cleanBandit();
function davidGuetta() {
  document.getElementById('img2').src = artists[1].img;
  document.getElementById('h2').innerHTML = artists[1].role;
  document.getElementById('p2').innerHTML = artists[1].about;
  document.getElementById('hb').innerHTML = artists[1].name;
}
davidGuetta();
function martinGarrix() {
  document.getElementById('img3').src = artists[2].img;
  document.getElementById('h3').innerHTML = artists[2].role;
  document.getElementById('p3').innerHTML = artists[2].about;
  document.getElementById('hc').innerHTML = artists[2].name;
}
martinGarrix();
function aviCii() {
  document.getElementById('img4').src = artists[3].img;
  document.getElementById('h4').innerHTML = artists[3].role;
  document.getElementById('p4').innerHTML = artists[3].about;
  document.getElementById('hd').innerHTML = artists[3].name;
}
aviCii();
function djSnake() {
  document.getElementById('img5').src = artists[4].img;
  document.getElementById('h5').innerHTML = artists[4].role;
  document.getElementById('p5').innerHTML = artists[4].about;
  document.getElementById('he').innerHTML = artists[4].name;
}
djSnake();
function alanWalker() {
  document.getElementById('img6').src = artists[5].img;
  document.getElementById('h6').innerHTML = artists[5].role;
  document.getElementById('p6').innerHTML = artists[5].about;
  document.getElementById('hf').innerHTML = artists[5].name;
}
alanWalker();
