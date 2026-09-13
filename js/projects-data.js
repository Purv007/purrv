// ============================================================
// PROJECTS DATA
// Single source of truth for the Projects section. To add a new
// project, add a new object here — the markup, cards, and both
// popups (project detail + Project Explorer) are all generated
// from this file, nothing else needs to change.
//
// Fields:
//   id            unique slug, used for the modal instance
//   featured      true = shown on the main screen (max 3 expected)
//   category      short label shown next to the category icon
//   categoryIcon  inline SVG path content for the category icon
//   accent        one of the CSS accent vars: lime, cyan, purple,
//                 blue, gold, pink, orange
//   image         path under assets/images/projects, or null to
//                 fall back to a category-tinted placeholder until
//                 a real screenshot is dropped into content-to-add/projects
//   title, subtitle, oneLiner, cardDescription
//   techStack     array of strings shown as chips on the card
//   repo          GitHub URL, or null to hide the button entirely
//   demo          live URL, or null to hide the button entirely
//   overview, problem, solution, challenges   paragraph strings
//   features      array of strings (Key Features)
//   stack         array of strings (full Technology Stack list)
//   learned       array of strings (What I Learned)
// ============================================================

const PROJECTS_DATA = [
  {
    id: "brew-haven-cafeteria",
    featured: true,
    order: 1,
    category: "Full Stack Web App",
    categoryIcon: '<path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9zm0 0V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"/><circle cx="12" cy="14" r="2"/>',
    accent: "orange",
    image: "assets/images/projects/brewhaven.png",
    title: "Brew Haven Cafeteria System",
    subtitle: "Jan 2026 – Feb 2026",
    oneLiner: "A production-focused full-stack cafeteria management web application built with the MERN stack.",
    cardDescription: "A production-focused full-stack cafeteria management web application built with the MERN stack.",
    techStack: ["React 19", "Vite", "Node.js", "Express.js", "MongoDB"],
    repo: "https://github.com/Purv007/BrewHaven_cafeteria",
    demo: "https://brew-haven-cafeteria.vercel.app/",
    overview: "Brew Haven is a comprehensive full-stack cafeteria management web application featuring customer ordering workflows, wishlist and cart persistence, profile management, and a dedicated admin dashboard for managing products, users, orders, and analytics.",
    problem: "Managing cafeteria operations manually leads to inefficiencies, slow ordering workflows, and poor data tracking. There was a need for a centralized system to handle online orders, track inventory, and analyze sales securely.",
    solution: "Developed a secure MERN-stack application with distinct customer and admin modules. Implemented JWT-based authentication, cart/wishlist workflows, image uploads, and optimized MongoDB queries to deliver a smooth user experience and efficient administrative control.",
    features: ["Customer and Admin Modules", "JWT-based Authentication & bcrypt", "Cart, Wishlist, Checkout & Order History", "Admin CRUD & Analytics Dashboard", "MongoDB Atlas Integration", "Image Uploads via Multer", "Transactional Email Support", "Helmet & CORS Security"],
    stack: ["React 19", "Vite", "Node.js", "Express.js", "MongoDB Atlas", "Mongoose", "JWT", "bcryptjs", "Axios", "Multer", "Nodemailer", "SweetAlert2"],
    challenges: "Securing admin routes and API endpoints, handling file uploads efficiently, and integrating transactional emails reliably without blocking the main event loop.",
    learned: ["MERN-Stack Scalability", "Database Design & Indexing", "Backend Security Practices", "State Management", "Admin Dashboard Analytics"]
  },
  {
    id: "nextround",
    featured: true,
    order: 2,
    category: "AI & Full Stack",
    categoryIcon: '<path d="M12 2c3 2 4 5 4 8 0 4-2 7-4 11-2-4-4-7-4-11 0-3 1-6 4-8Z"/><circle cx="12" cy="9" r="1.6"/>',
    accent: "purple",
    image: "assets/images/projects/nextround.png",
    title: "NextRound — AI powered Interview Preparation Platform",
    subtitle: "Dec 2025",
    oneLiner: "A full-stack AI platform that helps candidates prepare for interviews using resume analysis and job personalization.",
    cardDescription: "A full-stack AI platform that helps candidates prepare for interviews using resume analysis and job personalization.",
    techStack: ["React 19", "Node.js", "Gemini API", "MongoDB", "Puppeteer"],
    repo: "https://github.com/Purv007/NextRound",
    demo: null,
    overview: "NextRound is a full-stack AI-powered platform designed to help candidates prepare for interviews through personalized resume analysis and job-description-based personalization.",
    problem: "Candidates often struggle with generic interview prep tools that do not account for their specific experience or the nuances of the jobs they apply for. Generating tailored resumes and receiving targeted interview questions based on those resumes is a time-consuming manual process.",
    solution: "Developed a MERN-stack application integrating Google's Gemini API for AI-generated interview questions and skill-gap analysis. Built comprehensive workflows for PDF parsing and automated ATS-friendly resume generation with Puppeteer.",
    features: ["JWT Authentication & Google OAuth", "Gemini API Integration for AI Questions", "Skill-Gap Analysis & Prep Roadmaps", "Resume Upload & PDF Parsing (Multer, pdf-parse)", "ATS-Friendly Resume Generation (Puppeteer)", "Interactive React Dashboard", "MongoDB History Persistence"],
    stack: ["Node.js", "Express.js", "React 19", "Vite", "MongoDB", "Mongoose", "JWT", "Passport.js", "Gemini API", "Puppeteer", "Sass/SCSS"],
    challenges: "Handling complex PDF parsing across different resume formats, generating downloadable PDFs flawlessly via Puppeteer, and optimizing prompt engineering for the Gemini API.",
    learned: ["AI Integration workflows", "Authentication Systems (OAuth)", "PDF manipulation in Node.js", "Full-Stack System Architecture"]
  },
  {
    id: "grainage-iot",
    featured: true,
    order: 3,
    category: "IoT & Full Stack",
    categoryIcon: '<path d="M7 18a4.5 4.5 0 0 1-.4-8.98A5.5 5.5 0 0 1 17.3 9.1 4 4 0 0 1 17 18H7Z"/><path d="M12 9v4M8 13h8"/>',
    accent: "lime",
    image: "assets/images/projects/grain.png",
    title: "GRAINAGE — IoT Based Grain Spoilage Monitoring & Control System",
    subtitle: "University IoT Hackathon",
    oneLiner: "An IoT based grain spoilage monitoring and control system that uses an ESP32 microcontroller to monitor grain storage environments and provides real-time updates to a web dashboard.",
    cardDescription: "An IoT based grain spoilage monitoring and control system that uses an ESP32 microcontroller to monitor grain storage environments and provides real-time updates to a web dashboard.",
    techStack: ["ESP32", "React", "Node.js", "Socket.IO", "C++"],
    repo: "https://github.com/Purv007/grain-spoilage",
    demo: null,
    overview: "GRAINAGE is an end-to-end IoT solution designed to prevent grain spoilage in storage facilities. It continuously monitors 8 critical environmental and physical parameters (temperature, humidity, gas levels, moisture, force, weight, flame, vibration) and takes automated corrective actions when unsafe conditions are detected.",
    problem: "Grain spoilage due to poor environmental monitoring leads to massive agricultural losses. Traditional silos lack real-time integrated monitoring and automated corrective measures for factors like fire, moisture buildup, and toxic gases.",
    solution: "Built a complete hardware-software system using an ESP32 connected to 9 sensors. Data is streamed via WebSockets to a Node.js backend and visualized on a dark-themed React dashboard. The system supports both physical hardware and a Wokwi simulation mode.",
    features: ["Real-time multi-sensor telemetry", "WebSocket-powered instant updates", "Wokwi Simulation & Hardware Modes", "Automated actuator response (Fan, Buzzer, LEDs)", "Browser-based audio alarms", "Interactive Recharts dashboard", "Centralized threshold configuration"],
    stack: ["ESP32", "Arduino Framework", "Node.js", "Express.js", "Socket.IO", "React 19", "Vite", "Recharts", "PlatformIO", "Wokwi"],
    challenges: "Synchronizing high-frequency sensor readings via WebSockets without overloading the browser UI, and maintaining identical firmware compatibility between physical ESP32 hardware and the Wokwi simulator.",
    learned: ["IoT Hardware Integration", "WebSocket Real-Time Comm.", "Embedded C++ Firmware Design", "Sensor Calibration & Debouncing", "Full-Stack Dashboard Architecture"]
  },
  {
    id: "parallel-cnn-classifier",
    featured: false,
    order: 5,
    category: "Deep Learning & HPC",
    categoryIcon: '<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 21h8M12 18v3"/>',
    accent: "lime",
    image: null,
    title: "Parallel CNN Image Classifier",
    subtitle: "Deep Learning & HPC Performance Benchmarking",
    oneLiner: "Benchmarking a CNN classifier across CPU and GPU configurations to achieve up to 47.2x speedups.",
    cardDescription: "Benchmarking a CNN classifier across CPU and GPU configurations to achieve up to 47.2x speedups.",
    techStack: ["Python", "TensorFlow", "Keras", "NumPy"],
    repo: "https://github.com/Purv007/CNN_ImageClassifier",
    demo: null,
    overview: "An end-to-end deep learning project that trains a LeNet CNN model for binary image classification. The core focus is on performance engineering, comparing model execution times and accuracy across 4 compute setups: CPU (1-thread), GPU, CPU (2-thread), and CPU (4-thread).",
    problem: "Deep learning models require significant compute power, and choosing the right hardware configuration is crucial. There's a need to understand exactly how CPU multithreading compares to GPU acceleration for specific classification tasks and iteration speeds.",
    solution: "Developed a standardized classification workflow (load → preprocess → train → infer) and ran it across multiple environments (CPU vs GPU). Profiled execution times to discover that a 4-thread CPU setup yielded the fastest time (3.19s, a 47.2× speedup over the 1-thread baseline) while the GPU provided the most balanced accuracy and speed.",
    features: ["End-to-End CNN Classification Workflow", "Hardware-Aware Benchmarking", "Binary Image Classification", "TensorFlow/Keras Implementation", "Jupyter/Colab Experiment Tracking"],
    stack: ["Python", "TensorFlow", "Keras", "NumPy", "Pandas", "Matplotlib", "Jupyter Notebook"],
    challenges: "Designing a consistent benchmarking environment to isolate hardware performance without architectural bias, and correctly interpreting the trade-offs between raw speed (4-thread CPU) and balanced accuracy (GPU).",
    learned: ["Hardware-aware Benchmarking", "Performance Engineering in ML", "TensorFlow Training Pipelines", "Compute Optimization"]
  },
  {
    id: "air-quality-monitoring",
    featured: false,
    order: 4,
    category: "IoT & Cloud",
    categoryIcon: '<path d="M7 18a4.5 4.5 0 0 1-.4-8.98A5.5 5.5 0 0 1 17.3 9.1 4 4 0 0 1 17 18H7Z"/><path d="M12 9v4M8 13h8"/>',
    accent: "cyan",
    image: "assets/images/projects/aqi.png",
    title: "Air Quality Index (AQI) Monitoring & Prediction System",
    subtitle: "Real-Time IoT & Machine Learning on AWS",
    oneLiner: "A real-time AQI monitoring web app powered by Flask, Machine Learning, and AWS Cloud.",
    cardDescription: "A real-time AQI monitoring web app powered by Flask, Machine Learning, and AWS Cloud.",
    techStack: ["Python", "Flask", "AWS DynamoDB", "Arduino", "Random Forest"],
    repo: "https://github.com/Purv007/aqi_prediction",
    demo: "http://aqi-env.eba-2xewf2jm.us-east-1.elasticbeanstalk.com",
    overview: "An end-to-end Air Quality Index (AQI) monitoring and prediction web application. It fetches live sensor telemetry (MQ135 + DHT22) from an Arduino UNO, persists the data in AWS DynamoDB, predicts the AQI using a trained Random Forest model, and visualizes the trends on a live web dashboard.",
    problem: "Real-time air quality data is critical for public health, but traditional environmental stations are expensive and sparsely deployed. There is a need for low-cost, scalable IoT solutions that can not only measure raw gases but accurately predict AQI using cloud-based ML.",
    solution: "Developed a Python Flask web application deployed on AWS Elastic Beanstalk that ingests serial data from an Arduino sensor array. The system uses a Scikit-learn Random Forest Regressor to predict AQI based on CO₂, NH₃, Benzene, Alcohol, Temperature, and Humidity readings.",
    features: ["Real-time AQI ML Prediction (Random Forest)", "Live Arduino Data Ingestion (MQ135 & DHT22)", "AWS DynamoDB Persistence", "AWS Elastic Beanstalk (EC2) Deployment", "IAM Role & Security Management", "Responsive Web UI with Chart.js Trends"],
    stack: ["Python 3.11", "Flask", "AWS Elastic Beanstalk", "AWS DynamoDB", "AWS IAM", "Arduino UNO", "Scikit-Learn", "Pandas", "Chart.js"],
    challenges: "Configuring the correct AWS IAM roles (aws-elasticbeanstalk-ec2-role) to securely allow the Elastic Beanstalk environment to write telemetry data directly to DynamoDB without hardcoded credentials.",
    learned: ["AWS Cloud Deployment & Architecture", "IoT Sensor Data Pipelines", "Machine Learning Model Integration (Pickle)", "NoSQL Database Design (DynamoDB)"]
  },
  {
    id: "sarc-compression",
    featured: false,
    order: 6,
    category: "AI & Multimedia",
    categoryIcon: '<path d="M12 2c3 2 4 5 4 8 0 4-2 7-4 11-2-4-4-7-4-11 0-3 1-6 4-8Z"/><circle cx="12" cy="9" r="1.6"/>',
    accent: "pink",
    image: null,
    title: "SARC: Semantically-Aware Regional Compression",
    subtitle: "AI-Powered Smart Image & Video Compression",
    oneLiner: "A smart multimedia compression system that uses AI to shrink file sizes while preserving visual quality of important regions.",
    cardDescription: "A smart multimedia compression system that uses AI to shrink file sizes while preserving visual quality of important regions.",
    techStack: ["FastAPI", "React", "YOLOv8", "OpenCV", "FFmpeg"],
    repo: "https://github.com/Purv007/SARC",
    demo: null,
    overview: "SARC (Semantically-Aware Regional Compression) is an intelligent multimedia compression system that uses AI to shrink image and video file sizes without degrading the visual quality of important regions like faces, text, and objects.",
    problem: "Standard compression algorithms apply lossy compression uniformly across an entire image or video, resulting in noticeable quality loss on important subjects just to save space on irrelevant backgrounds like sky or walls.",
    solution: "Developed an AI pipeline using YOLOv8 and OpenCV to detect semantic regions of interest (ROI) and generate a 'heat map'. SARC applies heavy compression to the background while preserving near-perfect quality on detected objects, blending the boundaries for a natural look.",
    features: ["AI-Powered Vision (Object, Text, Edge Detection)", "Smart Adaptive Compression", "Smooth Quality Blending", "Interactive React Dashboard", "Bandwidth Savings Analytics", "Real-Time Image & Video Processing"],
    stack: ["FastAPI", "React", "YOLOv8", "OpenCV", "FFmpeg", "SQLite", "Vite", "Python"],
    challenges: "Achieving seamless visual blending between highly compressed backgrounds and high-quality foreground objects without introducing visible artifacts or halos, and optimizing FFmpeg processing speed.",
    learned: ["Computer Vision Pipelines", "Advanced Multimedia Compression", "YOLOv8 Integration", "FastAPI Backend Architecture", "React Interactive Dashboards"]
  },
  {
    id: "distributed-banking-rmi",
    featured: false,
    order: 7,
    category: "Distributed Systems",
    categoryIcon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    accent: "blue",
    image: null,
    title: "Distributed Banking System",
    subtitle: "Fault-Tolerant Java RMI Architecture",
    oneLiner: "A distributed client-server banking system demonstrating load balancing, heartbeat monitoring, and automatic failover.",
    cardDescription: "A distributed client-server banking system demonstrating load balancing, heartbeat monitoring, and automatic failover.",
    techStack: ["Java", "RMI", "Swing", "ZeroTier"],
    repo: "https://github.com/Purv007/banking-distributed",
    demo: null,
    overview: "A distributed client-server banking application built to demonstrate core distributed systems concepts. It features multiple networked nodes communicating over Java RMI, complete with load balancing, real-time heartbeat monitoring, and automated client failover.",
    problem: "Single-node monolithic servers represent a single point of failure. There is a need to design a system capable of handling concurrent transactions across a network while automatically routing around server downtime.",
    solution: "Developed a multi-node architecture using Java RMI and Swing GUIs. The client implementation uses round-robin load balancing across two transaction nodes and pings a HeartbeatService every 3 seconds to automatically failover to a healthy node if the active one drops.",
    features: ["Java RMI Remote Procedure Calls", "Client-Side Round-Robin Load Balancing", "Heartbeat Monitoring & Auto-Failover", "Thread-Safe Concurrent Bank Database", "SHA-256 Brute-Force Protection", "ZeroTier Network Compatibility"],
    stack: ["Java 17", "Java RMI", "Java Swing", "ZeroTier", "ConcurrentHashMap"],
    challenges: "Managing thread-safety across concurrent remote RMI calls to the shared in-memory database, and properly architecting fixed RMI export ports (1099, 1200-1203) to bypass NAT and firewall limitations over ZeroTier.",
    learned: ["Distributed Systems Architecture", "Java Remote Method Invocation (RMI)", "Concurrency & Thread Safety", "Fault Tolerance & Load Balancing Algorithms"]
  },
  {
    id: "quantumshieldfl",
    featured: false,
    order: 8,
    category: "AI & Cybersecurity",
    categoryIcon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    accent: "purple",
    image: null,
    title: "QuantumShieldFL",
    subtitle: "Privacy-Preserving Federated Learning with QKD",
    oneLiner: "A research prototype fusing Federated Learning, Quantum Key Distribution, and Adaptive Risk-Based Security.",
    cardDescription: "A research prototype fusing Federated Learning, Quantum Key Distribution, and Adaptive Risk-Based Security.",
    techStack: ["PyTorch", "Qiskit", "Python", "Streamlit"],
    repo: "https://github.com/Purv007/QuantumFL",
    demo: null,
    overview: "QuantumShieldFL is a research prototype fusing Federated Learning, BB84 Quantum Key Distribution (QKD), and Adaptive Risk-Based Security into a unified, closed-loop architecture for privacy-preserving machine learning.",
    problem: "Traditional federated learning systems operate with cryptography and model training as independent silos, leaving them vulnerable to coordinated model poisoning and eavesdropping attacks.",
    solution: "Developed a bi-directional feedback loop where the AI's anomaly detection drives quantum key management, and the BB84 quantum channel's physical error rates inform the AI's trust scoring.",
    features: ["BB84 QKD Simulation (Qiskit)", "AES-256-GCM Encryption", "Eavesdropper Detection via QBER", "Adaptive Key Management", "Attack Simulation (Byzantine & Intercept)", "Streamlit Interactive Dashboard"],
    stack: ["Python 3.10", "PyTorch 2.0", "Qiskit 1.0 (Aer)", "Streamlit", "SQLite", "cryptography"],
    challenges: "Synchronizing simulated quantum key generation (via Qiskit AerSimulator) with classical federated learning loops across multiple clients while responding dynamically to simulated eavesdroppers.",
    learned: ["Quantum Key Distribution (BB84)", "Federated Learning Architectures", "Adaptive Risk Policies", "Python Research Orchestration"]
  },
  {
    id: "bookstore-management",
    featured: false,
    order: 9,
    category: "Full Stack & DevOps",
    categoryIcon: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
    accent: "orange",
    image: null,
    title: "Bookstore Management System",
    subtitle: "Enterprise-Level Full Stack Platform",
    oneLiner: "A production-style bookstore platform built with Spring Boot, React, and MySQL, fully containerized with Docker.",
    cardDescription: "A production-style bookstore platform built with Spring Boot, React, and MySQL, fully containerized with Docker.",
    techStack: ["Java", "Spring Boot", "React", "MySQL", "Docker"],
    repo: "https://github.com/Purv007/bookstore",
    demo: null,
    overview: "A production-style, full-stack bookstore platform featuring secure JWT authentication, role-based access, catalog browsing with search/filtering, order lifecycle management, reviews, and an admin analytics dashboard.",
    problem: "Developing an enterprise-level e-commerce application requires strict adherence to security, robust relational database structures, and seamless API communication between a decoupled frontend and backend.",
    solution: "Built a layered REST API architecture using Java, Spring Boot, and Hibernate, paired with a dynamic React/Vite frontend. Containerized the entire stack (Database, Backend, Frontend) using Docker Compose for instant, reproducible deployments.",
    features: ["JWT Authentication & Role-Based Access", "Advanced Catalog Browsing (Search/Filter/Sort)", "Complete Order Lifecycle & Cart Management", "Admin KPI Analytics Dashboard", "OpenAPI/Swagger UI Integration", "Dockerized Multi-Container Setup"],
    stack: ["Java 17", "Spring Boot 3.2", "Spring Security", "React 18", "Vite", "MySQL 8", "Hibernate", "Docker Compose"],
    challenges: "Configuring Spring Security with stateless JWT auth filters and orchestrating multiple Docker containers while avoiding database connection race conditions during startup.",
    learned: ["Enterprise Java Backend Architecture", "Spring Security Authentication", "Docker & Container Orchestration", "Relational Database Modeling with JPA"]
  }
];
