import { useState, useEffect } from 'react';
import { ChevronDown, Target, TrendingUp, Mail, Phone, Linkedin, Award, Users, Lightbulb, Rocket, ExternalLink, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills',  'education', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "Project Management Professional with 3+ years of experience leading cross-functional coordination, compliance initiatives, and stakeholder reporting across healthcare, education, and nonprofit sectors. Managed recruitment for 70+ participants, tracked budgets and grants, and delivered dashboards improving KPI visibility by 40%. Proficient in Smartsheet and MS Project for scheduling, documentation, and performance tracking.";

  
  
  const experience = [
    {
      company: "JBIER Inc.",
      role: "Project Manager & Business Development Co-op",
      location: "Boston, MA",
      dates: "Jan – Jul 2025",
      highlights: [
        "Directed cross-functional scheduling across 5 departments reducing turnaround time by 25%.",
        "Secured 8+ strategic collaborations improving vendor compliance tracking.",
        "Monitored budgets, invoices, and grants with zero audit discrepancies.",
        "Built Smartsheet dashboards increasing KPI visibility by 40%."
      ]
    },
    {
      company: "Northeastern Club Sports",
      role: "Carter Field Assistant",
      location: "Boston, MA",
      dates: "Sep 2024 – Aug 2025",
      highlights: [
        "Scheduled 40+ monthly athletic events increasing attendance by 15%.",
        "Reduced operational delays by 30% via improved coordination.",
        "Trained 10+ staff improving task accuracy by 25%."
      ]
    },
    {
      company: "Dawchem Pharmaceuticals Pvt. Ltd.",
      role: "Corporate Affairs Manager",
      location: "Pune, India",
      dates: "Jun 2020 – Sep 2022",
      highlights: [
        "Reduced audit documentation errors by 35% achieving full regulatory compliance.",
        "Standardized reporting systems cutting review cycles by 25%.",
        "Managed cross-functional execution for $1.2M+ corporate audits."
      ]
    },
    {
      company: "Ashraya Initiative for Children",
      role: "Communications & Fundraising Intern",
      location: "Pune, India",
      dates: "Oct 2022 – Jan 2023",
      highlights: [
        "Delivered community programs impacting 650+ beneficiaries.",
        "Improved engagement by 30% through revamped training materials.",
        "Improved outreach efficiency by 25% using KPI reports."
      ]
    },
    {
      company: "Poona Hospital Research Centre",
      role: "Clinical Intern",
      location: "Pune, India",
      dates: "Nov 2021 – Dec 2021",
      highlights: [
        "Standardized 50+ clinical case records improving reporting accuracy.",
        "Improved documentation workflows increasing efficiency by 20%."
      ]
    }
  ];



  
  
  const projects = [
    {
      title: "Smartsheet Governance & Optimization Strategy",
      subtitle: "Enterprise Dashboard Optimization",
      category: "Project Governance",
      introduction: "Designed enterprise Smartsheet dashboards tracking 200+ licenses and automation KPIs.",
      problem: "Lack of centralized governance visibility across departments.",
      objective: "Improve license governance and renewal decision accuracy.",
      methodology: [
        "Built dashboard prototypes for license utilization tracking.",
        "Aligned stakeholders via Trello project workflows."
      ],
      results: [
        "Improved governance visibility by 35%.",
        "Streamlined renewal tracking and portfolio decisions."
      ],
      conclusion: "Demonstrated scalable governance design and stakeholder alignment."
    },
    {
      title: "Grammarly AI Marketing Campaign Risk Management",
      subtitle: "PMI-Based Risk Framework",
      category: "Risk Management",
      introduction: "Developed comprehensive risk management plan for $600K campaign.",
      problem: "High project variance due to unmanaged risks.",
      objective: "Reduce delivery risk and budget deviation.",
      methodology: [
        "Created live risk register, heat map, and WBS.",
        "Embedded real-time monitoring in MS Project."
      ],
      results: [
        "Reduced project variance by 30%.",
        "Improved reporting accuracy by 40%."
      ],
      conclusion: "Strengthened enterprise risk governance practices."
    },
    {
      title: "Business Analysis for Strategic Brand Development",
      subtitle: "Market & KPI Analytics",
      category: "Business Analysis",
      introduction: "Analyzed customer surveys and market datasets for brand positioning.",
      problem: "Limited insight into engagement drivers.",
      objective: "Improve strategic alignment and visibility.",
      methodology: [
        "Analyzed 200+ survey responses.",
        "Defined KPI tracking models for SEO and referrals."
      ],
      results: [
        "Improved insight accuracy by 35%.",
        "Boosted visibility and alignment by 25%."
      ],
      conclusion: "Delivered data-backed strategy insights."
    }
  ];



  
  
  const skillCategories = [
    {
      icon: Target,
      title: 'Project Management',
      skills: ['Agile', 'Scope Management', 'Risk Assessment', 'Budget Forecasting', 'Compliance Auditing', 'Portfolio Management']
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Reporting',
      skills: ['Power BI', 'Tableau', 'Advanced Excel', 'SQL (Basic)', 'KPI Dashboards']
    },
    {
      icon: Users,
      title: 'Tools & Platforms',
      skills: ['Smartsheet', 'MS Project', 'Jira', 'Confluence', 'Trello', 'Asana', 'SharePoint']
    },
    {
      icon: Lightbulb,
      title: 'Operations',
      skills: ['Workflow Automation', 'Stakeholder Communication', 'Documentation', 'Audit Readiness']
    }
  ];





  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-display text-black tracking-wide">PINAKINI DAWRA</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                    activeSection === item.id ? 'text-black font-medium' : 'text-brown hover:text-black'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-12">
              <img 
                src="images/image.png"
                alt="Pinakini Dawra"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-display text-black mb-6 tracking-wide">
              PINAKINI DAWRA
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
            Project Manager | Project Coordinator | Project Administrator
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-brown/80 mb-1">
              BOSTON, MA, USA
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                🔧 VIEW EXPERIENCE
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                📬 CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'UPTIME SUPPORTED', value: '100%', detail: 'Compliance Delivery' },
              { label: 'AUTOMATION IMPACT', value: '40%', detail: 'KPI Visibility Boost' },
              { label: 'TOOLKIT', value: 'Smartsheet · MS Project', detail: 'Power BI · Tableau' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown 
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Tier-1/Tier-2 support specialist who blends automation, cloud awareness, and documentation discipline to keep hybrid environments healthy.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: 'Incident Readiness',
                detail: 'Built runbooks, on-call notes, and Splunk dashboards to triage outages faster and prevent repeat issues.'
              },
              {
                icon: Rocket,
                title: 'Automation Mindset',
                detail: 'Python + SQL scripts across logs, ETL, and validation workflows cut manual toil by 30-40%.'
              },
              {
                icon: Lightbulb,
                title: 'People-First Support',
                detail: 'Partner with engineering, ops, and business teams to translate technical fixes into user-friendly updates.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Focused on resilient infrastructure, accessible support, and measurable uptime.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} · {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto  px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Automation, analytics, and infrastructure projects that pair uptime goals with user empathy.
            </p>
          </div>
          <div className="flex justify-center">
          <div className="grid  gap-8 justify-items-center place-content-center">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 w-full max-w-[320px]"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>
                <div className="mt-4 flex items-center text-brown hover:text-black transition-colors">
                  <span className="text-sm font-light">View Details</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Need implementation breakdowns or architecture diagrams?
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 font-regular italic"
              >
                Reach out for detailed case studies and logs.
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Hands-on support, automation, and reporting toolkit
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Education */}
      <section id="education" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-display text-black tracking-wide">Northeastern University</h3>
                <p className="text-brown font-medium">Master of Science · Project Management</p>
              </div>
              <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                Sep 2023 – Aug 2025
              </div>
            </div>
            <p className="text-brown leading-relaxed font-light">
              Coursework blending distributed systems, cloud design, and analytics—reinforcing the infrastructure mindset I bring to support roles.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display mb-8 tracking-wide">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let’s troubleshoot, automate, or brainstorm how to keep your environment resilient.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a 
                href="tel:+19257655000"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (857) 316-7993
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a 
                href="https://www.linkedin.com/in/pinakini-dawra/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a 
                href="mailto:dawrapinakini05@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                dawrapinakini05@gmail.com
              </a>
            </div>
            {/* <div className="flex items-center">
              <ExternalLink className="w-6 h-6 text-brown mr-6" />
              <a 
                href="https://git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2025 Pinakini Dawra · Technical Support & Infrastructure.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;