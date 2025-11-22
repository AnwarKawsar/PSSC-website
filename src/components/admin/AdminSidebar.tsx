"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Calendar, Award, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";

const adminItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Members", href: "/admin/members", icon: Users },
    { name: "Events", href: "/admin/events", icon: Calendar },
    { name: "Certificates", href: "/admin/certificates", icon: Award },
    { name: "Settings", href: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
    const pathname = usePathname();
    const { signOut } = useAuth();

    return (
        <div className="hidden md:flex flex-col w-64 bg-black/60 border-r border-white/10 h-[calc(100vh-4rem)] fixed left-0 top-16 backdrop-blur-sm">
            <div className="p-4 border-b border-white/10">
                <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Admin Control</h2>
            </div>
            <div className="flex-1 py-4 space-y-1">
                {adminItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex items-center px-6 py-3 text-sm font-medium transition-colors relative group",
                                isActive
                                    ? "text-secondary bg-secondary/10 border-r-2 border-secondary"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <item.icon className={cn("mr-3 h-5 w-5", isActive ? "text-secondary" : "text-gray-500 group-hover:text-white")} />
                            {item.name}
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
