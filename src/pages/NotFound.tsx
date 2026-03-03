import type { JSX } from "react";
import { Link } from "react-router-dom";

export default function NotFound(): JSX.Element {
    return (
        <section
            className="relative min-h-[80vh] flex items-center justify-center py-28"
            style={{
                background: "var(--color-surface-light)",
            }}
        >
            {/* Soft ambient brand glow */}
            <div
                className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl"
                style={{
                    background: "var(--color-purple-light)",
                    opacity: 0.08,
                }}
            />
            <div
                className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl"
                style={{
                    background: "var(--color-green-bright)",
                    opacity: 0.08,
                }}
            />

            <div className="relative text-center px-6 max-w-[720px]">

                {/* Large soft 404 */}
                <div
                    className="font-display font-black mb-6"
                    style={{
                        fontSize: "clamp(5rem, 12vw, 9rem)",
                        letterSpacing: "-0.05em",
                        color: "rgba(0,0,0,0.05)",
                        lineHeight: 1,
                    }}
                >
                    404
                </div>

                <h1
                    className="font-display font-black"
                    style={{
                        fontSize: "clamp(2rem, 4vw, 2.8rem)",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.1,
                        color: "var(--color-text-primary)",
                    }}
                >
                    Page Not Found
                </h1>

                <p
                    className="mt-6 leading-[1.8]"
                    style={{
                        color: "var(--color-text-muted)",
                    }}
                >
                    The page you’re looking for may have been moved,
                    renamed, or no longer exists. Let’s get you back
                    on track.
                </p>

                <div className="flex justify-center gap-4 mt-10 flex-wrap">

                    {/* Primary action */}
                    <Link
                        to="/"
                        className="group flex items-center gap-2.5 rounded-lg px-8 py-3.5
                            text-white font-display font-bold text-[0.85rem]
                            uppercase tracking-[0.12em]
                            transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
                        style={{
                            background: "var(--color-green)",
                            boxShadow:
                                "0 10px 25px rgba(0,165,80,0.25)",
                        }}
                    >
                        Return Home
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
                    </Link>

                    {/* Secondary */}
                    <Link
                        to="/contact-us"
                        className="flex items-center rounded-lg px-8 py-3.5
                            font-display font-bold text-[0.85rem]
                            uppercase tracking-[0.12em]
                            transition-all duration-200"
                        style={{
                            border: "1px solid var(--color-green)",
                            color: "var(--color-green)",
                            background: "transparent",
                        }}
                    >
                        Contact Us
                    </Link>

                </div>
            </div>
        </section>
    );
}