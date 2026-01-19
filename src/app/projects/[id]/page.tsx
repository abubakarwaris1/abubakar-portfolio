import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{
        id: string;
    }>
}

export default async function ProjectDetailsPage({ params }: Props) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    // Calculate next project for footer navigation
    const currentIndex = projects.findIndex((p) => p.id === id);
    const nextIndex = (currentIndex + 1) % projects.length;
    const nextProject = projects[nextIndex];

    return (
        <div className="bg-background-dark font-display text-slate-100 min-h-screen" style={{ backgroundColor: '#0a0a0b' }}>
            {/* Navigation - Standard System Navbar */}


            <main className="max-w-[1200px] mx-auto px-6 py-12 pt-32">
                {/* Back to Projects Link */}
                <div className="mb-8">
                    <Link href="/projects" className="flex items-center gap-2 group cursor-pointer inline-flex">
                        <span className="material-symbols-outlined text-primary group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        <span className="text-sm font-medium">Back to Projects</span>
                    </Link>
                </div>

                {/* Hero Section */}
                <div className="w-full mb-16">
                    <div className="relative aspect-[21/9] w-full bg-surface-dark rounded-xl overflow-hidden group">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${project.images[0]}')` }}>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 to-transparent"></div>
                    </div>
                </div>

                {/* Project Info Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
                    {/* Left Column: Details */}
                    <div className="lg:col-span-2">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{project.title}</h1>
                        <p className="text-lg text-slate-400 leading-relaxed mb-10">
                            {project.description}
                        </p>
                        <div className="space-y-8">
                            <h2 className="text-2xl font-bold border-b border-white/10 pb-4">Key Features</h2>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <span className="material-symbols-outlined text-primary mt-1">blur_on</span>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Feature One</h3>
                                        <p className="text-slate-400">Description of a key feature for this project.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <span className="material-symbols-outlined text-primary mt-1">speed</span>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Feature Two</h3>
                                        <p className="text-slate-400">Another important aspect of the project.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="space-y-12">
                        <div className="bg-surface-dark/40 border border-white/5 p-8 rounded-xl backdrop-blur-sm">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium">{tech}</span>
                                ))}
                            </div>
                        </div>
                        <div className="p-8 border-l-2 border-primary/30">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Project Role</h3>
                            <p className="text-sm font-medium">{project.role}</p>
                            <div className="h-8"></div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Timeline</h3>
                            <p className="text-sm font-medium">{project.timeline}</p>
                        </div>
                    </div>
                </div>

                {/* Gallery Section */}
                <div className="space-y-10">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-bold">Visual Gallery</h2>
                        <p className="text-slate-500 text-sm">Screenshots & Prototypes</p>
                    </div>
                    <div className="columns-1 md:columns-2 gap-6 space-y-6">
                        {project.images.map((img, idx) => (
                            <div key={idx} className="break-inside-avoid">
                                <div className="rounded-xl overflow-hidden bg-surface-dark border border-white/5 group cursor-zoom-in">
                                    <Image
                                        width={800}
                                        height={600}
                                        className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                                        alt={`${project.title} screenshot ${idx + 1}`}
                                        src={img}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Navigation */}
                <footer className="mt-32 pt-16 border-t border-white/10 text-center">
                    <p className="text-slate-500 mb-8 uppercase tracking-[0.2em] text-xs font-bold">Next Project</p>
                    <Link className="group inline-block" href={`/projects/${nextProject.id}`}>
                        <h3 className="text-5xl md:text-7xl font-bold mb-4 group-hover:text-primary transition-colors">{nextProject.title}</h3>
                        <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-sm font-medium">View Case Study</span>
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </div>
                    </Link>
                </footer>
            </main>
        </div>
    );
}
