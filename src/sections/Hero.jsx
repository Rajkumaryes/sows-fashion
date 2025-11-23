import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const heroImages = [
    {
        id: 1,
        title: 'Mehendi',
        url: 'https://images.unsplash.com/photo-1582997905121-53fc15e6d9b9?w=1920&h=1080&fit=crop&q=95&auto=format',
        alt: 'Traditional Tamil Nadu Mehendi Art - Exquisite Henna Designs on Bridal Hands with Intricate Floral Patterns, Mandala Motifs, and Traditional Tamil Bridal Designs',
        description: 'Exquisite Mehendi artistry celebrating Tamil tradition with intricate patterns and authentic bridal designs.'
    },
    {
        id: 2,
        title: 'Aari Work',
        url: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=1920&h=1080&fit=crop&q=95&auto=format',
        alt: 'Traditional Tamil Nadu Aari Embroidery Work - Handcrafted Zardozi and Intricate Threadwork on Kanchipuram Silk Fabric with Golden Embellishments and Traditional Motifs',
        description: 'Masterful Aari work featuring handcrafted embroidery and zardozi detailing on premium Kanchipuram silk.'
    },
    {
        id: 3,
        title: 'Saree Draping',
        url: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=1920&h=1080&fit=crop&q=95&auto=format',
        alt: 'Elegant Tamil Nadu Saree Draping - Traditional Kanchipuram Silk Saree with Golden Zari Border, Elegant Pallu Styling, and Authentic Tamil Draping Techniques',
        description: 'Elegant saree draping with authentic Tamil styling, featuring Kanchipuram silk and traditional pleating techniques.'
    },
    {
        id: 4,
        title: 'Bridal Makeup',
        url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1920&h=1080&fit=crop&q=95&auto=format',
        alt: 'Traditional Tamil Nadu Bridal Makeover - South Indian Bride with Traditional Gold Jewelry (Temple Jewelry), Kanchipuram Bridal Saree, and Authentic Tamil Bridal Makeup',
        description: 'Complete Tamil bridal makeovers transforming your special day with traditional temple jewelry and authentic South Indian elegance.'
    }
];

const Hero = () => {
    const ref = useRef(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
    const blur = useTransform(scrollYProgress, [0, 1], [0, 10]);

    // Auto-slide carousel with smooth transitions
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 8000); // Change image every 8 seconds for elegant viewing

        return () => clearInterval(interval);
    }, []);

    return (
        <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Premium Sliding Background Carousel with Parallax & Zoom */}
            <motion.div
                style={{ y, scale, filter: `blur(${blur}px)` }}
                className="absolute inset-0 z-0 overflow-hidden"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, scale: 1.08 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ 
                            duration: 3,
                            ease: [0.4, 0, 0.2, 1] // Smooth, elegant cubic-bezier easing
                        }}
                        className="absolute inset-0"
                    >
                        <img
                            src={heroImages[currentImageIndex].url}
                            alt={heroImages[currentImageIndex].alt}
                            className="w-full h-full object-cover"
                            style={{
                                filter: 'brightness(0.45) contrast(1.2) saturate(1.1)',
                                transform: 'scale(1.02)', // Slight scale to prevent edges showing
                                imageRendering: 'high-quality'
                            }}
                            loading="eager"
                            fetchPriority="high"
                            sizes="100vw"
                            srcSet={`
                                ${heroImages[currentImageIndex].url.replace('w=1920', 'w=640')} 640w,
                                ${heroImages[currentImageIndex].url.replace('w=1920', 'w=1280')} 1280w,
                                ${heroImages[currentImageIndex].url.replace('w=1920', 'w=1920')} 1920w
                            `}
                            onError={(e) => {
                                // Fallback to next image if current fails
                                const nextIndex = (currentImageIndex + 1) % heroImages.length;
                                e.target.src = heroImages[nextIndex].url;
                            }}
                        />
                    </motion.div>
                </AnimatePresence>
                
                {/* Elegant Overlay Gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-black/75 z-10"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/15 via-transparent to-transparent z-10"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gold-500/12 via-transparent to-transparent z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-black/15 z-10"></div>
                
                {/* Elegant Carousel Indicators */}
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                    {heroImages.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`h-2.5 rounded-full transition-all duration-700 ease-out ${
                                index === currentImageIndex
                                    ? 'w-10 bg-gold-500 shadow-lg shadow-gold-500/50'
                                    : 'w-2.5 bg-white/30 hover:bg-white/50 hover:w-3'
                            }`}
                            aria-label={`Go to ${image.title} slide`}
                            title={image.title}
                        />
                    ))}
                </div>
            </motion.div>

            <div className="container-custom relative z-20 text-center pt-20">
                <motion.div
                    style={{ opacity }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <motion.div 
                        key={`badge-${currentImageIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8 }}
                        className="inline-block mb-6 px-4 py-1 border border-gold-500/30 rounded-full bg-gold-500/10 backdrop-blur-sm"
                    >
                        <span className="text-gold-500 uppercase tracking-[0.3em] text-xs md:text-sm font-semibold">
                            Tamil Nadu Traditional Artistry
                        </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-10 leading-[1.1] tracking-tight">
                        Sow's <span className="text-gold-500 italic">Fashion</span>
                    </h1>

                    <AnimatePresence mode="wait">
                        <motion.p 
                            key={`description-${currentImageIndex}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-14 leading-relaxed font-light px-4"
                        >
                            {heroImages[currentImageIndex].description}
                        </motion.p>
                    </AnimatePresence>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
                        <a href="#services" className="btn-primary min-w-[200px] flex items-center justify-center gap-2 group hover:scale-105 transition-all duration-300 text-base px-10 py-4">
                            Explore Services
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#contact" className="btn-outline min-w-[200px] hover:scale-105 transition-all duration-300 text-base px-10 py-4">
                            Book Consultation
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                style={{ opacity }}
            >
                <span className="text-gold-500 text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gold-500 to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
