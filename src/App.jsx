import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Events from './sections/Events';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            smoothWheel: true,
            wheelMultiplier: 0.8,
            touchMultiplier: 1.5,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Smooth scroll for anchor links
        lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
            // Optional: Add scroll-based animations here
        });

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <main className="bg-black min-h-screen w-full overflow-x-hidden">
            <Navbar />
            <div className="relative">
                <Hero />
                <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>
            </div>
            <div className="relative">
                <Services />
                <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>
            </div>
            <div className="relative">
                <Events />
                <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>
            </div>
            <Contact />
            <Footer />
        </main>
    );
}

export default App;
