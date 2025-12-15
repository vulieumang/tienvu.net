document.addEventListener('DOMContentLoaded', () => {
    // Parallax Effect for Background Blobs
    document.addEventListener('mousemove', (e) => {
        const blobs = document.querySelectorAll('.blob');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 20; // Different speed for each blob
            const xOffset = (window.innerWidth / 2 - e.clientX) / speed;
            const yOffset = (window.innerHeight / 2 - e.clientY) / speed;

            blob.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });

    // Initialize VanillaTilt if needed manually (optional, as data-tilt works automatically)
    // VanillaTilt.init(document.querySelectorAll(".glass-card"), {
    //     max: 25,
    //     speed: 400,
    //     glare: true,
    //     "max-glare": 0.5,
    // });
});
