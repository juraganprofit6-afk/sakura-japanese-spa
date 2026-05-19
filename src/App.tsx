import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Search, Mail, Phone, MapPin, Instagram, Facebook, Send as Telegram, MessageCircle as Whatsapp, Star } from 'lucide-react';

const COUNTRIES = [
  { name: 'Jordan', code: '+962', flag: '🇯🇴' },
  { name: 'Saudi Arabia', code: '+966', flag: '🇸🇦' },
  { name: 'UAE', code: '+971', flag: '🇦🇪' },
  { name: 'Qatar', code: '+974', flag: '🇶🇦' },
  { name: 'Kuwait', code: '+965', flag: '🇰🇼' },
  { name: 'Bahrain', code: '+973', flag: '🇧🇭' },
  { name: 'Egypt', code: '+20', flag: '🇪🇬' },
  { name: 'Lebanon', code: '+961', flag: '🇱🇧' },
  { name: 'Oman', code: '+968', flag: '🇴🇲' },
  { name: 'Iraq', code: '+964', flag: '🇮🇶' },
  { name: 'Palestine', code: '+970', flag: '🇵🇸' },
  { name: 'Turkey', code: '+90', flag: '🇹🇷' },
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
  { name: 'Japan', code: '+81', flag: '🇯🇵' },
  { name: 'Indonesia', code: '+62', flag: '🇮🇩' },
  { name: 'Malaysia', code: '+60', flag: '🇲🇾' },
  { name: 'Singapore', code: '+65', flag: '🇸🇬' },
  { name: 'Germany', code: '+49', flag: '🇩🇪' },
  { name: 'France', code: '+33', flag: '🇫🇷' },
  { name: 'Spain', code: '+34', flag: '🇪🇸' },
  { name: 'Italy', code: '+39', flag: '🇮🇹' },
  { name: 'Canada', code: '+1', flag: '🇨🇦' },
  { name: 'Australia', code: '+61', flag: '🇦🇺' },
  { name: 'South Korea', code: '+82', flag: '🇰🇷' },
  { name: 'China', code: '+86', flag: '🇨🇳' },
  { name: 'India', code: '+91', flag: '🇮🇳' },
];
import { cn } from '@/src/lib/utils';

export default function App() {
  return (
    <div className="min-h-screen relative">
      <SakuraRain />
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Gallery />
      <FAQ />
      <CTA />
      <Footer />
      
      {/* Floating Action Button for Whatsapp */}
      <a 
        href="https://wa.me/962790793361" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
      >
        <Whatsapp size={24} />
      </a>
    </div>
  );
}

function SakuraRain() {
  const petals = Array.from({ length: 40 });
  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {petals.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            y: -50, 
            x: `${Math.random() * 100}vw`, 
            opacity: 0,
            rotate: Math.random() * 360,
            scale: 0.3 + Math.random() * 0.7
          }}
          animate={{ 
            y: '110vh',
            x: [
              `${Math.random() * 100}vw`,
              `${(Math.random() * 100) + (Math.random() * 10 - 5)}vw`,
              `${(Math.random() * 100) + (Math.random() * 20 - 10)}vw`
            ],
            opacity: [0, 0.7, 0.7, 0],
            rotate: [0, 180, 360, 540, 720],
          }}
          transition={{ 
            duration: 15 + Math.random() * 20,
            repeat: Infinity,
            delay: Math.random() * 25,
            ease: "linear"
          }}
          className="absolute"
          style={{ 
            width: `${8 + Math.random() * 12}px`,
            height: `${8 + Math.random() * 12}px`,
            background: 'linear-gradient(135deg, #FFC0CB 0%, #FFB6C1 100%)',
            borderRadius: '100% 10% 100% 10%',
            filter: 'blur(0.5px)',
            boxShadow: '0 0 10px rgba(255, 192, 203, 0.2)'
          }}
        />
      ))}
    </div>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b",
      isScrolled 
        ? "bg-cream/95 backdrop-blur-md py-3 border-zen-brown/10 shadow-sm" 
        : "bg-transparent py-5 border-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src="/src/assets/images/sakura_logo_favicon_1779188180560.png" 
            alt="Sakura Logo" 
            className="w-10 h-10 rounded-full"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span className="text-xl font-serif font-bold tracking-widest text-zen-brown uppercase leading-none">Sakura</span>
            <span className="text-[8px] font-display uppercase tracking-[0.2em] text-zen-brown/60">Japanese Spa</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-xs font-display uppercase tracking-widest font-medium">
          <a href="#services" className="luxury-underline">Services</a>
          <a href="#why-us" className="luxury-underline">Why Us</a>
          <a href="#gallery" className="luxury-underline">Gallery</a>
          <a href="#faq" className="luxury-underline">FAQ</a>
          <a href="#booking" className="bg-zen-brown text-cream px-6 py-2.5 rounded-full hover:bg-earth-dark transition-colors">Book Now</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCountries = COUNTRIES.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.code.includes(searchQuery)
  );

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/hero_spa_interior_1779187721079.png" 
          alt="Serene Spa Interior" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/80 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs font-display uppercase tracking-[0.3em] font-bold text-zen-brown">The Art of Serenity</span>
            <div className="h-px w-12 bg-sakura" />
          </div>
          <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] text-earth-dark mb-8">
            Authentic <br />
            <span className="italic">Japanese</span> <br />
            Wellness.
          </h1>
          <p className="text-lg text-zen-brown/80 max-w-md mb-10 leading-relaxed">
            Experience the ultimate Japanese-inspired wellness at Sakura Japanese Spa. From luxury hammams to expert massages, we provide a full body and mind reset.
          </p>
          
          <div className="flex items-center gap-2 mb-10 -mt-6 animate-fade-in">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={14} className="fill-sakura text-sakura" />
              ))}
            </div>
            <span className="text-xs font-display font-bold text-zen-brown/50 tracking-widest uppercase ml-1">(1.5k+ Reviews)</span>
          </div>
          
          <div className="flex gap-4 items-center">
             <a href="#services" className="bg-sakura text-earth-dark px-8 py-4 rounded-full font-display text-sm uppercase tracking-widest font-bold hover:scale-105 transition-transform">
               Explore Services
             </a>
             <div className="flex -space-x-4">
                {[
                  "/src/assets/images/regenerated_image_1779191067211.png",
                  "/src/assets/images/regenerated_image_1779191067919.png",
                  "/src/assets/images/regenerated_image_1779191068840.png"
                ].map((src, i) => (
                  <img 
                    key={src} 
                    src={src} 
                    className="w-10 h-10 rounded-full border-2 border-cream object-cover"
                    alt={`Reviewer ${i + 1}`}
                    referrerPolicy="no-referrer"
                  />
                ))}
                <div className="w-10 h-10 rounded-full bg-zen-brown text-cream flex items-center justify-center text-[10px] font-bold">5★</div>
             </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/40 backdrop-blur-xl p-8 rounded-[40px] shadow-2xl border border-white/50"
          id="booking"
        >
          <h3 className="text-2xl font-serif mb-6 text-zen-brown">Instant Booking</h3>
          <div className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full bg-white/60 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-sakura transition-all" />
            
            <div className="flex gap-2 relative">
              <div className="relative">
                <button 
                  type="button" 
                  onClick={() => setIsSelectorOpen(!isSelectorOpen)}
                  className="h-full bg-white/60 border-none rounded-2xl px-4 flex items-center gap-2 hover:bg-white/80 transition-all cursor-pointer min-w-[100px] justify-between"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{selectedCountry.flag}</span>
                    <span className="text-sm font-bold text-zen-brown">{selectedCountry.code}</span>
                  </div>
                  <ChevronDown size={14} className={cn("text-zen-brown/40 transition-transform", isSelectorOpen && "rotate-180")} />
                </button>
                
                {isSelectorOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setIsSelectorOpen(false)}
                    />
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 z-20 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="p-3 border-b border-zen-brown/5 flex items-center gap-2">
                        <Search size={14} className="text-zen-brown/40" />
                        <input 
                          autoFocus
                          type="text" 
                          placeholder="Search country..." 
                          className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 text-zen-brown placeholder:text-zen-brown/30"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                      <div className="max-h-60 overflow-y-auto py-2 custom-scrollbar">
                        {filteredCountries.map((c) => (
                          <button
                            key={c.name + c.code}
                            type="button"
                            onClick={() => {
                              setSelectedCountry(c);
                              setIsSelectorOpen(false);
                              setSearchQuery('');
                            }}
                            className={cn(
                              "w-full flex items-center justify-between px-4 py-3 hover:bg-sakura/20 transition-colors text-left",
                              selectedCountry.name === c.name && "bg-sakura/10"
                            )}
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-xl">{c.flag}</span>
                              <div className="flex flex-col">
                                <span className="text-xs font-bold text-zen-brown">{c.name}</span>
                                <span className="text-[10px] text-zen-brown/40 tracking-wider">Dialing {c.code}</span>
                              </div>
                            </div>
                            {selectedCountry.name === c.name && (
                              <div className="w-1.5 h-1.5 rounded-full bg-sakura" />
                            )}
                          </button>
                        ))}
                        {filteredCountries.length === 0 && (
                          <div className="px-4 py-8 text-center text-xs text-zen-brown/40 italic">
                            No countries found
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
              <input type="tel" placeholder="Phone Number" className="flex-1 bg-white/60 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-sakura transition-all" />
            </div>

            <select className="w-full bg-white/60 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-sakura transition-all appearance-none cursor-pointer">
              <option>Select Service</option>
              <option>Japanese Massage</option>
              <option>Traditional Hammam</option>
              <option>Manicure & Pedicure</option>
              <option>Facial Treatment</option>
            </select>
            <button className="w-full bg-earth-dark text-white py-4 rounded-2xl font-display text-sm uppercase tracking-widest font-bold hover:bg-zen-brown transition-colors">
              Schedule Appointment
            </button>
          </div>
          <p className="text-[10px] text-center mt-4 text-zen-brown/60 uppercase tracking-widest">Open until 11:30 PM • 7th Cir., Amman</p>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { 
      title: "Signature Massage", 
      price: "from 40 JOD", 
      desc: "Deeply relaxing techniques tailored to your body's specific needs.",
      img: "/src/assets/images/massage_service_1779187741311.png"
    },
    { 
      title: "Royal Hammam", 
      price: "from 35 JOD", 
      desc: "Traditional steam therapy with premium oils for a complete skin reset.",
      img: "/src/assets/images/hammam_service_1779187760323.png"
    },
    { 
      title: "Zen Facial", 
      price: "from 25 JOD", 
      desc: "Restore your natural glow with our organic skincare essentials.",
      img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=600"
    },
  ];

  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-serif mb-4">Curated Experiences</h2>
        <div className="w-24 h-px bg-sakura mx-auto mb-4" />
        <p className="text-zen-brown/60 max-w-lg mx-auto">Discover our range of premium treatments designed to restore balance and harmony.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden mb-6">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-all duration-700" referrerPolicy="no-referrer" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest items-center flex gap-1 animate-pulse">
                <span className="w-1 h-1 rounded-full bg-green-500" /> Available Today
              </div>
            </div>
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-2xl font-serif">{s.title}</h4>
              <span className="text-xs font-display font-bold text-sakura">{s.price}</span>
            </div>
            <p className="text-sm text-zen-brown/70 leading-relaxed mb-4">{s.desc}</p>
            <button className="text-[10px] font-display font-bold uppercase tracking-[0.2em] italic border-b border-zen-brown/20 pb-1 group-hover:border-sakura transition-colors">
              View Details
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  const stats = [
    { label: "Satisfied Guests", value: "15,000+" },
    { label: "Positive Reviews", value: "1,506+" },
    { label: "Cleanliness Rating", value: "4.9/5" },
    { label: "Expert Therapists", value: "12+" },
  ];

  return (
    <section id="why-us" className="py-24 bg-zen-brown text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">
            Why Discerning <br /> 
            <span className="italic text-sakura">Queens</span> Choose Us
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-sakura/10 flex items-center justify-center shrink-0">
                <div className="w-3 h-3 rounded-full bg-sakura" />
              </div>
              <div>
                <h4 className="text-xl font-serif mb-2">Immaculate Cleanliness</h4>
                <p className="text-cream/60 text-sm leading-relaxed">Our spaces are spotless and beautifully maintained, ensuring a safe and hygienic sanctuary for every guest.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-sakura/10 flex items-center justify-center shrink-0">
                <div className="w-3 h-3 rounded-full bg-sakura" />
              </div>
              <div>
                <h4 className="text-xl font-serif mb-2">Authentic Techniques</h4>
                <p className="text-cream/60 text-sm leading-relaxed">Our therapists are trained in genuine Japanese wellness rituals, focusing on pressure points and energy flow.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-sakura/10 flex items-center justify-center shrink-0">
                <div className="w-3 h-3 rounded-full bg-sakura" />
              </div>
              <div>
                <h4 className="text-xl font-serif mb-2">Women-Owned & Led</h4>
                <p className="text-cream/60 text-sm leading-relaxed">Identifying as women-owned, we prioritize privacy and a deeply attentive, professional environment.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center"
            >
              <div className="text-4xl font-serif text-sakura mb-2">{s.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-cream/40">{s.label}</div>
            </motion.div>
          ))}
          <div className="col-span-2 relative aspect-video rounded-3xl overflow-hidden mt-4">
            <img 
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-full object-cover opacity-50"
              alt="Zen Ambience"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-sm italic font-serif">"A full reset for body and mind"</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1540555700478-4be289aef79b?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1531842477197-549890a508f7?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1545202353-847285223381?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1570172619380-2126ad0c1f4c?auto=format&fit=crop&q=80&w=600",
  ];

  return (
    <section id="gallery" className="py-24 bg-cream">
       <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <div className="text-sakura text-xs font-display font-medium uppercase tracking-widest mb-4">Behind the Scenes</div>
            <h2 className="text-5xl font-serif">Our Sanctuary</h2>
          </div>
          <p className="text-sm text-zen-brown/60 max-w-sm italic">Every corner of Sakura revolves around peace, elegance, and intentional design.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {images.map((img, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 0.98 }}
              className={cn(
                "rounded-[32px] overflow-hidden bg-white/50 border border-zen-brown/5",
                i === 1 ? "md:row-span-2" : "",
                i === 3 ? "md:col-span-2" : ""
              )}
            >
              <img src={img} alt="Gallery" className="w-full h-full object-cover transition-all duration-700" referrerPolicy="no-referrer" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Do I need to book in advance?", a: "Yes, we recommend booking at least 24 hours in advance to secure your preferred slot, especially for Hammam sessions." },
    { q: "Is the spa for women only?", a: "We identify as women-owned and provide a specialized, professional environment primarily focused on female wellness and privacy." },
    { q: "What should I bring for my Hammam session?", a: "We provide everything you need including premium towels, disposable undergarments, and high-quality aftercare products." },
    { q: "Where exactly are you located?", a: "We are situated behind Safeway at the 7th Circle in Amman. Detailed directions are available via our location link below." },
  ];

  return (
    <section id="faq" className="py-24 max-w-4xl mx-auto px-6">
      <h2 className="text-5xl font-serif text-center mb-16 underline decoration-sakura/30 underline-offset-8">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((f, i) => (
          <details key={i} className="group bg-white/30 rounded-2xl border border-zen-brown/5 overflow-hidden transition-all">
            <summary className="list-none p-6 flex justify-between items-center cursor-pointer font-serif text-lg text-zen-brown hover:bg-sakura/5">
              {f.q}
              <span className="text-sakura group-open:rotate-180 transition-transform">↓</span>
            </summary>
            <div className="p-6 pt-0 text-sm text-zen-brown/70 leading-relaxed border-t border-zen-brown/5">
              {f.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto bg-sakura rounded-[60px] p-12 md:p-24 text-center text-earth-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-[100px] -mr-32 -mt-32 rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-zen-brown/10 blur-[100px] -ml-32 -mb-32 rounded-full" />
        
        <h2 className="text-5xl md:text-7xl font-serif mb-8 max-w-3xl mx-auto">Ready for your <span className="italic">soul</span> reset?</h2>
        <p className="text-lg mb-12 max-w-xl mx-auto opacity-80">Escape the city's noise. Your sanctuary is waiting at the 7th Circle.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#booking" className="w-full sm:w-auto bg-earth-dark text-white px-10 py-5 rounded-full font-display text-sm uppercase tracking-widest font-bold hover:scale-105 transition-transform shadow-xl">
            Book Appointment
          </a>
          <a href="tel:+962790793361" className="w-full sm:w-auto bg-white/20 backdrop-blur-md border border-earth-dark/10 text-earth-dark px-10 py-5 rounded-full font-display text-sm uppercase tracking-widest font-bold hover:bg-white transition-colors">
            Call +962 7 9079 3361
          </a>
        </div>
        
        <div className="mt-12 text-[10px] uppercase tracking-[0.3em] font-medium opacity-50">7th Circle, behind Safeway, Amman</div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-earth-dark text-cream pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/src/assets/images/sakura_logo_favicon_1779188180560.png" 
                alt="Sakura Logo" 
                className="w-12 h-12 rounded-full brightness-125"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold tracking-widest text-cream uppercase leading-none">Sakura</span>
                <span className="text-[10px] font-display uppercase tracking-[0.2em] text-sakura">Japanese Spa</span>
              </div>
            </div>
            <p className="text-cream/40 text-sm max-w-sm mb-8 leading-relaxed italic">
              "Absolutely exceptional experience at Sakura Japanese Spa! Everything felt calm, elegant, and thoughtfully designed." — Yara, Local Guide
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: "#" },
                { Icon: Facebook, href: "#" },
                { Icon: Telegram, href: "#" },
                { Icon: Whatsapp, href: "https://wa.me/962790793361" },
                { Icon: MapPin, href: "https://maps.app.goo.gl/XV44+87" },
                { Icon: (props: any) => (
                  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
                  </svg>
                ), href: "#" }
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-sakura hover:text-earth-dark transition-all duration-300">
                  <Icon size={18} className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-display uppercase tracking-widest font-bold mb-6 text-sakura">Sanctuary</h4>
            <ul className="space-y-4 text-sm text-cream/60">
              <li><a href="#services" className="hover:text-cream transition-colors">Treatments</a></li>
              <li><a href="#why-us" className="hover:text-cream transition-colors">The Experience</a></li>
              <li><a href="#gallery" className="hover:text-cream transition-colors">Space Reveal</a></li>
              <li><a href="#faq" className="hover:text-cream transition-colors">Wellness FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-display uppercase tracking-widest font-bold mb-6 text-sakura">Connect</h4>
            <ul className="space-y-4 text-sm text-cream/60">
              <li className="flex items-center gap-3"><Phone size={14} /> +962 7 9079 3361</li>
              <li className="flex items-start gap-3"><MapPin size={14} className="shrink-0" /> behind Safeway, 7th Circle, Amman</li>
              <li className="flex items-center gap-3"><Mail size={14} /> boutique@sakura-spa.jo</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-cream/20">
          <div>© 2024 Sakura Japanese Spa. All rights Reserved.</div>
          <div className="flex gap-8">
             <a href="#" className="hover:text-cream transition-colors">Privacy</a>
             <a href="#" className="hover:text-cream transition-colors">Terms of Peace</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
