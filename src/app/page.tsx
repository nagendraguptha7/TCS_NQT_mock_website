"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Brain, Code, Target, Timer } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      title: "AI-Powered Practice",
      description: "Get personalized questions based on your weak areas and TCS NQT past trends.",
    },
    {
      icon: <Timer className="w-6 h-6 text-blue-400" />,
      title: "Realistic Mock Tests",
      description: "Experience the exact exam interface with section-wise timers and negative marking.",
    },
    {
      icon: <Code className="w-6 h-6 text-emerald-400" />,
      title: "Live Coding Sandbox",
      description: "Write, test, and run your code with hidden test cases just like the real exam.",
    },
    {
      icon: <Target className="w-6 h-6 text-rose-400" />,
      title: "Topic-Wise Analysis",
      description: "Identify exactly where you're losing marks and get targeted practice to improve.",
    },
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative flex-1 flex flex-col justify-center items-center px-4 overflow-hidden py-24">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#030712] to-[#030712] -z-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse-slow -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse-slow -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-indigo-300 mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Updated for 2024 TCS NQT Patterns
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Master the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">TCS NQT</span> with AI.
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Stop guessing what will be on the test. Prepare with data-backed mock tests,
            intelligent weakness analysis, and previous year patterns.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/dashboard"
              className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]"
            >
              Start Practicing Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/mock-tests"
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg text-white border border-white/20 hover:bg-white/5 transition-all"
            >
              Take a Mock Test
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-black/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to succeed</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Our platform provides comprehensive, structured preparation mimicking the actual TCS National Qualifier Test environment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-white/5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
