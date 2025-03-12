document.addEventListener("DOMContentLoaded", function() {
    // Fade-in animation for all sections
    const sections = document.querySelectorAll(".bonus-card, .bookmaker-card");
    sections.forEach((section, index) => {
        section.style.opacity = 0;
        section.style.transform = "translateY(20px)";
        setTimeout(() => {
            section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }, index * 150);
    });

    // Button hover effects
    const buttons = document.querySelectorAll(".claim-btn");
    buttons.forEach(button => {
        button.addEventListener("mouseover", function() {
            button.style.boxShadow = "0px 0px 15px rgba(0, 200, 80, 0.8)";
            button.style.transform = "scale(1.05)";
        });
        button.addEventListener("mouseout", function() {
            button.style.boxShadow = "none";
            button.style.transform = "scale(1)";
        });
    });

    // Navbar logo animation
    const navbar = document.querySelector(".navbar h1");
    navbar.addEventListener("mouseover", function() {
        navbar.style.color = "#FFD700";
        navbar.style.transition = "color 0.3s ease";
    });
    navbar.addEventListener("mouseout", function() {
        navbar.style.color = "white";
    });

    // Glow effect for operator logos
    const logos = document.querySelectorAll(".operator-logo");
    logos.forEach(logo => {
        logo.addEventListener("mouseover", function() {
            logo.style.boxShadow = "0px 0px 15px rgba(255, 165, 0, 0.8)";
        });
        logo.addEventListener("mouseout", function() {
            logo.style.boxShadow = "none";
        });
    });
});
