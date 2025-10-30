import Image from 'next/image';
import {
  Briefcase,
  Code2,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Send,
  ShieldCheck,
} from 'lucide-react';
import { profile, workExperience, education, skills, projects } from '@/lib/cv-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AtsButton } from '@/components/ats-button';
import { ThemeToggle } from '@/components/theme-toggle';

const profileImage = PlaceHolderImages.find((img) => img.id === 'profile-picture');

export default function Home() {
  return (
    <div id="cv-content" className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 font-body">
      <header className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-12">
        {profileImage && (
          <Image
            src={profileImage.imageUrl}
            alt={profile.name}
            width={150}
            height={150}
            className="rounded-full border-4 border-primary shadow-lg"
            data-ai-hint={profileImage.imageHint}
          />
        )}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">{profile.name}</h1>
          <p className="text-xl md:text-2xl font-headline text-accent mt-1">{profile.title}</p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href={`mailto:${profile.contact.email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail size={16} />
              <span>{profile.contact.email}</span>
            </a>
            <a href={profile.contact.telegram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Send size={16} />
              <span>Telegram</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{profile.contact.location}</span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <Button asChild variant="outline" size="sm">
              <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={16} />
                <span className="ml-2">LinkedIn</span>
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={profile.contact.github} target="_blank" rel="noopener noreferrer">
                <Github size={16} />
                <span className="ml-2">GitHub</span>
              </a>
            </Button>
            <AtsButton />
          </div>
        </div>
        <ThemeToggle />
      </header>

      <main className="space-y-12">
        <section id="about">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{profile.summary}</p>
            </CardContent>
          </Card>
        </section>

        <section id="experience">
           <h2 className="text-3xl font-headline font-bold text-primary mb-6 flex items-center gap-3"><Briefcase /> Work Experience</h2>
          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-headline">{job.title}</CardTitle>
                      <p className="text-accent font-medium">{job.company}</p>
                    </div>
                    <p className="text-sm text-muted-foreground whitespace-nowrap">{job.period}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="skills">
          <h2 className="text-3xl font-headline font-bold text-primary mb-6 flex items-center gap-3"><ShieldCheck /> Skills</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-1 px-3 bg-primary/10 text-primary hover:bg-primary/20">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="projects">
          <h2 className="text-3xl font-headline font-bold text-primary mb-6 flex items-center gap-3"><Code2 /> Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl font-headline">{project.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                       <Badge key={i} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                  {project.link && (
                    <Button asChild variant="link" className="p-0 h-auto">
                       <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="education">
          <h2 className="text-3xl font-headline font-bold text-primary mb-6 flex items-center gap-3"><GraduationCap /> Education</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardContent className="pt-6 flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-lg">{edu.degree}</p>
                    <p className="text-accent">{edu.institution}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{edu.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="text-center mt-12 py-6 border-t">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} {profile.name}. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
