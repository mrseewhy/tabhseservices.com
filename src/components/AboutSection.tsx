

import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

/* ─────────────────────────────────────────────
   Hook
───────────────────────────────────────────── */
function useInView(threshold = 0.2) {
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

/* ─────────────────────────────────────────────
   Stat Pill
───────────────────────────────────────────── */
function Stat({ value, label, delay, inView }: any) {
    return (
        <div
            className={`flex flex-col transition-all duration-700 ease-out`}
            style={{
                transitionDelay: delay,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(16px)",
            }}
        >
            <span className="font-display font-black text-2xl leading-none text-purple">
                {value}
            </span>
            <span className="font-body text-[0.72rem] uppercase tracking-[0.1em] mt-1 text-grey-mid">
                {label}
            </span>
        </div>
    );
}

/* ─────────────────────────────────────────────
   PRIME Chip
───────────────────────────────────────────── */
function PrimeChip({ letter, word, delay, inView }: any) {
    return (
        <div
            className="flex items-center gap-2 transition-all duration-500 ease-out"
            style={{
                transitionDelay: delay,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : "translateX(-12px)",
            }}
        >
            <span className="flex items-center justify-center w-7 h-7 rounded-md shrink-0 bg-green font-display font-black text-[0.85rem] text-white">
                {letter}
            </span>
            <span className="font-display font-bold text-[0.8rem] uppercase tracking-[0.08em] text-grey-dark">
                {word}
            </span>
        </div>
    );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */
export default function AboutSection() {
    const { ref, inView } = useInView(0.15);

    const fadeUp = (delay: string) => ({
        transitionDelay: delay,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
    });

    const fadeLeft = (delay: string) => ({
        transitionDelay: delay,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-36px)",
    });

    return (
        <section
            ref={ref}
            className="relative overflow-hidden bg-off-white py-24"
        >
            {/* Background geometry */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-28 -right-28 w-[480px] h-[480px] rounded-full border border-purple/10" />
                <div className="absolute -top-10 -right-10 w-[280px] h-[280px] rounded-full border border-purple/10" />
                <div className="absolute bottom-14 left-[5%] w-2.5 h-2.5 rounded-full bg-green/40" />
                <div className="absolute top-20 left-[12%] w-1.5 h-1.5 rounded-full bg-purple/30" />
            </div>

            {/* Content Grid */}
            <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

                {/* LEFT — IMAGE */}
                <div
                    className="relative transition-all duration-800 ease-out"
                    style={fadeLeft("0s")}
                >
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg">
                        <img
                            src="/img/about-2.jpg"
                            alt="TAB HSE Services team on site"
                            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out"
                            style={{
                                transform: inView ? "scale(1)" : "scale(1.06)",
                            }}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />

                        {/* Glass Badge */}
                        <div
                            className="absolute bottom-5 left-5 right-5 flex items-center gap-3 px-4 py-3 rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl transition-all duration-700 ease-out"
                            style={{
                                transitionDelay: "0.7s",
                                opacity: inView ? 1 : 0,
                                transform: inView ? "translateY(0)" : "translateY(12px)",
                            }}
                        >
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-green">
                                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} className="w-5 h-5">
                                    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-display font-extrabold text-[0.78rem] uppercase tracking-[0.06em] text-white leading-tight">
                                    HSE Services Par Excellence
                                </p>
                                <p className="font-mono text-[0.6rem] tracking-[0.1em] text-white/60 mt-0.5">
                                    RC: 9122058
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Floating Stats Card */}
                    <div
                        className="absolute right-4 lg:-right-7 bottom-6 lg:bottom-[60px] rounded-2xl px-5 py-4 bg-white border border-grey-light shadow-md min-w-[160px] transition-all duration-700 ease-out"
                        style={{
                            transitionDelay: "0.55s",
                            opacity: inView ? 1 : 0,
                            transform: inView
                                ? "translateX(0) translateY(0)"
                                : "translateX(16px) translateY(16px)",
                        }}
                    >
                        <div className="flex flex-col gap-3">
                            <Stat value="7+" label="Service Areas" delay="0.65s" inView={inView} />
                            <div className="h-px bg-grey-light" />
                            <Stat value="ISO" label="45001 · 14001 · 9001" delay="0.75s" inView={inView} />
                        </div>
                    </div>

                    {/* Purple Accent Bar */}
                    <div
                        className="absolute top-8 -left-3 w-1 rounded-md bg-gradient-to-b from-purple to-green transition-all duration-800 ease-out"
                        style={{
                            height: inView ? "120px" : "0px",
                            opacity: inView ? 1 : 0,
                            transitionDelay: "0.3s",
                        }}
                    />
                </div>

                {/* RIGHT — TEXT */}
                <div className="flex flex-col">

                    {/* Eyebrow */}
                    <div className="flex items-center gap-2 mb-4 transition-all duration-700 ease-out" style={fadeUp("0.15s")}>
                        <div className="w-7 h-[2px] rounded bg-green" />
                        <span className="font-mono text-[0.65rem] tracking-[0.22em] uppercase text-green">
                            Who We Are
                        </span>
                    </div>

                    <h2 className="font-display font-black text-[clamp(2rem,3.5vw,3rem)] uppercase tracking-tight text-charcoal mb-2 transition-all duration-700 ease-out" style={fadeUp("0.25s")}>
                        Building Safer,
                    </h2>
                    <h2 className="font-display font-black text-[clamp(2rem,3.5vw,3rem)] uppercase tracking-tight text-purple mb-7 transition-all duration-700 ease-out" style={fadeUp("0.33s")}>
                        Healthier Industries.
                    </h2>

                    <p className="font-body text-base leading-[1.75] text-grey-dark mb-4 transition-all duration-700 ease-out" style={fadeUp("0.42s")}>
                        TAB HSE Services is a premier consultancy at the forefront of building safer,
                        healthier, and more sustainable industrial landscapes.
                    </p>

                    <p className="font-body text-base leading-[1.75] text-grey-dark mb-9 transition-all duration-700 ease-out" style={fadeUp("0.50s")}>
                        From comprehensive HSE training to strategic sustainability integration,
                        we are the dedicated partner for businesses committed to protecting their people.
                    </p>

                    {/* PRIME */}
                    <div className="mb-9 p-6 rounded-xl bg-white border border-grey-light shadow-sm transition-all duration-700 ease-out" style={fadeUp("0.56s")}>
                        <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-grey-mid mb-4">
                            We Are PRIME
                        </p>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                            <PrimeChip letter="P" word="Partnership" delay="0.60s" inView={inView} />
                            <PrimeChip letter="R" word="Responsibility" delay="0.66s" inView={inView} />
                            <PrimeChip letter="I" word="Innovation" delay="0.72s" inView={inView} />
                            <PrimeChip letter="M" word="Mastery" delay="0.78s" inView={inView} />
                            <PrimeChip letter="E" word="Evolution" delay="0.84s" inView={inView} />
                        </div>
                    </div>

                    {/* CTA */}
                    <div style={fadeUp("0.70s")}>
                        <NavLink
                            to="/about-us"
                            className="inline-flex items-center gap-3 font-display font-bold text-[0.88rem] uppercase tracking-[0.12em] text-white bg-purple hover:bg-purple-dark px-7 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                        >
                            Discover Our Story
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-white/20 transition-transform duration-200 group-hover:translate-x-1">
                                →
                            </span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
}