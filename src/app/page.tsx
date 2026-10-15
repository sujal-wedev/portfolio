import HeroSection from "../components/HeroSection";
import HighlightsSection from "../components/HighlightsSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillStackSection from "../components/SkillStackSection";
import EducationSection from "../components/EducationSection";
import { client } from "../sanity/lib/client";
import { portfolioData } from "../lib/portfolioData";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [highlights, experiences, skills, education] = await Promise.all([
    client.fetch(`*[_type == "highlight"] | order(_createdAt desc){
      _id,
      title,
      mediaType,
      image,
      videoUrl,
      videoFile {
        asset->{
          url
        }
      },
      link
    }`).catch(() => []),
    client.fetch(`*[_type == "experience"] | order(order asc){
      _id, company, role, date, location, description, logo, link
    }`).catch(() => []),
    client.fetch(`*[_type == "skill"] | order(order asc){
      _id, category, skills
    }`).catch(() => []),
    client.fetch(`*[_type == "education"] | order(order asc){
      _id, institution, degree, date, cgpa, logo, link
    }`).catch(() => []),
  ]);

  const defaultHighlights = portfolioData.projects
    .filter((p) => p.featured)
    .map((p) => ({
      _id: p.id,
      title: p.title,
      mediaType: "image" as const,
      imageUrl: p.imageUrl,
      link: p.link,
    }));

  const activeHighlights = highlights && highlights.length > 0 ? highlights : defaultHighlights;
  const activeExperiences = experiences && experiences.length > 0 ? experiences : portfolioData.experiences;
  const activeSkills = skills && skills.length > 0 ? skills : portfolioData.skillCategories;
  const activeEducation = education && education.length > 0 ? education : portfolioData.education;

  return (
    <>
      <HeroSection />
      <HighlightsSection highlights={activeHighlights} />
      <ExperienceSection experiences={activeExperiences} />
      <SkillStackSection skillCategories={activeSkills} />
      <EducationSection education={activeEducation} />
    </>
  );
}
