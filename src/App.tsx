import { useState, useEffect } from 'react';
import { ChevronDown, Target, TrendingUp, Mail, Phone, Linkedin, Award, Users, Lightbulb, Rocket, ExternalLink, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'certifications', 'education', 'contact'];
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

  const summary = "IT Support and Systems Analyst with 3+ years in hybrid cloud environments spanning financial, academic, and SaaS orgs. Experienced with Python, SQL, AWS (Lambda, S3), ServiceNow, Splunk, IAM, DNS/VPN/VLAN, and Tier-1/Tier-2 workflows. I’m known for calm incident response, repeatable SOPs, and empathetic troubleshooting.";

  const experience = [
    {
      company: "RebusAI (Upskill.Guru)",
      role: "Infrastructure & Technical Support Intern",
      location: "Fremont, CA",
      dates: "Sep 2025 – Present",
      highlights: [
        "Administer analytics + infrastructure across five prod environments and resolve access/configuration issues to sustain 99.8% uptime.",
        "Automate log monitoring and validation scripts in Python, cutting diagnostic time by 30% while improving response speed.",
        "Implement and maintain Looker + SQL dashboards used by internal teams to reduce report turnaround by 15%.",
        "Partner with engineering to troubleshoot latency, permissions, and server-side errors, shortening ticket cycles by 25%.",
        "Document recurring incidents and SOPs to keep Tier-1/Tier-2 handoffs consistent for global users."
      ]
    },
    {
      company: "Aenergi Inc.",
      role: "Technical & Systems Support Intern",
      location: "Remote",
      dates: "Jan 2025 – May 2025",
      highlights: [
        "Diagnosed data-sync, API, and performance issues for real-time monitoring platforms in the U.S. and Germany to uphold 99% uptime.",
        "Integrated 10+ operational metrics into centralized dashboards to accelerate detection and root-cause visibility.",
        "Collaborated with engineering and DevOps on pipeline fixes, improving stability by 25%.",
        "Authored SOPs and troubleshooting docs that cut onboarding time by 50% and standardized global support processes."
      ]
    },
    {
      company: "Modern Insecticides Ltd.",
      role: "IT Systems & Data Operations Analyst",
      location: "Ludhiana, India",
      dates: "Oct 2020 – Dec 2021",
      highlights: [
        "Maintained SQL-driven data pipelines powering multi-department operations, increasing reliability and reporting accuracy by 25%.",
        "Resolved integrity and access issues across Finance and Operations, reducing incident backlogs by 30% with 98% SLA compliance.",
        "Automated recurring reporting workflows in Python + SQL, trimming manual work by 40% and speeding decisions.",
        "Launched dashboards tracking system health to help leadership spot bottlenecks 20% faster."
      ]
    }
  ];

  const projects = [
    {
      title: "LLM Support Chatbot",
      subtitle: "AWS Bedrock + Retrieval-Augmented Generation",
      category: "Tier-1 Automation",
      introduction: "Architected a 24/7 internal support assistant that blends AWS Bedrock and RAG pipelines to deflect Tier-1 tickets.",
      problem: "High-volume repetitive tickets slowed support queues and masked critical incidents.",
      objective: "Automate first-response knowledge queries while keeping IAM-compliant access controls.",
      methodology: [
        "Provisioned Bedrock agents, S3 knowledge stores, and Lambda orchestration.",
        "Embedded RBAC signals, ServiceNow context, and Splunk alerts in retrieval prompts.",
        "Deployed a Node.js chat interface into internal workflows with guardrails for escalation."
      ],
      results: [
        "Reduced Tier-1 backlog by 45% and improved time-to-first-response for remaining tickets.",
        "Delivered context-aware answers that respected IAM scopes and audit logging.",
        "Freed analysts to focus on Tier-2 investigations without missing SLAs."
      ],
      conclusion: "Demonstrated how AI copilots can coexist with compliance-heavy ITSM processes without sacrificing accuracy."
    },
    {
      title: "Power BI Airline Dashboard",
      subtitle: "Flight Operations Analytics",
      category: "Data Visibility",
      introduction: "Built Power BI dashboards unifying ETL pipelines, SQL models, and Splunk traces to monitor airline KPIs.",
      problem: "Manual reporting delayed visibility into route performance and ops anomalies.",
      objective: "Automate KPI refreshes and enable real-time decision making for IT/ops stakeholders.",
      methodology: [
        "Modeled T-SQL views and Power Query transformations for on-time metrics, load factors, and finance KPIs.",
        "Streamed Splunk log signals into dataflows for proactive incident detection.",
        "Designed DAX measures and interactive reports for leadership and support teams."
      ],
      results: [
        "Cut manual reporting effort by 40% and delivered single-source dashboards.",
        "Improved cross-team alignment with shared metrics for operations, finance, and IT.",
        "Surfaced anomalies earlier, driving quicker mitigation for customer-impacting incidents."
      ],
      conclusion: "Reinforced my ability to bridge data engineering, visualization, and operational readiness."
    },
    {
      title: "SentinelAI – IP Protection Platform",
      subtitle: "FastAPI + AWS S3 + Terraform",
      category: "Platform Reliability",
      introduction: "Shipped a containerized backend that automates environment provisioning and performance analytics for IP enforcement teams.",
      problem: "Manual deployments and blind spots in latency/performance hindered release velocity.",
      objective: "Modernize infrastructure with IaC, CI/CD, and telemetry for proactive support.",
      methodology: [
        "Containerized FastAPI services, configured S3 storage, and orchestrated infra via Terraform + Kubernetes.",
        "Instrumented latency monitors and analytics scripts to inform release gates.",
        "Automated CI/CD pipelines to standardize testing and deployment."
      ],
      results: [
        "Maintained 99% uptime with predictable environment spin-up.",
        "Improved release efficiency by 35% and reduced manual deployment effort.",
        "Built feedback loops between support metrics and engineering roadmaps."
      ],
      conclusion: "Combined DevOps fundamentals with support empathy to keep user trust high."
    }
  ];

  const skillCategories = [
    {
      icon: Target,
      title: 'IT Support & Infrastructure',
      skills: ['Windows & macOS Support', 'AV/Zoom & Helpdesk', 'Endpoint Management', 'IAM (Shibboleth, AD)', 'VPN/DNS/VLAN', 'ServiceNow', 'Linux/Unix (Basic)']
    },
    {
      icon: TrendingUp,
      title: 'Cloud & Monitoring',
      skills: ['AWS (Lambda, S3, Bedrock)', 'Splunk Dashboards', 'Cloud Security & RBAC', 'Role-Based Access Control', 'ASP.NET (Basic)']
    },
    {
      icon: Users,
      title: 'Data & Reporting',
      skills: ['SQL (T-SQL, PostgreSQL)', 'Power BI & DAX', 'Python ETL (Pandas)', 'Tableau', 'Data Quality & BI Reporting']
    },
    {
      icon: Lightbulb,
      title: 'Ops & Documentation',
      skills: ['SOP Creation', 'Workflow Optimization', 'Audit & Compliance Docs', 'Incident Response Playbooks']
    }
  ];

  const certifications = [
    'CompTIA A+',
    'AWS Certified SysOps Administrator — Associate',
    'AWS Academy Cloud Foundations',
    'AWS Academy Cloud Security Builder',
    'Microsoft PL-300: Power BI Data Analyst',
    'Box Intelligent Content Management (Admin)'
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-display text-black tracking-wide">HARPREET KAUR</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'certifications', label: 'Certs' },
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
                alt="Harpreet Kaur"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-display text-black mb-6 tracking-wide">
              HARPREET KAUR
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              TECHNICAL SUPPORT ENGINEER | IT INFRASTRUCTURE ANALYST
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-brown/80 mb-1">
              FREMONT, CA · HYBRID/REMOTE READY
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
              { label: 'UPTIME SUPPORTED', value: '99%+', detail: 'Global SaaS + Ops' },
              { label: 'AUTOMATION IMPACT', value: '45%', detail: 'Tier-1 deflection' },
              { label: 'TOOLKIT', value: 'Python · SQL · AWS', detail: 'ServiceNow · Splunk' }
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
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Automation, analytics, and infrastructure projects that pair uptime goals with user empathy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
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

      {/* Certifications */}
      <section id="certifications" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">CERTIFICATIONS</h2>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Credentials that reinforce day-to-day systems work.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center bg-cream p-6 rounded-sm border border-brown/10 shadow-sm">
                <Award className="w-6 h-6 text-brown mr-4" />
                <span className="text-brown font-medium">{cert}</span>
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
                <h3 className="text-2xl font-display text-black tracking-wide">San Francisco Bay University</h3>
                <p className="text-brown font-medium">Master of Science · Computer Science</p>
              </div>
              <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                Fremont, CA · Apr 2024 – Dec 2025
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
                +1 (925) 765-5000
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a 
                href="https://www.linkedin.com/in/harpreet-kaur-hira/"
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
                href="mailto:preetaura15@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                preetaura15@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <ExternalLink className="w-6 h-6 text-brown mr-6" />
              <a 
                href="https://git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2025 Harpreet Kaur · Technical Support & Infrastructure.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;