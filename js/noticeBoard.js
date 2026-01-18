
var cardGrid = document.getElementById('notice-grid');

var noticeArr = [
    {
        "id": "0",
        "title": "징검다리스쿨 초등인재반 모집",
        "content": "징검다리스쿨에서는 오는 2022년도 신입생을 모집합니다. 대상은 초등학교 4학년이며 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구",
        "thumbnail": "./notice/imgs/elementary4.jpg"
    },
    {
        "id": "1",
        "title": "징검다리스쿨 초등교양반 모집",
        "content": "징검다리스쿨에서는 오는 2022년도 신입생을 모집합니다. 대상은 초등학교 5학년이며 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구",
        "thumbnail": "./notice/imgs/elementary5.jpg"
    },
    {
        "id": "2",
        "title": "징검다리스쿨 웹사이트 개시",
        "content": "징검다리스쿨이 홈페이지를 새로이 만들었습니다. 영상강의가 올라와 있으니 많은 시청 바랍니다. 회원가입 어쩌구 저쩌구",
        "thumbnail": "./notice/imgs/open.jpg"
    },
]

function generateNoticeCard(noticeData) {
    var card = document.createElement('div');
    card.className = "card";
    card.id = noticeData.id;
    card.onclick = function () {
        window.location = "./notice/notice00.html";
        /*window.location= ""'noticeData.title' + '.html'"";*/
    }

    var thumbnail = document.createElement('img');
    thumbnail.src = noticeData.thumbnail;
    thumbnail.alt = noticeData.title;
    thumbnail.className = "img-grid";

    var title = document.createElement('div');
    title.className = "notice-text";
    var sub = document.createElement('span');
    sub.className = "sub-text";
    title.innerHTML = noticeData.title + "<br/>";
    // sub.innerHTML = noticeData.content;
    sub.innerHTML = (noticeData.content).substr(0, 18) + " " + "[더보기]";
    card.appendChild(thumbnail);

    card.appendChild(title);
    card.appendChild(sub);

    cardGrid.appendChild(card);
    return card;
}

for (var i = 0; i < noticeArr.length; i++) {
    generateNoticeCard(noticeArr[i]);
}

$('.card').css('cursor', 'pointer');
