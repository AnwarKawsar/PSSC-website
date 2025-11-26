"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Users, Award, Terminal } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 text-center">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto space-y-8"
        >
          <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm">
            Welcome to the Future of Coding
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            Programming & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-glow">
              Soft Skills Club
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-gray-400 leading-relaxed">
            Level up your technical expertise and master the art of communication.
            Join a community of innovators, builders, and future leaders.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button href="/signup" size="lg" className="group">
              <span className="relative z-10 flex items-center">
                Join the Club <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>

            <Button href="/events" variant="outline" size="lg">
              Explore Events
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="w-full py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Technical Workshops",
                desc: "Hands-on sessions on Web Dev, AI, Cyber Security, and more.",
                color: "text-primary",
                border: "group-hover:border-primary/50"
              },
              {
                icon: Users,
                title: "Soft Skills Training",
                desc: "Master public speaking, leadership, and team collaboration.",
                color: "text-secondary",
                border: "group-hover:border-secondary/50"
              },
              {
                icon: Award,
                title: "Certificate Verification",
                desc: "Blockchain-verified certificates for all your achievements.",
                color: "text-accent",
                border: "group-hover:border-accent/50"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`group p-8 glass rounded-2xl border border-white/5 transition-all duration-300 hover:-translate-y-2 ${feature.border}`}
              >
                <div className={`w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 ${feature.color}`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-20 border-y border-white/5 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Active Members", value: "500+" },
              { label: "Workshops Hosted", value: "50+" },
              { label: "Projects Built", value: "100+" },
              { label: "Industry Partners", value: "10+" },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-white font-mono">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
