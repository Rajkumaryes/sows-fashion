import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-black to-gray-950 py-12 border-t border-gray-900/50">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <a href="#" className="text-2xl font-serif font-bold text-gold-500 block mb-2">
                            Sow's Fashion
                        </a>
                        <p className="text-gray-500 text-sm">
                            Enhancing beauty with tradition and elegance.
                        </p>
                    </div>

                    <div className="flex gap-8 text-sm text-gray-400">
                        <a href="#home" className="hover:text-gold-400 transition-colors">Home</a>
                        <a href="#services" className="hover:text-gold-400 transition-colors">Services</a>
                        <a href="#events" className="hover:text-gold-400 transition-colors">Events</a>
                        <a href="#contact" className="hover:text-gold-400 transition-colors">Contact</a>
                    </div>

                    <div className="text-gray-500 text-sm flex items-center gap-1">
                        Made with <Heart size={14} className="text-rose-500 fill-rose-500" /> by Sow's Fashion
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-900 text-center text-gray-600 text-xs">
                    &copy; {new Date().getFullYear()} Sow's Fashion. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
