import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircleIcon, ShieldCheckIcon } from 'lucide-react';
export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-blue-dark">
      
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-dark via-brand-blue to-[#0e5a8a] z-0"></div>
      <div className="absolute inset-0 bg-pattern opacity-30 z-0"></div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -right-20 w-72 h-72 bg-brand-orange rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-brand-light rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}>
            
            <span className="inline-flex items-center gap-2 bg-white/10 text-brand-orange border border-brand-orange/30 px-4 py-1.5 rounded-full text-sm font-bold mb-6 backdrop-blur-sm">
              <ShieldCheckIcon size={16} />
              الخيار الأول للصيانة في السعودية
            </span>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.1
            }}
            className="text-4xl md:text-6xl lg:text-7xl font-cairo font-bold text-white leading-tight mb-6">
            
            عطل مفاجئ بالبيت؟ <br />
            <span className="text-brand-orange">لا تشيل هم..</span> "سنَع"
            يضبطها لك!
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="text-lg md:text-xl text-brand-blue-light max-w-2xl mx-auto mb-10 leading-relaxed">
            
            خدمات صيانة منزلية متكاملة (سباكة، كهرباء، تكييف). فنيين محترفين
            يوصلونك وين ما كنت في المملكة بأسرع وقت، مع ضمان شامل على كل
            أعمالنا.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.3
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-whatsapp hover:bg-brand-whatsapp-hover text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 shadow-xl shadow-brand-whatsapp/20">
              
              <MessageCircleIcon size={24} />
              <span>اطلب فزعتنا الحين</span>
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-sm">
              
              استكشف خدماتنا
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10">
        <svg
          className="relative block w-full h-[50px] md:h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">
          
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,120.2,192.27,108.86,236.21,100.74,279.1,80.8,321.39,56.44Z"
            className="fill-white">
          </path>
        </svg>
      </div>
    </section>);

}