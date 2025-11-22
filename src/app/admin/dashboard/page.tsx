"use client";

import { motion } from "framer-motion";
import { Users, Calendar, Award, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
    const stats = [
        { label: "Total Members", value: "1,234", icon: Users, color: "text-blue-400", bg: "bg-blue-400/10" },
        { label: "Active Events", value: "8", icon: Calendar, color: "text-purple-400", bg: "bg-purple-400/10" },
        { label: "Certificates Issued", value: "856", icon: Award, color: "text-green-400", bg: "bg-green-400/10" },
        { label: "Engagement Rate", value: "87%", icon: TrendingUp, color: "text-orange-400", bg: "bg-orange-400/10" },
    ];

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card p-6 rounded-xl border border-white/10"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-lg ${stat.bg} ${stat.color}`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                        </div>
                        <h3 className="text-gray-400 font-medium">{stat.label}</h3>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Registrations */}
                <div className="glass-card p-6 rounded-xl border border-white/10">
                    <h2 className="text-xl font-bold text-white mb-6">Recent Registrations</h2>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
                                        U{i}
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">New User {i}</p>
                                        <p className="text-xs text-gray-500">user{i}@example.com</p>
                                    </div>
                                </div>
                                <span className="text-xs text-gray-400">2 mins ago</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pending Approvals */}
                <div className="glass-card p-6 rounded-xl border border-white/10">
                    <h2 className="text-xl font-bold text-white mb-6">Pending Approvals</h2>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors">
                                <div>
                                    <p className="text-white font-medium">Workshop Request {i}</p>
                                    <p className="text-xs text-gray-500">Requested by Organizer {i}</p>
                                </div>
                                <div className="flex space-x-2">
                                    <button className="px-3 py-1 text-xs font-bold text-green-400 bg-green-400/10 rounded hover:bg-green-400/20">Approve</button>
                                    <button className="px-3 py-1 text-xs font-bold text-red-400 bg-red-400/10 rounded hover:bg-red-400/20">Reject</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
