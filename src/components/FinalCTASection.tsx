import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircleIcon } from 'lucide-react';
export function FinalCTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="صالة جلوس مريحة"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-brand-blue/90 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="text-4xl md:text-5xl font-cairo font-bold text-white mb-6 leading-tight">
            
            بيتك يستاهل الأفضل.. <br />
            <span className="text-brand-orange">جاهز نضبط لك الأمور؟</span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.1
            }}
            className="text-xl text-brand-blue-light mb-10 leading-relaxed max-w-2xl mx-auto">
            
            طاقمنا مستعد يخدمك على مدار الساعة. ضغطة زر وتلقانا عند بابك لحل أي
            مشكلة.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.2,
              type: 'spring',
              stiffness: 200
            }}>
            
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-brand-whatsapp hover:bg-brand-whatsapp-hover text-white px-10 py-5 rounded-2xl font-bold text-xl md:text-2xl transition-all transform hover:scale-105 shadow-2xl shadow-brand-whatsapp/30 w-full sm:w-auto">
              
              <MessageCircleIcon size={28} />
              <span>كلمنا واتساب واطلب خدمتك الحين</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>);

}