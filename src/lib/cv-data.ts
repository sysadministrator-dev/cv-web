import type { Profile, WorkExperience, Education, Project } from '@/types';

export const profile: Profile = {
  name: 'Elchin Kuliyev',
  title: 'Senior Cybersecurity Specialist',
  summary: 'A highly motivated and experienced Cybersecurity Specialist with over 8 years of experience in threat analysis, network security, and incident response. Proven ability to protect organizational assets by identifying and mitigating security vulnerabilities. Seeking to leverage expertise in a challenging role within a forward-thinking organization.',
  contact: {
    email: 'elchin.kuliyev95@gmail.com',
    telegram: 'https://t.me/SysAdmin4u',
    location: 'San Francisco, CA',
    linkedin: 'https://linkedin.com/in/elchinkuliyevsec',
    github: 'https://github.com/elchinkuliyevsec',
  },
};

export const workExperience: WorkExperience[] = [
  {
    company: 'SecureNet Solutions',
    title: 'Senior Cybersecurity Analyst',
    period: 'Jan 2019 - Present',
    responsibilities: [
      'Led the incident response team, reducing mean time to resolution (MTTR) by 40%.',
      'Engineered and deployed a new SIEM solution, improving threat detection capabilities by 60%.',
      'Conducted regular penetration testing and vulnerability assessments on corporate infrastructure.',
      'Developed and enforced security policies and procedures across the organization.',
    ],
  },
  {
    company: 'CyberCorp Inc.',
    title: 'Network Security Engineer',
    period: 'Jun 2015 - Dec 2018',
    responsibilities: [
      'Managed and configured firewalls, VPNs, and intrusion detection/prevention systems.',
      'Monitored network traffic for suspicious activity and potential threats.',
      'Assisted in the investigation and analysis of security breaches.',
      'Provided security awareness training to employees.',
    ],
  },
];

export const education: Education[] = [
  {
    institution: 'Stanford University',
    degree: 'M.S. in Computer Science, Specialization in Cybersecurity',
    year: '2015',
  },
  {
    institution: 'University of California, Berkeley',
    degree: 'B.S. in Electrical Engineering and Computer Sciences',
    year: '2013',
  },
];

export const skills: string[] = [
  'Incident Response',
  'SIEM (Splunk, ELK Stack)',
  'Penetration Testing',
  'Vulnerability Assessment',
  'Network Security',
  'Firewall Management',
  'Intrusion Detection Systems (IDS)',
  'Cryptography',
  'Python',
  'Bash Scripting',
  'ISO 27001',
  'NIST Framework',
  'Cloud Security (AWS, Azure)',
  'Malware Analysis',
];

export const projects: Project[] = [
  {
    name: 'Threat-Intel-Aggregator',
    description: 'A Python-based tool that aggregates threat intelligence feeds from various open-source platforms into a unified dashboard. Helps in proactive threat hunting.',
    technologies: ['Python', 'Flask', 'Elasticsearch', 'Docker'],
    link: 'https://github.com/elchinkuliyevsec/threat-intel-aggregator',
  },
  {
    name: 'Automated Phishing Response System',
    description: 'Developed a script to automate the analysis of reported phishing emails, extract indicators of compromise (IOCs), and block them at the network edge.',
    technologies: ['Python', 'Office 365 API', 'PowerShell'],
    link: 'https://github.com/elchinkuliyevsec/phishing-response',
  },
];
