import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { ChevronLeft, BrainCircuit } from "lucide-react";
import { notFound } from "next/navigation";
import InteractiveQuizServer from "../../practice/[section]/InteractiveQuiz";

export default async function PreviousPaperSolverPage({ params }: { params: Promise<{ source: string }> }) {
    const { source } = await params;
    const decodedSource = decodeURIComponent(source);

    // Fetch questions from database that match this exact paper
    const questions = await prisma.question.findMany({
        where: { source: decodedSource },
        orderBy: { id: 'asc' },
    });

    if (questions.length === 0) {
        return (
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-8">
                    <Link href="/previous-papers" className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors mb-6">
                        <ChevronLeft className="w-4 h-4 mr-1" /> Back to Papers
                    </Link>
                    <h1 className="text-3xl font-bold mb-2">{decodedSource}</h1>
                </div>
                <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
                    <BrainCircuit className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-white/80">Paper Not Found</h3>
                    <p className="text-gray-500 mt-2">Questions for {decodedSource} are currently being processed by our AI.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-8">
                <Link href="/previous-papers" className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors mb-6">
                    <ChevronLeft className="w-4 h-4 mr-1" /> Back to Papers
                </Link>
                <h1 className="text-3xl font-bold mb-2">{decodedSource} Real Paper</h1>
                <p className="text-gray-400">Solve the actual questions asked in this specific slot based on candidate memory.</p>
            </div>

            <InteractiveQuizServer
                questions={questions}
                sectionTitle={decodedSource}
                topicName="Mixed Paper"
            />
        </div>
    );
}
