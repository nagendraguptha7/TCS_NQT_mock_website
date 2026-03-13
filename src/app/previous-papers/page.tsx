import { Calendar, CheckCircle, FileText, ChevronRight, BarChart3, Clock } from "lucide-react";
import Link from "next/link";

export default function PreviousPapersPage() {
    const papers = [
        { year: 2023, name: "TCS NQT August 2023 Slot 1", difficulty: "Medium", completed: true, score: "82%" },
        { year: 2023, name: "TCS NQT August 2023 Slot 2", difficulty: "Hard", completed: false, score: null },
        { year: 2022, name: "TCS NQT September 2022", difficulty: "Medium", completed: true, score: "88%" },
        { year: 2022, name: "TCS NQT March 2022 (Special Edition)", difficulty: "Hard", completed: false, score: null },
        { year: 2021, name: "TCS NQT October 2021", difficulty: "Easy", completed: false, score: null },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-10 text-center md:text-left">
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Previous Year Papers</h1>
                <p className="text-gray-400 mt-2">Practice with authentic past TCS NQT exams. Every paper includes detailed solutions and pattern analysis.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Main List */}
                <div className="md:col-span-2 space-y-4">
                    {papers.map((paper, idx) => (
                        <div key={idx} className="bg-[#0f1219] hover:bg-[#141824] transition-colors border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-gray-400 group-hover:text-indigo-400 transition-colors">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white/90 group-hover:text-white transition-colors">{paper.name}</h3>
                                    <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-400">
                                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {paper.year}</span>
                                        <span>&bull;</span>
                                        <span className={`px-2 py-0.5 rounded text-xs font-semibold ${paper.difficulty === "Easy" ? "bg-emerald-500/10 text-emerald-400" :
                                            paper.difficulty === "Medium" ? "bg-amber-500/10 text-amber-400" :
                                                "bg-rose-500/10 text-rose-400"
                                            }`}>
                                            {paper.difficulty}
                                        </span>
                                        <span>&bull;</span>
                                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 180 Minutes</span>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full sm:w-auto flex flex-row sm:flex-col items-center sm:items-end justify-between gap-2 border-t sm:border-t-0 border-white/10 pt-4 sm:pt-0">
                                {paper.completed ? (
                                    <>
                                        <div className="text-emerald-400 font-bold flex items-center gap-1">
                                            <CheckCircle className="w-4 h-4" /> Score: {paper.score}
                                        </div>
                                        <Link href="#" className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1">
                                            View Analysis <ChevronRight className="w-4 h-4" />
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <div className="text-sm text-gray-500 font-medium">Not Attempted</div>
                                        <Link href="/mock-tests" className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors w-full sm:w-auto text-center">
                                            Solve Now
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sidebar Insights */}
                <div className="space-y-6">
                    <div className="bg-gradient-to-br from-indigo-900/20 to-[#0f1219] border border-indigo-500/20 rounded-2xl p-6">
                        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                            <BarChart3 className="w-5 h-5 text-indigo-400" /> Pattern Analysis
                        </h3>
                        <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                            Based on the last 5 years of TCS NQT data:
                        </p>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                                <span><strong className="text-white/80">Coding Section:</strong> Recursion and Arrays appear in 90% of slots.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                                <span><strong className="text-white/80">Aptitude:</strong> "Time and Work" is consistently the heaviest weighted topic.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 flex-shrink-0" />
                                <span><strong className="text-white/80">Difficulty Trend:</strong> Logical Reasoning has seen a 15% increase in difficulty since 2022.</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}
