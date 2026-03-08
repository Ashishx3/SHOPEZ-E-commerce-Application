import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-gray-300">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div>
                        <Link to="/" className="inline-block mb-6">
                            <span className="text-3xl font-extrabold tracking-tight text-white">
                                Shop<span className="text-indigo-400">EZ</span>
                            </span>
                        </Link>

                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Discover high-quality products with a smooth and intelligent shopping experience powered by modern technology.
                        </p>

                        <div className="flex space-x-4">

                            <a href="#" className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center hover:bg-blue-600 transition">
                                <Facebook className="w-5 h-5" />
                            </a>

                            <a href="#" className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center hover:bg-sky-500 transition">
                                <Twitter className="w-5 h-5" />
                            </a>

                            <a href="#" className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center hover:bg-pink-500 transition">
                                <Instagram className="w-5 h-5" />
                            </a>

                            <a href="#" className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center hover:bg-red-600 transition">
                                <Youtube className="w-5 h-5" />
                            </a>

                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6 border-b border-white/10 pb-2">
                            Explore
                        </h3>

                        <ul className="space-y-3">
                            <li><Link to="/" className="hover:text-indigo-300 transition">Home</Link></li>
                            <li><Link to="/about" className="hover:text-indigo-300 transition">About</Link></li>
                            <li><Link to="/products" className="hover:text-indigo-300 transition">Browse Products</Link></li>
                            <li><Link to="/contact" className="hover:text-indigo-300 transition">Help Center</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6 border-b border-white/10 pb-2">
                            Support
                        </h3>

                        <ul className="space-y-3">
                            <li><Link to="/faq" className="hover:text-indigo-300 transition">FAQs</Link></li>
                            <li><Link to="/returns" className="hover:text-indigo-300 transition">Returns</Link></li>
                            <li><Link to="/shipping" className="hover:text-indigo-300 transition">Shipping</Link></li>
                            <li><Link to="/privacy" className="hover:text-indigo-300 transition">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6 border-b border-white/10 pb-2">
                            Get in Touch
                        </h3>

                        <ul className="space-y-4">

                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-indigo-400 mt-1 shrink-0" />
                                <span className="text-gray-400">
                                    Knowledge Park III, Greater Noida, Uttar Pradesh
                                </span>
                            </li>

                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-indigo-400 shrink-0" />
                                <span className="text-gray-400">+91 9508019871</span>
                            </li>

                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-indigo-400 shrink-0" />
                                <span className="text-gray-400">amitofficialcs@gmail.com</span>
                            </li>

                        </ul>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">

                    <p>
                        © {new Date().getFullYear()} ShopEZ. Crafted for a better shopping experience.
                    </p>

                    <div className="flex space-x-5 mt-4 md:mt-0 opacity-80">

                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-4" />

                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="MasterCard" className="h-4" />

                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png" alt="PayPal" className="h-4" />

                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;