"use client";

import { motion } from "framer-motion";
import { Users, Calendar, Award, TrendingUp, Plus, Search, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/Button";

const stats = [
    { label: "Total Users", value: "1,234", change: "+12%", icon: Users, color: "text-primary", bg: "bg-primary/10" },
    { label: "Active Events", value: "8", change: "+2", icon: Calendar, color: "text-secondary", bg: "bg-secondary/10" },
    { label: "Certificates Issued", value: "450", change: "+45", icon: Award, color: "text-accent", bg: "bg-accent/10" },
    { label: "Engagement Rate", value: "85%", change: "+5%", icon: TrendingUp, color: "text-green-400", bg: "bg-green-400/10" },
];

const recentActivity = [
    { user: "Alex Chen", action: "Registered for AI Workshop", time: "2 mins ago" },
    { user: "Sarah Jones", action: "Earned React Certificate", time: "15 mins ago" },
    { user: "Mike Ross", action: "Updated Profile", time: "1 hour ago" },
    { user: "Emily Blunt", action: "Joined the Club", time: "2 hours ago" },
];

export default function AdminPage() {
    return (
        <div className="min-h-screen p-8 space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
                    <p className="text-gray-400 mt-1">Overview of platform performance and management.</p>
                </div>
                <div className="flex space-x-4">
                    <Button variant="outline">
                        <Search className="w-4 h-4 mr-2" />
                        Search
                    </Button>
                    <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        New Event
                    </Button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                            <span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                                {stat.change}
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                        <p className="text-gray-400 text-sm">{stat.label}</p>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Activity */}
                <div className="lg:col-span-2 glass-card rounded-xl border border-white/10 overflow-hidden">
                    <div className="p-6 border-b border-white/10 flex items-center justify-between">
                        <h2 className="text-lg font-bold text-white">Recent Activity</h2>
                        <Button variant="ghost" size="sm">View All</Button>
                    </div>
                    <div className="divide-y divide-white/5">
                        {recentActivity.map((activity, i) => (
                            <div key={i} className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors">
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-bold">
                                        {activity.user.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">{activity.user}</p>
                                        <p className="text-sm text-gray-400">{activity.action}</p>
                                    </div>
                                </div>
                                <span className="text-xs text-gray-500">{activity.time}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="glass-card rounded-xl border border-white/10 p-6 space-y-6">
                    <h2 className="text-lg font-bold text-white">Quick Actions</h2>
                    <div className="space-y-4">
                        <Button variant="outline" className="w-full justify-start">
                            <Plus className="w-4 h-4 mr-2" />
                            Issue Certificate
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                            <Users className="w-4 h-4 mr-2" />
                            Manage Users
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                            <Calendar className="w-4 h-4 mr-2" />
                            Schedule Event
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
