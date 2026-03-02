import type { JSX } from "react";

export default function PreFooterCTA(): JSX.Element {
    return (
        <section
            className="relative py-28"
            style={{
                background: "var(--color-surface-light)",
            }}
        >
            {/* Subtle ambient background wash */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(circle at 15% 20%, rgba(139,26,140,0.08), transparent 50%), radial-gradient(circle at 85% 80%, rgba(0,165,80,0.08), transparent 50%)",
                }}
            />

            <div className="relative mx-auto w-full max-w-[1200px] px-6 lg:px-8">

                <div
                    className="rounded-3xl px-10 py-16 lg:px-16 lg:py-20"
                    style={{
                        background: "rgba(255,255,255,0.85)",
                        border: "1px solid rgba(0,0,0,0.06)",
                        boxShadow: "0 40px 80px rgba(0,0,0,0.06)",
                        backdropFilter: "blur(6px)",
                    }}
                >
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left Side — Message */}
                        <div>
                            <div
                                className="font-mono uppercase tracking-[0.14em] text-[0.65rem] mb-6"
                                style={{ color: "var(--color-purple-light)" }}
                            >
                                Partner With Confidence
                            </div>

                            <h2
                                className="font-display font-black"
                                style={{
                                    fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
                                    lineHeight: 1.05,
                                    letterSpacing: "-0.02em",
                                    color: "var(--color-text-primary)",
                                }}
                            >
                                Ready to Elevate Your{" "}
                                <span style={{ color: "var(--color-green-bright)" }}>
                                    Safety Standards
                                </span>
                                ?
                            </h2>

                            <p
                                className="mt-6 max-w-[520px] leading-[1.8]"
                                style={{ color: "var(--color-text-muted)" }}
                            >
                                Strengthen compliance, protect your workforce,
                                and build systems that drive measurable safety
                                performance across your organisation.
                            </p>
                        </div>

                        {/* Right Side — Action Panel */}
                        <div
                            className="rounded-2xl p-8"
                            style={{
                                background: "rgba(255,255,255,0.95)",
                                border: "1px solid rgba(0,0,0,0.06)",
                            }}
                        >
                            <div className="space-y-6">

                                <a
                                    href="#contact"
                                    className="group w-full flex items-center justify-center gap-2.5 rounded-lg px-8 py-3.5
                                        text-white font-display font-bold text-[0.85rem]
                                        uppercase tracking-[0.12em]
                                        transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
                                    style={{
                                        background: "var(--color-green)",
                                        boxShadow:
                                            "0 12px 30px rgba(0,165,80,0.25)",
                                    }}
                                >
                                    Get Started
                                    <svg
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2.2}
                                        className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                                    >
                                        <path
                                            d="M3 8h10M9 4l4 4-4 4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>

                                <a
                                    href="#services"
                                    className="w-full flex items-center justify-center rounded-lg px-8 py-3.5
                                        font-display font-bold text-[0.85rem]
                                        uppercase tracking-[0.12em]
                                        transition-all duration-200"
                                    style={{
                                        border: "1px solid var(--color-green)",
                                        color: "var(--color-green)",
                                        background: "transparent",
                                    }}
                                >
                                    View Services
                                </a>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}