document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-music");
  const toggle = document.getElementById("musicToggle");

  let isPlaying = false;

  toggle.addEventListener("click", () => {
    if (isPlaying) {
      audio.pause();
      toggle.classList.remove("playing");
    } else {
      audio.play().catch(err => console.log("Không phát được:", err));
      toggle.classList.add("playing");
    }
    isPlaying = !isPlaying;
  });
});
