const projects = [
  {
    title: "Commit Tracker",
    description: "A web application that tracks GitHub commit activity and visualizes contribution history.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    detail: "Commit Tracker pulls live data from the GitHub API to display commit frequency, streaks, and repo-level breakdowns. Users can search any public profile and see an interactive heatmap of their activity over the past year. Built with a Node/Express backend that caches API responses to stay within rate limits.",
    images: ["/images/StatusPage.png", "/images/StatusPage.png"],
    role: "Solo Developer",
    status: "Live",
    year: "2024",
  },
  {
    title: "Status Page",
    description: "A status page dashboard that monitors and displays the health of various services in real time.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    detail: "Monitors uptime and response times for multiple services via scheduled health checks. Each service shows a 90-day history bar chart and an incident timeline. Supports email alerts when a service goes down and a public-facing status URL teams can share with customers.",
    images: ["/images/StatusPage.png"],
    role: "Solo Developer",
    status: "Live",
    year: "2024",
  },
  {
    title: "Course Enrollment",
    description: "A course enrollment system that allows students to browse and register for available courses.",
    techStack: ["Java", "Spring Boot", "MySQL"],
    detail: "Full REST API built with Spring Boot handling student registration, course capacity management, and schedule conflict detection. Features role-based access control — admins can create/edit courses while students can only enroll. Frontend consumed the API to display available seats in real time.",
    images: [],
    role: "Solo Developer",
    status: "Completed",
    year: "2023",
  },
  {
    title: "Scan-To-Access Note Taking App",
    description: "A note-taking application with QR code scanning to quickly access and organize notes.",
    techStack: ["React", "Node.js", "MongoDB"],
    detail: "Each note gets a unique QR code. Scanning it on any device instantly opens the note in the browser — no login required for read access. Notes support markdown formatting, tags, and folder organization. The scanning flow uses the device camera API with a fallback to manual code entry.",
    images: [],
    role: "Solo Developer",
    status: "In Development",
    year: "2025",
  },
];

export default projects;
