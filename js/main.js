// Script original + integración del despliegue lateral del botón flotante

document.addEventListener("DOMContentLoaded", () => {

  // ===============================
  //  REPRODUCTOR DE VIDEOS
  // ===============================
  const buttons = document.querySelectorAll(".play-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const video = document.getElementById(btn.dataset.video);

      if (video.paused) {
        document.querySelectorAll("video").forEach((v) => {
          v.pause();
          const iconBtn = document.querySelector(`[data-video="${v.id}"]`);
          if (iconBtn) {
            iconBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
            iconBtn.style.opacity = "1";
          }
        });

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

  document.querySelectorAll("video").forEach((video) => {
    video.addEventListener("ended", () => {
      const btn = document.querySelector(`[data-video="${video.id}"]`);
      if (btn) {
        btn.innerHTML = '<i class="fa-solid fa-play"></i>';
        btn.style.opacity = "1";
      }
    });
  });


  // ===============================
  //  SECCIÓN FAQ INTERACTIVA
  // ===============================
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");

    questionBtn.addEventListener("click", () => {
      faqItems.forEach((other) => {
        if (other !== item) other.classList.remove("active");
      });

      item.classList.toggle("active");

      const answer = item.querySelector(".faq-answer");

      if (item.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = "0";
      }
    });
  });


  // ===============================
  //  BOTÓN FLOTANTE: OCULTAR AL BAJAR, MOSTRAR AL SUBIR
  // ===============================
  const btnFlotante = document.getElementById("btnFlotante");
  let ultimaPosicion = window.scrollY;

  window.addEventListener("scroll", () => {
    const posicionActual = window.scrollY;

    if (posicionActual === 0) {
      btnFlotante.classList.remove("oculto");
      ultimaPosicion = 0;
      return;
    }

    if (posicionActual > ultimaPosicion) {
      btnFlotante.classList.add("oculto");
    } else {
      btnFlotante.classList.remove("oculto");
    }

    ultimaPosicion = posicionActual;
  });


  // ===============================
  //      CONTADOR REGRESIVO
  // ===============================

  const fechaObjetivo = new Date();
  fechaObjetivo.setDate(fechaObjetivo.getDate() + 3);

  function actualizarContador() {
    const ahora = new Date().getTime();
    const distancia = fechaObjetivo - ahora;

    if (distancia <= 0) {
      document.getElementById("dias").textContent = "00";
      document.getElementById("horas").textContent = "00";
      document.getElementById("minutos").textContent = "00";
      document.getElementById("segundos").textContent = "00";
      return;
    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = dias.toString().padStart(2, "0");
    document.getElementById("horas").textContent = horas.toString().padStart(2, "0");
    document.getElementById("minutos").textContent = minutos.toString().padStart(2, "0");
    document.getElementById("segundos").textContent = segundos.toString().padStart(2, "0");
  }

  actualizarContador();
  setInterval(actualizarContador, 1000);


  // ===============================
  // WHATSAPP FLOTANTE: DESPLIEGUE LATERAL + CERRAR
  // ===============================

});