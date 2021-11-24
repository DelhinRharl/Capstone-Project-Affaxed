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
    img: './images/mrtin-garrix.jpg',
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
const artist = document.createElement('h1');
const list = document.createElement('ul');
const lista = document.createElement('li');
const listb = document.createElement('img');
const listc = document.createElement('div');
const listd = document.createElement('h4');
const liste = document.createElement('h5');
const listf = document.createElement('p');

const listaa = document.createElement('li');
const listba = document.createElement('img');
const listca = document.createElement('div');
const listda = document.createElement('h4');
const listea = document.createElement('h5');
const listfa = document.createElement('p');

const listab = document.createElement('li');
const listbb = document.createElement('img');
const listcb = document.createElement('div');
const listdb = document.createElement('h4');
const listeb = document.createElement('h5');
const listfb = document.createElement('p');

const listac = document.createElement('li');
const listbc = document.createElement('img');
const listcc = document.createElement('div');
const listdc = document.createElement('h4');
const listec = document.createElement('h5');
const listfc = document.createElement('p');

const listad = document.createElement('li');
const listbd = document.createElement('img');
const listcd = document.createElement('div');
const listdd = document.createElement('h4');
const listed = document.createElement('h5');
const listfd = document.createElement('p');

const listae = document.createElement('li');
const listbe = document.createElement('img');
const listce = document.createElement('div');
const listde = document.createElement('h4');
const listee = document.createElement('h5');
const listfe = document.createElement('p');

// clean bandit
const headline = document.getElementById('headliners');
const arts = document.getElementById('artistss');
headline.append(arts);
headline.append(list);
list.append(lista);
lista.append(listb);
lista.append(listc);
listc.append(listd);
listc.append(liste);
listc.append(listf);

artist.setAttribute('id', 'artistss');
list.setAttribute('id', 'headlist');
lista.setAttribute('id', 'card1');
listb.setAttribute('id', 'img1');
listc.setAttribute('id', 'awname');
listd.setAttribute('id', 'ha');
liste.setAttribute('id', 'h1');
listf.setAttribute('id', 'p1');

function cleanBandit() {
  document.getElementById('artistss').innerHTML = artists[0].title;
  document.getElementById('img1').src = artists[0].img;
  document.getElementById('h1').innerHTML = artists[0].role;
  document.getElementById('ha').innerHTML = artists[0].name;
  document.getElementById('p1').innerHTML = artists[0].about;
}
cleanBandit();
// davidguetta
headline.append(arts);
headline.append(list);
list.append(listaa);
listaa.append(listba);
listaa.append(listca);
listca.append(listda);
listca.append(listea);
listca.append(listfa);

listaa.setAttribute('id', 'card2');
listba.setAttribute('id', 'img2');
listca.setAttribute('id', 'dgname');
listda.setAttribute('id', 'hb');
listea.setAttribute('id', 'h2');
listfa.setAttribute('id', 'p2');
// martin
headline.append(arts);
headline.append(list);
list.append(listab);
listab.append(listbb);
listab.append(listcb);
listcb.append(listdb);
listcb.append(listeb);
listcb.append(listfb);

listab.setAttribute('id', 'card3');
listbb.setAttribute('id', 'img3');
listcb.setAttribute('id', 'mname');
listdb.setAttribute('id', 'hc');
listeb.setAttribute('id', 'h3');
listfb.setAttribute('id', 'p3');
// avicii
headline.append(arts);
headline.append(list);
list.append(listac);
listac.append(listbc);
listac.append(listcc);
listcc.append(listdc);
listcc.append(listec);
listcc.append(listfc);

listac.setAttribute('id', 'card4');
listbc.setAttribute('id', 'img4');
listcc.setAttribute('id', 'aname');
listdc.setAttribute('id', 'hd');
listec.setAttribute('id', 'h4');
listfc.setAttribute('id', 'p4');

// djsnake
headline.append(arts);
headline.append(list);
list.append(listad);
listad.append(listbd);
listad.append(listcd);
listcd.append(listdd);
listcd.append(listed);
listcd.append(listfd);

listad.setAttribute('id', 'card5');
listbd.setAttribute('id', 'img5');
listcd.setAttribute('id', 'dname');
listdd.setAttribute('id', 'he');
listed.setAttribute('id', 'h5');
listfd.setAttribute('id', 'p5');

// alanwalkerr
headline.append(arts);
headline.append(list);
list.append(listae);
listae.append(listbe);
listae.append(listce);
listce.append(listde);
listce.append(listee);
listce.append(listfe);

listae.setAttribute('id', 'card6');
listbe.setAttribute('id', 'img6');
listce.setAttribute('id', 'cname');
listde.setAttribute('id', 'hf');
listee.setAttribute('id', 'h6');
listfe.setAttribute('id', 'p6');

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
