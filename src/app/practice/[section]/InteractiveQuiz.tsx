"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, CheckCircle, XCircle, BrainCircuit, CheckCircle2 } from "lucide-react";

export default function InteractiveQuizServer({
    questions,
    sectionTitle,
    topicName
}: {
    questions: any[],
    sectionTitle: string,
    topicName: string
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState<Record<number, string>>({});
    const [showSolution, setShowSolution] = useState<Record<number, boolean>>({});

    if (questions.length === 0) {
        return (
            <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
                <BrainCircuit className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-white/80">No questions found</h3>
                <p className="text-gray-500 mt-2">Our AI is generating new {topicName} questions. Check back soon!</p>
            </div>
        );
    }

    const q = questions[currentIndex];
    const options: string[] = q.options ? JSON.parse(q.options) : [];
    const userAnswer = selectedOptions[q.id];
    const isAnswered = !!userAnswer;
    const isCorrect = isAnswered && userAnswer === q.correctOption;

    const handleSelectOption = (opt: string) => {
        if (isAnswered) return; // Prevent changing answer after selection
        setSelectedOptions({ ...selectedOptions, [q.id]: opt });
        setShowSolution({ ...showSolution, [q.id]: true }); // Auto show solution on answer
    };

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="space-y-6">
            <div className="bg-[#0f1219] border border-white/10 rounded-2xl p-6 sm:p-8">
                <div className="flex justify-between items-start mb-6">
                    <span className="bg-indigo-500/20 text-indigo-400 text-xs px-3 py-1 rounded-full font-medium">
                        Question {currentIndex + 1} of {questions.length}
                    </span>
                    <div className="flex gap-2">
                        <span className={`text-xs px-2 py-1 rounded-md font-medium ${q.difficulty === 'easy' ? 'bg-emerald-500/20 text-emerald-400' :
                            q.difficulty === 'hard' ? 'bg-rose-500/20 text-rose-400' :
                                'bg-amber-500/20 text-amber-400'
                            }`}>
                            {q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1)}
                        </span>
                    </div>
                </div>

                <h3 className="text-lg font-medium leading-relaxed mb-6">
                    {q.content}
                </h3>

                {options.length > 0 && (
                    <div className="flex flex-col gap-3 mb-8">
                        {options.map((opt: string, i: number) => {
                            let btnStyle = "border-white/10 text-gray-200 hover:border-indigo-500/50 hover:bg-white/5";

                            if (isAnswered) {
                                if (opt === q.correctOption) {
                                    btnStyle = "border-emerald-500/50 bg-emerald-500/10 text-emerald-400";
                                } else if (opt === userAnswer) {
                                    btnStyle = "border-rose-500/50 bg-rose-500/10 text-rose-400";
                                } else {
                                    btnStyle = "border-white/5 text-gray-500 opacity-50 cursor-not-allowed";
                                }
                            }

                            return (
                                <button
                                    key={i}
                                    onClick={() => handleSelectOption(opt)}
                                    disabled={isAnswered}
                                    className={`text-left p-4 rounded-xl border transition-all font-medium flex items-center justify-between ${btnStyle}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center text-sm">
                                            {String.fromCharCode(65 + i)}
                                        </span>
                                        <span>{opt}</span>
                                    </div>
                                    {isAnswered && opt === q.correctOption && <CheckCircle className="w-5 h-5 text-emerald-500" />}
                                    {isAnswered && opt === userAnswer && opt !== q.correctOption && <XCircle className="w-5 h-5 text-rose-500" />}
                                </button>
                            );
                        })}
                    </div>
                )}

                {/* Solution Area */}
                {showSolution[q.id] && (
                    <div className={`mt-6 p-5 rounded-xl border ${isCorrect ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-rose-500/10 border-rose-500/20'}`}>
                        <div className="flex items-center gap-2 mb-2 font-bold">
                            {isCorrect ? (
                                <><CheckCircle className="w-5 h-5 text-emerald-500" /> <span className="text-emerald-400">Correct!</span></>
                            ) : (
                                <><XCircle className="w-5 h-5 text-rose-500" /> <span className="text-rose-400">Incorrect</span></>
                            )}
                        </div>
                        <p className="text-gray-300 mt-3 text-sm leading-relaxed border-t border-white/5 pt-3">
                            <span className="font-semibold text-white/90">Solution:</span> <br />
                            {q.solution}
                        </p>
                    </div>
                )}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between gap-4">
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="flex items-center gap-2 px-6 py-3 bg-[#0f1219] border border-white/10 rounded-xl hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                >
                    <ChevronLeft className="w-4 h-4" /> Previous
                </button>

                <div className="text-sm font-medium text-gray-500">
                    {currentIndex + 1} / {questions.length}
                </div>

                <button
                    onClick={handleNext}
                    disabled={currentIndex === questions.length - 1}
                    className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium shadow-[0_0_15px_rgba(79,70,229,0.2)]"
                >
                    Next <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
