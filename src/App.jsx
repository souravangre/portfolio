// Sourav_Angre_Portfolio.jsx
// Single-file React component (default export) ready to paste into a Create React App / Vite project
// TailwindCSS is used for styling. Make sure Tailwind is configured in the project.

import React, { useState } from "react";

// Replace these constants with your real links/emails
const SITE = {
    name: "Sourav Angre",
    title: "Cloud & DevOps Enthusiast | Python · AWS · Docker · CI/CD",
    location: "Pune, India",
    email: "souravangre17@gmail.com",
    github: "https://github.com/SouravAngre",
    linkedin: "https://linkedin.com/in/sourav-angre",
    twitter: "https://twitter.com/sourav",
};

const PROJECTS = [
    {
        title: "Internshala Job Alert App (Scraper)",
        desc:
            "A job-scraping automation tool that collects Internshala listings, saves CSVs and emails alerts to users based on preferences.",
        tech: ["Python", "Flask", "BeautifulSoup", "SMTP"],
        Live: "https://intern-alert-app-v1.onrender.com",
        Github: "https://github.com/souravangre/Internshala_Job_Scraper",
        image: "/internshala.png",
    },
    {
        title: "AWS VPC secure web hosting",
        desc:
            "Designed and deployed a secure, cost-effective cloud hosting architecture using AWS services",
        tech: ["AWS EC2", "S3", "RDS", "VPC", "ALB", "NAT Gateway"],
        Github: "https://github.com/souravangre/AWS-VPC",
        image: "/aws.png",
    },
    {
        title: "Multi User Chat-App",
        desc:
            "A simple multi-client chat application built using Python’s socket programming and SQLite for user authentication.",
        tech: ["Python", "Socket programming", "Threading", "sqlite3"],
        Github: "https://github.com/souravangre/Multi-User-Chat-App",
        image: "/chat.png",
    },
    {
        title: "File Storing/Sharing system (Ongoing)",
        desc:
            "A file storage and sharing system in Python is a web application that allows users to securely upload, download, and manage access to digital files.",
        tech: ["Python", "SQLAlchemy/MySQL", " File Handling", "Basic Frontend (HTML/CSS/JavaScript)", "System Design"],
        Github: "https://github.com/souravangre/cloud-storage-system",
        image: "/storage.png",
    },

];

const SKILLS = [
    "Python, Java",
    "AWS (EC2, S3, VPC, RDS, ALB, Autoscaling, Elastic-BeanStalk)",
    "Docker & Containerization",
    "CI/CD (Jenkins, GitHub Actions)",
    "Flask / Django",
    "SQL (MySQL, SQLite)",
    "Linux & Networking",
    "Basic Frontend (HTML/CSS/JS)",
];

export default function Portfolio() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-950 text-gray-100 antialiased">
            <header className="max-w-5xl mx-auto p-6 sm:p-12">
                <nav className="flex items-center justify-between">
                    <div className="text-2xl font-semibold">{SITE.name}</div>

                    {/* Desktop links (hidden on small screens) */}
                    <div className="space-x-4 text-sm hidden sm:flex">
                        <a href="#about" className="hover:underline">About</a>
                        <a href="#projects" className="hover:underline">Projects</a>
                        <a href="#skills" className="hover:underline">Skills</a>
                        <a href="#contact" className="hover:underline">Contact</a>
                    </div>

                    {/* Mobile hamburger */}
                    <div className="sm:hidden">
                      <button
                        onClick={() => setMenuOpen((s) => !s)}
                        aria-label="Toggle menu"
                        className="p-2 rounded-md hover:bg-gray-800 focus:outline-none"
                      >
                        {menuOpen ? (
                          // Close icon (X)
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        ) : (
                          // Hamburger icon
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                          </svg>
                        )}
                      </button>
                    </div>
                </nav>

                {/* Mobile dropdown menu */}
                {menuOpen && (
                  <div className="sm:hidden mt-3 space-y-2 bg-transparent">
                    <a href="#about" onClick={() => setMenuOpen(false)} className="block px-2 py-2 rounded hover:bg-gray-800">About</a>
                    <a href="#projects" onClick={() => setMenuOpen(false)} className="block px-2 py-2 rounded hover:bg-gray-800">Projects</a>
                    <a href="#skills" onClick={() => setMenuOpen(false)} className="block px-2 py-2 rounded hover:bg-gray-800">Skills</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)} className="block px-2 py-2 rounded hover:bg-gray-800">Contact</a>
                  </div>
                )}
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

                        <div className="mt-6 text-sm text-gray-300">Based in {SITE.location} • 4th-year engineering student </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-6 shadow-lg">
                        <div className="text-sm text-gray-300">Quick links</div>
                        <ul className="mt-4 space-y-3">
                            <li className="flex items-start">
                                <div className="mr-3 font-mono text-xs text-indigo-300">01</div>
                                <div>
                                    <div className="font-semibold">Cloud & DevOps</div>
                                    <div className="text-sm text-gray-300">AWS, Deployments, automation, CI/CD, Docker</div>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="mr-3 font-mono text-xs text-indigo-300">02</div>
                                <div>
                                    <div className="font-semibold">Backend</div>
                                    <div className="text-sm text-gray-300">Flask, Django, SQL, REST APIs</div>
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
                            <article
                                key={i}
                                className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
                            >
                                {/* Project Image */}
                                {p.image && (
                                    <img
                                        src={p.image}
                                        alt={p.title}
                                        className="w-full h-40 object-cover"
                                    />
                                )}

                                {/* Project Content */}
                                <div className="p-5">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-semibold text-lg">{p.title}</h3>
                                        <div className="flex items-center space-x-3">
                                          <a href={p.Github} className="text-xs text-indigo-300 hover:underline">GitHub</a>
                                          {p.Live && (
                                            <a href={p.Live} className="text-xs text-green-400 hover:underline">Live</a>
                                          )}
                                        </div>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-300">{p.desc}</p>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {p.tech.map((t, j) => (
                                            <span key={j} className="text-xs font-medium px-2 py-1 bg-gray-700 rounded">{t}</span>
                                        ))}
                                    </div>
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
                </section>

                <footer className="mt-16 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} {SITE.name}</footer>
            </main>
        </div>
    );
}
