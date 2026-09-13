// ============================================================
// SKILLS ANIMATION: Uses IntersectionObserver to trigger a
// staggered entrance animation for skill cards and badges when
// the skills section scrolls into view.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const skillsSection = document.getElementById('skills');
  if (!skillsSection) return;

  const cards = document.querySelectorAll('#skills .skill-card');
  if (!cards.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Stagger the cards' entrance
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('is-animating');
          }, index * 100);
        });

        // Trigger the banner animation after the cards
        setTimeout(() => {
          skillsSection.classList.add('is-animating-banner');
        }, cards.length * 100 + 200);

        // We only want the animation to play once
        observer.unobserve(skillsSection);
      }
    });
  }, {
    threshold: 0.15 // Trigger when 15% of the skills section is visible
  });

  observer.observe(skillsSection);
});
