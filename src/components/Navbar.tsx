import Link from "next/link";
import { BookOpen, Code2, LayoutDashboard, BrainCircuit, PenTool } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2">
                        <BrainCircuit className="w-8 h-8 text-indigo-500" />
                        <Link href="/" className="font-bold text-xl tracking-tight text-white hover:text-indigo-400 transition-colors">
                            TCS NQT Prep
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="flex items-baseline space-x-8">
                            <Link href="/practice/aptitude" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2">
                                <PenTool className="w-4 h-4" />
                                Aptitude
                            </Link>
                            <Link href="/practice/reasoning" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                Reasoning
                            </Link>
                            <Link href="/coding" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2">
                                <Code2 className="w-4 h-4" />
                                Coding
                            </Link>
                            <Link href="/dashboard" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2">
                                <LayoutDashboard className="w-4 h-4" />
                                Dashboard
                            </Link>
                        </div>
                    </div>

                    <div>
                        <Link href="/dashboard" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-[0_0_15px_rgba(79,70,229,0.5)]">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
