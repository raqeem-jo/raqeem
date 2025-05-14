import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import AchievementCard from '../ui/AchievementCard';

const AchievementsShowcase = ({ achievements }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent-dark to-primary-dark text-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="إنجازاتنا"
          subtitle="نفخر بتأثيرنا الإيجابي في المجتمع ونسعى دائمًا لتحقيق المزيد"
          centered={true}
          light={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard 
              key={index}
              img={achievement.img}
              title={achievement.title}
              date={achievement.date}
              description={achievement.description}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Link to="/achievements" className="px-6 py-3 bg-white text-accent-dark font-semibold rounded-xl transition-all hover:bg-gray-100 hover:shadow-lg hover:scale-105 active:scale-95">
            عرض المزيد من الإنجازات
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsShowcase;