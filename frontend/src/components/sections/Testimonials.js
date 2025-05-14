import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const Testimonials = ({ testimonials = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="آراء المستفيدين"
          subtitle="ما يقوله طلابنا ومتطوعونا عن تجربتهم مع رقيم"
          centered={true}
        />
        
        <div className="relative max-w-4xl mx-auto mt-12">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10"></div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl p-6 md:p-10"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-4 rounded-full overflow-hidden">
                  <img 
                    src={testimonials[currentIndex]?.avatar} 
                    alt={testimonials[currentIndex]?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-heading font-semibold">{testimonials[currentIndex]?.name}</h3>
                  <div className="text-accent">{testimonials[currentIndex]?.role}</div>
                </div>
                
                <div className="text-4xl text-accent-light mb-4">❝</div>
                <p className="text-lg text-neutral-800/80 max-w-2xl">
                  {testimonials[currentIndex]?.quote}
                </p>
                <div className="text-4xl text-accent-light mt-4">❞</div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-neutral-800 hover:bg-primary hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-neutral-800 hover:bg-primary hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index 
                    ? 'bg-accent scale-125' 
                    : 'bg-gray-300 hover:bg-accent/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;