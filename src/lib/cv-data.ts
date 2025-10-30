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
    name: 'State Mail Infrastructure (*.gov.az)',
    description: 'Created and configured the mail infrastructure for a government agency. Configured security, conducted regular security audits and stress tests. Configured white and black lists, security policies and spam filters.',
    technologies: ['Mail Server Administration', 'Security Auditing', 'Spam Filtering', 'Policy Implementation'],
  },
  {
    name: 'Corporate Mail Solution (*.az)',
    description: 'Engineered a secure mail system for a major organization. Implemented robust security measures, including routine audits and performance stress testing. Managed email flow control with allowlists, blocklists, and advanced spam filtering policies.',
    technologies: ['Secure Email Gateway', 'Performance Tuning', 'Threat Analysis', 'Infrastructure Design'],
  },
  {
    name: 'Azerbaijan Ombudsman Infrastructure Security',
    description: 'Led the complete setup and security hardening of the infrastructure for the Commissioner for Human Rights of the Republic of Azerbaijan. Responsible for cybersecurity, IDS/IPS and SIEM configuration, user access control for highly confidential documents, and successful DDoS mitigation.',
    technologies: ['Infrastructure Security', 'SIEM/IDS/IPS', 'DDoS Mitigation', 'Access Control', 'Data Secrecy'],
  },
  {
    name: 'AZERTAC - State News Agency Infrastructure',
    description: 'Architected the entire IT infrastructure for the Azerbaijan State News Agency. Implemented a multi-layered security strategy, conducted comprehensive security audits, and established continuous server monitoring. Responsibilities included threat modeling, incident response planning, and ensuring high availability of critical news services.',
    technologies: ['Threat Modeling', 'Incident Response', 'Server Hardening', 'High Availability', 'Security Auditing'],
  },
];
