import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import CategorySection from '../components/CategorySection';
import ProductRow from '../components/ProductRow';
import axios from 'axios';
import { allDummyProducts } from '../data/dummyProducts';
import { Sparkles, Zap, Star } from 'lucide-react';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get('/api/products?page=1&sort=newest');

                const liveProducts = data.products.map(p => ({
                    ...p,
                    id: p._id,
                    original: p.price + 50,
                    offer: 'Hot Offer',
                    image: p.image || p.images[0]
                }));

                setProducts([...liveProducts, ...allDummyProducts]);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products', error);
                setProducts(allDummyProducts);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const getSlice = (start, end) =>
        products.slice(start, end).length > 0
            ? products.slice(start, end)
            : allDummyProducts.slice(start, end);

    return (
        <div className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen pb-16 font-sans">

            <CategorySection />
            <HeroSection />

            {!loading ? (
                <div className="space-y-8 mt-8 max-w-[1400px] mx-auto">

                    {/* Smart Picks */}
                    <ProductRow
                        title={
                            <span className="flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-purple-600" />
                                Smart Picks For You
                            </span>
                        }
                        subtitle="Trending products selected based on popularity and user interest"
                        products={getSlice(0, 6)}
                        bgColor="bg-transparent"
                        headerBg="bg-white border-b border-gray-200"
                    />

                    {/* Discover Products */}
                    <ProductRow
                        title={
                            <span className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-blue-500" />
                                Discover Unique Products
                            </span>
                        }
                        subtitle="Browse special and hand-picked items across different categories"
                        products={getSlice(6, 12)}
                        bgColor="bg-transparent"
                        headerBg="bg-white border-b border-gray-200"
                    />

                    {/* Tech Deals */}
                    <ProductRow
                        title="Latest Tech Deals"
                        subtitle="Upgrade your gadgets with these exciting tech offers"
                        products={getSlice(12, 18)}
                        bgColor="bg-transparent"
                        headerBg="bg-white border-b border-gray-200"
                    />

                    {/* Flash Sale */}
                    <ProductRow
                        title={
                            <span className="flex items-center gap-2">
                                <Zap className="w-5 h-5 text-yellow-400" />
                                Flash Sale
                            </span>
                        }
                        subtitle="Limited-time discounts on trending products"
                        products={getSlice(18, 24)}
                        bgColor="bg-transparent"
                        headerBg="bg-slate-900 text-white border-b border-slate-800"
                    />

                    {/* Furniture */}
                    <ProductRow
                        title="Furniture Collection"
                        subtitle="Modern and stylish furniture for your home"
                        products={getSlice(0, 5)}
                        bgColor="bg-transparent"
                        headerBg="bg-white border-b border-gray-200"
                    />

                </div>
            ) : (
                <div className="flex justify-center items-center h-64 mt-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
                </div>
            )}
        </div>
    );
};

export default HomePage;