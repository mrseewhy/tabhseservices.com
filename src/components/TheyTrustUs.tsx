// import { useEffect, useRef, useState } from "react";

// // ─── Hook: triggers once when element enters viewport ──────────────────────────
// function useInView(threshold = 0.2) {
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

// // ─── Client data ──────────────────────────────────────────────────────────────
// const CLIENTS = [
//     { name: "Greenpeg", src: "/img/tab-1.png" },
//     { name: "C Power", src: "/img/tab-2.png" },
//     { name: "Spazio Ideale", src: "/img/tab-3.png" },
//     { name: "FilmoRE", src: "/img/tab-4.png" },
// ];

// // ─── Main Component ───────────────────────────────────────────────────────────
// export default function TrustSection() {
//     const { ref, inView } = useInView(0.2);

//     return (
//         <section
//             ref={ref}
//             className="relative overflow-hidden"
//             style={{
//                 background: "var(--color-white)",
//                 padding: "80px 0",
//                 borderTop: "1px solid var(--color-grey-light)",
//                 borderBottom: "1px solid var(--color-grey-light)",
//             }}
//         >
//             {/* ── Subtle background geometry ── */}
//             <div aria-hidden className="absolute inset-0 pointer-events-none">
//                 <div
//                     style={{
//                         position: "absolute",
//                         bottom: "-80px",
//                         left: "-80px",
//                         width: "320px",
//                         height: "320px",
//                         borderRadius: "50%",
//                         border: "1.5px solid rgba(139,26,140,0.06)",
//                     }}
//                 />
//                 <div
//                     style={{
//                         position: "absolute",
//                         top: "-60px",
//                         right: "-60px",
//                         width: "240px",
//                         height: "240px",
//                         borderRadius: "50%",
//                         border: "1.5px solid rgba(0,165,80,0.06)",
//                     }}
//                 />
//             </div>

//             <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">

//                 {/* ── Headline — mirrors AboutSection style ── */}
//                 <div className="mb-12">

//                     {/* Eyebrow */}
//                     <div
//                         className="flex items-center gap-2 mb-4"
//                         style={{
//                             opacity: inView ? 1 : 0,
//                             transform: inView ? "translateY(0)" : "translateY(16px)",
//                             transition: "opacity 0.6s ease 0s, transform 0.6s ease 0s",
//                         }}
//                     >
//                         <div
//                             style={{
//                                 width: "28px",
//                                 height: "2px",
//                                 borderRadius: "2px",
//                                 background: "var(--color-green)",
//                             }}
//                         />
//                         <span
//                             style={{
//                                 fontFamily: "var(--font-mono)",
//                                 fontSize: "0.65rem",
//                                 letterSpacing: "0.22em",
//                                 textTransform: "uppercase",
//                                 color: "var(--color-green)",
//                             }}
//                         >
//                             Our Clientele
//                         </span>
//                     </div>

//                     {/* Headline — two lines like AboutSection */}
//                     <h2
//                         style={{
//                             opacity: inView ? 1 : 0,
//                             transform: inView ? "translateY(0)" : "translateY(20px)",
//                             transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
//                             fontFamily: "var(--font-display)",
//                             fontWeight: 900,
//                             fontSize: "clamp(2rem, 3.5vw, 3rem)",
//                             textTransform: "uppercase",
//                             letterSpacing: "-0.01em",
//                             lineHeight: 1,
//                             color: "var(--color-charcoal)",
//                             marginBottom: "8px",
//                         }}
//                     >
//                         They Trust
//                     </h2>
//                     <h2
//                         style={{
//                             opacity: inView ? 1 : 0,
//                             transform: inView ? "translateY(0)" : "translateY(20px)",
//                             transition: "opacity 0.7s ease 0.18s, transform 0.7s ease 0.18s",
//                             fontFamily: "var(--font-display)",
//                             fontWeight: 900,
//                             fontSize: "clamp(2rem, 3.5vw, 3rem)",
//                             textTransform: "uppercase",
//                             letterSpacing: "-0.01em",
//                             lineHeight: 1,
//                             color: "var(--color-purple)",
//                             marginBottom: "0",
//                         }}
//                     >
//                         Our Expertise.
//                     </h2>
//                 </div>

//                 {/* ── Logo grid — 4 columns desktop, 2 tablet, responsive ── */}
//                 <div
//                     className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
//                 >
//                     {CLIENTS.map((client, i) => (
//                         <div
//                             key={client.name}
//                             className="group flex items-center justify-center rounded-2xl"
//                             style={{
//                                 opacity: inView ? 1 : 0,
//                                 transform: inView ? "translateY(0)" : "translateY(24px)",
//                                 transition: `opacity 0.6s ease ${0.28 + i * 0.1}s, transform 0.6s ease ${0.28 + i * 0.1}s`,
//                                 background: "var(--color-off-white)",
//                                 border: "1px solid var(--color-grey-light)",
//                                 padding: "32px 24px",
//                                 minHeight: "120px",
//                                 cursor: "default",
//                             }}
//                             onMouseEnter={(e) => {
//                                 e.currentTarget.style.borderColor = "var(--color-purple-light)";
//                                 e.currentTarget.style.background = "var(--color-purple-tint)";
//                                 e.currentTarget.style.transform = "translateY(-3px)";
//                                 e.currentTarget.style.boxShadow = "var(--shadow-sm)";
//                             }}
//                             onMouseLeave={(e) => {
//                                 e.currentTarget.style.borderColor = "var(--color-grey-light)";
//                                 e.currentTarget.style.background = "var(--color-off-white)";
//                                 e.currentTarget.style.transform = "translateY(0)";
//                                 e.currentTarget.style.boxShadow = "none";
//                             }}
//                         >
//                             <img
//                                 src={client.src}
//                                 alt={client.name}
//                                 className="w-full object-contain"
//                                 style={{
//                                     maxHeight: "70px",
//                                     filter: "grayscale(100%)",
//                                     opacity: 0.55,
//                                     transition: "filter 0.3s ease, opacity 0.3s ease",
//                                 }}
//                                 onMouseEnter={(e) => {
//                                     e.currentTarget.style.filter = "grayscale(0%)";
//                                     e.currentTarget.style.opacity = "1";
//                                 }}
//                                 onMouseLeave={(e) => {
//                                     e.currentTarget.style.filter = "grayscale(100%)";
//                                     e.currentTarget.style.opacity = "0.55";
//                                 }}
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }


import { useEffect, useRef, useState } from "react";

// ─── Hook ─────────────────────────────────────────────────────────────────────
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

// ─── Client data ──────────────────────────────────────────────────────────────
const CLIENTS = [
    {
        name: "Greenpeg",
        src: "/img/tab-1.png",
        industry: "Energy & Resources",
    },
    {
        name: "C Power",
        src: "/img/tab-2.png",
        industry: "Power Solutions",
    },
    {
        name: "Spazio Ideale",
        src: "/img/tab-3.png",
        industry: "Interior Design",
    },
    {
        name: "FilmoRE",
        src: "/img/tab-4.png",
        industry: "Real Estate",
    },
];

// ─── Trust stats ──────────────────────────────────────────────────────────────
const TRUST_STATS = [
    { value: "10+", label: "Trusted Clients" },
    { value: "100%", label: "Satisfaction Rate" },
    { value: "Multi", label: "Industry Reach" },
];

// ─── Client Card ──────────────────────────────────────────────────────────────
function ClientCard({
    client,
    index,
    inView,
}: {
    client: typeof CLIENTS[0];
    index: number;
    inView: boolean;
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative flex flex-col rounded-2xl overflow-hidden cursor-default"
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.6s ease ${0.3 + index * 0.1}s, transform 0.6s ease ${0.3 + index * 0.1}s`,
                background: hovered ? "var(--color-white)" : "var(--color-off-white)",
                border: hovered
                    ? "1px solid var(--color-purple-light)"
                    : "1px solid var(--color-grey-light)",
                boxShadow: hovered ? "var(--shadow-md)" : "none",
                // only transition border/shadow/bg — NOT transform (we handle that separately)
            }}
        >
            {/* Top accent bar — grows on hover */}
            <div
                className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-300"
                style={{
                    background: hovered
                        ? "linear-gradient(to right, var(--color-purple), var(--color-green))"
                        : "transparent",
                }}
            />

            {/* Logo area */}
            <div
                className="flex items-center justify-center px-8 py-10 flex-1"
                style={{ minHeight: "140px" }}
            >
                <img
                    src={client.src}
                    alt={client.name}
                    className="w-full object-contain transition-all duration-300"
                    style={{
                        maxHeight: "64px",
                        filter: hovered ? "grayscale(0%)" : "grayscale(100%)",
                        opacity: hovered ? 1 : 0.5,
                    }}
                />
            </div>

            {/* Bottom strip — slides up on hover */}
            <div
                className="px-5 pb-4 flex items-center justify-between overflow-hidden transition-all duration-300"
                style={{
                    maxHeight: hovered ? "60px" : "0px",
                    opacity: hovered ? 1 : 0,
                    paddingTop: hovered ? "0" : "0",
                }}
            >
                <div>
                    <p
                        className="font-display font-bold uppercase leading-none"
                        style={{
                            fontSize: "0.75rem",
                            letterSpacing: "0.06em",
                            color: "var(--color-charcoal)",
                        }}
                    >
                        {client.name}
                    </p>
                    <p
                        className="font-mono uppercase mt-0.5"
                        style={{
                            fontSize: "0.55rem",
                            letterSpacing: "0.12em",
                            color: "var(--color-green)",
                        }}
                    >
                        {client.industry}
                    </p>
                </div>

                {/* Small checkmark badge */}
                <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                    style={{
                        background: "var(--color-green)",
                    }}
                >
                    <svg viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth={2} className="w-3 h-3">
                        <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function TrustSection() {
    const { ref, inView } = useInView(0.15);

    return (
        <section
            ref={ref}
            className="relative overflow-hidden"
            style={{
                background: "var(--color-white)",
                padding: "80px 0",
                borderTop: "1px solid var(--color-grey-light)",
                borderBottom: "1px solid var(--color-grey-light)",
            }}
        >
            {/* ── Background geometry ── */}
            <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full"
                    style={{ border: "1.5px solid rgba(139,26,140,0.06)" }}
                />
                <div
                    className="absolute -top-16 -right-16 w-64 h-64 rounded-full"
                    style={{ border: "1.5px solid rgba(0,165,80,0.06)" }}
                />
                {/* Faint purple wash — top left */}
                <div
                    className="absolute -top-10 -left-10 w-96 h-96 rounded-full pointer-events-none"
                    style={{
                        background: "radial-gradient(circle, rgba(139,26,140,0.04) 0%, transparent 70%)",
                    }}
                />
            </div>

            <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">

                {/* ── Header row — headline left, stats right ── */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">

                    {/* Headline */}
                    <div>
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
                                Our Clientele
                            </span>
                        </div>

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
                            They Trust
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
                            Our Expertise.
                        </h2>
                    </div>

                    {/* ── Trust stats strip — right side ── */}
                    <div
                        className="flex items-center gap-px rounded-2xl overflow-hidden shrink-0"
                        style={{
                            border: "1px solid var(--color-grey-light)",
                            opacity: inView ? 1 : 0,
                            transform: inView ? "translateY(0)" : "translateY(16px)",
                            transition: "opacity 0.6s ease 0.25s, transform 0.6s ease 0.25s",
                        }}
                    >
                        {TRUST_STATS.map((stat, i) => (
                            <div
                                key={stat.label}
                                className="flex flex-col items-center px-6 py-4"
                                style={{
                                    background: "var(--color-off-white)",
                                    borderRight: i < TRUST_STATS.length - 1
                                        ? "1px solid var(--color-grey-light)"
                                        : "none",
                                    minWidth: "100px",
                                }}
                            >
                                <span
                                    className="font-display font-black leading-none mb-1"
                                    style={{
                                        fontSize: "1.5rem",
                                        color: i === 0
                                            ? "var(--color-purple)"
                                            : i === 1
                                                ? "var(--color-green)"
                                                : "var(--color-charcoal)",
                                    }}
                                >
                                    {stat.value}
                                </span>
                                <span
                                    className="font-mono uppercase text-center"
                                    style={{
                                        fontSize: "0.52rem",
                                        letterSpacing: "0.12em",
                                        color: "var(--color-grey-mid)",
                                    }}
                                >
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Client logo grid ── */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5 mb-10">
                    {CLIENTS.map((client, i) => (
                        <ClientCard
                            key={client.name}
                            client={client}
                            index={i}
                            inView={inView}
                        />
                    ))}
                </div>

                {/* ── Bottom trust statement ── */}
                <div
                    className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
                    style={{
                        borderTop: "1px solid var(--color-grey-light)",
                        opacity: inView ? 1 : 0,
                        transform: inView ? "translateY(0)" : "translateY(12px)",
                        transition: "opacity 0.6s ease 0.7s, transform 0.6s ease 0.7s",
                    }}
                >
                    {/* Left — statement */}
                    <div className="flex items-center gap-3">
                        {/* Pulse dot */}
                        <span className="relative flex h-2.5 w-2.5 shrink-0">
                            <span
                                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                                style={{ background: "var(--color-green)" }}
                            />
                            <span
                                className="relative inline-flex rounded-full h-2.5 w-2.5"
                                style={{ background: "var(--color-green)" }}
                            />
                        </span>
                        <p
                            className="font-body text-sm"
                            style={{ color: "var(--color-grey-mid)" }}
                        >
                            Trusted by organisations across diverse industries in Nigeria.
                        </p>
                    </div>

                    {/* Right — ISO badges */}
                    <div className="flex items-center gap-2 shrink-0">
                        {["ISO 45001", "ISO 14001", "ISO 9001"].map((badge) => (
                            <span
                                key={badge}
                                className="font-mono uppercase px-2.5 py-1 rounded-lg"
                                style={{
                                    fontSize: "0.55rem",
                                    letterSpacing: "0.12em",
                                    color: "var(--color-purple)",
                                    background: "var(--color-purple-tint)",
                                    border: "1px solid var(--color-purple-light)",
                                }}
                            >
                                {badge}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}