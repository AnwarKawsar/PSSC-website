"use client";

import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import { Calendar, Award, TrendingUp, Activity } from "lucide-react";

export default function DashboardPage() {
    const { user } = useAuth();

    const stats = [
        { label: "Events Attended", value: "12", icon: Calendar, color: "text-primary", bg: "bg-primary/10", border: "border-primary/20" },
        { label: "Certificates Earned", value: "5", icon: Award, color: "text-secondary", bg: "bg-secondary/10", border: "border-secondary/20" },
        { label: "Skill Score", value: "850", icon: TrendingUp, color: "text-accent", bg: "bg-accent/10", border: "border-accent/20" },
    ];

    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">
                        Welcome back, <span className="text-primary">{user?.user_metadata?.full_name || "Agent"}</span>
                    </h1>
                    <p className="text-gray-400 mt-1">Here's what's happening in your network.</p>
                </div>
                <div className="hidden md:block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                    Last login: {new Date().toLocaleDateString()}
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`p-6 rounded-xl border ${stat.border} ${stat.bg} backdrop-blur-sm`}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-lg bg-black/20 ${stat.color}`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                        </div>
                        <h3 className="text-gray-400 font-medium">{stat.label}</h3>
                    </motion.div>
                ))}
            </div>

            {/* Recent Activity */}
            <div className="glass-card rounded-xl p-6 border border-white/10">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                    <Activity className="w-5 h-5 mr-2 text-primary" />
                    Recent Activity
                </h2>
                <div className="space-y-4">
                    {[
                        { title: "Registered for 'AI Workshop'", date: "2 hours ago", type: "Event" },
                        { title: "Earned 'React Master' Certificate", date: "1 day ago", type: "Certificate" },
                        { title: "Updated Profile Information", date: "3 days ago", type: "System" },
                    ].map((activity, i) => (
                        <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                            <div>
                                <h4 className="text-white font-medium">{activity.title}</h4>
                                <p className="text-sm text-gray-400">{activity.date}</p>
                            </div>
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/30 text-gray-300 border border-white/10">
                                {activity.type}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
