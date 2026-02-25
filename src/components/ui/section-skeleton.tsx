"use client";

import { motion } from "framer-motion";

interface SectionSkeletonProps {
    height?: string;
}

export function SectionSkeleton({ height = "600px" }: SectionSkeletonProps) {
    return (
        <div
            className="w-full bg-[#0c0c0b] border-t border-white/[0.06] relative overflow-hidden"
            style={{ height }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
            <div className="max-w-[1200px] mx-auto h-full flex flex-col items-center justify-center gap-8 px-6">
                {/* Placeholder title */}
                <div className="h-12 w-3/4 max-w-[400px] bg-white/[0.04] rounded-lg" />
                {/* Placeholder description */}
                <div className="h-4 w-1/2 max-w-[200px] bg-white/[0.03] rounded-md" />

                {/* Placeholder grid for services/process */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-12">
                    <div className="h-48 bg-white/[0.02] rounded-xl border border-white/[0.05]" />
                    <div className="h-48 bg-white/[0.02] rounded-xl border border-white/[0.05]" />
                </div>
            </div>

            <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
        </div>
    );
}
