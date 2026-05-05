import { motion } from 'motion/react';
import { Coffee, UtensilsCrossed, Wine, Download } from 'lucide-react';

export default function Dining() {
  return (
    <section id="restauration" className="py-32 bg-white relative overflow-hidden">
      {/* Subtle Background elements */}
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gold-50/30 -skew-x-12 -translate-x-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-6 relative order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <div className="relative group overflow-hidden border border-gray-100 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80" 
                  alt="Restaurant GFAC" 
                  className="w-full h-80 object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-luxury-blue/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="relative group overflow-hidden border border-gray-100 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80" 
                  alt="Cocktail Bar" 
                  className="w-full h-60 object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-luxury-blue/10 group-hover:bg-transparent transition-colors"></div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              className="pt-12 space-y-6"
            >
              <div className="relative group overflow-hidden border border-gray-100 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?auto=format&fit=crop&q=80" 
                  alt="Petit déjeuner continental" 
                  className="w-full h-60 object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-luxury-blue/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="relative group overflow-hidden border border-gray-100 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80" 
                  alt="Gastronomie" 
                  className="w-full h-80 object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-luxury-blue/10 group-hover:bg-transparent transition-colors"></div>
              </div>
            </motion.div>
          </div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:pl-10 order-1 lg:order-2"
          >
            <span className="text-xs font-bold text-gold-600 tracking-[0.4em] uppercase mb-4 block font-sans">
              Gastronomie & Art de Vivre
            </span>
            <h2 className="text-4xl md:text-6xl font-display text-luxury-blue mb-8">
              L'Expérience Culinaire
            </h2>
            <div className="w-12 h-0.5 bg-gold-400 mb-10"></div>
            
            <p className="text-gray-500 font-light font-sans mb-12 leading-relaxed">
              De l'aube au crépuscule, savourez une cuisine d'exception qui fusionne les saveurs locales authentiques avec le raffinement de la gastronomie internationale.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 border border-gold-500/30 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-luxury-blue transition-all duration-500 shadow-lg shadow-gold-500/5">
                  <Coffee className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-luxury-blue uppercase tracking-widest mb-2 font-sans">Petit-Déjeuner Royal</h4>
                  <p className="text-gray-400 text-[10px] tracking-widest uppercase font-sans">Buffet continental et saveurs du terroir. Dès 06:30.</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 border border-gold-500/30 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-luxury-blue transition-all duration-500 shadow-lg shadow-gold-500/5">
                  <UtensilsCrossed className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-luxury-blue uppercase tracking-widest mb-2 font-sans">Restaurant Gastronomique</h4>
                  <p className="text-gray-400 text-[10px] tracking-widest uppercase font-sans">Une carte signée pour vos déjeuners et dîners d'affaires.</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 border border-gold-500/30 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-luxury-blue transition-all duration-500 shadow-lg shadow-gold-500/5">
                  <Wine className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-luxury-blue uppercase tracking-widest mb-2 font-sans">Bar Lounge VIP</h4>
                  <p className="text-gray-400 text-[10px] tracking-widest uppercase font-sans">Espace feutré pour vos moments de détente et networking.</p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <button className="flex items-center gap-4 px-10 py-5 bg-luxury-blue text-gold-400 text-[10px] font-black tracking-[0.2em] uppercase hover:bg-gold-500 hover:text-luxury-blue transition-all duration-500 shadow-2xl font-sans group">
                CONSULTER LA CARTE <Download className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

