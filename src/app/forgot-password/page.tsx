"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, KeyRound } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/Button";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

    const handleReset = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${window.location.origin}/auth/callback?next=/dashboard/reset-password`,
            });

            if (error) throw error;

            setMessage({
                type: "success",
                text: "Password reset link sent! Check your email.",
            });
        } catch (error) {
            setMessage({
                type: "error",
                text: (error as Error).message,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] animate-pulse-slow"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md glass-card p-8 rounded-2xl relative z-10"
            >
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-accent/30">
                        <KeyRound className="w-8 h-8 text-accent" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Recovery</h2>
                    <p className="text-gray-400 mt-2">Restore access to your account</p>
                </div>

                <form onSubmit={handleReset} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-black/20 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                                placeholder="agent@pssc.com"
                                required
                            />
                        </div>
                    </div>

                    {message && (
                        <div
                            className={`p-3 rounded-lg text-sm ${message.type === "success"
                                    ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                    : "bg-red-500/10 text-red-400 border border-red-500/20"
                                }`}
                        >
                            {message.text}
                        </div>
                    )}

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-accent text-white hover:bg-accent/90 shadow-[0_0_20px_rgba(45,90,245,0.3)] hover:shadow-[0_0_30px_rgba(45,90,245,0.5)]"
                        isLoading={loading}
                    >
                        Send Reset Link
                        {!loading && <ArrowRight className="ml-2 w-5 h-5" />}
                    </Button>
                </form>

                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <p className="text-gray-400 text-sm">
                        Remembered it?{" "}
                        <Link href="/login" className="text-accent hover:underline">
                            Back to Login
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
