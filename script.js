const giftBox = document.getElementById('giftBox');
const surpriseContent = document.getElementById('surpriseContent');
const music = document.getElementById('anniversaryMusic');
const musicBtn = document.getElementById('musicControl');

// Gift Box Click Event
giftBox.addEventListener('click', () => {
    giftBox.style.display = 'none';
    surpriseContent.classList.add('show');
    // Music automatically start on interaction
    music.play();
});

// Music Toggle
musicBtn.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        musicBtn.innerHTML = "🎵";
    } else {
        music.pause();
        musicBtn.innerHTML = "🔇";
    }
});

// Screen par click karne se phool (flowers) girenge
document.addEventListener('click', (e) => {
    let flower = document.createElement('span');
    flower.innerHTML = "🌸";
    flower.style.position = "absolute";
    flower.style.left = e.pageX + "px";
    flower.style.top = e.pageY + "px";
    flower.style.fontSize = "25px";
    flower.style.pointerEvents = "none";
    flower.style.animation = "fadeOut 1s forwards";
    document.body.appendChild(flower);
    
    setTimeout(() => flower.remove(), 1000);
});