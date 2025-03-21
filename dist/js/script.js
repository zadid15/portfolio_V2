document.addEventListener("click", function playAudio() {
  const audio = document.getElementById("preloaderAudio");
  if (audio && audio.paused) {
    audio.play().catch((error) => console.error("Audio play error:", error));
  }
  document.removeEventListener("click", playAudio);
});

function openModal(img) {
  document.getElementById("modalImage").src = img.src;
  document.getElementById("imageModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("imageModal").classList.add("hidden");
}

window.onload = () => {
  
  const audio = document.getElementById("preloaderAudio");
  audio.volume = 0.5; // volume antara 0.0 - 1.0

  // Animasi untuk Click Me!
  gsap.from(".click-me", {
    duration: 1,
    opacity: 0,
    y: 20, // Masuk dari bawah
    ease: "power2.out",
    delay: 0.5, // Delay sedikit agar tidak bersamaan
  });

  // Animasi untuk ikon GitHub
  gsap.from(".github-icon", {
    duration: 1,
    opacity: 0,
    x: -50, // Ikon masuk dari kiri
    delay: 0.4, // Delay agar tidak bersamaan
    ease: "power2.out",
  });

  // Animasi untuk ikon CodePen
  gsap.from(".codepen-icon", {
    duration: 1,
    opacity: 0,
    x: 50, // Ikon masuk dari kanan
    delay: 0.4, // Delay agar tidak bersamaan
    ease: "power2.out",
  });

  // Animasi untuk teks "Welcome To My" muncul dari atas dengan fade-in
  gsap.from(".welcome-text", {
    duration: 1,
    opacity: 0, // Fade in dari transparan
    y: -20, // Masuk dari atas
    ease: "power2.out",
    delay: 0.3,
  });

  // Animasi untuk teks "Portfolio Website" masuk dari bawah
  gsap.from(".portfolio-text", {
    duration: 1,
    opacity: 0,
    y: 20, // Masuk dari bawah
    ease: "power2.out",
    delay: 0.5, // Delay sedikit agar tidak bersamaan
  });

  gsap.from("#typed-output", {
    duration: 1,
    opacity: 0,
    y: 20, // Masuk dari bawah
    ease: "power2.out",
    delay: 0.5, // Delay sedikit agar tidak bersamaan
  });

  // Inisialisasi Typed.js sebelum menyembunyikan preloader
  const options = {
    strings: ["ザディドはとてもハンサムです。"],
    typeSpeed: 130, // Kecepatan mengetik dalam milidetik
    loop: false, // Ulangi mengetik
    showCursor: false, // Tampilkan kursor
    cursorChar: "|", // Karakter kursor
  };

  const typed = new Typed("#typed-output", options); // Menginisialisasi Typed.js

  // Simulasi pemuatan data
  setTimeout(() => {
    // Menghilangkan preloader dengan animasi fade-out, zoom, dan blur
    gsap.to("#preloader", {
      duration: 1,
      opacity: 0,
      scale: 1.2, // Zoom in
      filter: "blur(10px)", // Blur effect
      onComplete: () => {
        // Fade out dan pause backsound preloader
        const audio = document.getElementById("preloaderAudio");
        if (audio) {
          gsap.to(audio, {
            duration: 1,
            volume: 0,
            onComplete: () => {
              audio.pause();
            },
          });
        }

        document.getElementById("preloader").style.display = "none"; // Sembunyikan preloader

        // Ambil container
        const container = document.getElementById("content");
        container.classList.remove("hidden");

        // Script untuk menampilkan atau menyembunyikan menu saat tombol hamburger diklik
        const hamburgerButton = document.getElementById("hamburger");
        const mobileMenu = document.getElementById("mobile-menu");

        hamburgerButton.addEventListener("click", () => {
          // Toggle class untuk menampilkan dan menyembunyikan menu
          mobileMenu.classList.toggle("hidden");
        });

        // Menutup menu jika klik di luar area menu
        window.addEventListener("click", (e) => {
          if (
            !mobileMenu.contains(e.target) &&
            !hamburgerButton.contains(e.target)
          ) {
            mobileMenu.classList.add("hidden");
          }
        });

        // Efek fade-in untuk konten
        gsap.from(container, { duration: 1, opacity: 0 }); // Hanya fade-in

        // Inisialisasi Typed.js setelah preloader selesai
        const options2 = {
          strings: [
            "Innovative Solutions",
            "Creating Impactful Web Apps",
            "Building the Future of Tech",
            "Problem Solver",
            "Software Engineering Student",
            "Web Development Enthusiast",
            "Tech Enthusiast",
            "Creative Digital Experiences",
            "Coding Enthusiast",
          ],
          typeSpeed: 80,
          backSpeed: 40,
          loop: true,
          cursorChar: "|",
          showCursor: true,
          cursorClass: "typed-cursor-2",
        };

        new Typed("#typed-text-2", options2);

        AOS.init({
          duration: 1000,
          easing: "ease-in-out",
          once: false,
        });

        // Inisialisasi partikel
        particlesJS("particles-js", {
          particles: {
            number: {
              value: 5,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            shape: {
              type: "circle", // Bentuk partikel
            },
            opacity: {
              value: 0.2,
              random: true, // Opasitas acak
            },
            size: {
              value: 100,
              random: true,
            },
            move: {
              enable: true,
              speed: 3, // Kecepatan dasar partikel
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse", // Efek saat hover
              },
              onmousemove: {
                enable: true,
                mode: "repulse", // Partikel menjauh dari kursor saat bergerak
                distance: 100, // Jarak partikel menjauh dari kursor
                speed: 5, // Kecepatan menjauh dari kursor
              },
            },
          },
        });
      },
    });
  }, 4000); // Menunggu 3 detik
};
