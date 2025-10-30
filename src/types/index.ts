export type Profile = {
  name: string;
  title: string;
  summary: string;
  contact: {
    email: string;
    phone: string;
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

export type Education = {
  institution: string;
  degree: string;
  year: string;
};

export type Project = {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
};
