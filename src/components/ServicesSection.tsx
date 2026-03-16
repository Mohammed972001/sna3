import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { WindIcon, DropletIcon, ZapIcon, MessageCircleIcon } from 'lucide-react';
const services = [
{
  id: 1,
  title: 'التكييف',
  description:
  'غسيل، صيانة دورية، وتأسيس بأحدث المعدات. برّد صيفك وخل الباقي علينا.',

  color: 'text-blue-500',
  bgColor: 'bg-blue-50',
  borderColor: 'border-blue-100'
},
{
  id: 2,
  title: 'السباكة',
  description: 'كشف تسربات المويه بدون تكسير، وتأسيس شبكات حديثة تدوم سنين.',
  color: 'text-cyan-500',
  bgColor: 'bg-cyan-50',
  borderColor: 'border-cyan-100'
},
{
  id: 3,
  title: 'الكهرباء',
  description: 'تصليح أعطال مفاجئة، تأسيس، وتركيب إنارة بأعلى معايير الأمان.',
  color: 'text-yellow-500',
  bgColor: 'bg-yellow-50',
  borderColor: 'border-yellow-100'
}];

export function ServicesSection() {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  return (
    <section id="services" className="py-20 bg-slate-50">
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
            
            كل اللي يحتاجه بيتك..{' '}
            <span className="text-brand-orange">تحت سقف واحد.</span>
          </motion.h2>
          <motion.p
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
              delay: 0.1
            }}
            className="text-lg text-slate-600">
            
            نقدم لك حلول صيانة شاملة بأيدي خبراء متخصصين لضمان راحة بالك.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-50px'
          }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="relative p-8 overflow-hidden transition-all duration-500 bg-white border shadow-sm group rounded-3xl border-slate-100 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Top accent line that appears on hover */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${service.color.split('-')[1]}-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex items-start justify-between mb-6">
                
                {/* Subtle index number for professional look */}
                <div className={`text-6xl font-black opacity-[0.03] select-none ${service.color}`}>
                  0{index + 1}
                </div>
              </div>

              <h3 className="relative z-10 mb-3 text-2xl font-bold transition-colors text-slate-800 group-hover:text-brand-blue">
                {service.title}
              </h3>

              <p className="relative z-10 mb-8 leading-relaxed text-slate-500">
                {service.description}
              </p>

              <div className="relative z-10 pt-6 mt-auto border-t border-slate-50">
                <a
                  href={`https://wa.me/966500000000?text=أرغب في حجز خدمة ${service.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full gap-2 text-sm font-bold transition-colors text-slate-600 group-hover:text-brand-blue group/link"
                >
                  <span>احجز الخدمة الآن</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${service.bgColor} group-hover:bg-brand-blue group-hover:text-white transition-all duration-300`}>
                    <MessageCircleIcon size={16} className="group-hover/link:-translate-x-0.5 transition-transform" />
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>);

}