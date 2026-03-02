// import { useState, useEffect, useRef } from "react";
// import { NavLink } from "react-router-dom";

// // ─── Types ─────────────────────────────────────────────────────────────────────

// interface ServiceItem {
//     label: string;
//     desc: string;
//     icon: React.ReactNode;
//     url: string;
// }

// interface NavLinkItem {
//     label: string;
//     href: string;
//     hasDropdown?: boolean;
// }

// // ─── Data ──────────────────────────────────────────────────────────────────────

// const SERVICES: ServiceItem[] = [
//     {
//         label: "Consultancy Services",
//         desc: "HSE policy, audits, hazard assessments & incident investigation",
//         url: "/our-services",
//         icon: (
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 shrink-0">
//                 <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0119 8.414V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//         ),
//     },
//     {
//         label: "Environmental Sustainability",
//         desc: "EIA, sustainability strategy, carbon footprint & waste management",
//         url: "/our-services",
//         icon: (
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 shrink-0">
//                 <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//         ),
//     },
//     {
//         label: "Training Services",
//         desc: "HSE officer to management level, ISO 14001, fire safety & first aid",
//         url: "/our-services",
//         icon: (
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 shrink-0">
//                 <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//         ),
//     },
//     {
//         label: "Commercial / Procurement",
//         desc: "PPE supply, safety signage, fire equipment & security systems",
//         url: "/our-services",
//         icon: (
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 shrink-0">
//                 <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//         ),
//     },
//     {
//         label: "Technical Services",
//         desc: "Fire system installation, security systems & IoT integration",
//         url: "/our-services",
//         icon: (
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 shrink-0">
//                 <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" />
//                 <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//         ),
//     },
//     {
//         label: "Management Systems",
//         desc: "ISO 45001, 14001, 9001 & 41001 development, integration & certification",
//         url: "/our-services",
//         icon: (
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 shrink-0">
//                 <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//         ),
//     },
//     {
//         label: "Facilities Management",
//         desc: "Cleaning, safety inspections, energy management & personnel",
//         url: "/our-services",
//         icon: (
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 shrink-0">
//                 <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//         ),
//     },
// ];

// const NAV_LINKS: NavLinkItem[] = [
//     { label: "Home", href: "/" },
//     { label: "About Us", href: "/about-us" },
//     { label: "Our Services", href: "/our-services", hasDropdown: true },
//     { label: "Why Us", href: "/why-us" },
//     { label: "Contact Us", href: "/contact-us" },
// ];

// // ─── Logo ──────────────────────────────────────────────────────────────────────
// // The logo image is coloured so the navbar background is white.
// // Place your logo at: /public/img/logo.jpeg (or .png)
// // The <img> has a max-height so it scales correctly at any navbar height.

// function Logo() {
//     return (
//         <NavLink to="/" className="flex items-center shrink-0">
//             <img
//                 src="/img/logo.png"
//                 alt="TAB HSE Services"
//                 className="h-12 w-auto object-contain"
//             // h-12 = 48px tall; width scales automatically
//             // Change to h-10 (40px) or h-14 (56px) to taste
//             />
//         </NavLink>
//     );
// }

// // ─── Icons ─────────────────────────────────────────────────────────────────────

// function ChevronIcon({ open }: { open: boolean }) {
//     return (
//         <svg
//             viewBox="0 0 16 16"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth={2.2}
//             className={`w-3 h-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
//         >
//             <path d="M3 6l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//     );
// }

// function HamburgerIcon({ open }: { open: boolean }) {
//     return (
//         <span className="flex flex-col justify-between w-5 h-4">
//             <span
//                 className={`block h-0.5 rounded-full origin-center transition-all duration-300 ${open ? "rotate-45 translate-y-[7px] bg-purple" : "bg-charcoal"
//                     }`}
//                 // uses CSS var via Tailwind token: bg-charcoal, bg-purple
//                 style={{ backgroundColor: open ? "var(--color-purple)" : "var(--color-charcoal)" }}
//             />
//             <span
//                 className={`block h-0.5 rounded-full transition-all duration-200 ${open ? "opacity-0 scale-x-0" : ""}`}
//                 style={{ backgroundColor: "var(--color-charcoal)" }}
//             />
//             <span
//                 className={`block h-0.5 rounded-full origin-center transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""
//                     }`}
//                 style={{ backgroundColor: open ? "var(--color-purple)" : "var(--color-charcoal)" }}
//             />
//         </span>
//     );
// }

// // ─── Desktop Mega Dropdown ─────────────────────────────────────────────────────

// interface MegaDropdownProps {
//     visible: boolean;
//     onMouseEnter: () => void;
//     onMouseLeave: () => void;
// }

// function MegaDropdown({ visible, onMouseEnter, onMouseLeave }: MegaDropdownProps) {
//     return (
//         <div
//             onMouseEnter={onMouseEnter}
//             onMouseLeave={onMouseLeave}
//             className={`
//         absolute top-[calc(100%+4px)] left-1/2 -translate-x-1/2
//         w-[740px] rounded-2xl overflow-hidden shadow-2xl z-50
//         transition-all duration-200 origin-top
//         ${visible
//                     ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
//                     : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
//                 }
//       `}
//             style={{
//                 background: "var(--color-dropdown-bg)",
//                 border: "1px solid var(--color-dropdown-border)",
//             }}
//         >
//             {/* ── Header ── */}
//             <div
//                 className="flex items-center justify-between px-6 py-4"
//                 style={{
//                     background: "var(--color-dropdown-header)",
//                     borderBottom: "1px solid rgba(255,255,255,0.07)",
//                 }}
//             >
//                 <div>
//                     <p
//                         style={{
//                             fontFamily: "var(--font-mono)",
//                             fontSize: "0.62rem",
//                             letterSpacing: "0.2em",
//                             textTransform: "uppercase",
//                             color: "var(--color-green-bright)",
//                         }}
//                     >
//                         What we offer
//                     </p>
//                     <p
//                         style={{
//                             fontFamily: "var(--font-display)",
//                             fontWeight: 800,
//                             fontSize: "1.1rem",
//                             textTransform: "uppercase",
//                             letterSpacing: "0.04em",
//                             color: "#fff",
//                             marginTop: "1px",
//                         }}
//                     >
//                         Our Services
//                     </p>
//                 </div>

//                 <NavLink
//                     to="/our-services"
//                     className="flex items-center gap-2 transition-colors hover:text-white"
//                     style={{
//                         fontFamily: "var(--font-display)",
//                         fontWeight: 700,
//                         fontSize: "0.78rem",
//                         textTransform: "uppercase",
//                         letterSpacing: "0.12em",
//                         color: "var(--color-green-bright)",
//                     }}
//                 >
//                     View All
//                     <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3">
//                         <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
//                     </svg>
//                 </NavLink>
//             </div>

//             {/* ── 2-column service grid ── */}
//             <div
//                 className="grid grid-cols-2 gap-px p-1"
//                 style={{ background: "rgba(255,255,255,0.04)" }}
//             >
//                 {SERVICES.map((svc) => (
//                     <NavLink
//                         key={svc.label}
//                         to={svc.url}
//                         className="group flex items-start gap-3.5 px-5 py-4 rounded-xl transition-all duration-200 hover:bg-[#7B1FA2]/20"
//                         style={{ background: "var(--color-dropdown-bg)" }}
//                     >
//                         {/* Icon */}
//                         <div
//                             className="mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 group-hover:bg-[#7B1FA2]"
//                             style={{
//                                 background: "rgba(123,31,162,0.18)",
//                                 color: "var(--color-purple-light)",
//                             }}
//                         >
//                             {svc.icon}
//                         </div>

//                         {/* Text */}
//                         <div>
//                             <p
//                                 className="transition-colors duration-200 group-hover:text-[#66BB6A]"
//                                 style={{
//                                     fontFamily: "var(--font-display)",
//                                     fontWeight: 700,
//                                     fontSize: "0.88rem",
//                                     textTransform: "uppercase",
//                                     letterSpacing: "0.04em",
//                                     color: "#fff",
//                                     lineHeight: 1.2,
//                                 }}
//                             >
//                                 {svc.label}
//                             </p>
//                             <p
//                                 className="mt-1"
//                                 style={{
//                                     fontFamily: "var(--font-body)",
//                                     fontSize: "0.75rem",
//                                     color: "rgba(255,255,255,0.42)",
//                                     lineHeight: 1.5,
//                                 }}
//                             >
//                                 {svc.desc}
//                             </p>
//                         </div>
//                     </NavLink>
//                 ))}
//             </div>

//             {/* ── Footer CTA ── */}
//             <div
//                 className="flex items-center justify-between px-6 py-3.5"
//                 style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
//             >
//                 <p
//                     style={{
//                         fontFamily: "var(--font-body)",
//                         fontSize: "0.78rem",
//                         color: "rgba(255,255,255,0.36)",
//                     }}
//                 >
//                     Not sure where to start? Let us guide you.
//                 </p>
//                 <NavLink
//                     to="/contact-us"
//                     className="flex items-center gap-2 px-4 py-2 rounded-md text-white transition-all hover:brightness-110 active:scale-95"
//                     style={{
//                         background: "var(--color-green)",
//                         fontFamily: "var(--font-display)",
//                         fontWeight: 700,
//                         fontSize: "0.78rem",
//                         textTransform: "uppercase",
//                         letterSpacing: "0.1em",
//                     }}
//                 >
//                     Free Consultation
//                     <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3">
//                         <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
//                     </svg>
//                 </NavLink>
//             </div>
//         </div>
//     );
// }

// // ─── Mobile Accordion ──────────────────────────────────────────────────────────

// function MobileServicesAccordion({ open }: { open: boolean }) {
//     return (
//         <div
//             className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[680px]" : "max-h-0"}`}
//         >
//             <div
//                 className="ml-4 pl-4 pt-1 pb-3 flex flex-col gap-0.5"
//                 style={{ borderLeft: "2px solid rgba(123,31,162,0.25)" }}
//             >
//                 {SERVICES.map((svc) => (
//                     <NavLink
//                         key={svc.label}
//                         to={svc.url}
//                         className="flex items-center gap-3 py-2.5 group"
//                     >
//                         <span
//                             className="transition-colors shrink-0 group-hover:text-[#66BB6A]"
//                             style={{ color: "var(--color-purple-light)" }}
//                         >
//                             {svc.icon}
//                         </span>
//                         <span
//                             className="transition-colors group-hover:text-[#7B1FA2]"
//                             style={{
//                                 fontFamily: "var(--font-display)",
//                                 fontWeight: 700,
//                                 fontSize: "0.88rem",
//                                 textTransform: "uppercase",
//                                 letterSpacing: "0.07em",
//                                 color: "var(--color-grey-dark)",
//                             }}
//                         >
//                             {svc.label}
//                         </span>
//                     </NavLink>
//                 ))}
//             </div>
//         </div>
//     );
// }

// // ─── Main Navbar ───────────────────────────────────────────────────────────────

// export default function Navbar() {
//     const [scrolled, setScrolled] = useState<boolean>(false);
//     const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
//     const [mobileOpen, setMobileOpen] = useState<boolean>(false);
//     const [mobileServicesOpen, setMobileServicesOpen] = useState<boolean>(false);

//     const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

//     // ── Scroll listener ──
//     useEffect(() => {
//         const onScroll = () => setScrolled(window.scrollY > 24);
//         window.addEventListener("scroll", onScroll, { passive: true });
//         return () => window.removeEventListener("scroll", onScroll);
//     }, []);

//     // ── Close mobile menu on desktop ──
//     useEffect(() => {
//         const onResize = () => {
//             if (window.innerWidth >= 1024) setMobileOpen(false);
//         };
//         window.addEventListener("resize", onResize);
//         return () => window.removeEventListener("resize", onResize);
//     }, []);

//     // ── Lock body scroll when mobile menu open ──
//     useEffect(() => {
//         document.body.style.overflow = mobileOpen ? "hidden" : "";
//         return () => { document.body.style.overflow = ""; };
//     }, [mobileOpen]);

//     const openDropdown = () => {
//         if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
//         setDropdownOpen(true);
//     };

//     const closeDropdown = () => {
//         dropdownTimer.current = setTimeout(() => setDropdownOpen(false), 150);
//     };

//     // ── Shared link style ──
//     const linkStyle: React.CSSProperties = {
//         fontFamily: "var(--font-display)",
//         fontWeight: 700,
//         fontSize: "0.83rem",
//         textTransform: "uppercase",
//         letterSpacing: "0.1em",
//     };

//     return (
//         <header
//             className={`sticky backdrop-blur-md  top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-3"
//                 }`}
//             style={{
//                 backgroundColor: "var(--color-purple-tint)",
//                 borderBottom: `1px solid ${scrolled ? "var(--color-nav-border)" : "var(--color-nav-border)"}`,
//                 boxShadow: scrolled ? "var(--color-nav-shadow)" : "var(--color-nav-shadow)",
//                 // Always show a subtle shadow so the white bar doesn't bleed into the hero
//             }}
//         >
//             {/* ── Max-width container ── */}
//             <div className="max-w-[1280px] mx-auto px-5 lg:px-8 flex items-center justify-between gap-6">

//                 {/* Logo */}
//                 <Logo />

//                 {/* ── Desktop nav links ── */}
//                 <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
//                     {NAV_LINKS.map((link) => {
//                         const isServices = !!link.hasDropdown;

//                         return (
//                             <div
//                                 key={link.label}
//                                 className="relative"
//                                 onMouseEnter={isServices ? openDropdown : undefined}
//                                 onMouseLeave={isServices ? closeDropdown : undefined}
//                             >
//                                 <NavLink
//                                     to={link.href}
//                                     className={({ isActive }) =>
//                                         [
//                                             "relative flex items-center gap-1.5 px-4 py-2 rounded-md",
//                                             "transition-colors duration-200 whitespace-nowrap",
//                                             isActive
//                                                 ? "text-[#7B1FA2]"
//                                                 : "hover:text-[#7B1FA2]",
//                                         ].join(" ")
//                                     }
//                                     style={({ isActive }) => ({
//                                         ...linkStyle,
//                                         color: isActive
//                                             ? "var(--color-nav-link-active)"
//                                             : "var(--color-nav-link)",
//                                     })}
//                                 >
//                                     {({ isActive }) => (
//                                         <>
//                                             {link.label}
//                                             {isServices && <ChevronIcon open={dropdownOpen} />}
//                                             {/* Active underline dot */}
//                                             {isActive && (
//                                                 <span
//                                                     className="absolute bottom-0.5 left-4 right-4 h-px rounded-full"
//                                                     style={{ background: "var(--color-purple)" }}
//                                                 />
//                                             )}
//                                         </>
//                                     )}
//                                 </NavLink>

//                                 {isServices && (
//                                     <MegaDropdown
//                                         visible={dropdownOpen}
//                                         onMouseEnter={openDropdown}
//                                         onMouseLeave={closeDropdown}
//                                     />
//                                 )}
//                             </div>
//                         );
//                     })}
//                 </nav>

//                 {/* ── Desktop right side ── */}
//                 <div className="hidden lg:flex items-center gap-4 shrink-0">
//                     {/* Phone number */}
//                     <a
//                         href="tel:+2348127107336"
//                         className="flex items-center gap-1.5 transition-colors hover:text-[#7B1FA2]"
//                         style={{
//                             fontFamily: "var(--font-mono)",
//                             fontSize: "0.68rem",
//                             color: "var(--color-grey-mid)",
//                             letterSpacing: "0.07em",
//                         }}
//                     >
//                         <svg
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                             className="w-3.5 h-3.5 shrink-0"
//                             style={{ color: "var(--color-green)" }}
//                         >
//                             <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
//                         </svg>
//                         +234 812 710 7336
//                     </a>

//                     {/* CTA button */}
//                     <NavLink
//                         to="/contact-us"
//                         className="flex items-center gap-2 px-5 py-2.5 rounded-md text-white
//               transition-all duration-200 hover:brightness-110 active:scale-95"
//                         style={{
//                             background: "var(--color-green)",
//                             fontFamily: "var(--font-display)",
//                             fontWeight: 700,
//                             fontSize: "0.83rem",
//                             textTransform: "uppercase",
//                             letterSpacing: "0.1em",
//                             boxShadow: "0 4px 14px rgba(46,125,50,0.35)",
//                         }}
//                     >
//                         Get a Quote
//                         <svg
//                             viewBox="0 0 16 16"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth={2.2}
//                             className="w-3.5 h-3.5"
//                         >
//                             <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                     </NavLink>
//                 </div>

//                 {/* ── Mobile hamburger ── */}
//                 <button
//                     className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md transition-colors"
//                     style={{
//                         background: mobileOpen
//                             ? "var(--color-purple-tint)"
//                             : "var(--color-off-white)",
//                         border: "1px solid var(--color-grey-light)",
//                     }}
//                     onClick={() => setMobileOpen((o) => !o)}
//                     aria-label="Toggle navigation"
//                     aria-expanded={mobileOpen}
//                 >
//                     <HamburgerIcon open={mobileOpen} />
//                 </button>
//             </div>

//             {/* ── Mobile drawer ── */}
//             <div
//                 className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
//                     }`}
//                 style={{
//                     background: "var(--color-white)",
//                     borderTop: `1px solid var(--color-nav-border)`,
//                 }}
//             >
//                 <div className="max-w-[1280px] mx-auto px-5 py-5 flex flex-col gap-1">

//                     {NAV_LINKS.map((link) => {
//                         const isServices = !!link.hasDropdown;
//                         return (
//                             <div key={link.label}>
//                                 {isServices ? (
//                                     <button
//                                         className="w-full flex items-center justify-between px-3 py-3 rounded-xl transition-colors hover:bg-[#F3E5F5]"
//                                         onClick={() => setMobileServicesOpen((o) => !o)}
//                                         style={{ color: "var(--color-grey-dark)" }}
//                                     >
//                                         <span style={{ ...linkStyle, fontSize: "0.9rem" }}>
//                                             {link.label}
//                                         </span>
//                                         <ChevronIcon open={mobileServicesOpen} />
//                                     </button>
//                                 ) : (
//                                     <NavLink
//                                         to={link.href}
//                                         className={({ isActive }) =>
//                                             `flex items-center px-3 py-3 rounded-xl transition-colors hover:bg-[#F3E5F5] ${isActive ? "text-[#7B1FA2]" : ""
//                                             }`
//                                         }
//                                         style={({ isActive }) => ({
//                                             ...linkStyle,
//                                             fontSize: "0.9rem",
//                                             color: isActive
//                                                 ? "var(--color-purple)"
//                                                 : "var(--color-grey-dark)",
//                                         })}
//                                         onClick={() => setMobileOpen(false)}
//                                     >
//                                         {link.label}
//                                     </NavLink>
//                                 )}

//                                 {isServices && (
//                                     <MobileServicesAccordion open={mobileServicesOpen} />
//                                 )}
//                             </div>
//                         );
//                     })}

//                     {/* Mobile CTA */}
//                     <div
//                         className="mt-3 pt-4 flex flex-col gap-3"
//                         style={{ borderTop: `1px solid var(--color-nav-border)` }}
//                     >
//                         <NavLink
//                             to="/contact-us"
//                             className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl
//                 text-white font-bold uppercase transition-all hover:brightness-110"
//                             style={{
//                                 background: "var(--color-green)",
//                                 fontFamily: "var(--font-display)",
//                                 fontWeight: 700,
//                                 letterSpacing: "0.1em",
//                                 fontSize: "0.9rem",
//                                 boxShadow: "0 4px 16px rgba(46,125,50,0.3)",
//                             }}
//                             onClick={() => setMobileOpen(false)}
//                         >
//                             Get a Free Consultation
//                         </NavLink>

//                         <p
//                             className="text-center"
//                             style={{
//                                 fontFamily: "var(--font-mono)",
//                                 fontSize: "0.62rem",
//                                 color: "var(--color-grey-mid)",
//                                 letterSpacing: "0.1em",
//                             }}
//                         >
//                             +234 812 710 7336 · tabhseservices@gmail.com
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// }


import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

// ─── Types ─────────────────────────────────────────────────────────────────────

interface ServiceItem {
    label: string;
    desc: string;
    icon: React.ReactNode;
    url: string;
}

interface NavLinkItem {
    label: string;
    href: string;
    hasDropdown?: boolean;
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const SERVICES: ServiceItem[] = [
    {
        label: "Consultancy Services",
        desc: "HSE policy, audits, hazard assessments & incident investigation",
        url: "/our-services",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 shrink-0">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0119 8.414V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: "Environmental Sustainability",
        desc: "EIA, sustainability strategy, carbon footprint & waste management",
        url: "/our-services",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 shrink-0">
                <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: "Training Services",
        desc: "HSE officer to management level, ISO 14001, fire safety & first aid",
        url: "/our-services",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 shrink-0">
                <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: "Commercial / Procurement",
        desc: "PPE supply, safety signage, fire equipment & security systems",
        url: "/our-services",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 shrink-0">
                <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: "Technical Services",
        desc: "Fire system installation, security systems & IoT integration",
        url: "/our-services",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 shrink-0">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: "Management Systems",
        desc: "ISO 45001, 14001, 9001 & 41001 development, integration & certification",
        url: "/our-services",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 shrink-0">
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: "Facilities Management",
        desc: "Cleaning, safety inspections, energy management & personnel",
        url: "/our-services",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 shrink-0">
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

const NAV_LINKS: NavLinkItem[] = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Our Services", href: "/our-services", hasDropdown: true },
    { label: "Why Us", href: "/why-us" },
    { label: "Contact Us", href: "/contact-us" },
];

// ─── Logo ──────────────────────────────────────────────────────────────────────

function Logo() {
    return (
        <NavLink to="/" className="flex items-center shrink-0">
            <img
                src="/img/logo.png"
                alt="TAB HSE Services"
                className="h-12 w-auto object-contain"
            />
        </NavLink>
    );
}

// ─── Icons ─────────────────────────────────────────────────────────────────────

function ChevronIcon({ open }: { open: boolean }) {
    return (
        <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.2}
            className={`w-3 h-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
            <path d="M3 6l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function HamburgerIcon({ open }: { open: boolean }) {
    return (
        <span className="flex flex-col justify-between w-5 h-4">
            <span
                className={`block h-0.5 rounded-full origin-center transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`}
                style={{ backgroundColor: open ? "var(--color-purple)" : "var(--color-charcoal)" }}
            />
            <span
                className={`block h-0.5 rounded-full transition-all duration-200 ${open ? "opacity-0 scale-x-0" : ""}`}
                style={{ backgroundColor: "var(--color-charcoal)" }}
            />
            <span
                className={`block h-0.5 rounded-full origin-center transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}
                style={{ backgroundColor: open ? "var(--color-purple)" : "var(--color-charcoal)" }}
            />
        </span>
    );
}

// ─── Desktop Mega Dropdown ─────────────────────────────────────────────────────

interface MegaDropdownProps {
    visible: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

function MegaDropdown({ visible, onMouseEnter, onMouseLeave }: MegaDropdownProps) {
    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`
                absolute top-[calc(100%+4px)] left-1/2 -translate-x-1/2
                w-[740px] rounded-2xl overflow-hidden shadow-2xl z-50
                transition-all duration-200 origin-top
                ${visible
                    ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
                }
            `}
            style={{
                background: "var(--color-dropdown-bg)",         // #1A1A2E
                border: "1px solid var(--color-dropdown-border)", // rgba(255,255,255,0.09)
            }}
        >
            {/* ── Header ── */}
            <div
                className="flex items-center justify-between px-6 py-4"
                style={{
                    background: "var(--color-dropdown-header)",          // rgba(139,26,140,0.28)
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                }}
            >
                <div>
                    <p
                        style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.62rem",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "var(--color-green-bright)",  // #34D679
                        }}
                    >
                        What we offer
                    </p>
                    <p
                        style={{
                            fontFamily: "var(--font-display)",
                            fontWeight: 800,
                            fontSize: "1.1rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.04em",
                            color: "#fff",
                            marginTop: "1px",
                        }}
                    >
                        Our Services
                    </p>
                </div>

                <NavLink
                    to="/our-services"
                    className="flex items-center gap-2 transition-colors hover:text-white"
                    style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "0.78rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        color: "var(--color-green-bright)",  // #34D679
                    }}
                >
                    View All
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3">
                        <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </NavLink>
            </div>

            {/* ── 2-column service grid ── */}
            <div
                className="grid grid-cols-2 gap-px p-1"
                style={{ background: "rgba(255,255,255,0.04)" }}
            >
                {SERVICES.map((svc) => (
                    <NavLink
                        key={svc.label}
                        to={svc.url}
                        className="group flex items-start gap-3.5 px-5 py-4 rounded-xl transition-all duration-200"
                        style={{ background: "var(--color-dropdown-bg)" }}
                        // hover: purple tint overlay — matches new brand purple
                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(139,26,140,0.20)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-dropdown-bg)")}
                    >
                        {/* Icon bubble */}
                        <div
                            className="mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200"
                            style={{
                                background: "rgba(139,26,140,0.18)",  // new purple tint
                                color: "var(--color-purple-light)",    // #D499D4
                            }}
                        >
                            {svc.icon}
                        </div>

                        {/* Text */}
                        <div>
                            <p
                                className="transition-colors duration-200"
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontWeight: 700,
                                    fontSize: "0.88rem",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.04em",
                                    color: "#fff",
                                    lineHeight: 1.2,
                                }}
                            >
                                {svc.label}
                            </p>
                            <p
                                className="mt-1"
                                style={{
                                    fontFamily: "var(--font-body)",
                                    fontSize: "0.75rem",
                                    color: "rgba(255,255,255,0.42)",
                                    lineHeight: 1.5,
                                }}
                            >
                                {svc.desc}
                            </p>
                        </div>
                    </NavLink>
                ))}
            </div>

            {/* ── Footer CTA ── */}
            <div
                className="flex items-center justify-between px-6 py-3.5"
                style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
                <p
                    style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.78rem",
                        color: "rgba(255,255,255,0.36)",
                    }}
                >
                    Not sure where to start? Let us guide you.
                </p>
                <NavLink
                    to="/contact-us"
                    className="flex items-center gap-2 px-4 py-2 rounded-md text-white transition-all hover:brightness-110 active:scale-95"
                    style={{
                        background: "var(--color-green)",       // #00A550
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "0.78rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                    }}
                >
                    Free Consultation
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3">
                        <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </NavLink>
            </div>
        </div>
    );
}

// ─── Mobile Accordion ──────────────────────────────────────────────────────────

function MobileServicesAccordion({ open }: { open: boolean }) {
    return (
        <div
            className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[680px]" : "max-h-0"}`}
        >
            <div
                className="ml-4 pl-4 pt-1 pb-3 flex flex-col gap-0.5"
                style={{ borderLeft: "2px solid rgba(139,26,140,0.25)" }}  // new purple
            >
                {SERVICES.map((svc) => (
                    <NavLink
                        key={svc.label}
                        to={svc.url}
                        className="flex items-center gap-3 py-2.5 group"
                    >
                        <span
                            className="transition-colors shrink-0"
                            style={{ color: "var(--color-purple-light)" }}  // #D499D4
                            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-green-bright)")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-purple-light)")}
                        >
                            {svc.icon}
                        </span>
                        <span
                            className="transition-colors"
                            style={{
                                fontFamily: "var(--font-display)",
                                fontWeight: 700,
                                fontSize: "0.88rem",
                                textTransform: "uppercase",
                                letterSpacing: "0.07em",
                                color: "var(--color-grey-dark)",
                            }}
                        >
                            {svc.label}
                        </span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

// ─── Main Navbar ───────────────────────────────────────────────────────────────

export default function Navbar() {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState<boolean>(false);

    const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 1024) setMobileOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    const openDropdown = () => {
        if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
        setDropdownOpen(true);
    };

    const closeDropdown = () => {
        dropdownTimer.current = setTimeout(() => setDropdownOpen(false), 150);
    };

    const linkStyle: React.CSSProperties = {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "0.83rem",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
    };

    return (
        <header
            className={`sticky backdrop-blur-md top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-3"}`}
            style={{
                backgroundColor: "var(--color-purple-tint)",   // #F7EDF7 — brand purple tint
                borderBottom: "1px solid var(--color-nav-border)",
                boxShadow: "var(--color-nav-shadow)",
            }}
        >
            {/* ── Max-width container ── */}
            <div className="max-w-[1280px] mx-auto px-5 lg:px-8 flex items-center justify-between gap-6">

                {/* Logo */}
                <Logo />

                {/* ── Desktop nav links ── */}
                <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
                    {NAV_LINKS.map((link) => {
                        const isServices = !!link.hasDropdown;

                        return (
                            <div
                                key={link.label}
                                className="relative"
                                onMouseEnter={isServices ? openDropdown : undefined}
                                onMouseLeave={isServices ? closeDropdown : undefined}
                            >
                                <NavLink
                                    to={link.href}
                                    className="relative flex items-center gap-1.5 px-4 py-2 rounded-md transition-colors duration-200 whitespace-nowrap"
                                    style={({ isActive }) => ({
                                        ...linkStyle,
                                        color: isActive
                                            ? "var(--color-nav-link-active)"  // #8B1A8C
                                            : "var(--color-nav-link)",         // #3D3D4E
                                    })}
                                >
                                    {({ isActive }) => (
                                        <>
                                            {link.label}
                                            {isServices && <ChevronIcon open={dropdownOpen} />}
                                            {isActive && (
                                                <span
                                                    className="absolute bottom-0.5 left-4 right-4 h-px rounded-full"
                                                    style={{ background: "var(--color-purple)" }}  // #8B1A8C
                                                />
                                            )}
                                        </>
                                    )}
                                </NavLink>

                                {isServices && (
                                    <MegaDropdown
                                        visible={dropdownOpen}
                                        onMouseEnter={openDropdown}
                                        onMouseLeave={closeDropdown}
                                    />
                                )}
                            </div>
                        );
                    })}
                </nav>

                {/* ── Desktop right side ── */}
                <div className="hidden lg:flex items-center gap-4 shrink-0">
                    {/* Phone number */}
                    <a
                        href="tel:+2348127107336"
                        className="flex items-center gap-1.5 transition-colors"
                        style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.68rem",
                            color: "var(--color-grey-mid)",    // #7A7A8C
                            letterSpacing: "0.07em",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-purple)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-grey-mid)")}
                    >
                        <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-3.5 h-3.5 shrink-0"
                            style={{ color: "var(--color-green)" }}  // #00A550
                        >
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        +234 812 710 7336
                    </a>

                    {/* CTA button */}
                    <NavLink
                        to="/contact-us"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-md text-white
                            transition-all duration-200 hover:brightness-110 active:scale-95"
                        style={{
                            background: "var(--color-green)",           // #00A550
                            fontFamily: "var(--font-display)",
                            fontWeight: 700,
                            fontSize: "0.83rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            boxShadow: "0 4px 14px rgba(0,165,80,0.35)",  // green shadow
                        }}
                    >
                        Get a Quote
                        <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.2}
                            className="w-3.5 h-3.5"
                        >
                            <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </NavLink>
                </div>

                {/* ── Mobile hamburger ── */}
                <button
                    className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md transition-colors"
                    style={{
                        background: mobileOpen
                            ? "var(--color-purple-tint)"  // #F7EDF7
                            : "var(--color-off-white)",    // #F7F7FA
                        border: "1px solid var(--color-grey-light)",
                    }}
                    onClick={() => setMobileOpen((o) => !o)}
                    aria-label="Toggle navigation"
                    aria-expanded={mobileOpen}
                >
                    <HamburgerIcon open={mobileOpen} />
                </button>
            </div>

            {/* ── Mobile drawer ── */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
                style={{
                    background: "var(--color-white)",
                    borderTop: "1px solid var(--color-nav-border)",
                }}
            >
                <div className="max-w-[1280px] mx-auto px-5 py-5 flex flex-col gap-1">

                    {NAV_LINKS.map((link) => {
                        const isServices = !!link.hasDropdown;
                        return (
                            <div key={link.label}>
                                {isServices ? (
                                    <button
                                        className="w-full flex items-center justify-between px-3 py-3 rounded-xl transition-colors"
                                        style={{ color: "var(--color-grey-dark)" }}
                                        onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-purple-tint)")}
                                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                                        onClick={() => setMobileServicesOpen((o) => !o)}
                                    >
                                        <span style={{ ...linkStyle, fontSize: "0.9rem" }}>
                                            {link.label}
                                        </span>
                                        <ChevronIcon open={mobileServicesOpen} />
                                    </button>
                                ) : (
                                    <NavLink
                                        to={link.href}
                                        className="flex items-center px-3 py-3 rounded-xl transition-colors"
                                        style={({ isActive }) => ({
                                            ...linkStyle,
                                            fontSize: "0.9rem",
                                            color: isActive
                                                ? "var(--color-purple)"      // #8B1A8C
                                                : "var(--color-grey-dark)",  // #3D3D4E
                                        })}
                                        onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-purple-tint)")}
                                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {link.label}
                                    </NavLink>
                                )}

                                {isServices && (
                                    <MobileServicesAccordion open={mobileServicesOpen} />
                                )}
                            </div>
                        );
                    })}

                    {/* Mobile CTA */}
                    <div
                        className="mt-3 pt-4 flex flex-col gap-3"
                        style={{ borderTop: "1px solid var(--color-nav-border)" }}
                    >
                        <NavLink
                            to="/contact-us"
                            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl
                                text-white font-bold uppercase transition-all hover:brightness-110"
                            style={{
                                background: "var(--color-green)",             // #00A550
                                fontFamily: "var(--font-display)",
                                fontWeight: 700,
                                letterSpacing: "0.1em",
                                fontSize: "0.9rem",
                                boxShadow: "0 4px 16px rgba(0,165,80,0.30)", // green shadow
                            }}
                            onClick={() => setMobileOpen(false)}
                        >
                            Get a Free Consultation
                        </NavLink>

                        <p
                            className="text-center"
                            style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.62rem",
                                color: "var(--color-grey-mid)",
                                letterSpacing: "0.1em",
                            }}
                        >
                            +234 812 710 7336 · tabhseservices@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}