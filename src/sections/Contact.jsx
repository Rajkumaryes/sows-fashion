import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, Mail, Instagram, Facebook, MapPin, Send, Clock, Calendar } from 'lucide-react';
import { useRef } from 'react';

const Contact = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 0.8, 0.8, 0.4]);

    return (
        <section ref={ref} id="contact" className="section-padding bg-gradient-to-br from-black via-gray-950 to-black relative border-t border-gold-500/10 overflow-hidden">
            {/* Premium Elegant Background */}
            <motion.div 
                style={{ y: backgroundY, opacity: backgroundOpacity }}
                className="absolute inset-0 z-0"
            >
                {/* Premium Elegant Background Image - Luxury Studio & Contact Theme */}
                <img
                    src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&h=1080&fit=crop&q=80&auto=format"
                    alt="Elegant Luxury Studio Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-28"
                    style={{
                        filter: 'grayscale(45%) brightness(0.22) contrast(1.15)'
                    }}
                    loading="lazy"
                />
                
                {/* Elegant Mesh Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/85"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/55"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/12 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10"></div>
                
                {/* Premium Pattern */}
                <div 
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C5A059' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10zm10 0c0-8.284-6.716-15-15-15s-15 6.716-15 15 6.716 15 15 15 15-6.716 15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '100px 100px'
                    }}
                ></div>
                
                {/* Animated Light Orbs */}
                <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-gold-500/6 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/3 w-[550px] h-[550px] bg-gold-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.8s' }}></div>
            </motion.div>
            {/* Contact Cards Section */}
            <div className="container-custom relative z-10 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold mb-4 block">Contact Information</span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight">Get in Touch</h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-24">
                    {/* Phone Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-md p-8 rounded-2xl border border-gray-800 hover:border-gold-500/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-gold-500/10"
                    >
                        <div className="bg-gold-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-500/20 transition-colors duration-500">
                            <Phone className="text-gold-500" size={28} />
                        </div>
                        <h3 className="text-white font-serif text-xl mb-3">Phone</h3>
                        <p className="text-gray-400 text-sm mb-4">Call us anytime</p>
                        <a href="tel:+919876543210" className="text-gold-500 font-medium hover:text-gold-400 transition-colors">
                            +91 98765 43210
                        </a>
                    </motion.div>

                    {/* Email Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-md p-8 rounded-2xl border border-gray-800 hover:border-gold-500/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-gold-500/10"
                    >
                        <div className="bg-gold-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-500/20 transition-colors duration-500">
                            <Mail className="text-gold-500" size={28} />
                        </div>
                        <h3 className="text-white font-serif text-xl mb-3">Email</h3>
                        <p className="text-gray-400 text-sm mb-4">Send us a message</p>
                        <a href="mailto:hello@sowsfashion.com" className="text-gold-500 font-medium hover:text-gold-400 transition-colors break-all">
                            hello@sowsfashion.com
                        </a>
                    </motion.div>

                    {/* Location Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-md p-8 rounded-2xl border border-gray-800 hover:border-gold-500/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-gold-500/10"
                    >
                        <div className="bg-gold-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-500/20 transition-colors duration-500">
                            <MapPin className="text-gold-500" size={28} />
                        </div>
                        <h3 className="text-white font-serif text-xl mb-3">Location</h3>
                        <p className="text-gray-400 text-sm mb-4">Visit our studio</p>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            123 Fashion Street,<br />T. Nagar, Chennai
                        </p>
                    </motion.div>

                    {/* Hours Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-md p-8 rounded-2xl border border-gray-800 hover:border-gold-500/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-gold-500/10"
                    >
                        <div className="bg-gold-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-500/20 transition-colors duration-500">
                            <Clock className="text-gold-500" size={28} />
                        </div>
                        <h3 className="text-white font-serif text-xl mb-3">Hours</h3>
                        <p className="text-gray-400 text-sm mb-4">We're open</p>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Mon - Sat: 9AM - 8PM<br />Sunday: By Appointment
                        </p>
                    </motion.div>
                </div>
            </div>
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-500/5 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container-custom relative z-10 mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold mb-3 block">Get in Touch</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8 leading-tight">
                            Let's Create <span className="text-gold-500 italic">Magic</span> Together
                        </h2>
                        <p className="text-gray-300 text-lg mb-12 leading-relaxed max-w-md font-light">
                            Ready to enhance your beauty with our traditional artistry?
                            Reach out to us for bookings, inquiries, or just to say hello.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="bg-gray-900/60 p-4 rounded-2xl group-hover:bg-gold-500 group-hover:text-black transition-all duration-500 border border-gray-800/50 group-hover:border-gold-500 shadow-lg shadow-black/50 group-hover:shadow-gold-500/20">
                                    <Phone size={24} className="text-gold-500 group-hover:text-black transition-colors duration-500" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs mb-1 uppercase tracking-wider font-medium">Phone</p>
                                    <a href="tel:+919876543210" className="text-white text-xl font-serif hover:text-gold-500 transition-colors duration-300">
                                        +91 98765 43210
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="bg-gray-900/60 p-4 rounded-2xl group-hover:bg-gold-500 group-hover:text-black transition-all duration-500 border border-gray-800/50 group-hover:border-gold-500 shadow-lg shadow-black/50 group-hover:shadow-gold-500/20">
                                    <Mail size={24} className="text-gold-500 group-hover:text-black transition-colors duration-500" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs mb-1 uppercase tracking-wider font-medium">Email</p>
                                    <a href="mailto:hello@sowsfashion.com" className="text-white text-xl font-serif hover:text-gold-500 transition-colors duration-300">
                                        hello@sowsfashion.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="bg-gray-900/60 p-4 rounded-2xl group-hover:bg-gold-500 group-hover:text-black transition-all duration-500 border border-gray-800/50 group-hover:border-gold-500 shadow-lg shadow-black/50 group-hover:shadow-gold-500/20">
                                    <MapPin size={24} className="text-gold-500 group-hover:text-black transition-colors duration-500" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs mb-1 uppercase tracking-wider font-medium">Studio</p>
                                    <p className="text-white text-lg font-serif leading-relaxed">
                                        123 Fashion Street, T. Nagar,<br />
                                        Chennai, Tamil Nadu 600017
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-12 border-t border-gray-800/50">
                            <h4 className="text-white font-medium mb-6 text-sm uppercase tracking-wider">Follow Our Journey</h4>
                            <div className="flex gap-4">
                                <a href="#" className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all duration-300 transform hover:scale-110">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all duration-300 transform hover:scale-110">
                                    <Facebook size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-gray-800/50 shadow-2xl relative overflow-hidden hover:border-gold-500/30 transition-all duration-500"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                        <h3 className="text-2xl font-serif font-bold text-white mb-8">Send us a Message</h3>

                        <form className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-gray-400 text-xs font-medium ml-1 uppercase tracking-wider">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-black/50 border border-gray-700/50 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-300 placeholder-gray-500"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-gray-400 text-xs font-medium ml-1 uppercase tracking-wider">Phone</label>
                                    <input
                                        type="tel"
                                        className="w-full bg-black/50 border border-gray-700/50 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-300 placeholder-gray-500"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-400 text-xs font-medium ml-1 uppercase tracking-wider">Service</label>
                                <select className="w-full bg-black/50 border border-gray-700/50 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-300 appearance-none cursor-pointer">
                                    <option>Mehendi Art</option>
                                    <option>Aari Work</option>
                                    <option>Saree Draping</option>
                                    <option>Bridal Makeup</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-400 text-xs font-medium ml-1 uppercase tracking-wider">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-black/50 border border-gray-700/50 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-300 placeholder-gray-500 resize-none"
                                    placeholder="Tell us about your event date and requirements..."
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 group transform active:scale-95 transition-all duration-300">
                                <span>Send Message</span>
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
