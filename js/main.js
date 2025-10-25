window.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("bg-video");
  const playBtn = document.getElementById("play-btn");
  const muteBtn = document.getElementById("mute-btn");

  if (video && playBtn && muteBtn) {
    playBtn.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        playBtn.innerHTML = '<i class="fa fa-pause"></i>';
      } else {
        video.pause();
        playBtn.innerHTML = '<i class="fa fa-play"></i>';
      }
    });

    muteBtn.addEventListener("click", () => {
      video.muted = !video.muted;
      muteBtn.innerHTML = video.muted
        ? '<i class="fa fa-volume-mute"></i>'
        : '<i class="fa fa-volume-up"></i>';
    });
  }

  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", (e) => {
      if (
        nav.classList.contains("open") &&
        !nav.contains(e.target) &&
        !toggle.contains(e.target)
      ) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  const tabs = document.querySelectorAll(".tab");
  const albums = document.querySelectorAll(".album");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const closeLightbox = document.getElementById("closeLightbox");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      albums.forEach((a) => a.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.target).classList.add("active");
    });
  });

  document.querySelectorAll(".scroll-container img").forEach((img) => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImage.src = img.src;
    });
  });

  if (closeLightbox && lightbox) {
    closeLightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) lightbox.style.display = "none";
    });
  }
});
