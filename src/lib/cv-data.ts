
import type { Profile, WorkExperience, Certification, Project } from '@/types';

export const profile: Profile = {
  name: 'Elchin Kuliyev',
  title: 'Senior Cybersecurity Specialist',
  summary: 'Results-driven Senior Cybersecurity Specialist with over 9 years of hands-on experience in architecting and maintaining secure enterprise environments. My expertise lies in deploying and managing advanced security solutions, including SIEM, SOAR, and EDR platforms to proactively identify and mitigate threats. I am proficient in conducting in-depth vulnerability assessments and penetration tests, utilizing tools like Nessus, Burp Suite, and Metasploit. My background includes implementing robust security frameworks such as ISO 27001 and the NIST Cybersecurity Framework (CSF), ensuring compliance and reducing organizational risk. I possess strong skills in cloud security across Azure and AWS, focusing on Identity and Access Management (IAM), network security groups, and secure configuration. I leverage automation through Python and PowerShell to streamline security operations, from incident response playbooks to compliance auditing. My focus is on engineering resilient, Zero Trust architectures that protect critical data and infrastructure against emerging cyber threats.',
  contact: {
    email: 'elchin.kuliyev95@gmail.com',
    telegram: 'https://t.me/SysAdmin4u',
    location: 'Zaporizhzhia, Ukraine',
    linkedin: 'https://www.linkedin.com/in/elchin-k-36299b380/',
    github: 'https://github.com/sysadministrator-dev',
  },
};

export const workExperience: WorkExperience[] = [
  {
    company: 'AZERTAC - State News Agency',
    title: 'Lead Infrastructure & Security Architect',
    period: 'Jan 2019 - Present',
    responsibilities: [
      'Architected and led the greenfield deployment of the entire IT infrastructure for the national news agency.',
      'Implemented a multi-layered defense-in-depth security strategy, including comprehensive server hardening and network segmentation to protect critical assets.',
      'Established a continuous monitoring framework using Zabbix and Grafana, providing real-time visibility into system health and security posture.',
      'Developed and executed comprehensive threat modeling exercises and created robust incident response plans to ensure service integrity and high availability.',
      'Conducted regular security audits and vulnerability assessments to identify and mitigate potential risks proactively.',
    ],
  },
  {
    company: 'The Ombudsman Office of Azerbaijan',
    title: 'Cybersecurity Engineer',
    period: '2020 - 2022',
    responsibilities: [
      'Led the greenfield deployment and security hardening of the complete IT infrastructure for the Ombudsman Office.',
      'Deployed and configured advanced SIEM and IDS/IPS solutions for real-time threat detection and response.',
      'Designed and implemented a stringent least-privilege access control model using advanced IAM solutions to protect highly confidential documents.',
      'Successfully engineered and executed a multi-faceted DDoS mitigation strategy to ensure the continuous availability of public-facing services.',
      'Ensured the secrecy and integrity of sensitive data through robust encryption and data loss prevention (DLP) policies.',
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: 'Microsoft Certified: Solutions Associate (MCSA)',
    issuer: 'Microsoft',
    year: '2018',
    link: 'https://drive.google.com/file/d/1BkKvI1H4Kiz0CS7hAIjVsAj07iw8Xv87/view?usp=drive_link',
  },
  {
    name: 'Microsoft Certified: Solutions Expert (MCSE)',
    issuer: 'Microsoft',
    year: '2019',
    link: 'https://drive.google.com/file/d/1pnUR5Kws4SJdTlprKb9MUj2ey7AyJhpA/view?usp=drive_link',
  },
  {
    name: 'Microsoft Certified: Trainer (MCT)',
    issuer: 'Microsoft',
    year: '2020',
    link: 'https://drive.google.com/file/d/1pH36XBgSTldB79_zltUFpzpdn36ttras/view?usp=drive_link',
  },
  {
    name: 'Jr Penetration Tester',
    issuer: 'TryHackMe',
    year: '2021',
    link: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-XKWGH6IECR.pdf',
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
    description: 'Architected and deployed a secure mail infrastructure for a government entity. Implemented multi-layered security protocols, including DMARC, DKIM, and SPF, to prevent email spoofing. Conducted regular vulnerability assessments and stress tests to ensure system resilience. Developed and enforced granular email filtering rules and security policies using advanced spam filters and custom scripts.',
    technologies: ['Mail Server Administration', 'Security Auditing', 'Anti-Spoofing Protocols', 'Policy Implementation'],
  },
  {
    name: 'Corporate Mail Solution (*.az)',
    description: 'Engineered a highly available and secure corporate email system. Implemented a robust Secure Email Gateway (SEG) to protect against malware, phishing, and other advanced threats. Performed continuous performance tuning and conducted stress testing to handle high-volume traffic. Managed sophisticated email flow control with dynamic allowlists, blocklists, and behavior-based spam filtering policies.',
    technologies: ['Secure Email Gateway', 'Performance Tuning', 'Threat Analysis', 'High Availability'],
  },
  {
    name: 'Azerbaijan Ombudsman Infrastructure Security',
    description: 'Led the greenfield deployment and security hardening of the complete IT infrastructure. Deployed and configured SIEM, IDS/IPS solutions for real-time threat monitoring. Implemented a least-privilege access control model for highly confidential documents using advanced IAM solutions. Successfully designed and executed a DDoS mitigation strategy to ensure service availability.',
    technologies: ['Infrastructure Security', 'SIEM/IDS/IPS', 'DDoS Mitigation', 'IAM', 'Data Secrecy'],
  },
  {
    name: 'AZERTAC - State News Agency Infrastructure',
    description: 'Architected the entire IT infrastructure from the ground up for the national news agency. Implemented a defense-in-depth security strategy, including network segmentation and server hardening. Established a continuous monitoring framework using tools like Zabbix and Grafana. Developed and executed comprehensive threat modeling exercises and incident response plans to ensure the integrity and high availability of critical news services.',
    technologies: ['Threat Modeling', 'Incident Response', 'Server Hardening', 'Continuous Monitoring', 'Security Auditing'],
  },
];
