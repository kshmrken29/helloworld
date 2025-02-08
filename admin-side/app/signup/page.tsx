import Image from "next/image";
import { Playfair_Display, Montserrat, Inter } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function Signup() {
    return (
        <div className="flex min-h-screen bg-white">
            <div className="hidden md:flex md:w-1/2 relative">
                <Image
                    src="/signup.jpg"
                    alt="Signup Image"
                    className="object-cover"
                    fill
                    priority
                />
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center p-8">
                <div className="w-full max-w-md mt-2">
                    <h1 className={`text-center mb-8 ${montserrat.className}`}>
                        <span className="text-black text-5xl font-extrabold tracking-widest">MEDI</span>
                        <span className="text-green-600 text-5xl font-extrabold tracking-widest">CARE</span>
                    </h1>
                    
                    <h2 className={`text-black text-2xl text-center mb-8 ${playfair.className}`}>SIGN UP</h2>

                    <form className="space-y-6">
                        <div>
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label className="text-black block text-sm mb-2">First Name</label>
                                    <input 
                                        type="text" 
                                        className="w-full p-3 bg-gray-100 rounded-2xl text-sm text-black" 
                                        placeholder="Enter your first name"
                                        required />
                                </div>
                                <div className="flex-1">
                                    <label className="text-black block text-sm mb-2">Last Name</label>
                                    <input 
                                        type="text" 
                                        className="w-full p-3 bg-gray-100 rounded-2xl text-sm text-black" 
                                        placeholder="Enter your last name"
                                        required />
                                </div>
                            </div>
                            <label className="text-black block text-sm mb-2">Email Address</label>
                            <input 
                                type="email" 
                                className="w-full p-3 bg-gray-100 rounded-2xl text-sm text-black" 
                                placeholder="Enter your email"
                                required />
                            <label className="text-black block text-sm mb-2">Password</label>
                            <input 
                                type="password" 
                                className="w-full p-3 bg-gray-100 rounded-2xl text-sm text-black" 
                                placeholder="Enter your password"
                                required />
                            <label className="text-black block text-sm mb-2">Confirm Password</label>
                            <input 
                                type="password" 
                                className="w-full p-3 bg-gray-100 rounded-2xl text-sm text-black" 
                                placeholder="Confirm password"
                                required />
                        </div>
                    </form>

                    <div className="flex justify-center w-full max-w-md mt-2">
                        <button 
                            type="submit"
                            className={`px-4 py-2 hover:bg-green-950 bg-green-700 text-white text-center mb-8 w-3/4 ${inter.className}`}
                            >
                                SIGN UP
                            </button>
                    </div>

                    <div className="text-black text-center text-xs">
                            <p>ALREADY REGISTERED?</p>
                            <a href="/" className="text-green-700 font-semibold underline hover:text-green-950">
                                LOG IN HERE
                    </a>
                    </div>
                </div>
            </div>
        </div>
    );
}