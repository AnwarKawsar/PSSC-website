"use client";
"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Loader2 } from "lucide-react";

import { Suspense } from "react";

function AuthCallbackContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const next = searchParams.get("next") || "/dashboard";

    useEffect(() => {
        const handleAuth = async () => {
            const { data: { session }, error } = await supabase.auth.getSession();

            if (error) {
                console.error("Auth error:", error);
                router.push("/login?error=auth_failed");
                return;
            }

            if (session) {
                router.push(next);
            } else {
                // If no session, wait a bit for the hash to be processed by Supabase client
                // or redirect to login if it takes too long
                const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
                    if (event === 'SIGNED_IN' && session) {
                        router.push(next);
                    }
                });

                return () => subscription.unsubscribe();
            }
        };

        handleAuth();
    }, [router, next]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center space-y-4">
                {/* Loader2 is now in the Suspense fallback */}
                <p className="text-gray-400">Verifying credentials...</p>
            </div>
        </div>
    );
}

export default function AuthCallbackPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-background"><Loader2 className="w-10 h-10 text-primary animate-spin" /></div>}>
            <AuthCallbackContent />
        </Suspense>
    );
}
