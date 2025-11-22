import { Sidebar } from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-[calc(100vh-4rem)]">
            <Sidebar />
            <div className="flex-1 md:ml-64 p-8 overflow-y-auto">
                {children}
            </div>
        </div>
    );
}
