/**
 * Portfolio Configuration File
 * Update this file to change content, links, and settings across the entire site.
 * No need to touch HTML or main JS files after initial setup.
 */

const CONFIG = {
  // General Site Info
  site: {
    name: "Olivia Eddin",
    title: "Olivia Eddin - Portfolio",
    footerText: "© 2026 Olivia Eddin. All rights reserved."
  },

  // Navigation Menu
  navigation: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "cv", label: "CV" },
    { id: "contact", label: "Contact" }
  ],

  // Hero / Home Section
  hero: {
    greeting: "Hey I'm",
    typingTexts: [
      "Full-Stack Developer",
      "UI/UX Designer",
      "Creative Coder",
      "Problem Solver"
    ],
    description: "Experienced full-stack developer passionate about crafting high-performance web applications. Specializing in React, Node.js, and modern UI/UX design. Turning complex problems into simple, beautiful, and intuitive solutions.",
    ctaButton: {
      text: "Hire Me",
      action: "contact" // Page ID to navigate to on click
    }
  },

  // Social Media Links
  social: {
    facebook: "#",
    linkedin: "#",
    github: "#",
    twitter: "#"
  },

  // About Section
  about: {
    name: "Olivia Eddin",
    email: "olivia@example.com",
    age: 28,
    location: "San Francisco, CA",
    freelance: "Available",
    description: "I am a passionate full-stack developer with 6+ years of experience building web applications. I love turning ideas into reality through code and design. When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects.",
    cvDownloadPage: "cv"
  },

  // Stats Counters
  stats: [
    { value: 50, label: "Projects Completed", suffix: "+" },
    { value: 30, label: "Happy Clients", suffix: "+" },
    { value: 6, label: "Years Experience", suffix: "+" },
    { value: 15, label: "Awards Won", suffix: "+" }
  ],

  // Resume Section
  resume: {
    education: [
      {
        date: "2018 - 2020",
        title: "Master of Computer Science",
        institution: "Stanford University",
        description: "Specialized in Artificial Intelligence and Machine Learning with a focus on NLP applications."
      },
      {
        date: "2014 - 2018",
        title: "Bachelor of Science",
        institution: "UC Berkeley",
        description: "Graduated with honors in Computer Science. Minor in Digital Arts."
      },
      {
        date: "2012 - 2014",
        title: "High School Diploma",
        institution: "Tech Valley Academy",
        description: "Valedictorian. Founded the school's coding club."
      }
    ],
    experience: [
      {
        date: "2022 - Present",
        title: "Senior Full-Stack Developer",
        institution: "Google",
        description: "Leading a team of 8 developers building next-gen web applications using React and GraphQL."
      },
      {
        date: "2020 - 2022",
        title: "Frontend Developer",
        institution: "Meta",
        description: "Built responsive UIs and improved performance metrics by 40% across multiple products."
      },
      {
        date: "2018 - 2020",
        title: "Junior Developer",
        institution: "Startup Inc.",
        description: "Developed and maintained web applications using JavaScript, HTML, and CSS."
      }
    ]
  },

  // CV Section
  cv: {
    contact: {
      email: "olivia@example.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA"
    },
    skills: [
      { name: "JavaScript / TypeScript", level: 95 },
      { name: "React / Next.js", level: 92 },
      { name: "Node.js / Express", level: 88 },
      { name: "Python / Django", level: 80 },
      { name: "UI/UX Design", level: 85 },
      { name: "Database / SQL", level: 78 }
    ],
    languages: [
      { name: "English", proficiency: "Native" },
      { name: "Spanish", proficiency: "Professional" },
      { name: "French", proficiency: "Conversational" }
    ],
    interests: [
      "🤖 AI & Machine Learning",
      "🎨 UI/UX Design",
      "📚 Open Source",
      "🎮 Game Development",
      "📷 Photography",
      "🎵 Music Production"
    ]
  },

  // Contact Section
  contact: {
    email: "olivia@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    website: "www.oliviaeddin.com",
    successMessage: "Message sent successfully! ✉️"
  },

  // Animation & Performance Settings
  animation: {
    typing: {
      initialSpeed: 100,
      deleteSpeed: 50,
      pauseAtEnd: 2000,
      pauseAtStart: 500
    },
    counters: {
      duration: 2000,
      startDelay: 500
    },
    skills: {
      staggerDelay: 200,
      startDelay: 500
    }
  }
};

// Export for Node/CommonJS environments (optional)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
