import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import ContactUsPage from "./ContactUsPage";

const BRAND_LOGO = "/media/logo.png";

const LAND_IMG    = "/media/slika5.jpg";
const HISTORY_IMG = "/media/jabolka1.jpg";
const FAMILY_IMG  = "/media/semejstvoto.jpg";
const WHY_IMG     = "/media/slika4.jpg";
const FOOTER_IMG  = "/media/slika5.jpg";

const GALLERY = [
    "/media/slikadrva3.jpg",
    "/media/slika1.jpg",
    "/media/slika4.jpg",
    "/media/jabolka2.jpg",
    "/media/jabolka3.jpg",
    "/media/madzun.jpg",
];

const GALLERY_LABELS = [
    "Зима — мирување",
    "Почеток на пупење",
    "Цутење",
    "Формирање на плодот",
    "Зреење",
    "Продукт — Мацун",
];

const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
};

/* ─── HERO ────────────────────────────────────────────────────────────── */
function Hero() {
    return (
        <section className="relative min-h-[70vh] w-full overflow-hidden flex items-center justify-center text-center px-5">

            {/* FULLSCREEN background image */}
            <img
                src="/media/jabolki.jpg"
                alt=""
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                }}
            />

            {/* Dark overlay so text stays readable */}
            <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, rgba(10,5,2,0.45) 0%, rgba(10,5,2,0.60) 100%)",
            }} />

            {/* Subtle leaf SVGs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <svg className="absolute opacity-[0.14] top-[8%] left-[2%] w-[220px]" style={{ transform: "rotate(-20deg)" }} viewBox="0 0 200 300" fill="none">
                    <path d="M100 280C100 280 10 180 20 80C30 -20 180 20 160 140C140 260 100 280 100 280Z" fill="#5a8a3a"/>
                    <line x1="100" y1="280" x2="90" y2="80" stroke="#3a6a1a" strokeWidth="2"/>
                </svg>
                <svg className="absolute opacity-[0.12] bottom-[10%] left-[8%] w-[160px]" style={{ transform: "rotate(15deg)" }} viewBox="0 0 200 300" fill="none">
                    <path d="M100 280C100 280 10 180 20 80C30 -20 180 20 160 140C140 260 100 280 100 280Z" fill="#6a9a4a"/>
                    <line x1="100" y1="280" x2="90" y2="80" stroke="#4a7a2a" strokeWidth="2"/>
                </svg>
            </div>

            <motion.div className="relative z-10 max-w-[720px]"
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
                <img className="w-[84px] mx-auto mb-7 block drop-shadow-lg" src={BRAND_LOGO} alt="Logo" style={{ mixBlendMode: "screen" }} />
                <h1 className="text-5xl leading-tight tracking-tight md:text-7xl"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#ffffff", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>
                    Среќно Јаболко
                </h1>
                <p className="mt-6 max-w-2xl text-lg font-light italic md:text-2xl"
                   style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.80)", textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
                    Вкусот на природата, раскажан низ генерации.
                </p>

                {/* Scroll hint */}
                <div className="mt-14 flex flex-col items-center gap-1.5" style={{ color: "rgba(201,169,110,0.75)" }}>
                    <span style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase" }}>Scroll</span>
                    <svg width="16" height="24" viewBox="0 0 18 28" fill="none">
                        <path d="M9 2v20M2 15l7 7 7-7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </motion.div>
        </section>
    );
}

/* ─── TWO COLUMN ─────────────────────────────────────────────────────── */
function TwoColumn({ image, title, children, reverse = false, parallax = false, id }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], parallax ? ["-8%", "8%"] : ["0%", "0%"]);

    return (
        <section id={id} ref={ref} className="relative py-20 md:py-32">
            <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:gap-20 md:px-10 lg:gap-28">
                <motion.div {...fadeUp}
                            className={`relative overflow-hidden rounded-3xl ${reverse ? "md:order-2" : ""}`}
                            style={{ boxShadow: "var(--shadow-luxury)" }}>
                    <div className="aspect-[4/5] overflow-hidden rounded-3xl">
                        <motion.img src={image} alt={title} loading="lazy" style={{ y }} className="h-[115%] w-full object-cover" />
                    </div>
                </motion.div>

                <motion.div {...fadeUp} transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                            className={`flex flex-col justify-center ${reverse ? "md:order-1" : ""}`}>
                    <div className="mb-5 h-px w-12 bg-accent" />
                    <h2 className="text-4xl leading-[1.1] text-foreground md:text-5xl lg:text-6xl"
                        style={{ fontFamily: "var(--font-display)" }}>
                        {title}
                    </h2>
                    <div className="mt-6 space-y-3 text-base leading-relaxed text-muted-foreground md:text-lg">
                        {children}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

/* ─── FAMILY SECTION ─────────────────────────────────────────────────── */
function FamilySection() {
    return (
        <section id="family" className="relative overflow-hidden py-20 md:py-32">
            <div className="pointer-events-none absolute inset-0 opacity-60"
                 style={{ background: "var(--gradient-warm)" }} />

            <div className="relative mx-auto max-w-7xl px-6 md:px-10">
                <div className="grid md:grid-cols-2 gap-12 md:gap-20 lg:gap-28 items-stretch">

                    <motion.div
                        {...fadeUp}
                        className="md:order-2 overflow-hidden rounded-3xl"
                        style={{ boxShadow: "var(--shadow-luxury)", minHeight: 520, background: "#f0e6d4" }}
                    >
                        <img
                            src={FAMILY_IMG}
                            alt="Петре, Александар и Стојанче Димовски"
                            loading="lazy"
                            style={{
                                width: "100%",
                                height: "100%",
                                minHeight: 520,
                                objectFit: "contain",
                                objectPosition: "center",
                                display: "block",
                                transition: "transform 2s ease",
                            }}
                            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
                            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                        />
                    </motion.div>

                    <motion.div {...fadeUp}
                                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                className="flex flex-col justify-center md:order-1">
                        <span className="mb-4 text-xs uppercase tracking-[0.4em] text-accent">Семејството зад брендот</span>
                        <h2 className="text-4xl leading-[1.05] text-foreground md:text-5xl lg:text-6xl"
                            style={{ fontFamily: "var(--font-display)" }}>
                            Петре, Александар и Стојанче
                            <span className="block italic text-accent/90"> — татко и неговите два сина</span>
                        </h2>
                        <div className="mt-6 space-y-3 text-base leading-relaxed text-muted-foreground md:text-lg">
                            <p className="italic text-foreground/80">Зад секое јаболко стои рака која го негувала.</p>
                            <p>
                                Петре Димовски не е некој кој случајно дошол до овоштарството. Тој е роден во ова.
                                Израснал меѓу редиците, научил да го чита небото, да го чувствува влажниот ветар пред дожд,
                                да знае кога дрвото бара помош и кога треба само да се остави на мир. Децении на труд,
                                стрпливост и длабока почит кон земјата — тоа е Петре.
                            </p>
                            <p>
                                Покрај него се неговите синови Александар и Стојанче Димовски. Млади, живи, со очи кои
                                гледаат напред, но со нозе цврсто на истата земја на која растеле. Тие го носат
                                наследството без да ги товари и знаат како да го однесат подалеку.
                            </p>
                            <p className="text-2xl italic text-foreground/90 md:text-3xl"
                               style={{ fontFamily: "var(--font-display)" }}>
                                Заедно се татко и синови. Заедно се и минатото и иднината на Среќно Јаболко.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

/* ─── GALLERY ────────────────────────────────────────────────────────── */
function Gallery() {
    return (
        <section id="gallery" className="relative py-20 md:py-32">
            <div className="mx-auto max-w-7xl px-6 md:px-10">
                <motion.div {...fadeUp} className="mb-14 max-w-2xl">
                    <span className="text-xs uppercase tracking-[0.4em] text-accent">Галерија</span>
                    <h2 className="mt-4 text-4xl leading-tight md:text-5xl lg:text-6xl"
                        style={{ fontFamily: "var(--font-display)" }}>
                        Процесот на одгледување
                    </h2>
                    <p className="mt-4 text-muted-foreground md:text-lg">
                        Од пупка до зрело јаболко — секој миг е дел од приказната.
                    </p>
                </motion.div>

                <div className="columns-1 gap-5 sm:columns-2 md:gap-6 lg:columns-3">
                    {GALLERY.map((src, i) => {
                        const isJar = src.includes("jabolka4");
                        return (
                            <motion.div key={src}
                                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.9, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                        className="mb-5 break-inside-avoid overflow-hidden rounded-3xl md:mb-6 relative"
                                        style={{ boxShadow: "var(--shadow-soft)" }}>
                                <div className="overflow-hidden relative">
                                    <img
                                        src={src}
                                        alt={GALLERY_LABELS[i]}
                                        loading="lazy"
                                        className="h-auto w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-110"
                                        style={isJar ? { objectFit: "cover", objectPosition: "20% center", aspectRatio: "3/4" } : {}}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 px-4 py-3"
                                         style={{ background: "linear-gradient(to top, rgba(8,6,4,0.65) 0%, transparent 100%)" }}>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9a96e]">{String(i + 1).padStart(2, "0")}</span>
                                            <span className="text-[11px] text-white/70 tracking-wider">{GALLERY_LABELS[i]}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.p {...fadeUp}
                          className="mt-20 text-center text-3xl italic text-foreground/90 md:text-4xl lg:text-5xl"
                          style={{ fontFamily: "var(--font-display)" }}>
                    Добредојдовте во семејството Среќно Јаболко.
                </motion.p>
            </div>
        </section>
    );
}

/* ─── SHARED FOOTER COMPONENTS ───────────────────────────────────────── */
export const IconApple = () => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ height: 40, width: 40, margin: "0 auto 16px", color: "#c9a96e" }}>
        <path d="M24 10 C24 10 20 4 14 5" />
        <path d="M24 10 C16 10 10 17 10 25 C10 35 17 43 24 43 C31 43 38 35 38 25 C38 17 32 10 24 10Z" />
        <path d="M24 10 C28 8 34 10 35 16" />
    </svg>
);

export const IconWave = () => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" style={{ height: 40, width: 40, margin: "0 auto 16px", color: "#c9a96e" }}>
        <path d="M6 28 Q12 20 18 28 Q24 36 30 28 Q36 20 42 28" />
        <path d="M6 22 Q12 14 18 22 Q24 30 30 22 Q36 14 42 22" />
        <path d="M10 34 Q18 26 26 34 Q34 42 42 34" />
    </svg>
);

export const IconDrop = () => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ height: 40, width: 40, margin: "0 auto 16px", color: "#c9a96e" }}>
        <path d="M24 8 L24 8 C24 8 12 22 12 30 C12 37 17.4 43 24 43 C30.6 43 36 37 36 30 C36 22 24 8 24 8Z" />
    </svg>
);

export const IconLeaf = () => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ height: 40, width: 40, margin: "0 auto 16px", color: "#c9a96e" }}>
        <path d="M24 40 C24 40 24 20 24 16" />
        <path d="M24 16 C24 16 36 10 40 20 C44 30 24 40 24 40 C24 40 4 30 8 20 C12 10 24 16 24 16Z" />
    </svg>
);

export const FOOTER_PILLARS = [
    { Icon: IconApple, title: "ЈАБОЛКО",   desc: "Преспанските овоштарници" },
    { Icon: IconWave,  title: "ПРЕСПА",    desc: "Езеро. Природа. Чистота и рамнотежа." },
    { Icon: IconDrop,  title: "КВАЛИТЕТ",  desc: "Вкус во кој може да се верува." },
    { Icon: IconLeaf,  title: "ТРАДИЦИЈА", desc: "Занает. Наследство. Од поколение на поколение." },
];

export function SharedFooter({ footerImg = "/media/slika5.jpg" }) {
    return (
        <footer style={{ position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0 }}>
                <img src={footerImg} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} loading="lazy" />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(8,6,4,0.80) 0%, rgba(8,6,4,0.92) 100%)" }} />
            </div>

            <div style={{ position: "relative", maxWidth: 1152, margin: "0 auto", padding: "0 40px" }}>
                {/* Top row */}
                <div style={{ borderBottom: "1px solid rgba(201,169,110,0.20)", paddingTop: 56, paddingBottom: 40, display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                        <img src="/media/logo.png" alt="Среќно Јаболко" style={{ height: 64, width: 64, objectFit: "contain", mixBlendMode: "screen" }} loading="lazy" />
                        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 400, color: "rgba(255,255,255,0.90)", letterSpacing: "0.08em", margin: 0 }}>
                            СРЕЌНО ЈАБОЛКО
                        </h3>
                        <p style={{ color: "rgba(201,169,110,0.70)", fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", margin: 0 }}>
                            Наследство. Преспа. Квалитет.
                        </p>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
                            <div style={{ height: 1, width: 40, background: "rgba(201,169,110,0.50)" }} />
                            <div style={{ height: 4, width: 4, borderRadius: "50%", background: "rgba(201,169,110,0.60)" }} />
                            <div style={{ height: 1, width: 40, background: "rgba(201,169,110,0.50)" }} />
                        </div>
                    </div>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(255,255,255,0.25)", fontStyle: "italic", fontSize: 14, maxWidth: 260, textAlign: "right", lineHeight: 1.7, margin: 0 }}>
                        Вкусот на природата,<br />раскажан низ генерации.
                    </p>
                </div>

                {/* Pillars */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, padding: "48px 0" }}>
                    {FOOTER_PILLARS.map(({ Icon, title, desc }) => (
                        <div key={title} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                            <Icon />
                            <p style={{ color: "#c9a96e", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 8 }}>{title}</p>
                            <p style={{ color: "rgba(255,255,255,0.38)", fontSize: 12, lineHeight: 1.6 }}>{desc}</p>
                        </div>
                    ))}
                </div>

                {/* Wave ornament */}
                <div style={{ position: "relative", height: 48, overflow: "hidden", opacity: 0.18, pointerEvents: "none" }}>
                    <svg viewBox="0 0 1200 60" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} fill="none">
                        <path d="M0 60 L0 40 Q100 20 200 35 Q350 50 450 30 Q500 20 550 25 Q580 28 600 20 Q620 12 650 18 Q700 28 800 35 Q950 45 1100 30 L1200 25 L1200 60 Z" fill="#c9a96e" />
                    </svg>
                </div>

                {/* Bottom */}
                <div style={{ borderTop: "1px solid rgba(201,169,110,0.10)", padding: "24px 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.35em", color: "rgba(255,255,255,0.22)", margin: 0 }}>
                        © {new Date().getFullYear()} Среќно Јаболко · Преспа, Македонија
                    </p>
                    <p style={{ fontSize: 11, color: "rgba(255,255,255,0.14)", letterSpacing: "0.05em", margin: 0 }}>
                        Сите права задржани
                    </p>
                </div>
            </div>
        </footer>
    );
}

/* ─── PAGE ────────────────────────────────────────────────────────────── */
export default function AboutUsPage() {
    return (
        <main className="text-foreground" style={{ backgroundColor: "var(--cream, #f9f4ed)" }}>
            <Hero />

            <TwoColumn id="story" image={LAND_IMG} title="Земјата која памети" reverse parallax>
                <p className="italic text-foreground/80">Има нешто длабоко во мирисот на свежо јаболко.</p>
                <p>
                    Нешто што те враќа во дворот на дедо, во есента, во детството.
                    Токму тоа чувство е она со кое живееме секој ден.
                </p>
                <p>
                    Ние сме <span className="text-foreground font-medium">Среќно Јаболко</span> — семејна
                    овоштарница со корени длабоко во преспанската земја.
                </p>
                <p>
                    Преспа не е случаен избор. Ова е еден од најстарите региони на Балканот, со езеро старо
                    над три милиони години, чија микроклима, ветрови и сонце создаваат нешто што не може да
                    се купи и не може да се лаже — вистински вкус. Земјата тука памети. И ние ја слушаме.
                </p>
            </TwoColumn>

            <TwoColumn image={HISTORY_IMG} title="Јаболкото — овошје со историја" reverse parallax>
                <p>
                    Јаболкото е можеби најстарото питомо овошје на светот. Неговиот диви предок сè уште расте
                    во планините на Казахстан, од каде пред илјади години тргнало на пат — низ Персија,
                    Македонија, Рим и го освоило светот. Станало симбол на знаење, на убавина, на живот.
                </p>
                <p>
                    Во Македонија, Преспа и Охридскиот регион со децении се препознатливи по јаболката
                    со исклучителен квалитет. Не е случајно.
                </p>
                <p className="italic text-foreground/80">
                    Тоа е резултат на земја, клима и луѓе кои знаат што прават.
                </p>
            </TwoColumn>

            <FamilySection />

            <TwoColumn image={WHY_IMG} title="Зошто Среќно Јаболко?" reverse>
                <p className="italic text-foreground/80">Затоа што веруваме дека убавото треба да биде едноставно.</p>
                <p>
                    Едно добро јаболко — свежо, вкусно, одгледано со грижа — може да направи ден поубар.
                    Може да нахрани дете, да разубави трпеза, да донесе мала, тивка среќа.
                </p>
                <p className="text-2xl italic text-foreground/90 md:text-3xl"
                   style={{ fontFamily: "var(--font-display)" }}>
                    Ние не продаваме само овошје.
                </p>
                <p>Ние нудиме вкус во кој може да се верува и приказна која вреди да се знае.</p>
            </TwoColumn>

            <Gallery />
            <SharedFooter footerImg={FOOTER_IMG} />
        </main>
    );
}