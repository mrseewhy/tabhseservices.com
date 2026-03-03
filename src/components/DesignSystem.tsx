/**
 * TAB HSE Services — Design System
 * Single-file component reference. Copy what you need.
 *
 * Brand Colors (from logo):
 *   Purple  → #8B1A8C  (primary brand)
 *   Green   → #00A550  (secondary / CTA)
 *   Neutral → Charcoal, Off-white, Greys
 */


// ─────────────────────────────────────────────
// 1. COLOUR TOKENS  (mirrors your index.css)
// ─────────────────────────────────────────────
export const colors = {
    /* Purple (brand primary) */
    purpleDarkest: "#2A0040",
    purpleDark: "#4E0A6E",
    purple: "#8B1A8C",       // logo purple
    purpleMid: "#A52EA5",
    purpleLight: "#D499D4",
    purpleTint: "#F7EDF7",

    /* Green (brand accent / CTA) */
    greenDark: "#005A2B",
    green: "#00A550",        // logo green
    greenMid: "#00BF5F",
    greenBright: "#34D679",
    greenLight: "#B3EECF",
    greenTint: "#E6F9EF",

    /* Neutrals */
    white: "#FFFFFF",
    charcoal: "#1A1A2E",
    greyDark: "#3D3D4E",
    greyMid: "#7A7A8C",
    greyLight: "#D1D1DF",
    offWhite: "#F7F7FA",

    /* Accent */
    gold: "#F5A623",
} as const;

// ─────────────────────────────────────────────
// 2. TYPOGRAPHY SHOWCASE
// ─────────────────────────────────────────────
const TypographySection = () => (
    <section className="mb-16">
        <Token label="TYPOGRAPHY" />

        <div className="space-y-6">
            <div>
                <label className="text-xs font-mono text-[#7A7A8C] uppercase tracking-widest block mb-1">Display / font-display — Barlow Condensed 800</label>
                <h1 className="font-display text-6xl font-black uppercase tracking-tight text-[#1A1A2E] leading-none">
                    HSE Services Par Excellence
                </h1>
            </div>

            <div>
                <label className="text-xs font-mono text-[#7A7A8C] uppercase tracking-widest block mb-1">Heading 2 — Barlow Condensed 700</label>
                <h2 className="font-display text-4xl font-bold uppercase text-[#8B1A8C] leading-none">
                    Building Safer Workplaces
                </h2>
            </div>

            <div>
                <label className="text-xs font-mono text-[#7A7A8C] uppercase tracking-widest block mb-1">Heading 3 — Barlow Condensed 600</label>
                <h3 className="font-display text-2xl font-semibold uppercase text-[#00A550] leading-tight">
                    Consultancy · Training · Sustainability
                </h3>
            </div>

            <div>
                <label className="text-xs font-mono text-[#7A7A8C] uppercase tracking-widest block mb-1">Body — Barlow 400</label>
                <p className="font-body text-base text-[#3D3D4E] max-w-xl leading-relaxed">
                    TAB HSE Services is a premier consultancy at the forefront of building safer, healthier,
                    and more sustainable industrial landscapes — empowering organisations to not only meet
                    regulatory demands but to excel.
                </p>
            </div>

            <div>
                <label className="text-xs font-mono text-[#7A7A8C] uppercase tracking-widest block mb-1">Body Small — Barlow 400 / 300</label>
                <p className="font-body text-sm font-light text-[#7A7A8C] max-w-xl leading-relaxed">
                    RC: 9122058 · Enahoro Housing Estate, Ogba, Lagos State · tabhseservices@gmail.com
                </p>
            </div>

            <div>
                <label className="text-xs font-mono text-[#7A7A8C] uppercase tracking-widest block mb-1">Mono — DM Mono 400</label>
                <p className="font-mono text-sm text-[#00A550]">+234 812 710 7336 · ISO 45001 · ISO 14001</p>
            </div>
        </div>
    </section>
);

// ─────────────────────────────────────────────
// 3. COLOUR PALETTE
// ─────────────────────────────────────────────
const ColourSwatch = ({ hex, name }: { hex: string; name: string }) => (
    <div className="flex flex-col gap-1">
        <div
            className="w-full h-14 rounded-lg border border-[#D1D1DF]/40"
            style={{ background: hex }}
        />
        <span className="font-mono text-[10px] text-[#3D3D4E]">{name}</span>
        <span className="font-mono text-[10px] text-[#7A7A8C]">{hex}</span>
    </div>
);

const ColourSection = () => (
    <section className="mb-16">
        <Token label="COLOUR SYSTEM" />

        <div className="space-y-6">
            <div>
                <p className="text-xs uppercase tracking-widest font-mono text-[#7A7A8C] mb-3">Purple — Primary Brand</p>
                <div className="grid grid-cols-6 gap-3">
                    <ColourSwatch hex="#2A0040" name="purple-darkest" />
                    <ColourSwatch hex="#4E0A6E" name="purple-dark" />
                    <ColourSwatch hex="#8B1A8C" name="purple" />
                    <ColourSwatch hex="#A52EA5" name="purple-mid" />
                    <ColourSwatch hex="#D499D4" name="purple-light" />
                    <ColourSwatch hex="#F7EDF7" name="purple-tint" />
                </div>
            </div>

            <div>
                <p className="text-xs uppercase tracking-widest font-mono text-[#7A7A8C] mb-3">Green — Secondary / CTA</p>
                <div className="grid grid-cols-6 gap-3">
                    <ColourSwatch hex="#005A2B" name="green-dark" />
                    <ColourSwatch hex="#00A550" name="green" />
                    <ColourSwatch hex="#00BF5F" name="green-mid" />
                    <ColourSwatch hex="#34D679" name="green-bright" />
                    <ColourSwatch hex="#B3EECF" name="green-light" />
                    <ColourSwatch hex="#E6F9EF" name="green-tint" />
                </div>
            </div>

            <div>
                <p className="text-xs uppercase tracking-widest font-mono text-[#7A7A8C] mb-3">Neutrals</p>
                <div className="grid grid-cols-6 gap-3">
                    <ColourSwatch hex="#1A1A2E" name="charcoal" />
                    <ColourSwatch hex="#3D3D4E" name="grey-dark" />
                    <ColourSwatch hex="#7A7A8C" name="grey-mid" />
                    <ColourSwatch hex="#D1D1DF" name="grey-light" />
                    <ColourSwatch hex="#F7F7FA" name="off-white" />
                    <ColourSwatch hex="#FFFFFF" name="white" />
                </div>
            </div>
        </div>
    </section>
);

// ─────────────────────────────────────────────
// 4. BUTTONS
// ─────────────────────────────────────────────
const ButtonSection = () => (
    <section className="mb-16">
        <Token label="BUTTONS" />

        <div className="space-y-6">
            {/* Primary row */}
            <div className="flex flex-wrap items-center gap-4">
                <label className="w-32 text-xs font-mono text-[#7A7A8C] uppercase">Primary</label>

                {/* Solid Green CTA */}
                <button className="font-display font-bold uppercase tracking-wider text-sm px-6 py-3 rounded-lg bg-[#00A550] text-white hover:bg-[#005A2B] transition-colors duration-200 shadow-[0_6px_20px_rgba(0,165,80,0.35)]">
                    Get a Quote
                </button>

                {/* Solid Purple */}
                <button className="font-display font-bold uppercase tracking-wider text-sm px-6 py-3 rounded-lg bg-[#8B1A8C] text-white hover:bg-[#4E0A6E] transition-colors duration-200 shadow-[0_6px_20px_rgba(139,26,140,0.30)]">
                    Our Services
                </button>

                {/* Ghost Purple */}
                <button className="font-display font-bold uppercase tracking-wider text-sm px-6 py-3 rounded-lg border-2 border-[#8B1A8C] text-[#8B1A8C] hover:bg-[#8B1A8C] hover:text-white transition-colors duration-200">
                    Learn More
                </button>

                {/* Ghost Green */}
                <button className="font-display font-bold uppercase tracking-wider text-sm px-6 py-3 rounded-lg border-2 border-[#00A550] text-[#00A550] hover:bg-[#00A550] hover:text-white transition-colors duration-200">
                    Contact Us
                </button>
            </div>

            {/* Dark bg row */}
            <div className="flex flex-wrap items-center gap-4 bg-[#1A1A2E] rounded-xl p-6">
                <label className="w-32 text-xs font-mono text-[#7A7A8C] uppercase">On Dark</label>

                <button className="font-display font-bold uppercase tracking-wider text-sm px-6 py-3 rounded-lg bg-[#00A550] text-white hover:bg-[#00BF5F] transition-colors duration-200 shadow-[0_6px_20px_rgba(0,165,80,0.40)]">
                    Get Started
                </button>

                <button className="font-display font-bold uppercase tracking-wider text-sm px-6 py-3 rounded-lg border-2 border-white text-white hover:bg-white hover:text-[#1A1A2E] transition-colors duration-200">
                    View Profile
                </button>

                <button className="font-display font-bold uppercase tracking-wider text-sm px-6 py-3 rounded-lg bg-[#8B1A8C]/20 border border-[#D499D4]/30 text-[#D499D4] hover:bg-[#8B1A8C]/40 transition-colors duration-200">
                    Explore
                </button>
            </div>

            {/* Icon button */}
            <div className="flex flex-wrap items-center gap-4">
                <label className="w-32 text-xs font-mono text-[#7A7A8C] uppercase">Icon + Text</label>
                <button className="inline-flex items-center gap-2 font-display font-bold uppercase tracking-wider text-sm px-6 py-3 rounded-lg bg-[#00A550] text-white hover:bg-[#005A2B] transition-colors duration-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Request Audit
                </button>
            </div>

            {/* Sizes */}
            <div className="flex flex-wrap items-center gap-4">
                <label className="w-32 text-xs font-mono text-[#7A7A8C] uppercase">Sizes</label>
                <button className="font-display font-bold uppercase tracking-wider text-xs px-4 py-2 rounded-md bg-[#8B1A8C] text-white">SM</button>
                <button className="font-display font-bold uppercase tracking-wider text-sm px-6 py-3 rounded-lg bg-[#8B1A8C] text-white">MD</button>
                <button className="font-display font-bold uppercase tracking-wider text-base px-8 py-4 rounded-xl bg-[#8B1A8C] text-white">LG</button>
                <button className="font-display font-bold uppercase tracking-wider text-lg px-10 py-5 rounded-xl bg-[#8B1A8C] text-white">XL</button>
            </div>
        </div>
    </section>
);

// ─────────────────────────────────────────────
// 5. BADGES & TAGS
// ─────────────────────────────────────────────
const BadgeSection = () => (
    <section className="mb-16">
        <Token label="BADGES & TAGS" />
        <div className="flex flex-wrap gap-3">
            <span className="font-display font-semibold uppercase tracking-wider text-xs px-3 py-1 rounded-full bg-[#8B1A8C] text-white">HSE Certified</span>
            <span className="font-display font-semibold uppercase tracking-wider text-xs px-3 py-1 rounded-full bg-[#00A550] text-white">Active</span>
            <span className="font-display font-semibold uppercase tracking-wider text-xs px-3 py-1 rounded-full bg-[#F7EDF7] text-[#8B1A8C] border border-[#D499D4]">Consultancy</span>
            <span className="font-display font-semibold uppercase tracking-wider text-xs px-3 py-1 rounded-full bg-[#E6F9EF] text-[#005A2B] border border-[#B3EECF]">Training</span>
            <span className="font-display font-semibold uppercase tracking-wider text-xs px-3 py-1 rounded-full bg-[#1A1A2E] text-[#D499D4]">ISO 45001</span>
            <span className="font-display font-semibold uppercase tracking-wider text-xs px-3 py-1 rounded-full bg-[#F5A623]/10 text-[#B87A00] border border-[#F5A623]/30">Premium</span>
        </div>
    </section>
);

// ─────────────────────────────────────────────
// 6. CARDS
// ─────────────────────────────────────────────
const CardSection = () => (
    <section className="mb-16">
        <Token label="CARDS" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Service Card */}
            <div className="group rounded-2xl bg-white border border-[#D1D1DF]/50 p-6 shadow-[0_4px_20px_rgba(139,26,140,0.08)] hover:shadow-[0_8px_32px_rgba(139,26,140,0.16)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#F7EDF7] flex items-center justify-center mb-4 group-hover:bg-[#8B1A8C] transition-colors duration-300">
                    <svg className="w-6 h-6 text-[#8B1A8C] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                </div>
                <h3 className="font-display font-bold uppercase text-lg text-[#1A1A2E] mb-2 leading-tight">HSE Consultancy</h3>
                <p className="font-body text-sm text-[#7A7A8C] leading-relaxed">
                    Policy formulation, safety management systems, hazard assessments, and compliance audits.
                </p>
                <div className="mt-4 pt-4 border-t border-[#D1D1DF]/50">
                    <a href="#" className="font-display font-semibold uppercase text-xs text-[#8B1A8C] hover:text-[#4E0A6E] transition-colors flex items-center gap-1">
                        Learn More <span>→</span>
                    </a>
                </div>
            </div>

            {/* Feature Card — Dark */}
            <div className="rounded-2xl bg-[#1A1A2E] p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#8B1A8C]/20 -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <div className="relative">
                    <span className="font-display font-bold uppercase text-xs text-[#00A550] tracking-widest">We Are PRIME</span>
                    <h3 className="font-display font-black uppercase text-2xl text-white mt-2 mb-3 leading-tight">Partnership · Responsibility · Innovation</h3>
                    <p className="font-body text-sm text-[#7A7A8C] leading-relaxed">
                        Our PRIME values guide every engagement — mastery and evolution embedded in everything we do.
                    </p>
                    <button className="mt-5 font-display font-bold uppercase text-sm px-5 py-2.5 rounded-lg bg-[#00A550] text-white hover:bg-[#005A2B] transition-colors">
                        Our Values
                    </button>
                </div>
            </div>

            {/* Stat / Highlight Card */}
            <div className="rounded-2xl bg-gradient-to-br from-[#8B1A8C] to-[#4E0A6E] p-6 text-white">
                <div className="font-mono text-xs text-[#D499D4] uppercase tracking-widest mb-2">RC: 9122058</div>
                <div className="font-display font-black text-5xl mb-1">6+</div>
                <div className="font-display font-semibold uppercase text-lg leading-tight mb-3">Service Categories</div>
                <p className="font-body text-sm text-[#D499D4] leading-relaxed">
                    Consultancy, Training, Environmental, Technical, Commercial & Facilities Management.
                </p>
                <div className="mt-4 h-1 rounded-full bg-white/20">
                    <div className="h-1 rounded-full bg-[#00A550] w-4/5" />
                </div>
            </div>

        </div>
    </section>
);

// ─────────────────────────────────────────────
// 7. FORM INPUTS
// ─────────────────────────────────────────────
const FormSection = () => (
    <section className="mb-16">
        <Token label="FORM ELEMENTS" />
        <div className="max-w-lg space-y-5">

            {/* Text input */}
            <div>
                <label className="font-display font-semibold uppercase text-xs tracking-wider text-[#3D3D4E] block mb-1.5">Company Name</label>
                <input
                    type="text"
                    placeholder="e.g. Greenpeg Ltd"
                    className="w-full font-body text-sm px-4 py-3 rounded-lg border border-[#D1D1DF] bg-white text-[#1A1A2E] placeholder-[#7A7A8C]
            focus:outline-none focus:ring-2 focus:ring-[#8B1A8C]/40 focus:border-[#8B1A8C]
            hover:border-[#A52EA5] transition-colors duration-200"
                />
            </div>

            {/* Email */}
            <div>
                <label className="font-display font-semibold uppercase text-xs tracking-wider text-[#3D3D4E] block mb-1.5">Email Address</label>
                <input
                    type="email"
                    placeholder="contact@company.com"
                    className="w-full font-body text-sm px-4 py-3 rounded-lg border border-[#D1D1DF] bg-white text-[#1A1A2E] placeholder-[#7A7A8C]
            focus:outline-none focus:ring-2 focus:ring-[#8B1A8C]/40 focus:border-[#8B1A8C]
            hover:border-[#A52EA5] transition-colors duration-200"
                />
            </div>

            {/* Select */}
            <div>
                <label className="font-display font-semibold uppercase text-xs tracking-wider text-[#3D3D4E] block mb-1.5">Service Required</label>
                <select
                    className="w-full font-body text-sm px-4 py-3 rounded-lg border border-[#D1D1DF] bg-white text-[#3D3D4E]
            focus:outline-none focus:ring-2 focus:ring-[#8B1A8C]/40 focus:border-[#8B1A8C]
            hover:border-[#A52EA5] transition-colors duration-200 appearance-none"
                >
                    <option value="">Select a service…</option>
                    <option>HSE Consultancy</option>
                    <option>Training Services</option>
                    <option>Environmental Sustainability</option>
                    <option>Facilities Management</option>
                </select>
            </div>

            {/* Textarea */}
            <div>
                <label className="font-display font-semibold uppercase text-xs tracking-wider text-[#3D3D4E] block mb-1.5">Message</label>
                <textarea
                    rows={4}
                    placeholder="Describe your HSE requirements…"
                    className="w-full font-body text-sm px-4 py-3 rounded-lg border border-[#D1D1DF] bg-white text-[#1A1A2E] placeholder-[#7A7A8C] resize-none
            focus:outline-none focus:ring-2 focus:ring-[#8B1A8C]/40 focus:border-[#8B1A8C]
            hover:border-[#A52EA5] transition-colors duration-200"
                />
            </div>

            {/* Error state */}
            <div>
                <label className="font-display font-semibold uppercase text-xs tracking-wider text-[#3D3D4E] block mb-1.5">Phone (error state)</label>
                <input
                    type="tel"
                    defaultValue="abc"
                    className="w-full font-body text-sm px-4 py-3 rounded-lg border-2 border-red-400 bg-red-50 text-[#1A1A2E]
            focus:outline-none focus:ring-2 focus:ring-red-300"
                />
                <p className="font-body text-xs text-red-500 mt-1">Please enter a valid phone number.</p>
            </div>

            <button className="w-full font-display font-bold uppercase tracking-wider text-sm px-6 py-3.5 rounded-lg bg-[#00A550] text-white hover:bg-[#005A2B] transition-colors shadow-[0_6px_20px_rgba(0,165,80,0.35)]">
                Send Enquiry
            </button>
        </div>
    </section>
);

// ─────────────────────────────────────────────
// 8. ALERTS / CALLOUTS
// ─────────────────────────────────────────────
const AlertSection = () => (
    <section className="mb-16">
        <Token label="ALERTS & CALLOUTS" />
        <div className="space-y-4 max-w-2xl">

            <div className="flex gap-3 p-4 rounded-xl bg-[#E6F9EF] border border-[#B3EECF]">
                <svg className="w-5 h-5 text-[#00A550] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                    <p className="font-display font-bold uppercase text-sm text-[#005A2B]">Audit Complete</p>
                    <p className="font-body text-sm text-[#3D3D4E] mt-0.5">Your OHS compliance audit has been submitted successfully.</p>
                </div>
            </div>

            <div className="flex gap-3 p-4 rounded-xl bg-[#F7EDF7] border border-[#D499D4]">
                <svg className="w-5 h-5 text-[#8B1A8C] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                    <p className="font-display font-bold uppercase text-sm text-[#4E0A6E]">Action Required</p>
                    <p className="font-body text-sm text-[#3D3D4E] mt-0.5">Please review your emergency response plan before the next inspection.</p>
                </div>
            </div>

            <div className="flex gap-3 p-4 rounded-xl bg-[#FFF8E1] border border-[#F5A623]/40">
                <svg className="w-5 h-5 text-[#F5A623] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <div>
                    <p className="font-display font-bold uppercase text-sm text-[#B87A00]">Certification Expiring</p>
                    <p className="font-body text-sm text-[#3D3D4E] mt-0.5">Your ISO 14001 certification expires in 30 days. Renew now.</p>
                </div>
            </div>

            <div className="flex gap-3 p-4 rounded-xl bg-red-50 border border-red-200">
                <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                    <p className="font-display font-bold uppercase text-sm text-red-700">Compliance Breach</p>
                    <p className="font-body text-sm text-[#3D3D4E] mt-0.5">A hazard assessment is overdue. Immediate action required.</p>
                </div>
            </div>
        </div>
    </section>
);

// ─────────────────────────────────────────────
// 9. NAVBAR EXAMPLE
// ─────────────────────────────────────────────
const NavbarSection = () => (
    <section className="mb-16">
        <Token label="NAVBAR" />
        <div className="rounded-2xl overflow-hidden border border-[#D1D1DF]/40 shadow-[0_2px_24px_rgba(26,26,46,0.08)]">
            {/* Light navbar */}
            <nav className="bg-white px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-[#8B1A8C] flex items-center justify-center">
                        <span className="font-display font-black text-white text-xs">T</span>
                    </div>
                    <div>
                        <span className="font-display font-black text-[#8B1A8C] uppercase text-lg leading-none">TAB</span>
                        <span className="font-display text-[10px] text-[#00A550] uppercase tracking-widest block leading-none">HSE Services</span>
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-8">
                    {["Home", "Services", "About", "Training", "Contact"].map((item, i) => (
                        <a key={item} href="#"
                            className={`font-display font-semibold uppercase text-xs tracking-wider transition-colors duration-200
                ${i === 0 ? "text-[#8B1A8C]" : "text-[#4A4A5A] hover:text-[#8B1A8C]"}`}>
                            {item}
                        </a>
                    ))}
                </div>
                <button className="font-display font-bold uppercase text-xs tracking-wider px-4 py-2 rounded-lg bg-[#00A550] text-white hover:bg-[#005A2B] transition-colors">
                    Get a Quote
                </button>
            </nav>

            {/* Dark navbar variant */}
            <nav className="bg-[#1A1A2E] px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-[#8B1A8C] flex items-center justify-center">
                        <span className="font-display font-black text-white text-xs">T</span>
                    </div>
                    <div>
                        <span className="font-display font-black text-white uppercase text-lg leading-none">TAB</span>
                        <span className="font-display text-[10px] text-[#00A550] uppercase tracking-widest block leading-none">HSE Services</span>
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-8">
                    {["Home", "Services", "About", "Training", "Contact"].map((item, i) => (
                        <a key={item} href="#"
                            className={`font-display font-semibold uppercase text-xs tracking-wider transition-colors duration-200
                ${i === 0 ? "text-[#00A550]" : "text-[#7A7A8C] hover:text-white"}`}>
                            {item}
                        </a>
                    ))}
                </div>
                <button className="font-display font-bold uppercase text-xs tracking-wider px-4 py-2 rounded-lg border border-[#D499D4]/40 text-[#D499D4] hover:bg-[#8B1A8C] hover:text-white hover:border-[#8B1A8C] transition-all">
                    Get a Quote
                </button>
            </nav>
        </div>
    </section>
);

// ─────────────────────────────────────────────
// 10. SECTION LAYOUTS / HERO STRIP
// ─────────────────────────────────────────────
const LayoutSection = () => (
    <section className="mb-16">
        <Token label="SECTION LAYOUTS" />
        <div className="space-y-6">

            {/* Hero strip */}
            <div className="relative rounded-2xl bg-[#1A1A2E] overflow-hidden px-10 py-14">
                {/* Decorative blobs */}
                <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#8B1A8C]/25 -translate-x-1/2 -translate-y-1/2 blur-3xl" />
                <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#00A550]/15 translate-x-1/3 translate-y-1/3 blur-3xl" />

                <div className="relative max-w-2xl">
                    <span className="font-display font-bold uppercase text-xs tracking-[0.2em] text-[#00A550] mb-3 block">HSE Services Par Excellence</span>
                    <h1 className="font-display font-black uppercase text-5xl text-white leading-none mb-4">
                        Safer Workplaces.<br />
                        <span className="text-[#D499D4]">Sustainable Future.</span>
                    </h1>
                    <p className="font-body text-base text-[#7A7A8C] leading-relaxed mb-8 max-w-lg">
                        Premier consultancy empowering Nigerian industries to exceed compliance, protect people, and build lasting environmental responsibility.
                    </p>
                    <div className="flex gap-4">
                        <button className="font-display font-bold uppercase text-sm px-7 py-3.5 rounded-xl bg-[#00A550] text-white hover:bg-[#005A2B] transition-colors shadow-[0_6px_20px_rgba(0,165,80,0.40)]">
                            Explore Services
                        </button>
                        <button className="font-display font-bold uppercase text-sm px-7 py-3.5 rounded-xl border-2 border-[#D499D4]/40 text-white hover:border-[#8B1A8C] hover:bg-[#8B1A8C]/20 transition-all">
                            View Profile
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-4">
                {[
                    { n: "6+", label: "Service Areas", color: "#8B1A8C" },
                    { n: "ISO", label: "45001 · 14001 · 9001", color: "#00A550" },
                    { n: "100%", label: "Compliance Focus", color: "#8B1A8C" },
                    { n: "4+", label: "Clients Served", color: "#00A550" },
                ].map(({ n, label, color }) => (
                    <div key={label} className="rounded-xl bg-white border border-[#D1D1DF]/50 p-5 text-center shadow-[0_2px_12px_rgba(139,26,140,0.06)]">
                        <div className="font-display font-black text-3xl" style={{ color }}>{n}</div>
                        <div className="font-display font-semibold uppercase text-xs text-[#7A7A8C] tracking-wide mt-1">{label}</div>
                    </div>
                ))}
            </div>

        </div>
    </section>
);

// ─────────────────────────────────────────────
// 11. DIVIDERS / SECTION MARKERS
// ─────────────────────────────────────────────
const DividerSection = () => (
    <section className="mb-16">
        <Token label="DIVIDERS" />
        <div className="space-y-6 max-w-xl">
            {/* Simple */}
            <hr className="border-[#D1D1DF]" />

            {/* Branded */}
            <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-[#D1D1DF]" />
                <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#8B1A8C]" />
                    <div className="w-2 h-2 rounded-full bg-[#00A550]" />
                </div>
                <div className="flex-1 h-px bg-[#D1D1DF]" />
            </div>

            {/* Section label divider */}
            <div className="flex items-center gap-3">
                <div className="w-1 h-6 rounded-full bg-[#8B1A8C]" />
                <span className="font-display font-bold uppercase text-sm tracking-widest text-[#3D3D4E]">Our Services</span>
                <div className="flex-1 h-px bg-[#D1D1DF]" />
            </div>

            {/* Gradient bar */}
            <div className="h-px bg-gradient-to-r from-[#8B1A8C] via-[#00A550] to-transparent" />
        </div>
    </section>
);

// ─────────────────────────────────────────────
// 12. ICON CHIPS / LIST ITEMS
// ─────────────────────────────────────────────
const IconChipSection = () => (
    <section className="mb-16">
        <Token label="LIST ITEMS & ICON CHIPS" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl">
            {[
                "HSE Policy Formulation & Integration",
                "Workplace Hazard Assessments",
                "Environmental Impact Assessments (EIA)",
                "Carbon Footprint Analysis",
                "ISO 45001 / 14001 / 9001 Development",
                "Emergency Response Planning",
                "Fire System Installation",
                "Training & Certification Programs",
            ].map((item, i) => (
                <div key={item} className="flex items-center gap-3 p-3 rounded-lg bg-white border border-[#D1D1DF]/60 hover:border-[#8B1A8C]/40 hover:shadow-[0_2px_12px_rgba(139,26,140,0.10)] transition-all duration-200">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${i % 2 === 0 ? "bg-[#F7EDF7]" : "bg-[#E6F9EF]"}`}>
                        <svg className={`w-3 h-3 ${i % 2 === 0 ? "text-[#8B1A8C]" : "text-[#00A550]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <span className="font-body text-sm text-[#3D3D4E]">{item}</span>
                </div>
            ))}
        </div>
    </section>
);

// ─────────────────────────────────────────────
// HELPER: Section Token header
// ─────────────────────────────────────────────
const Token = ({ label }: { label: string }) => (
    <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-6 rounded-full bg-gradient-to-b from-[#8B1A8C] to-[#00A550]" />
        <h2 className="font-display font-black uppercase text-xl tracking-widest text-[#1A1A2E]">{label}</h2>
    </div>
);

// ─────────────────────────────────────────────
// ROOT EXPORT — Design System Page
// ─────────────────────────────────────────────
export default function DesignSystem() {
    return (
        <div className="min-h-screen bg-[#F7F7FA]">
            {/* Header */}
            <div className="bg-[#1A1A2E] px-8 py-10 mb-12">
                <div className="max-w-6xl mx-auto">
                    <p className="font-mono text-xs text-[#00A550] uppercase tracking-widest mb-2">TAB HSE Services</p>
                    <h1 className="font-display font-black uppercase text-5xl text-white leading-none mb-2">
                        Design System
                    </h1>
                    <p className="font-body text-[#7A7A8C]">
                        Colour tokens, typography, components — one reference file.
                    </p>
                    <div className="flex gap-2 mt-4">
                        <span className="font-mono text-xs px-2 py-1 rounded bg-[#8B1A8C]/20 text-[#D499D4]">Primary: #8B1A8C</span>
                        <span className="font-mono text-xs px-2 py-1 rounded bg-[#00A550]/20 text-[#34D679]">Secondary: #00A550</span>
                        <span className="font-mono text-xs px-2 py-1 rounded bg-white/10 text-[#7A7A8C]">Neutral: #1A1A2E</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-8 pb-20">
                <ColourSection />
                <TypographySection />
                <ButtonSection />
                <BadgeSection />
                <CardSection />
                <FormSection />
                <AlertSection />
                <NavbarSection />
                <LayoutSection />
                <DividerSection />
                <IconChipSection />
            </div>
        </div>
    );
}