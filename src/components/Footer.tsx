import type { JSX } from "react";
import { Link } from "react-router-dom";

export default function Footer(): JSX.Element {
    return (
        <footer className="relative overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to top, rgba(10,10,18,0.98) 0%, rgba(10,10,18,0.94) 60%, rgba(10,10,18,0.90) 100%)",
                    }}
                />

                {/* Subtle brand wash */}
                <div
                    className="absolute right-0 top-0 w-[500px] h-[300px]"
                    style={{
                        background:
                            "radial-gradient(circle at top right, rgba(139,26,140,0.12), transparent 70%)",
                        pointerEvents: "none",
                    }}
                />
            </div>

            <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8 py-20">

                {/* Top grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div>
                        <Link to={'/'}>
                            <img src="/img/logo.png" alt="TAB HSE Services Logo" className="h-[50px]" />
                        </Link>
                        <p className="mt-4 text-white/55 text-sm leading-[1.8] font-body">
                            Professional consultancy helping organisations maintain
                            compliance, protect employees, and foster environmental
                            responsibility.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4
                            className="font-mono uppercase tracking-[0.12em] text-xs mb-5"
                            style={{ color: "var(--color-purple-light)" }}
                        >
                            Services
                        </h4>
                        <ul className="space-y-3 text-sm text-white/65">
                            <li className="hover:text-white transition-colors">
                                <Link to="our-services/consultancy">Consultancy Services</Link>
                            </li>
                            <li className="hover:text-white transition-colors">
                                <Link to="our-services/training">Training Services</Link>
                            </li>
                            <li className="hover:text-white transition-colors">
                                <Link to="our-services/technical">Technical Services</Link>
                            </li>
                            <li className="hover:text-white transition-colors">
                                <Link to="our-services">See All Services</Link>
                            </li>

                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4
                            className="font-mono uppercase tracking-[0.12em] text-xs mb-5"
                            style={{ color: "var(--color-purple-light)" }}
                        >
                            Company
                        </h4>
                        <ul className="space-y-3 text-sm text-white/65">
                            <li className="hover:text-white transition-colors">
                                <Link to="about">About Us</Link>
                            </li>
                            <li className="hover:text-white transition-colors">
                                <Link to="our-services">What We offer</Link>
                            </li>
                            <li className="hover:text-white transition-colors">
                                <Link to="why-us">Why TAB HSE</Link>
                            </li>
                            <li className="hover:text-white transition-colors">
                                <Link to="contact-us">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Card */}
                    <div>
                        <div
                            className="rounded-xl p-6 backdrop-blur-xl"
                            style={{
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.12)",
                            }}
                        >
                            <h4 className="font-display font-bold text-white text-sm mb-4">
                                Get in Touch
                            </h4>
                            <p className="text-white/60 text-sm mb-4">
                                Speak to our compliance specialists.
                            </p>

                            <Link
                                to="contact-us"
                                className="inline-flex items-center justify-center rounded-lg px-5 py-2.5
                                    text-white font-display font-bold text-[0.75rem]
                                    uppercase tracking-[0.12em]
                                    transition-all duration-200 hover:brightness-110"
                                style={{
                                    background: "var(--color-green)",
                                    boxShadow: "0 4px 16px rgba(0,165,80,0.35)",
                                }}
                            >
                                Request Consultation
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div
                    className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6"
                    style={{
                        borderTop: "1px solid rgba(255,255,255,0.10)",
                    }}
                >
                    <p className="text-white/45 text-xs font-mono tracking-[0.08em]">
                        © {new Date().getFullYear()} <Link to={'/'}>TAB HSE Services</Link>. All rights reserved.
                    </p>

                    <div className="flex gap-6 text-white/50 text-xs">
                        <a href="mailto:info@tabhseservices.com" className="hover:text-white transition-colors">
                            info@tabhseservices.com
                        </a>
                        <a href="tel:+2348127107336" className="hover:text-white transition-colors">
                            +234 812 710 7336
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}