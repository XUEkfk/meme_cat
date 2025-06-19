const memeImg = document.getElementById('meme');
const title = document.getElementById('title');
const adviceDiv = document.getElementById('advice');
const refreshBtn = document.getElementById('refreshBtn');

function randomColor() {
    const r = Math.floor(Math.random() * 156) + 100;
    const g = Math.floor(Math.random() * 156) + 100;
    const b = Math.floor(Math.random() * 156) + 100;
    return `rgb(${r},${g},${b})`;
}

async function fetchMeme() {
    try {
        const res = await fetch('https://meme-api.com/gimme');
        const data = await res.json();
        memeImg.src = data.url;
        memeImg.alt = data.title;
        title.textContent = data.title;
        document.body.style.backgroundColor = randomColor();
    } catch (error) {
        title.textContent = '迷因讀取失敗，請稍後再試';
        memeImg.src = '';
        adviceDiv.textContent = '';
    }
}

function hideAd(adId) {
    const ad = document.getElementById(adId);
    ad.style.display = 'none';

    setTimeout(() => {
        ad.style.display = 'block';
    }, 1000); // 5 秒後重新顯示
}

refreshBtn.addEventListener('click', fetchMeme);
window.onload = fetchMeme;