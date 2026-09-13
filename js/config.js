// ============================================================
// CONFIGURATION
// Add your links and API keys here.
// ============================================================
window.ENV = {
  GITHUB_URL: "https://github.com/Purv007",
  LINKEDIN_URL: "https://www.linkedin.com/in/purv-patel-b31a84280/",
  RESUME_PDF_URL: "https://drive.google.com/file/d/1GHesGd48_ila7QKaURqrSWWy0UPeGXjh/view?usp=drive_link",
  EMAILJS_PUBLIC_KEY: "ox2-xCg--vxNapboz",
  EMAILJS_SERVICE_ID: "service_llqr86q",
  EMAILJS_TEMPLATE_ID: "template_gxt8mik"
};

// Map config variables to HTML elements dynamically
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-env-link]").forEach(el => {
    const key = el.getAttribute("data-env-link");
    if (window.ENV && window.ENV[key] && window.ENV[key] !== "#" && window.ENV[key] !== "") {
      el.href = window.ENV[key];
    }
  });
});
