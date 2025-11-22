"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";

const events = [
    {
        id: 1,
        title: "AI & Machine Learning Workshop",
        date: "Oct 15, 2025",
        time: "10:00 AM - 2:00 PM",
        location: "Tech Hub, Room 301",
        category: "Technical",
        image: "bg-gradient-to-br from-blue-600 to-purple-600",
        description: "Dive deep into neural networks and build your first ML model."
    },
    {
        id: 2,
        title: "Public Speaking Masterclass",
        date: "Oct 20, 2025",
        time: "3:00 PM - 5:00 PM",
        location: "Auditorium B",
        category: "Soft Skills",
        image: "bg-gradient-to-br from-pink-500 to-orange-400",
        description: "Overcome stage fright and deliver impactful presentations."
    },
    {
        id: 3,
        title: "Cybersecurity Essentials",
        date: "Nov 05, 2025",
        time: "11:00 AM - 1:00 PM",
        location: "Cyber Lab",
        category: "Technical",
        image: "bg-gradient-to-br from-green-500 to-teal-500",
        description: "Learn how to protect systems from modern threats."
    },
];

export default function EventsPage() {
    const [filter, setFilter] = useState("All");

    const filteredEvents = filter === "All"
        ? events
        : events.filter(e => e.category === filter);

    return (
        <div className="min-h-screen py-20 px-4 relative">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Missions</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Join our workshops and seminars to upgrade your skill set.
                    </p>

                    {/* Filter Tabs */}
                    <div className="flex justify-center gap-4 mt-8">
                        {["All", "Technical", "Soft Skills"].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                                        ? "bg-primary text-black shadow-[0_0_15px_rgba(0,243,255,0.4)]"
                                        : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredEvents.map((event, i) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className={`h-48 ${event.image} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-xs font-bold text-white border border-white/20">
                                    {event.category}
                                </div>
                            </div>

                            <div className="p-6 space-y-4">
                                <div className="flex items-center text-sm text-primary space-x-4">
                                    <div className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {event.date}</div>
                                    <div className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {event.time}</div>
                                </div>

                                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                    {event.title}
                                </h3>

                                <p className="text-gray-400 text-sm line-clamp-2">
                                    {event.description}
                                </p>

                                <div className="flex items-center text-sm text-gray-500">
                                    <MapPin className="w-4 h-4 mr-1" /> {event.location}
                                </div>

                                <Link
                                    href={`/events/${event.id}`}
                                    className="block w-full py-3 text-center rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-primary hover:text-black hover:border-primary transition-all group-hover:shadow-[0_0_20px_rgba(0,243,255,0.2)]"
                                >
                                    Register Now
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
