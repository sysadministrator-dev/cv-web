import type { Profile, WorkExperience, Education, Project } from '@/types';

export const profile: Profile = {
  name: 'Elchin Kuliyev',
  title: 'Senior Cybersecurity Specialist',
  summary: 'I am a Senior Cybersecurity Specialist with deep expertise in network defense, threat detection, and incident response, experienced in securing enterprise infrastructures through vulnerability management, penetration testing, and implementation of ISO 27001 and NIST CSF standards. Proficient in cloud security, identity management, and automation using PowerShell and Python, I focus on building resilient systems, reducing risk exposure, and ensuring data integrity across complex environments.',
  contact: {
    email: 'elchin.kuliyev95@gmail.com',
    telegram: 'https://t.me/SysAdmin4u',
    location: 'Zaporizhzhia, Ukraine',
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
  'Network Security & Firewalls',
  'Threat Detection & Incident Response (SIEM, SOAR, EDR)',
  'Vulnerability Assessment & Penetration Testing',
  'Risk Management & Compliance',
  'Cloud Security (Azure, AWS, Google Cloud)',
  'Identity & Access Management (AD, Azure AD, IAM, MFA)',
  'Security Automation & Scripting (Python, PowerShell, Bash)',
  'Malware Analysis & Forensics',
  'Zero Trust Architecture & Endpoint Protection',
  'Security Policy Development & Awareness Training',
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
