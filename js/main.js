window.addEventListener("load", () => {
  const video = document.getElementById("bg-video");
  const playBtn = document.getElementById("play-btn");
  const muteBtn = document.getElementById("mute-btn");
  const tabs = document.querySelectorAll(".tab");
  const albums = document.querySelectorAll(".album");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const closeLightbox = document.getElementById("closeLightbox");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      albums.forEach(a => a.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.target).classList.add("active");
    });
  });

  document.querySelectorAll(".scroll-container img").forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImage.src = img.src;
    });
  });

  closeLightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) lightbox.style.display = "none";
  });

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
    muteBtn.innerHTML = video.muted ? '<i class="fa fa-volume-mute"></i>' : '<i class="fa fa-volume-up"></i>';
  });
});

(function () {
    const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('site-nav');

    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      
      this.setAttribute('aria-expanded', String(isOpen));
    });

    
    document.addEventListener('click', function(e){
      if (!nav.contains(e.target) && !toggle.contains(e.target) && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });


    window.addEventListener('resize', () => {
      if (window.innerWidth > 900 && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  })();
