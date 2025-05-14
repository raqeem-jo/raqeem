import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CourseCard = ({ img, title, description, category, level, duration, link, delay = 0 }) => {
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
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-accent text-white text-xs font-semibold py-1 px-2 rounded-lg">
          {category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-heading font-semibold mb-2">{title}</h3>
        <p className="text-neutral-800/70 text-sm mb-4 flex-grow">{description}</p>
        
        <div className="flex justify-between text-sm text-neutral-800/70 mb-4">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            {level}
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            {duration}
          </div>
        </div>
        
        <Link 
          to={link}
          className="btn-primary w-full text-center text-sm"
        >
          اكتشف المزيد
        </Link>
      </div>
    </motion.div>
  );
};

export default CourseCard;