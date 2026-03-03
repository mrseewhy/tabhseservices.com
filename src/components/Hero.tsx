
// import { useEffect, useState, type JSX } from "react";
// import { Link } from "react-router-dom";

// // ─── Stat Pill ─────────────────────────────────────────────────────────────────

// interface StatPillProps {
//     value: string;
//     label: string;
//     accent?: "green" | "purple";
// }

// function StatPill({ value, label, accent = "green" }: StatPillProps) {
//     return (
//         <div
//             className="flex flex-col items-center justify-center min-w-[100px] rounded-xl px-5 py-3.5
//                 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5"
//             style={{
//                 background: "rgba(255,255,255,0.06)",
//                 border: "1px solid rgba(255,255,255,0.12)",
//             }}
//         >
//             <span
//                 className="font-display text-[1.65rem] font-black leading-none tracking-[-0.02em]"
//                 style={{
//                     color: accent === "green"
//                         ? "var(--color-green-bright)"   // #34D679
//                         : "var(--color-purple-light)",  // #D499D4
//                 }}
//             >
//                 {value}
//             </span>
//             <span className="font-mono text-[0.58rem] uppercase tracking-[0.13em] text-white/50 mt-1 text-center leading-[1.4] whitespace-pre-line">
//                 {label}
//             </span>
//         </div>
//     );
// }

// // ─── Trust Badge ───────────────────────────────────────────────────────────────

// interface TrustBadgeProps {
//     text: string;
//     variant?: "green" | "purple";
// }

// function TrustBadge({ text, variant = "green" }: TrustBadgeProps) {
//     const isGreen = variant === "green";
//     return (
//         <div
//             className="flex items-center gap-2 rounded-full px-4 py-1.5 backdrop-blur-sm"
//             style={{
//                 background: isGreen
//                     ? "rgba(0,165,80,0.20)"          // green tint
//                     : "rgba(139,26,140,0.22)",        // purple tint
//                 border: isGreen
//                     ? "1px solid rgba(52,214,121,0.30)"
//                     : "1px solid rgba(212,153,212,0.30)",
//             }}
//         >
//             <svg viewBox="0 0 12 12" className="w-3 h-3 shrink-0">
//                 <path
//                     d="M2 6l3 3 5-5"
//                     stroke={isGreen ? "#34D679" : "#D499D4"}
//                     strokeWidth={1.8}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                 />
//             </svg>
//             <span className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-white/85">
//                 {text}
//             </span>
//         </div>
//     );
// }

// // ─── Decorative vertical rule ──────────────────────────────────────────────────

// function BrandRule() {
//     return (
//         <div className="hidden lg:flex flex-col items-center gap-0 absolute right-[max(2rem,calc((100vw-1280px)/2+2rem))] top-1/2 -translate-y-1/2 z-10">
//             <div
//                 className="w-px h-28 rounded-full"
//                 style={{ background: "linear-gradient(to bottom, transparent, rgba(139,26,140,0.55))" }}
//             />
//             <div
//                 className="w-2 h-2 rounded-full my-1"
//                 style={{ background: "var(--color-purple-light)" }}
//             />
//             <div
//                 className="w-px h-28 rounded-full"
//                 style={{ background: "linear-gradient(to bottom, rgba(0,165,80,0.55), transparent)" }}
//             />
//         </div>
//     );
// }

// // ─── Hero ──────────────────────────────────────────────────────────────────────

// export default function Hero(): JSX.Element {
//     const [mounted, setMounted] = useState<boolean>(false);

//     useEffect(() => {
//         const t = setTimeout(() => setMounted(true), 120);
//         return () => clearTimeout(t);
//     }, []);

//     const fadeUp = (delay: number): React.CSSProperties => ({
//         transition: "opacity 0.75s ease, transform 0.75s ease",
//         transitionDelay: `${delay}ms`,
//         opacity: mounted ? 1 : 0,
//         transform: mounted ? "translateY(0)" : "translateY(22px)",
//     });

//     return (
//         <section className="relative flex items-center overflow-hidden min-h-screen">

//             {/* ── Background image ── */}
//             <div className="absolute inset-0 z-0">
//                 <img
//                     src="/img/hero-bg3.jpg"
//                     alt="HSE worker in industrial facility"
//                     className="absolute inset-0 w-full h-full object-cover object-center"
//                 />

//                 {/* 
//                     PRIMARY OVERLAY — deep charcoal-black, heaviest on the left where
//                     content lives, fades out to let the image show on the right.
//                     No purple/green in the gradient — brand colors are reserved for
//                     text/UI elements so they actually stand out.
//                 */}
//                 <div
//                     className="absolute inset-0"
//                     style={{
//                         background: [
//                             "linear-gradient(105deg,",
//                             "  rgba(10,10,18,0.95) 0%,",
//                             "  rgba(10,10,18,0.82) 35%,",
//                             "  rgba(10,10,18,0.45) 58%,",
//                             "  rgba(10,10,18,0.10) 78%,",
//                             "  transparent 100%",
//                             ")",
//                         ].join(""),
//                     }}
//                 />

//                 {/* 
//                     BOTTOM VIGNETTE — pulls the stat pills off the raw image edge.
//                 */}
//                 <div
//                     className="absolute bottom-0 left-0 right-0 h-[220px]"
//                     style={{
//                         background:
//                             "linear-gradient(to top, rgba(10,10,18,0.80) 0%, rgba(10,10,18,0.40) 55%, transparent 100%)",
//                     }}
//                 />

//                 {/* 
//                     SUBTLE LEFT EDGE brand-purple glow — very low opacity so it adds
//                     warmth without fighting the image. Purely atmospheric.
//                 */}
//                 <div
//                     className="absolute inset-y-0 left-0 w-[520px]"
//                     style={{
//                         background:
//                             "linear-gradient(to right, rgba(139,26,140,0.12) 0%, transparent 100%)",
//                         pointerEvents: "none",
//                     }}
//                 />
//             </div>

//             {/* ── Decorative vertical rule (desktop) ── */}
//             <BrandRule />

//             {/* ── Content ── */}
//             <div className="relative z-10 w-full">
//                 <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8 py-20 pb-24">
//                     <div className="max-w-[680px]">

//                         {/* Trust badges */}
//                         <div className="flex flex-wrap gap-2 mb-8" style={fadeUp(0)}>
//                             <TrustBadge text="ISO Certified Standards" variant="green" />
//                             <TrustBadge text="Regulatory Compliance" variant="purple" />
//                         </div>

//                         {/* 
//                             HEADLINE
//                             Line 1: plain white — neutral anchor
//                             Line 2: brand green — the aspirational word "Healthier"
//                             Line 3: plain white — closes the thought
//                             The green is the only color in the headline, making it
//                             immediately read as the brand emphasis.
//                         */}
//                         <h1
//                             style={{
//                                 ...fadeUp(100),
//                                 lineHeight: 0.97,
//                                 letterSpacing: "-0.02em",
//                                 fontSize: "clamp(2.8rem, 5.8vw, 5rem)",
//                             }}
//                             className="font-display font-black text-white"
//                         >
//                             Building Safer,
//                             <br />
//                             <span
//                                 className="relative inline-block"
//                                 style={{ color: "var(--color-green-bright)" }}
//                             >
//                                 Healthier
//                                 {/* Underline accent in brand purple — subtle contrast */}
//                                 <span
//                                     className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full"
//                                     style={{
//                                         background: "linear-gradient(to right, var(--color-purple-light), transparent)",
//                                         opacity: 0.55,
//                                     }}
//                                 />
//                             </span>
//                             <br />
//                             <span style={{ color: "rgba(255,255,255,0.88)" }}>Workplaces.</span>
//                         </h1>

//                         {/* Sub-headline */}
//                         <p
//                             style={{
//                                 ...fadeUp(220),
//                                 fontSize: "clamp(0.95rem, 1.7vw, 1.08rem)",
//                             }}
//                             className="mt-6 max-w-[480px] text-white/55 leading-[1.8] font-body"
//                         >
//                             TAB HSE Services is a premier consultancy partner helping organisations
//                             maintain compliance, protect employees, and embed a culture of
//                             environmental responsibility.
//                         </p>

//                         {/* CTA Buttons */}
//                         <div className="flex flex-wrap gap-3 mt-9" style={fadeUp(320)}>

//                             {/* Primary — brand green */}
//                             <Link
//                                 to="our-services"
//                                 className="group flex items-center gap-2.5 rounded-lg px-7 py-3.5
//                                     text-white font-display font-bold text-[0.86rem]
//                                     uppercase tracking-[0.12em]
//                                     transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
//                                 style={{
//                                     background: "var(--color-green)",
//                                     boxShadow: "0 6px 24px rgba(0,165,80,0.38)",
//                                 }}
//                             >
//                                 Explore Our Services
//                                 <svg
//                                     viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2.2}
//                                     className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
//                                 >
//                                     <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                             </Link>

//                             {/* Secondary — ghost with purple tint on hover */}
//                             <Link
//                                 to="contact-us"
//                                 className="group flex items-center gap-2 rounded-lg px-7 py-3.5
//                                     text-white/85 font-display font-bold text-[0.86rem]
//                                     uppercase tracking-[0.12em]
//                                     backdrop-blur-md transition-all duration-200
//                                     hover:text-white hover:border-[rgba(212,153,212,0.50)]
//                                     active:scale-[0.98]"
//                                 style={{
//                                     background: "rgba(255,255,255,0.07)",
//                                     border: "1px solid rgba(255,255,255,0.18)",
//                                 }}
//                                 onMouseEnter={(e) => {
//                                     e.currentTarget.style.background = "rgba(139,26,140,0.18)";
//                                     e.currentTarget.style.borderColor = "rgba(212,153,212,0.45)";
//                                 }}
//                                 onMouseLeave={(e) => {
//                                     e.currentTarget.style.background = "rgba(255,255,255,0.07)";
//                                     e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
//                                 }}
//                             >
//                                 Get a Consultation
//                             </Link>
//                         </div>

//                         {/* 
//                             STAT PILLS
//                             Alternating green/purple accents so both brand colors
//                             appear at equal weight in the same row.
//                         */}
//                         <div className="flex flex-wrap gap-3 mt-11" style={fadeUp(440)}>
//                             <StatPill value="RC" label={"9122058\nRegistered"} accent="purple" />
//                             <StatPill value="ISO" label={"Certified\nMethods"} accent="green" />
//                             <StatPill value="100%" label={"Compliance\nFocused"} accent="purple" />
//                             <StatPill value="7+" label={"Service\nAreas"} accent="green" />
//                         </div>

//                     </div>
//                 </div>
//             </div>



//         </section>
//     );
// }




// import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";

// // ─── Stat data ────────────────────────────────────────────────────────────────
// const STATS = [
//     { value: "7+", label: "Service Areas" },
//     { value: "ISO", label: "45001 · 14001 · 9001" },
//     { value: "100%", label: "Client Focused" },
//     { value: "Lagos", label: "Nigeria HQ" },
// ];

// // ─── Hero ─────────────────────────────────────────────────────────────────────
// export default function HeroSection() {
//     const [mounted, setMounted] = useState(false);

//     useEffect(() => {
//         // Small delay so CSS transitions fire after mount
//         const t = setTimeout(() => setMounted(true), 80);
//         return () => clearTimeout(t);
//     }, []);

//     const fadeUp = (delay: string): React.CSSProperties => ({
//         opacity: mounted ? 1 : 0,
//         transform: mounted ? "translateY(0)" : "translateY(28px)",
//         transition: `opacity 0.8s ease ${delay}, transform 0.8s ease ${delay}`,
//     });

//     const fadeIn = (delay: string): React.CSSProperties => ({
//         opacity: mounted ? 1 : 0,
//         transition: `opacity 0.9s ease ${delay}`,
//     });

//     return (
//         <section
//             className="relative w-full overflow-hidden"
//             style={{
//                 minHeight: "100svh",
//                 background: "#0A0A12",
//             }}
//         >
//             {/* ── Keyframes ── */}
//             <style>{`
//                 @keyframes heroGrainShift {
//                     0%   { transform: translate(0, 0); }
//                     25%  { transform: translate(-1%, 1%); }
//                     50%  { transform: translate(1%, -1%); }
//                     75%  { transform: translate(-1%, -1%); }
//                     100% { transform: translate(0, 0); }
//                 }
//                 @keyframes magentaPulse {
//                     0%, 100% { opacity: 0.55; }
//                     50%       { opacity: 0.85; }
//                 }
//                 @keyframes statFadeUp {
//                     from { opacity: 0; transform: translateY(16px); }
//                     to   { opacity: 1; transform: translateY(0); }
//                 }
//                 @keyframes scanline {
//                     0%   { transform: translateY(-100%); }
//                     100% { transform: translateY(200%); }
//                 }
//             `}</style>

//             {/* ════════════════════════════════════════
//                 BACKGROUND LAYERS
//             ════════════════════════════════════════ */}

//             {/* 1 — Hero image, right-weighted */}
//             <div
//                 className="absolute inset-0"
//                 style={fadeIn("0s")}
//             >
//                 <img
//                     src="/img/hero.jpg"
//                     alt=""
//                     aria-hidden
//                     className="absolute inset-0 w-full h-full object-cover object-center"
//                     style={{ opacity: 0.55 }}
//                 />
//             </div>

//             {/* 2 — Directional gradient: dark hard left, bleeds right */}
//             <div
//                 className="absolute inset-0 pointer-events-none"
//                 style={{
//                     background:
//                         "linear-gradient(105deg, rgba(10,10,18,0.97) 0%, rgba(10,10,18,0.88) 38%, rgba(10,10,18,0.50) 62%, rgba(10,10,18,0.20) 100%)",
//                 }}
//             />

//             {/* 3 — Bottom fade — so content below reads clearly */}
//             <div
//                 className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
//                 style={{
//                     background:
//                         "linear-gradient(to top, rgba(10,10,18,1) 0%, transparent 100%)",
//                 }}
//             />

//             {/* 4 — Magenta glow bloom — top left, behind the headline */}
//             <div
//                 className="absolute pointer-events-none"
//                 style={{
//                     top: "-80px",
//                     left: "-80px",
//                     width: "520px",
//                     height: "520px",
//                     borderRadius: "50%",
//                     background:
//                         "radial-gradient(circle, rgba(200,30,160,0.18) 0%, transparent 65%)",
//                     animation: "magentaPulse 5s ease-in-out infinite",
//                 }}
//             />

//             {/* 5 — Green glow — bottom right, atmospheric */}
//             <div
//                 className="absolute pointer-events-none"
//                 style={{
//                     bottom: "-60px",
//                     right: "15%",
//                     width: "380px",
//                     height: "380px",
//                     borderRadius: "50%",
//                     background:
//                         "radial-gradient(circle, rgba(0,165,80,0.12) 0%, transparent 65%)",
//                 }}
//             />

//             {/* 6 — Subtle film grain overlay */}
//             <div
//                 aria-hidden
//                 className="absolute inset-0 pointer-events-none"
//                 style={{
//                     backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E")`,
//                     backgroundSize: "200px 200px",
//                     opacity: 0.4,
//                     mixBlendMode: "overlay",
//                     animation: "heroGrainShift 8s steps(4) infinite",
//                 }}
//             />

//             {/* 7 — Single scanline sweep — adds depth */}
//             <div
//                 aria-hidden
//                 className="absolute left-0 right-0 pointer-events-none"
//                 style={{
//                     height: "2px",
//                     background:
//                         "linear-gradient(to right, transparent 0%, rgba(200,30,160,0.12) 30%, rgba(0,165,80,0.12) 70%, transparent 100%)",
//                     animation: "scanline 8s linear infinite",
//                     top: 0,
//                 }}
//             />

//             {/* ════════════════════════════════════════
//                 DECORATIVE GEOMETRY
//             ════════════════════════════════════════ */}
//             <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">

//                 {/* Magenta thin vertical stroke — left of headline */}
//                 <div
//                     className="absolute top-[18%] left-[calc(50%-680px)]"
//                     style={{
//                         width: "1.5px",
//                         height: "160px",
//                         background:
//                             "linear-gradient(to bottom, transparent, #C81EA0, transparent)",
//                         opacity: mounted ? 0.7 : 0,
//                         transition: "opacity 1s ease 1.2s",
//                     }}
//                 />

//                 {/* Faint circle — top right */}
//                 <div
//                     className="absolute -top-20 -right-20 w-[480px] h-[480px] rounded-full"
//                     style={{ border: "1px solid rgba(255,255,255,0.03)" }}
//                 />
//                 <div
//                     className="absolute top-8 right-8 w-72 h-72 rounded-full"
//                     style={{ border: "1px solid rgba(255,255,255,0.025)" }}
//                 />

//                 {/* Magenta corner bracket — top left of content area */}
//                 <div
//                     className="absolute"
//                     style={{
//                         top: "14%",
//                         left: "max(20px, calc(50% - 640px))",
//                         width: "28px",
//                         height: "28px",
//                         borderTop: "2px solid #C81EA0",
//                         borderLeft: "2px solid #C81EA0",
//                         opacity: mounted ? 0.65 : 0,
//                         transition: "opacity 0.8s ease 1.0s",
//                     }}
//                 />

//                 {/* Green corner bracket — bottom right of content area */}
//                 <div
//                     className="absolute"
//                     style={{
//                         bottom: "22%",
//                         right: "max(20px, calc(50% - 620px))",
//                         width: "22px",
//                         height: "22px",
//                         borderBottom: "2px solid var(--color-green)",
//                         borderRight: "2px solid var(--color-green)",
//                         opacity: mounted ? 0.5 : 0,
//                         transition: "opacity 0.8s ease 1.3s",
//                     }}
//                 />

//                 {/* Horizontal hairline — full width, sits at ~60% height */}
//                 <div
//                     className="absolute left-0 right-0"
//                     style={{
//                         top: "62%",
//                         height: "1px",
//                         background:
//                             "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.04) 20%, rgba(255,255,255,0.04) 80%, transparent 100%)",
//                     }}
//                 />
//             </div>

//             {/* ════════════════════════════════════════
//                 CONTENT
//             ════════════════════════════════════════ */}
//             <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8 flex flex-col justify-between" style={{ minHeight: "100svh" }}>

//                 {/* ── Top spacer (accounts for sticky navbar ~72px) ── */}
//                 <div />

//                 {/* ── Main content block ── */}
//                 <div className="py-20 lg:py-0 lg:flex lg:items-center" style={{ minHeight: "80svh" }}>
//                     <div className="max-w-[760px]">

//                         {/* Eyebrow */}
//                         <div
//                             className="flex items-center gap-3 mb-6"
//                             style={fadeUp("0.2s")}
//                         >
//                             {/* Magenta dot — the prominent small magenta touch */}
//                             <span
//                                 className="inline-flex items-center justify-center w-2 h-2 rounded-full shrink-0"
//                                 style={{ background: "#C81EA0" }}
//                             />
//                             <span
//                                 className="font-mono uppercase"
//                                 style={{
//                                     fontSize: "0.65rem",
//                                     letterSpacing: "0.24em",
//                                     color: "rgba(255,255,255,0.5)",
//                                 }}
//                             >
//                                 HSE Services Par Excellence
//                             </span>
//                             {/* Magenta pill badge */}
//                             <span
//                                 className="font-mono uppercase px-2.5 py-1 rounded-full"
//                                 style={{
//                                     fontSize: "0.55rem",
//                                     letterSpacing: "0.16em",
//                                     color: "#C81EA0",
//                                     background: "rgba(200,30,160,0.10)",
//                                     border: "1px solid rgba(200,30,160,0.28)",
//                                 }}
//                             >
//                                 RC: 9122058
//                             </span>
//                         </div>

//                         {/* ── Monumental headline ── */}
//                         <div className="mb-8" style={{ overflow: "hidden" }}>
//                             <h1
//                                 className="font-display font-black uppercase leading-none"
//                                 style={{
//                                     fontSize: "clamp(3.2rem, 8.5vw, 7.5rem)",
//                                     letterSpacing: "-0.02em",
//                                     color: "#fff",
//                                     ...fadeUp("0.35s"),
//                                 }}
//                             >
//                                 Building
//                             </h1>
//                             <h1
//                                 className="font-display font-black uppercase leading-none"
//                                 style={{
//                                     fontSize: "clamp(3.2rem, 8.5vw, 7.5rem)",
//                                     letterSpacing: "-0.02em",
//                                     // Green accent word — same as original, owned
//                                     color: "var(--color-green)",
//                                     ...fadeUp("0.44s"),
//                                 }}
//                             >
//                                 Safer,
//                             </h1>
//                             <div
//                                 className="flex flex-wrap items-baseline gap-x-4"
//                                 style={fadeUp("0.53s")}
//                             >
//                                 <h1
//                                     className="font-display font-black uppercase leading-none"
//                                     style={{
//                                         fontSize: "clamp(3.2rem, 8.5vw, 7.5rem)",
//                                         letterSpacing: "-0.02em",
//                                         color: "#fff",
//                                     }}
//                                 >
//                                     Healthier
//                                 </h1>
//                                 {/* Magenta underline accent beneath "Healthier" */}
//                                 <span
//                                     className="block w-full h-0"
//                                     aria-hidden
//                                 />
//                             </div>
//                             <h1
//                                 className="font-display font-black uppercase leading-none relative inline-block"
//                                 style={{
//                                     fontSize: "clamp(3.2rem, 8.5vw, 7.5rem)",
//                                     letterSpacing: "-0.02em",
//                                     color: "#fff",
//                                     ...fadeUp("0.60s"),
//                                 }}
//                             >
//                                 Industries.
//                                 {/* Magenta underline stroke beneath the headline */}
//                                 <span
//                                     aria-hidden
//                                     className="absolute left-0 -bottom-2"
//                                     style={{
//                                         height: "4px",
//                                         borderRadius: "4px",
//                                         background:
//                                             "linear-gradient(to right, #C81EA0, var(--color-purple))",
//                                         width: mounted ? "100%" : "0%",
//                                         transition: "width 0.9s ease 1.0s",
//                                         display: "block",
//                                     }}
//                                 />
//                             </h1>
//                         </div>

//                         {/* Subtext */}
//                         <p
//                             className="font-body text-base lg:text-lg leading-relaxed mb-10 max-w-[520px]"
//                             style={{
//                                 color: "rgba(255,255,255,0.52)",
//                                 ...fadeUp("0.70s"),
//                             }}
//                         >
//                             TAB HSE Services partners with organisations across Nigeria
//                             to embed robust safety culture, environmental sustainability,
//                             and compliance excellence — from policy to practice.
//                         </p>

//                         {/* CTA row */}
//                         <div
//                             className="flex flex-wrap items-center gap-4"
//                             style={fadeUp("0.82s")}
//                         >
//                             {/* Primary — green, dominant */}
//                             <NavLink
//                                 to="/contact-us"
//                                 className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-white font-display font-bold uppercase transition-all duration-200 active:scale-95"
//                                 style={{
//                                     fontSize: "0.85rem",
//                                     letterSpacing: "0.12em",
//                                     background: "var(--color-green)",
//                                     boxShadow: "0 8px 32px rgba(0,165,80,0.40)",
//                                 }}
//                                 onMouseEnter={(e) => {
//                                     e.currentTarget.style.transform = "translateY(-2px)";
//                                     e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,165,80,0.50)";
//                                 }}
//                                 onMouseLeave={(e) => {
//                                     e.currentTarget.style.transform = "translateY(0)";
//                                     e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,165,80,0.40)";
//                                 }}
//                             >
//                                 Get a Free Consultation
//                                 <span
//                                     className="inline-flex items-center justify-center w-6 h-6 rounded-lg"
//                                     style={{ background: "rgba(255,255,255,0.18)" }}
//                                 >
//                                     <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2.2} className="w-3 h-3">
//                                         <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
//                                     </svg>
//                                 </span>
//                             </NavLink>

//                             {/* Secondary — ghost, subordinate */}
//                             <NavLink
//                                 to="/our-services"
//                                 className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-display font-bold uppercase transition-all duration-200 active:scale-95"
//                                 style={{
//                                     fontSize: "0.85rem",
//                                     letterSpacing: "0.12em",
//                                     color: "rgba(255,255,255,0.75)",
//                                     background: "rgba(255,255,255,0.06)",
//                                     border: "1px solid rgba(255,255,255,0.14)",
//                                 }}
//                                 onMouseEnter={(e) => {
//                                     e.currentTarget.style.background = "rgba(255,255,255,0.10)";
//                                     e.currentTarget.style.color = "#fff";
//                                     e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
//                                 }}
//                                 onMouseLeave={(e) => {
//                                     e.currentTarget.style.background = "rgba(255,255,255,0.06)";
//                                     e.currentTarget.style.color = "rgba(255,255,255,0.75)";
//                                     e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)";
//                                 }}
//                             >
//                                 Explore Services
//                                 <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
//                                     <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                             </NavLink>
//                         </div>
//                     </div>
//                 </div>

//                 {/* ── Stats bar — anchored to bottom ── */}
//                 <div
//                     className="pb-8"
//                     style={fadeUp("1.0s")}
//                 >
//                     {/* Thin gradient divider above stats */}
//                     <div
//                         className="mb-6"
//                         style={{
//                             height: "1px",
//                             background:
//                                 "linear-gradient(to right, rgba(200,30,160,0.5) 0%, rgba(0,165,80,0.5) 50%, transparent 100%)",
//                         }}
//                     />

//                     <div className="grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-xl"
//                         style={{ background: "rgba(255,255,255,0.06)" }}
//                     >
//                         {STATS.map((stat, i) => (
//                             <div
//                                 key={stat.label}
//                                 className="flex flex-col gap-1 px-5 py-4 lg:px-7 lg:py-5"
//                                 style={{
//                                     background: "#0A0A12",
//                                     opacity: mounted ? 1 : 0,
//                                     transform: mounted ? "translateY(0)" : "translateY(12px)",
//                                     transition: `opacity 0.6s ease ${1.1 + i * 0.08}s, transform 0.6s ease ${1.1 + i * 0.08}s`,
//                                 }}
//                             >
//                                 <span
//                                     className="font-display font-black leading-none"
//                                     style={{
//                                         fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
//                                         // Alternate green / magenta for the stat values
//                                         color: i % 2 === 0
//                                             ? "var(--color-green)"
//                                             : "#C81EA0",
//                                     }}
//                                 >
//                                     {stat.value}
//                                 </span>
//                                 <span
//                                     className="font-mono uppercase"
//                                     style={{
//                                         fontSize: "0.6rem",
//                                         letterSpacing: "0.14em",
//                                         color: "rgba(255,255,255,0.38)",
//                                     }}
//                                 >
//                                     {stat.label}
//                                 </span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";

// // ─── Stat data ────────────────────────────────────────────────────────────────
// const STATS = [
//     { value: "7+", label: "Service Areas" },
//     { value: "ISO", label: "45001 · 14001 · 9001" },
//     { value: "100%", label: "Client Focused" },
//     { value: "RC", label: "9122058 · Lagos, NG" },
// ];

// // ─── Hero ─────────────────────────────────────────────────────────────────────
// export default function HeroSection() {
//     const [mounted, setMounted] = useState(false);

//     useEffect(() => {
//         const t = setTimeout(() => setMounted(true), 80);
//         return () => clearTimeout(t);
//     }, []);

//     const fadeUp = (delay: string): React.CSSProperties => ({
//         opacity: mounted ? 1 : 0,
//         transform: mounted ? "translateY(0)" : "translateY(24px)",
//         transition: `opacity 0.7s ease ${delay}, transform 0.7s ease ${delay}`,
//     });

//     return (
//         <section
//             className="relative w-full flex flex-col"
//             style={{
//                 minHeight: "calc(100vh - 72px)", // subtract navbar height
//                 background: "#0A0A12",
//             }}
//         >
//             {/* ── Keyframes ── */}
//             <style>{`
//                 @keyframes magentaPulse {
//                     0%, 100% { opacity: 0.14; }
//                     50%       { opacity: 0.26; }
//                 }
//                 @keyframes underlineGrow {
//                     from { width: 0%; }
//                     to   { width: 100%; }
//                 }
//             `}</style>

//             {/* ════════════════════════════════
//                 BACKGROUND
//             ════════════════════════════════ */}

//             {/* Hero image */}
//             <div className="absolute inset-0">
//                 <img
//                     src="/img/hero-bg3.jpg"
//                     alt=""
//                     aria-hidden
//                     className="w-full h-full object-cover object-center"
//                     style={{ opacity: 0.45 }}
//                 />
//             </div>

//             {/* Directional gradient — dark on left, bleeds right */}
//             <div
//                 className="absolute inset-0 pointer-events-none"
//                 style={{
//                     background:
//                         "linear-gradient(105deg, rgba(10,10,18,0.97) 0%, rgba(10,10,18,0.88) 40%, rgba(10,10,18,0.55) 65%, rgba(10,10,18,0.20) 100%)",
//                 }}
//             />

//             {/* Bottom fade */}
//             <div
//                 className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
//                 style={{
//                     background: "linear-gradient(to top, rgba(10,10,18,1) 0%, transparent 100%)",
//                 }}
//             />

//             {/* Magenta glow — top left behind headline */}
//             <div
//                 className="absolute pointer-events-none"
//                 style={{
//                     top: "-60px",
//                     left: "-60px",
//                     width: "440px",
//                     height: "440px",
//                     borderRadius: "50%",
//                     background: "radial-gradient(circle, rgba(200,30,160,0.20) 0%, transparent 65%)",
//                     animation: "magentaPulse 5s ease-in-out infinite",
//                 }}
//             />

//             {/* Green glow — bottom right */}
//             <div
//                 className="absolute pointer-events-none"
//                 style={{
//                     bottom: 0,
//                     right: "10%",
//                     width: "320px",
//                     height: "320px",
//                     borderRadius: "50%",
//                     background: "radial-gradient(circle, rgba(0,165,80,0.10) 0%, transparent 65%)",
//                 }}
//             />

//             {/* Faint ring — top right */}
//             <div
//                 aria-hidden
//                 className="absolute -top-16 -right-16 w-96 h-96 rounded-full pointer-events-none"
//                 style={{ border: "1px solid rgba(255,255,255,0.04)" }}
//             />

//             {/* Magenta corner bracket — top left of text */}
//             <div
//                 aria-hidden
//                 className="absolute pointer-events-none"
//                 style={{
//                     top: "32px",
//                     left: "max(20px, calc(50% - 620px))",
//                     width: "24px",
//                     height: "24px",
//                     borderTop: "2px solid #C81EA0",
//                     borderLeft: "2px solid #C81EA0",
//                     opacity: mounted ? 0.7 : 0,
//                     transition: "opacity 0.8s ease 1.0s",
//                 }}
//             />

//             {/* ════════════════════════════════
//                 CONTENT
//             ════════════════════════════════ */}
//             <div className="relative flex flex-col flex-1 max-w-[1280px] w-full mx-auto px-5 lg:px-8">

//                 {/* ── Main content — vertically centred in available space ── */}
//                 <div className="flex-1 flex flex-col justify-center py-12 lg:py-16">
//                     <div className="max-w-[680px]">

//                         {/* Eyebrow */}
//                         <div
//                             className="flex items-center gap-3 mb-5"
//                             style={fadeUp("0.2s")}
//                         >
//                             {/* Magenta dot */}
//                             <span
//                                 className="w-2 h-2 rounded-full shrink-0"
//                                 style={{ background: "#C81EA0" }}
//                             />
//                             <span
//                                 className="font-mono uppercase"
//                                 style={{
//                                     fontSize: "0.62rem",
//                                     letterSpacing: "0.22em",
//                                     color: "rgba(255,255,255,0.45)",
//                                 }}
//                             >
//                                 HSE Services Par Excellence
//                             </span>
//                             {/* Magenta RC badge */}
//                             <span
//                                 className="font-mono uppercase px-2 py-1 rounded-md hidden sm:inline"
//                                 style={{
//                                     fontSize: "0.52rem",
//                                     letterSpacing: "0.14em",
//                                     color: "#C81EA0",
//                                     background: "rgba(200,30,160,0.10)",
//                                     border: "1px solid rgba(200,30,160,0.28)",
//                                 }}
//                             >
//                                 RC: 9122058
//                             </span>
//                         </div>

//                         {/* ── Headline ── */}
//                         <div className="mb-6">
//                             <h1
//                                 className="font-display font-black uppercase leading-none block"
//                                 style={{
//                                     fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
//                                     letterSpacing: "-0.02em",
//                                     color: "#fff",
//                                     ...fadeUp("0.32s"),
//                                 }}
//                             >
//                                 Building
//                             </h1>
//                             <h1
//                                 className="font-display font-black uppercase leading-none block"
//                                 style={{
//                                     fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
//                                     letterSpacing: "-0.02em",
//                                     color: "var(--color-green)",
//                                     ...fadeUp("0.40s"),
//                                 }}
//                             >
//                                 Safer,
//                             </h1>
//                             <h1
//                                 className="font-display font-black uppercase leading-none block"
//                                 style={{
//                                     fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
//                                     letterSpacing: "-0.02em",
//                                     color: "#fff",
//                                     ...fadeUp("0.48s"),
//                                 }}
//                             >
//                                 Healthier
//                             </h1>
//                             {/* "Industries." with magenta animated underline */}
//                             <div style={fadeUp("0.56s")}>
//                                 <h1
//                                     className="font-display font-black uppercase leading-none inline-block relative"
//                                     style={{
//                                         fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
//                                         letterSpacing: "-0.02em",
//                                         color: "#fff",
//                                     }}
//                                 >
//                                     Industries.
//                                     {/* Magenta underline — animates in after headline */}
//                                     <span
//                                         aria-hidden
//                                         className="absolute left-0 -bottom-1.5 h-1 rounded-full"
//                                         style={{
//                                             background: "linear-gradient(to right, #C81EA0, var(--color-purple))",
//                                             width: mounted ? "100%" : "0%",
//                                             transition: "width 0.8s ease 0.9s",
//                                             display: "block",
//                                         }}
//                                     />
//                                 </h1>
//                             </div>
//                         </div>

//                         {/* Subtext */}
//                         <p
//                             className="font-body text-sm lg:text-base leading-relaxed mb-8 max-w-[500px]"
//                             style={{
//                                 color: "rgba(255,255,255,0.50)",
//                                 ...fadeUp("0.66s"),
//                             }}
//                         >
//                             TAB HSE Services partners with organisations across Nigeria
//                             to embed robust safety culture, environmental sustainability,
//                             and compliance excellence — from policy to practice.
//                         </p>

//                         {/* CTA row */}
//                         <div
//                             className="flex flex-wrap items-center gap-3"
//                             style={fadeUp("0.76s")}
//                         >
//                             {/* Primary — green */}
//                             <NavLink
//                                 to="/contact-us"
//                                 className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-display font-bold uppercase transition-all duration-200 active:scale-95"
//                                 style={{
//                                     fontSize: "0.8rem",
//                                     letterSpacing: "0.12em",
//                                     background: "var(--color-green)",
//                                     boxShadow: "0 6px 24px rgba(0,165,80,0.38)",
//                                 }}
//                                 onMouseEnter={(e) => {
//                                     e.currentTarget.style.transform = "translateY(-2px)";
//                                     e.currentTarget.style.boxShadow = "0 12px 36px rgba(0,165,80,0.48)";
//                                 }}
//                                 onMouseLeave={(e) => {
//                                     e.currentTarget.style.transform = "translateY(0)";
//                                     e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,165,80,0.38)";
//                                 }}
//                             >
//                                 Get a Free Consultation
//                                 <span
//                                     className="inline-flex items-center justify-center w-5 h-5 rounded-lg"
//                                     style={{ background: "rgba(255,255,255,0.18)" }}
//                                 >
//                                     <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2.2} className="w-2.5 h-2.5">
//                                         <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
//                                     </svg>
//                                 </span>
//                             </NavLink>

//                             {/* Secondary — ghost */}
//                             <NavLink
//                                 to="/our-services"
//                                 className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-display font-bold uppercase transition-all duration-200 active:scale-95"
//                                 style={{
//                                     fontSize: "0.8rem",
//                                     letterSpacing: "0.12em",
//                                     color: "rgba(255,255,255,0.70)",
//                                     background: "rgba(255,255,255,0.06)",
//                                     border: "1px solid rgba(255,255,255,0.12)",
//                                 }}
//                                 onMouseEnter={(e) => {
//                                     e.currentTarget.style.background = "rgba(255,255,255,0.10)";
//                                     e.currentTarget.style.color = "#fff";
//                                     e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)";
//                                 }}
//                                 onMouseLeave={(e) => {
//                                     e.currentTarget.style.background = "rgba(255,255,255,0.06)";
//                                     e.currentTarget.style.color = "rgba(255,255,255,0.70)";
//                                     e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
//                                 }}
//                             >
//                                 Explore Services
//                                 <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3">
//                                     <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                             </NavLink>
//                         </div>
//                     </div>
//                 </div>

//                 {/* ── Stats bar — pinned to bottom ── */}
//                 <div
//                     className="pb-6"
//                     style={fadeUp("0.90s")}
//                 >
//                     {/* Gradient divider — magenta to green */}
//                     <div
//                         className="mb-5"
//                         style={{
//                             height: "1px",
//                             background:
//                                 "linear-gradient(to right, rgba(200,30,160,0.6) 0%, rgba(0,165,80,0.6) 50%, transparent 100%)",
//                         }}
//                     />

//                     <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-xl overflow-hidden"
//                         style={{ background: "rgba(255,255,255,0.05)" }}
//                     >
//                         {STATS.map((stat, i) => (
//                             <div
//                                 key={stat.label}
//                                 className="flex flex-col gap-1 px-5 py-4"
//                                 style={{
//                                     background: "rgba(10,10,18,0.85)",
//                                     backdropFilter: "blur(8px)",
//                                     opacity: mounted ? 1 : 0,
//                                     transform: mounted ? "translateY(0)" : "translateY(10px)",
//                                     transition: `opacity 0.5s ease ${0.95 + i * 0.07}s, transform 0.5s ease ${0.95 + i * 0.07}s`,
//                                 }}
//                             >
//                                 <span
//                                     className="font-display font-black leading-none"
//                                     style={{
//                                         fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
//                                         // Alternate green / magenta
//                                         color: i % 2 === 0 ? "var(--color-green)" : "#C81EA0",
//                                     }}
//                                 >
//                                     {stat.value}
//                                 </span>
//                                 <span
//                                     className="font-mono uppercase"
//                                     style={{
//                                         fontSize: "0.55rem",
//                                         letterSpacing: "0.12em",
//                                         color: "rgba(255,255,255,0.35)",
//                                     }}
//                                 >
//                                     {stat.label}
//                                 </span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }


import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// ─── Stat data ────────────────────────────────────────────────────────────────
const STATS = [
    { value: "7+", label: "Service Areas" },
    { value: "ISO", label: "45001 · 14001 · 9001" },
    { value: "100%", label: "Client Focused" },
    { value: "RC", label: "9122058 · Lagos, NG" },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────
export default function HeroSection() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 80);
        return () => clearTimeout(t);
    }, []);

    const fadeUp = (delay: string): React.CSSProperties => ({
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}, transform 0.7s ease ${delay}`,
    });

    return (
        // overflow-hidden on the section itself kills any horizontal bleed
        <section
            className="relative w-full overflow-hidden flex flex-col"
            style={{
                minHeight: "calc(100vh - 72px)",
                background: "#0A0A12",
            }}
        >
            {/* ── Keyframes ── */}
            <style>{`
                @keyframes magentaPulse {
                    0%, 100% { opacity: 0.18; }
                    50%       { opacity: 0.32; }
                }
            `}</style>

            {/* ════════════════════════════════
                BACKGROUND LAYERS
            ════════════════════════════════ */}

            {/* Hero image — brighter opacity */}
            <div className="absolute inset-0">
                <img
                    src="/img/hero-bg2.jpg"
                    alt=""
                    aria-hidden
                    className="w-full h-full object-cover object-center"
                    style={{ opacity: 0.72 }}   // was 0.45 — much more visible now
                />
            </div>

            {/* Directional overlay — keeps left text readable, lets right image show */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(100deg, rgba(10,10,18,0.94) 0%, rgba(10,10,18,0.82) 35%, rgba(10,10,18,0.45) 60%, rgba(10,10,18,0.15) 100%)",
                }}
            />

            {/* Bottom fade */}
            <div
                className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
                style={{
                    background: "linear-gradient(to top, rgba(10,10,18,1) 0%, transparent 100%)",
                }}
            />

            {/* Magenta glow bloom — top left */}
            <div
                className="absolute pointer-events-none"
                style={{
                    top: "-80px",
                    left: "-80px",
                    width: "420px",
                    height: "420px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(200,30,160,0.22) 0%, transparent 65%)",
                    animation: "magentaPulse 5s ease-in-out infinite",
                }}
            />

            {/* Green glow — bottom right */}
            <div
                className="absolute pointer-events-none"
                style={{
                    bottom: "-40px",
                    right: "8%",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(0,165,80,0.12) 0%, transparent 65%)",
                }}
            />

            {/* Magenta corner bracket — decorative, contained within section */}
            <div
                aria-hidden
                className="absolute pointer-events-none"
                style={{
                    top: "28px",
                    left: "20px",
                    width: "22px",
                    height: "22px",
                    borderTop: "2px solid #C81EA0",
                    borderLeft: "2px solid #C81EA0",
                    opacity: mounted ? 0.65 : 0,
                    transition: "opacity 0.8s ease 1.0s",
                }}
            />

            {/* ════════════════════════════════
                CONTENT
            ════════════════════════════════ */}
            <div className="relative flex flex-col flex-1 w-full max-w-[1280px] mx-auto px-5 lg:px-8">

                {/* ── Main content block — generous top padding, centred vertically ── */}
                <div className="flex-1 flex flex-col justify-center pt-16 pb-8 lg:pt-20 lg:pb-10">
                    <div className="max-w-[620px]">

                        {/* Eyebrow */}
                        <div
                            className="flex items-center gap-2.5 mb-6"
                            style={fadeUp("0.20s")}
                        >
                            {/* Magenta dot */}
                            <span
                                className="w-2 h-2 rounded-full shrink-0"
                                style={{ background: "#C81EA0" }}
                            />
                            <span
                                className="font-mono uppercase"
                                style={{
                                    fontSize: "0.62rem",
                                    letterSpacing: "0.22em",
                                    color: "rgba(255,255,255,0.45)",
                                }}
                            >
                                HSE Services Par Excellence
                            </span>
                            {/* Magenta RC badge */}
                            <span
                                className="font-mono uppercase px-2 py-1 rounded-md hidden sm:inline-block"
                                style={{
                                    fontSize: "0.52rem",
                                    letterSpacing: "0.12em",
                                    color: "#C81EA0",
                                    background: "rgba(200,30,160,0.10)",
                                    border: "1px solid rgba(200,30,160,0.28)",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                RC: 9122058
                            </span>
                        </div>

                        {/* ── Headline ──
                             Line 1: "Building Safer," — white + green comma word on same line
                             Line 2: "Healthier"
                             Line 3: "Industries." with magenta underline
                        ── */}
                        <div className="mb-7">

                            {/* LINE 1: Building Safer, — all on one line */}
                            <div style={fadeUp("0.32s")}>
                                <h1
                                    className="font-display font-black uppercase leading-none block whitespace-nowrap"
                                    style={{
                                        fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
                                        letterSpacing: "-0.02em",
                                        color: "#fff",
                                    }}
                                >
                                    Building{" "}
                                    <span style={{ color: "var(--color-green)" }}>Safer,</span>
                                </h1>
                            </div>

                            {/* LINE 2: Healthier */}
                            <h1
                                className="font-display font-black uppercase leading-none block"
                                style={{
                                    fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
                                    letterSpacing: "-0.02em",
                                    color: "#fff",
                                    ...fadeUp("0.40s"),
                                }}
                            >
                                Healthier
                            </h1>

                            {/* LINE 3: Industries. with magenta underline */}
                            <div style={fadeUp("0.48s")}>
                                <h1
                                    className="font-display font-black uppercase leading-none inline-block relative"
                                    style={{
                                        fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
                                        letterSpacing: "-0.02em",
                                        color: "#fff",
                                    }}
                                >
                                    Industries.
                                    {/* Magenta animated underline */}
                                    <span
                                        aria-hidden
                                        className="absolute left-0 -bottom-1.5 h-[3px] rounded-full block"
                                        style={{
                                            background: "linear-gradient(to right, #C81EA0, var(--color-purple))",
                                            width: mounted ? "100%" : "0%",
                                            transition: "width 0.8s ease 0.9s",
                                        }}
                                    />
                                </h1>
                            </div>
                        </div>

                        {/* Subtext */}
                        <p
                            className="font-body text-sm lg:text-base leading-relaxed mb-8 max-w-[480px]"
                            style={{
                                color: "rgba(255,255,255,0.52)",
                                ...fadeUp("0.58s"),
                            }}
                        >
                            TAB HSE Services partners with organisations across Nigeria
                            to embed robust safety culture, environmental sustainability,
                            and compliance excellence — from policy to practice.
                        </p>

                        {/* CTAs */}
                        <div
                            className="flex flex-wrap items-center gap-3"
                            style={fadeUp("0.68s")}
                        >
                            {/* Primary — green */}
                            <NavLink
                                to="/contact-us"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-display font-bold uppercase transition-all duration-200 active:scale-95"
                                style={{
                                    fontSize: "0.78rem",
                                    letterSpacing: "0.12em",
                                    background: "var(--color-green)",
                                    boxShadow: "0 6px 22px rgba(0,165,80,0.38)",
                                    whiteSpace: "nowrap",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-2px)";
                                    e.currentTarget.style.boxShadow = "0 12px 34px rgba(0,165,80,0.48)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 6px 22px rgba(0,165,80,0.38)";
                                }}
                            >
                                Get a Free Consultation
                                <span
                                    className="inline-flex items-center justify-center w-5 h-5 rounded-md"
                                    style={{ background: "rgba(255,255,255,0.18)" }}
                                >
                                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2.2} className="w-2.5 h-2.5">
                                        <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </NavLink>

                            {/* Secondary — ghost */}
                            <NavLink
                                to="/our-services"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-display font-bold uppercase transition-all duration-200 active:scale-95"
                                style={{
                                    fontSize: "0.78rem",
                                    letterSpacing: "0.12em",
                                    color: "rgba(255,255,255,0.70)",
                                    background: "rgba(255,255,255,0.06)",
                                    border: "1px solid rgba(255,255,255,0.12)",
                                    whiteSpace: "nowrap",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "rgba(255,255,255,0.10)";
                                    e.currentTarget.style.color = "#fff";
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                                    e.currentTarget.style.color = "rgba(255,255,255,0.70)";
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                                }}
                            >
                                Explore Services
                                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3">
                                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </NavLink>
                        </div>
                    </div>
                </div>

                {/* ── Stats bar — pinned to bottom ── */}
                <div
                    className="pb-6"
                    style={fadeUp("0.85s")}
                >
                    {/* Magenta → green gradient divider */}
                    <div
                        className="mb-4"
                        style={{
                            height: "1px",
                            background:
                                "linear-gradient(to right, rgba(200,30,160,0.55) 0%, rgba(0,165,80,0.55) 50%, transparent 100%)",
                        }}
                    />

                    <div
                        className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-xl overflow-hidden"
                        style={{ background: "rgba(255,255,255,0.05)" }}
                    >
                        {STATS.map((stat, i) => (
                            <div
                                key={stat.label}
                                className="flex flex-col gap-1 px-5 py-4"
                                style={{
                                    background: "rgba(10,10,18,0.80)",
                                    backdropFilter: "blur(8px)",
                                    opacity: mounted ? 1 : 0,
                                    transform: mounted ? "translateY(0)" : "translateY(10px)",
                                    transition: `opacity 0.5s ease ${0.9 + i * 0.07}s, transform 0.5s ease ${0.9 + i * 0.07}s`,
                                }}
                            >
                                <span
                                    className="font-display font-black leading-none"
                                    style={{
                                        fontSize: "clamp(1.3rem, 2.2vw, 1.9rem)",
                                        color: i % 2 === 0 ? "var(--color-green)" : "#C81EA0",
                                    }}
                                >
                                    {stat.value}
                                </span>
                                <span
                                    className="font-mono uppercase"
                                    style={{
                                        fontSize: "0.54rem",
                                        letterSpacing: "0.11em",
                                        color: "rgba(255,255,255,0.35)",
                                    }}
                                >
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}