import type { JSX } from "react";
import Services from "../pages/Services";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    eyebrow?: string;
}

export default function PageHeader({
    title,
    subtitle,
    eyebrow,
}: PageHeaderProps): JSX.Element {
    return (
        <section className="relative overflow-hidden pt-32 pb-20">

            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to bottom, rgba(10,10,18,0.96) 0%, rgba(10,10,18,0.92) 60%, rgba(10,10,18,0.88) 100%)",
                    }}
                />

                {/* Subtle purple glow (left atmospheric edge) */}
                <div
                    className="absolute inset-y-0 left-0 w-[420px]"
                    style={{
                        background:
                            "linear-gradient(to right, rgba(139,26,140,0.10) 0%, transparent 100%)",
                        pointerEvents: "none",
                    }}
                />
            </div>

            <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8">
                <div className="max-w-[760px]">

                    {eyebrow && (
                        <div
                            className="font-mono uppercase tracking-[0.14em] text-[0.65rem] mb-5"
                            style={{ color: "var(--color-green-bright)" }}
                        >
                            {eyebrow}
                        </div>
                    )}

                    <h1
                        className="font-display font-black text-white"
                        style={{
                            fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)",
                            lineHeight: 1.05,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        {title}
                        <span
                            className="block h-[3px] mt-4 rounded-full w-20"
                            style={{
                                background:
                                    "linear-gradient(to right, var(--color-green-bright), var(--color-purple-light))",
                            }}
                        />
                    </h1>

                    {subtitle && (
                        <p className="mt-6 max-w-[560px] text-white/60 leading-[1.8] font-body">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}

"Consultancy Services"
"Enviromental Sustainability Services"
"Training Services"
"Commercial / Procurement Services"
"Technical Services"
"Management Systems Services"
"Facilities Management Services"

