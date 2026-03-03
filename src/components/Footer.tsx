// import type { JSX } from "react";
// import { Link } from "react-router-dom";

// export default function Footer(): JSX.Element {
//     return (
//         <footer className="relative overflow-hidden">

//             {/* Background */}
//             <div className="absolute inset-0 -z-10">
//                 <div
//                     className="absolute inset-0"
//                     style={{
//                         background:
//                             "linear-gradient(to top, rgba(10,10,18,0.98) 0%, rgba(10,10,18,0.94) 60%, rgba(10,10,18,0.90) 100%)",
//                     }}
//                 />

//                 {/* Subtle brand wash */}
//                 <div
//                     className="absolute right-0 top-0 w-[500px] h-[300px]"
//                     style={{
//                         background:
//                             "radial-gradient(circle at top right, rgba(139,26,140,0.12), transparent 70%)",
//                         pointerEvents: "none",
//                     }}
//                 />
//             </div>

//             <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8 py-20">

//                 {/* Top grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

//                     {/* Brand */}
//                     <div>
//                         <Link to={'/'}>
//                             <img src="/img/logo.png" alt="TAB HSE Services Logo" className="h-[50px]" />
//                         </Link>
//                         <p className="mt-4 text-white/55 text-sm leading-[1.8] font-body">
//                             Professional consultancy helping organisations maintain
//                             compliance, protect employees, and foster environmental
//                             responsibility.
//                         </p>
//                     </div>

//                     {/* Services */}
//                     <div>
//                         <h4
//                             className="font-mono uppercase tracking-[0.12em] text-xs mb-5"
//                             style={{ color: "var(--color-purple-light)" }}
//                         >
//                             Services
//                         </h4>
//                         <ul className="space-y-3 text-sm text-white/65">
//                             <li className="hover:text-white transition-colors">
//                                 <Link to="our-services/consultancy">Consultancy Services</Link>
//                             </li>
//                             <li className="hover:text-white transition-colors">
//                                 <Link to="our-services/training">Training Services</Link>
//                             </li>
//                             <li className="hover:text-white transition-colors">
//                                 <Link to="our-services/technical">Technical Services</Link>
//                             </li>
//                             <li className="hover:text-white transition-colors">
//                                 <Link to="our-services">See All Services</Link>
//                             </li>

//                         </ul>
//                     </div>

//                     {/* Company */}
//                     <div>
//                         <h4
//                             className="font-mono uppercase tracking-[0.12em] text-xs mb-5"
//                             style={{ color: "var(--color-purple-light)" }}
//                         >
//                             Company
//                         </h4>
//                         <ul className="space-y-3 text-sm text-white/65">
//                             <li className="hover:text-white transition-colors">
//                                 <Link to="about-us">About Us</Link>
//                             </li>
//                             <li className="hover:text-white transition-colors">
//                                 <Link to="our-services">What We offer</Link>
//                             </li>
//                             <li className="hover:text-white transition-colors">
//                                 <Link to="why-us">Why TAB HSE</Link>
//                             </li>
//                             <li className="hover:text-white transition-colors">
//                                 <Link to="contact-us">Contact</Link>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Contact Card */}
//                     <div>
//                         <div
//                             className="rounded-xl p-6 backdrop-blur-xl"
//                             style={{
//                                 background: "rgba(255,255,255,0.05)",
//                                 border: "1px solid rgba(255,255,255,0.12)",
//                             }}
//                         >
//                             <h4 className="font-display font-bold text-white text-sm mb-4">
//                                 Get in Touch
//                             </h4>
//                             <p className="text-white/60 text-sm mb-4">
//                                 Speak to our compliance specialists.
//                             </p>

//                             <Link
//                                 to="contact-us"
//                                 className="inline-flex items-center justify-center rounded-lg px-5 py-2.5
//                                     text-white font-display font-bold text-[0.75rem]
//                                     uppercase tracking-[0.12em]
//                                     transition-all duration-200 hover:brightness-110"
//                                 style={{
//                                     background: "var(--color-green)",
//                                     boxShadow: "0 4px 16px rgba(0,165,80,0.35)",
//                                 }}
//                             >
//                                 Request Consultation
//                             </Link>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Divider */}
//                 <div
//                     className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6"
//                     style={{
//                         borderTop: "1px solid rgba(255,255,255,0.10)",
//                     }}
//                 >
//                     <p className="text-white/45 text-xs font-mono tracking-[0.08em]">
//                         © {new Date().getFullYear()} <Link to={'/'}>TAB HSE Services</Link>. All rights reserved.
//                     </p>

//                     <div className="flex gap-6 text-white/50 text-xs">
//                         <a href="mailto:info@tabhseservices.com" className="hover:text-white transition-colors">
//                             info@tabhseservices.com
//                         </a>
//                         <a href="tel:+2348127107336" className="hover:text-white transition-colors">
//                             +234 812 710 7336
//                         </a>
//                     </div>
//                 </div>

//             </div>
//         </footer>
//     );
// }


import type { JSX } from "react";
import { Link, NavLink } from "react-router-dom";

// ─── Data ──────────────────────────────────────────────────────────────────────

const SERVICES_LINKS = [
    { label: "Consultancy Services", to: "/our-services/consultancy" },
    { label: "Environmental Sustainability", to: "/our-services/environmental-sustainability" },
    { label: "Training Services", to: "/our-services/training" },
    { label: "Commercial / Procurement", to: "/our-services/commercial-procurement" },
    { label: "Technical Services", to: "/our-services/technical" },
    { label: "Management Systems", to: "/our-services/management-systems" },
    { label: "Facilities Management", to: "/our-services/facilities-management" },
];

const COMPANY_LINKS = [
    { label: "About Us", to: "/about-us" },
    { label: "Our Services", to: "/our-services" },
    { label: "Why TAB HSE", to: "/why-us" },
    { label: "Contact Us", to: "/contact-us" },
];

const SOCIAL_LINKS = [
    {
        label: "LinkedIn",
        href: "https://linkedin.com/company/tab-hse-services",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        ),
    },
    {
        label: "Email",
        href: "mailto:tabhseservices@gmail.com",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: "Phone",
        href: "tel:+2348127107336",
        icon: (
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
        ),
    },
];

const ISO_BADGES = ["ISO 45001", "ISO 14001", "ISO 9001", "ISO 41001"];

// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer(): JSX.Element {
    return (
        <footer
            className="relative overflow-hidden"
            style={{
                // Gradient flows from #2A1A3E (contact section bottom) into #0A0A12 (deepest dark)
                background: "linear-gradient(to bottom, #1E1230 0%, #0F0A1A 40%, #0A0A12 100%)",
            }}
        >
            {/* ── Decorative background elements ── */}
            <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Purple radial — top left, bleeds from contact section */}
                <div
                    className="absolute -top-32 -left-32 w-[600px] h-[400px] rounded-full"
                    style={{
                        background: "radial-gradient(ellipse, rgba(139,26,140,0.10) 0%, transparent 70%)",
                    }}
                />
                {/* Green radial — bottom right */}
                <div
                    className="absolute bottom-0 right-0 w-96 h-96"
                    style={{
                        background: "radial-gradient(ellipse at bottom right, rgba(0,165,80,0.07) 0%, transparent 70%)",
                    }}
                />
                {/* Horizontal rule glow at very top — blends with contact section */}
                <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{
                        background: "linear-gradient(to right, transparent 0%, rgba(139,26,140,0.35) 30%, rgba(0,165,80,0.35) 70%, transparent 100%)",
                    }}
                />
                {/* Large faint circle */}
                <div
                    className="absolute top-10 right-[-100px] w-[500px] h-[500px] rounded-full"
                    style={{ border: "1px solid rgba(255,255,255,0.03)" }}
                />
                {/* Accent dots */}
                <div className="absolute top-24 left-[10%] w-1 h-1 rounded-full opacity-30"
                    style={{ background: "var(--color-green)" }} />
                <div className="absolute bottom-20 left-[30%] w-1 h-1 rounded-full opacity-20"
                    style={{ background: "var(--color-purple-light)" }} />
            </div>

            {/* ── Large brand wordmark watermark ── */}
            <div
                aria-hidden
                className="absolute bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap select-none pointer-events-none"
                style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: "clamp(5rem, 14vw, 12rem)",
                    textTransform: "uppercase",
                    letterSpacing: "-0.03em",
                    color: "rgba(255,255,255,0.018)",
                    lineHeight: 1,
                }}
            >
                TAB HSE
            </div>

            <div className="relative mx-auto w-full max-w-[1280px] px-6 lg:px-8">

                {/* ── Top brand strip ── */}
                <div
                    className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-10"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                >
                    {/* Logo + tagline */}
                    <div className="flex flex-col gap-3">
                        <Link to="/" className="inline-block">
                            <img
                                src="/img/logo.png"
                                alt="TAB HSE Services"
                                className="h-12 w-auto object-contain"
                            />
                        </Link>
                        <p
                            className="font-mono uppercase"
                            style={{
                                fontSize: "0.6rem",
                                letterSpacing: "0.2em",
                                color: "rgba(255,255,255,0.3)",
                            }}
                        >
                            HSE Services Par Excellence · RC: 9122058
                        </p>
                    </div>

                    {/* ISO certification badges */}
                    <div className="flex flex-wrap gap-2">
                        {ISO_BADGES.map((badge) => (
                            <span
                                key={badge}
                                className="font-mono uppercase px-3 py-1.5 rounded-lg"
                                style={{
                                    fontSize: "0.58rem",
                                    letterSpacing: "0.14em",
                                    color: "var(--color-green-bright)",
                                    background: "rgba(52,214,121,0.08)",
                                    border: "1px solid rgba(52,214,121,0.18)",
                                }}
                            >
                                {badge}
                            </span>
                        ))}
                    </div>

                    {/* Social icons */}
                    <div className="flex items-center gap-3">
                        {SOCIAL_LINKS.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                aria-label={s.label}
                                target={s.href.startsWith("http") ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                                style={{
                                    background: "rgba(255,255,255,0.05)",
                                    border: "1px solid rgba(255,255,255,0.09)",
                                    color: "rgba(255,255,255,0.45)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "var(--color-purple)";
                                    e.currentTarget.style.borderColor = "var(--color-purple)";
                                    e.currentTarget.style.color = "#fff";
                                    e.currentTarget.style.transform = "translateY(-2px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)";
                                    e.currentTarget.style.color = "rgba(255,255,255,0.45)";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* ── Main link grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12">

                    {/* Brand column */}
                    <div className="lg:col-span-1 flex flex-col gap-4">
                        <h4
                            className="font-mono uppercase"
                            style={{
                                fontSize: "0.62rem",
                                letterSpacing: "0.18em",
                                color: "var(--color-purple-light)",
                            }}
                        >
                            About Us
                        </h4>
                        <p
                            className="font-body text-sm leading-relaxed"
                            style={{ color: "rgba(255,255,255,0.40)" }}
                        >
                            Premier HSE consultancy helping organisations maintain
                            compliance, protect people, and embed sustainable
                            environmental responsibility across Nigeria.
                        </p>

                        {/* CTA */}
                        <NavLink
                            to="/contact-us"
                            className="inline-flex items-center gap-2 mt-2 px-4 py-2.5 rounded-lg font-display font-bold uppercase text-white transition-all duration-200 hover:brightness-110 active:scale-95 w-fit"
                            style={{
                                fontSize: "0.75rem",
                                letterSpacing: "0.1em",
                                background: "var(--color-green)",
                                boxShadow: "0 4px 20px rgba(0,165,80,0.25)",
                            }}
                        >
                            Get a Free Consultation
                            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2.2} className="w-3 h-3">
                                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </NavLink>
                    </div>

                    {/* Services column */}
                    <div className="flex flex-col gap-4">
                        <h4
                            className="font-mono uppercase"
                            style={{
                                fontSize: "0.62rem",
                                letterSpacing: "0.18em",
                                color: "var(--color-purple-light)",
                            }}
                        >
                            Our Services
                        </h4>
                        <ul className="flex flex-col gap-2.5">
                            {SERVICES_LINKS.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="font-body text-sm transition-all duration-200 flex items-center gap-2 group"
                                        style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = "#fff";
                                            e.currentTarget.style.paddingLeft = "4px";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = "rgba(255,255,255,0.45)";
                                            e.currentTarget.style.paddingLeft = "0";
                                        }}
                                    >
                                        <span
                                            className="w-1 h-1 rounded-full shrink-0 transition-all duration-200"
                                            style={{ background: "var(--color-green)", opacity: 0.6 }}
                                        />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company column */}
                    <div className="flex flex-col gap-4">
                        <h4
                            className="font-mono uppercase"
                            style={{
                                fontSize: "0.62rem",
                                letterSpacing: "0.18em",
                                color: "var(--color-purple-light)",
                            }}
                        >
                            Company
                        </h4>
                        <ul className="flex flex-col gap-2.5">
                            {COMPANY_LINKS.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="font-body text-sm transition-all duration-200 flex items-center gap-2"
                                        style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = "#fff";
                                            e.currentTarget.style.paddingLeft = "4px";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = "rgba(255,255,255,0.45)";
                                            e.currentTarget.style.paddingLeft = "0";
                                        }}
                                    >
                                        <span
                                            className="w-1 h-1 rounded-full shrink-0"
                                            style={{ background: "var(--color-purple-light)", opacity: 0.6 }}
                                        />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact column */}
                    <div className="flex flex-col gap-4">
                        <h4
                            className="font-mono uppercase"
                            style={{
                                fontSize: "0.62rem",
                                letterSpacing: "0.18em",
                                color: "var(--color-purple-light)",
                            }}
                        >
                            Contact
                        </h4>

                        <div className="flex flex-col gap-4">
                            {/* Phone */}
                            <a
                                href="tel:+2348127107336"
                                className="flex items-start gap-3 group transition-colors duration-200"
                                style={{ textDecoration: "none" }}
                                onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
                                onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
                            >
                                <div
                                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200"
                                    style={{
                                        background: "rgba(0,165,80,0.12)",
                                        border: "1px solid rgba(0,165,80,0.20)",
                                        color: "var(--color-green-bright)",
                                    }}
                                >
                                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-mono uppercase mb-0.5" style={{ fontSize: "0.55rem", letterSpacing: "0.14em", color: "rgba(255,255,255,0.3)" }}>
                                        Phone
                                    </p>
                                    <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                                        +234 812 710 7336
                                    </p>
                                </div>
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:tabhseservices@gmail.com"
                                className="flex items-start gap-3 transition-colors duration-200"
                                style={{ textDecoration: "none" }}
                            >
                                <div
                                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                                    style={{
                                        background: "rgba(139,26,140,0.12)",
                                        border: "1px solid rgba(139,26,140,0.22)",
                                        color: "var(--color-purple-light)",
                                    }}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-3.5 h-3.5">
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-mono uppercase mb-0.5" style={{ fontSize: "0.55rem", letterSpacing: "0.14em", color: "rgba(255,255,255,0.3)" }}>
                                        Email
                                    </p>
                                    <p className="font-body text-sm break-all" style={{ color: "rgba(255,255,255,0.6)" }}>
                                        tabhseservices@gmail.com
                                    </p>
                                </div>
                            </a>

                            {/* Address */}
                            <div className="flex items-start gap-3">
                                <div
                                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                                    style={{
                                        background: "rgba(0,165,80,0.12)",
                                        border: "1px solid rgba(0,165,80,0.20)",
                                        color: "var(--color-green-bright)",
                                    }}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-3.5 h-3.5">
                                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-mono uppercase mb-0.5" style={{ fontSize: "0.55rem", letterSpacing: "0.14em", color: "rgba(255,255,255,0.3)" }}>
                                        Office
                                    </p>
                                    <p className="font-body text-sm leading-snug" style={{ color: "rgba(255,255,255,0.6)" }}>
                                        Enahoro Housing Estate,<br />Ogba, Lagos State
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Bottom bar ── */}
                <div
                    className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                    {/* Copyright */}
                    <p
                        className="font-mono text-center sm:text-left"
                        style={{
                            fontSize: "0.62rem",
                            letterSpacing: "0.08em",
                            color: "rgba(255,255,255,0.25)",
                        }}
                    >
                        © {new Date().getFullYear()} TAB HSE Services Ltd. All rights reserved.
                    </p>

                    {/* PRIME values — subtle branding strip */}
                    <div className="flex items-center gap-1">
                        {["P", "R", "I", "M", "E"].map((letter, i) => (
                            <span
                                key={letter}
                                className="font-display font-black"
                                style={{
                                    fontSize: "0.75rem",
                                    color: i % 2 === 0
                                        ? "rgba(139,26,140,0.35)"
                                        : "rgba(0,165,80,0.35)",
                                    letterSpacing: "0.1em",
                                }}
                            >
                                {letter}
                            </span>
                        ))}
                        <span
                            className="font-mono ml-2"
                            style={{
                                fontSize: "0.55rem",
                                letterSpacing: "0.12em",
                                color: "rgba(255,255,255,0.18)",
                                textTransform: "uppercase",
                            }}
                        >
                            · Partnership · Responsibility · Innovation · Mastery · Evolution
                        </span>
                    </div>

                    {/* Built tag */}
                    <p
                        className="font-mono"
                        style={{
                            fontSize: "0.58rem",
                            letterSpacing: "0.08em",
                            color: "rgba(255,255,255,0.18)",
                        }}
                    >
                        Designed By <a href="https://bigyarddigital.com/" target="_blank">Bigyard Digital</a>.
                    </p>
                </div>
            </div>
        </footer>
    );
}