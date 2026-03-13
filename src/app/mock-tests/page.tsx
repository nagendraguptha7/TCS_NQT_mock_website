"use client";

import { useState, useEffect } from "react";
import { Timer, AlertCircle, CheckSquare, Brain, Target, ChevronRight, ChevronLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Mock Data for MVP
const MOCK_TEST_DATA = {
    id: "nqt-2024-mock-1",
    title: "TCS NQT Full Length Mock Test 1",
    durationMinutes: 120, // 2 hours
    sections: [
        {
            id: "s1",
            name: "Part A - Foundation Section",
            durationMinutes: 60,
            questions: [
                { id: "q1", type: "aptitude", text: "If the simple interest on a certain sum of money for 3 years at 5% per annum is Rs. 1200, find the compound interest on the same sum for the same period and at the same rate.", options: ["Rs. 1261", "Rs. 1265", "Rs. 1300", "Rs. 1320"], marks: 1, negative: 0.33 },
                { id: "q2", type: "reasoning", text: "In a certain code language, 'COMPUTER' is written as 'RFUVQNPC'. How will 'MEDICINE' be written in that code language?", options: ["MFEDJJOE", "EOJDEJFM", "MFEJDJOE", "EOJDJEFM"], marks: 1, negative: 0.33 },
                { id: "q3", type: "verbal", text: "Choose the correct synonym for 'OBSTINATE'.", options: ["Stubborn", "Flexible", "Docile", "Compliant"], marks: 1, negative: 0.33 },
                { id: "q4", type: "english", text: "Identify the segment in the sentence which contains a grammatical error: 'Neither of the two men were very strong.'", options: ["Neither of", "the two men", "were", "very strong"], marks: 1, negative: 0.33 },
            ]
        },
        {
            id: "s2",
            name: "Part B - Advanced Section",
            durationMinutes: 60,
            questions: [
                { id: "q5", type: "advanced-aptitude", text: "A can do a piece of work in 10 days, B in 15 days. They work together for 5 days, the rest of the work is finished by C in 2 days. If they get Rs. 3000 for the whole work, what is the share of C?", options: ["Rs. 500", "Rs. 1000", "Rs. 1500", "Rs. 2000"], marks: 2, negative: 0.5 },
                { id: "q6", type: "advanced-reasoning", text: "Eight friends A, B, C, D, E, F, G and H are sitting around a circular table facing the centre. A is sitting third to the left of C... (Assume full text). Who is sitting to the immediate right of F?", options: ["A", "B", "C", "D"], marks: 2, negative: 0.5 },
                { id: "q7", type: "advanced-coding", text: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.", options: ["O(N) Time Complexity", "O(N^2) Time Complexity", "O(log N) Time Complexity", "O(1) Time Complexity"], marks: 3, negative: 0 },
            ]
        }
    ]
};

export default function MockTestEnginePage() {
    const router = useRouter();
    const [activeSection, setActiveSection] = useState(0);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [timeLeft, setTimeLeft] = useState(MOCK_TEST_DATA.sections[0].durationMinutes * 60);
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [status, setStatus] = useState<Record<string, "visited" | "answered" | "marked" | "unvisited">>({});
    const [hasStarted, setHasStarted] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (!hasStarted || isSubmitted) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    // Auto submit section
                    if (activeSection < MOCK_TEST_DATA.sections.length - 1) {
                        handleSectionChange(activeSection + 1);
                        return MOCK_TEST_DATA.sections[activeSection + 1].durationMinutes * 60;
                    } else {
                        handleSubmit();
                        return 0;
                    }
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [hasStarted, activeSection, isSubmitted]);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h > 0 ? h + ':' : ''}${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const currentSec = MOCK_TEST_DATA.sections[activeSection];
    const currentQ = currentSec.questions[activeQuestion];

    const initializeStatus = () => {
        const newStatus = { ...status };
        MOCK_TEST_DATA.sections.forEach(sec => {
            sec.questions.forEach(q => {
                if (!newStatus[q.id]) newStatus[q.id] = "unvisited";
            });
        });
        newStatus[MOCK_TEST_DATA.sections[0].questions[0].id] = "visited";
        setStatus(newStatus);
        setHasStarted(true);
    };

    const handleSelectAnswer = (optIndex: number) => {
        setAnswers({ ...answers, [currentQ.id]: optIndex });
        setStatus({ ...status, [currentQ.id]: "answered" });
    };

    const handleNext = () => {
        if (activeQuestion < currentSec.questions.length - 1) {
            const nextQId = currentSec.questions[activeQuestion + 1].id;
            if (status[nextQId] === "unvisited") {
                setStatus({ ...status, [nextQId]: "visited" });
            }
            setActiveQuestion(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (activeQuestion > 0) {
            setActiveQuestion(prev => prev - 1);
        }
    };

    const handleMarkReview = () => {
        setStatus({ ...status, [currentQ.id]: "marked" });
        handleNext();
    };

    const handleSectionChange = (idx: number) => {
        setActiveSection(idx);
        setActiveQuestion(0);
        setTimeLeft(MOCK_TEST_DATA.sections[idx].durationMinutes * 60);
        const firstQId = MOCK_TEST_DATA.sections[idx].questions[0].id;
        if (status[firstQId] === "unvisited") {
            setStatus({ ...status, [firstQId]: "visited" });
        }
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
        // In a real app, send data to API and redirect to analysis
        setTimeout(() => {
            router.push(`/dashboard`);
        }, 3000);
    };

    if (!hasStarted) {
        return (
            <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
                <div className="bg-[#0f1219] p-8 rounded-2xl border border-white/10 max-w-2xl w-full text-center">
                    <Brain className="w-16 h-16 text-indigo-500 mx-auto mb-6" />
                    <h1 className="text-3xl font-bold mb-4">{MOCK_TEST_DATA.title}</h1>
                    <div className="flex items-center justify-center gap-6 text-gray-400 mb-8">
                        <span className="flex items-center gap-2"><Timer className="w-5 h-5" /> {MOCK_TEST_DATA.durationMinutes} Minutes</span>
                        <span className="flex items-center gap-2"><CheckSquare className="w-5 h-5" /> {MOCK_TEST_DATA.sections.reduce((acc, s) => acc + s.questions.length, 0)} Questions</span>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-left mb-8">
                        <h3 className="font-semibold text-white/90 mb-4 flex items-center gap-2">
                            <AlertCircle className="w-5 h-5 text-amber-500" /> Instructions
                        </h3>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                            <li>The test is divided into {MOCK_TEST_DATA.sections.length} sections.</li>
                            <li>Each section has a strict time limit. You cannot switch between sections.</li>
                            <li>Negative marking is applicable for incorrect answers.</li>
                            <li>Do not refresh the page or you will lose your progress.</li>
                        </ul>
                    </div>

                    <button
                        onClick={initializeStatus}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-colors shadow-[0_0_20px_rgba(79,70,229,0.3)]"
                    >
                        I am ready to begin
                    </button>
                </div>
            </div>
        );
    }

    if (isSubmitted) {
        return (
            <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-4">
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-emerald-500" />
                </div>
                <h1 className="text-3xl font-bold mb-2">Test Submitted Successfully!</h1>
                <p className="text-gray-400">Our AI is generating your detailed performance report...</p>
                <div className="mt-8 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-[calc(100vh-4rem)] bg-black">
            {/* Top Bar */}
            <div className="bg-[#0f1219] border-b border-white/10 px-6 py-3 flex items-center justify-between z-20 shadow-md">
                <div className="flex items-center gap-4">
                    <h1 className="font-bold text-lg hidden sm:block">{MOCK_TEST_DATA.title}</h1>
                </div>

                {/* Section Tabs inside Header */}
                <div className="hidden md:flex flex-1 justify-center px-4">
                    <div className="flex bg-black/50 p-1 rounded-lg border border-white/5">
                        {MOCK_TEST_DATA.sections.map((sec, idx) => (
                            <button
                                key={sec.id}
                                disabled={activeSection !== idx} // TCS NQT strict section switching
                                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${activeSection === idx
                                    ? "bg-indigo-600 shadow-sm text-white"
                                    : "text-gray-500"
                                    }`}
                            >
                                {sec.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-6 text-xl font-mono font-bold">
                    <div className={`flex items-center gap-2 ${timeLeft < 300 ? 'text-rose-500 animate-pulse' : 'text-emerald-400'}`}>
                        <Timer className="w-5 h-5" />
                        {formatTime(timeLeft)}
                    </div>
                    <button onClick={() => { if (confirm("Are you sure you want to submit the entire test?")) handleSubmit() }} className="text-sm bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-md font-sans font-medium transition-colors">
                        Submit Test
                    </button>
                </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Main Content Area */}
                <div className="flex-1 flex flex-col bg-[#030712] relative">

                    <div className="flex-1 overflow-y-auto p-6 sm:p-10">
                        <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-4">
                            <h2 className="text-xl font-bold flex gap-3">
                                <span className="text-indigo-500">Q{activeQuestion + 1}.</span>
                            </h2>
                            <div className="flex gap-4 text-sm font-medium bg-black/30 px-3 py-1.5 rounded-full border border-white/5">
                                <span className="text-emerald-400">+{currentQ.marks} Marks</span>
                                <span className="text-rose-400">-{currentQ.negative} Marks</span>
                            </div>
                        </div>

                        <div className="prose prose-invert max-w-none mb-10 text-lg leading-relaxed text-gray-200" dangerouslySetInnerHTML={{ __html: currentQ.text.replace(/\n/g, '<br/>') }} />

                        <div className="space-y-4 max-w-3xl">
                            {currentQ.options.map((opt, idx) => {
                                const isSelected = answers[currentQ.id] === idx;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => handleSelectAnswer(idx)}
                                        className={`w-full flex items-center gap-4 text-left p-4 rounded-xl border transition-all ${isSelected
                                            ? "border-indigo-500 bg-indigo-500/10 shadow-[0_0_15px_rgba(79,70,229,0.15)] ring-1 ring-indigo-500/50"
                                            : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20"
                                            }`}
                                    >
                                        <div className={`w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${isSelected ? "border-indigo-500 bg-indigo-500" : "border-gray-500 bg-transparent"
                                            }`}>
                                            {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                                        </div>
                                        <span className={`text-base font-medium ${isSelected ? "text-white" : "text-gray-300"}`}>
                                            {opt}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Action Footer */}
                    <div className="bg-[#0f1219] border-t border-white/10 p-4 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <button
                                onClick={handleMarkReview}
                                className="flex items-center gap-2 px-4 py-2 bg-amber-500/10 text-amber-500 border border-amber-500/20 hover:bg-amber-500/20 rounded-md font-medium text-sm transition-colors"
                            >
                                Mark for Review & Next
                            </button>
                            <button
                                onClick={() => {
                                    const newAnswers = { ...answers };
                                    delete newAnswers[currentQ.id];
                                    setAnswers(newAnswers);
                                    setStatus({ ...status, [currentQ.id]: "visited" });
                                }}
                                className="px-4 py-2 border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 rounded-md font-medium text-sm transition-colors"
                            >
                                Clear Response
                            </button>
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={handlePrev}
                                disabled={activeQuestion === 0}
                                className="flex items-center gap-2 px-6 py-2 bg-white/5 disabled:opacity-50 hover:bg-white/10 rounded-md font-medium transition-colors"
                            >
                                <ChevronLeft className="w-4 h-4" /> Previous
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={activeQuestion === currentSec.questions.length - 1}
                                className="flex items-center gap-2 px-6 py-2 bg-indigo-600 disabled:opacity-50 hover:bg-indigo-700 text-white rounded-md font-medium transition-colors shadow-sm"
                            >
                                Save & Next <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                </div>

                {/* Right Nav Palette */}
                <div className="w-64 bg-[#0a0d14] border-l border-white/10 flex flex-col min-h-0">
                    <div className="p-4 border-b border-white/10 bg-black/20 text-center font-medium">
                        Question Palette
                    </div>

                    <div className="grid grid-cols-2 gap-2 p-4 text-xs font-medium border-b border-white/5">
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded bg-emerald-500"></div> Answered
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded bg-rose-500 text-white flex items-center justify-center font-bold"></div> Not Answered
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded bg-gray-500"></div> Not Visited
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded bg-amber-500"></div> Marked Review
                        </div>
                    </div>

                    <div className="p-4 overflow-y-auto flex-1">
                        <div className="grid grid-cols-4 gap-2">
                            {currentSec.questions.map((q, idx) => {
                                const s = status[q.id];
                                let bgClass = "bg-gray-700"; // unvisited
                                if (s === "answered") bgClass = "bg-emerald-600";
                                else if (s === "marked") bgClass = "bg-amber-500";
                                else if (s === "visited") bgClass = "bg-rose-500";

                                return (
                                    <button
                                        key={q.id}
                                        onClick={() => setActiveQuestion(idx)}
                                        className={`h-10 w-full rounded text-sm font-bold text-white transition-all ${activeQuestion === idx ? "ring-2 ring-white ring-offset-2 ring-offset-[#0a0d14]" : ""
                                            } ${bgClass}`}
                                    >
                                        {idx + 1}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
