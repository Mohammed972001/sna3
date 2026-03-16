import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon, MessageCircleIcon, QuoteIcon } from 'lucide-react';
const testimonials = [
{
  id: 1,
  name: 'أبو فهد',
  location: 'الرياض',
  text: 'شغل نظيف ومرتب، الفنيين محترمين جداً والمكيف رجع كأنه جديد. بيّض الله وجيهكم.',
  rating: 5,
},
{
  id: 2,
  name: 'أم خالد',
  location: 'جدة',
  text: 'حلّوا لي مشكلة تسريب الحمام بساعة وحدة بدون تكسير ولا حوسة. أنصح فيهم بشدة.',
  rating: 5,
}];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container px-4 mx-auto md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
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
            className="mb-4 text-3xl font-bold md:text-4xl font-cairo text-brand-blue">
            
            ثقتكم هي رأس مالنا.. <br />
            <span className="text-brand-orange">شوف وش يقولون عملاؤنا.</span>
          </motion.h2>
        </div>

        <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto mb-12 md:grid-cols-2">
          {testimonials.map((testimonial, index) =>
          <motion.div
            key={testimonial.id}
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
              delay: index * 0.2
            }}
            className="relative p-8 bg-white shadow-lg rounded-2xl shadow-slate-200/50">
            
              <QuoteIcon className="absolute w-16 h-16 rotate-180 top-6 left-6 text-slate-100" />

              <div className="relative z-10 flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) =>
              <StarIcon
                key={i}
                className="w-5 h-5 text-yellow-400 fill-yellow-400" />

              )}
              </div>

              <p className="relative z-10 mb-8 text-lg italic leading-relaxed text-slate-700">
                "{testimonial.text}"
              </p>

              <div className="relative z-10 flex items-center gap-4">
               
              
                <div>
                  <h4 className="font-bold font-cairo text-slate-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-500">
                    {testimonial.location}
                  </p>
                </div>
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
          className="text-center">
          
          <a
            href="https://wa.me/966500000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white transition-all shadow-lg bg-brand-blue hover:bg-brand-blue-dark rounded-xl shadow-brand-blue/20">
            
            <MessageCircleIcon size={22} />
            <span>انضم لعملائنا الراضين</span>
          </a>
        </motion.div>
      </div>
    </section>);

}