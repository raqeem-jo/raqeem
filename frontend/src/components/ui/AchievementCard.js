import { motion } from 'framer-motion';

const AchievementCard = ({ img, title, date, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-card rounded-2xl overflow-hidden h-full flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={img} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-sm text-accent font-medium mb-2">{date}</div>
        <h3 className="text-xl font-heading font-semibold mb-3">{title}</h3>
        <p className="text-neutral-800/70 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default AchievementCard;