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

// ─── Types ────────────────────────────────────────────────────────────────────
interface Service {
    label: string;
    desc: string;
    url: string;
    icon: React.ReactNode;
}

// ─── Service Data ─────────────────────────────────────────────────────────────
const FEATURED: Service = {
    label: "Consultancy Services",
    desc: "Our flagship offering — from HSE policy formulation and safety management system setup, to workplace hazard assessments, OHS compliance audits, emergency response planning, and incident investigation. We embed a robust culture of safety into your organisation from the ground up.",
    url: "/our-services/consultancy",
    icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-8 h-8">
            <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0119 8.414V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
};

const SERVICES: Service[] = [
    {
        label: "Environmental Sustainability",
        desc: "EIA, sustainability strategy, carbon footprint analysis, waste management consulting and environmental compliance audits.",
        url: "/our-services/environmental-sustainability",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
                <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: "Training Services",
        desc: "Impactful HSE training from officer to management level — fire safety, first aid, ISO 14001, QA/QC and specialised programmes.",
        url: "/our-services/training",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
                <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: "Commercial / Procurement",
        desc: "Supply of PPE, safety signage, fire equipment, first aid tools and security systems including CCTV and metal detectors.",
        url: "/our-services/commercial-procurement",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
                <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: "Technical Services",
        desc: "Procurement and installation of fire systems, security systems, IoT integration, and emergency evacuation planning.",
        url: "/our-services/technical",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: "Management Systems",
        desc: "Development, implementation and certification training for ISO 45001, ISO 14001, ISO 9001 and ISO 41001 management systems.",
        url: "/our-services/management-systems",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: "Facilities Management",
        desc: "Cleaning, facility safety inspections, energy efficiency audits, personnel management and general facility safety management.",
        url: "/our-services/facilities-management",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

// ─── Arrow icon ───────────────────────────────────────────────────────────────
function ArrowIcon({ size = 14 }: { size?: number }) {
    return (
        <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.2}
            style={{ width: size, height: size, flexShrink: 0 }}
        >
            <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

// ─── Featured Hero Card ───────────────────────────────────────────────────────
function FeaturedCard({ service, inView }: { service: Service; inView: boolean }) {
    const [hovered, setHovered] = useState(false);

    return (
        <NavLink
            to={service.url}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: "block",
                textDecoration: "none",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(32px)",
                transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
            }}
        >
            <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                    background: "var(--color-charcoal)",
                    padding: "48px",
                    minHeight: "280px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: hovered ? "var(--shadow-lg)" : "var(--shadow-md)",
                    transform: hovered ? "translateY(-4px)" : "translateY(0)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    cursor: "pointer",
                }}
            >
                {/* Background glow blobs */}
                <div
                    aria-hidden
                    style={{
                        position: "absolute",
                        top: "-60px",
                        right: "-60px",
                        width: "280px",
                        height: "280px",
                        borderRadius: "50%",
                        background: "var(--color-purple)",
                        opacity: hovered ? 0.22 : 0.14,
                        filter: "blur(60px)",
                        transition: "opacity 0.4s ease",
                        pointerEvents: "none",
                    }}
                />
                <div
                    aria-hidden
                    style={{
                        position: "absolute",
                        bottom: "-40px",
                        left: "30%",
                        width: "180px",
                        height: "180px",
                        borderRadius: "50%",
                        background: "var(--color-green)",
                        opacity: hovered ? 0.16 : 0.08,
                        filter: "blur(50px)",
                        transition: "opacity 0.4s ease",
                        pointerEvents: "none",
                    }}
                />

                {/* Top row — icon + featured badge */}
                <div className="relative flex items-start justify-between">
                    <div
                        style={{
                            width: "56px",
                            height: "56px",
                            borderRadius: "14px",
                            background: "rgba(139,26,140,0.25)",
                            border: "1px solid rgba(139,26,140,0.40)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--color-purple-light)",
                            transition: "background 0.3s ease",
                            ...(hovered && { background: "rgba(139,26,140,0.40)" }),
                        }}
                    >
                        {service.icon}
                    </div>

                    <span
                        style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.6rem",
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            color: "var(--color-green-bright)",
                            padding: "4px 10px",
                            borderRadius: "99px",
                            background: "rgba(52,214,121,0.12)",
                            border: "1px solid rgba(52,214,121,0.22)",
                        }}
                    >
                        Core Service
                    </span>
                </div>

                {/* Bottom — text + CTA */}
                <div className="relative mt-8">
                    <h3
                        style={{
                            fontFamily: "var(--font-display)",
                            fontWeight: 900,
                            fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                            textTransform: "uppercase",
                            letterSpacing: "-0.01em",
                            lineHeight: 1.05,
                            color: "#fff",
                            marginBottom: "14px",
                        }}
                    >
                        {service.label}
                    </h3>
                    <p
                        style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.9rem",
                            lineHeight: 1.7,
                            color: "rgba(255,255,255,0.55)",
                            marginBottom: "28px",
                            maxWidth: "560px",
                        }}
                    >
                        {service.desc}
                    </p>

                    {/* Learn More CTA */}
                    <div
                        className="inline-flex items-center gap-2"
                        style={{
                            fontFamily: "var(--font-display)",
                            fontWeight: 700,
                            fontSize: "0.82rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            color: "var(--color-green-bright)",
                            transition: "gap 0.2s ease",
                            gap: hovered ? "10px" : "8px",
                        }}
                    >
                        Learn More
                        <span
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "26px",
                                height: "26px",
                                borderRadius: "8px",
                                background: "rgba(52,214,121,0.15)",
                                border: "1px solid rgba(52,214,121,0.25)",
                                transform: hovered ? "translateX(3px)" : "translateX(0)",
                                transition: "transform 0.25s ease",
                            }}
                        >
                            <ArrowIcon size={13} />
                        </span>
                    </div>
                </div>
            </div>
        </NavLink>
    );
}

// ─── Standard Service Card ────────────────────────────────────────────────────
function ServiceCard({
    service,
    delay,
    inView,
}: {
    service: Service;
    delay: string;
    inView: boolean;
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <NavLink
            to={service.url}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: "block",
                textDecoration: "none",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.6s ease ${delay}, transform 0.6s ease ${delay}`,
            }}
        >
            <div
                className="relative rounded-2xl h-full"
                style={{
                    background: "var(--color-white)",
                    border: hovered
                        ? "1px solid var(--color-purple-light)"
                        : "1px solid var(--color-grey-light)",
                    padding: "28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    boxShadow: hovered ? "var(--shadow-md)" : "var(--shadow-sm)",
                    transform: hovered ? "translateY(-4px)" : "translateY(0)",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                    cursor: "pointer",
                    overflow: "hidden",
                }}
            >
                {/* Subtle purple tint on hover */}
                <div
                    aria-hidden
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "var(--color-purple-tint)",
                        opacity: hovered ? 1 : 0,
                        transition: "opacity 0.3s ease",
                        pointerEvents: "none",
                        borderRadius: "inherit",
                    }}
                />

                {/* Icon */}
                <div
                    style={{
                        position: "relative",
                        width: "44px",
                        height: "44px",
                        borderRadius: "12px",
                        background: hovered
                            ? "var(--color-purple)"
                            : "var(--color-purple-tint)",
                        border: "1px solid var(--color-purple-light)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: hovered ? "#fff" : "var(--color-purple)",
                        transition: "background 0.25s ease, color 0.25s ease",
                        flexShrink: 0,
                    }}
                >
                    {service.icon}
                </div>

                {/* Text */}
                <div style={{ position: "relative", flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
                    <h3
                        style={{
                            fontFamily: "var(--font-display)",
                            fontWeight: 800,
                            fontSize: "1rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.03em",
                            lineHeight: 1.2,
                            color: "var(--color-charcoal)",
                        }}
                    >
                        {service.label}
                    </h3>
                    <p
                        style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.82rem",
                            lineHeight: 1.65,
                            color: "var(--color-grey-mid)",
                            flex: 1,
                        }}
                    >
                        {service.desc}
                    </p>
                </div>

                {/* Learn More link */}
                <div
                    style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        gap: hovered ? "8px" : "6px",
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: hovered ? "var(--color-purple)" : "var(--color-grey-mid)",
                        transition: "color 0.25s ease, gap 0.2s ease",
                        paddingTop: "8px",
                        borderTop: "1px solid var(--color-grey-light)",
                    }}
                >
                    Learn More
                    <span
                        style={{
                            transform: hovered ? "translateX(3px)" : "translateX(0)",
                            transition: "transform 0.25s ease",
                            display: "inline-flex",
                        }}
                    >
                        <ArrowIcon size={12} />
                    </span>
                </div>
            </div>
        </NavLink>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ServicesSection() {
    const { ref, inView } = useInView(0.1);

    return (
        <section
            ref={ref}
            className="relative overflow-hidden"
            style={{
                background: "var(--color-off-white)",
                padding: "96px 0",
            }}
        >
            {/* ── Background geometry ── */}
            <div aria-hidden className="absolute inset-0 pointer-events-none">
                <div
                    style={{
                        position: "absolute",
                        top: "-100px",
                        left: "-100px",
                        width: "400px",
                        height: "400px",
                        borderRadius: "50%",
                        border: "1.5px solid rgba(139,26,140,0.07)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "-80px",
                        right: "-80px",
                        width: "320px",
                        height: "320px",
                        borderRadius: "50%",
                        border: "1.5px solid rgba(0,165,80,0.07)",
                    }}
                />
                {/* Green dot accent */}
                <div
                    style={{
                        position: "absolute",
                        top: "120px",
                        right: "8%",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "var(--color-green)",
                        opacity: 0.35,
                    }}
                />
                {/* Purple dot accent */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "140px",
                        left: "6%",
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "var(--color-purple)",
                        opacity: 0.3,
                    }}
                />
            </div>

            <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">

                {/* ── Section header ── */}
                <div className="mb-12">

                    {/* Eyebrow — mirrors AboutSection & TrustSection */}
                    <div
                        className="flex items-center gap-2 mb-4"
                        style={{
                            opacity: inView ? 1 : 0,
                            transform: inView ? "translateY(0)" : "translateY(16px)",
                            transition: "opacity 0.6s ease 0s, transform 0.6s ease 0s",
                        }}
                    >
                        <div
                            style={{
                                width: "28px",
                                height: "2px",
                                borderRadius: "2px",
                                background: "var(--color-green)",
                            }}
                        />
                        <span
                            style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.65rem",
                                letterSpacing: "0.22em",
                                textTransform: "uppercase",
                                color: "var(--color-green)",
                            }}
                        >
                            What We Do
                        </span>
                    </div>

                    {/* Two-line headline — mirrors AboutSection & TrustSection */}
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <div>
                            <h2
                                style={{
                                    opacity: inView ? 1 : 0,
                                    transform: inView ? "translateY(0)" : "translateY(20px)",
                                    transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
                                    fontFamily: "var(--font-display)",
                                    fontWeight: 900,
                                    fontSize: "clamp(2rem, 3.5vw, 3rem)",
                                    textTransform: "uppercase",
                                    letterSpacing: "-0.01em",
                                    lineHeight: 1,
                                    color: "var(--color-charcoal)",
                                    marginBottom: "8px",
                                }}
                            >
                                Par Excellence
                            </h2>
                            <h2
                                style={{
                                    opacity: inView ? 1 : 0,
                                    transform: inView ? "translateY(0)" : "translateY(20px)",
                                    transition: "opacity 0.7s ease 0.18s, transform 0.7s ease 0.18s",
                                    fontFamily: "var(--font-display)",
                                    fontWeight: 900,
                                    fontSize: "clamp(2rem, 3.5vw, 3rem)",
                                    textTransform: "uppercase",
                                    letterSpacing: "-0.01em",
                                    lineHeight: 1,
                                    color: "var(--color-purple)",
                                    marginBottom: 0,
                                }}
                            >
                                HSE Solutions.
                            </h2>
                        </div>

                        {/* View all services link */}
                        <NavLink
                            to="/our-services"
                            className="inline-flex items-center gap-2 shrink-0"
                            style={{
                                opacity: inView ? 1 : 0,
                                transform: inView ? "translateY(0)" : "translateY(16px)",
                                transition: "opacity 0.6s ease 0.25s, transform 0.6s ease 0.25s",
                                fontFamily: "var(--font-display)",
                                fontWeight: 700,
                                fontSize: "0.8rem",
                                textTransform: "uppercase",
                                letterSpacing: "0.1em",
                                color: "var(--color-grey-mid)",
                                textDecoration: "none",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-purple)")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-grey-mid)")}
                        >
                            View All Services
                            <ArrowIcon size={13} />
                        </NavLink>
                    </div>
                </div>

                {/* ── Featured hero card ── */}
                <div className="mb-6">
                    <FeaturedCard service={FEATURED} inView={inView} />
                </div>

                {/* ── 3 × 2 grid ── */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    {SERVICES.map((svc, i) => (
                        <ServiceCard
                            key={svc.label}
                            service={svc}
                            inView={inView}
                            delay={`${0.38 + i * 0.08}s`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}