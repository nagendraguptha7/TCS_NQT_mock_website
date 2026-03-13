import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { ChevronLeft, CheckCircle, XCircle, BrainCircuit } from "lucide-react";
import { notFound } from "next/navigation";

// Client component for interactivity would normally go in a separate file, 
// but for simplicity in this MVP we render the structure here.
// In a real app, the interactive quiz part should be a "use client" component.

const sectionToTopicMap: Record<string, string> = {
    aptitude: "Aptitude",
    reasoning: "Logical Reasoning",
    verbal: "Verbal Ability",
    english: "English",
    scenario: "Scenario-Based"
};

const sectionTitles: Record<string, string> = {
    aptitude: "Quantitative Aptitude",
    reasoning: "Logical Reasoning",
    verbal: "Verbal Ability",
    english: "English Grammar",
    scenario: "Scenario-Based Questions"
};

export default async function PracticeSectionPage({ params }: { params: Promise<{ section: string }> }) {
    const { section } = await params;

    if (!sectionToTopicMap[section]) {
        notFound();
    }

    const topicName = sectionToTopicMap[section];

    // Fetch questions from database
    const questions = await prisma.question.findMany({
        where: { topic: topicName },
        orderBy: { id: 'asc' }, // simple ordering for now
    });

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-8">
                <Link href="/dashboard" className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors mb-6">
                    <ChevronLeft className="w-4 h-4 mr-1" /> Back to Dashboard
                </Link>
                <h1 className="text-3xl font-bold mb-2">{sectionTitles[section]}</h1>
                <p className="text-gray-400">Master exactly what TCS NQT asks. Questions are tagged with difficulty and reliability.</p>
            </div>

            <div className="space-y-8">
                {questions.length === 0 ? (
                    <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
                        <BrainCircuit className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                        <h3 className="text-xl font-medium text-white/80">No questions found</h3>
                        <p className="text-gray-500 mt-2">Our AI is generating new {topicName} questions. Check back soon!</p>
                    </div>
                ) : (
                    questions.map((q, index) => {
                        const options = q.options ? JSON.parse(q.options) : [];

                        return (
                            <div key={q.id} className="bg-[#0f1219] border border-white/10 rounded-2xl p-6 sm:p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="bg-indigo-500/20 text-indigo-400 text-xs px-3 py-1 rounded-full font-medium">
                                        Question {index + 1}
                                    </span>
                                    <div className="flex gap-2">
                                        <span className={`text-xs px-2 py-1 rounded-md font-medium ${q.difficulty === 'easy' ? 'bg-emerald-500/20 text-emerald-400' :
                                            q.difficulty === 'hard' ? 'bg-rose-500/20 text-rose-400' :
                                                'bg-amber-500/20 text-amber-400'
                                            }`}>
                                            {q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1)}
                                        </span>
                                        <span className="bg-white/10 text-gray-300 text-xs px-2 py-1 rounded-md font-medium border border-white/5">
                                            {q.reliability}
                                        </span>
                                    </div>
                                </div>

                                <h3 className="text-lg font-medium leading-relaxed mb-6">
                                    {q.content}
                                </h3>

                                {options.length > 0 && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                        {options.map((opt: string, i: number) => (
                                            <button
                                                key={i}
                                                className="text-left p-4 rounded-xl border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all font-medium text-gray-200"
                                            >
                                                <span className="text-gray-500 font-bold mr-3">{String.fromCharCode(65 + i)}.</span>
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {/* For display purposes, we'll just show the solution open */}
                                <div className="mt-6 pt-6 border-t border-white/10">
                                    <details className="group">
                                        <summary className="font-medium text-indigo-400 cursor-pointer hover:underline list-none flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4" /> View Solution
                                        </summary>
                                        <div className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-100 text-sm leading-relaxed">
                                            <span className="font-bold mb-2 block text-emerald-400">Correct Option: {q.correctOption}</span>
                                            {q.solution}
                                        </div>
                                    </details>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}
