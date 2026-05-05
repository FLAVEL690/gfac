import { motion } from 'motion/react';
import { Wifi, Tv, Wind, Briefcase, Bath, Coffee, Calendar, Users, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Rooms() {
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1 personne'
  });

  const rooms = [
    {
      id: "classique",
      title: "Chambre Classique",
      description: "Un espace moderne et fonctionnel, idéal pour les voyageurs d'affaires individuels cherchant le confort après une journée de travail.",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80",
      amenities: [
        { icon: Wind, label: "Climatisation" },
        { icon: Briefcase, label: "Bureau de travail" },
        { icon: Wifi, label: "Wi-Fi Haut Débit" },
        { icon: Tv, label: "TV Écran Plat" }
      ],
      price: "115.000",
    },
    {
      id: "executive",
      title: "Chambre Exécutive",
      description: "Plus spacieuse avec vue dégagée, offrant un coin salon pour se détendre ou préparer des réunions en toute confidentialité.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80",
      amenities: [
        { icon: Wind, label: "Climatisation" },
        { icon: Briefcase, label: "Espace Travail" },
        { icon: Coffee, label: "Mini-bar" },
        { icon: Bath, label: "Salle de bain privée" }
      ],
      price: "165.000",
      featured: true
    },
    {
      id: "suite",
      title: "Suite Affaires GFAC",
      description: "Le summum du luxe avec salon indépendant. Parfait pour les longs séjours et les cadres dirigeants nécessitant prestige et discrétion.",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80",
      amenities: [
        { icon: Briefcase, label: "Salon indépendant" },
        { icon: Bath, label: "Baignoire de luxe" },
        { icon: Coffee, label: "Machine Espresso" },
        { icon: Tv, label: "Smart TV 4K" }
      ],
      price: "250.000",
    }
  ];

  const handleBookingSubmit = (e: React.FormEvent, roomTitle?: string) => {
    e.preventDefault();
    const msg = `*Demande de Réservation GFAC Hôtel*
---------------------------
${roomTitle ? `*Hébergement:* ${roomTitle}` : '*Demande:* Disponibilité générale'}
*Arrivée:* ${bookingData.checkIn || 'Non spécifié'}
*Départ:* ${bookingData.checkOut || 'Non spécifié'}
*Voyageurs:* ${bookingData.guests}
---------------------------
_Souhaiterais recevoir un devis_`;

    const whatsappUrl = `https://wa.me/237674494339?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="chambres" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold text-gold-600 tracking-[0.4em] uppercase mb-4 block font-sans">
              Hébergement d'Exception
            </span>
            <h2 className="text-4xl md:text-6xl font-display text-luxury-blue mb-8">
              Allocation de Chambres
            </h2>
            <div className="w-12 h-0.5 bg-gold-400 mx-auto mb-8"></div>
            <p className="text-gray-500 max-w-2xl mx-auto font-light font-sans">
              Découvrez nos espaces conçus pour allier productivité et relaxation absolue, équipés des dernières technologies pour les professionnels exigeants.
            </p>
          </motion.div>
        </div>

        {/* Luxury Booking Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-luxury-blue p-8 shadow-2xl mb-24 flex flex-col md:flex-row gap-8 items-end relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/5 blur-3xl rounded-full translate-x-20 -translate-y-20"></div>
          
          <div className="flex-1 w-full relative z-10">
            <label className="flex items-center gap-2 text-[10px] font-black text-gold-500 uppercase tracking-widest mb-3 font-sans">
              <Calendar className="w-3 h-3" /> Arrivée
            </label>
            <input 
              type="date" 
              onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})}
              className="w-full bg-white/5 border border-white/10 p-4 text-white text-sm focus:outline-none focus:border-gold-500 transition-all font-sans" 
            />
          </div>
          <div className="flex-1 w-full relative z-10">
            <label className="flex items-center gap-2 text-[10px] font-black text-gold-500 uppercase tracking-widest mb-3 font-sans">
              <Calendar className="w-3 h-3" /> Départ
            </label>
            <input 
              type="date" 
              onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})}
              className="w-full bg-white/5 border border-white/10 p-4 text-white text-sm focus:outline-none focus:border-gold-500 transition-all font-sans" 
            />
          </div>
          <div className="flex-1 w-full relative z-10">
            <label className="flex items-center gap-2 text-[10px] font-black text-gold-500 uppercase tracking-widest mb-3 font-sans">
              <Users className="w-3 h-3" /> Voyageurs
            </label>
            <select 
              onChange={(e) => setBookingData({...bookingData, guests: e.target.value})}
              className="w-full bg-white/5 border border-white/10 p-4 text-white text-sm focus:outline-none focus:border-gold-500 transition-all font-sans appearance-none"
            >
              <option className="bg-luxury-blue">1 Voyageur</option>
              <option className="bg-luxury-blue">2 Voyageurs</option>
              <option className="bg-luxury-blue">Famille (3+)</option>
            </select>
          </div>
          <button 
            onClick={(e) => handleBookingSubmit(e)}
            className="w-full md:w-auto px-10 py-4 bg-gold-500 text-luxury-blue text-xs font-black tracking-widest uppercase hover:bg-gold-400 transition-all relative z-10 font-sans shadow-xl shadow-gold-500/10"
          >
            VÉRIFIER
          </button>
        </motion.div>

        {/* Room Cards */}
        <div className="grid md:grid-cols-3 gap-12">
          {rooms.map((room, idx) => (
            <motion.div 
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className={`bg-white group border border-gray-100 shadow-xl overflow-hidden flex flex-col hover:-translate-y-2 transition-all duration-500`}
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-luxury-blue/20 group-hover:bg-transparent transition-colors duration-500"></div>
                {room.featured && (
                  <div className="absolute top-6 right-6 bg-gold-500 text-luxury-blue text-[9px] font-black px-4 py-1.5 uppercase tracking-[0.2em] shadow-xl">
                    Plus Populaire
                  </div>
                )}
              </div>
              
              <div className="p-10 flex flex-col flex-grow relative">
                <div className="flex justify-between items-start mb-6">
                  <h4 className="text-2xl font-display font-bold text-luxury-blue leading-tight">{room.title}</h4>
                </div>
                
                <p className="text-gray-500 text-sm font-light font-sans mb-8 leading-relaxed line-clamp-3">
                  {room.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {room.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-400 text-[10px] uppercase tracking-widest font-bold font-sans">
                      <amenity.icon className="w-3.5 h-3.5 text-gold-500" />
                      <span>{amenity.label}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto pt-8 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest block mb-1 font-sans">Dès</span>
                    <div className="text-xl font-bold text-luxury-blue font-sans">{room.price} <span className="text-[10px] text-gold-600">XAF/N</span></div>
                  </div>
                  <button 
                    onClick={(e) => handleBookingSubmit(e, room.title)}
                    className="flex items-center gap-2 text-[10px] font-black text-gold-600 hover:text-luxury-blue uppercase tracking-[0.2em] transition-all group/btn font-sans"
                  >
                    RÉSERVER <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

