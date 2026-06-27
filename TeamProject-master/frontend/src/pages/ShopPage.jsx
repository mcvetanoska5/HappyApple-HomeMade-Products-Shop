import React, { useContext, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from '../components/Link';
import { Text } from '../components/Text';
import ProductGrid from "../components/products/ProductGrid/ProductGrid";
import AddProductDialog from "../components/products/AddProductDialog/AddProductDialog";
import { Box, Button, CircularProgress } from "@mui/material";
import useProducts from "../hooks/useProducts";
import AuthContext from "../contexts/authContext";
import { useAddToCart } from "../hooks/Cart/useAddToCart";
import { SharedFooter } from "./AboutUsPage";

const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
};

export const ShopPage = ({ className, children, variant, contentKey, ...props }) => {

    const { addToCart, addToCartLoading, error } = useAddToCart();
    const [addItemDialogOpen, setAddItemDialogOpen] = useState(false);
    const { onAdd, onEdit, onDelete, changeQuantity, addDiscount, deleteDiscount, products, loading } = useProducts();
    const { user } = useContext(AuthContext);
    const roles = user?.roles || [];
    const isOwner = roles.includes("ROLE_OWNER");
    const isAdmin = roles.includes("ROLE_ADMIN");

    return (
        <main style={{ backgroundColor: "var(--cream, #f9f4ed)" }} className="text-foreground">

            {/* ── HERO ── */}
            <section className="relative min-h-[55vh] w-full overflow-hidden flex items-center justify-center text-center px-5">

                <img
                    src="/media/jabolki.jpg"
                    alt=""
                    style={{
                        position: "absolute", inset: 0,
                        width: "100%", height: "100%",
                        objectFit: "cover", objectPosition: "center",
                    }}
                />
                <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to bottom, rgba(10,5,2,0.45) 0%, rgba(10,5,2,0.62) 100%)",
                }} />

                {/* Leaf SVGs */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <svg className="absolute opacity-[0.14] top-[8%] left-[2%] w-[220px]" style={{ transform: "rotate(-20deg)" }} viewBox="0 0 200 300" fill="none">
                        <path d="M100 280C100 280 10 180 20 80C30 -20 180 20 160 140C140 260 100 280 100 280Z" fill="#5a8a3a"/>
                        <line x1="100" y1="280" x2="90" y2="80" stroke="#3a6a1a" strokeWidth="2"/>
                    </svg>
                    <svg className="absolute opacity-[0.12] bottom-[10%] right-[4%] w-[160px]" style={{ transform: "rotate(15deg)" }} viewBox="0 0 200 300" fill="none">
                        <path d="M100 280C100 280 10 180 20 80C30 -20 180 20 160 140C140 260 100 280 100 280Z" fill="#6a9a4a"/>
                        <line x1="100" y1="280" x2="90" y2="80" stroke="#4a7a2a" strokeWidth="2"/>
                    </svg>
                </div>

                <motion.div
                    className="relative z-10 max-w-[720px]"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <img
                        className="w-[72px] mx-auto mb-6 block drop-shadow-lg"
                        src="/media/logo.png" alt="Logo"
                        style={{ mixBlendMode: "screen" }}
                    />
                    <h1
                        className="text-5xl leading-tight tracking-tight md:text-7xl"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#ffffff", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
                    >
                        Продавница
                    </h1>
                    <p
                        className="mt-5 text-lg font-light italic md:text-2xl"
                        style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.78)", textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}
                    >
                        Свежо од Преспа, директно до вашата трпеза.
                    </p>

                    {/* Scroll hint */}
                    <div className="mt-12 flex flex-col items-center gap-1.5" style={{ color: "rgba(201,169,110,0.75)" }}>
                        <span style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase" }}>Scroll</span>
                        <svg width="16" height="24" viewBox="0 0 18 28" fill="none">
                            <path d="M9 2v20M2 15l7 7 7-7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </motion.div>
            </section>

            {/* ── PRODUCTS SECTION ── */}
            <section className="relative py-20 md:py-28">
                <div className="mx-auto max-w-7xl px-6 md:px-10">

                    {/* Section heading */}
                    <motion.div {...fadeUp} className="mb-14 max-w-2xl">
                        <span style={{ fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--accent, #c9a96e)" }}>
                            — Нашите производи —
                        </span>
                        <h2
                            className="mt-4 text-4xl leading-tight md:text-5xl lg:text-6xl text-foreground"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            Избери го својот омилен производ и уживај во вкусот на Преспа.
                        </h2>
                        <p className="mt-4 text-muted-foreground md:text-lg">
                            Секој производ е плод на труд, традиција и почит кон земјата.
                        </p>
                    </motion.div>

                    {/* Admin add button */}
                    {(isAdmin || isOwner) && (
                        <motion.div {...fadeUp} className="mb-8">
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={() => setAddItemDialogOpen(true)}
                            >
                                Add Product
                            </Button>
                        </motion.div>
                    )}

                    {/* Loading */}
                    {loading && (
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, padding: "80px 0" }}>
                            <CircularProgress size={28} sx={{ color: "#c9a96e" }} />
                            <p style={{ fontFamily: "var(--font-display)", fontSize: 18, fontStyle: "italic", color: "#c9a96e" }}>
                                Се вчитуваат производите...
                            </p>
                        </div>
                    )}

                    {/* Product grid */}
                    {!loading && (
                        <motion.div {...fadeUp}>
                            <ProductGrid
                                products={products}
                                addToCart={addToCart}
                                onEdit={onEdit}
                                onDelete={onDelete}
                                changeQuantity={changeQuantity}
                                addDiscount={addDiscount}
                                deleteDiscount={deleteDiscount}
                            />
                        </motion.div>
                    )}

                </div>
            </section>

            <SharedFooter footerImg="/media/slika5.jpg" />

            <AddProductDialog
                open={addItemDialogOpen}
                onClose={() => setAddItemDialogOpen(false)}
                onAdd={onAdd}
            />
        </main>
    );
};

export default ShopPage;