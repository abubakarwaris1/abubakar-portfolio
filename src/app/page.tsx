import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>


      <main className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col lg:flex-row items-center lg:items-end justify-between py-20 gap-12 lg:gap-24 relative overflow-hidden">
          <div className="relative w-full lg:w-1/2 h-full flex items-end justify-center lg:justify-start pt-20 lg:pt-0">
            <div className="relative w-full max-w-[500px] lg:max-w-none">
              <img
                alt="Muhammad Abu Bakar Waris Portrait"
                className="w-full h-auto object-contain hero-image-mask grayscale hover:grayscale-0 transition-all duration-700 brightness-90 lg:max-h-[85vh]"
                src="/profile-new.jpg"
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent"></div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:text-right flex flex-col lg:items-end space-y-8 z-10 lg:pb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for projects
            </div>
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tighter text-slate-900 dark:text-white" style={{ color: 'rgb(255 255 255 / var(--tw-text-opacity, 1))' }}>
              Muhammad Abu Bakar Waris<br />
              <span className="text-slate-300 dark:text-slate-700" style={{ color: 'rgb(51 65 85 / var(--tw-text-opacity, 1))' }}>Full Stack Developer</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-normal leading-relaxed max-w-lg lg:ml-auto" style={{ color: 'rgb(148 163 184 / var(--tw-text-opacity, 1))' }}>
              Crafting high-end digital experiences with surgical precision. I bridge the gap between complex
              engineering and minimalist aesthetics.
            </p>
            <div className="flex flex-wrap lg:justify-end gap-4 pt-4">
              <a
                className="group flex items-center justify-center bg-primary hover:bg-primary/90 text-background-dark font-bold py-4 px-10 rounded-full transition-all duration-300"
                href="#projects"
              >
                View Selected Works
                <span className="material-symbols-outlined ml-2 text-xl transition-transform group-hover:translate-x-1">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>


        {/* Featured Projects */}
        <section className="py-32" id="projects">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Featured Projects</h2>
              <p className="text-slate-500 max-w-md">A collection of digital products built at the intersection of form and function.</p>
            </div>
            <div className="flex gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">01 — 04</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-y-24">
            {projects.slice(0, 4).map((project, index) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className={`project-card group cursor-pointer block ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
              >
                <div className="overflow-hidden rounded-xl aspect-[16/10] bg-slate-100 dark:bg-white/5 mb-6 border border-white/5">
                  <div className="project-image w-full h-full relative">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-widest">
                    <span>{project.category}</span>
                    <span className="size-1 rounded-full bg-slate-700"></span>
                    <span>{project.timeline}</span>
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors text-white">{project.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 line-clamp-2">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 overflow-hidden">
          <div className="flex justify-between items-start mb-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">TESTIMONIALS</p>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white" style={{ color: 'rgb(255 255 255 / var(--tw-text-opacity, 1))' }}>
                What clients <span className="text-primary">say.</span>
              </h2>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all">
                <span className="material-symbols-outlined text-white text-xl">arrow_back</span>
              </button>
              <button className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all">
                <span className="material-symbols-outlined text-white text-xl">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-10 rounded-2xl flex flex-col justify-between h-full hover:bg-white/[0.07] transition-all duration-300">
              <div className="space-y-6">
                <span className="material-symbols-outlined text-primary text-4xl opacity-50">format_quote</span>
                <p className="text-lg md:text-xl font-normal leading-relaxed text-white italic">
                  "Working with Abu Bakar has been an excellent experience. He is highly skilled, detail-oriented, and consistently delivers work to a very high standard. He took the time to understand our business objectives, offered smart technical solutions, and executed everything efficiently and reliably. Communication with him was seamless. I would not hesitate to recommend Abu to anyone looking for a dependable and talented web developer."
                </p>
              </div>
              <div className="flex items-center gap-4 mt-12">

                <div>
                  <p className="text-white text-sm font-bold">Josh Sim</p>
                  <p className="text-slate-400 text-xs">Founder & CEO</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-10 rounded-2xl flex flex-col justify-between h-full hover:bg-white/[0.07] transition-all duration-300">
              <div className="space-y-6">
                <span className="material-symbols-outlined text-primary text-4xl opacity-50">format_quote</span>
                <p className="text-lg md:text-xl font-normal leading-relaxed text-white italic">
                  "I have been working with Abubakar for over three years across several complex projects, and I can highly recommend him. He is a senior full stack engineer with strong leadership skills and has successfully acted as a technical project manager on multiple occasions. AbuBakar combines excellent communication, effective time management, and clear, result-driven decision-making. He takes full ownership of his work, thinks proactively, and consistently delivers high-quality results. He is reliable, structured, and a strong team lead who can be trusted with responsibility. Despite his young age, his professionalism and technical maturity are outstanding. Any team would be lucky to work with him."
                </p>
              </div>
              <div className="flex items-center gap-4 mt-12">

                <div>
                  <p className="text-white text-sm font-bold">Rene Simon</p>
                  <p className="text-slate-400 text-xs">COO</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-10 rounded-2xl flex flex-col justify-between h-full hover:bg-white/[0.07] transition-all duration-300">
              <div className="space-y-6">
                <span className="material-symbols-outlined text-primary text-4xl opacity-50">format_quote</span>
                <p className="text-lg md:text-xl font-normal leading-relaxed text-white italic">
                  "He is a great communicator and very technically skilled. When we had meetings, he understood everything I wanted and was able to elaborate on it. Successful completion of the MVP project and I'm very happy with it!"
                </p>
              </div>
              <div className="flex items-center gap-4 mt-12">

                <div>
                  <p className="text-white text-sm font-bold">Kylar</p>
                  <p className="text-slate-400 text-xs">Founder of Buildaprompt</p>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Footer */}
        <footer className="py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-slate-500 text-sm">
            <span>© 2024 Muhammad Abu Bakar Waris</span>
            <span className="size-1 rounded-full bg-slate-700"></span>
            <span>All rights reserved</span>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 group cursor-pointer">
              <span className="text-sm font-medium group-hover:text-primary">Back to Top</span>
              <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-y-1">arrow_upward</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
