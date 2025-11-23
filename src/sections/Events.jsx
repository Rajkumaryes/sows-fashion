import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

const highlights = [
    {
        id: 1,
        title: 'Bridal Artistry',
        category: 'Showcase',
        image: 'https://images.unsplash.com/photo-1606800053802-4c6e5c0b0b5c?w=800&h=600&fit=crop&q=80&auto=format',
    },
    {
        id: 2,
        title: 'Masterclass Series',
        category: 'Education',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80&auto=format',
    },
    {
        id: 3,
        title: 'Fashion Week',
        category: 'Runway',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&q=80&auto=format',
    },
    {
        id: 4,
        title: 'Studio Launch',
        category: 'Event',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&q=80&auto=format',
    }
];

const Events = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

    return (
        <section ref={ref} id="events" className="section-padding bg-gradient-to-br from-black via-gray-950 to-black relative overflow-hidden">
            {/* Premium Elegant Background with Scroll Effect */}
            <motion.div 
                style={{ y: backgroundY, opacity }}
                className="absolute inset-0 z-0"
            >
                {/* Premium Elegant Background Image - Events & Gallery Theme */}
                <img
                    src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&h=1080&fit=crop&q=80&auto=format"
                    alt="Elegant Fashion Events Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                    style={{
                        filter: 'grayscale(50%) brightness(0.2) contrast(1.2)'
                    }}
                    loading="lazy"
                />
                
                {/* Elegant Mesh Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gold-500/15 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gold-500/12 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/12 via-transparent to-black/12"></div>
                
                {/* Premium Pattern Overlay */}
                <div 
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C5A059' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '80px 80px'
                    }}
                ></div>
                
                {/* Animated Light Orbs */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold-500/8 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-gold-500/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.2s' }}></div>
            </motion.div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6"
                >
                    <div>
                        <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold mb-4 block">Moments</span>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">Gallery & Highlights</h2>
                    </div>
                    <div className="w-full md:w-auto">
                        <button className="text-white border-b-2 border-gold-500 pb-2 hover:text-gold-500 transition-all duration-300 flex items-center gap-2 text-base font-medium">
                            View All Moments <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-[600px] md:h-[550px]">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="relative group overflow-hidden rounded-2xl cursor-pointer flex-1 h-full shadow-xl shadow-black/50"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                loading="lazy"
                                onError={(e) => {
                                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%231a1a1a" width="800" height="600"/%3E%3Ctext fill="%23C5A059" x="50%25" y="50%25" text-anchor="middle" dy=".3em" font-family="serif" font-size="24"%3E' + item.title + '%3C/text%3E%3C/svg%3E';
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-95 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-gold-500 text-xs uppercase tracking-wider font-bold mb-1 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {item.category}
                                </span>
                                <h3 className="text-xl font-serif font-bold text-white group-hover:text-gold-500 transition-colors">
                                    {item.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
