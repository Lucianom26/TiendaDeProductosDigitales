const buttons = document.querySelectorAll('.play-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const video = document.getElementById(btn.dataset.video);

    if (video.paused) {
      // Pausar todos los demás videos
      document.querySelectorAll('video').forEach(v => {
        v.pause();
        v.nextElementSibling.innerHTML = '<i class="fa-solid fa-play"></i>';
        v.nextElementSibling.style.opacity = '1';
      });

      // Reproducir el video actual
      video.play();
      btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
      btn.style.opacity = '0.7';
    } else {
      video.pause();
      btn.innerHTML = '<i class="fa-solid fa-play"></i>';
      btn.style.opacity = '1';
    }
  });
});
