/* ========== MUSIC PLAYER FUNCTION ========== */
(function musicPlayer() {
  const audio = document.getElementById('bg-music');
  const btn = document.getElementById('musicToggleBtn');
  
  if (!audio || !btn) return;
  
  audio.volume = 0.3; // volume 30%
  let isPlaying = false;
  
  function toggleMusic() {
    if (isPlaying) {
      audio.pause();
      btn.classList.remove('playing');
      btn.querySelector('i').className = 'fas fa-music';
      btn.setAttribute('data-tooltip', 'Play music');
    } else {
      audio.play().catch(e => console.log('User interaction needed'));
      btn.classList.add('playing');
      btn.querySelector('i').className = 'fas fa-pause';
      btn.setAttribute('data-tooltip', 'Pause music');
    }
    isPlaying = !isPlaying;
  }
  
  btn.addEventListener('click', toggleMusic);
  
  // Auto loop when ended
  audio.addEventListener('ended', () => {
    if (isPlaying) {
      audio.play();
    }
  });
})();