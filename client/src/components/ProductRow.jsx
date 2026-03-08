import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductRow = ({ title, subtitle, products, bgColor = 'bg-transparent', headerBg = '' }) => {

    const sliderRef = useRef(null);
    const { addToCart } = useCart();

    const slideLeft = () => {
        sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    };

    const slideRight = () => {
        sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    };

    return (
        <section className={`py-6 ${bgColor} max-w-7xl mx-auto px-4 lg:px-8`}>

            <div className="rounded-2xl bg-white/70 backdrop-blur border border-gray-200 shadow-sm overflow-hidden">

                {/* Header */}
                <div className="px-6 py-5 flex items-center justify-between bg-gradient-to-r from-red-600 to-violet-600">

                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                            {title}
                        </h2>

                        {subtitle && (
                            <p className="text-sm text-indigo-100 mt-1">
                                {subtitle}
                            </p>
                        )}
                    </div>

                    <div className="flex gap-2">

                        <button
                            onClick={slideLeft}
                            className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <button
                            onClick={slideRight}
                            className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>

                    </div>

                </div>

                {/* Products */}
                <div
                    ref={sliderRef}
                    className="flex overflow-x-auto gap-6 p-6 snap-x snap-mandatory hide-scroll-bar"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >

                    {products.map((deal) => (

                        <motion.div
                            key={deal.id}
                            whileHover={{ y: -6 }}
                            className="min-w-[200px] max-w-[200px] rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 snap-start group cursor-pointer"
                        >

                            <Link to={`/product/${deal.id}`}>

                                {/* Product Image */}
                                <div className="bg-gradient-to-b from-gray-50 to-gray-100 rounded-t-xl p-4 h-40 flex items-center justify-center overflow-hidden">

                                    <img
                                        src={deal.image}
                                        alt={deal.name}
                                        className="w-full h-full object-contain group-hover:scale-110 transition duration-300"
                                    />

                                </div>

                                {/* Product Info */}
                                <div className="p-4">

                                    <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-1 group-hover:text-indigo-600 transition">
                                        {deal.name}
                                    </h3>

                                    {deal.offer && (
                                        <p className="text-xs font-semibold text-green-600 mb-1">
                                            {deal.offer}
                                        </p>
                                    )}

                                    <div className="flex items-center gap-2">

                                        <span className="text-base font-bold text-gray-900">
                                            ₹{deal.price}
                                        </span>

                                        {deal.original && (
                                            <span className="text-xs text-gray-400 line-through">
                                                ₹{deal.original}
                                            </span>
                                        )}

                                    </div>

                                </div>

                            </Link>

                        </motion.div>

                    ))}

                </div>

            </div>

            <style jsx="true">{`
                .hide-scroll-bar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>

        </section>
    );
};

export default ProductRow;