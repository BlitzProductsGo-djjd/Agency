import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X, 
  Zap, 
  Shield, 
  Mail, 
  Instagram, 
  Twitter, 
  Smartphone,
  Layout
} from 'lucide-react';

// --- Types ---
interface PortfolioItem {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  description: string;
}

// --- Constants ---
const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: "Luminé Skincare",
    subtitle: "Pure, natural skincare formulated for radiant skin",
    category: "Skincare / Ecommerce",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1000",
    description: "A minimal, cream-toned aesthetic designed to resonate with high-end beauty consumers."
  },
  {
    id: 2,
    title: "Summit Roofing",
    subtitle: "Your Roof. Our Reputation.",
    category: "Construction / Service",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=1000",
    description: "A technical and bold interface project that emphasizes trust and speed."
  },
  {
    id: 3,
    title: "AirPro HVAC",
    subtitle: "Your Comfort Is Our Priority",
    category: "Home Services / Utility",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ec4?q=80&w=1000",
    description: "Modern, approachable design for service-based businesses looking to scale."
  },
  {
    id: 4,
    title: "Elite Performance",
    subtitle: "Transform Your Body, Transform Your Life",
    category: "Fitness / Personal Brand",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000",
    description: "High-contrast, energetic visuals that drive conversion for fitness professionals."
  },
  {
    id: 5,
    title: "Luxury Dental Care",
    subtitle: "California's Premier Luxury Dental Practice",
    category: "Medical / Premium",
    image: "https://images.unsplash.com/photo-1629909613654-28r3a7c1776d?q=80&w=1000",
    description: "Serene and sterile aesthetic that blends professionalism with a spa-like feel."
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-12 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-light tracking-widest uppercase"
        >
          LUXE<span className="font-bold">AGENCY</span>
        </motion.div>

        <div className="hidden md:flex gap-12 items-center text-[10px] uppercase tracking-[0.3em] font-medium text-white/60">
          {['Portfolio', 'Services', 'Pricing'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
              {item}
            </a>
          ))}
          <div className="text-[10px] tracking-widest hidden lg:block opacity-40">LuxeAgencySupport@gmail.com</div>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 text-center items-center">
              {['Portfolio', 'Services', 'Pricing'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-xl uppercase tracking-widest font-light py-2">
                  {item}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)} className="bg-white text-black px-8 py-3 rounded-full w-full uppercase tracking-widest font-bold text-sm">
                Start Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden border-b border-white/10">
      {/* Content Left */}
      <div className="w-full md:w-5/12 p-8 md:p-20 flex flex-col justify-center border-r border-white/10 bg-black pt-32 md:pt-20">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-widest mb-8 text-white/50 bg-white/5">
            Premium Web Presence
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-[1.1] mb-8 tracking-tighter text-white">
            Digital <br/>
            <span className="italic font-serif">Excellence</span> <br/>
            Defined.
          </h1>
          <p className="text-white/40 text-sm leading-relaxed mb-12 max-w-sm font-light">
            We build high-converting, bespoke digital experiences for world-class brands. Seamless transitions, perfect responsiveness, and flawless design logic.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="bg-white text-black px-8 py-5 rounded-full flex flex-col justify-center hover:scale-105 transition-transform cursor-default">
              <span className="text-[10px] uppercase font-bold tracking-tighter opacity-60">Setup Fee</span>
              <span className="text-2xl font-bold">$150</span>
            </div>
            <div className="border border-white/20 px-8 py-5 rounded-full flex flex-col justify-center hover:bg-white/5 transition-colors cursor-default">
              <span className="text-[10px] uppercase font-bold tracking-tighter opacity-40 text-white">Monthly Support</span>
              <span className="text-2xl font-light text-white">$20</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Showcase Right */}
      <div className="w-full md:w-7/12 p-8 md:p-20 bg-[#0a0a0a] flex flex-col justify-center relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 flex flex-col h-full justify-between">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Capabilities Showcase</h2>
            <span className="text-[10px] font-mono text-white/20 tracking-widest">01 — 05</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 max-h-[600px]">
            {PORTFOLIO_ITEMS.slice(0, 4).map((item, i) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="bg-[#111] border border-white/5 p-5 rounded-2xl flex flex-col justify-between hover:border-white/20 transition-all group"
              >
                <div className="w-full h-32 overflow-hidden rounded-xl mb-4">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider mb-1 text-white group-hover:text-luxury-gold transition-colors">{item.title}</div>
                  <div className="text-[9px] text-white/30 uppercase tracking-widest font-medium">{item.category}</div>
                </div>
              </motion.div>
            ))}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6 }}
               className="col-span-1 sm:col-span-2 bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-8 hover:bg-white/[0.08] transition-all"
            >
              <div className="w-1/3 h-24 bg-zinc-900/50 rounded-xl relative overflow-hidden border border-white/5">
                 <div className="absolute inset-0 flex items-center justify-center text-[8px] text-white/20 uppercase tracking-[0.3em] font-bold text-center px-4">
                    Signature High-End Layout
                 </div>
              </div>
              <div className="flex-1">
                <div className="text-lg font-light mb-2 text-white italic font-serif">Obsidian Agency Preview</div>
                <p className="text-[10px] text-white/40 leading-relaxed max-w-sm uppercase tracking-widest font-medium">
                   Optimized for mobile-first high-end conversion for digital leaders.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 bg-black border-top border-white/10">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 mb-4 block">Our Work Gallery</span>
            <h2 className="text-5xl md:text-7xl font-light text-white tracking-tighter">Bespoke <span className="italic font-serif">Solutions</span></h2>
          </div>
          <p className="max-w-md text-white/40 font-light text-sm tracking-wide leading-relaxed">
            A selection of premium digital architectures designed for scalability and high-conversions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0a0a0a] ${
                index % 3 === 0 ? 'md:col-span-8' : 'md:col-span-4'
              }`}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale opacity-40 transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-black via-black/80 to-transparent">
                <div className="flex justify-between items-end">
                  <div className="text-white">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-2 block">{item.category}</span>
                    <h3 className="text-2xl font-light tracking-tight mb-2 italic font-serif">{item.title}</h3>
                    <p className="text-[11px] text-white/30 uppercase tracking-widest font-medium group-hover:text-white/60 transition-colors">{item.subtitle}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all transform group-hover:-rotate-45">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const featureList = [
    { icon: <Zap size={20} />, title: "Ultra Performance", desc: "Optimized for Core Web Vitals and lightning fast delivery." },
    { icon: <Smartphone size={20} />, title: "Responsive DNA", desc: "Flawless experiences across every digital viewport." },
    { icon: <Shield size={20} />, title: "Secure Systems", desc: "Modern, fortified architectures for enterprise-grade safety." },
    { icon: <Layout size={20} />, title: "Bespoke Logic", desc: "Intelligent, code-first design instead of cookie-cutter templates." }
  ];

  return (
    <section id="services" className="py-40 bg-black">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {featureList.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 bg-black hover:bg-white/[0.02] transition-all group"
            >
              <div className="mb-8 text-white/40 group-hover:text-white transition-colors">{f.icon}</div>
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-4 text-white">{f.title}</h4>
              <p className="text-white/40 font-light leading-relaxed text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-40 bg-black relative">
      <div className="max-w-7xl mx-auto px-12 relative z-10">
        <div className="text-center mb-32 text-white">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/30 mb-6 block">The Investment</span>
          <h2 className="text-5xl md:text-8xl font-light tracking-tighter mb-8">Simple <span className="italic font-serif">Pricing</span></h2>
          <p className="max-w-md mx-auto text-white/40 font-light text-sm tracking-wide">
            Access agency-grade digital craftsmanship without the legacy agency overhead.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden"
          >
            <div className="p-12 md:p-20 border-r border-white/10">
              <h3 className="text-3xl font-serif italic mb-8 text-white">Full Digital Suite</h3>
              <ul className="space-y-5 text-white/40 text-xs uppercase tracking-widest font-bold mb-12">
                <li className="flex items-center gap-4"><CheckCircle2 className="text-white" size={14} /> Bespoke UI/UX Design</li>
                <li className="flex items-center gap-4"><CheckCircle2 className="text-white" size={14} /> Full Stack Development</li>
                <li className="flex items-center gap-4"><CheckCircle2 className="text-white" size={14} /> Global SEO Deployment</li>
                <li className="flex items-center gap-4"><CheckCircle2 className="text-white" size={14} /> Priority Support Lead</li>
              </ul>
              <div className="flex items-baseline gap-4">
                <div className="text-6xl font-light tracking-tighter text-white font-serif">$150</div>
                <div className="text-white/20 text-[10px] uppercase tracking-widest font-bold">Base Bundle</div>
              </div>
            </div>

            <div className="p-12 md:p-20 bg-white flex flex-col justify-center text-center md:text-left">
               <span className="text-[10px] uppercase font-bold tracking-[0.3em] mb-4 text-black/50">Sustained Growth</span>
               <div className="flex items-baseline justify-center md:justify-start gap-4 mb-2">
                 <div className="text-7xl font-light tracking-tighter text-black font-serif">$20</div>
                 <div className="text-black/30 text-[10px] uppercase tracking-widest font-bold">Monthly</div>
               </div>
               <p className="text-[10px] text-black/40 uppercase font-bold tracking-widest mb-12 leading-relaxed">
                 Includes security updates, priority asset management, and cloud maintenance.
               </p>
               <a href="#contact" className="bg-black text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-center text-[10px] hover:bg-neutral-900 transition-colors">
                  Initialize Partnership
               </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WarningSection = () => {
   return (
    <section id="terms" className="py-24 px-12 bg-black">
      <div className="max-w-5xl mx-auto border border-white/5 rounded-2xl p-12 text-white bg-[#050505]">
        <h2 className="text-xl font-serif italic mb-10 tracking-tight">Agreements & Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[11px] text-white/30 uppercase tracking-widest font-medium">
          <div>
            <h4 className="text-white font-bold mb-4">Service Engagement</h4>
            <p className="leading-relaxed">Initial development commences following the $150 commitment. A recurring $20/mo maintenance protocol ensures persistent optimization and priority scaling.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Digital Tenure</h4>
            <p className="leading-relaxed">LuxeAgency assigns comprehensive frontend architecture and asset rights to the client upon final verified deployment.</p>
          </div>
        </div>
      </div>
    </section>
   );
}

const Contact = () => {
  return (
    <section id="contact" className="py-40 bg-white text-black rounded-t-[100px] relative z-10">
      <div className="max-w-7xl mx-auto px-12 text-center">
        <h2 className="text-5xl md:text-8xl lg:text-9xl font-light mb-16 tracking-tighter leading-[0.9]">
          Digital <br />
          <span className="italic font-serif">Excellence</span> <br/>
          Defined.
        </h2>
        <div className="flex flex-col items-center gap-8">
          <a 
            href="mailto:LuxeAgencySupport@gmail.com" 
            className="text-xl md:text-5xl font-light hover:opacity-50 transition-all border-b border-black/10 pb-6 flex items-center gap-6 break-all md:break-normal tracking-tight"
          >
            LuxeAgencySupport@gmail.com <Mail size={40} className="w-8 h-8 md:w-12 md:h-12" />
          </a>
          <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-black/30 mt-10">
            EST. 2024 — Serving Digital Leaders Worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onShowTerms }: { onShowTerms: () => void }) => {
  return (
    <footer className="bg-black text-white pt-32 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
           <div className="lg:col-span-1">
             <div className="text-2xl font-light tracking-widest uppercase mb-8">
               LUXE<span className="font-bold">AGENCY</span>
             </div>
             <div className="flex gap-6 opacity-40">
                <a href="#" className="hover:text-white transition-colors"><Instagram size={18} /></a>
                <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
             </div>
           </div>
           
           <div>
             <h5 className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/30 mb-8">Navigation</h5>
             <ul className="space-y-4 font-medium text-[10px] uppercase tracking-widest text-white/50">
               <li><a href="#portfolio" className="hover:text-white transition-colors">Archive</a></li>
               <li><a href="#services" className="hover:text-white transition-colors">Protocol</a></li>
               <li><a href="#pricing" className="hover:text-white transition-colors">Investment</a></li>
             </ul>
           </div>

           <div>
             <h5 className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/30 mb-8">Contact</h5>
             <ul className="space-y-4 font-medium text-[10px] uppercase tracking-widest text-white/50">
               <li><a href="mailto:LuxeAgencySupport@gmail.com" className="hover:text-white transition-colors">Support</a></li>
               <li><a href="mailto:LuxeAgencySupport@gmail.com" className="hover:text-white transition-colors">Inquiries</a></li>
             </ul>
           </div>

           <div>
             <h5 className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/30 mb-8">Legal</h5>
             <ul className="space-y-4 font-medium text-[10px] uppercase tracking-widest text-white/50">
               <li><button onClick={onShowTerms} className="hover:text-white cursor-pointer transition-colors block text-left">Terms of Service</button></li>
               <li><button onClick={onShowTerms} className="hover:text-white cursor-pointer transition-colors block text-left">Privacy Architecture</button></li>
             </ul>
           </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-white/20 uppercase tracking-[0.4em] font-bold border-t border-white/5 pt-12">
          <p>© 2024 LuxeAgency Studio. All Rights Reserved.</p>
          <p>Handcrafted for digital leaders.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [showTerms, setShowTerms] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-white selection:text-black">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-white z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      <Hero />
      <Features />
      <Portfolio />
      <Pricing />
      <WarningSection />
      <Contact />
      <Footer onShowTerms={() => setShowTerms(true)} />

      {/* Global Grainy Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] animate-pulse" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />
      
      {/* Background Gradient Orbs */}
      <div className="fixed -top-24 -left-24 w-96 h-96 bg-white/5 blur-[100px] rounded-full pointer-events-none z-0" />
      <div className="fixed -bottom-24 -right-24 w-96 h-96 bg-white/5 blur-[100px] rounded-full pointer-events-none z-0" />
    </div>
  );
}
