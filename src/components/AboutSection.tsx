import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, MessageCircleIcon } from 'lucide-react';
export function AboutSection() {
  return (
    <section id="about" className="py-20 overflow-hidden bg-white">
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* Image Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.7
            }}
            className="relative w-full lg:w-1/2">
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="فني صيانة محترف"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/80 to-transparent"></div>

             
            </div>

            {/* Decorative dots */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-pattern opacity-20 z-[-1]"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-orange/10 rounded-full z-[-1]"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.7
            }}
            className="w-full lg:w-1/2">
            
            <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl font-cairo text-brand-blue">
              مين "سنَع"؟ <br />
              <span className="text-brand-orange">وليه إحنا خيارك الأول؟</span>
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              إحنا مو مجرد شركة صيانة، إحنا شريكك اللي يريحك من وجع الراس. نجمع
              بين الخبرة الطويلة، الشفافية بالأسعار، والالتزام بالمواعيد عشان
              نرجع لبيتك هدوءه وراحتك.
            </p>

            <ul className="mb-10 space-y-4">
              {[
              'فريق عمل سعودي وأجنبي معتمد وموثوق',
              'أسعار واضحة من البداية بدون مفاجآت',
              'استخدام قطع غيار أصلية مع الضمان',
              'خدمة عملاء تتابع معك حتى بعد الصيانة'].
              map((item, index) =>
              <li key={index} className="flex items-start gap-3">
                  <CheckCircleIcon
                  className="mt-1 text-brand-orange shrink-0"
                  size={20} />
                
                  <span className="font-medium text-slate-700">{item}</span>
                </li>
              )}
            </ul>

            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-white transition-all shadow-lg bg-brand-blue hover:bg-brand-blue-dark rounded-xl shadow-brand-blue/20">
              
              <MessageCircleIcon size={22} />
              <span>تواصل معانا لاستشارة مجانية</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>);

}