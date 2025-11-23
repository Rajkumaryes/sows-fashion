import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const services = [
    {
        id: 1,
        title: 'Mehendi',
        description: 'Exquisite Tamil bridal Mehendi with intricate traditional patterns, mandala motifs, and authentic South Indian designs that celebrate your special day.',
        image: 'https://images.unsplash.com/photo-1582997905121-53fc15e6d9b9?w=1200&h=900&fit=crop&q=95&auto=format',
    },
    {
        id: 2,
        title: 'Aari Work',
        description: 'Handcrafted Aari embroidery and zardozi work on premium Kanchipuram silk blouses, featuring traditional motifs and golden embellishments.',
        image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=1200&h=900&fit=crop&q=95&auto=format',
    },
    {
        id: 3,
        title: 'Saree Draping',
        description: 'Professional saree draping services with authentic Tamil styling, perfect pleating techniques, and elegant pallu arrangements for Kanchipuram and silk sarees.',
        image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=1200&h=900&fit=crop&q=95&auto=format',
    },
    {
        id: 4,
        title: 'Bridal Makeup',
        description: 'Complete Tamil bridal makeover with traditional temple jewelry styling, authentic South Indian makeup, and long-lasting radiance for your special occasion.',
        image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1200&h=900&fit=crop&q=95&auto=format',
    }
];

const ServiceCard = ({ service, index }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

    return (
        <motion.div
            ref={ref}
            style={{ y, opacity, scale }}
            className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-2xl shadow-black/50"
        >
            <div className="aspect-[4/3] overflow-hidden">
                <img
                    src={service.image}
                    alt={`${service.title} - Traditional Tamil Nadu ${service.title} Service`}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                    fetchPriority="high"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ imageRendering: 'high-quality' }}
                    onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%231a1a1a" width="800" height="600"/%3E%3Ctext fill="%23C5A059" x="50%25" y="50%25" text-anchor="middle" dy=".3em" font-family="serif" font-size="32"%3E' + service.title + '%3C/text%3E%3C/svg%3E';
                    }}
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-95 transition-opacity duration-300 group-hover:opacity-100"></div>

            <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 group-hover:text-gold-500 transition-colors duration-300">
                    {service.title}
                </h3>
                <p className="text-gray-300 mb-6 text-base md:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">
                    {service.description}
                </p>
                <div className="flex items-center gap-2 text-gold-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 text-lg">
                    <span>Learn More</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </motion.div>
    );
};

const Services = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.2, 0.6, 0.6, 0.2]);

    return (
        <section ref={sectionRef} id="services" className="section-padding bg-gradient-to-br from-gray-950 via-black to-gray-950 relative overflow-hidden">
            {/* Premium Elegant Background */}
            <motion.div 
                style={{ y: backgroundY, opacity: backgroundOpacity }}
                className="absolute inset-0 z-0"
            >
                {/* Premium Elegant Background Image - Bridal & Fashion Services Theme */}
                <img
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1920&h=1080&fit=crop&q=80&auto=format"
                    alt="Elegant Bridal Fashion Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-35"
                    style={{
                        filter: 'grayscale(40%) brightness(0.25) contrast(1.1)'
                    }}
                    loading="lazy"
                />
                
                {/* Elegant Mesh Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-black/85"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/18 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gold-500/15 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-black/15"></div>
                
                {/* Premium Texture Pattern */}
                <div 
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.66 0h2v20h-2V0zM60 0h2v20h-2V0zm25.66 0h2v20h-2V0zM111 0h2v20h-2V0zM9 25.66h2v20H9v-20zm25.66 0h2v20h-2v-20zM60 25.66h2v20h-2v-20zm25.66 0h2v20h-2v-20zM111 25.66h2v20h-2v-20zM9 51.32h2v20H9v-20zm25.66 0h2v20h-2v-20zM60 51.32h2v20h-2v-20zm25.66 0h2v20h-2v-20zM111 51.32h2v20h-2v-20zM9 77h2v20H9V77zm25.66 0h2v20h-2V77zM60 77h2v20h-2V77zm25.66 0h2v20h-2V77zM111 77h2v20h-2V77zM9 102.66h2v20H9v-20zm25.66 0h2v20h-2v-20zM60 102.66h2v20h-2v-20zm25.66 0h2v20h-2v-20zM111 102.66h2v20h-2v-20z' fill='%23C5A059' fill-opacity='1'/%3E%3C/svg%3E")`,
                        backgroundSize: '120px 120px'
                    }}
                ></div>
                
                {/* Animated Light Orbs */}
                <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gold-500/8 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gold-500/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </motion.div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold mb-4 block">Traditional Tamil Nadu Artistry</span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight">Our Premium Services</h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;
