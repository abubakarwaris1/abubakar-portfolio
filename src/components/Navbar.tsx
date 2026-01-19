"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none">
            <div className="glass-nav border border-white/5 dark:border-white/10 rounded-full px-6 py-2 flex items-center gap-8 pointer-events-auto shadow-2xl">
                <Link href="/" className="flex items-center gap-2">
                    <div className="size-6 text-primary">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <span className="text-sm font-bold tracking-tight">MAW</span>
                </Link>
                <div className="h-4 w-px bg-white/10"></div>
                <div className="flex items-center gap-6">
                    <Link
                        className={`text-xs font-medium uppercase tracking-widest transition-colors ${pathname === "/" ? "text-primary hover:text-primary/80" : "text-slate-400 hover:text-white"}`}
                        href="/"
                    >
                        Home
                    </Link>
                    <Link
                        className={`text-xs font-medium uppercase tracking-widest transition-colors ${pathname.startsWith("/projects") ? "text-primary hover:text-primary/80" : "text-slate-400 hover:text-white"}`}
                        href="/projects"
                    >
                        Projects
                    </Link>
                </div>
            </div>
        </nav>
    );
}
