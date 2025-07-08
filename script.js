function releaseBalloons() {
  const container = document.getElementById('balloon-container');
  const audio = document.getElementById('bday-audio');
  audio.play();

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerText = '❤️';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animationDuration = (3 + Math.random() * 2) + 's';
    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}
function playMusic() {
  const audio = document.getElementById('bday-audio');
  audio.play().catch(error => {
    console.log("Playback failed:", error);
  });
  releaseBalloons(); // also start balloons if you want
}
