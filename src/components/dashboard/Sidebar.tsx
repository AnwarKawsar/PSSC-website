"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Calendar, Award, User, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";

const sidebarItems = [
    { name: "Overview", href: "/dashboard", icon: Home },
    { name: "Events", href: "/dashboard/events", icon: Calendar },
    { name: "Certificates", href: "/dashboard/certificates", icon: Award },
    { name: "Profile", href: "/dashboard/profile", icon: User },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function Sidebar() {
    const pathname = usePathname();
    const { signOut } = useAuth();

    return (
        <div className="hidden md:flex flex-col w-64 bg-black/40 border-r border-white/10 h-[calc(100vh-4rem)] fixed left-0 top-16 backdrop-blur-sm">
            <div className="flex-1 py-6 space-y-1">
                {sidebarItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex items-center px-6 py-3 text-sm font-medium transition-colors relative group",
                                isActive
                                    ? "text-primary bg-primary/10 border-r-2 border-primary"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <item.icon className={cn("mr-3 h-5 w-5", isActive ? "text-primary" : "text-gray-500 group-hover:text-white")} />
                            {item.name}
                            {isActive && (
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-20 pointer-events-none" />
                            )}
                        </Link>
                    );
                })}
            </div>
            <div className="p-4 border-t border-white/10">
                <button
                    onClick={() => signOut()}
                    className="flex items-center w-full px-4 py-2 text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-md transition-colors"
                >
                    <LogOut className="mr-3 h-5 w-5" />
                    Sign Out
                </button>
            </div>
        </div>
    );
}
