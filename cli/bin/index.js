#!/usr/bin/env node

/**
 * Interactive Terminal Portfolio Card for Sujal Nag
 * Run via: npx sujal-nag
 */

const readline = require("readline");
const { exec } = require("child_process");

// ANSI color helpers
const ESC = "\x1b[";
const RESET = `${ESC}0m`;
const BOLD = `${ESC}1m`;
const DIM = `${ESC}2m`;
const ITALIC = `${ESC}3m`;
const UNDERLINE = `${ESC}4m`;

// Truecolor / 256-color fallback
const CORAL = `${ESC}38;2;241;106;75m`; // #f16a4b (portfolio accent)
const CYAN = `${ESC}38;2;56;189;248m`;
const GREEN = `${ESC}38;2;52;211;153m`;
const YELLOW = `${ESC}38;2;251;191;36m`;
const PURPLE = `${ESC}38;2;192;132;252m`;
const WHITE = `${ESC}97m`;
const GRAY = `${ESC}90m`;

function stripAnsi(str) {
  return str.replace(/\x1b\[[0-9;]*m/g, "");
}

// User Data
const DATA = {
  name: "Sujal Nag",
  role: "Backend & Full Stack Engineer",
  focus: "Scalable Systems • Distributed Pipelines • GenAI Architectures",
  education: "Chandigarh University — B.E. Computer Science (2022 – 2026)",
  github: "https://github.com/sujal-wedev",
  linkedin: "https://linkedin.com/in/sujal-nag",
  email: "nagsujal9@gmail.com",
  phone: "+91 7410793311",
  portfolio: "https://github.com/sujal-wedev",
  npx: "npx sujal-nag",

  experience: [
    {
      company: "Skillfied",
      role: "Backend Intern (May 2026 – Aug 2026, Remote)",
      points: [
        "Engineered RESTful APIs with Express.js & MongoDB (+24% speed, -18% server errors)",
        "Implemented JWT authentication with role-based access control (+20% API security)",
      ],
    },
    {
      company: "Yuva Intern",
      role: "Junior Full Stack Developer Intern (Mar 2026 – Apr 2026, Remote)",
      points: [
        "Built modular React UI with cross-browser styling across 3+ pages",
        "Wrote 15+ Jest test suites (90%+ code coverage) & CI/CD deployment to AWS EC2",
      ],
    },
  ],

  projects: [
    {
      name: "LiftMate – AI Fitness Coach",
      tech: "Python, JavaScript, Google Gemini, Redis, Strava API",
      url: "https://strava-trainer-steel.vercel.app",
      summary: "Multi-agent Gemini coaching system with 30-min Redis session memory & Strava OAuth 2.0",
    },
    {
      name: "Chronicle – Monolithic Blogging Platform",
      tech: "Go/Fiber, React 19, PostgreSQL, MongoDB",
      url: "https://github.com/sujal-wedev/Chronicle",
      summary: "Single-binary full-stack platform with Google OAuth2, S3 proxy & dual ACID/schema-free DBs",
    },
    {
      name: "Two-Way-Integration Sync Engine",
      tech: "Python, FastAPI, Apache Kafka, MySQL, Docker",
      url: "https://github.com/sujal-wedev/Two-Way-Integration",
      summary: "Bi-directional Stripe sync engine with 95% consistency & sub-150ms Kafka pipeline",
    },
    {
      name: "FinSentinel – Stock Market Intelligence",
      tech: "Python, Machine Learning, Fast APIs",
      url: "https://github.com/sujal-wedev/FinSentinel",
      summary: "AI-powered stock market intelligence and real-time sentiment analytics",
    },
  ],

  skills: {
    Frontend: "React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, Redux",
    Backend: "Python, Node.js, Go, Java, FastAPI, Express.js, Spring Boot, REST, WebSockets",
    AI_ML: "Google Gemini, OpenAI API, LangChain, RAG, PyTorch, TensorFlow",
    Databases: "PostgreSQL, MySQL, MongoDB, Redis, Pinecone, ChromaDB",
    DevOps: "AWS (EC2, S3, Lambda), Docker, Kubernetes, CI/CD, GitHub Actions",
  },

  achievements: [
    "Top 10, WebRush 6-Hour Frontend Hackathon (Built & shipped complete frontend in 6h)",
    "Invited for Oral Presentation at ICMLC 2026 (Goa, India) for Physics-Informed ML research",
    "Team Core Member, Future Prep Forum Club (Organized 3 major offline tech events)",
    "Certifications: SQL (HackerRank) | Meta React Native (Coursera) | Y Combinator SDE",
  ],
};

// Cross-platform URL opener
function openUrl(url) {
  const start =
    process.platform === "darwin"
      ? "open"
      : process.platform === "win32"
      ? "start"
      : "xdg-open";
  exec(`${start} "${url}"`, (err) => {
    if (err) {
      console.log(`\n  ${YELLOW}Please open manually:${RESET} ${url}\n`);
    } else {
      console.log(`\n  ${GREEN}✓ Opened in your browser:${RESET} ${DIM}${url}${RESET}\n`);
    }
  });
}

function renderCard() {
  const lines = [
    "",
    `  ${BOLD}${WHITE}${DATA.name}${RESET}  ${GRAY}/${RESET}  ${CORAL}${DATA.role}${RESET}`,
    `  ${DIM}${DATA.focus}${RESET}`,
    `  ${GRAY}🎓 ${DATA.education}${RESET}`,
    "",
    `  ${BOLD}GitHub:${RESET}    ${CYAN}${DATA.github}${RESET}`,
    `  ${BOLD}LinkedIn:${RESET}  ${CYAN}${DATA.linkedin}${RESET}`,
    `  ${BOLD}Email:${RESET}     ${WHITE}${DATA.email}${RESET}`,
    `  ${BOLD}Phone:${RESET}     ${WHITE}${DATA.phone}${RESET}`,
    `  ${BOLD}Terminal:${RESET}  ${CORAL}${DATA.npx}${RESET}`,
    "",
    `  ${BOLD}🌟 Featured Projects:${RESET}`,
    `   • ${GREEN}LiftMate${RESET}         ${DIM}(AI Fitness Coach • Gemini + Strava)${RESET}`,
    `   • ${GREEN}Chronicle${RESET}        ${DIM}(Go/Fiber + React 19 Monolithic Blog)${RESET}`,
    `   • ${GREEN}Two-Way-Sync${RESET}     ${DIM}(FastAPI + Stripe + Apache Kafka)${RESET}`,
    `   • ${GREEN}FinSentinel${RESET}      ${DIM}(AI Stock Intelligence Platform)${RESET}`,
    "",
    `  ${BOLD}💼 Experience:${RESET}`,
    `   • ${WHITE}Skillfied${RESET}        ${DIM}Backend Intern (Express, MongoDB, JWT)${RESET}`,
    `   • ${WHITE}Yuva Intern${RESET}      ${DIM}Full Stack Intern (React, AWS EC2, Jest)${RESET}`,
    "",
  ];

  // Calculate box width
  const innerWidth = 72;
  const topBorder = `  ╭${"─".repeat(innerWidth)}╮`;
  const botBorder = `  ╰${"─".repeat(innerWidth)}╯`;

  console.log(`\n${CORAL}${topBorder}${RESET}`);
  for (const line of lines) {
    if (line === "") {
      console.log(`  ${CORAL}│${RESET}${" ".repeat(innerWidth)}${CORAL}│${RESET}`);
      continue;
    }
    const visibleLength = stripAnsi(line).length;
    const padding = Math.max(0, innerWidth - visibleLength);
    console.log(`  ${CORAL}│${RESET}${line}${" ".repeat(padding)}${CORAL}│${RESET}`);
  }
  console.log(`${CORAL}${botBorder}${RESET}\n`);
}

function showProjectsDetail() {
  console.log(`\n  ${BOLD}${CORAL}═══ PROJECT ARCHITECTURE & DETAILS ═══${RESET}\n`);
  DATA.projects.forEach((p, idx) => {
    console.log(`  ${BOLD}${CYAN}[${idx + 1}] ${p.name}${RESET}`);
    console.log(`      ${DIM}Tech:${RESET}    ${YELLOW}${p.tech}${RESET}`);
    console.log(`      ${DIM}About:${RESET}   ${WHITE}${p.summary}${RESET}`);
    console.log(`      ${DIM}Link:${RESET}    ${UNDERLINE}${p.url}${RESET}\n`);
  });
}

function showExperienceDetail() {
  console.log(`\n  ${BOLD}${CORAL}═══ WORK EXPERIENCE & ACHIEVEMENTS ═══${RESET}\n`);
  DATA.experience.forEach((e) => {
    console.log(`  ${BOLD}${GREEN}💼 ${e.company}${RESET} — ${WHITE}${e.role}${RESET}`);
    e.points.forEach((pt) => {
      console.log(`     • ${DIM}${pt}${RESET}`);
    });
    console.log("");
  });

  console.log(`  ${BOLD}${YELLOW}🏆 Key Achievements & Certifications:${RESET}`);
  DATA.achievements.forEach((ach) => {
    console.log(`   • ${WHITE}${ach}${RESET}`);
  });
  console.log("");
}

function promptInteractive() {
  // If not running in an interactive terminal (e.g. CI, piped output)
  if (!process.stdin.isTTY) {
    return;
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function showMenu() {
    console.log(`  ${DIM}Select an option:${RESET}`);
    console.log(`   ${BOLD}[1]${RESET} 🌐 Open GitHub Profile`);
    console.log(`   ${BOLD}[2]${RESET} 💼 Open LinkedIn Profile`);
    console.log(`   ${BOLD}[3]${RESET} 📧 Send an Email (mailto)`);
    console.log(`   ${BOLD}[4]${RESET} 🚀 Open LiftMate Live App`);
    console.log(`   ${BOLD}[5]${RESET} 📦 View Detailed Projects`);
    console.log(`   ${BOLD}[6]${RESET} 📜 View Experience & Achievements`);
    console.log(`   ${BOLD}[0]${RESET} 🚪 Exit\n`);

    rl.question(`  ${CORAL}> Enter choice (0-6): ${RESET}`, (answer) => {
      const choice = answer.trim();
      switch (choice) {
        case "1":
          openUrl(DATA.github);
          setTimeout(showMenu, 1000);
          break;
        case "2":
          openUrl(DATA.linkedin);
          setTimeout(showMenu, 1000);
          break;
        case "3":
          openUrl(`mailto:${DATA.email}`);
          setTimeout(showMenu, 1000);
          break;
        case "4":
          openUrl(DATA.projects[0].url);
          setTimeout(showMenu, 1000);
          break;
        case "5":
          showProjectsDetail();
          setTimeout(showMenu, 500);
          break;
        case "6":
          showExperienceDetail();
          setTimeout(showMenu, 500);
          break;
        case "0":
        case "q":
        case "exit":
          console.log(`\n  ${CORAL}Thanks for stopping by! Have a great day! 🚀${RESET}\n`);
          rl.close();
          break;
        default:
          console.log(`  ${YELLOW}Invalid choice, please select 0-6.${RESET}\n`);
          showMenu();
          break;
      }
    });
  }

  showMenu();
}

// CLI argument handling
const args = process.argv.slice(2);
if (args.includes("--json")) {
  console.log(JSON.stringify(DATA, null, 2));
  process.exit(0);
}

if (args.includes("--help") || args.includes("-h")) {
  console.log(`
Usage:
  npx sujal-nag           Run interactive developer card
  npx sujal-nag --json    Output profile information in JSON format
  npx sujal-nag --help    Show help instructions
`);
  process.exit(0);
}

// Main execution
renderCard();
promptInteractive();
