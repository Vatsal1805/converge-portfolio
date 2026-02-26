import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'
import CaseStudyTemplate from '@/components/templates/CaseStudyTemplate'

export async function generateMetadata({
    params
}: {
    params: { slug: string }
}) {
    const project = projects.find(p => p.slug === params.slug)

    if (!project) return {}

    return {
        title: `${project.name} — Converge Digitals`,
        description: project.problem.headline,
        openGraph: {
            title: `${project.name} — Converge Digitals`,
            description: project.problem.headline,
            type: 'article',
        },
    }
}

export default function CaseStudyPage({
    params
}: {
    params: { slug: string }
}) {
    const project = projects.find(p => p.slug === params.slug)
    if (!project) notFound()

    const currentIndex = projects.indexOf(project)
    const nextProject = projects[(currentIndex + 1) % projects.length]
    const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length]

    return (
        <CaseStudyTemplate
            project={project}
            nextProject={nextProject}
            prevProject={prevProject}
        />
    )
}

export function generateStaticParams() {
    return projects.map(p => ({ slug: p.slug }))
}
