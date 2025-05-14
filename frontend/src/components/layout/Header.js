import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'الرئيسية', href: '/' },
  { name: 'رقيم أكاديمي', href: '/academic' },
  { name: 'رقيم تقني', href: '/technical' },
  { name: 'الإنجازات', href: '/achievements' },
  { name: 'تطوع معنا', href: '/volunteer' },
  { name: 'من نحن', href: '/about' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <Disclosure as="nav" className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-lg shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0">
                <Link to="/" className="flex items-center">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl font-heading font-bold bg-gradient-to-l from-primary-dark to-accent-dark text-transparent bg-clip-text"
                  >
                    رقيم
                  </motion.div>
                </Link>
              </div>
              
              {/* Desktop menu */}
              <div className="hidden md:flex md:items-center md:space-x-4 md:space-x-reverse">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href || 
                    (item.href !== '/' && location.pathname.startsWith(item.href));
                  
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                    >
                      {item.name}
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 right-0 h-0.5 bg-accent-dark"
                          layoutId="navbar-underline"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* CTA button */}
              <div className="hidden md:block">
                <Link
                  to="/volunteer"
                  className="btn-accent text-sm"
                >
                  انضم لنا الآن
                </Link>
              </div>
              
              {/* Mobile menu button */}
              <div className="flex items-center md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-neutral-800 hover:bg-accent-light/20 hover:text-accent-dark">
                  <span className="sr-only">القائمة الرئيسية</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu panel */}
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href || 
                    (item.href !== '/' && location.pathname.startsWith(item.href));
                  
                  return (
                    <Disclosure.Button
                      key={item.name}
                      as={Link}
                      to={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        isActive 
                          ? 'bg-accent-light/30 text-accent-dark' 
                          : 'text-neutral-800 hover:bg-accent-light/10 hover:text-accent'
                      }`}
                    >
                      {item.name}
                    </Disclosure.Button>
                  );
                })}
                <div className="pt-2">
                  <Link
                    to="/volunteer"
                    className="block w-full text-center btn-accent"
                  >
                    انضم لنا الآن
                  </Link>
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}