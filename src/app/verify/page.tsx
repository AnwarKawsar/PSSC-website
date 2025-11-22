"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, CheckCircle, XCircle, ShieldCheck, Loader2 } from "lucide-react";

export default function VerifyPage() {
    const [certId, setCertId] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "valid" | "invalid">("idle");
    const [result, setResult] = useState<any>(null);

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        // Simulate API call
        setTimeout(() => {
            if (certId.toUpperCase().startsWith("CERT")) {
                setStatus("valid");
                setResult({
                    id: certId.toUpperCase(),
                    recipient: "Alex Chen",
                    course: "Advanced React Patterns",
                    date: "2024-03-15",
                    issuer: "PSSC Academy"
                });
            } else {
                setStatus("invalid");
                setResult(null);
            }
        }, 2000);
    };

    return (
        <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] animate-pulse-slow"></div>
            </div>

            <div className="relative z-10 w-full max-w-2xl">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-accent/30"
                    >
                        <ShieldCheck className="w-10 h-10 text-accent" />
                    </motion.div>
                    <h1 className="text-4xl font-bold text-white mb-4">Certificate Verification</h1>
                    <p className="text-gray-400 text-lg">Authenticate digital credentials issued by PSSC</p>
                </div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="glass-card p-8 rounded-2xl mb-8"
                >
                    <form onSubmit={handleVerify} className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input
                                type="text"
                                value={certId}
                                onChange={(e) => setCertId(e.target.value)}
                                className="w-full bg-black/20 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all text-lg"
                                placeholder="Enter Certificate ID (e.g., CERT-123)"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="bg-accent text-white font-bold py-4 px-8 rounded-xl hover:bg-accent/90 transition-all flex items-center justify-center min-w-[140px] shadow-[0_0_20px_rgba(45,90,245,0.3)] hover:shadow-[0_0_30px_rgba(45,90,245,0.5)]"
                        >
                            {status === "loading" ? <Loader2 className="w-6 h-6 animate-spin" /> : "Verify"}
                        </button>
                    </form>
                </motion.div>

                <AnimatePresence mode="wait">
                    {status === "valid" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="glass-card p-8 rounded-2xl border-l-4 border-l-green-500"
                        >
                            <div className="flex items-start gap-4">
                                <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Valid Certificate</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-gray-300">
                                        <div>
                                            <span className="block text-sm text-gray-500">Recipient</span>
                                            <span className="text-lg font-medium text-white">{result.recipient}</span>
                                        </div>
                                        <div>
                                            <span className="block text-sm text-gray-500">Course</span>
                                            <span className="text-lg font-medium text-white">{result.course}</span>
                                        </div>
                                        <div>
                                            <span className="block text-sm text-gray-500">Date Issued</span>
                                            <span className="text-lg font-medium text-white">{result.date}</span>
                                        </div>
                                        <div>
                                            <span className="block text-sm text-gray-500">Certificate ID</span>
                                            <span className="font-mono text-accent">{result.id}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {status === "invalid" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="glass-card p-8 rounded-2xl border-l-4 border-l-red-500"
                        >
                            <div className="flex items-center gap-4">
                                <XCircle className="w-8 h-8 text-red-500" />
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Invalid Certificate</h3>
                                    <p className="text-gray-400">The certificate ID provided could not be found in our registry.</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
