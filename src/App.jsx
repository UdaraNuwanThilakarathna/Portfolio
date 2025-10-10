import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  Download,
  Code,
  Briefcase,
  GraduationCap,
  User,
  ChevronRight,
  Star,
  Calendar,
  Award,
} from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const personalInfo = {
    name: 'Udara Nuwan Thilakarathna',
    title: 'UI/UX Designer & Developer',
    subtitle:
      'Creating intuitive user experiences through thoughtful design and seamless interfaces',
    email: 'udaranthilakarathne2001@gmail.com',
    phone: '078 1156682',
    location: 'Ruwanwella, Sri Lanka',
    linkedin: 'https://linkedin.com/in/udara-nuwan-thilakarathna-7b86b8376',
    github: 'https://github.com/UdaraNuwanThilakarathna',
    image: '/src/image.png',
  };

  const skills = {
    design: [
      { name: 'UI Design', level: 85 },
      { name: 'UX Research', level: 75 },
      { name: 'Wireframing', level: 80 },
      { name: 'Prototyping', level: 80 },
      { name: 'User Testing', level: 70 },
      { name: 'Information Architecture', level: 75 },
      { name: 'Interaction Design', level: 80 },
    ],
    technical: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 80 },
      { name: 'React', level: 75 },
      { name: 'Bootstrap', level: 85 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'Responsive Design', level: 90 },
    ],
    tools: [
      'Figma',
      'Adobe XD',
      'Sketch',
      'InVision',
      'Miro',
      'VS Code',
      'Git',
      'GitHub',
      'Photoshop',
      'Illustrator',
    ],
    languages: ['English', 'Sinhala'],
    softSkills: [
      'User Empathy',
      'Creative Problem Solving',
      'Design Thinking',
      'Team Collaboration',
      'Communication',
      'Time Management',
    ],
    specializations: [
      'Web Design',
      'Mobile UI',
      'Dashboard Design',
      'E-commerce UX',
    ],
  };

  const experience = [
    {
      id: 1,
      title: 'UI/UX Design Student & Practitioner',
      company:
        'Sri Lanka Institute of Advanced Technological Education (SLIATE)',
      period: 'Aug 2023 - Present',
      location: 'Sri Lanka',
      description: [
        'Pursuing Higher National Diploma in Information Technology with focus on UI/UX Design',
        'Developing user-centered design thinking and methodologies',
        'Creating wireframes, prototypes, and user interfaces for web applications',
        'Conducting user research and usability testing for academic projects',
        'Learning design principles, color theory, and typography',
        'Building responsive and accessible web interfaces',
      ],
      technologies: [
        'Figma',
        'HTML',
        'CSS',
        'JavaScript',
        'Bootstrap',
        'Adobe XD',
        'Wireframing',
      ],
    },
    {
      id: 2,
      title: 'Digital Design & Development Student',
      company: 'Vocational Training Authority - Sri Lanka (VTA)',
      period: 'Jan 2023 - Present',
      location: 'Sri Lanka',
      description: [
        'Pursuing NVQ Level 4 in Information and Communication Technology',
        'Focusing on digital design principles and web development',
        'Learning industry-standard design tools and methodologies',
        'Developing skills in user interface design and user experience optimization',
        'Working with design systems and component libraries',
      ],
      technologies: [
        'Figma',
        'Photoshop',
        'Illustrator',
        'HTML',
        'CSS',
        'Bootstrap',
      ],
    },
  ];

  const education = [
    {
      degree: 'Higher National Diploma in Information Technology',
      institution:
        'Sri Lanka Institute of Advanced Technological Education (SLIATE)',
      period: 'Aug 2023 - Aug 2025',
      grade: 'In Progress',
      location: 'Sri Lanka',
    },
    {
      degree:
        'Information and Communication Technology Technician (NVQ Level 4)',
      institution: 'Vocational Training Authority - Sri Lanka (VTA)',
      period: 'Jan 2023 - Jun 2025',
      grade: 'In Progress',
      location: 'Sri Lanka',
    },
  ];

  const projects = [
    {
      id: 1,
      title: 'Portfolio',
      description:
        'Designed a modern and professional portfolio website with focus on user experience and visual appeal. Created wireframes, user journey maps, and implemented responsive design principles. Emphasized clean typography, intuitive navigation, and effective content hierarchy to showcase work and skills.',
      image: '/src/projects/1.png',
      technologies: [
        'Figma',
        'UI Design',
        'UX Research',
        'Wireframing',
        'Responsive Design',
        'Typography',
        'User Journey Mapping',
      ],
      figma:
        'https://www.figma.com/design/5bdxH9MTM4zzQ6SMgjnvQI/Personal-Portfolio-Website-Template--Community-?node-id=0-1&t=OodPNmuXbcIdTK85-1',
      featured: true,
    },
    {
      id: 2,
      title: 'Destination HUB',
      description:
        'Designed a comprehensive travel and destination discovery platform with focus on user engagement and trip planning. Conducted user research, created information architecture, and designed intuitive interfaces for destination browsing, booking, and travel planning. Emphasized visual storytelling and seamless user experience.',
      image: '/src/projects/2.png',
      technologies: [
        'Figma',
        'UI Design',
        'User Research',
        'Information Architecture',
        'Prototyping',
        'Visual Design',
        'User Testing',
      ],
      figma:
        'https://www.figma.com/design/3pKhutyGxQdpPupTD8dQ7e/Untitled?t=3QTpbMuCSSMNbRCX-1',
      featured: true,
    },
   
     {
      id: 3,
      title: 'Modern Library',
      description:
        'Redesigned a modern library management system with emphasis on digital transformation and user-centered design. Implemented design thinking methodology, created user personas, and optimized the interface for book discovery, borrowing, and library services. Focused on accessibility and inclusive design principles.',
      image: '/src/projects/3.png',
      technologies: [
        'Figma',
        'UX Design',
        'User Journey Mapping',
        'Design Thinking',
        'Accessibility Design',
        'User Personas',
        'Information Architecture',
      ],
      figma:
        'https://www.figma.com/design/Mi5DwyQ76dxuuH189nDlYs/Untitled?node-id=0-1&t=3QTpbMuCSSMNbRCX-1', // Add your Figma link here later
      featured: true,
    },
    {
      id: 3,
      title: 'Modern Library',
      description:
        'Redesigned a modern library management system with emphasis on digital transformation and user-centered design. Implemented design thinking methodology, created user personas, and optimized the interface for book discovery, borrowing, and library services. Focused on accessibility and inclusive design principles.',
      image: '/src/projects/3.png',
      technologies: [
        'Figma',
        'UX Design',
        'User Journey Mapping',
        'Design Thinking',
        'Accessibility Design',
        'User Personas',
        'Information Architecture',
      ],
      figma:
        'https://www.figma.com/design/Mi5DwyQ76dxuuH189nDlYs/Untitled?node-id=0-1&t=3QTpbMuCSSMNbRCX-1', // Add your Figma link here later
      featured: true,
    },

  ];

  // Certifications - Currently pursuing academic qualifications
  const certifications = [
    {
      name: 'Higher National Diploma in Information Technology',
      issuer:
        'Sri Lanka Institute of Advanced Technological Education (SLIATE)',
      date: '2025 (Expected)',
      credential: 'In Progress',
    },
    {
      name: 'ICT Technician NVQ Level 4',
      issuer: 'Vocational Training Authority - Sri Lanka (VTA)',
      date: '2025 (Expected)',
      credential: 'In Progress',
    },
  ];

  // Scroll effect for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900'>
      {/* Navigation */}
      <nav className='fixed w-full bg-slate-900/95 backdrop-blur-xl z-50 border-b border-blue-500/20 shadow-lg'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent'>
              {personalInfo.name}
            </div>

            {/* Desktop Menu */}
            <div className='hidden md:flex space-x-8'>
              {['Home', 'About', 'Experience', 'Projects', 'Contact'].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-gray-300 hover:text-blue-400 transition-colors font-medium ${
                      activeSection === item.toLowerCase()
                        ? 'text-blue-400'
                        : ''
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className='md:hidden text-gray-300 hover:text-blue-400 transition-colors p-2'
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label='Toggle menu'
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className='md:hidden bg-slate-900/98 backdrop-blur-xl border-t border-blue-500/20 shadow-xl'>
            <div className='px-4 py-6 space-y-4'>
              {['Home', 'About', 'Experience', 'Projects', 'Contact'].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`block text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium py-3 px-4 w-full text-left rounded-lg hover:bg-blue-500/10 ${
                      activeSection === item.toLowerCase()
                        ? 'text-blue-400 bg-blue-500/10'
                        : ''
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id='home'
        className='min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden'
      >
        {/* Background Elements */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute -top-40 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse'></div>
          <div className='absolute -bottom-40 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000'></div>
        </div>

        <div className='max-w-7xl mx-auto w-full relative z-10'>
          <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center min-h-[calc(100vh-4rem)] py-12 lg:py-0'>
            <div className='text-center lg:text-left order-2 lg:order-1 flex flex-col justify-center'>
              {/* Main heading */}
              <div className='mb-8 lg:mb-10'>
                <h1 className='text-4xl xs:text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.85] mb-4 lg:mb-6'>
                  Hi, I'm{' '}
                  <span className='bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent gradient-text'>
                    {personalInfo.name.split(' ')[0]}
                  </span>
                </h1>
                <h2 className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400'>
                  {personalInfo.title}
                </h2>
              </div>

              {/* Subtitle */}
              <div className='mb-10 lg:mb-12'>
                <p className='text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-2xl leading-relaxed mx-auto lg:mx-0'>
                  {personalInfo.subtitle}
                </p>
              </div>

              {/* Enhanced CTA buttons */}
              <div className='mb-8 lg:mb-10'>
                <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className='px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 font-semibold text-lg transform hover:scale-105 glow'
                  >
                    View My Work
                  </button>
                  <a
                    href='/CV.pdf'
                    download
                    className='px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-full hover:bg-blue-400/10 hover:border-blue-300 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-3 transform hover:scale-105'
                  >
                    <Download size={20} />
                    Download CV
                  </a>
                </div>
              </div>

              {/* Social links */}
              <div className='flex gap-4 justify-center lg:justify-start'>
                <a
                  href={personalInfo.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-14 h-14 bg-slate-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-400 hover:text-white hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 border border-blue-500/20 hover:border-blue-500/50'
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href={personalInfo.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-14 h-14 bg-slate-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-400 hover:text-white hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 border border-blue-500/20 hover:border-blue-500/50'
                >
                  <Github size={22} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className='w-14 h-14 bg-slate-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-400 hover:text-white hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 border border-blue-500/20 hover:border-blue-500/50'
                >
                  <Mail size={22} />
                </a>
              </div>
            </div>

            {/* Enhanced profile image section */}
            <div className='flex justify-center lg:justify-end order-1 lg:order-2 mb-12 lg:mb-0'>
              <div className='relative flex items-center justify-center'>
                {/* Glowing ring effect */}
                <div className='absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full p-1 animate-spin-slow'>
                  <div className='w-full h-full bg-slate-900 rounded-full'></div>
                </div>

                {/* Main profile image */}
                <div className='relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px] rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl'>
                  <img
                    src={personalInfo.image}
                    alt={personalInfo.name}
                    className='w-full h-full object-cover hover:scale-110 transition-transform duration-700'
                  />
                  {/* Overlay gradient */}
                  <div className='absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent'></div>
                </div>

                {/* Floating elements - better positioned and sized */}
                <div className='absolute -top-4 -left-4 sm:-top-6 sm:-left-6 lg:-top-8 lg:-left-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full p-3 sm:p-4 lg:p-5 shadow-xl animate-bounce'>
                  <Code className='text-white' size={24} />
                </div>
                <div className='absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-bottom-8 lg:-right-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-3 sm:p-4 lg:p-5 shadow-xl animate-bounce delay-1000'>
                  <Star className='text-white' size={24} />
                </div>
                <div className='absolute top-1/2 -right-6 sm:-right-8 lg:-right-10 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full p-3 sm:p-4 lg:p-4 shadow-xl animate-pulse'>
                  <Briefcase className='text-white' size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className='absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block'>
          <button
            onClick={() => scrollToSection('about')}
            className='w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center hover:border-blue-400 transition-colors'
          >
            <div className='w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse'></div>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-16 sm:py-20 px-4 bg-slate-800/30'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
              About Me
            </h2>
            <div className='w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto'></div>
          </div>

          <div className='grid lg:grid-cols-3 gap-12'>
            {/* Bio */}
            <div className='lg:col-span-2'>
              <div className='bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20'>
                <h3 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
                  <User className='text-blue-400' />
                  Who I Am
                </h3>
                <p className='text-gray-300 leading-relaxed mb-6'>
                  I'm a passionate UI/UX designer and developer with a strong
                  foundation in user-centered design principles. Through
                  academic projects and self-directed learning, I've developed
                  skills in user research, wireframing, prototyping, and
                  creating intuitive digital experiences that solve real user
                  problems.
                </p>
                <p className='text-gray-300 leading-relaxed mb-6'>
                  I believe great design happens at the intersection of user
                  needs, business goals, and technical possibilities. I'm
                  looking for a UI/UX design internship where I can contribute
                  to meaningful projects, learn from experienced designers, and
                  help create products that make a positive impact on users'
                  lives.
                </p>

                {/* Contact Info */}
                <div className='grid sm:grid-cols-2 gap-4 mt-8'>
                  <div className='flex items-center gap-3 text-gray-300'>
                    <Mail className='text-blue-400' size={20} />
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className='hover:text-blue-400 transition-colors'
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className='flex items-center gap-3 text-gray-300'>
                    <Phone className='text-blue-400' size={20} />
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className='flex items-center gap-3 text-gray-300'>
                    <MapPin className='text-blue-400' size={20} />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className='flex items-center gap-4'>
                    <a
                      href={personalInfo.linkedin}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-400 hover:text-blue-300 transition-colors'
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={personalInfo.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-400 hover:text-blue-300 transition-colors'
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className='space-y-8'>
              {/* Design Skills */}
              <div className='bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20'>
                <h3 className='text-xl font-bold text-white mb-6'>
                  Design Skills
                </h3>
                <div className='space-y-4'>
                  {skills.design.map((skill, index) => (
                    <div key={index}>
                      <div className='flex justify-between text-gray-300 mb-2'>
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className='w-full bg-slate-700 rounded-full h-2'>
                        <div
                          className='bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000'
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills */}
              <div className='bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20'>
                <h3 className='text-xl font-bold text-white mb-6'>
                  Technical Skills
                </h3>
                <div className='space-y-4'>
                  {skills.technical.map((skill, index) => (
                    <div key={index}>
                      <div className='flex justify-between text-gray-300 mb-2'>
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className='w-full bg-slate-700 rounded-full h-2'>
                        <div
                          className='bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000'
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Design Tools */}
              <div className='bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20'>
                <h3 className='text-xl font-bold text-white mb-6'>
                  Design Tools
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {skills.tools.map((tool, index) => (
                    <span
                      key={index}
                      className='px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium'
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specializations */}
              <div className='bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20'>
                <h3 className='text-xl font-bold text-white mb-6'>
                  Specializations
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {skills.specializations.map((spec, index) => (
                    <span
                      key={index}
                      className='px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium'
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className='bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20'>
                <h3 className='text-xl font-bold text-white mb-6'>Languages</h3>
                <div className='space-y-2'>
                  {skills.languages.map((language, index) => (
                    <div key={index} className='flex items-center gap-2'>
                      <Star className='text-blue-400' size={16} />
                      <span className='text-gray-300'>{language}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Design Skills */}
              <div className='bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20'>
                <h3 className='text-xl font-bold text-white mb-6'>
                  Design Mindset
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {skills.softSkills.map((skill, index) => (
                    <span
                      key={index}
                      className='px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id='experience' className='py-16 sm:py-20 px-4'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
              Experience & Education
            </h2>
            <div className='w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto'></div>
          </div>

          <div className='grid lg:grid-cols-2 gap-12'>
            {/* Experience */}
            <div>
              <h3 className='text-2xl font-bold text-white mb-8 flex items-center gap-3'>
                <Briefcase className='text-blue-400' />
                Work Experience
              </h3>
              <div className='space-y-8'>
                {experience.map((job) => (
                  <div
                    key={job.id}
                    className='bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-colors'
                  >
                    <div className='flex items-start justify-between mb-4'>
                      <div>
                        <h4 className='text-xl font-bold text-white mb-1'>
                          {job.title}
                        </h4>
                        <p className='text-blue-400 font-semibold'>
                          {job.company}
                        </p>
                        <p className='text-gray-400 text-sm'>{job.location}</p>
                      </div>
                      <div className='flex items-center gap-2 text-gray-400 text-sm'>
                        <Calendar size={16} />
                        {job.period}
                      </div>
                    </div>

                    <ul className='space-y-2 mb-4'>
                      {job.description.map((item, index) => (
                        <li
                          key={index}
                          className='text-gray-300 flex items-start gap-2'
                        >
                          <ChevronRight
                            className='text-blue-400 mt-1 flex-shrink-0'
                            size={16}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className='flex flex-wrap gap-2'>
                      {job.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className='px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs font-medium'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div>
              <h3 className='text-2xl font-bold text-white mb-8 flex items-center gap-3'>
                <GraduationCap className='text-blue-400' />
                Education
              </h3>
              <div className='space-y-6 mb-12'>
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className='bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20'
                  >
                    <h4 className='text-xl font-bold text-white mb-2'>
                      {edu.degree}
                    </h4>
                    <p className='text-blue-400 font-semibold mb-1'>
                      {edu.institution}
                    </p>
                    <p className='text-gray-400 text-sm mb-2'>{edu.location}</p>
                    <div className='flex items-center justify-between'>
                      <span className='text-gray-300'>Grade: {edu.grade}</span>
                      <span className='text-gray-400 text-sm flex items-center gap-1'>
                        <Calendar size={16} />
                        {edu.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className='text-2xl font-bold text-white mb-8 flex items-center gap-3'>
                <Award className='text-blue-400' />
                Certifications
              </h3>
              <div className='space-y-4'>
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className='bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 border border-blue-500/20'
                  >
                    <h4 className='text-lg font-bold text-white mb-1'>
                      {cert.name}
                    </h4>
                    <p className='text-blue-400 mb-1'>{cert.issuer}</p>
                    <div className='flex items-center justify-between text-sm'>
                      <span className='text-gray-400'>
                        ID: {cert.credential}
                      </span>
                      <span className='text-gray-400'>{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='py-16 sm:py-20 px-4 bg-slate-800/30'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
              Featured 
            </h2>
            <div className='w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto'></div>
          </div>

          <div className='grid md:grid-cols-4 lg:grid-cols-4 gap-8'>
            {projects.map((project) => (
              <div
                key={project.id}
                className='group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 border border-blue-500/20 hover:border-blue-500/50'
              >
                <div className='relative overflow-hidden'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-300'
                    loading='lazy'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60'></div>
                  {project.featured && (
                    <div className='absolute top-4 left-4 px-3 py-1 bg-blue-500 text-white rounded-full text-xs font-medium'>
                      Featured
                    </div>
                  )}
                </div>

                <div className='p-6'>
                  <h3 className='text-xl font-bold text-white mb-2'>
                    {project.title}
                  </h3>
                  <p className='text-gray-400 mb-4 text-sm'>
                    {project.description}
                  </p>

                  <div className='flex flex-wrap gap-1.5 mb-4'>
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className='px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs font-medium'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className='flex gap-4 justify-center'>
                    {project.figma !== '#' ? (
                      <a
                        href={project.figma}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium'
                      >
                        <svg
                          width={16}
                          height={16}
                          viewBox='0 0 24 24'
                          fill='currentColor'
                        >
                          <path d='M15.5 0h-7C6.57 0 5 1.57 5 3.5S6.57 7 8.5 7h7C17.43 7 19 5.43 19 3.5S17.43 0 15.5 0zM8.5 9C6.57 9 5 10.57 5 12.5S6.57 16 8.5 16 12 14.43 12 12.5V9H8.5zM15.5 9C13.57 9 12 10.57 12 12.5S13.57 16 15.5 16 19 14.43 19 12.5 17.43 9 15.5 9zM8.5 18C6.57 18 5 19.57 5 21.5S6.57 25 8.5 25 12 23.43 12 21.5V18H8.5z' />
                        </svg>
                        View Design
                      </a>
                    ) : (
                      <span className='flex items-center gap-2 text-gray-500 text-sm font-medium'>
                        <svg
                          width={16}
                          height={16}
                          viewBox='0 0 24 24'
                          fill='currentColor'
                        >
                          <path d='M15.5 0h-7C6.57 0 5 1.57 5 3.5S6.57 7 8.5 7h7C17.43 7 19 5.43 19 3.5S17.43 0 15.5 0zM8.5 9C6.57 9 5 10.57 5 12.5S6.57 16 8.5 16 12 14.43 12 12.5V9H8.5zM15.5 9C13.57 9 12 10.57 12 12.5S13.57 16 15.5 16 19 14.43 19 12.5 17.43 9 15.5 9zM8.5 18C6.57 18 5 19.57 5 21.5S6.57 25 8.5 25 12 23.43 12 21.5V18H8.5z' />
                        </svg>
                        Design Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-16 sm:py-20 px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
            Let's Work Together
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8'></div>
          <p className='text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto'>
            I'm passionate about creating user-centered designs that solve real
            problems. Let's collaborate to build intuitive and engaging digital
            experiences together.
          </p>

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
            <a
              href={`mailto:${personalInfo.email}`}
              className='bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-colors group text-center'
            >
              <Mail
                className='text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform'
                size={32}
              />
              <h3 className='text-white font-semibold mb-2'>Email</h3>
              <p className='text-gray-400'>{personalInfo.email}</p>
            </a>

            <a
              href={personalInfo.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-colors group text-center'
            >
              <Linkedin
                className='text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform'
                size={32}
              />
              <h3 className='text-white font-semibold mb-2'>LinkedIn</h3>
              <p className='text-gray-400'>Connect with me</p>
            </a>

            <a
              href={personalInfo.github}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-colors group text-center sm:col-span-2 lg:col-span-1'
            >
              <Github
                className='text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform'
                size={32}
              />
              <h3 className='text-white font-semibold mb-2'>GitHub</h3>
              <p className='text-gray-400'>View my work</p>
            </a>
          </div>

          <div className='flex flex-col xs:flex-row gap-4 justify-center'>
            <a
              href={`mailto:${personalInfo.email}`}
              className='px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all font-medium'
            >
              Get In Touch
            </a>
            <a
              href='/CV.pdf'
              download
              className='px-8 py-3 border border-blue-400 text-blue-400 rounded-full hover:bg-blue-400/10 transition-all font-medium flex items-center justify-center gap-2'
            >
              <Download size={20} />
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-8 px-4 border-t border-blue-500/20'>
        <div className='max-w-7xl mx-auto text-center'>
          <p className='text-gray-400'>
            &copy; 2025 {personalInfo.name}. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
