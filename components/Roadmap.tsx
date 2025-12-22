"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Zap,
    Rocket,
    ZoomIn,
    Globe,
    ArrowRight,
    CheckCircle2,
    X
} from "lucide-react";

interface RoadmapItem {
    quarter: string;
    title: string;
    description: string;
    details: string[];
    icon: typeof Zap; // Just to type the component properly
}

const roadmapData: RoadmapItem[] = [
    {
        quarter: "Q1 2026",
        title: "Monetization & Core",
        description: "Tiered Pricing Rollout & AI Safety Features",
        icon: Zap,
        details: [
            "Launch Basic, Mid, and Enterprise plans",
            "Restricted AI actions for safety",
            "Dynamic recommendations",
            "Enterprise tools (static agents, RAG for custom data)",
            "Secure initial enterprise partnerships",
            "User Feedback Integration"
        ]
    },
    {
        quarter: "Q2 2026",
        title: "Expansion & Consultancy",
        description: "AI/ML Advisory & Tool Integrations",
        icon: Rocket,
        details: [
            "AI/ML Consultancy Services rollout",
            "Jira, Slack, and MS Teams integrations",
            "Measuring ROI for team productivity",
            "Success story case studies published"
        ]
    },
    {
        quarter: "Q3 2026",
        title: "Growth & Infrastructure",
        description: "Team Scaling & Hardware Decisions",
        icon: ZoomIn,
        details: [
            "Hire key talent in ML and Dev",
            "Finalize Hardware & LLM selection",
            "Prepare for advanced on-prem deployments",
            "Aim for 10-15 active enterprise clients",
            "Focus on high-stakes sectors"
        ]
    },
    {
        quarter: "Q4 2026",
        title: "Independence & Advanced",
        description: "Local LLM & Global Production",
        icon: Globe,
        details: [
            "Local/On-prem LLM Deployment (Mistral-based)",
            "Multi-agent systems introduction",
            "Office suite integrations",
            "Custom fine-tuning for enterprise",
            "Full production global availability"
        ]
    }
];

export default function Roadmap() {
    const [selectedItem, setSelectedItem] = useState<RoadmapItem | null>(null);

    return (
        <section className="py-24 bg-navy relative overflow-hidden" id="roadmap">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container-custom relative">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-sm font-medium mb-4">
                        Future Vision
                    </span>
                    <h2 className="section-title">
                        Roadmap <span className="gradient-text">2026</span>
                    </h2>
                    <p className="section-subtitle">
                        Our commitment to data-driven innovation and user privacy.
                        Follow our journey from core features to full AI independence.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line - Desktop */}
                    <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan/20 to-transparent border-t border-dashed border-cyan/30" />

                    <div className="grid gap-8 lg:grid-cols-4 relative">
                        {roadmapData.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div
                                        onClick={() => setSelectedItem(item)}
                                        className="glass-card cursor-pointer group h-full flex flex-col items-center text-center hover:translate-y-[-8px] transition-all duration-300"
                                    >
                                        <div className="mb-6 w-16 h-16 rounded-2xl bg-cyan/10 flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
                                            <Icon className="w-8 h-8 text-cyan" />
                                        </div>

                                        <div className="mb-2 text-xs font-bold text-cyan tracking-widest uppercase">
                                            {item.quarter}
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan transition-colors">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm text-slate-400 mb-6 flex-grow">
                                            {item.description}
                                        </p>

                                        <div className="mt-auto flex items-center gap-2 text-cyan font-medium text-sm group-hover:gap-3 transition-all">
                                            Details <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Detail Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedItem(null)}
                            className="absolute inset-0 bg-navy/80 backdrop-blur-md"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-lg bg-navy-light border border-cyan/30 rounded-2xl p-6 sm:p-8 shadow-neon-cyan overflow-hidden"
                        >
                            {/* Modal Background Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/10 blur-3xl rounded-full" />

                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="mb-6">
                                <span className="inline-block px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-bold mb-3 uppercase tracking-wider">
                                    {selectedItem.quarter}
                                </span>
                                <h3 className="text-3xl font-bold text-white">
                                    {selectedItem.title}
                                </h3>
                            </div>

                            <p className="text-slate-300 italic mb-8 pb-6 border-b border-white/10">
                                {selectedItem.description}
                            </p>

                            <div className="space-y-4">
                                <h4 className="flex items-center gap-2 font-semibold text-white">
                                    <CheckCircle2 className="w-5 h-5 text-cyan" />
                                    Key Objectives
                                </h4>

                                <ul className="grid gap-3">
                                    {selectedItem.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-slate-400 group">
                                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan/50 shrink-0 group-hover:bg-cyan transition-colors" />
                                            <span className="text-sm sm:text-base leading-relaxed">
                                                {detail}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-10">
                                <button
                                    onClick={() => setSelectedItem(null)}
                                    className="w-full btn-primary-filled"
                                >
                                    Close Details
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
