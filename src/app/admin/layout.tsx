import { AdminSidebar } from "@/components/admin/AdminSidebar";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-[calc(100vh-4rem)]">
            <AdminSidebar />
            <div className="flex-1 md:ml-64 p-8 overflow-y-auto bg-black/20">
                {children}
            </div>
        </div>
    );
}
