// ===============================
//  REPRODUCTOR DE VIDEOS
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".play-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const video = document.getElementById(btn.dataset.video);

      if (video.paused) {
        // Pausar todos los demás videos
        document.querySelectorAll("video").forEach((v) => {
          v.pause();
          const iconBtn = document.querySelector(`[data-video="${v.id}"]`);
          if (iconBtn) {
            iconBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
            iconBtn.style.opacity = "1";
          }
        });

        // Reproducir el video actual
        video.play();
        btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        btn.style.opacity = "0.7";
      } else {
        video.pause();
        btn.innerHTML = '<i class="fa-solid fa-play"></i>';
        btn.style.opacity = "1";
      }
    });
  });

  // Cuando termina un video, vuelve el ícono a "play"
  document.querySelectorAll("video").forEach((video) => {
    video.addEventListener("ended", () => {
      const btn = document.querySelector(`[data-video="${video.id}"]`);
      if (btn) {
        btn.innerHTML = '<i class="fa-solid fa-play"></i>';
        btn.style.opacity = "1";
      }
    });
  });
});

// ===============================
//  SECCIÓN FAQ INTERACTIVA
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");

    questionBtn.addEventListener("click", () => {
      // Cerrar los demás
      faqItems.forEach((other) => {
        if (other !== item) other.classList.remove("active");
      });

      // Alternar el actual
      item.classList.toggle("active");

      // Animar apertura
      const answer = item.querySelector(".faq-answer");
      if (item.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = "0";
      }
    });
  });
});
