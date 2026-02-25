function openTrailer(videoId) {
    const modal = document.getElementById("trailerModal");
    const frame = document.getElementById("trailerFrame");

    frame.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
    modal.style.display = "flex";
}

function closeTrailer() {
    const modal = document.getElementById("trailerModal");
    const frame = document.getElementById("trailerFrame");

    frame.src = "";
    modal.style.display = "none";
}

/* Smooth Fade-In Animation */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll(".novel").forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";
    observer.observe(el);
});
