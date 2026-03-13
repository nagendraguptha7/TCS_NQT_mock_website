import { Brain, Flame, Target, Trophy, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
    const recentTests = [
        { id: 1, name: "TCS NQT Mock Test 1", score: 85, date: "2 Days Ago", duration: "1h 45m" },
        { id: 2, name: "Aptitude Mini Test", score: 92, date: "4 Days Ago", duration: "30m" },
        { id: 3, name: "Coding Challenge - Arrays", score: 100, date: "1 Week Ago", duration: "45m" },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Welcome back, Developer</h1>
                    <p className="text-gray-400 mt-2">Here's your TCS NQT preparation progress</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                        <Flame className="w-5 h-5 text-orange-500" />
                        <span className="font-medium">12 Day Streak</span>
                    </div>
                    <Link href="/mock-tests" className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-full font-medium transition-colors">
                        New Mock Test
                    </Link>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-[#0f1219] border border-white/5 p-6 rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Trophy className="w-16 h-16" />
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400">
                        <Trophy className="w-5 h-5" />
                    </div>
                    <p className="text-gray-400 text-sm mb-1">Overall Percentile</p>
                    <h3 className="text-3xl font-bold">88th</h3>
                </div>

                <div className="bg-[#0f1219] border border-white/5 p-6 rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Target className="w-16 h-16" />
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400">
                        <Target className="w-5 h-5" />
                    </div>
                    <p className="text-gray-400 text-sm mb-1">Questions Solved</p>
                    <h3 className="text-3xl font-bold">342</h3>
                </div>

                <div className="bg-[#0f1219] border border-white/5 p-6 rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Clock className="w-16 h-16" />
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
                        <Clock className="w-5 h-5" />
                    </div>
                    <p className="text-gray-400 text-sm mb-1">Time Spent</p>
                    <h3 className="text-3xl font-bold">45h 20m</h3>
                </div>

                <div className="bg-[#0f1219] border border-white/5 p-6 rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Brain className="w-16 h-16" />
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-rose-500/20 flex items-center justify-center mb-4 text-rose-400">
                        <Brain className="w-5 h-5" />
                    </div>
                    <p className="text-gray-400 text-sm mb-1">AI Weakness Focus</p>
                    <h3 className="text-xl font-bold mt-2">Data Interpretation</h3>
                    <p className="text-xs text-rose-400 mt-1 cursor-pointer hover:underline">Practice Now &rarr;</p>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold">Recent Test Results</h2>
                        <Link href="/dashboard/history" className="text-sm text-indigo-400 hover:text-indigo-300">View All</Link>
                    </div>
                    <div className="bg-[#0f1219] border border-white/5 rounded-2xl overflow-hidden">
                        {recentTests.map((test, index) => (
                            <div key={test.id} className={`p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${index !== recentTests.length - 1 ? 'border-b border-white/5' : ''} hover:bg-white/[0.02] transition-colors`}>
                                <div>
                                    <h4 className="font-semibold text-white/90">{test.name}</h4>
                                    <div className="flex items-center gap-3 mt-2 text-sm text-gray-400">
                                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {test.duration}</span>
                                        <span>&bull;</span>
                                        <span>{test.date}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 w-full sm:w-auto mt-4 sm:mt-0 justify-between sm:justify-end">
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-white/90">{test.score}%</div>
                                        <div className="text-xs text-emerald-400 mt-1">Passed</div>
                                    </div>
                                    <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <h2 className="text-xl font-bold">Recommended Topics</h2>
                    <div className="bg-[#0f1219] border border-white/5 rounded-2xl p-6">
                        <p className="text-sm text-gray-400 mb-6 font-medium">AI analysis suggests you should focus on these topics based on historic data.</p>
                        <div className="space-y-4">
                            <Link href="/practice/reasoning" className="block group">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-white/90 font-medium group-hover:text-indigo-400 transition-colors">Blood Relations</span>
                                    <span className="text-xs px-2 py-1 bg-rose-500/20 text-rose-400 rounded-md">High Priority</span>
                                </div>
                                <div className="w-full bg-white/5 rounded-full h-1.5">
                                    <div className="bg-rose-500 h-1.5 rounded-full" style={{ width: '35%' }}></div>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">Accuracy: 35%</p>
                            </Link>

                            <Link href="/practice/aptitude" className="block group pt-2">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-white/90 font-medium group-hover:text-amber-400 transition-colors">Time and Work</span>
                                    <span className="text-xs px-2 py-1 bg-amber-500/20 text-amber-400 rounded-md">Medium Priority</span>
                                </div>
                                <div className="w-full bg-white/5 rounded-full h-1.5">
                                    <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '55%' }}></div>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">Accuracy: 55%</p>
                            </Link>

                            <Link href="/coding" className="block group pt-2">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-white/90 font-medium group-hover:text-indigo-400 transition-colors">Dynamic Programming</span>
                                    <span className="text-xs px-2 py-1 bg-indigo-500/20 text-indigo-400 rounded-md">Expected in NQT</span>
                                </div>
                                <div className="w-full bg-white/5 rounded-full h-1.5">
                                    <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: '10%' }}></div>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">Accuracy: 10% (Not Attempted)</p>
                            </Link>
                        </div>
                        <button className="w-full mt-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-medium transition-colors">
                            Generate AI Study Plan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
