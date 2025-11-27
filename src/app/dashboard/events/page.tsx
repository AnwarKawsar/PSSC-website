"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const events = [
    {
        id: 1,
        title: "AI & Machine Learning Workshop",
        date: "Nov 28, 2025",
        time: "10:00 AM - 2:00 PM",
        location: "Tech Hub, Room 301",
        status: "Registered",
        image: "bg-primary/20",
    },
    {
        id: 2,
        title: "Web Development Bootcamp",
        date: "Dec 05, 2025",
        time: "9:00 AM - 5:00 PM",
        location: "Virtual (Zoom)",
        status: "Upcoming",
        image: "bg-secondary/20",
    },
    {
        id: 3,
        title: "Cybersecurity Essentials",
        date: "Dec 12, 2025",
        time: "11:00 AM - 1:00 PM",
        location: "Lab 2, CS Building",
        status: "Upcoming",
        image: "bg-accent/20",
    },
];

export default function EventsPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">Events</h1>
                    <p className="text-gray-400 mt-1">Manage your upcoming workshops and sessions.</p>
                </div>
                <Button>Explore More Events</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event, i) => (
                    <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card rounded-xl overflow-hidden border border-white/10 group hover:border-primary/50 transition-colors"
                    >
                        <div className={`h-32 ${event.image} relative`}>
                            <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-black/50 backdrop-blur-md text-white border border-white/10">
                                {event.status}
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                {event.title}
                            </h3>

                            <div className="space-y-2 text-sm text-gray-400">
                                <div className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                                    {event.date}
                                </div>
                                <div className="flex items-center">
                                    <Clock className="w-4 h-4 mr-2 text-primary" />
                                    {event.time}
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                                    {event.location}
                                </div>
                            </div>

                            <Button variant="outline" className="w-full mt-4">
                                View Details
                            </Button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
