import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = ({ heroImage }) => {
  return (
    <div className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Hero background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="شباب عرب يعملون في مجال التقنية"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-primary-dark/90 to-accent-dark/80"></div>
      </div>
      
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-20 left-10 w-32 h-32 bg-accent-light/20 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-20 right-10 w-48 h-48 bg-primary-light/20 rounded-full blur-3xl"
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6"
          >
            تعلم المهارات التقنية لمستقبل <span className="text-accent-light">أكثر إشراقاً</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-8"
          >
            منصة رقيم هي بوابتك نحو المستقبل الرقمي، من مواد توجيهي أكاديمية إلى ورش عمل تقنية متقدمة، صممنا كل شيء لنساعدك على النجاح في العصر الرقمي.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/academic" className="btn-primary">
              اكتشف برامجنا الأكاديمية
            </Link>
            <Link to="/volunteer" className="btn-accent">
              انضم إلى مجتمعنا
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex items-center space-x-8 space-x-reverse"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-white/70">طالب</div>
            </div>
            <div className="h-10 w-px bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">20+</div>
              <div className="text-sm text-white/70">ورشة تقنية</div>
            </div>
            <div className="h-10 w-px bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-sm text-white/70">مدرب محترف</div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.7, 
          delay: 1.2,
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/80 text-sm mb-2">اكتشف المزيد</span>
        <motion.div
          animate={{ 
            y: [0, 8, 0],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop" 
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;