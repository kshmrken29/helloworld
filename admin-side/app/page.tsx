import { Playfair_Display } from 'next/font/google';
import Layout from '@/components/layout/Layout';
import Logo from '@/components/common/Logo';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Login() {
    return (
        <Layout imageSrc="/login.jpg" imageAlt="Login Image">
            <Logo />
            <h2 className={`text-black text-2xl text-center mb-8 ${playfair.className}`}>LOGIN</h2>
            
            <form className="space-y-6">
                <Input
                    type="email"
                    label="Email Address"
                    placeholder="Enter your email"
                />
                <Input
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
                />
                
                <div className="flex justify-center">
                    <Button type="submit">SIGN IN</Button>
                </div>

                <div className="text-black text-center text-xs">
                    <p>DON'T HAVE AN ACCOUNT?</p>
                    <a href="/signup" className="text-green-700 font-semibold underline hover:text-green-950">
                        SIGN UP NOW
                    </a>
                </div>
            </form>
        </Layout>
    );
}
