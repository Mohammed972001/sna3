import React from 'react';
import { MessageCircleIcon } from 'lucide-react';
export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/966500000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-brand-whatsapp hover:bg-brand-whatsapp-hover text-white p-4 rounded-full shadow-2xl shadow-brand-whatsapp/40 transition-transform transform hover:scale-110 flex items-center justify-center group"
      aria-label="تواصل معنا عبر الواتساب">
      
      <MessageCircleIcon size={32} />

      {/* Tooltip */}
      <span className="absolute left-full ml-4 bg-slate-800 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
        كيف نقدر نخدمك؟
        {/* Arrow */}
        <span className="absolute top-1/2 -left-1 -translate-y-1/2 border-y-4 border-y-transparent border-r-4 border-r-slate-800"></span>
      </span>

      {/* Ping animation */}
      <span className="absolute inset-0 rounded-full border-2 border-brand-whatsapp animate-ping opacity-75"></span>
    </a>);

}