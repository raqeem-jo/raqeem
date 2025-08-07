import React, { useState, useEffect, useRef } from 'react';
import Hls from 'hls.js';
import HLSPlayer from './components/HLSPlayer';
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { 
  Brain, 
  Users, 
  BookOpen, 
  Shield, 
  Code, 
  TrendingUp,
  Play,
  Menu,
  X,
  Facebook,
  Instagram,
  Linkedin,
  Globe,
  ChevronDown,
  ChevronUp,
  Star,
  Award,
  Target,
  Clock,
  Eye,
  Mail,
  Phone
} from 'lucide-react';
import './App.css';
import raqeemLogo from './assets/raqeem-logo.png';
import crownPrinceFoundation from './assets/crown-prince-foundation.jpg';
import yarmoukuniversity from './assets/yarmouk-university.png';
import alBaytUniversity from './assets/al-bayt-university.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [showAllVideos, setShowAllVideos] = useState(false);
  const [stats, setStats] = useState({ users: 0, courses: 0, programs: 0 });

  // تحريك الإحصائيات
  useEffect(() => {
    const animateStats = () => {
      const targets = { users: 4500, courses: 50, programs: 4 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setStats({
          users: Math.floor(targets.users * progress),
          courses: Math.floor(targets.courses * progress),
          programs: Math.floor(targets.programs * progress)
        });
        
        if (currentStep >= steps) {
          clearInterval(timer);
          setStats(targets);
        }
      }, stepTime);
    };
    
    animateStats();
  }, []);

  const programs = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "نشر الوعي بالتقنية",
      description: "البرنامج الرئيسي لمبادرة رقيم الذي من خلاله نساعد الشباب في تمكينهم بالمهارات الرقمية وتطوير قدراتهم التقنية لمواكبة التطورات الحديثة في عالم التكنولوجيا."
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: "تلفزيون نشمية",
      description: "برنامج لطالبات المدارس لتحويل الإذاعة المدرسية إلى إعلام رقمي. بدأ في مدرسة الأميرة عالية بنت الحسين الثانوية في محافظة المفرق."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "تمكين المدربين",
      description: "إعداد مدربين ضمن المبادرة لضمان الاستدامة والاستمرارية."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "زاوية",
      description: "برنامج شبابي على إنستغرام يقدم مواضيع شبابية على شكل بودكاست."
    }
  ];

  const teamMembers = [
    { name: "بدر الحسبان", role: "مؤسس رقيم" },
    { name: "شهم الحسبان", role: "المساعد ومنسق محافظة المفرق" },
    { name: "سارة المجالي", role: "مسؤولة المتابعة والتقييم ومنسقة جرش" },
    { name: "زهراء غرايبة", role: "منسقة عجلون" },
    { name: "أمين المصري", role: "مدير برنامج زاوية" },
    { name: "بشار الشديفات", role: "مدير العمليات" },
    { name: "ميشيل أيوب", role: "منسق العلاقات" },
    { name: "محمد العبيدات", role: "مساعد متابعة والتقييم" },
    { name: "سحر العموش", role: "مديرة برنامج نشمية" }
  ];

  const trainers = [
    { name: "بدر الحسبان", specialty: "المهارات التقنية والذكاء الاصطناعي" },
    { name: "عدي عابد", specialty: "مهارات لسوق العمل" },
    { name: "احمد الشوملي", specialty: "المهارات التقنية و الذكاء الاصطناعي" },
    { name: "محمود الوحش", specialty: "تصميم المواقع الالكترونية" },
    { name: "الدكتور محمد التميمي", specialty: "مهارات حياتية" },
    { name: "شروق الشاويش", specialty: "البرمجة" },
    { name: "بشار الحريري", specialty: "الذكاء الاصطناعي" },
    { name: "سندس عليمات", specialty: "الأمن السيبراني" },
    { name: "عبدالله البستنجي", specialty: "برمجة المواقع الإلكترونية" },
    { name: "مريم غوشة", specialty: "خبيرة ذكاء اصطناعي" },
    { name: "عمران عقله", specialty: "التسويق الرقمي" },
    { name: "ألفت قطمير", specialty: "الثقافة المالية" },
    { name: "شهم الحسبان", specialty: "مدرب لغة إنجليزية" },
    { name: "مدرب معتمد", specialty: "تحليل البيانات" },
    { name: "مدرب معتمد", specialty: "الحوسبة السحابية" },
    { name: "مدرب معتمد", specialty: "إنترنت الأشياء" },
    { name: "", specialty: "" },
    { name: "", specialty: "" },
    { name: "", specialty: "" }
  ];

  const partners = [
    { name: "مؤسسة ولي العهد", logo: crownPrinceFoundation },
    { name: "جامعة اليرموك", logo: yarmoukuniversity },
    { name: "جامعة آل البيت", logo: alBaytUniversity },
    { name: "منصة نحن", logo: null },
    { name: "الجامعة الأمريكية في مادبا", logo: null }
  ];

  const videoCategories = {
    'all': {
      title: 'الكل',
      icon: <Globe className="w-5 h-5" />,
      videos: []
    },
    'digital-skills': {
      title: 'المهارات الرقمية',
      icon: <Brain className="w-5 h-5" />,
      videos: [
        {
          id: 'JEhCJwMFTRg',
          title: 'الدرس (1): الإنترنت والشبكة العنكبوتية',
          isRaqeemContent: true
        },
        {
          id: '5TeJ5EeSJyw',
          title: 'أهمية تعزيز المهارات الرقمية لدى الأبناء',
          isRaqeemContent: false
        },
        {
          id: 'CWPpEt3bDY4',
          title: 'الدرس (1): شبكة الإنترنت',
          isRaqeemContent: true
        }
      ]
    },
    'job-skills': {
      title: 'مهارات لسوق العمل',
      icon: <TrendingUp className="w-5 h-5" />,
      videos: [
      ]
    },
    'ai': {
      title: 'الذكاء الاصطناعي',
      icon: <Brain className="w-5 h-5" />,
      videos: [
        {
          id: '06h470AiBZ4',
          title: 'مقدمة عن الذكاء الاصطناعي',
          isRaqeemContent: true
        },
        {
          id: 'example2',
          title: 'تطبيقات الذكاء الاصطناعي',
          isRaqeemContent: false
        }
      ]
    },
    'cybersecurity': {
      title: 'الأمن السيبراني',
      icon: <Shield className="w-5 h-5" />,
      videos: [
        {
          id: 'example3',
          title: 'أساسيات الأمن السيبراني',
          isRaqeemContent: true
        }
      ]
    },
    'programming': {
      title: 'البرمجة',
      icon: <Code className="w-5 h-5" />,
      videos: [
        {
          id: 'example4',
          title: 'مقدمة في البرمجة',
          isRaqeemContent: true
        }
      ]
    }
  };

  // إنشاء قائمة جميع الفيديوهات لخيار "الكل"
  const allVideos = Object.keys(videoCategories)
    .filter(key => key !== 'all')
    .reduce((acc, key) => {
      return acc.concat(videoCategories[key].videos);
    }, []);
  
  videoCategories.all.videos = allVideos;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={raqeemLogo} alt="مبادرة رقيم" className="w-12 h-12 rounded-full" />
              <span className="text-xl font-bold text-primary">مبادرة رقيم</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {[
                { label: 'الرئيسية', id: 'home' },
                { label: 'برامجنا', id: 'programs' },
                { label: 'الفريق', id: 'team' },
                { label: 'المدربون', id: 'trainers' },
                { label: 'منصة رقيم', id: 'platform' },
                { label: 'الجهات المتعاونة', id: 'partners' },
                { label: 'تواصل معنا', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-border">
              {[
                { label: 'الرئيسية', id: 'home' },
                { label: 'برامجنا', id: 'programs' },
                { label: 'الفريق', id: 'team' },
                { label: 'المدربون', id: 'trainers' },
                { label: 'منصة رقيم', id: 'platform' },
                { label: 'الجهات المتعاونة', id: 'partners' },
                { label: 'تواصل معنا', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-right py-2 text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center gradient-primary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                مبادرة رقيم
              </h1>
              <p className="text-lg md:text-xl mb-8 leading-relaxed">
                مبادرة شبابية تأسست عام 2024 لرفع الوعي بالتقنية وتعليم الشباب المهارات الرقمية، 
                الذكاء الاصطناعي، البرمجة، الأمن السيبراني، التسويق، والعديد من الدورات والورشات.
              </p>
              <div className="flex gap-4 mb-8">
                <Button 
                  onClick={() => scrollToSection('platform')}
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  استكشف المنصة
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection('programs')}
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  تعرف على برامجنا
                </Button>
              </div>
              <div className="flex gap-4">
                {[
                  { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/people/Raqeemjo/61577884989188/" },
                  { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/raqeem_jo/" },
                  { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/raqee/" },
                  { icon: <Globe className="w-5 h-5" />, href: "https://www.nahno.org/ngo/%D9%85%D8%A8%D8%A7%D8%AF%D8%B1%D8%A9-%D8%B1%D9%82%D9%8A%D9%85-74875" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-white/20 rounded-full flex items-center justify-center animate-float">
                  <img 
                    src={raqeemLogo} 
                    alt="مبادرة رقيم" 
                    className="w-64 h-64 rounded-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover-scale">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-primary mb-2">
                  +{stats.users.toLocaleString()}
                </div>
                <div className="text-muted-foreground">مستفيد</div>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover-scale">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-secondary mb-2">
                  +{stats.courses}
                </div>
                <div className="text-muted-foreground">دورة وورشة</div>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover-scale">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-accent mb-2">
                  {stats.programs}
                </div>
                <div className="text-muted-foreground">برامج رئيسية</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">برامجنا</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="p-6 hover-scale">
                <CardContent className="p-0">
                  <div className="text-primary mb-4">{program.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{program.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">فريق الإدارة</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 text-center hover-scale">
                <CardContent className="p-0">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">المدربون المعتمدون</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trainers.map((trainer, index) => (
              <Card key={index} className="p-6 text-center hover-scale">
                <CardContent className="p-0">
                  <div className="w-20 h-20 bg-gradient-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">{trainer.name}</h3>
                  <p className="text-sm text-muted-foreground">{trainer.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="platform" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              منصة رقيم التعليمية
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              اكتشف مجموعة متنوعة من الدورات والورشات التعليمية المصممة خصيصاً لتطوير مهاراتك الرقمية
            </p>
          </div>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.entries(videoCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <span className="flex items-center gap-2">
                  {category.icon}
                  {category.title}
                  <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                    {category.videos.length}
                  </span>
                </span>
              </button>
            ))}
          </div>

          {/* Videos Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {videoCategories[activeTab].videos.slice(0, showAllVideos ? undefined : 3).map((video, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-md">
                <div className="relative">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center group-hover:bg-gray-50 transition-colors duration-300">
                    {video.videoUrl ? (
                      // للفيديوهات الخارجية باستخدام HLS
                      <HLSPlayer
                        src={video.videoUrl}
                        className="w-full h-full"
                        poster="/api/placeholder/640/360"
                      />
                    ) : (
                      // لفيديوهات اليوتيوب
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    )}
                  </div>
                  {video.isRaqeemContent && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4" fill="white" />
                        رقيم
                      </span>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {video.title}
                  </h3>
                  {video.isRaqeemContent && (
                    <div className="flex items-center gap-2 text-sm text-purple-600 font-medium mb-2">
                      <Award className="w-4 h-4" />
                      محتوى حصري من مبادرة رقيم
                    </div>
                  )}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                     
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Show All Button */}
          {videoCategories[activeTab].videos.length > 3 && (
            <div className="text-center">
              <button
                onClick={() => setShowAllVideos(!showAllVideos)}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                <span className="flex items-center gap-2">
                  {showAllVideos ? (
                    <>
                      <ChevronUp className="w-5 h-5" />
                      عرض أقل
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-5 h-5" />
                      عرض الكل ({videoCategories[activeTab].videos.length} فيديو)
                    </>
                  )}
                </span>
              </button>
            </div>
          )}

          <div className="text-center mt-8 p-6 bg-white/50 rounded-2xl backdrop-blur-sm border border-white/20">
            <p className="text-gray-600 italic">
              بعض هذه الفيديوهات من مبادرة رقيم وأخرى من الإنترنت لدعم رحلة التعلم.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">الجهات المتعاونة</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="p-6 text-center hover-scale">
                <CardContent className="p-0">
                  {partner.logo ? (
                    <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="max-w-full max-h-full object-contain rounded-lg"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Target className="w-10 h-10 text-white" />
                    </div>
                  )}
                  <h3 className="font-bold text-sm">{partner.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">تواصل معنا</h2>
          <div className="max-w-md mx-auto text-center">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="mb-6">
                  <img src={raqeemLogo} alt="مبادرة رقيم" className="w-20 h-20 rounded-full mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">مبادرة رقيم</h3>
                  <p className="text-muted-foreground">نحن هنا للإجابة على استفساراتكم</p>
                </div>
                <div className="space-y-4">
                  <a 
                    href="mailto:baderahusban@gmail.com" 
                    className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Mail className="w-5 h-5" />
                      baderahusban@gmail.com
                    </span>
                  </a>
                  <a 
                    href="tel:0791087449" 
                    className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5" />
                      0791087449
                    </span>
                  </a>
                  <div className="flex justify-center gap-4">
                    {[
                      { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/people/Raqeemjo/61577884989188/" },
                      { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/raqeem_jo/" },
                      { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/raqee/" },
                      { icon: <Globe className="w-5 h-5" />, href: "https://www.nahno.org/ngo/%D9%85%D8%A8%D8%A7%D8%AF%D8%B1%D8%A9-%D8%B1%D9%82%D9%8A%D9%85-74875" }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={raqeemLogo} alt="مبادرة رقيم" className="w-10 h-10 rounded-full" />
            <span className="text-xl font-bold">مبادرة رقيم</span>
          </div>
          <p className="text-primary-foreground/80">
            © 2024 مبادرة رقيم. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
