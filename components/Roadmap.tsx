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
    X,
    LucideIcon
} from "lucide-react";
import { Translations } from "@/lib/translations";

interface RoadmapProps {
    content: Translations["roadmap"];
}

interface RoadmapItem {
    quarter: string;
    title: string;
    description: string;
    details: string[];
    icon: LucideIcon;
}

export default function Roadmap({ content }: RoadmapProps) {
    const [selectedItem, setSelectedItem] = useState<RoadmapItem | null>(null);

    const getIcon = (index: number) => {
        switch (index) {
            case 0: return Zap;
            case 1: return Rocket;
            case 2: return ZoomIn;
            case 3: return Globe;
            default: return Zap;
        }
    };

    const roadmapData: RoadmapItem[] = content.items.map((item, index) => ({
        ...item,
        icon: getIcon(index)
    }));

    return (
        <section className="py-24 bg-navy relative overflow-hidden" id="roadmap">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container-custom relative">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-sm font-medium mb-4">
                        {content.badge}
                    </span>
                    <h2 className="section-title">
                        {content.title} <span className="gradient-text">{content.highlight}</span>
                    </h2>
                    <p className="section-subtitle">
                        {content.subtitle}
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
                                            {content.details} <ArrowRight className="w-4 h-4" />
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
                                    {content.keyObjectives}
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
                                    {content.close}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
