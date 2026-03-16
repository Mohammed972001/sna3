import React from 'react';
import { motion } from 'framer-motion';
import {
  ClockIcon,
  ShieldCheckIcon,
  UsersIcon,
  MessageCircleIcon } from
'lucide-react';
const features = [
{
  id: 1,
  title: 'سرعة استجابة (فزعة)',
  description:
  'نوصلك في أقل من ساعة من اتصالك، لأننا نقدر وقتك وأهمية المشكلة.',
  icon: ClockIcon
},
{
  id: 2,
  title: 'ضمان ذهبي',
  description: 'شغلنا مضمون، وما نطلع من بيتك إلا وأنت راضي 100% عن النتيجة.',
  icon: ShieldCheckIcon
},
{
  id: 3,
  title: 'فنيين معتمدين',
  description:
  'طاقم محترف، نظيف، وأمين على حلالك، تم تدريبهم على أعلى المعايير.',
  icon: UsersIcon
}];

export function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="relative py-20 overflow-hidden text-white bg-brand-blue">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>

      <div className="container relative z-10 px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          {/* Content */}
          <div className="w-full lg:w-1/2">
            <motion.h2
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              className="mb-6 text-3xl font-bold leading-tight md:text-4xl font-cairo">
              
              جودة، سرعة، وأسعار <br />
              <span className="text-brand-orange">ما فيها مفاجآت!</span>
            </motion.h2>

            <div className="mt-10 space-y-8">
              {features.map((feature, index) =>
              <motion.div
                key={feature.id}
                initial={{
                  opacity: 0,
                  x: 30
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: index * 0.2
                }}
                className="flex gap-4">
                
                  <div className="mt-1 shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 border rounded-full bg-white/10 text-brand-orange border-white/20">
                      <feature.icon size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold font-cairo">
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed text-brand-blue-light">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>

            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.6
              }}
              className="mt-12">
              
              <a
                href="https://wa.me/966500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-white transition-all transform shadow-lg bg-brand-whatsapp hover:bg-brand-whatsapp-hover rounded-xl hover:-translate-y-1 shadow-brand-whatsapp/20">
                
                <MessageCircleIcon size={22} />
                <span>اطلب فني محترف</span>
              </a>
            </motion.div>
          </div>

          {/* Image/Illustration */}
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
              duration: 0.7
            }}
            className="relative w-full lg:w-1/2">
            
            <div className="relative overflow-hidden border-4 shadow-2xl rounded-2xl border-white/10">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="فريق صيانة محترف"
                className="object-cover w-full h-auto" />
              
              <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay"></div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -15, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: 'easeInOut'
              }}
              className="absolute hidden p-4 bg-white border shadow-xl -top-8 -right-8 text-brand-blue rounded-2xl border-slate-100 md:block">
        
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>);

}