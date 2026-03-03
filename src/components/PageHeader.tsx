// import type { JSX } from "react";
// import Services from "../pages/Services";

// interface PageHeaderProps {
//     title: string;
//     subtitle?: string;
//     eyebrow?: string;
// }

// export default function PageHeader({
//     title,
//     subtitle,
//     eyebrow,
// }: PageHeaderProps): JSX.Element {
//     return (
//         <section className="relative overflow-hidden pt-32 pb-20">

//             {/* Background */}
//             <div className="absolute inset-0 -z-10">
//                 <div
//                     className="absolute inset-0"
//                     style={{
//                         background:
//                             "linear-gradient(to bottom, rgba(10,10,18,0.96) 0%, rgba(10,10,18,0.92) 60%, rgba(10,10,18,0.88) 100%)",
//                     }}
//                 />

//                 {/* Subtle purple glow (left atmospheric edge) */}
//                 <div
//                     className="absolute inset-y-0 left-0 w-[420px]"
//                     style={{
//                         background:
//                             "linear-gradient(to right, rgba(139,26,140,0.10) 0%, transparent 100%)",
//                         pointerEvents: "none",
//                     }}
//                 />
//             </div>

//             <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8">
//                 <div className="max-w-[760px]">

//                     {eyebrow && (
//                         <div
//                             className="font-mono uppercase tracking-[0.14em] text-[0.65rem] mb-5"
//                             style={{ color: "var(--color-green-bright)" }}
//                         >
//                             {eyebrow}
//                         </div>
//                     )}

//                     <h1
//                         className="font-display font-black text-white"
//                         style={{
//                             fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)",
//                             lineHeight: 1.05,
//                             letterSpacing: "-0.02em",
//                         }}
//                     >
//                         {title}
//                         <span
//                             className="block h-[3px] mt-4 rounded-full w-20"
//                             style={{
//                                 background:
//                                     "linear-gradient(to right, var(--color-green-bright), var(--color-purple-light))",
//                             }}
//                         />
//                     </h1>

//                     {subtitle && (
//                         <p className="mt-6 max-w-[560px] text-white/60 leading-[1.8] font-body">
//                             {subtitle}
//                         </p>
//                     )}
//                 </div>
//             </div>
//         </section>
//     );
// }

// "Consultancy Services"
// "Enviromental Sustainability Services"
// "Training Services"
// "Commercial / Procurement Services"
// "Technical Services"
// "Management Systems Services"
// "Facilities Management Services"



import type { JSX } from "react";
import { Link, useLocation } from "react-router-dom";

// ─── Types ────────────────────────────────────────────────────────────────────
interface PageHeaderProps {
    title: string;
    subtitle?: string;
    eyebrow?: string;
    // Optional: override the auto-generated breadcrumb trail
    breadcrumbs?: { label: string; href?: string }[];
}

// // ─── Breadcrumb auto-builder ──────────────────────────────────────────────────
// function useBreadcrumbs(override?: { label: string; href?: string }[]) {
//     const location = useLocation();

//     if (override) return override;

//     const segments = location.pathname.split("/").filter(Boolean);
//     const crumbs = [{ label: "Home", href: "/" }];

//     segments.forEach((seg, i) => {
//         const label = seg
//             .replace(/-/g, " ")
//             .replace(/\b\w/g, (c) => c.toUpperCase());
//         const href = "/" + segments.slice(0, i + 1).join("/");
//         crumbs.push({ label, href: i < segments.length - 1 ? href : undefined });
//     });

//     return crumbs;
// }


type Crumb = {
    label: string;
    href?: string;          // now optional
};

function useBreadcrumbs(override?: Crumb[]) {
    const location = useLocation();

    if (override) return override;

    const segments = location.pathname.split("/").filter(Boolean);
    const crumbs: Crumb[] = [{ label: "Home", href: "/" }];

    segments.forEach((seg, i) => {
        const label = seg
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());

        const path = "/" + segments.slice(0, i + 1).join("/");

        // Only add href if NOT the last segment
        crumbs.push({
            label,
            ...(i < segments.length - 1 ? { href: path } : {}),
        });
    });

    return crumbs;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function PageHeader({
    title,
    subtitle,
    eyebrow,
    breadcrumbs: breadcrumbOverride,
}: PageHeaderProps): JSX.Element {
    const breadcrumbs = useBreadcrumbs(breadcrumbOverride);

    return (
        <section
            className="relative overflow-hidden"
            style={{
                background: "linear-gradient(to bottom, #0A0A12 0%, #110A1E 60%, #1A1A2E 100%)",
                paddingTop: "80px",
                paddingBottom: "72px",
            }}
        >
            {/* ── Keyframe ── */}
            <style>{`
                @keyframes phMagentaPulse {
                    0%, 100% { opacity: 0.16; }
                    50%       { opacity: 0.28; }
                }
                @keyframes phUnderlineGrow {
                    from { width: 0; }
                    to   { width: 80px; }
                }
            `}</style>

            {/* ══════════════════════════════
                BACKGROUND LAYERS
            ══════════════════════════════ */}

            {/* Magenta glow — top left, matches hero */}
            <div
                aria-hidden
                className="absolute pointer-events-none"
                style={{
                    top: "-60px",
                    left: "-60px",
                    width: "380px",
                    height: "380px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(200,30,160,0.18) 0%, transparent 65%)",
                    animation: "phMagentaPulse 5s ease-in-out infinite",
                }}
            />

            {/* Green glow — bottom right */}
            <div
                aria-hidden
                className="absolute pointer-events-none"
                style={{
                    bottom: "-40px",
                    right: "5%",
                    width: "280px",
                    height: "280px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(0,165,80,0.10) 0%, transparent 65%)",
                }}
            />

            {/* Faint concentric rings — top right */}
            <div
                aria-hidden
                className="absolute -top-16 -right-16 w-80 h-80 rounded-full pointer-events-none"
                style={{ border: "1px solid rgba(255,255,255,0.04)" }}
            />
            <div
                aria-hidden
                className="absolute -top-4 right-4 w-52 h-52 rounded-full pointer-events-none"
                style={{ border: "1px solid rgba(255,255,255,0.03)" }}
            />

            {/* Magenta corner bracket — top left */}
            <div
                aria-hidden
                className="absolute pointer-events-none"
                style={{
                    top: "24px",
                    left: "24px",
                    width: "20px",
                    height: "20px",
                    borderTop: "2px solid #C81EA0",
                    borderLeft: "2px solid #C81EA0",
                    opacity: 0.6,
                }}
            />

            {/* Green corner bracket — bottom right of content area */}
            <div
                aria-hidden
                className="absolute pointer-events-none"
                style={{
                    bottom: "24px",
                    right: "24px",
                    width: "16px",
                    height: "16px",
                    borderBottom: "2px solid var(--color-green)",
                    borderRight: "2px solid var(--color-green)",
                    opacity: 0.45,
                }}
            />

            {/* Horizontal hairline — full width, subtle */}
            <div
                aria-hidden
                className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
                style={{
                    background:
                        "linear-gradient(to right, transparent 0%, rgba(200,30,160,0.35) 25%, rgba(0,165,80,0.35) 75%, transparent 100%)",
                }}
            />

            {/* ══════════════════════════════
                CONTENT
            ══════════════════════════════ */}
            <div className="relative mx-auto w-full max-w-[1280px] px-5 lg:px-8">

                {/* Breadcrumbs */}
                {breadcrumbs.length > 1 && (
                    <nav
                        aria-label="Breadcrumb"
                        className="flex items-center gap-1.5 mb-6 flex-wrap"
                    >
                        {breadcrumbs.map((crumb, i) => (
                            <span key={i} className="flex items-center gap-1.5">
                                {crumb.href ? (
                                    <Link
                                        to={crumb.href}
                                        className="font-mono uppercase transition-colors duration-200"
                                        style={{
                                            fontSize: "0.58rem",
                                            letterSpacing: "0.16em",
                                            color: "rgba(255,255,255,0.38)",
                                            textDecoration: "none",
                                        }}
                                        onMouseEnter={(e) =>
                                            (e.currentTarget.style.color = "var(--color-green)")
                                        }
                                        onMouseLeave={(e) =>
                                            (e.currentTarget.style.color = "rgba(255,255,255,0.38)")
                                        }
                                    >
                                        {crumb.label}
                                    </Link>
                                ) : (
                                    <span
                                        className="font-mono uppercase"
                                        style={{
                                            fontSize: "0.58rem",
                                            letterSpacing: "0.16em",
                                            color: "var(--color-green)",
                                        }}
                                    >
                                        {crumb.label}
                                    </span>
                                )}

                                {/* Separator — not after last item */}
                                {i < breadcrumbs.length - 1 && (
                                    <svg
                                        viewBox="0 0 8 12"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={1.5}
                                        className="w-1.5 h-2.5"
                                        style={{ color: "rgba(255,255,255,0.18)" }}
                                    >
                                        <path d="M1 1l6 5-6 5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </span>
                        ))}
                    </nav>
                )}

                {/* Main content */}
                <div className="max-w-[760px]">

                    {/* Eyebrow */}
                    {eyebrow && (
                        <div
                            className="flex items-center gap-2.5 mb-5"
                        >
                            {/* Magenta dot — matches hero eyebrow */}
                            <span
                                className="w-2 h-2 rounded-full shrink-0"
                                style={{ background: "#C81EA0" }}
                            />
                            <span
                                className="font-mono uppercase"
                                style={{
                                    fontSize: "0.65rem",
                                    letterSpacing: "0.22em",
                                    color: "rgba(255,255,255,0.45)",
                                }}
                            >
                                {eyebrow}
                            </span>
                        </div>
                    )}

                    {/* Title */}
                    <h1
                        className="font-display font-black uppercase text-white leading-none mb-4"
                        style={{
                            fontSize: "clamp(2.4rem, 5vw, 4rem)",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        {title}
                    </h1>

                    {/* Animated underline — magenta to purple, matches "Industries." hero underline */}
                    <div
                        className="rounded-full mb-6"
                        style={{
                            height: "3px",
                            width: "72px",
                            background: "linear-gradient(to right, #C81EA0, var(--color-purple))",
                            animation: "phUnderlineGrow 0.7s ease 0.2s both",
                        }}
                    />

                    {/* Subtitle */}
                    {subtitle && (
                        <p
                            className="font-body text-base leading-relaxed max-w-[560px]"
                            style={{ color: "rgba(255,255,255,0.52)" }}
                        >
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}