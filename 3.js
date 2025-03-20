function recommendMusic() {
    const genre = document.querySelector('input[name="genre"]:checked')?.value;
    
    if (!genre) {
        alert("장르를 선택해주세요!");
        return;
    }

    const musicRecommendations = {
        pop: [
            { song: "더 클래식 - 마법의 성", youtubeLink: "https://youtu.be/DB-2ak5O2yc?si=y1OWdLhnckLO0kDW" },
            { song: "마로니에 - 칵테일 사랑", youtubeLink: "https://youtu.be/1WS9Nb1m6dk?si=fyCfAXzdzOwZA26c" },
            { song: "투투 - 일과 이분의 일", youtubeLink: "https://youtu.be/4F5q2Vs2DeI?si=YmrkmB3-nemzpgUF" },
            { song: "김건모 - 잘못된 만남", youtubeLink: "https://youtu.be/29kdLgJN_Ds?si=usOQw9SZsbH0euYj" },
            { song: "터보 - 검은 고양이", youtubeLink: "https://youtu.be/FZ-3DYx4lrQ?si=Jdj_5tp52uwlizv-" }
        ],
        rock: [
            { song: "Bohemian Rhapsody - Queen", youtubeLink: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ" },
            { song: "Smells Like Teen Spirit - Nirvana", youtubeLink: "https://www.youtube.com/watch?v=hTWK8Wv5M7E" },
            { song: "Hotel California - Eagles", youtubeLink: "https://www.youtube.com/watch?v=EqPtz5qN7HM" },
            { song: "Stairway to Heaven - Led Zeppelin", youtubeLink: "https://www.youtube.com/watch?v=QkF3oxziUI4" },
            { song: "Sweet Child O' Mine - Guns N' Roses", youtubeLink: "https://www.youtube.com/watch?v=1w7OgIMMRc4" }
        ],
        hiphop: [
            { song: "Sicko Mode - Travis Scott", youtubeLink: "https://www.youtube.com/watch?v=6ONRf7h3Mdk" },
            { song: "HUMBLE. - Kendrick Lamar", youtubeLink: "https://www.youtube.com/watch?v=tvTRZJ-4EyI" },
            { song: "Lose Yourself - Eminem", youtubeLink: "https://www.youtube.com/watch?v=_Yhyp-_hX2s" },
            { song: "God's Plan - Drake", youtubeLink: "https://www.youtube.com/watch?v=xpVfcZ0ZcFM" },
            { song: "Money Trees - Kendrick Lamar", youtubeLink: "https://www.youtube.com/watch?v=DrKqMviJ_lw" }
        ],
        classical: [
            { song: "Für Elise - Beethoven", youtubeLink: "https://www.youtube.com/watch?v=_mVW8tgGY_w" },
            { song: "Clair de Lune - Debussy", youtubeLink: "https://www.youtube.com/watch?v=CvFH_6DNRCY" },
            { song: "Canon in D - Pachelbel", youtubeLink: "https://www.youtube.com/watch?v=NlprozGcs80" },
            { song: "The Four Seasons - Vivaldi", youtubeLink: "https://www.youtube.com/watch?v=GRxofEmo3HA" },
            { song: "Symphony No. 5 - Beethoven", youtubeLink: "https://www.youtube.com/watch?v=fOk8Tm815lE" }
        ]
    };

    // 선택한 장르의 음악 목록 가져오기
    const recommendations = musicRecommendations[genre];
    
    // 3개의 곡을 랜덤하게 선택
    const randomRecommendations = getRandomItems(recommendations, 3);

    const musicList = document.getElementById('music-list');
    const youtubeLinks = document.getElementById('youtube-links');
    
    musicList.innerHTML = '';
    youtubeLinks.innerHTML = '';

    randomRecommendations.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.song;
        musicList.appendChild(listItem);

        const linkItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = item.youtubeLink;
        link.textContent = "유튜브 보기";
        linkItem.appendChild(link);
        youtubeLinks.appendChild(linkItem);
    });

    document.getElementById('recommendations').style.display = 'block';
}

// Fisher-Yates Shuffle 알고리즘을 사용하여 배열을 섞는 함수
function getRandomItems(arr, n) {
    const shuffled = [...arr];  // 원본 배열을 복사
    let currentIndex = shuffled.length, randomIndex;

    // 배열을 섞기 (Fisher-Yates Shuffle)
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // 두 항목을 교환
        [shuffled[currentIndex], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[currentIndex]];
    }

    // 섞은 배열에서 상위 n개만 추출
    return shuffled.slice(0, n);
}

