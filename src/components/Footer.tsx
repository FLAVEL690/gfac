import { Sun } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-luxury-blue text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20 border-b border-white/5 pb-20">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" className="flex items-center gap-4 group mb-8">
              <div className="relative">
                <Sun className="h-8 w-8 text-gold-400 transition-transform duration-700 group-hover:rotate-180" />
                <div className="absolute inset-0 blur-sm bg-gold-400/20"></div>
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="font-display font-bold text-3xl text-white tracking-wider">GFAC</span>
                <span className="text-xs font-bold text-gold-500 uppercase tracking-[0.3em] ml-0.5">HÔTEL</span>
              </div>
            </a>
            <p className="text-gray-400 max-w-sm text-sm font-light leading-relaxed font-sans">
              Votre adresse de prestige pour des séjours d'affaires d'exception à Yaoundé. Excellence, discrétion et confort absolu.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6 font-sans">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold-500">Navigation</h4>
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-500">
              <a href="#" className="hover:text-gold-500 transition-colors">Accueil</a>
              <a href="#chambres" className="hover:text-gold-500 transition-colors">Chambres</a>
              <a href="#evenements" className="hover:text-gold-500 transition-colors">Événements</a>
              <a href="#contact" className="hover:text-gold-500 transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 font-sans">
          <p>&copy; {new Date().getFullYear()} GFAC HÔTEL. TOUS DROITS RÉSERVÉS.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold-500 transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

