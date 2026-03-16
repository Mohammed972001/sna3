import React from 'react';
import {
  WrenchIcon,
  InstagramIcon,
  TwitterIcon,
  FacebookIcon } from
'lucide-react';
export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div>
            <a href="#hero" className="flex items-center gap-2 mb-6">
              <div className="bg-brand-orange text-white p-2 rounded-lg">
                <WrenchIcon size={24} />
              </div>
              <span className="text-2xl font-cairo font-bold text-white">
                سنَع للصيانة
              </span>
            </a>
            <p className="text-slate-400 leading-relaxed mb-6">
              شريكك الموثوق لصيانة منزلك في المملكة. نقدم خدمات متكاملة بأعلى
              معايير الجودة والاحترافية.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors">
                
                <InstagramIcon size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors">
                
                <TwitterIcon size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors">
                
                <FacebookIcon size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="text-white font-cairo font-bold text-xl mb-6">
              روابط هامة
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#hero"
                  className="hover:text-brand-orange transition-colors">
                  
                  الرئيسية
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-brand-orange transition-colors">
                  
                  خدماتنا
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-orange transition-colors">
                  
                  الشروط والأحكام
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-orange transition-colors">
                  
                  سياسة الخصوصية
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-white font-cairo font-bold text-xl mb-6">
              تواصل معنا
            </h4>
            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-whatsapp animate-pulse"></span>
                دعم فني طوال أيام الأسبوع 24/7
              </p>
              <p className="text-slate-400">
                المملكة العربية السعودية
                <br />
                الرياض، جدة، الدمام
              </p>
              <a
                href="https://wa.me/966500000000"
                className="inline-block mt-4 text-brand-whatsapp hover:text-white transition-colors font-bold">
                
                +966 50 000 0000
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>حقوق الملكية © 2026 شركة سنَع للصيانة. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>);

}