import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';

const VolunteerPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    education: '',
    area: '',
    skills: '',
    experience: '',
    availability: '',
    motivation: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is changed
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'الاسم مطلوب';
    if (!formData.email.trim()) {
      errors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'البريد الإلكتروني غير صحيح';
    }
    if (!formData.phone.trim()) errors.phone = 'رقم الهاتف مطلوب';
    if (!formData.age.trim()) errors.age = 'العمر مطلوب';
    if (!formData.area.trim()) errors.area = 'مجال التطوع مطلوب';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      setSubmitStatus('loading');
      
      setTimeout(() => {
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          age: '',
          education: '',
          area: '',
          skills: '',
          experience: '',
          availability: '',
          motivation: ''
        });
      }, 1500);
    }
  };

  // Volunteer areas
  const volunteerAreas = [
    {
      title: 'التدريس والإرشاد الأكاديمي',
      description: 'مساعدة الطلاب في المواد الدراسية، تقديم جلسات إرشادية، وتبسيط المفاهيم المعقدة'
    },
    {
      title: 'تطوير المحتوى التعليمي',
      description: 'إعداد الملخصات، تصميم الاختبارات، إنتاج المحتوى البصري والمرئي التعليمي'
    },
    {
      title: 'تنظيم الفعاليات والورش',
      description: 'تنظيم ورش العمل، إدارة الفعاليات، التواصل مع المشاركين والمتحدثين'
    },
    {
      title: 'التصميم والإنتاج الإبداعي',
      description: 'تصميم الرسومات، تحرير الفيديو، إنتاج المحتوى الإبداعي والوسائط المتعددة'
    },
    {
      title: 'تطوير البرمجيات والمنصات',
      description: 'برمجة التطبيقات، تطوير المواقع، تحسين تجربة المستخدم، إدارة قواعد البيانات'
    },
    {
      title: 'إدارة وسائل التواصل الاجتماعي',
      description: 'إنشاء المحتوى، إدارة الحسابات، تحليل البيانات، التفاعل مع المتابعين'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-accent/20 to-primary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 bg-gradient-to-l from-primary-dark to-accent-dark text-transparent bg-clip-text"
            >
              تطوع معنا
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-neutral-800/80 mb-8"
            >
              انضم إلى فريقنا من المتطوعين وساهم في نشر المعرفة التقنية في المجتمع. يمكنك المشاركة بمهاراتك ووقتك في مجالات متعددة، وتكوين شبكة علاقات مهنية واسعة.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="لماذا التطوع معنا؟"
            subtitle="فوائد تعود عليك وعلى المجتمع من خلال تطوعك مع رقيم"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 rounded-2xl text-center"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">تنمية المهارات</h3>
              <p className="text-neutral-800/70">
                فرصة لتطبيق مهاراتك في بيئة عملية وتعلم مهارات جديدة من خلال العمل مع فريق متنوع من المتخصصين.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-6 rounded-2xl text-center"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">بناء شبكة علاقات</h3>
              <p className="text-neutral-800/70">
                فرصة للتواصل مع أشخاص من خلفيات متنوعة ومجالات مختلفة، وبناء شبكة علاقات مهنية قوية.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-card p-6 rounded-2xl text-center"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">تأثير إيجابي</h3>
              <p className="text-neutral-800/70">
                فرصة للمساهمة في إحداث تغيير إيجابي في المجتمع، ومساعدة الآخرين على تطوير مهاراتهم وتحقيق أحلامهم.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Volunteer Areas */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="مجالات التطوع"
            subtitle="مجالات متعددة يمكنك المشاركة فيها حسب مهاراتك واهتماماتك"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.2)'
                }}
                className="glass-card p-6 rounded-xl flex flex-col h-full"
              >
                <h3 className="text-xl font-heading font-semibold mb-3">{area.title}</h3>
                <p className="text-neutral-800/70 text-sm">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="تجارب المتطوعين"
            subtitle="آراء وتجارب بعض المتطوعين الذين انضموا إلى فريقنا"
            centered={true}
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 rounded-full overflow-hidden shrink-0">
                  <img 
                    src="https://randomuser.me/api/portraits/women/1.jpg" 
                    alt="رنا السعدي" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <div className="text-4xl text-accent-light mb-2">❝</div>
                  <p className="text-lg text-neutral-800/80 mb-4">
                    التطوع مع رقيم كان تجربة مميزة، أتاحت لي الفرصة لمشاركة خبرتي ومساعدة الآخرين، كما ساهمت في تطوير مهاراتي الشخصية والمهنية من خلال العمل مع فريق رائع.
                  </p>
                  <div className="font-heading font-semibold">رنا السعدي</div>
                  <div className="text-accent text-sm">متطوعة في مجال التدريس</div>
                  <div className="text-4xl text-accent-light text-left">❞</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="انضم إلينا الآن"
            subtitle="أكمل نموذج التطوع التالي وسنتواصل معك في أقرب وقت ممكن"
            centered={true}
          />
          
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-8"
            >
              {submitStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-heading font-semibold mb-3 text-green-600">تم تقديم طلبك بنجاح!</h3>
                  <p className="text-neutral-800/70 mb-6">
                    شكراً لاهتمامك بالتطوع معنا. سنقوم بمراجعة طلبك والتواصل معك قريباً.
                  </p>
                  <button
                    onClick={() => setSubmitStatus(null)}
                    className="btn-primary"
                  >
                    تقديم طلب آخر
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">
                        الاسم الكامل <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          formErrors.name ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                        placeholder="أدخل اسمك الكامل"
                      />
                      {formErrors.name && (
                        <div className="text-red-500 text-sm mt-1">{formErrors.name}</div>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        البريد الإلكتروني <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          formErrors.email ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                        placeholder="example@example.com"
                      />
                      {formErrors.email && (
                        <div className="text-red-500 text-sm mt-1">{formErrors.email}</div>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block mb-2 font-medium">
                        رقم الهاتف <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          formErrors.phone ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                        placeholder="07xxxxxxxx"
                      />
                      {formErrors.phone && (
                        <div className="text-red-500 text-sm mt-1">{formErrors.phone}</div>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="age" className="block mb-2 font-medium">
                        العمر <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        min="15"
                        max="100"
                        className={`w-full px-4 py-2 rounded-lg border ${
                          formErrors.age ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                        placeholder="أدخل عمرك"
                      />
                      {formErrors.age && (
                        <div className="text-red-500 text-sm mt-1">{formErrors.age}</div>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="education" className="block mb-2 font-medium">
                        المستوى التعليمي
                      </label>
                      <select
                        id="education"
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">اختر المستوى التعليمي</option>
                        <option value="ثانوية عامة">ثانوية عامة</option>
                        <option value="دبلوم">دبلوم</option>
                        <option value="بكالوريوس">بكالوريوس</option>
                        <option value="ماجستير">ماجستير</option>
                        <option value="دكتوراه">دكتوراه</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="area" className="block mb-2 font-medium">
                        مجال التطوع <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="area"
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          formErrors.area ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                      >
                        <option value="">اختر مجال التطوع</option>
                        <option value="التدريس والإرشاد الأكاديمي">التدريس والإرشاد الأكاديمي</option>
                        <option value="تطوير المحتوى التعليمي">تطوير المحتوى التعليمي</option>
                        <option value="تنظيم الفعاليات والورش">تنظيم الفعاليات والورش</option>
                        <option value="التصميم والإنتاج الإبداعي">التصميم والإنتاج الإبداعي</option>
                        <option value="تطوير البرمجيات والمنصات">تطوير البرمجيات والمنصات</option>
                        <option value="إدارة وسائل التواصل الاجتماعي">إدارة وسائل التواصل الاجتماعي</option>
                      </select>
                      {formErrors.area && (
                        <div className="text-red-500 text-sm mt-1">{formErrors.area}</div>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="skills" className="block mb-2 font-medium">
                      المهارات والقدرات
                    </label>
                    <textarea
                      id="skills"
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="اذكر المهارات والقدرات التي تمتلكها والتي يمكن أن تفيد في مجال التطوع الذي اخترته"
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="experience" className="block mb-2 font-medium">
                      الخبرات السابقة
                    </label>
                    <textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="اذكر خبراتك السابقة في مجال التطوع أو أي مجال آخر ذي صلة"
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="availability" className="block mb-2 font-medium">
                      الوقت المتاح للتطوع
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">اختر الوقت المتاح</option>
                      <option value="1-5 ساعات أسبوعياً">1-5 ساعات أسبوعياً</option>
                      <option value="5-10 ساعات أسبوعياً">5-10 ساعات أسبوعياً</option>
                      <option value="10-15 ساعة أسبوعياً">10-15 ساعة أسبوعياً</option>
                      <option value="أكثر من 15 ساعة أسبوعياً">أكثر من 15 ساعة أسبوعياً</option>
                    </select>
                  </div>
                  
                  <div className="mb-8">
                    <label htmlFor="motivation" className="block mb-2 font-medium">
                      ما الذي يدفعك للتطوع معنا؟
                    </label>
                    <textarea
                      id="motivation"
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="اذكر دوافعك للتطوع وما الذي تطمح لتحقيقه من خلال هذه التجربة"
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn-accent w-full md:w-auto px-8"
                      disabled={submitStatus === 'loading'}
                    >
                      {submitStatus === 'loading' ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          جاري التقديم...
                        </span>
                      ) : (
                        'تقديم طلب التطوع'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="أسئلة شائعة"
            subtitle="إجابات على الأسئلة الأكثر شيوعاً حول التطوع معنا"
            centered={true}
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card p-6 rounded-xl"
              >
                <h3 className="text-xl font-heading font-semibold mb-2">هل يشترط خبرة سابقة للتطوع؟</h3>
                <p className="text-neutral-800/70">
                  لا يشترط وجود خبرة سابقة للتطوع في معظم المجالات، فنحن نوفر التدريب اللازم. ومع ذلك، فإن وجود بعض المهارات الأساسية في المجال الذي ترغب بالتطوع فيه سيكون مفيداً.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-card p-6 rounded-xl"
              >
                <h3 className="text-xl font-heading font-semibold mb-2">كم عدد الساعات المطلوبة للتطوع؟</h3>
                <p className="text-neutral-800/70">
                  يعتمد ذلك على المجال والمشروع الذي ستشارك فيه، ولكن بشكل عام نطلب التزاماً بـ 5 ساعات أسبوعياً كحد أدنى. يمكنك تحديد الوقت المتاح لديك في نموذج التطوع.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-card p-6 rounded-xl"
              >
                <h3 className="text-xl font-heading font-semibold mb-2">هل يمكنني التطوع عن بعد؟</h3>
                <p className="text-neutral-800/70">
                  نعم، نوفر فرص تطوع عن بعد في العديد من المجالات مثل تطوير المحتوى والتصميم والبرمجة. ومع ذلك، قد تتطلب بعض المجالات حضوراً فعلياً مثل تنظيم الفعاليات والتدريس.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass-card p-6 rounded-xl"
              >
                <h3 className="text-xl font-heading font-semibold mb-2">هل سأحصل على شهادة تطوع؟</h3>
                <p className="text-neutral-800/70">
                  نعم، نقدم شهادات تطوع معتمدة توثق ساعات التطوع والمهام التي قمت بها، بالإضافة إلى رسائل توصية للمتطوعين المتميزين.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VolunteerPage;