import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: -5,
        boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.2)'
      }}
      className="glass-card rounded-2xl p-6 overflow-hidden h-full"
    >
      <div className="flex justify-center items-center w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-primary to-accent text-white">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-semibold mb-3">{title}</h3>
      <p className="text-neutral-800/70">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;