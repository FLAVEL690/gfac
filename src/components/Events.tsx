import { motion } from 'motion/react';
import { Presentation, Users, Mic, Laptop, Send } from 'lucide-react';

export default function Events() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const company = formData.get('company');
    const type = formData.get('type');
    const date = formData.get('date');
    const guests = formData.get('guests');
    const details = formData.get('details');
    
    const msg = `*Demande de Devis Événement GFAC*
---------------------------
*Nom:* ${name}
*Société:* ${company}
*Type:* ${type}
*Date:* ${date}
*Invités:* ${guests}
*Détails:* ${details}
---------------------------
_Envoyé depuis le site web_`;

    const whatsappUrl = `https://wa.me/237674494339?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="evenements" className="py-32 bg-luxury-blue text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/luxury.png')]"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-xs font-bold text-gold-500 tracking-[0.4em] uppercase mb-4 block font-sans">
              Espaces de Conférence
            </span>
            <h2 className="text-4xl md:text-6xl font-display text-white mb-8">
              L'Élite des Affaires
            </h2>
            <div className="w-12 h-0.5 bg-gold-400 mb-10"></div>
            
            <p className="text-gray-400 mb-12 text-sm font-light leading-relaxed font-sans">
              Le succès de vos séminaires et conférences repose sur un environnement d'exception. Nos salles modulables sont équipées des dernières technologies audiovisuelles pour une productivité maximale.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="border border-white/10 p-6 group hover:border-gold-500/50 transition-all duration-500 bg-white/5">
                <Users className="w-6 h-6 text-gold-500 mb-4" />
                <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-2">Modularité</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-sans">10 à 150 personnes.</p>
              </div>
              <div className="border border-white/10 p-6 group hover:border-gold-500/50 transition-all duration-500 bg-white/5">
                <Mic className="w-6 h-6 text-gold-500 mb-4" />
                <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-2">Technologie</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-sans">A/V Haute Définition.</p>
              </div>
              <div className="border border-white/10 p-6 group hover:border-gold-500/50 transition-all duration-500 bg-white/5">
                <Laptop className="w-6 h-6 text-gold-500 mb-4" />
                <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-2">Connectivité</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-sans">Fibre Optique Dédiée.</p>
              </div>
              <div className="border border-white/10 p-6 group hover:border-gold-500/50 transition-all duration-500 bg-white/5">
                <Presentation className="w-6 h-6 text-gold-500 mb-4" />
                <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-2">Service VIP</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-sans">Assistance Dédiée.</p>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-white p-12 shadow-2xl relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gold-500"></div>
            
            <h3 className="text-2xl font-display font-bold text-luxury-blue mb-2">Demander un Devis</h3>
            <p className="text-gray-400 mb-10 text-[10px] font-black tracking-widest uppercase font-sans">Réponse garantie sous 24 heures</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="relative group/input">
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 font-sans group-focus-within/input:text-gold-600 transition-colors">Nom Complet</label>
                  <input name="name" required type="text" className="w-full border-b border-gray-100 py-2 bg-transparent focus:outline-none focus:border-gold-500 text-sm font-light text-luxury-blue font-sans" placeholder="Votre nom..." />
                </div>
                <div className="relative group/input">
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 font-sans group-focus-within/input:text-gold-600 transition-colors">Société</label>
                  <input name="company" type="text" className="w-full border-b border-gray-100 py-2 bg-transparent focus:outline-none focus:border-gold-500 text-sm font-light text-luxury-blue font-sans" placeholder="Nom de l'entreprise..." />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="relative group/input">
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 font-sans group-focus-within/input:text-gold-600 transition-colors">Type d'Événement</label>
                  <select name="type" className="w-full border-b border-gray-100 py-2 bg-transparent focus:outline-none focus:border-gold-500 text-sm font-light text-luxury-blue font-sans appearance-none">
                    <option>Séminaire / Réunion</option>
                    <option>Conférence de presse</option>
                    <option>Formation</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div className="relative group/input">
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 font-sans group-focus-within/input:text-gold-600 transition-colors">Date Prévue</label>
                  <input name="date" required type="date" className="w-full border-b border-gray-100 py-2 bg-transparent focus:outline-none focus:border-gold-500 text-sm font-light text-luxury-blue font-sans" />
                </div>
              </div>

              <div className="relative group/input">
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 font-sans group-focus-within/input:text-gold-600 transition-colors">Nombre d'Invités</label>
                <input name="guests" type="number" min="1" className="w-full border-b border-gray-100 py-2 bg-transparent focus:outline-none focus:border-gold-500 text-sm font-light text-luxury-blue font-sans" placeholder="Ex: 50" />
              </div>

              <div className="relative group/input">
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 font-sans group-focus-within/input:text-gold-600 transition-colors">Détails Particuliers</label>
                <textarea name="details" rows={3} className="w-full border-b border-gray-100 py-2 bg-transparent focus:outline-none focus:border-gold-500 text-sm font-light text-luxury-blue resize-none font-sans" placeholder="Vos besoins spécifiques..."></textarea>
              </div>

              <button type="submit" className="w-full py-5 bg-gold-500 text-luxury-blue text-[10px] font-black tracking-[0.3em] uppercase hover:bg-luxury-blue hover:text-gold-400 transition-all duration-500 shadow-xl shadow-gold-500/10 flex items-center justify-center gap-4 group font-sans">
                ENVOYER LA DEMANDE <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

