import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
    return (
        <div className="bg-background-light dark:bg-[#0a0a0b] text-slate-900 dark:text-slate-100 min-h-screen" style={{ backgroundColor: '#0a0a0b' }}>
            {/* Navigation - Same as homepage */}


            <main className="pt-32 pb-20 px-6">
                <div className="max-w-[1200px] mx-auto">
                    {/* Page Heading */}
                    <header className="mb-16">
                        <div className="flex flex-col gap-4 max-w-2xl">
                            <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none">
                                <span style={{ color: 'rgb(255 255 255 / var(--tw-text-opacity, 1))' }}>Selected</span> <span className="text-primary">Works</span>
                            </h1>
                            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed" style={{ color: 'rgb(148 163 184 / var(--tw-text-opacity, 1))' }}>
                                A curated selection of digital experiences, focusing on high-utility interfaces and minimalist design systems.
                            </p>
                        </div>

                        {/* Filter Chips */}
                        {/* <div className="flex gap-3 mt-10 overflow-x-auto pb-2 no-scrollbar">
                            <button className="px-5 py-2 rounded-full bg-primary text-background-dark text-sm font-semibold">
                                All Projects
                            </button>
                            <button className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white hover:bg-white/10 transition-colors">
                                UI/UX Design
                            </button>
                            <button className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white hover:bg-white/10 transition-colors">
                                Development
                            </button>
                            <button className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white hover:bg-white/10 transition-colors">
                                Branding
                            </button>
                        </div> */}
                    </header>

                    {/* Project Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {projects.map((project) => (
                            <Link key={project.id} href={`/projects/${project.id}`} className="project-card group cursor-pointer block">
                                <div className="overflow-hidden rounded-xl aspect-[16/10] mb-5 border" style={{
                                    backgroundColor: 'rgb(28 28 30 / 1)',
                                    borderColor: 'rgb(255 255 255 / 0.05)'
                                }}>
                                    <div className="project-image w-full h-full relative">
                                        <Image
                                            src={project.images[0]}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors text-white">{project.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>


                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-slate-200 dark:border-white/10 py-12 px-6">
                <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold tracking-tight">Studio.</span>
                        <span className="text-slate-400 text-sm">© 2024 All rights reserved.</span>
                    </div>
                    <div className="flex gap-8">
                        <a className="text-slate-400 hover:text-primary transition-colors" href="#">Twitter</a>
                        <a className="text-slate-400 hover:text-primary transition-colors" href="#">LinkedIn</a>
                        <a className="text-slate-400 hover:text-primary transition-colors" href="#">Dribbble</a>
                        <a className="text-slate-400 hover:text-primary transition-colors" href="#">GitHub</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
