// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Sprite animation on scroll
const sprite = document.querySelector('.sprite');
const spriteObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            sprite.style.animationPlayState = 'running';
            spriteObserver.unobserve(sprite); // optional: run only once
        }
    });
}, {
    threshold: 0.5
});
spriteObserver.observe(sprite);

// Section animations
const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const title = entry.target.querySelector(".section-title");
            if (title) title.classList.add("animate");

            const children = entry.target.querySelectorAll(
                ".about-content, .skill-card, .project-one, .project-two,.project-three, .contact-content"
            );
            children.forEach(child => child.classList.add("animate"));
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll("section:not(#home)").forEach(section => {
    sectionObserver.observe(section);
});
