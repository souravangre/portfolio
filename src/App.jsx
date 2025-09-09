// Sourav_Angre_Portfolio.jsx
// Single-file React component (default export) ready to paste into a Create React App / Vite project
// TailwindCSS is used for styling. Make sure Tailwind is configured in the project.

import React from "react";

// Replace these constants with your real links/emails
const SITE = {
    name: "Sourav Angre",
    title: "Cloud & DevOps Enthusiast | Flask · AWS · Docker · CI/CD",
    location: "Pune, India",
    email: "sourav@example.com",
    github: "https://github.com/SouravAngre",
    linkedin: "https://linkedin.com/in/sourav-angre",
    twitter: "https://twitter.com/sourav",
};

const PROJECTS = [
    {
        title: "AWS Lift & Shift Deployment",
        desc:
            "Lift-and-shift deployment of a Flask app: Dockerized, served on EC2, MySQL on EC2, media on S3, DNS on Route 53.",
        tech: ["Flask", "Docker", "AWS EC2", "S3", "Route53"],
        link: "#",
    },
    {
        title: "Fitstore — Flask E-commerce",
        desc:
            "A simple e-commerce app with authentication, cart, order history and a DevOps-focused CI/CD pipeline (Jenkins + Docker).",
        tech: ["Flask", "SQLite/MySQL", "Docker", "Jenkins", "Nginx"],
        link: "#",
    },
    {
        title: "Internshala Job Alert App (Scraper)",
        desc:
            "A job-scraping automation that collects Internshala listings, saves CSVs and emails alerts to users based on preferences.",
        tech: ["Python", "Flask", "BeautifulSoup", "SMTP"],
        link: "#",
    },
    {
        title: "City Companion",
        desc:
            "Node.js + MongoDB app integrating WeatherAPI, NewsAPI and Restaurants API to help users explore a city programmatically.",
        tech: ["Node.js", "MongoDB", "External APIs"],
        link: "#",
    },
    {
        title: "Expense Tracker (CSV + Visuals)",
        desc: "Upload CSV transactions, categorize automatically and visualize spending trends.",
        tech: ["Flask", "Pandas", "Charting"],
        link: "#",
    },
];

const SKILLS = [
    "AWS (EC2, S3, Route53)",
    "Docker & Containerization",
    "CI/CD (Jenkins, GitHub Actions)",
    "Flask / Django",
    "Node.js & MongoDB",
    "SQL (MySQL, SQLite)",
    "Linux & Networking",
    "Basic Frontend (HTML/CSS/JS)",
];

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-gray-100 antialiased">
            <header className="max-w-5xl mx-auto p-6 sm:p-12">
                <nav className="flex items-center justify-between">
                    <div className="text-2xl font-semibold">{SITE.name}</div>
                    <div className="space-x-4 text-sm hidden sm:flex">
                        <a href="#about" className="hover:underline">About</a>
                        <a href="#projects" className="hover:underline">Projects</a>
                        <a href="#skills" className="hover:underline">Skills</a>
                        <a href="#contact" className="hover:underline">Contact</a>
                    </div>
                </nav>
            </header>

            <main className="max-w-5xl mx-auto px-6 pb-24">
                {/* HERO */}
                <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center py-12">
                    <div>
                        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">Hi — I’m {SITE.name}.</h1>
                        <p className="mt-4 text-lg max-w-xl">{SITE.title}. Building scalable cloud-first applications and automations. I love turning messy infra into reliable, documented systems.</p>

                        <div className="mt-6 flex items-center gap-4">
                            <a href={SITE.github} target="_blank" rel="noreferrer" className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md hover:bg-gray-700">GitHub</a>
                            <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md hover:bg-gray-700">LinkedIn</a>
                            <a href={`mailto:${SITE.email}`} className="px-4 py-2 bg-indigo-600 rounded-md hover:bg-indigo-500">Email</a>
                        </div>

                        <div className="mt-6 text-sm text-gray-300">Based in {SITE.location} • 4th-year engineering student • 21 years old</div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-6 shadow-lg">
                        <div className="text-sm text-gray-300">Quick links</div>
                        <ul className="mt-4 space-y-3">
                            <li className="flex items-start">
                                <div className="mr-3 font-mono text-xs text-indigo-300">01</div>
                                <div>
                                    <div className="font-semibold">Cloud & DevOps</div>
                                    <div className="text-sm text-gray-300">Deployments, automation, CI/CD, Docker</div>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="mr-3 font-mono text-xs text-indigo-300">02</div>
                                <div>
                                    <div className="font-semibold">Backend</div>
                                    <div className="text-sm text-gray-300">Flask, Node.js, SQL, REST APIs</div>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="mr-3 font-mono text-xs text-indigo-300">03</div>
                                <div>
                                    <div className="font-semibold">Projects & Learning</div>
                                    <div className="text-sm text-gray-300">Hands-on mini-products and extra learning notes</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* ABOUT */}
                <section id="about" className="py-8">
                    <h2 className="text-2xl font-semibold">About</h2>
                    <p className="mt-4 text-gray-300 max-w-3xl">I’m a 4th-year engineering student focused on cloud and DevOps. I enjoy building reproducible systems: Dockerizing apps, automating deployments with CI/CD, and designing simple yet maintainable infra. I’ve worked on lifting-and-shifting projects to AWS, building Flask-based web apps, and automations that save time. I’m actively preparing for entry-level cloud/dev roles and enjoy learning system-level topics like networking and OS.</p>
                </section>

                {/* PROJECTS */}
                <section id="projects" className="py-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-semibold">Selected Projects</h2>
                        <div className="text-sm text-gray-400">Open-source + demos</div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {PROJECTS.map((p, i) => (
                            <article key={i} className="bg-gray-800 rounded-xl p-5 hover:shadow-xl transition-shadow">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold text-lg">{p.title}</h3>
                                    <a href={p.link} className="text-xs text-indigo-300">View</a>
                                </div>
                                <p className="mt-2 text-sm text-gray-300">{p.desc}</p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {p.tech.map((t, j) => (
                                        <span key={j} className="text-xs font-medium px-2 py-1 bg-gray-700 rounded">{t}</span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* SKILLS */}
                <section id="skills" className="py-8">
                    <h2 className="text-2xl font-semibold">Skills</h2>
                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {SKILLS.map((s, i) => (
                            <div key={i} className="p-3 bg-gray-800 rounded-md text-sm text-gray-200">{s}</div>
                        ))}
                    </div>
                </section>

                {/* CONTACT */}
                <section id="contact" className="py-8">
                    <h2 className="text-2xl font-semibold">Contact</h2>
                    <p className="mt-3 text-gray-300">I’m open to internships and entry-level roles in Cloud & DevOps. If you’d like to chat, reach me at</p>
                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-4">
                        <a href={`mailto:${SITE.email}`} className="px-5 py-3 bg-indigo-600 rounded-md inline-block hover:bg-indigo-500">Email: {SITE.email}</a>
                        <a href={SITE.github} target="_blank" rel="noreferrer" className="px-5 py-3 bg-gray-800 border border-gray-700 rounded-md inline-block">GitHub Profile</a>
                        <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="px-5 py-3 bg-gray-800 border border-gray-700 rounded-md inline-block">LinkedIn</a>
                    </div>

                    <div className="mt-6 text-sm text-gray-400">Prefer clones/deploy? I can provide a ready-to-deploy repo with Vercel config or a simple Dockerfile.</div>
                </section>

                <footer className="mt-16 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} {SITE.name} — Built with React + Tailwind</footer>
            </main>
        </div>
    );
}

/*
  SETUP NOTES (paste into your React project):
  1) Create a React app (Vite or Create React App) and add Tailwind CSS.
     - CRA: npx create-react-app my-portfolio
     - Vite: npm create vite@latest my-portfolio --template react
  2) Install and configure Tailwind (follow official docs):
     - npm install -D tailwindcss postcss autoprefixer
     - npx tailwindcss init -p
     - add tailwind directives to index.css
  3) Copy this file into src/ as App.jsx (or adjust imports) and ensure index.js renders <App />.
  4) Replace placeholder links/emails with your real ones.
  5) Deploy to Vercel or Netlify (drag-and-drop or link the GitHub repo).

  Want me to:
   - generate a full project tree + package.json + Tailwind config? (I can produce files here)
   - create a deploy-ready repo structure with a README and a Dockerfile?
*/
