export type Profile = {
  name: string;
  title: string;
  summary: string;
  contact: {
    email: string;
    telegram: string;
    location: string;
    linkedin: string;
    github: string;
  };
};

export type WorkExperience = {
  company: string;
  title: string;
  period: string;
  responsibilities: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  link?: string;
};

export type Project = {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
};
