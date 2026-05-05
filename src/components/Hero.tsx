import { motion } from 'motion/react';
import { Wifi, Car, Coffee, Shield, Presentation, MapPin, ChevronDown } from 'lucide-react';

export default function Hero() {
  const features = [
    { icon: Presentation, text: "Salles de Conférence" },
    { icon: Car, text: "Navette V.I.P." },
    { icon: Wifi, text: "Uplink Gigabit" },
    { icon: Coffee, text: "Gastronomie" },
    { icon: Shield, text: "Périmètre Sécurisé" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Elegant Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Hotel Exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-blue/70 via-luxury-blue/40 to-luxury-blue/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 backdrop-blur-md text-gold-200 border border-gold-500/30 text-[10px] font-black tracking-[0.3em] uppercase mb-8">
            <MapPin className="w-3.5 h-3.5" /> Yaoundé, Cameroun
          </span>
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display text-white tracking-tight mb-8 leading-[1.1]">
            <span className="text-gold-400 italic font-medium block mb-2">GFAC Hôtel</span>
            L'Excellence au Service de Vos Affaires
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Votre partenaire stratégique pour des séjours d'affaires d'exception au cœur de Yaoundé. Confort absolu et services V.I.P.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <a
              href="#contact"
              className="px-10 py-4 bg-gold-500 text-luxury-blue font-black text-xs tracking-[0.2em] uppercase hover:bg-gold-400 transition-all active:scale-95 shadow-xl shadow-gold-500/10"
            >
              RÉSERVER VOTRE SÉJOUR
            </a>
            <a
              href="#evenements"
              className="px-10 py-4 border border-gold-500/50 text-gold-400 font-black text-xs tracking-[0.2em] uppercase hover:bg-gold-500/10 transition-all active:scale-95"
            >
              ORGANISER UN ÉVÉNEMENT
            </a>
          </div>
        </motion.div>

        {/* Refined Features Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-5xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 text-white group"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-gold-500/30 bg-white/5 text-gold-400 group-hover:bg-gold-500 group-hover:text-luxury-blue transition-all duration-500">
                  <feature.icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black tracking-widest uppercase text-gray-400 group-hover:text-gold-200 transition-colors">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-[10px] font-black text-gold-500/50 uppercase tracking-[0.3em] rotate-90 origin-left translate-x-2">SCROLL</span>
          <div className="w-px h-16 bg-gradient-to-b from-gold-500/0 via-gold-500 to-gold-500/0 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
}

