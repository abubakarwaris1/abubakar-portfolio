import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none">
        <div className="glass-nav border border-white/5 dark:border-white/10 rounded-full px-6 py-2 flex items-center gap-8 pointer-events-auto shadow-2xl">
          <Link href="/" className="flex items-center gap-2">
            <div className="size-6 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor"></path>
              </svg>
            </div>
            <span className="text-sm font-bold tracking-tight">AR</span>
          </Link>
          <div className="h-4 w-px bg-white/10"></div>
          <div className="flex items-center gap-6">
            <Link className="text-xs font-medium uppercase tracking-widest text-primary hover:text-primary/80 transition-colors" href="/">Home</Link>
            <Link className="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-white transition-colors" href="/projects">Projects</Link>
            <a className="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-white transition-colors" href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center py-20">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for projects
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-slate-900 dark:text-white" style={{ color: 'rgb(255 255 255 / var(--tw-text-opacity, 1))' }}>
              Alex Rivera<br />
              <span className="text-slate-300 dark:text-slate-700" style={{ color: 'rgb(51 65 85 / var(--tw-text-opacity, 1))' }}>Designer &amp; Developer</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-normal leading-relaxed max-w-2xl mx-auto" style={{ color: 'rgb(148 163 184 / var(--tw-text-opacity, 1))' }}>
              Crafting high-end digital experiences with surgical precision. I bridge the gap between complex engineering and minimalist aesthetics.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a className="group flex items-center justify-center bg-primary hover:bg-primary/90 text-background-dark font-bold py-4 px-8 rounded-full transition-all duration-300" href="#projects">
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
            {/* Project 1 */}
            <div className="project-card group cursor-pointer">
              <div className="overflow-hidden rounded-xl aspect-[16/10] bg-slate-100 dark:bg-white/5 mb-6">
                <div className="project-image w-full h-full relative">
                  <Image
                    src="/project-1.png"
                    alt="Modern dark dashboard UI with neon accents"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-widest">
                  <span>UI/UX</span>
                  <span className="size-1 rounded-full bg-slate-700"></span>
                  <span>Development</span>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">Lumina AI Dashboard</h3>
                <p className="text-slate-500 dark:text-slate-400">Next-gen analytical interface for decentralized data management and real-time visualization.</p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card group cursor-pointer md:mt-24">
              <div className="overflow-hidden rounded-xl aspect-[16/10] bg-slate-100 dark:bg-white/5 mb-6">
                <div className="project-image w-full h-full relative">
                  <Image
                    src="/project-2.png"
                    alt="Sleek mobile app interface on a glass device"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-widest">
                  <span>Mobile Design</span>
                  <span className="size-1 rounded-full bg-slate-700"></span>
                  <span>Branding</span>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">Nebula Mobile App</h3>
                <p className="text-slate-500 dark:text-slate-400">A futuristic social platform designed for the creator economy, focusing on immersive visual experiences.</p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card group cursor-pointer">
              <div className="overflow-hidden rounded-xl aspect-[16/10] bg-slate-100 dark:bg-white/5 mb-6">
                <div className="project-image w-full h-full relative">
                  <Image
                    src="/project-3.png"
                    alt="Abstract minimalist web design layout"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-widest">
                  <span>E-commerce</span>
                  <span className="size-1 rounded-full bg-slate-700"></span>
                  <span>Art Direction</span>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">Aura Lifestyle Store</h3>
                <p className="text-slate-500 dark:text-slate-400">High-end aesthetic for a premium lifestyle brand. Winner of Site of the Day at Awwwards.</p>
              </div>
            </div>

            {/* Project 4 */}
            <div className="project-card group cursor-pointer md:mt-24">
              <div className="overflow-hidden rounded-xl aspect-[16/10] bg-slate-100 dark:bg-white/5 mb-6">
                <div className="project-image w-full h-full relative">
                  <Image
                    src="/project-4.png"
                    alt="Productivity app interface showing task management"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-widest">
                  <span>SaaS</span>
                  <span className="size-1 rounded-full bg-slate-700"></span>
                  <span>Strategy</span>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">Zenith Task OS</h3>
                <p className="text-slate-500 dark:text-slate-400">A radical rethinking of productivity software, eliminating noise to focus on deep work flow.</p>
              </div>
            </div>
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
                  "The attention to detail in the design system provided was unparalleled. Our team's productivity increased by 40% after implementation."
                </p>
              </div>
              <div className="flex items-center gap-4 mt-12">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-400"></div>
                <div>
                  <p className="text-white text-sm font-bold">Sarah Chen</p>
                  <p className="text-slate-400 text-xs">CTO AT TECHFLOW</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-10 rounded-2xl flex flex-col justify-between h-full hover:bg-white/[0.07] transition-all duration-300">
              <div className="space-y-6">
                <span className="material-symbols-outlined text-primary text-4xl opacity-50">format_quote</span>
                <p className="text-lg md:text-xl font-normal leading-relaxed text-white italic">
                  "Transformed our complex fintech backend into a beautiful, intuitive experience. A rare talent who understands both design and tech."
                </p>
              </div>
              <div className="flex items-center gap-4 mt-12">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400"></div>
                <div>
                  <p className="text-white text-sm font-bold">Marcus Rodriguez</p>
                  <p className="text-slate-400 text-xs">FOUNDER @ NEXAR</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-10 rounded-2xl flex flex-col justify-between h-full hover:bg-white/[0.07] transition-all duration-300">
              <div className="space-y-6">
                <span className="material-symbols-outlined text-primary text-4xl opacity-50">format_quote</span>
                <p className="text-lg md:text-xl font-normal leading-relaxed text-white italic">
                  "The minimalist approach was exactly what our brand needed. Clean, effective, and sophisticated. Highly recommend for any premium project."
                </p>
              </div>
              <div className="flex items-center gap-4 mt-12">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-400"></div>
                <div>
                  <p className="text-white text-sm font-bold">Elena Sorova</p>
                  <p className="text-slate-400 text-xs">DESIGN DIRECTOR, PRESTIGE</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 border-t border-slate-200 dark:border-white/5" id="contact">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                Have a project<br />in mind? <span className="text-primary underline decoration-2 underline-offset-8">Let&apos;s talk.</span>
              </h2>
              <p className="text-xl text-slate-500 dark:text-slate-400">
                I&apos;m currently accepting new freelance opportunities and full-time collaborations for 2024.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="p-8 rounded-2xl bg-slate-100 dark:bg-white/5 border border-transparent hover:border-primary/20 transition-all">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Email me at</h4>
                <a className="text-2xl md:text-3xl font-medium hover:text-primary transition-colors" href="mailto:hello@alexrivera.com">hello@alexrivera.com</a>
              </div>
              <div className="flex gap-4">
                <a className="flex-1 p-4 rounded-xl bg-slate-100 dark:bg-white/5 text-center font-medium hover:bg-primary hover:text-background-dark transition-all" href="#">LinkedIn</a>
                <a className="flex-1 p-4 rounded-xl bg-slate-100 dark:bg-white/5 text-center font-medium hover:bg-primary hover:text-background-dark transition-all" href="#">GitHub</a>
                <a className="flex-1 p-4 rounded-xl bg-slate-100 dark:bg-white/5 text-center font-medium hover:bg-primary hover:text-background-dark transition-all" href="#">Twitter</a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-slate-500 text-sm">
            <span>© 2024 Alex Rivera</span>
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
