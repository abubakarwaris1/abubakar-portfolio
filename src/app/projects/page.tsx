import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
    return (
        <div className="bg-background-light dark:bg-[#0a0a0b] text-slate-900 dark:text-slate-100 min-h-screen" style={{ backgroundColor: '#0a0a0b' }}>
            {/* Navigation - Same as homepage */}
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
                        <Link className="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-white transition-colors" href="/">Home</Link>
                        <Link className="text-xs font-medium uppercase tracking-widest text-primary hover:text-primary/80 transition-colors" href="/projects">Projects</Link>
                        <a className="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-white transition-colors" href="#contact">Contact</a>
                    </div>
                </div>
            </nav>

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
                        <div className="flex gap-3 mt-10 overflow-x-auto pb-2 no-scrollbar">
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
                        </div>
                    </header>

                    {/* Project Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {/* Project 1 */}
                        <div className="project-card group cursor-pointer">
                            <div className="overflow-hidden rounded-xl aspect-[16/10] mb-5 border" style={{
                                backgroundColor: 'rgb(28 28 30 / 1)',
                                borderColor: 'rgb(255 255 255 / 0.05)'
                            }}>
                                <div className="project-image w-full h-full relative">
                                    <Image
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzjQK06793G9QLm-mTIMYwP97r1-3Z_URwDnAHunqR2ybkRTVkYXjmHGjUQmxEM9qFgbHBlxtx1cD5khWEuUhALEM2G6V-ChsXxLZ_FL6-eDkI0X-7jju8xiPsDcKhz5XjKx7kzA6HliwkcnLKzU6QrQz-qYwqPDh1iAY9RdJ1eff_qfUwgIZz94sJPk_87hL6VJQyz2-MZFYwYUlcG7NUOs58cvsNXyd1czZjeaAoTDujqDAqyUovTl3LmvvIpTk6tZI7wzMD0cQ"
                                        alt="Modern dark fintech dashboard interface showing data analytics"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors text-white">Fintech Dashboard</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
                                    A comprehensive design system built for scalable financial applications with real-time tracking.
                                </p>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="project-card group cursor-pointer">
                            <div className="overflow-hidden rounded-xl aspect-[16/10] mb-5 border" style={{
                                backgroundColor: 'rgb(28 28 30 / 1)',
                                borderColor: 'rgb(255 255 255 / 0.05)'
                            }}>
                                <div className="project-image w-full h-full relative">
                                    <Image
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjZHier6A4z-nHxkhsGHBJa1H3m95uRyeCcBsE7hXcLQHAkLQZE6LUb2w3wK4z05XGcImqmNh9zQWYTfT-M8hcfJHkGjKNNzIXuJOg_bEWyOMS5RrUYR9DWcLb5OeUxHlhC5RMxFAvGf7S7rZRJ4xtfQMZDxYsi_ISGbyWNCuAoQJNip-ZOoCGKSZ0FEID7RlgngYVjaDG3lkrMGFFoaTy4jXw2MZryrK3-6Abynt7msX6FPNfcQ9I8KGUwziwBxL2cH4h5OrFwFo"
                                        alt="Abstract gradient design showing liquid metal textures"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors text-white">AI Branding Lab</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
                                    Identity design and brand guidelines for a next-gen generative AI research facility.
                                </p>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="project-card group cursor-pointer">
                            <div className="overflow-hidden rounded-xl aspect-[16/10] mb-5 border" style={{
                                backgroundColor: 'rgb(28 28 30 / 1)',
                                borderColor: 'rgb(255 255 255 / 0.05)'
                            }}>
                                <div className="project-image w-full h-full relative">
                                    <Image
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsBmRXfRxt6nIEOhwS3v4KusMIKhsjSwrF0arCFuS0Y1LsFtKkE4gOF4Gk3Mv_CusQTY-58dBn5zDeT4S3eCp16TDZ0j7YGxn_F8fSmMFVVluZDBe4rNI5Y7ZfWwGwwq5pHNU1rgHax7mhfrMF_R9LO01f_v5HMfpWdmsdts-0nskUM_paqMhGIwCK-SCkGuyYtRm0tuLnmtzJm_kD3h-jzN_Aw_uCz6-9oXyUSHmiYUYQ6Cb5fBhP9OZoJA988WlIkPIUJPZrdMs"
                                        alt="Futuristic glassmorphism UI components in 3D space"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors text-white">Spatial UI Experiments</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
                                    Exploring the future of computing through vision-based interface design and depth layers.
                                </p>
                            </div>
                        </div>

                        {/* Project 4 */}
                        <div className="project-card group cursor-pointer">
                            <div className="overflow-hidden rounded-xl aspect-[16/10] mb-5 border" style={{
                                backgroundColor: 'rgb(28 28 30 / 1)',
                                borderColor: 'rgb(255 255 255 / 0.05)'
                            }}>
                                <div className="project-image w-full h-full relative">
                                    <Image
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHZrKQguv5b2_DRdIa3-YaUvZ3QsLOimV4jxIy5WBELKBbmwCfT7P1iNokpXNbdaIYs7t3LK6SAESTXUuMJkaFGBEQsjeZN4mptv49PI73KLkKD12Agg__eKUas6uCiEX6TicXScLK61ryQX-mvoTvc4lr39cAZech0ns-GZQ-RIKkmcXIZFbrg73ixBe-lIK6cvZW1pc2tD2bcQGi58TA1E8Wx_3vaFuyL1sXxvGkewkm-9F-gggclbRJ9KZehyXTgEy8VjziCKA"
                                        alt="Clean minimalist e-commerce storefront with white space"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors text-white">Hyper-Commerce</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
                                    A seamless shopping experience focused on conversion speed and mobile-first interactions.
                                </p>
                            </div>
                        </div>

                        {/* Project 5 */}
                        <div className="project-card group cursor-pointer">
                            <div className="overflow-hidden rounded-xl aspect-[16/10] mb-5 border" style={{
                                backgroundColor: 'rgb(28 28 30 / 1)',
                                borderColor: 'rgb(255 255 255 / 0.05)'
                            }}>
                                <div className="project-image w-full h-full relative">
                                    <Image
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoI9D4Pc9YQTN_TXCBM2g2x_Oea5ofqPQMEKdL9w1WfWuaLkeJfHDIsaYFNtRTZojZrGubsV64-6tZXE_dSByGJvvX7x2vDGanqWFB8SHAnSzg7b7hCtwKE92cCmu7Xs3mvw2Xol-bBAIb4fGJfLF2608E4CFYHmQ5fCgHMr6bMH4EWjUqYo5GZXNXgQHJZMLH6EtVAWdpJU9WdSkep22kbpuLz90rNIJVtS5gNjSdWc-wpff7O2F4ZJgd2LUErHOtUDYqgneMSnk"
                                        alt="Health tracking mobile application interface with charts"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors text-white">Health Track App</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
                                    A data-driven approach to personal fitness and mental well-being using biometric data.
                                </p>
                            </div>
                        </div>

                        {/* Project 6 */}
                        <div className="project-card group cursor-pointer">
                            <div className="overflow-hidden rounded-xl aspect-[16/10] mb-5 border" style={{
                                backgroundColor: 'rgb(28 28 30 / 1)',
                                borderColor: 'rgb(255 255 255 / 0.05)'
                            }}>
                                <div className="project-image w-full h-full relative">
                                    <Image
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMNVEhyuezbxyKB84Q_l26q8XwucAD17lsqa09yhYYLP9rT3ILU7yfphqxxgw1GY9JI38mv1Ej9nn6vt19hs5yVEzdrnLa5u615kW6VYgdJ9FQon63_G6fvrNeRi4ZGwt3b6paS8zx35HzsENpDsvXTq-ItSNXm5CbZhfia6KyXvcpWkYDmyL3-Pz_fABLE3A3vpuz4uFEbzBxBAz0QvIw9h1gW13XwNr0hrqAnHtwN8HIxUEcE2g7kWfgyzEpc4bNf99p3zHHaP0"
                                        alt="Elegant minimalist typography-focused portfolio landing page"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors text-white">Minimalist Portfolio</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
                                    Typography-focused layout showcasing high-end photography and editorial content.
                                </p>
                            </div>
                        </div>
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
