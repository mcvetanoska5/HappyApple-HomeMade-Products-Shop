import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SharedFooter } from './AboutUsPage';


export const IndexPage = () => {
    const [activeRecipe, setActiveRecipe] = useState(null);

    return (
        <div className="w-full min-h-screen bg-[#fdf6ec] text-[#3a2010] antialiased">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Jost:wght@300;400;500&display=swap');

                .index-root { font-family: 'Jost', sans-serif; }
                .hero-title  { font-family: 'Cormorant Garamond', serif; font-size: clamp(52px, 8vw, 96px); color: #7a1e2e; }
                .hero-slogan { font-family: 'Cormorant Garamond', serif; font-size: clamp(18px, 2.5vw, 26px); color: #6b3a2a; }
                .section-ornament { font-family: 'Cormorant Garamond', serif; font-size: 13px; letter-spacing: 4px; color: #c9a96e; text-transform: uppercase; }
                .section-title    { font-family: 'Cormorant Garamond', serif; font-size: clamp(32px, 5vw, 52px); color: #7a1e2e; }
                .welcome-text     { font-family: 'Cormorant Garamond', serif; font-size: clamp(18px, 2.2vw, 22px); color: #6b4c35; }
                .product-name     { font-family: 'Cormorant Garamond', serif; font-size: 22px; color: #7a1e2e; }
                .recipe-name      { font-family: 'Cormorant Garamond', serif; }
                .benefit-name     { font-family: 'Cormorant Garamond', serif; font-size: 20px; color: #7a1e2e; }
                .cta-title        { font-family: 'Cormorant Garamond', serif; font-size: clamp(32px, 5vw, 54px); color: #7a1e2e; }

                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(24px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-up   { animation: fadeUp 1s ease both; }
                .animate-fade-up-1 { animation: fadeUp 1s 0.2s ease both; }
                .animate-fade-up-2 { animation: fadeUp 1s 0.4s ease both; }
                .animate-fade-up-3 { animation: fadeUp 1s 0.6s ease both; }

                .product-card { background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 8px 40px rgba(122,30,46,0.08); transition: transform 0.4s, box-shadow 0.4s; }
                .product-card:hover { transform: translateY(-8px); box-shadow: 0 20px 60px rgba(122,30,46,0.16); }

                .story-img { width: 100%; height: 100%; object-fit: cover; transition: transform 1.6s ease; }
                .story-img-wrap:hover .story-img { transform: scale(1.04); }

                /* ── Recipe cards (image on top, recipe text below) ── */
                .recipe-row { }
                .recipe-num-badge {
                    position: absolute; top: 12px; left: 12px;
                    font-family: 'Cormorant Garamond', serif;
                    font-weight: 500;
                    font-size: 13px;
                    letter-spacing: 0.05em;
                    color: #fdf6ec;
                    background: rgba(58, 32, 16, 0.55);
                    backdrop-filter: blur(3px);
                    border-radius: 20px;
                    padding: 3px 10px;
                    z-index: 2;
                }
                .recipe-thumb { position: relative; overflow: hidden; border-radius: 14px; background: #f0e4cf; }
                .recipe-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.6s ease; font-size: 0; color: transparent; }
                .recipe-row:hover .recipe-thumb img { transform: scale(1.06); }
                .recipe-row:hover .recipe-name { color: #9b3040; }
                .recipe-arrow { transition: transform 0.3s ease, opacity 0.3s ease; opacity: 0; transform: translateX(-6px); }
                .recipe-row:hover .recipe-arrow { opacity: 1; transform: translateX(0); }
                .recipe-arrow-static { display: inline-block; transition: transform 0.25s ease; }
                .recipe-cta:hover .recipe-arrow-static { transform: translateX(3px); }

                /* ── Benefits (menu-style list, replaces old icon-card grid) ── */
                .benefit-row { border-top: 1px solid rgba(122,30,46,0.12); }
                .benefit-row:last-child { border-bottom: 1px solid rgba(122,30,46,0.12); }
                .benefit-num {
                    font-family: 'Cormorant Garamond', serif;
                    font-weight: 400;
                    font-size: 34px;
                    color: rgba(122,30,46,0.22);
                    line-height: 1;
                }
            `}</style>

            <div className="index-root pt-16">

                {/* ── HERO ── */}
                <section className="relative min-h-[92vh] overflow-hidden flex items-center justify-center text-center px-5"
                         style={{ background: "linear-gradient(135deg, #fdf6ec 0%, #f5e9d8 50%, #eedfc8 100%)" }}>

                    {/* Background orchard image */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <img
                            src="/media/slika5.jpg"
                            alt=""
                            style={{
                                position: "absolute", right: 0, top: 0, width: "52%", height: "100%",
                                objectFit: "cover", objectPosition: "center",
                                opacity: 0.22,
                                maskImage: "linear-gradient(to left, rgba(0,0,0,0.7) 0%, transparent 100%)",
                                WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.7) 0%, transparent 100%)",
                            }}
                        />
                        {/* Big logo watermark */}
                        <img
                            src="/media/logo.png"
                            alt=""
                            style={{
                                position: "absolute", right: "-40px", top: "50%", transform: "translateY(-50%)",
                                width: "55vw", maxWidth: 800, opacity: 0.06,
                            }}
                        />
                        {/* Leaf SVGs */}
                        <svg className="absolute opacity-[0.16] top-[8%] left-[2%] w-[220px]" style={{ transform: "rotate(-20deg)" }} viewBox="0 0 200 300" fill="none">
                            <path d="M100 280C100 280 10 180 20 80C30 -20 180 20 160 140C140 260 100 280 100 280Z" fill="#5a8a3a"/>
                            <line x1="100" y1="280" x2="90" y2="80" stroke="#3a6a1a" strokeWidth="2"/>
                        </svg>
                        <svg className="absolute opacity-[0.14] bottom-[10%] left-[8%] w-[160px]" style={{ transform: "rotate(15deg)" }} viewBox="0 0 200 300" fill="none">
                            <path d="M100 280C100 280 10 180 20 80C30 -20 180 20 160 140C140 260 100 280 100 280Z" fill="#6a9a4a"/>
                            <line x1="100" y1="280" x2="90" y2="80" stroke="#4a7a2a" strokeWidth="2"/>
                        </svg>
                        {/* Apple blossoms top-right */}
                        <svg className="absolute opacity-[0.12] top-[5%] right-[20%] w-[180px]" style={{ transform: "rotate(10deg)" }} viewBox="0 0 200 200" fill="none">
                            <circle cx="100" cy="80" r="18" fill="#e8b4bc"/>
                            <circle cx="140" cy="60" r="14" fill="#f0c8ce"/>
                            <circle cx="70"  cy="55" r="16" fill="#e8b4bc"/>
                            <circle cx="55"  cy="90" r="12" fill="#f0c8ce"/>
                            <circle cx="150" cy="100" r="15" fill="#e8b4bc"/>
                        </svg>
                    </div>

                    <div className="relative z-10 max-w-[720px]">
                        <img className="w-[84px] mx-auto mb-7 block drop-shadow-lg" src="/media/logo.png" alt="Logo" />
                        <h1 className="hero-title font-semibold leading-none tracking-[2px] animate-fade-up">Среќно Јаболко</h1>
                        <p className="hero-slogan italic font-normal mt-3.5 animate-fade-up-1">Здрава и вкусна ужина за вас и вашите најблиски.</p>
                        <p className="font-light text-[14px] md:text-[16px] text-[#9c7a5e] mt-[22px] tracking-[0.5px] leading-[1.8] animate-fade-up-2">
                            Директно од нашите насади до вашата трпеза — вкус, квалитет и грижа за секое семејство.
                        </p>
                        <div className="flex gap-4 justify-center mt-[38px] flex-wrap animate-fade-up-3">
                            <Link to="/products" className="bg-[#7a1e2e] text-white no-underline border-none rounded-[50px] px-9 py-3.5 text-[14px] tracking-[1.2px] cursor-pointer transition-all hover:bg-[#9b3040] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(122,30,46,0.25)]">Нарачај веднаш</Link>
                            <Link to="/products" className="bg-transparent text-[#7a1e2e] no-underline border-[1.5px] border-[#7a1e2e] rounded-[50px] px-9 py-3.5 text-[14px] tracking-[1.2px] cursor-pointer transition-all hover:bg-[#7a1e2e] hover:text-white hover:-translate-y-0.5">Разгледај производи</Link>
                        </div>
                    </div>

                    {/* Scroll hint */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#c9a96e]/60 animate-fade-up-3">
                        <span style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase" }}>Scroll</span>
                        <svg width="16" height="24" viewBox="0 0 18 28" fill="none">
                            <path d="M9 2v20M2 15l7 7 7-7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </section>

                {/* ── WELCOME ── */}
                <section className="py-[100px] px-[60px] md:px-6 text-center max-w-[800px] mx-auto">
                    <span className="section-ornament block mb-[18px]">— Добредојдовте —</span>
                    <p className="welcome-text italic leading-[1.8] font-normal">
                        Место каде <strong className="text-[#7a1e2e] not-italic">традицијата</strong>, квалитетот и внимателно одбраните производи создаваат вкус во кој ќе ужива целото семејство.
                    </p>
                    <div className="flex items-center justify-center gap-3 mt-8">
                        <div style={{ height: 1, width: 40, background: "#c9a96e", opacity: 0.5 }} />
                        <div style={{ height: 6, width: 6, borderRadius: "50%", background: "#c9a96e" }} />
                        <div style={{ height: 1, width: 40, background: "#c9a96e", opacity: 0.5 }} />
                    </div>
                </section>

                {/* ── PRODUCTS ── */}
                <section className="py-20 px-6 md:px-[60px]" style={{ background: "linear-gradient(to bottom, #fdf6ec, #f5e9d8)" }}>
                    <div className="text-center mb-[60px]">
                        <span className="section-ornament">— Производи —</span>
                        <h2 className="section-title font-semibold mt-2 mb-7">Дел од Нашите Производи</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
                        {/* Card 1 — Мацун */}
                        <div className="product-card">
                            <div style={{ position: "relative", overflow: "hidden" }} className="story-img-wrap">
                                <img className="story-img" style={{ width: "100%", aspectRatio: "4/3", objectFit: "contain", background: "#f5ede0", display: "block" }}
                                     src="/media/madzun.jpg"
                                     alt="Јаболков маџум" />
                                <div style={{ position: "absolute", top: 16, left: 16, background: "rgba(201,169,110,0.92)", borderRadius: 20, padding: "4px 12px", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#1a0f0a", fontWeight: 600 }}>
                                    Традиционален
                                </div>
                            </div>
                            <div className="p-7 pb-8">
                                <div className="product-name font-semibold mb-2.5">Јаболков маџум</div>
                                <p className="font-light text-[14px] text-[#9c7a5e] leading-[1.65] mb-5">Рачно подготвен маџум со автентичен вкус, направен по традиционална рецептура со јаболка од нашите насади.</p>
                                <Link to="/products" className="text-[13px] tracking-[1.5px] uppercase text-[#c9a96e] no-underline border-b border-[#e8d5b0] pb-0.5 transition-colors hover:text-[#7a1e2e] hover:border-[#7a1e2e]">Дознај повеќе →</Link>
                            </div>
                        </div>
                        {/* Card 2 — Свежи јаболки */}
                        <div className="product-card">
                            <div style={{ position: "relative", overflow: "hidden" }} className="story-img-wrap">
                                <img className="story-img" style={{ width: "100%", aspectRatio: "4/3", objectFit: "contain", background: "#f5ede0", display: "block" }}
                                     src="/media/jabolka1.jpg"
                                     alt="Свежи јаболки" />
                            </div>
                            <div className="p-7 pb-8">
                                <div className="product-name font-semibold mb-2.5">Свежи јаболки</div>
                                <p className="font-light text-[14px] text-[#9c7a5e] leading-[1.65] mb-5">Внимателно берани, свежи јаболки директно од нашите преспански насади — идеален избор за секое семејство.</p>
                                <Link to="/products" className="text-[13px] tracking-[1.5px] uppercase text-[#c9a96e] no-underline border-b border-[#e8d5b0] pb-0.5 transition-colors hover:text-[#7a1e2e] hover:border-[#7a1e2e]">Дознај повеќе →</Link>
                            </div>
                        </div>
                        {/* Card 3 — Ајдарет */}
                        <div className="product-card">
                            <div style={{ position: "relative", overflow: "hidden" }} className="story-img-wrap">
                                <img className="story-img" style={{ width: "100%", aspectRatio: "4/3", objectFit: "contain", background: "#f5ede0", display: "block" }}
                                     src="/media/jabolka3.jpg"
                                     alt="Ајдарет јаболко" />
                            </div>
                            <div className="p-7 pb-8">
                                <div className="product-name font-semibold mb-2.5">Ајдарет јаболко</div>
                                <p className="font-light text-[14px] text-[#9c7a5e] leading-[1.65] mb-5">Свежи јаболки од сортата Ајдарет — богати со витамини, длабок рубин-црвена боја и неодолив вкус.</p>
                                <Link to="/products" className="text-[13px] tracking-[1.5px] uppercase text-[#c9a96e] no-underline border-b border-[#e8d5b0] pb-0.5 transition-colors hover:text-[#7a1e2e] hover:border-[#7a1e2e]">Дознај повеќе →</Link>
                            </div>
                        </div>
                    </div>

                    {/* ── RECIPES — editorial index, не картички ── */}
                    <div className="text-center mb-[56px] mt-[100px]">
                        <span className="section-ornament">— Инспирација —</span>
                        <h2 className="section-title font-semibold mt-2 mb-5">Рецепти со Нашите Производи</h2>
                        <p className="font-light text-[14px] text-[#9c7a5e] max-w-[480px] mx-auto leading-[1.7]">
                            Четири начини да внесете малку повеќе јаболко во вашата секојдневна трпеза.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 max-w-[920px] mx-auto">
                        {[
                            {
                                title: "Домашна пита со јаболка",
                                tag: "Десерт",
                                time: "60 мин",
                                img: "/media/pita.jpg",
                                summary: "Крцкава кора и мек, цимет-арома фил од нашите свежи јаболки.",
                                ingredients: [
                                    "6 свежи јаболки (Ајдарет), исечени на кришки",
                                    "2 ролни кори за пита",
                                    "1 лажица цимет",
                                    "100 г шеќер",
                                    "50 г масло",
                                    "Шеќер во прав за послужување",
                                ],
                                steps: [
                                    "Загрејте рерна на 180°C.",
                                    "Измешајте јаболките со цимет и шеќер.",
                                    "Редете кори во плех, премачкани со масло, со фил помеѓу слоевите.",
                                    "Печете 40-45 минути додека не добие златна боја.",
                                    "Послужете млако, посипано со шеќер во прав.",
                                ],
                            },
                            {
                                title: "Смути од јаболко и цимет",
                                tag: "Пијалок",
                                time: "10 мин",
                                img: "/media/smuti1.jpg",
                                summary: "Брз и здрав смути за енергичен почеток на денот.",
                                ingredients: [
                                    "2 јаболка, исечени на коцки",
                                    "200 мл јаболков сок",
                                    "1/2 лажичка цимет",
                                    "Коцки мраз",
                                    "1 лажица мед (опционално)",
                                ],
                                steps: [
                                    "Ставете ги сите состојки во блендер.",
                                    "Блендирајте 30-40 секунди до густа кремаста смеса.",
                                    "Послужете веднаш, украсено со прстен јаболко.",
                                ],
                            },
                            {
                                title: "Здрав појадок со јаболков мацун",
                                tag: "Појадок",
                                time: "15 мин",
                                img: "/media/zdravpojadok.jpg",
                                summary: "Лесен појадок со нашиот традиционален јаболков маџум и овошје.",
                                ingredients: [
                                    "200 г јогурт",
                                    "2 лажици јаболков маџум",
                                    "Шака овесни снегулки",
                                    "Шака свежи бобинки",
                                    "Мед по вкус",
                                ],
                                steps: [
                                    "Во чаша редете слоеви јогурт и маџум.",
                                    "Додадете овесни снегулки и бобинки.",
                                    "Завршете со мед по вкус и послужете веднаш.",
                                ],
                            },
                            {
                                title: "Освежителен напиток со јаболков сок",
                                tag: "Освежување",
                                time: "5 мин",
                                img: "/media/sok1.jpg",
                                summary: "Едноставен летен освежувач со свеж сок од нашите јаболки.",
                                ingredients: [
                                    "250 мл свеж јаболков сок",
                                    "Сода вода",
                                    "Кришки лимон",
                                    "Свежа нане",
                                    "Коцки мраз",
                                ],
                                steps: [
                                    "Во висока чаша ставете мраз и кришки лимон.",
                                    "Долијте јаболков сок до половина.",
                                    "Дополнете со сода вода и украсете со нане.",
                                ],
                            },
                        ].map((recipe, index) => (
                            <div
                                key={index}
                                className="recipe-row group block"
                            >
                                <div className="recipe-thumb" style={{ width: "100%", aspectRatio: "4/3" }}>
                                    <img src={recipe.img} alt={recipe.title} loading="lazy" />
                                    <span className="recipe-num-badge">{String(index + 1).padStart(2, '0')}</span>
                                </div>

                                <div className="pt-4">
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="flex-1 min-w-0">
                                            <span className="block text-[10px] tracking-[0.2em] uppercase text-[#c9a96e] mb-1.5">{recipe.tag}</span>
                                            <div className="recipe-name font-medium text-[19px] md:text-[21px] text-[#3a2010] leading-[1.25] transition-colors">{recipe.title}</div>
                                        </div>
                                        <span className="text-[12px] tracking-[0.1em] text-[#9c7a5e] whitespace-nowrap pt-0.5 shrink-0">{recipe.time}</span>
                                    </div>

                                    <p className="font-light text-[13.5px] text-[#9c7a5e] leading-[1.6] mt-2.5 mb-3.5">{recipe.summary}</p>

                                    <button
                                        onClick={() => setActiveRecipe(recipe)}
                                        className="recipe-cta inline-flex items-center gap-1.5 text-[12px] tracking-[1.2px] uppercase text-[#7a1e2e] bg-transparent border-none cursor-pointer pl-0 transition-colors hover:text-[#9b3040]"
                                    >
                                        Цел рецепт <span className="recipe-arrow-static">→</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ── Recipe detail modal ── */}
                    {activeRecipe && (
                        <div
                            className="fixed inset-0 z-[100] flex items-center justify-center px-5"
                            style={{ background: "rgba(26,15,10,0.55)" }}
                            onClick={() => setActiveRecipe(null)}
                        >
                            <div
                                className="bg-[#fdf6ec] rounded-[20px] max-w-[560px] w-full max-h-[85vh] overflow-y-auto relative"
                                style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.35)" }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div style={{ aspectRatio: "16/7" }} className="relative overflow-hidden">
                                    <img src={activeRecipe.img} alt={activeRecipe.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                                </div>
                                <button
                                    onClick={() => setActiveRecipe(null)}
                                    aria-label="Затвори"
                                    className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-[18px] cursor-pointer border-none"
                                    style={{ background: "rgba(26,15,10,0.55)", color: "#fdf6ec" }}
                                >
                                    ×
                                </button>
                                <div className="p-8 md:p-9">
                                    <span className="block text-[10px] tracking-[0.2em] uppercase text-[#c9a96e] mb-2">{activeRecipe.tag} · {activeRecipe.time}</span>
                                    <h3 className="recipe-name font-semibold text-[28px] text-[#7a1e2e] leading-[1.2] mb-5">{activeRecipe.title}</h3>

                                    <div className="mb-7">
                                        <span className="section-ornament block mb-3" style={{ fontSize: 11 }}>Состојки</span>
                                        <ul className="space-y-1.5">
                                            {activeRecipe.ingredients.map((ing, i) => (
                                                <li key={i} className="font-light text-[14px] text-[#6b4c35] leading-[1.6] flex gap-2.5">
                                                    <span className="text-[#c9a96e] shrink-0">•</span>{ing}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <span className="section-ornament block mb-3" style={{ fontSize: 11 }}>Подготовка</span>
                                        <ol className="space-y-2.5">
                                            {activeRecipe.steps.map((step, i) => (
                                                <li key={i} className="font-light text-[14px] text-[#6b4c35] leading-[1.6] flex gap-3">
                                                    <span className="recipe-num shrink-0" style={{ fontSize: 14 }}>{String(i + 1).padStart(2, '0')}</span>{step}
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </section>

                {/* ── ORCHARD STORY STRIP ── */}
                <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 420, margin: "0 40px 0", borderRadius: 32, overflow: "hidden" }}>
                    <div style={{ position: "relative", overflow: "hidden" }} className="story-img-wrap">
                        <img className="story-img" src="/media/slikadrva2.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div style={{ background: "linear-gradient(135deg, #f5e9d8 0%, #eedfc8 100%)", padding: "60px 50px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 13, letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a96e", marginBottom: 20 }}>Нашата приказна</p>
                        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,3.5vw,44px)", color: "#7a1e2e", fontWeight: 400, lineHeight: 1.2, marginBottom: 20 }}>
                            Генерации на<br />знаење и труд
                        </h2>
                        <p style={{ fontSize: 15, fontWeight: 300, color: "#6b4c35", lineHeight: 1.8, marginBottom: 32 }}>
                            Секое јаболко е плод на децении искуство, почит кон земјата и посветеност на квалитетот. Нашите насади во Преспа се сведоштво за тоа.
                        </p>
                        <Link to="/aboutUs" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase", color: "#7a1e2e", textDecoration: "none", fontWeight: 500 }}>
                            Дознај повеќе <span>→</span>
                        </Link>
                    </div>
                </section>

                {/* ── BENEFITS — листа во стил на мени, без icon-картички ── */}
                <section className="py-20 px-6 md:px-[60px]" style={{ background: "linear-gradient(to bottom, #f5e9d8, #fdf6ec)", marginTop: 40 }}>
                    <div className="grid md:grid-cols-[1fr_1.4fr] gap-x-16 gap-y-10 max-w-[1000px] mx-auto items-start">

                        {/* Left: sticky-feeling intro column */}
                        <div className="md:sticky md:top-28">
                            <span className="section-ornament">— Придобивки —</span>
                            <h2 className="section-title font-semibold mt-2 mb-5 leading-[1.1]">Зошто токму<br />наше јаболко</h2>
                            <p className="font-light text-[14.5px] text-[#9c7a5e] leading-[1.8] max-w-[320px]">
                                Шест причини зошто нашите производи се секојдневен избор за семејства низ цела земја.
                            </p>
                        </div>

                        {/* Right: numbered list */}
                        <div>
                            {[
                                {
                                    title: "Богато со витамини",
                                    desc: "Природни витамини и минерали во секоја лажица.",
                                },
                                {
                                    title: "Добро за имунитет",
                                    desc: "Поддржува и ја зајакнува природната одбрана на телото.",
                                },
                                {
                                    title: "Природна енергија",
                                    desc: "Полна и чиста енергија за активен ден.",
                                },
                                {
                                    title: "Без вештачки состојки",
                                    desc: "Само природно — никаква хемија или адитиви.",
                                },
                                {
                                    title: "Здрав избор за сите",
                                    desc: "Одличен и вкусен избор за сите возрасти во домот.",
                                },
                                {
                                    title: "Домашен автентичен вкус",
                                    desc: "Вкус кој потсетува на бабини рецепти и домашна топлина.",
                                },
                            ].map((b, i) => (
                                <div key={i} className="benefit-row flex items-baseline gap-6 py-5">
                                    <span className="benefit-num shrink-0 w-[40px] text-right">{String(i + 1).padStart(2, '0')}</span>
                                    <div>
                                        <div className="benefit-name font-semibold mb-1">{b.title}</div>
                                        <p className="font-light text-[13.5px] text-[#9c7a5e] leading-relaxed">{b.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="py-[100px] px-6 md:px-[60px] text-center relative overflow-hidden"
                         style={{ background: "linear-gradient(to right, #fdf6ec, #f0e2cc, #fdf6ec)" }}>
                    <div style={{ position: "absolute", fontSize: 260, opacity: 0.06, pointerEvents: "none", left: -40, top: "50%", transform: "translateY(-50%)", lineHeight: 1 }}>🍎</div>
                    <div style={{ position: "absolute", fontSize: 260, opacity: 0.06, pointerEvents: "none", right: -40, top: "50%", transform: "translateY(-50%)", lineHeight: 1 }}>🍎</div>
                    <div className="relative z-10 max-w-[680px] mx-auto">
                        <span className="section-ornament">— За вас —</span>
                        <h2 className="cta-title font-semibold leading-[1.15] mt-2 mb-5">Подарете им здравје на оние<br />што ги сакате.</h2>
                        <p className="font-light text-[15px] text-[#6b4c35] leading-[1.75] mb-[38px]">
                            Нарачајте производи за вас, вашето семејство, вашите најблиски и вашите вработени — а ние со љубов ќе ви ги доставиме директно до вашата врата.
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <Link to="/products" className="bg-[#7a1e2e] text-white no-underline border-none rounded-[50px] px-9 py-3.5 text-[14px] tracking-[1.2px] cursor-pointer transition-all hover:bg-[#9b3040] hover:-translate-y-0.5">Нарачај сега</Link>
                            <Link to="/contactUs" className="bg-transparent text-[#7a1e2e] no-underline border-[1.5px] border-[#7a1e2e] rounded-[50px] px-9 py-3.5 text-[14px] tracking-[1.2px] cursor-pointer transition-all hover:bg-[#7a1e2e] hover:text-white hover:-translate-y-0.5">Контактирај нѐ</Link>
                        </div>
                    </div>
                </section>

                {/* ── FOOTER ── */}
                <SharedFooter footerImg="/media/slika5.jpg" />

            </div>
        </div>
    );
};
export default IndexPage;