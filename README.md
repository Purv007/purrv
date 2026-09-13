# Purv Patel - Portfolio

**[Purv Patel](#)** - My personal developer portfolio: about, skills, experience, projects, achievements, education, and contact, all in one seamless page.

![Live](https://img.shields.io/badge/status-live-brightgreen)
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

A high-performance, single-page developer portfolio. Built using raw HTML/CSS/JS with no heavy frameworks. The architecture is completely modular—each section lives in its own file so features can be updated easily without disturbing the rest of the application.

## Highlights
- **Futuristic Aesthetics**: Dark-mode cyberpunk styling driven by Chakra Petch typography.
- **Dynamic Animations**: Scroll-based intersection observers and a living `<canvas>` starfield.
- **Deep Integrations**: Pop-up modal explorers for detailed project case studies, certifications, and patents.
- **Terminal Contact Form**: Built with EmailJS, complete with spam protection.
- **High Performance**: Production builds concatenate and minify down to just a handful of network requests.

## Connect
- **LinkedIn:** [linkedin.com/in/purv-patel-b31a84280/](https://www.linkedin.com/in/purv-patel-b31a84280/)
- **GitHub:** [github.com/Purv007](https://github.com/Purv007)
- **Email:** [patelpurv908@gmail.com](mailto:patelpurv908@gmail.com)

## Tech Stack
Pure **HTML5**, **CSS3**, and **vanilla JavaScript**.
Dependencies are purely for build-time operations. Contact functionality is powered by [EmailJS](https://www.emailjs.com/).

## Build & Deploy
If you need to generate the minified files for production deployment:
```bash
npm install
npm run build
```
This script combines all individual CSS/JS files and minifies them into a ready-to-deploy `dist/` directory, drastically reducing network requests.

## Development
To spin up a local development server:
```bash
npx serve
```
Then navigate to `http://localhost:3000` in your browser.
