import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    const whatsappMessage = `*Nouvelle Demande GFAC Hôtel*
---------------------------
*Nom:* ${name}
*Téléphone:* ${phone}
*Sujet:* ${subject}
*Message:* ${message}
---------------------------
_Envoyé depuis le site web_`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/237674494339?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/luxury.png')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold text-gold-600 tracking-[0.4em] uppercase mb-4 block font-sans">
              Contact & Réservations
            </span>
            <h2 className="text-4xl md:text-6xl font-display text-luxury-blue mb-8">
              Localisation & Accès
            </h2>
            <div className="w-12 h-0.5 bg-gold-400 mx-auto"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="bg-luxury-blue p-12 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 blur-2xl rounded-full translate-x-10 -translate-y-10"></div>
              
              <h3 className="text-2xl font-display font-bold text-white mb-10">Informations Pratiques</h3>
              <ul className="space-y-8">
                <li className="flex items-start gap-6">
                  <div className="w-12 h-12 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gold-500 mb-2 font-sans">Adresse</h4>
                    <p className="text-sm text-gray-300 leading-relaxed font-light font-sans">
                      Boulevard de la Réunification (Rue 3702)<br/>
                      Quartier Melen / Ngola Ekele<br/>
                      Yaoundé, Cameroun
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-6">
                  <div className="w-12 h-12 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gold-500 mb-2 font-sans">Téléphone</h4>
                    <p className="text-sm text-gray-300 font-light font-sans">+237 6 74 49 43 39</p>
                  </div>
                </li>
                <li className="flex items-start gap-6">
                  <div className="w-12 h-12 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gold-500 mb-2 font-sans">Email</h4>
                    <p className="text-sm text-gray-300 font-light font-sans">contact@hotelgfac.com</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <h4 className="font-display font-bold text-xl text-luxury-blue mb-4">Transfert Aéroport</h4>
              <p className="text-sm text-gray-500 leading-relaxed font-sans font-light">
                Un service de navette VIP est à votre disposition. Veuillez nous communiquer vos détails de vol au moins 24h à l'avance pour une prise en charge optimale.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-12 shadow-2xl border border-gray-100 h-full flex flex-col group">
              <h3 className="text-2xl font-display font-bold text-luxury-blue mb-10">Envoyez-nous un Message</h3>
              
              <div className="space-y-8 flex-grow">
                <div className="relative group/input">
                  <label htmlFor="name" className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3 group-focus-within/input:text-gold-600 transition-colors font-sans">
                    Nom Complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-transparent border-b border-gray-200 py-3 text-sm font-light focus:outline-none focus:border-gold-500 transition-all placeholder:text-gray-200 font-sans"
                    placeholder="Votre nom..."
                  />
                </div>
                
                <div className="relative group/input">
                  <label htmlFor="phone" className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3 group-focus-within/input:text-gold-600 transition-colors font-sans">
                    Numéro de Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full bg-transparent border-b border-gray-200 py-3 text-sm font-light focus:outline-none focus:border-gold-500 transition-all placeholder:text-gray-200 font-sans"
                    placeholder="6xx xxx xxx"
                  />
                </div>

                <div className="relative group/input">
                  <label htmlFor="subject" className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3 group-focus-within/input:text-gold-600 transition-colors font-sans">
                    Sujet
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full bg-transparent border-b border-gray-200 py-3 text-sm font-light focus:outline-none focus:border-gold-500 transition-all font-sans"
                  >
                    <option value="reservation">Réservation de chambre</option>
                    <option value="evenement">Organisation d'événement</option>
                    <option value="navette">Service navette</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>
                
                <div className="relative group/input">
                  <label htmlFor="message" className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3 group-focus-within/input:text-gold-600 transition-colors font-sans">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full bg-transparent border-b border-gray-200 py-3 text-sm font-light focus:outline-none focus:border-gold-500 transition-all placeholder:text-gray-200 resize-none font-sans"
                    placeholder="Votre message..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="mt-12 w-full py-5 bg-gold-500 text-luxury-blue text-xs font-black uppercase tracking-[0.3em] hover:bg-luxury-blue hover:text-gold-400 transition-all duration-500 flex items-center justify-center gap-4 group/btn shadow-xl shadow-gold-500/10 font-sans"
              >
                Envoyer via WhatsApp
                <Send className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

