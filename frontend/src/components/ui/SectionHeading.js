import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, centered = false, light = false }) => {
  return (
    <div className={`max-w-3xl mb-12 ${centered ? 'mx-auto text-center' : ''}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 ${
          light ? 'text-white' : 'bg-gradient-to-l from-primary-dark to-accent-dark text-transparent bg-clip-text'
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-lg ${light ? 'text-white/80' : 'text-neutral-800/80'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;