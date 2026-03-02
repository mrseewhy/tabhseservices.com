
import { useEffect, useState, type JSX } from "react";
import { Link } from "react-router-dom";

// ─── Stat Pill ─────────────────────────────────────────────────────────────────

interface StatPillProps {
    value: string;
    label: string;
    accent?: "green" | "purple";
}

function StatPill({ value, label, accent = "green" }: StatPillProps) {
    return (
        <div
            className="flex flex-col items-center justify-center min-w-[100px] rounded-xl px-5 py-3.5
                backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5"
            style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
            }}
        >
            <span
                className="font-display text-[1.65rem] font-black leading-none tracking-[-0.02em]"
                style={{
                    color: accent === "green"
                        ? "var(--color-green-bright)"   // #34D679
                        : "var(--color-purple-light)",  // #D499D4
                }}
            >
                {value}
            </span>
            <span className="font-mono text-[0.58rem] uppercase tracking-[0.13em] text-white/50 mt-1 text-center leading-[1.4] whitespace-pre-line">
                {label}
            </span>
        </div>
    );
}

// ─── Trust Badge ───────────────────────────────────────────────────────────────

interface TrustBadgeProps {
    text: string;
    variant?: "green" | "purple";
}

function TrustBadge({ text, variant = "green" }: TrustBadgeProps) {
    const isGreen = variant === "green";
    return (
        <div
            className="flex items-center gap-2 rounded-full px-4 py-1.5 backdrop-blur-sm"
            style={{
                background: isGreen
                    ? "rgba(0,165,80,0.20)"          // green tint
                    : "rgba(139,26,140,0.22)",        // purple tint
                border: isGreen
                    ? "1px solid rgba(52,214,121,0.30)"
                    : "1px solid rgba(212,153,212,0.30)",
            }}
        >
            <svg viewBox="0 0 12 12" className="w-3 h-3 shrink-0">
                <path
                    d="M2 6l3 3 5-5"
                    stroke={isGreen ? "#34D679" : "#D499D4"}
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-white/85">
                {text}
            </span>
        </div>
    );
}

// ─── Decorative vertical rule ──────────────────────────────────────────────────

function BrandRule() {
    return (
        <div className="hidden lg:flex flex-col items-center gap-0 absolute right-[max(2rem,calc((100vw-1280px)/2+2rem))] top-1/2 -translate-y-1/2 z-10">
            <div
                className="w-px h-28 rounded-full"
                style={{ background: "linear-gradient(to bottom, transparent, rgba(139,26,140,0.55))" }}
            />
            <div
                className="w-2 h-2 rounded-full my-1"
                style={{ background: "var(--color-purple-light)" }}
            />
            <div
                className="w-px h-28 rounded-full"
                style={{ background: "linear-gradient(to bottom, rgba(0,165,80,0.55), transparent)" }}
            />
        </div>
    );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────

export default function Hero(): JSX.Element {
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 120);
        return () => clearTimeout(t);
    }, []);

    const fadeUp = (delay: number): React.CSSProperties => ({
        transition: "opacity 0.75s ease, transform 0.75s ease",
        transitionDelay: `${delay}ms`,
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(22px)",
    });

    return (
        <section className="relative flex items-center overflow-hidden min-h-screen">

            {/* ── Background image ── */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/img/hero-bg3.jpg"
                    alt="HSE worker in industrial facility"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* 
                    PRIMARY OVERLAY — deep charcoal-black, heaviest on the left where
                    content lives, fades out to let the image show on the right.
                    No purple/green in the gradient — brand colors are reserved for
                    text/UI elements so they actually stand out.
                */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: [
                            "linear-gradient(105deg,",
                            "  rgba(10,10,18,0.95) 0%,",
                            "  rgba(10,10,18,0.82) 35%,",
                            "  rgba(10,10,18,0.45) 58%,",
                            "  rgba(10,10,18,0.10) 78%,",
                            "  transparent 100%",
                            ")",
                        ].join(""),
                    }}
                />

                {/* 
                    BOTTOM VIGNETTE — pulls the stat pills off the raw image edge.
                */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-[220px]"
                    style={{
                        background:
                            "linear-gradient(to top, rgba(10,10,18,0.80) 0%, rgba(10,10,18,0.40) 55%, transparent 100%)",
                    }}
                />

                {/* 
                    SUBTLE LEFT EDGE brand-purple glow — very low opacity so it adds
                    warmth without fighting the image. Purely atmospheric.
                */}
                <div
                    className="absolute inset-y-0 left-0 w-[520px]"
                    style={{
                        background:
                            "linear-gradient(to right, rgba(139,26,140,0.12) 0%, transparent 100%)",
                        pointerEvents: "none",
                    }}
                />
            </div>

            {/* ── Decorative vertical rule (desktop) ── */}
            <BrandRule />

            {/* ── Content ── */}
            <div className="relative z-10 w-full">
                <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8 py-20 pb-24">
                    <div className="max-w-[680px]">

                        {/* Trust badges */}
                        <div className="flex flex-wrap gap-2 mb-8" style={fadeUp(0)}>
                            <TrustBadge text="ISO Certified Standards" variant="green" />
                            <TrustBadge text="Regulatory Compliance" variant="purple" />
                        </div>

                        {/* 
                            HEADLINE
                            Line 1: plain white — neutral anchor
                            Line 2: brand green — the aspirational word "Healthier"
                            Line 3: plain white — closes the thought
                            The green is the only color in the headline, making it
                            immediately read as the brand emphasis.
                        */}
                        <h1
                            style={{
                                ...fadeUp(100),
                                lineHeight: 0.97,
                                letterSpacing: "-0.02em",
                                fontSize: "clamp(2.8rem, 5.8vw, 5rem)",
                            }}
                            className="font-display font-black text-white"
                        >
                            Building Safer,
                            <br />
                            <span
                                className="relative inline-block"
                                style={{ color: "var(--color-green-bright)" }}
                            >
                                Healthier
                                {/* Underline accent in brand purple — subtle contrast */}
                                <span
                                    className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full"
                                    style={{
                                        background: "linear-gradient(to right, var(--color-purple-light), transparent)",
                                        opacity: 0.55,
                                    }}
                                />
                            </span>
                            <br />
                            <span style={{ color: "rgba(255,255,255,0.88)" }}>Workplaces.</span>
                        </h1>

                        {/* Sub-headline */}
                        <p
                            style={{
                                ...fadeUp(220),
                                fontSize: "clamp(0.95rem, 1.7vw, 1.08rem)",
                            }}
                            className="mt-6 max-w-[480px] text-white/55 leading-[1.8] font-body"
                        >
                            TAB HSE Services is a premier consultancy partner helping organisations
                            maintain compliance, protect employees, and embed a culture of
                            environmental responsibility.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-3 mt-9" style={fadeUp(320)}>

                            {/* Primary — brand green */}
                            <Link
                                to="our-services"
                                className="group flex items-center gap-2.5 rounded-lg px-7 py-3.5
                                    text-white font-display font-bold text-[0.86rem]
                                    uppercase tracking-[0.12em]
                                    transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
                                style={{
                                    background: "var(--color-green)",
                                    boxShadow: "0 6px 24px rgba(0,165,80,0.38)",
                                }}
                            >
                                Explore Our Services
                                <svg
                                    viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2.2}
                                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                                >
                                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>

                            {/* Secondary — ghost with purple tint on hover */}
                            <Link
                                to="contact-us"
                                className="group flex items-center gap-2 rounded-lg px-7 py-3.5
                                    text-white/85 font-display font-bold text-[0.86rem]
                                    uppercase tracking-[0.12em]
                                    backdrop-blur-md transition-all duration-200
                                    hover:text-white hover:border-[rgba(212,153,212,0.50)]
                                    active:scale-[0.98]"
                                style={{
                                    background: "rgba(255,255,255,0.07)",
                                    border: "1px solid rgba(255,255,255,0.18)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "rgba(139,26,140,0.18)";
                                    e.currentTarget.style.borderColor = "rgba(212,153,212,0.45)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                                }}
                            >
                                Get a Consultation
                            </Link>
                        </div>

                        {/* 
                            STAT PILLS
                            Alternating green/purple accents so both brand colors
                            appear at equal weight in the same row.
                        */}
                        <div className="flex flex-wrap gap-3 mt-11" style={fadeUp(440)}>
                            <StatPill value="RC" label={"9122058\nRegistered"} accent="purple" />
                            <StatPill value="ISO" label={"Certified\nMethods"} accent="green" />
                            <StatPill value="100%" label={"Compliance\nFocused"} accent="purple" />
                            <StatPill value="7+" label={"Service\nAreas"} accent="green" />
                        </div>

                    </div>
                </div>
            </div>



        </section>
    );
}