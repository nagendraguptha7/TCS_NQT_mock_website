import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { notFound } from "next/navigation";
import InteractiveQuizServer from "./InteractiveQuiz";

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

            <InteractiveQuizServer
                questions={questions}
                sectionTitle={sectionTitles[section]}
                topicName={topicName}
            />
        </div>
    );
}
