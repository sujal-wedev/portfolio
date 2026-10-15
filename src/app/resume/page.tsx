"use client";

import React, { useState } from "react";
import Link from "next/link";
import { portfolioData } from "@/lib/portfolioData";

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState<"pdf" | "web">("pdf");
  const { personalInfo, experiences, education, skillCategories, achievements, projects } =
    portfolioData;

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div
      className="resume-page-container"
      style={{
        padding: "40px 20px 100px",
        maxWidth: activeTab === "pdf" ? "1000px" : "840px",
        margin: "0 auto",
        transition: "max-width 0.3s ease",
      }}
    >
      {/* Top Action Bar */}
      <div
        className="no-print"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "28px",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <Link
          href="/"
          style={{
            color: "var(--text-secondary)",
            textDecoration: "none",
            fontSize: "0.9rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
        >
          ← back home
        </Link>

        {/* View Toggle Tabs */}
        <div
          style={{
            display: "inline-flex",
            background: "rgba(255, 255, 255, 0.05)",
            padding: "4px",
            borderRadius: "999px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <button
            onClick={() => setActiveTab("pdf")}
            style={{
              background: activeTab === "pdf" ? "var(--capsule-bg)" : "transparent",
              color: activeTab === "pdf" ? "#fff" : "var(--text-secondary)",
              border: "none",
              padding: "6px 16px",
              borderRadius: "999px",
              fontSize: "0.82rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            Actual PDF Document
          </button>
          <button
            onClick={() => setActiveTab("web")}
            style={{
              background: activeTab === "web" ? "var(--capsule-bg)" : "transparent",
              color: activeTab === "web" ? "#fff" : "var(--text-secondary)",
              border: "none",
              padding: "6px 16px",
              borderRadius: "999px",
              fontSize: "0.82rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            Web View
          </button>
        </div>

        {/* Quick Action Buttons */}
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "rgba(255, 255, 255, 0.06)",
              color: "var(--text-primary)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              padding: "8px 16px",
              borderRadius: "999px",
              fontSize: "0.82rem",
              fontWeight: "500",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)")}
          >
            Open in Tab ↗
          </a>

          <a
            href="/resume.pdf"
            download="Sujal_Nag_Resume.pdf"
            style={{
              background: "var(--capsule-bg)",
              color: "#fff",
              border: "none",
              padding: "8px 18px",
              borderRadius: "999px",
              fontSize: "0.82rem",
              fontWeight: "600",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(241, 106, 75, 0.28)",
              transition: "opacity 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF
          </a>
        </div>
      </div>

      {/* TAB 1: Actual PDF Embedded Viewer */}
      {activeTab === "pdf" && (
        <div
          style={{
            width: "100%",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            background: "#18181c",
            boxShadow: "0 16px 48px rgba(0, 0, 0, 0.5)",
          }}
        >
          <div
            style={{
              padding: "12px 20px",
              background: "rgba(255, 255, 255, 0.03)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "0.85rem",
              color: "var(--text-secondary)",
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--text-primary)", fontWeight: "500" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981" }} />
              Sujal_Nag_Resume.pdf
            </span>
            <span>Official Resume</span>
          </div>

          <div style={{ width: "100%", height: "820px", position: "relative" }}>
            <iframe
              src="/resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
              width="100%"
              height="100%"
              style={{ border: "none", display: "block" }}
              title="Sujal Nag Resume PDF"
            />
          </div>
        </div>
      )}

      {/* TAB 2: Clean Formatted Web Sheet (also print target) */}
      {activeTab === "web" && (
        <div
          className="resume-sheet"
          style={{
            background: "rgba(255, 255, 255, 0.02)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "16px",
            padding: "48px 40px",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.4)",
          }}
        >
          {/* Action to print within web view */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "16px" }} className="no-print">
            <button
              onClick={handlePrint}
              style={{
                background: "transparent",
                color: "var(--text-secondary)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "6px 14px",
                borderRadius: "999px",
                fontSize: "0.78rem",
                cursor: "pointer",
              }}
            >
              Print Page
            </button>
          </div>

          {/* Name and Contact */}
          <div
            style={{
              textAlign: "center",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              paddingBottom: "24px",
              marginBottom: "28px",
            }}
          >
            <h1
              className="instrument-serif"
              style={{
                fontSize: "3.2rem",
                margin: 0,
                color: "var(--text-primary)",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              {personalInfo.name}
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "12px",
                marginTop: "12px",
                fontSize: "0.88rem",
                color: "var(--text-secondary)",
              }}
            >
              <span>+91 {personalInfo.phone}</span>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} style={{ color: "var(--text-primary)", textDecoration: "none" }}>
                {personalInfo.email}
              </a>
              <span>•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-primary)", textDecoration: "none" }}>
                linkedin.com/in/sujal-nag
              </a>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-primary)", textDecoration: "none" }}>
                github.com/sujal-wedev
              </a>
            </div>
          </div>

          {/* Experience Section */}
          <section style={{ marginBottom: "28px" }}>
            <h2
              style={{
                fontSize: "1.1rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--capsule-bg)",
                fontWeight: "700",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                paddingBottom: "6px",
                marginBottom: "16px",
              }}
            >
              Experience
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {experiences.map((exp) => (
                <div key={exp._id}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap" }}>
                    <div>
                      <span style={{ fontSize: "1.05rem", fontWeight: "700", color: "var(--text-primary)" }}>{exp.company}</span>
                      <span style={{ color: "var(--text-secondary)", marginLeft: "8px", fontSize: "0.95rem" }}>— {exp.role}</span>
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                      {exp.date} {exp.location && `| ${exp.location}`}
                    </div>
                  </div>
                  <ul style={{ margin: "8px 0 0 0", paddingLeft: "18px", color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                    {exp.description.map((bullet, idx) => (
                      <li key={idx} style={{ marginBottom: "4px" }}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section style={{ marginBottom: "28px" }}>
            <h2
              style={{
                fontSize: "1.1rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--capsule-bg)",
                fontWeight: "700",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                paddingBottom: "6px",
                marginBottom: "16px",
              }}
            >
              Projects
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {projects.slice(0, 3).map((proj) => (
                <div key={proj.id}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap" }}>
                    <div>
                      <span style={{ fontSize: "1.02rem", fontWeight: "700", color: "var(--text-primary)" }}>{proj.title}</span>
                      <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginLeft: "8px", fontStyle: "italic" }}>
                        | {proj.tech}
                      </span>
                    </div>
                    <div>
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: "0.82rem", color: "var(--capsule-bg)", textDecoration: "none", fontWeight: "600" }}
                      >
                        link ↗
                      </a>
                    </div>
                  </div>
                  <p style={{ margin: "6px 0 0 0", fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills */}
          <section style={{ marginBottom: "28px" }}>
            <h2
              style={{
                fontSize: "1.1rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--capsule-bg)",
                fontWeight: "700",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                paddingBottom: "6px",
                marginBottom: "16px",
              }}
            >
              Technical Skills
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.9rem" }}>
              {skillCategories.map((cat) => (
                <div key={cat._id} style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <span style={{ fontWeight: "700", color: "var(--text-primary)", minWidth: "120px" }}>{cat.category}:</span>
                  <span style={{ color: "var(--text-secondary)" }}>{cat.skills.join(", ")}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section style={{ marginBottom: "28px" }}>
            <h2
              style={{
                fontSize: "1.1rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--capsule-bg)",
                fontWeight: "700",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                paddingBottom: "6px",
                marginBottom: "16px",
              }}
            >
              Achievements & Certifications
            </h2>
            <ul style={{ margin: "8px 0 0 0", paddingLeft: "18px", color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6 }}>
              {achievements.map((ach, idx) => (
                <li key={idx} style={{ marginBottom: "6px" }}>
                  <strong style={{ color: "var(--text-primary)" }}>{ach.title}</strong> — {ach.subtitle}
                </li>
              ))}
            </ul>
          </section>

          {/* Education */}
          <section>
            <h2
              style={{
                fontSize: "1.1rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--capsule-bg)",
                fontWeight: "700",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                paddingBottom: "6px",
                marginBottom: "16px",
              }}
            >
              Education
            </h2>
            {education.map((edu) => (
              <div key={edu._id} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap" }}>
                <div>
                  <span style={{ fontSize: "1.05rem", fontWeight: "700", color: "var(--text-primary)" }}>{edu.institution}</span>
                  <span style={{ color: "var(--text-secondary)", marginLeft: "8px", fontSize: "0.92rem" }}>— {edu.degree}</span>
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                  {edu.date} {edu.location && `| ${edu.location}`}
                </div>
              </div>
            ))}
          </section>
        </div>
      )}

      {/* Print-specific style tag */}
      <style jsx global>{`
        @media print {
          body {
            background: #fff !important;
            color: #000 !important;
          }
          .top-nav,
          .bottom-capsule,
          .bottom-vignette,
          .no-print {
            display: none !important;
          }
          .resume-page-container {
            padding: 0 !important;
            max-width: 100% !important;
          }
          .resume-sheet {
            background: #fff !important;
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            color: #000 !important;
          }
          .resume-sheet h1,
          .resume-sheet span,
          .resume-sheet p,
          .resume-sheet li,
          .resume-sheet strong {
            color: #111 !important;
          }
          .resume-sheet h2 {
            color: #d64a2a !important;
            border-bottom: 1px solid #ddd !important;
          }
          .resume-sheet a {
            color: #111 !important;
            text-decoration: underline !important;
          }
        }
      `}</style>
    </div>
  );
}
