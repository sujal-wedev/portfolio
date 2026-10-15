import Image from "next/image";
import InteractiveAvatar from "../../components/ui/InteractiveAvatar";
import { BlurredStagger } from "../../components/ui/blurred-stagger-text";
import { client } from "../../sanity/lib/client";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from '@sanity/image-url';
import { portfolioData } from "../../lib/portfolioData";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
    return builder.image(source);
}

const ptComponents = {
    types: {
        image: ({ value }: any) => {
            if (!value?.asset?._ref) {
                return null;
            }
            return (
                <img
                    alt={value.alt || ' '}
                    loading="lazy"
                    src={urlFor(value).width(800).fit('max').auto('format').url()}
                    style={{ width: '100%', borderRadius: '12px', marginTop: '16px', marginBottom: '16px' }}
                />
            );
        },
    },
};

export const dynamic = 'force-dynamic';

export default async function About() {
    const data = await client.fetch(`*[_type == "aboutPage"][0]{
        aboutDescription
    }`).catch(() => null);

    return (
        <div className="about-page">
            <div className="hero-section">
                <div className="hero-name-curve who-am-i-curve">
                    <svg width="280" height="150" viewBox="0 0 280 150" className="curve-svg">
                        <path id="curve-about" d="M 60,140 A 80,80 0 0,1 220,140" fill="transparent" />
                        <text fill="var(--text-primary)" className="instrument-serif" fontSize="46" textAnchor="middle" letterSpacing="-0.07em">
                            <textPath href="#curve-about" startOffset="50%">
                                Who am i?
                            </textPath>
                        </text>
                    </svg>
                </div>

                <div className="hero-avatar about-avatar">
                    <InteractiveAvatar priority={true} />
                </div>

                <h1 className="about-title"><BlurredStagger text="about me" /></h1>

                <div className="about-content" style={{ width: "100%", maxWidth: "600px", marginInline: "auto", textAlign: "left" }}>
                    {data?.aboutDescription ? (
                        <PortableText value={data.aboutDescription} components={ptComponents} />
                    ) : (
                        <>
                            <p>
                                hey, my name is <strong>Sujal Nag</strong>. I'm a Computer Science Engineer passionate about building scalable backends, real-time distributed pipelines, and high-performance AI-driven applications.
                            </p>
                            <p>
                                My professional experiences include interning as a <strong>Backend Intern at Skillfied</strong>, where I engineered high-throughput REST APIs with Express & MongoDB that accelerated response times by 24%, and as a <strong>Junior Full Stack Developer Intern at Yuva Intern</strong>, architecting modular React applications and CI/CD pipelines deploying to AWS EC2.
                            </p>
                            <p>
                                I specialize in systems engineering: from event-driven streaming with Apache Kafka and QStash to 4-agent Google Gemini coaching architectures with Redis session memory and dual-database schemas (PostgreSQL + MongoDB).
                            </p>
                            <p>
                                <strong>Research & Hackathons:</strong> I was invited for an Oral Presentation at <em>ICMLC 2026 (ML & Cybernetics Conference, Goa)</em> for research on Physics-Informed ML for renewable energy forecasting. I also ranked in the <em>Top 10 at the WebRush 6-Hour Frontend Hackathon</em>.
                            </p>
                            <p>
                                <strong>Leadership & Community:</strong> As a Core Team Member of the <em>Future Prep Forum Club</em>, I have organized 3 large-scale offline events fostering collaboration and developer culture.
                            </p>
                        </>
                    )}
                </div>

                {/* Achievements & Certifications highlights */}
                <div style={{ width: "100%", maxWidth: "600px", margin: "40px auto 0 auto", textAlign: "left" }}>
                    <h3 style={{ fontSize: "1.1rem", color: "var(--capsule-bg)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "16px", fontWeight: "600" }}>
                        ✦ achievements & recognition
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        {portfolioData.achievements.map((item, idx) => (
                            <div
                                key={idx}
                                style={{
                                    padding: "14px 18px",
                                    borderRadius: "12px",
                                    background: "rgba(255, 255, 255, 0.03)",
                                    border: "1px solid rgba(255, 255, 255, 0.06)",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    gap: "12px",
                                }}
                            >
                                <div>
                                    <h4 style={{ margin: 0, fontSize: "0.95rem", color: "var(--text-primary)", fontWeight: "600" }}>{item.title}</h4>
                                    <p style={{ margin: "4px 0 0 0", fontSize: "0.85rem", color: "var(--text-secondary)" }}>{item.subtitle}</p>
                                </div>
                                {item.badge && (
                                    <span
                                        style={{
                                            padding: "2px 8px",
                                            borderRadius: "999px",
                                            fontSize: "0.72rem",
                                            fontWeight: "600",
                                            background: "rgba(241, 106, 75, 0.15)",
                                            color: "var(--capsule-bg)",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        {item.badge}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
