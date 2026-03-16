import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircleIcon, MenuIcon, XIcon, WrenchIcon } from 'lucide-react';
import Image from 'next/image';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'الرئيسية',
    href: '#hero'
  },
  {
    name: 'من نحن',
    href: '#about'
  },
  {
    name: 'خدماتنا',
    href: '#services'
  },
  {
    name: 'لماذا نحن',
    href: '#why-us'
  },
  {
    name: 'آراء العملاء',
    href: '#testimonials'
  }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
           <Image src="/logo.png" alt="Logo" width={100} height={32}  />
          </a>

          {/* Desktop Nav */}
          <nav className="items-center hidden gap-8 md:flex">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) =>
              <li key={link.name}>
                  <a
                  href={link.href}
                  className={`font-medium transition-colors hover:text-brand-orange ${isScrolled ? 'text-slate-700' : 'text-white/90'}`}>
                  
                    {link.name}
                  </a>
                </li>
              )}
            </ul>
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsapp-hover text-white px-5 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-brand-whatsapp/30">
              
              <MessageCircleIcon size={20} />
              <span>اطلب خدمة</span>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 rounded-md ${isScrolled ? 'text-brand-blue' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            
            {isMobileMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="overflow-hidden bg-white border-t shadow-xl md:hidden border-slate-100">
          
            <div className="container flex flex-col gap-4 px-4 py-4 mx-auto">
              {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 font-medium border-b text-slate-800 border-slate-50">
              
                  {link.name}
                </a>
            )}
              <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 mt-2 font-bold text-white bg-brand-whatsapp rounded-xl">
              
                <MessageCircleIcon size={20} />
                <span>اطلب خدمة الآن</span>
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}