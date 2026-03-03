// import { useEffect, useRef, useState } from "react";
// import { NavLink } from "react-router-dom";

// // ─── Hook: triggers once when element enters viewport ──────────────────────────
// function useInView(threshold = 0.15) {
//     const ref = useRef<HTMLDivElement>(null);
//     const [inView, setInView] = useState(false);

//     useEffect(() => {
//         const el = ref.current;
//         if (!el) return;
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setInView(true);
//                     observer.disconnect();
//                 }
//             },
//             { threshold }
//         );
//         observer.observe(el);
//         return () => observer.disconnect();
//     }, [threshold]);

//     return { ref, inView };
// }

// // ─── Contact details data ─────────────────────────────────────────────────────
// const CONTACT_DETAILS = [
//     {
//         id: "phone",
//         label: "Phone",
//         value: "+234 812 710 7336",
//         href: "tel:+2348127107336",
//         icon: (
//             <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
//                 <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
//             </svg>
//         ),
//     },
//     {
//         id: "email",
//         label: "Email",
//         value: "tabhseservices@gmail.com",
//         href: "mailto:tabhseservices@gmail.com",
//         icon: (
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
//                 <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//         ),
//     },
//     {
//         id: "address",
//         label: "Office",
//         value: "Enahoro Housing Estate, Ogba, Lagos State.",
//         href: "https://maps.google.com/?q=Enahoro+Housing+Estate+Ogba+Lagos",
//         icon: (
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
//                 <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" />
//                 <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//         ),
//     },
//     {
//         id: "linkedin",
//         label: "LinkedIn",
//         value: "TAB HSE Services",
//         href: "https://linkedin.com/company/tab-hse-services",
//         icon: (
//             <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
//                 <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//             </svg>
//         ),
//     },
// ];

// // ─── Contact Detail Item ──────────────────────────────────────────────────────
// function ContactItem({
//     detail,
//     delay,
//     inView,
// }: {
//     detail: typeof CONTACT_DETAILS[0];
//     delay: string;
//     inView: boolean;
// }) {
//     const [hovered, setHovered] = useState(false);

//     return (
//         <a
//             href={detail.href}
//             target={detail.id === "linkedin" || detail.id === "address" ? "_blank" : undefined}
//             rel="noopener noreferrer"
//             onMouseEnter={() => setHovered(true)}
//             onMouseLeave={() => setHovered(false)}
//             className="flex items-start gap-4 group no-underline"
//             style={{
//                 opacity: inView ? 1 : 0,
//                 transform: inView ? "translateX(0)" : "translateX(24px)",
//                 transition: `opacity 0.6s ease ${delay}, transform 0.6s ease ${delay}`,
//             }}
//         >
//             {/* Icon bubble */}
//             <div
//                 className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 mt-0.5"
//                 style={{
//                     background: hovered
//                         ? "var(--color-green)"
//                         : "rgba(139,26,140,0.25)",
//                     border: hovered
//                         ? "1px solid var(--color-green)"
//                         : "1px solid rgba(139,26,140,0.40)",
//                     color: hovered ? "#fff" : "var(--color-purple-light)",
//                 }}
//             >
//                 {detail.icon}
//             </div>

//             {/* Text */}
//             <div className="flex flex-col min-w-0">
//                 <span
//                     className="font-mono uppercase mb-0.5"
//                     style={{
//                         fontSize: "0.6rem",
//                         letterSpacing: "0.18em",
//                         color: "var(--color-green-bright)",
//                     }}
//                 >
//                     {detail.label}
//                 </span>
//                 <span
//                     className="font-body text-sm leading-snug transition-colors duration-200"
//                     style={{
//                         color: hovered ? "#fff" : "rgba(255,255,255,0.7)",
//                     }}
//                 >
//                     {detail.value}
//                 </span>
//             </div>
//         </a>
//     );
// }

// // ─── Main Component ───────────────────────────────────────────────────────────
// export default function ContactSection() {
//     const { ref, inView } = useInView(0.15);

//     return (
//         <section
//             ref={ref}
//             className="relative overflow-hidden py-20 lg:py-24"
//             // Deep purple-tinted dark — sits between off-white sections and charcoal footer
//             style={{ background: "#2A1A3E" }}
//         >
//             {/* ── Background geometry ── */}
//             <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
//                 {/* Large purple glow — top left */}
//                 <div
//                     className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
//                     style={{
//                         background: "radial-gradient(circle, rgba(139,26,140,0.20) 0%, transparent 70%)",
//                     }}
//                 />
//                 {/* Green glow — bottom right */}
//                 <div
//                     className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
//                     style={{
//                         background: "radial-gradient(circle, rgba(0,165,80,0.15) 0%, transparent 70%)",
//                     }}
//                 />
//                 {/* Faint circle rings */}
//                 <div
//                     className="absolute top-10 right-10 w-64 h-64 rounded-full"
//                     style={{ border: "1px solid rgba(255,255,255,0.04)" }}
//                 />
//                 <div
//                     className="absolute top-20 right-20 w-40 h-40 rounded-full"
//                     style={{ border: "1px solid rgba(255,255,255,0.03)" }}
//                 />
//                 {/* Accent dots */}
//                 <div
//                     className="absolute top-1/3 left-[8%] w-1.5 h-1.5 rounded-full opacity-40"
//                     style={{ background: "var(--color-green)" }}
//                 />
//                 <div
//                     className="absolute bottom-1/4 right-[12%] w-1 h-1 rounded-full opacity-30"
//                     style={{ background: "var(--color-purple-light)" }}
//                 />
//             </div>

//             <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

//                     {/* ════════════════════════════════
//                         LEFT — Image column
//                     ════════════════════════════════ */}
//                     <div
//                         className="relative"
//                         style={{
//                             opacity: inView ? 1 : 0,
//                             transform: inView ? "translateX(0)" : "translateX(-36px)",
//                             transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
//                         }}
//                     >
//                         <div
//                             className="relative w-full rounded-2xl overflow-hidden"
//                             style={{
//                                 aspectRatio: "4 / 5",
//                                 boxShadow: "var(--shadow-lg)",
//                             }}
//                         >
//                             <img
//                                 src="/img/talk.jpg"
//                                 alt="Get in touch with TAB HSE Services"
//                                 className="absolute inset-0 w-full h-full object-cover"
//                                 style={{
//                                     opacity: 0.7,
//                                     transform: inView ? "scale(1)" : "scale(1.06)",
//                                     transition: "transform 1.2s ease 0.1s",
//                                 }}
//                             />

//                             {/* Overlay gradient */}
//                             <div
//                                 className="absolute inset-0 pointer-events-none"
//                                 style={{
//                                     background:
//                                         "linear-gradient(135deg, rgba(42,26,62,0.75) 0%, rgba(26,26,46,0.40) 100%)",
//                                 }}
//                             />

//                             {/* Purple accent bar — left edge */}
//                             <div
//                                 className="absolute top-8 left-0 w-1 rounded-r-sm"
//                                 style={{
//                                     height: inView ? "100px" : "0px",
//                                     background: "linear-gradient(to bottom, var(--color-purple), var(--color-green))",
//                                     transition: "height 0.8s ease 0.4s",
//                                 }}
//                             />

//                             {/* Floating RC badge — top right of image */}
//                             <div
//                                 className="absolute top-5 right-5 px-3 py-1.5 rounded-lg"
//                                 style={{
//                                     background: "rgba(255,255,255,0.08)",
//                                     backdropFilter: "blur(10px)",
//                                     border: "1px solid rgba(255,255,255,0.12)",
//                                     opacity: inView ? 1 : 0,
//                                     transform: inView ? "translateY(0)" : "translateY(-10px)",
//                                     transition: "opacity 0.6s ease 0.6s, transform 0.6s ease 0.6s",
//                                 }}
//                             >
//                                 <span
//                                     className="font-mono uppercase text-white"
//                                     style={{ fontSize: "0.6rem", letterSpacing: "0.14em" }}
//                                 >
//                                     RC: 9122058
//                                 </span>
//                             </div>

//                             {/* Bottom tagline strip */}
//                             <div
//                                 className="absolute bottom-0 left-0 right-0 px-6 py-5"
//                                 style={{
//                                     background: "linear-gradient(to top, rgba(42,26,62,0.95) 0%, transparent 100%)",
//                                 }}
//                             >
//                                 <p
//                                     className="font-display font-black uppercase text-white leading-none"
//                                     style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", letterSpacing: "0.02em" }}
//                                 >
//                                     Let's Build Something
//                                 </p>
//                                 <p
//                                     className="font-display font-black uppercase leading-none mt-1"
//                                     style={{
//                                         fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
//                                         letterSpacing: "0.02em",
//                                         color: "var(--color-green-bright)",
//                                     }}
//                                 >
//                                     Safer Together.
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Floating availability badge — bottom left overlap */}
//                         <div
//                             className="absolute -bottom-4 left-4 lg:-left-6 flex items-center gap-3 px-4 py-3 rounded-xl bg-white"
//                             style={{
//                                 boxShadow: "var(--shadow-md)",
//                                 border: "1px solid var(--color-grey-light)",
//                                 opacity: inView ? 1 : 0,
//                                 transform: inView ? "translateY(0)" : "translateY(12px)",
//                                 transition: "opacity 0.6s ease 0.65s, transform 0.6s ease 0.65s",
//                             }}
//                         >
//                             <span className="relative flex h-2.5 w-2.5 shrink-0">
//                                 <span
//                                     className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
//                                     style={{ background: "var(--color-green)" }}
//                                 />
//                                 <span
//                                     className="relative inline-flex rounded-full h-2.5 w-2.5"
//                                     style={{ background: "var(--color-green)" }}
//                                 />
//                             </span>
//                             <span
//                                 className="font-display font-bold uppercase"
//                                 style={{
//                                     fontSize: "0.72rem",
//                                     letterSpacing: "0.08em",
//                                     color: "var(--color-charcoal)",
//                                 }}
//                             >
//                                 Available for Consultations
//                             </span>
//                         </div>
//                     </div>

//                     {/* ════════════════════════════════
//                         RIGHT — Text + contact details
//                     ════════════════════════════════ */}
//                     <div className="flex flex-col pt-6 lg:pt-0">

//                         {/* Eyebrow */}
//                         <div
//                             className="flex items-center gap-2 mb-4"
//                             style={{
//                                 opacity: inView ? 1 : 0,
//                                 transform: inView ? "translateY(0)" : "translateY(16px)",
//                                 transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s",
//                             }}
//                         >
//                             <div
//                                 className="w-7 h-0.5 rounded-full"
//                                 style={{ background: "var(--color-green)" }}
//                             />
//                             <span
//                                 className="font-mono uppercase"
//                                 style={{
//                                     fontSize: "0.65rem",
//                                     letterSpacing: "0.22em",
//                                     color: "var(--color-green)",
//                                 }}
//                             >
//                                 Get In Touch
//                             </span>
//                         </div>

//                         {/* Two-line headline */}
//                         <h2
//                             className="font-display font-black uppercase leading-none mb-2"
//                             style={{
//                                 fontSize: "clamp(2rem, 3.5vw, 3rem)",
//                                 letterSpacing: "-0.01em",
//                                 color: "#fff",
//                                 opacity: inView ? 1 : 0,
//                                 transform: inView ? "translateY(0)" : "translateY(20px)",
//                                 transition: "opacity 0.7s ease 0.22s, transform 0.7s ease 0.22s",
//                             }}
//                         >
//                             Ready to Elevate
//                         </h2>
//                         <h2
//                             className="font-display font-black uppercase leading-none mb-6"
//                             style={{
//                                 fontSize: "clamp(2rem, 3.5vw, 3rem)",
//                                 letterSpacing: "-0.01em",
//                                 color: "var(--color-purple-light)",
//                                 opacity: inView ? 1 : 0,
//                                 transform: inView ? "translateY(0)" : "translateY(20px)",
//                                 transition: "opacity 0.7s ease 0.30s, transform 0.7s ease 0.30s",
//                             }}
//                         >
//                             Your HSE Standards?
//                         </h2>

//                         {/* Body copy */}
//                         <p
//                             className="font-body text-base leading-relaxed mb-10"
//                             style={{
//                                 color: "rgba(255,255,255,0.55)",
//                                 opacity: inView ? 1 : 0,
//                                 transform: inView ? "translateY(0)" : "translateY(16px)",
//                                 transition: "opacity 0.7s ease 0.37s, transform 0.7s ease 0.37s",
//                             }}
//                         >
//                             Whether you need a consultation, a quote, or simply want to understand
//                             how we can help protect your people and your operations — we'd love to
//                             hear from you. Reach out through any of the channels below.
//                         </p>

//                         {/* Divider */}
//                         <div
//                             className="w-full h-px mb-8"
//                             style={{
//                                 background: "rgba(255,255,255,0.08)",
//                                 opacity: inView ? 1 : 0,
//                                 transition: "opacity 0.6s ease 0.42s",
//                             }}
//                         />

//                         {/* Contact details */}
//                         <div className="flex flex-col gap-5 mb-10">
//                             {CONTACT_DETAILS.map((detail, i) => (
//                                 <ContactItem
//                                     key={detail.id}
//                                     detail={detail}
//                                     delay={`${0.45 + i * 0.08}s`}
//                                     inView={inView}
//                                 />
//                             ))}
//                         </div>

//                         {/* CTA button */}
//                         <div
//                             style={{
//                                 opacity: inView ? 1 : 0,
//                                 transform: inView ? "translateY(0)" : "translateY(16px)",
//                                 transition: "opacity 0.6s ease 0.78s, transform 0.6s ease 0.78s",
//                             }}
//                         >
//                             <NavLink
//                                 to="/contact-us"
//                                 className="inline-flex items-center gap-3 px-7 py-4 rounded-xl text-white font-display font-bold uppercase text-sm transition-all duration-200 active:scale-95"
//                                 style={{
//                                     letterSpacing: "0.12em",
//                                     background: "var(--color-green)",
//                                     boxShadow: "var(--shadow-btn)",
//                                 }}
//                                 onMouseEnter={(e) => {
//                                     e.currentTarget.style.transform = "translateY(-2px)";
//                                     e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,165,80,0.45)";
//                                 }}
//                                 onMouseLeave={(e) => {
//                                     e.currentTarget.style.transform = "translateY(0)";
//                                     e.currentTarget.style.boxShadow = "var(--shadow-btn)";
//                                 }}
//                             >
//                                 Send Us a Message
//                                 <span
//                                     className="inline-flex items-center justify-center w-6 h-6 rounded-lg"
//                                     style={{ background: "rgba(255,255,255,0.18)" }}
//                                 >
//                                     <svg
//                                         viewBox="0 0 16 16"
//                                         fill="none"
//                                         stroke="currentColor"
//                                         strokeWidth={2.2}
//                                         className="w-3 h-3"
//                                     >
//                                         <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
//                                     </svg>
//                                 </span>
//                             </NavLink>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }


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

// ─── Contact details ──────────────────────────────────────────────────────────
const CONTACT_DETAILS = [
    {
        id: "phone",
        label: "Phone",
        value: "+234 812 710 7336",
        href: "tel:+2348127107336",
        icon: (
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
        ),
    },
    {
        id: "email",
        label: "Email",
        value: "tabhseservices@gmail.com",
        href: "mailto:tabhseservices@gmail.com",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: "address",
        label: "Office",
        value: "Enahoro Housing Estate, Ogba, Lagos State.",
        href: "https://maps.google.com/?q=Enahoro+Housing+Estate+Ogba+Lagos",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: "linkedin",
        label: "LinkedIn",
        value: "TAB HSE Services",
        href: "https://linkedin.com/company/tab-hse-services",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        ),
    },
];

// ─── Contact Detail Item ──────────────────────────────────────────────────────
function ContactItem({
    detail,
    delay,
    inView,
}: {
    detail: typeof CONTACT_DETAILS[0];
    delay: string;
    inView: boolean;
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <a
            href={detail.href}
            target={detail.id === "linkedin" || detail.id === "address" ? "_blank" : undefined}
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="flex items-start gap-4 no-underline"
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : "translateX(24px)",
                transition: `opacity 0.6s ease ${delay}, transform 0.6s ease ${delay}`,
                textDecoration: "none",
            }}
        >
            {/* Icon bubble */}
            <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300"
                style={{
                    background: hovered ? "var(--color-purple)" : "var(--color-purple-tint)",
                    border: "1px solid var(--color-purple-light)",
                    color: hovered ? "#fff" : "var(--color-purple)",
                }}
            >
                {detail.icon}
            </div>

            {/* Text */}
            <div className="flex flex-col min-w-0">
                <span
                    className="font-mono uppercase mb-0.5"
                    style={{
                        fontSize: "0.6rem",
                        letterSpacing: "0.18em",
                        color: "var(--color-green)",
                    }}
                >
                    {detail.label}
                </span>
                <span
                    className="font-body text-sm leading-snug transition-colors duration-200"
                    style={{
                        color: hovered ? "var(--color-purple)" : "var(--color-grey-dark)",
                    }}
                >
                    {detail.value}
                </span>
            </div>
        </a>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ContactSection() {
    const { ref, inView } = useInView(0.15);

    return (
        <section
            ref={ref}
            className="relative overflow-hidden py-20 lg:py-24"
            style={{ background: "var(--color-white)" }}
        >
            {/* ── Background geometry — light, subtle ── */}
            <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Faint purple circle — top right */}
                <div
                    className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full"
                    style={{ border: "1.5px solid rgba(139,26,140,0.06)" }}
                />
                <div
                    className="absolute -top-8 -right-8 w-64 h-64 rounded-full"
                    style={{ border: "1.5px solid rgba(139,26,140,0.05)" }}
                />
                {/* Faint green circle — bottom left */}
                <div
                    className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full"
                    style={{ border: "1.5px solid rgba(0,165,80,0.06)" }}
                />
                {/* Subtle purple tint wash — top right corner */}
                <div
                    className="absolute top-0 right-0 w-[360px] h-[360px] pointer-events-none"
                    style={{
                        background: "radial-gradient(ellipse at top right, rgba(139,26,140,0.04) 0%, transparent 70%)",
                    }}
                />
                {/* Accent dots */}
                <div
                    className="absolute top-1/3 left-[6%] w-1.5 h-1.5 rounded-full opacity-30"
                    style={{ background: "var(--color-green)" }}
                />
                <div
                    className="absolute bottom-1/4 right-[8%] w-1 h-1 rounded-full opacity-25"
                    style={{ background: "var(--color-purple)" }}
                />
            </div>

            <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* ════════════════════════════════
                        LEFT — Image
                    ════════════════════════════════ */}
                    <div
                        className="relative"
                        style={{
                            opacity: inView ? 1 : 0,
                            transform: inView ? "translateX(0)" : "translateX(-36px)",
                            transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
                        }}
                    >
                        <div
                            className="relative w-full rounded-2xl overflow-hidden"
                            style={{
                                aspectRatio: "4 / 5",
                                boxShadow: "var(--shadow-lg)",
                            }}
                        >
                            <img
                                src="/img/talk.jpg"
                                alt="Get in touch with TAB HSE Services"
                                className="absolute inset-0 w-full h-full object-cover"
                                style={{
                                    transform: inView ? "scale(1)" : "scale(1.06)",
                                    transition: "transform 1.2s ease 0.1s",
                                }}
                            />

                            {/* Dark overlay — lightened for white bg context */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background:
                                        "linear-gradient(135deg, rgba(42,26,62,0.55) 0%, rgba(26,26,46,0.25) 100%)",
                                }}
                            />

                            {/* Purple-to-green accent bar — left edge */}
                            <div
                                className="absolute top-8 left-0 w-1 rounded-r-sm"
                                style={{
                                    height: inView ? "100px" : "0px",
                                    background:
                                        "linear-gradient(to bottom, var(--color-purple), var(--color-green))",
                                    transition: "height 0.8s ease 0.4s",
                                }}
                            />

                            {/* RC badge — top right */}
                            <div
                                className="absolute top-5 right-5 px-3 py-1.5 rounded-lg"
                                style={{
                                    background: "rgba(255,255,255,0.12)",
                                    backdropFilter: "blur(10px)",
                                    border: "1px solid rgba(255,255,255,0.18)",
                                    opacity: inView ? 1 : 0,
                                    transform: inView ? "translateY(0)" : "translateY(-10px)",
                                    transition: "opacity 0.6s ease 0.6s, transform 0.6s ease 0.6s",
                                }}
                            >
                                <span
                                    className="font-mono uppercase text-white"
                                    style={{ fontSize: "0.6rem", letterSpacing: "0.14em" }}
                                >
                                    RC: 9122058
                                </span>
                            </div>

                            {/* Bottom tagline strip */}
                            <div
                                className="absolute bottom-0 left-0 right-0 px-6 py-5"
                                style={{
                                    background:
                                        "linear-gradient(to top, rgba(26,10,42,0.92) 0%, transparent 100%)",
                                }}
                            >
                                <p
                                    className="font-display font-black uppercase text-white leading-none"
                                    style={{
                                        fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                                        letterSpacing: "0.02em",
                                    }}
                                >
                                    Let's Build Something
                                </p>
                                <p
                                    className="font-display font-black uppercase leading-none mt-1"
                                    style={{
                                        fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                                        letterSpacing: "0.02em",
                                        color: "var(--color-green-bright)",
                                    }}
                                >
                                    Safer Together.
                                </p>
                            </div>
                        </div>

                        {/* Floating availability badge — bottom left overlap */}
                        <div
                            className="absolute -bottom-4 left-4 lg:-left-5 flex items-center gap-3 px-4 py-3 rounded-xl bg-white"
                            style={{
                                boxShadow: "var(--shadow-md)",
                                border: "1px solid var(--color-grey-light)",
                                opacity: inView ? 1 : 0,
                                transform: inView ? "translateY(0)" : "translateY(12px)",
                                transition: "opacity 0.6s ease 0.65s, transform 0.6s ease 0.65s",
                            }}
                        >
                            <span className="relative flex h-2.5 w-2.5 shrink-0">
                                <span
                                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                                    style={{ background: "var(--color-green)" }}
                                />
                                <span
                                    className="relative inline-flex rounded-full h-2.5 w-2.5"
                                    style={{ background: "var(--color-green)" }}
                                />
                            </span>
                            <span
                                className="font-display font-bold uppercase"
                                style={{
                                    fontSize: "0.72rem",
                                    letterSpacing: "0.08em",
                                    color: "var(--color-charcoal)",
                                }}
                            >
                                Available for Consultations
                            </span>
                        </div>
                    </div>

                    {/* ════════════════════════════════
                        RIGHT — Text + contact details
                    ════════════════════════════════ */}
                    <div className="flex flex-col pt-8 lg:pt-0">

                        {/* Eyebrow */}
                        <div
                            className="flex items-center gap-2 mb-4"
                            style={{
                                opacity: inView ? 1 : 0,
                                transform: inView ? "translateY(0)" : "translateY(16px)",
                                transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s",
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
                                Get In Touch
                            </span>
                        </div>

                        {/* Two-line headline — charcoal + purple (matches all other light sections) */}
                        <h2
                            className="font-display font-black uppercase leading-none mb-2"
                            style={{
                                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                                letterSpacing: "-0.01em",
                                color: "var(--color-charcoal)",
                                opacity: inView ? 1 : 0,
                                transform: inView ? "translateY(0)" : "translateY(20px)",
                                transition: "opacity 0.7s ease 0.22s, transform 0.7s ease 0.22s",
                            }}
                        >
                            Ready to Elevate
                        </h2>
                        <h2
                            className="font-display font-black uppercase leading-none mb-6"
                            style={{
                                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                                letterSpacing: "-0.01em",
                                color: "var(--color-purple)",
                                opacity: inView ? 1 : 0,
                                transform: inView ? "translateY(0)" : "translateY(20px)",
                                transition: "opacity 0.7s ease 0.30s, transform 0.7s ease 0.30s",
                            }}
                        >
                            Your HSE Standards?
                        </h2>

                        {/* Body copy */}
                        <p
                            className="font-body text-base leading-relaxed mb-8"
                            style={{
                                color: "var(--color-grey-mid)",
                                opacity: inView ? 1 : 0,
                                transform: inView ? "translateY(0)" : "translateY(16px)",
                                transition: "opacity 0.7s ease 0.37s, transform 0.7s ease 0.37s",
                            }}
                        >
                            Whether you need a consultation, a quote, or simply want to understand
                            how we can help protect your people and your operations — we'd love to
                            hear from you. Reach out through any of the channels below.
                        </p>

                        {/* Hairline divider */}
                        <div
                            className="w-full h-px mb-8"
                            style={{
                                background: "var(--color-grey-light)",
                                opacity: inView ? 1 : 0,
                                transition: "opacity 0.6s ease 0.42s",
                            }}
                        />

                        {/* Contact detail rows */}
                        <div className="flex flex-col gap-5 mb-10">
                            {CONTACT_DETAILS.map((detail, i) => (
                                <ContactItem
                                    key={detail.id}
                                    detail={detail}
                                    delay={`${0.45 + i * 0.08}s`}
                                    inView={inView}
                                />
                            ))}
                        </div>

                        {/* CTA */}
                        <div
                            style={{
                                opacity: inView ? 1 : 0,
                                transform: inView ? "translateY(0)" : "translateY(16px)",
                                transition: "opacity 0.6s ease 0.78s, transform 0.6s ease 0.78s",
                            }}
                        >
                            <NavLink
                                to="/contact-us"
                                className="inline-flex items-center gap-3 px-7 py-4 rounded-xl text-white font-display font-bold uppercase text-sm transition-all duration-200 active:scale-95"
                                style={{
                                    letterSpacing: "0.12em",
                                    background: "var(--color-purple)",
                                    boxShadow: "0 8px 28px rgba(139,26,140,0.28)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-2px)";
                                    e.currentTarget.style.boxShadow = "0 16px 40px rgba(139,26,140,0.38)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 8px 28px rgba(139,26,140,0.28)";
                                }}
                            >
                                Send Us a Message
                                <span
                                    className="inline-flex items-center justify-center w-6 h-6 rounded-lg"
                                    style={{ background: "rgba(255,255,255,0.18)" }}
                                >
                                    <svg
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2.2}
                                        className="w-3 h-3"
                                    >
                                        <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}