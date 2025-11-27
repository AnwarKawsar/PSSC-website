"use client";

import { motion } from "framer-motion";
import { Award, Download, Share2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";

const certificates = [
    {
        id: 1,
        title: "React Masterclass",
        issuer: "PSSC Academy",
        date: "Nov 20, 2025",
        id_code: "PSSC-REACT-2025-001",
        color: "text-primary",
        border: "border-primary/20",
        bg: "bg-primary/5",
    },
    {
        id: 2,
        title: "Advanced Python Programming",
        issuer: "PSSC Academy",
        date: "Oct 15, 2025",
        id_code: "PSSC-PY-2025-042",
        color: "text-secondary",
        border: "border-secondary/20",
        bg: "bg-secondary/5",
    },
    {
        id: 3,
        title: "UI/UX Design Fundamentals",
        issuer: "PSSC Design Wing",
        date: "Sep 01, 2025",
        id_code: "PSSC-DES-2025-089",
        color: "text-accent",
        border: "border-accent/20",
        bg: "bg-accent/5",
    },
];

export default function CertificatesPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">Certificates</h1>
                    <p className="text-gray-400 mt-1">Showcase your achievements and verified skills.</p>
                </div>
                <Button variant="outline">Verify a Certificate</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificates.map((cert, i) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className={`glass-card p-6 rounded-xl border ${cert.border} ${cert.bg} relative overflow-hidden group`}
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Award className={`w-32 h-32 ${cert.color}`} />
                        </div>

                        <div className="relative z-10 space-y-6">
                            <div className="flex items-start justify-between">
                                <div className={`p-3 rounded-lg bg-black/20 ${cert.color}`}>
                                    <Award className="w-8 h-8" />
                                </div>
                                <div className="px-3 py-1 rounded-full text-xs font-mono bg-black/30 text-gray-400 border border-white/10">
                                    {cert.id_code}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">{cert.title}</h3>
                                <p className="text-gray-400">Issued by {cert.issuer}</p>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                <span className="text-sm text-gray-500">Issued on {cert.date}</span>
                                <div className="flex space-x-2">
                                    <Button size="icon" variant="ghost" title="Download PDF">
                                        <Download className="w-4 h-4" />
                                    </Button>
                                    <Button size="icon" variant="ghost" title="Share">
                                        <Share2 className="w-4 h-4" />
                                    </Button>
                                    <Button size="icon" variant="ghost" title="Verify on Blockchain">
                                        <ExternalLink className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
