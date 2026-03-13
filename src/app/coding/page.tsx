"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";
import Link from "next/link";
import { ChevronLeft, Play, CheckCircle, RotateCcw } from "lucide-react";

const SUPPORTED_LANGUAGES = [
    { id: "python", name: "Python" },
    { id: "java", name: "Java" },
    { id: "cpp", name: "C++" },
];

const DEFAULT_CODE: Record<string, string> = {
    python: `def reverseInteger(n):\n    # Write your logic here\n    pass\n\n# Test your code\nprint(reverseInteger(123))`,
    java: `public class Solution {\n    public static int reverseInteger(int n) {\n        // Write your logic here\n        return 0;\n    }\n    \n    public static void main(String[] args) {\n        System.out.println(reverseInteger(123));\n    }\n}`,
    cpp: `#include <iostream>\nusing namespace std;\n\nint reverseInteger(int n) {\n    // Write your logic here\n    return 0;\n}\n\nint main() {\n    cout << reverseInteger(123) << endl;\n    return 0;\n}`
};

export default function CodingSectionPage() {
    const [language, setLanguage] = useState("python");
    const [code, setCode] = useState(DEFAULT_CODE.python);
    const [output, setOutput] = useState<string | null>(null);
    const [isRunning, setIsRunning] = useState(false);

    const handleLanguageChange = (langId: string) => {
        setLanguage(langId);
        setCode(DEFAULT_CODE[langId]);
        setOutput(null);
    };

    const handleRunCode = async () => {
        setIsRunning(true);
        // Simulate API call and code execution
        setTimeout(() => {
            setOutput("Running tests...\n\nTest Case 1: 123 -> Expected: 321, Output: None\n❌ FAILED\n\nTest Case 2: -456 -> Expected: -654, Output: None\n❌ FAILED\n\nExecution Time: 0.12ms\nMemory: 14.2 MB");
            setIsRunning(false);
        }, 1500);
    };

    return (
        <div className="flex flex-col h-[calc(100vh-4rem)] max-w-[1600px] mx-auto overflow-hidden">
            {/* Header bar */}
            <div className="bg-[#030712] border-b border-white/10 px-4 py-3 flex items-center justify-between z-10">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard" className="text-gray-400 hover:text-white transition-colors">
                        <ChevronLeft className="w-5 h-5" />
                    </Link>
                    <h1 className="font-semibold text-white/90">Challenge: Reverse Integer</h1>
                    <span className="bg-amber-500/20 text-amber-400 text-xs px-2 py-1 rounded font-medium">Medium</span>
                </div>
                <div className="flex items-center gap-4">
                    <select
                        value={language}
                        onChange={(e) => handleLanguageChange(e.target.value)}
                        className="bg-white/5 border border-white/10 rounded-md px-3 py-1.5 text-sm text-white/90 focus:outline-none focus:border-indigo-500"
                    >
                        {SUPPORTED_LANGUAGES.map(l => (
                            <option key={l.id} value={l.id} className="bg-[#0f1219]">{l.name}</option>
                        ))}
                    </select>
                    <button
                        onClick={handleRunCode}
                        disabled={isRunning}
                        className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-600/50 disabled:cursor-not-allowed text-white px-4 py-1.5 rounded-md text-sm font-medium transition-colors"
                    >
                        {isRunning ? (
                            <RotateCcw className="w-4 h-4 animate-spin" />
                        ) : (
                            <Play className="w-4 h-4" />
                        )}
                        {isRunning ? "Running..." : "Run Code"}
                    </button>
                    <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1.5 rounded-md text-sm font-medium transition-colors">
                        <CheckCircle className="w-4 h-4" /> Submit
                    </button>
                </div>
            </div>

            <div className="flex-1 flex flex-col md:flex-row min-h-0">
                {/* Problem Description Pane */}
                <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-white/10 p-6 overflow-y-auto bg-[#0a0d14]">
                    <h2 className="text-xl font-bold mb-4">Reverse Integer</h2>
                    <div className="prose prose-invert prose-sm max-w-none text-gray-300">
                        <p className="mb-4">Given a signed 32-bit integer <code>x</code>, return <code>x</code> with its digits reversed. If reversing <code>x</code> causes the value to go outside the signed 32-bit integer range <code>[-2^31, 2^31 - 1]</code>, then return <code>0</code>.</p>
                        <p className="mb-4"><strong>Assume the environment does not allow you to store 64-bit integers (signed or unsigned).</strong></p>

                        <h3 className="text-white/90 font-semibold mt-6 mb-2">Example 1:</h3>
                        <pre className="bg-white/5 p-3 rounded-lg border border-white/10 text-sm font-mono">
                            Input: x = 123{"\n"}
                            Output: 321
                        </pre>

                        <h3 className="text-white/90 font-semibold mt-6 mb-2">Example 2:</h3>
                        <pre className="bg-white/5 p-3 rounded-lg border border-white/10 text-sm font-mono">
                            Input: x = -123{"\n"}
                            Output: -321
                        </pre>

                        <h3 className="text-white/90 font-semibold mt-6 mb-2">Example 3:</h3>
                        <pre className="bg-white/5 p-3 rounded-lg border border-white/10 text-sm font-mono">
                            Input: x = 120{"\n"}
                            Output: 21
                        </pre>

                        <h3 className="text-white/90 font-semibold mt-6 mb-2">Constraints:</h3>
                        <ul className="list-disc pl-5 space-y-1 bg-white/5 p-4 rounded-lg border border-white/10">
                            <li><code>-2^31 &lt;= x &lt;= 2^31 - 1</code></li>
                        </ul>
                    </div>
                </div>

                {/* Editor and Output Pane */}
                <div className="flex-1 flex flex-col min-w-0">
                    <div className="flex-1 relative">
                        <Editor
                            height="100%"
                            language={language}
                            theme="vs-dark"
                            value={code}
                            onChange={(val) => setCode(val || "")}
                            options={{
                                minimap: { enabled: false },
                                fontSize: 14,
                                fontFamily: "var(--font-mono), monospace",
                                lineNumbers: "on",
                                roundedSelection: false,
                                scrollBeyondLastLine: false,
                                readOnly: false,
                                padding: { top: 16 }
                            }}
                        />
                    </div>

                    {/* Console / Output Area */}
                    <div className="h-64 border-t border-white/10 bg-[#0a0d14] flex flex-col">
                        <div className="px-4 py-2 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Test Results</span>
                            {output && (
                                <button
                                    onClick={() => setOutput(null)}
                                    className="text-xs text-gray-500 hover:text-white"
                                >
                                    Clear
                                </button>
                            )}
                        </div>
                        <div className="flex-1 p-4 overflow-y-auto font-mono text-sm">
                            {output ? (
                                <pre className={output.includes("FAILED") ? "text-rose-400 whitespace-pre-wrap" : "text-emerald-400 whitespace-pre-wrap"}>
                                    {output}
                                </pre>
                            ) : (
                                <div className="h-full flex items-center justify-center text-gray-500 text-center">
                                    <div>
                                        <p>Run your code to see output here.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
