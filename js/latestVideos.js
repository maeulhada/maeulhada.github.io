var cardGrid = document.getElementById('class-grid latest');

var classArr = [
  {
    "id": "00",
    "title": "하이든&메르의 디지털음악",
    "thumbnail": "../img/music.jpg"
  },
  {
    "id": "01",
    "title": "시앙의 디자인 강의",
    "thumbnail": "../img/design.jpg"
  },
  {
    "id": "02",
    "title": "자이노의 과학 강의",
    "thumbnail": "../img/zyro.jpg"
  },
  // {
  //   "id": "03",
  //   "title": "아토샘과 함께하는 엔트리 수업",
  //   "thumbnail": "../img/atto.jpg"
  // },
  // {
  //   "id": "3",
  //   "title": "하이든&메르의 디지털음악",
  //   "thumbnail": "./img/music.jpg"
  // },
  // {
  //   "id": "4",
  //   "title": "시앙의 디자인 강의",
  //   "thumbnail": "./img/design.jpg"
  // },
  // {
  //   "id": "5",
  //   "title": "자이로의 과학 강의",
  //   "thumbnail": "./img/zyro.jpg"
  // },
  // {
  //   "id": "6",
  //   "title": "하이든&메르의 디지털음악",
  //   "thumbnail": "./img/music.jpg"
  // },
  // {
  //   "id": "7",
  //   "title": "시앙의 디자인 강의",
  //   "thumbnail": "./img/design.jpg"
  // },
  // {
  //   "id": "8",
  //   "title": "자이로의 과학 강의",
  //   "thumbnail": "./img/zyro.jpg"
  // }
]

function generateClassCard(classData) {
  var card = document.createElement('div');
  card.className = "card";
  card.id = classData.id;
  console.log(card)
  // card.onmouseover = function(){
  //   this.style.cursor='default';
  //   this.style.borderBottom = "3px solid orange";

  // }
  // card.onmouseout = function(){
  //   this.style.cursor='pointer';
  //   this.style.borderBottom = "3px solid #3a558e;";
  // }
  card.onclick = function () {

    // window.location = "./openCourses/videoLecture00.html";
    window.location = './openCourses/' + card.id + '.html';
  }

  var thumbnail = document.createElement('img');
  thumbnail.src = classData.thumbnail;
  thumbnail.alt = classData.title;
  thumbnail.className = "img-grid";

  var title = document.createElement('div');
  title.className = "text";
  title.innerHTML = classData.title;

  card.appendChild(thumbnail);

  card.appendChild(title);

  cardGrid.appendChild(card);
  return card;
}

for (var i = 0; i < classArr.length; i++) {
  generateClassCard(classArr[i]);
}

$('.card').css('cursor', 'pointer');
