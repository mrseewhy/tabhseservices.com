import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

// ─── Hook: triggers once when element enters viewport ──────────────────────────
function useInView(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return { ref, inView };
}

// ─── Reasons data ─────────────────────────────────────────────────────────────
const REASONS = [
    {
        id: "prime",
        title: "We Are PRIME",
        subtitle: "Partnership · Responsibility · Innovation · Mastery · Evolution",
        body: "Every engagement is guided by our five core values. We don't just deliver a service — we embed ourselves as a long-term partner committed to your organisation's safety culture and growth.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="w-5 h-5">
                <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: "certified",
        title: "Experienced & Certified Team",
        subtitle: "ISO 45001 · ISO 14001 · ISO 9001",
        body: "Our consultants and trainers are seasoned professionals with hands-on industry experience and internationally recognised certifications — bringing practical, proven expertise to every project.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="w-5 h-5">
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: "tailored",
        title: "Tailored HSE Solutions",
        subtitle: "Built around your operations",
        body: "We take time to understand your industry, risks, and goals before designing solutions. No generic templates — every policy, training programme, and audit is customised to your specific context.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="w-5 h-5">
                <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: "end-to-end",
        title: "End-to-End Service Offering",
        subtitle: "Consultancy to procurement to installation",
        body: "From policy formulation and HSE training to fire system installation and facilities management — we are a single, trusted partner covering every dimension of your health, safety, and environmental needs.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="w-5 h-5">
                <path d="M4 6h16M4 10h16M4 14h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: "trusted",
        title: "Trusted by Leading Organisations",
        subtitle: "Greenpeg · C Power · Spazio Ideale · FilmoRE",
        body: "A growing portfolio of satisfied clients across industries is testament to our commitment to excellence. We earn trust by delivering results — consistently, transparently, and on time.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="w-5 h-5">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

// ─── Single Reason Row ────────────────────────────────────────────────────────
function ReasonItem({
    reason,
    index,
    inView,
    active,
    onClick,
    isLast,
}: {
    reason: typeof REASONS[0];
    index: number;
    inView: boolean;
    active: boolean;
    onClick: () => void;
    isLast: boolean;
}) {
    return (
        <button
            onClick={onClick}
            className="w-full text-left bg-transparent border-none p-0 cursor-pointer"
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : "translateX(-24px)",
                transition: `opacity 0.6s ease ${0.2 + index * 0.09}s, transform 0.6s ease ${0.2 + index * 0.09}s`,
            }}
        >
            <div
                className={`flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 ${active
                    ? "bg-white shadow-md"
                    : "hover:bg-white/60"
                    }`}
                style={{
                    border: active
                        ? "1px solid var(--color-purple-light)"
                        : "1px solid transparent",
                }}
            >
                {/* Icon + connector column */}
                <div className="flex flex-col items-center shrink-0">
                    <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${active ? "text-white" : "text-[var(--color-purple)]"
                            }`}
                        style={{
                            background: active ? "var(--color-purple)" : "var(--color-purple-tint)",
                            border: "1px solid var(--color-purple-light)",
                        }}
                    >
                        {reason.icon}
                    </div>

                    {/* Connector line */}
                    {!isLast && (
                        <div
                            className="w-0.5 rounded-full mt-1.5 transition-all duration-300"
                            style={{
                                height: "24px",
                                background: active
                                    ? "var(--color-purple-light)"
                                    : "var(--color-grey-light)",
                            }}
                        />
                    )}
                </div>

                {/* Text */}
                <div className="flex-1 pt-0.5 min-w-0">
                    <p
                        className="font-display font-extrabold uppercase text-sm tracking-wide leading-tight transition-colors duration-300"
                        style={{
                            color: active ? "var(--color-purple)" : "var(--color-charcoal)",
                        }}
                    >
                        {reason.title}
                    </p>
                    <p
                        className="font-mono uppercase mt-0.5 leading-tight"
                        style={{
                            fontSize: "0.6rem",
                            letterSpacing: "0.12em",
                            color: "var(--color-green)",
                        }}
                    >
                        {reason.subtitle}
                    </p>

                    {/* Expandable body */}
                    <div
                        className="overflow-hidden"
                        style={{
                            maxHeight: active ? "150px" : "0px",
                            opacity: active ? 1 : 0,
                            marginTop: active ? "10px" : "0",
                            transition: "max-height 0.4s ease, opacity 0.35s ease, margin-top 0.3s ease",
                        }}
                    >
                        <p
                            className="font-body text-sm leading-relaxed"
                            style={{ color: "var(--color-grey-dark)" }}
                        >
                            {reason.body}
                        </p>
                    </div>
                </div>

                {/* Chevron */}
                <div
                    className="shrink-0 mt-2.5 transition-all duration-300"
                    style={{
                        color: active ? "var(--color-purple)" : "var(--color-grey-light)",
                        transform: active ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                >
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2.2} className="w-3.5 h-3.5">
                        <path d="M3 6l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </button>
    );
}

// ─── Right Visual Panel ───────────────────────────────────────────────────────
function VisualPanel({
    activeReason,
    inView,
}: {
    activeReason: typeof REASONS[0];
    inView: boolean;
}) {
    return (
        <div
            className="relative lg:sticky lg:top-24"
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : "translateX(36px)",
                transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
            }}
        >
            {/* Main image card */}
            <div
                className="relative w-full rounded-2xl overflow-hidden"
                style={{
                    aspectRatio: "4 / 5",
                    background: "var(--color-charcoal)",
                    boxShadow: "var(--shadow-lg)",
                }}
            >
                <img
                    src="/img/why.jpg"
                    alt="TAB HSE Services professionals at work"
                    className="absolute inset-0 w-full h-full object-cover opacity-45"
                />

                {/* Purple glow */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse at top right, rgba(139,26,140,0.45) 0%, transparent 65%)",
                    }}
                />

                {/* Green glow */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse at bottom left, rgba(0,165,80,0.30) 0%, transparent 60%)",
                    }}
                />

                {/* Bottom gradient */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "linear-gradient(to top, rgba(26,26,46,0.92) 0%, rgba(26,26,46,0.3) 50%, transparent 100%)",
                    }}
                />

                {/* Purple-to-green accent bar — left edge */}
                <div
                    className="absolute top-8 left-0 w-1 rounded-r-sm"
                    style={{
                        height: "80px",
                        background:
                            "linear-gradient(to bottom, var(--color-purple), var(--color-green))",
                    }}
                />

                {/* Active reason card + progress dots */}
                <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                    <div
                        key={activeReason.id}
                        className="rounded-2xl p-4 mb-3"
                        style={{
                            background: "rgba(255,255,255,0.07)",
                            backdropFilter: "blur(14px)",
                            border: "1px solid rgba(255,255,255,0.14)",
                            animation: "fadeSlideUp 0.4s ease forwards",
                        }}
                    >
                        <div className="flex items-center gap-2.5 mb-2">
                            <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-white"
                                style={{ background: "var(--color-purple)" }}
                            >
                                {activeReason.icon}
                            </div>
                            <p
                                className="font-display font-extrabold uppercase text-white leading-tight"
                                style={{ fontSize: "0.88rem", letterSpacing: "0.04em" }}
                            >
                                {activeReason.title}
                            </p>
                        </div>
                        <p
                            className="font-body text-xs leading-relaxed"
                            style={{ color: "rgba(255,255,255,0.6)" }}
                        >
                            {activeReason.body}
                        </p>
                    </div>

                    {/* Progress dots */}
                    <div className="flex items-center gap-1.5 justify-center">
                        {REASONS.map((r) => (
                            <div
                                key={r.id}
                                className="h-0.5 rounded-full transition-all duration-300"
                                style={{
                                    width: r.id === activeReason.id ? "24px" : "6px",
                                    background:
                                        r.id === activeReason.id
                                            ? "var(--color-green)"
                                            : "rgba(255,255,255,0.25)",
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Floating stat card — right-aligned, safe on mobile */}
            <div
                className="absolute bottom-12 right-0 lg:-right-6 bg-white rounded-2xl px-5 py-4 min-w-[140px]"
                style={{
                    border: "1px solid var(--color-grey-light)",
                    boxShadow: "var(--shadow-md)",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(16px)",
                    transition: "opacity 0.6s ease 0.6s, transform 0.6s ease 0.6s",
                }}
            >
                <p
                    className="font-display font-black leading-none"
                    style={{ fontSize: "1.8rem", color: "var(--color-purple)" }}
                >
                    100%
                </p>
                <p
                    className="font-body uppercase mt-1"
                    style={{
                        fontSize: "0.68rem",
                        color: "var(--color-grey-mid)",
                        letterSpacing: "0.1em",
                    }}
                >
                    Client Focused
                </p>
            </div>
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function WhyUsSection() {
    const { ref, inView } = useInView(0.1);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section
            ref={ref}
            className="relative overflow-hidden py-20 lg:py-24"
            style={{ background: "var(--color-off-white)" }}
        >
            {/* Keyframe for active card animation */}
            <style>{`
                @keyframes fadeSlideUp {
                    from { opacity: 0; transform: translateY(10px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>

            {/* ── Background geometry ── */}
            <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute -top-20 -right-20 w-80 h-80 rounded-full"
                    style={{ border: "1.5px solid rgba(139,26,140,0.07)" }}
                />
                <div
                    className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full"
                    style={{ border: "1.5px solid rgba(0,165,80,0.07)" }}
                />
                <div
                    className="absolute top-40 left-[7%] w-2 h-2 rounded-full opacity-35"
                    style={{ background: "var(--color-green)" }}
                />
                <div
                    className="absolute bottom-32 right-[6%] w-1.5 h-1.5 rounded-full opacity-30"
                    style={{ background: "var(--color-purple)" }}
                />
            </div>

            <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">

                {/* ── Section header ── */}
                <div className="mb-10">

                    {/* Eyebrow */}
                    <div
                        className="flex items-center gap-2 mb-4"
                        style={{
                            opacity: inView ? 1 : 0,
                            transform: inView ? "translateY(0)" : "translateY(16px)",
                            transition: "opacity 0.6s ease 0s, transform 0.6s ease 0s",
                        }}
                    >
                        <div
                            className="w-7 h-0.5 rounded-full"
                            style={{ background: "var(--color-green)" }}
                        />
                        <span
                            className="font-mono uppercase"
                            style={{
                                fontSize: "0.65rem",
                                letterSpacing: "0.22em",
                                color: "var(--color-green)",
                            }}
                        >
                            Why Choose Us
                        </span>
                    </div>

                    {/* Two-line headline */}
                    <h2
                        className="font-display font-black uppercase leading-none mb-2"
                        style={{
                            fontSize: "clamp(2rem, 3.5vw, 3rem)",
                            letterSpacing: "-0.01em",
                            color: "var(--color-charcoal)",
                            opacity: inView ? 1 : 0,
                            transform: inView ? "translateY(0)" : "translateY(20px)",
                            transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
                        }}
                    >
                        We Don't Just Work
                    </h2>
                    <h2
                        className="font-display font-black uppercase leading-none"
                        style={{
                            fontSize: "clamp(2rem, 3.5vw, 3rem)",
                            letterSpacing: "-0.01em",
                            color: "var(--color-purple)",
                            opacity: inView ? 1 : 0,
                            transform: inView ? "translateY(0)" : "translateY(20px)",
                            transition: "opacity 0.7s ease 0.18s, transform 0.7s ease 0.18s",
                        }}
                    >
                        For You — We Work With You.
                    </h2>
                </div>

                {/* ── 2-column layout ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                    {/* LEFT — Reasons list */}
                    <div className="flex flex-col gap-1">
                        {REASONS.map((reason, i) => (
                            <ReasonItem
                                key={reason.id}
                                reason={reason}
                                index={i}
                                inView={inView}
                                active={activeIndex === i}
                                onClick={() => setActiveIndex(i)}
                                isLast={i === REASONS.length - 1}
                            />
                        ))}

                        {/* ── CTA ── */}
                        <div
                            className="mt-8 flex flex-wrap items-center gap-4"
                            style={{
                                opacity: inView ? 1 : 0,
                                transform: inView ? "translateY(0)" : "translateY(16px)",
                                transition: "opacity 0.6s ease 0.75s, transform 0.6s ease 0.75s",
                            }}
                        >
                            <NavLink
                                to="/contact-us"
                                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-white font-display font-bold uppercase text-sm transition-all duration-200 active:scale-95"
                                style={{
                                    letterSpacing: "0.12em",
                                    background: "var(--color-green)",
                                    boxShadow: "var(--shadow-btn)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-2px)";
                                    e.currentTarget.style.boxShadow = "var(--shadow-lg)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "var(--shadow-btn)";
                                }}
                            >
                                Start a Conversation
                                <span
                                    className="inline-flex items-center justify-center w-6 h-6 rounded-lg"
                                    style={{ background: "rgba(255,255,255,0.18)" }}
                                >
                                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2.2} className="w-3 h-3">
                                        <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </NavLink>

                            <a
                                href="tel:+2348127107336"
                                className="inline-flex items-center gap-1.5 font-mono transition-colors duration-200"
                                style={{
                                    fontSize: "0.68rem",
                                    letterSpacing: "0.08em",
                                    color: "var(--color-grey-mid)",
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.color = "var(--color-purple)")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.color = "var(--color-grey-mid)")
                                }
                            >
                                <svg
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-3.5 h-3.5 shrink-0"
                                    style={{ color: "var(--color-green)" }}
                                >
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                +234 812 710 7336
                            </a>
                        </div>
                    </div>

                    {/* RIGHT — Visual panel — visible on ALL screen sizes */}
                    <div className="relative">
                        <VisualPanel
                            activeReason={REASONS[activeIndex]}
                            inView={inView}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}