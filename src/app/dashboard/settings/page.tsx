"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Moon, Shield, Globe, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function SettingsPage() {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(true);

    const sections = [
        {
            title: "Appearance",
            icon: Moon,
            items: [
                {
                    label: "Dark Mode",
                    desc: "Enable futuristic dark theme",
                    action: (
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`w-12 h-6 rounded-full transition-colors relative ${darkMode ? "bg-primary" : "bg-gray-600"
                                }`}
                        >
                            <div
                                className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${darkMode ? "left-7" : "left-1"
                                    }`}
                            />
                        </button>
                    ),
                },
            ],
        },
        {
            title: "Notifications",
            icon: Bell,
            items: [
                {
                    label: "Email Notifications",
                    desc: "Receive updates about upcoming events",
                    action: (
                        <button
                            onClick={() => setNotifications(!notifications)}
                            className={`w-12 h-6 rounded-full transition-colors relative ${notifications ? "bg-primary" : "bg-gray-600"
                                }`}
                        >
                            <div
                                className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${notifications ? "left-7" : "left-1"
                                    }`}
                            />
                        </button>
                    ),
                },
            ],
        },
        {
            title: "Security",
            icon: Shield,
            items: [
                {
                    label: "Change Password",
                    desc: "Update your account password",
                    action: <Button variant="outline" size="sm">Update</Button>,
                },
                {
                    label: "Two-Factor Authentication",
                    desc: "Add an extra layer of security",
                    action: <Button variant="outline" size="sm">Enable</Button>,
                },
            ],
        },
    ];

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white">Settings</h1>
                <p className="text-gray-400 mt-1">Configure your workspace preferences.</p>
            </div>

            <div className="space-y-6">
                {sections.map((section, i) => (
                    <motion.div
                        key={section.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card rounded-xl border border-white/10 overflow-hidden"
                    >
                        <div className="p-6 border-b border-white/10 flex items-center">
                            <div className="p-2 rounded-lg bg-white/5 mr-4">
                                <section.icon className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-lg font-bold text-white">{section.title}</h2>
                        </div>
                        <div className="divide-y divide-white/5">
                            {section.items.map((item, j) => (
                                <div key={j} className="p-6 flex items-center justify-between hover:bg-white/5 transition-colors">
                                    <div>
                                        <h3 className="text-white font-medium">{item.label}</h3>
                                        <p className="text-sm text-gray-400">{item.desc}</p>
                                    </div>
                                    {item.action}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
