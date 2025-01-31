import Image from "next/image";

export default function Login() {
    return (
        <div className="flex min-h-screen items-start">
            {/* Left Column - Image */}
            <div className="w-1/2">
                <Image 
                    src="/login.jpg" 
                    alt="Medicine" 
                    width={750} 
                    height={720} 
                    className="object-cover"
                />
            </div>

            {/* Right Column - Login Form */}
            <div className="w-1/2 p-8">
                <div className="max-w-md mx-auto mt-8">
                    <h1 className="text-3xl font-bold mb-2">MEDICARE</h1>
                    <h2 className="text-xl mb-6">Login</h2>

                    <form className="space-y-4">
                        <div>
                            <label className="block mb-2">Email Address: </label>
                            <input
                                type="email"
                                className="w-full p-3 border rounded-md"
                                placeholder="Enter your email" 
                            />
                        </div>
                        
                        <div>
                            <label className="block mb-2">Password: </label>
                            <input 
                                type="password"
                                className="w-full p-3 border rounded-md"
                                placeholder="Enter your password"
                            />
                        </div>

                        <button 
                            type="submit"
                            className="w-full p-3 bg-green-700 text-white rounded-md hover:bg-green-800"
                        >
                            Sign In
                        </button>

                        <p className="text-center mt-4 text-sm">
                            Don't have an account? {' '} 
                            <a href="/signup" className="text-blue-600 underline">
                                Sign up now!
                            </a>     
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
