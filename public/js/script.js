window.onload = () => {
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

  gsap.from(".typed-cursor", {
    duration: 1,
    opacity: 0,
    y: 20, // Masuk dari bawah
    ease: "power2.out",
    delay: 0.5, // Delay sedikit agar tidak bersamaan
  });

  // Inisialisasi Typed.js sebelum menyembunyikan preloader
  const options = {
    strings: ["Zadid Ganteng Banget 😎"],
    typeSpeed: 70, // Kecepatan mengetik dalam milidetik
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
        document.getElementById("preloader").style.display = "none"; // Sembunyikan preloader

        // Ambil container
        const container = document.getElementById("container");
        container.classList.remove("hidden");

        // Efek fade-in untuk konten
        gsap.from(container, { duration: 1, opacity: 0 }); // Hanya fade-in

        // Inisialisasi Typed.js setelah preloader selesai
        const options2 = {
            strings: ["Code and Software Engineering Student"],
            typeSpeed: 50,
            backSpeed: 25,
            loop: true,
            cursorChar: "|", // Karakter kursor
            showCursor: true, // Tampilkan kursor
            cursorClass: "typed-cursor-2", // Kelas khusus kursor
        };

        new Typed("#typed-text-2", options2);
      },
    });
  }, 5); // Menunggu 3 detik
};
