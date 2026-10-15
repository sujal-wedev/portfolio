import ProjectPageTemplate from "@/components/ProjectPageTemplate";
import { client } from "../../sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url';
import { portfolioData } from "../../lib/portfolioData";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
    return builder.image(source);
}

export const dynamic = 'force-dynamic';

export default async function DevPage() {
    const data = await client.fetch(`*[_type == "devProject"] | order(coalesce(rank, 999999) asc, _createdAt asc){
        _id, title, description, image, link
    }`).catch(() => []);

    const sanityProjects = data && data.length > 0 ? data.map((project: any) => ({
        id: project._id,
        title: project.title,
        description: project.description,
        imageUrl: project.image ? urlFor(project.image).width(600).url() : undefined,
        link: project.link,
    })) : [];

    const defaultDevProjects = portfolioData.projects.map((p) => ({
        id: p.id,
        title: p.title,
        description: `${p.description} (Tech: ${p.tech})`,
        imageUrl: p.imageUrl,
        link: p.link,
    }));

    const devProjects = sanityProjects.length > 0 ? sanityProjects : defaultDevProjects;

    return (
        <ProjectPageTemplate
            title="dev projects"
            subtitle="scalable systems, ai pipelines & platforms i've built."
            projects={devProjects}
        />
    );
}
