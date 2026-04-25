const projects = [
  {
    title: "Commit Tracker",
    description: "A web application that tracks GitHub commit activity and visualizes contribution history.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    detail: "Commit Tracker pulls live data from the GitHub API to display commit frequency, streaks, and repo-level breakdowns. Users can search any public profile and see an interactive heatmap of their activity over the past year. Built with a Node/Express backend that caches API responses to stay within rate limits.",
    images: ["/commitImage.png"],
    role: "Solo Developer",
    status: "Live",
    year: "2024",
  },

  {
    title: "Mind & Body Fitness Tracker",
    description: "A full-stack gamified fitness platform I built while getting into Java and Spring Boot. Covers workout logging, achievement badges, challenges, and leaderboards.",
    techStack: ["Java", "Spring Boot", "PostgreSQL", "React", "TypeScript", "JWT"],
    detail: "Full-stack fitness tracking app with a Spring Boot REST API backend and a React TypeScript frontend. Users log PUSH/PULL/LEGS workouts with duration and notes, earn badges through an achievement system, complete daily and weekly challenges, and track streaks over time. The backend handles JWT authentication, Spring Security, Spring Data JPA with PostgreSQL, and is Docker-ready. The frontend consumes the API via Axios and provides a leaderboard, workout history, and real-time streak counters.",
    images: ["/newimage.png"],
    role: "Solo Developer",
    status: "Completed",
    year: "2025",
    link: "https://github.com/dengus14/frontendMindBody",
    linkText: "View on GitHub",
  },
  {
    title: "Scan-To-Access Note Taking App",
    description: "A 4-month senior capstone project built with a team of five. I led the backend and overall direction. Scan a photo of your notes and the app extracts the text, organizes it, and turns it into flashcards.",
    techStack: ["React Native", "Node.js", "Express", "MongoDB", "Google Cloud Vision", "TypeScript"],
    detail: "Senior capstone project built over 4 months with a team of five, where I served as team lead and backend lead. The app lets users capture handwritten or printed notes via camera, runs OCR through the Google Cloud Vision API (with Tesseract.js as a fallback), and organizes the extracted text into notes and flashcard study sets. The backend is a Node/Express REST API with MongoDB, handling auth, file uploads via Multer, and email via Nodemailer. The mobile frontend is built with React Native and Expo, using tab-based navigation and AsyncStorage for auth persistence.",
    images: [],
    role: "Team Lead, Backend Lead",
    status: "Completed",
    year: "2025",
    link: "https://github.com/Chi-Sing-Thao/CompSci-595",
    linkText: "View on GitHub",
  },
];

export default projects;
