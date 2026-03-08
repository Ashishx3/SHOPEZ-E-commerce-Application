import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const submitHandler = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const success = await login(email, password);
            if (success) {
                navigate('/');
            }
        } catch (err) {
            setError(err?.response?.data?.message || err.error || 'Login failed');
        }
    };

    return (
        <div className="min-h-screen pt-24 flex flex-col items-center bg-gray-50 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mt-8"
            >
                <div className="p-8">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-semibold text-indigo-700">Login!</h2>
                    </div>

                    {error && (
                        <div className="bg-red-50 text-red-500 p-3 rounded-lg mb-6 text-sm text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={submitHandler} className="space-y-6">
                        <div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors text-sm placeholder-gray-400"
                                placeholder="Email Address"
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors text-sm placeholder-gray-400"
                                placeholder="Password"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors text-sm"
                        >
                            Login
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-gray-500 text-xs">
                            Don't have an account?{' '}
                            <Link to="/register" className="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors">
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default LoginPage;
