import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Globe, Award, Mail, Calendar, ArrowRight } from "lucide-react";

interface Attorney {
  id: string;
  name: string;
  title: string;
  image?: string;
  specializations: string[];
  languages: string[];
  education: {
    degree: string;
    institution: string;
    year: number;
  }[];
  experience: {
    position: string;
    organization: string;
    duration: string;
    description?: string;
  }[];
  certifications: string[];
  bio: string;
  achievements: string[];
  email?: string;
}

const attorneys: Attorney[] = [
  {
    id: "maria-gonzalez",
    name: "María Elena González, Esq.",
    title: "Managing Partner & Senior Immigration Attorney",
    specializations: ["Corporate Immigration", "Investment Visas", "Complex Cases"],
    languages: ["English", "Spanish", "Portuguese"],
    education: [
      {
        degree: "Juris Doctor (J.D.), Immigration Law Concentration",
        institution: "Universidad Nacional Autónoma de México (UNAM)",
        year: 2015
      },
      {
        degree: "Master of Laws (LL.M.), International Business Law",
        institution: "Georgetown University Law Center",
        year: 2017
      },
      {
        degree: "Bachelor of Laws (LL.B.)",
        institution: "Universidad Iberoamericana",
        year: 2013
      }
    ],
    experience: [
      {
        position: "Managing Partner",
        organization: "Mexico Immigration Lawyer",
        duration: "2020 - Present",
        description: "Leading the firm's strategic direction and handling complex corporate immigration matters for multinational companies."
      },
      {
        position: "Senior Associate",
        organization: "International Immigration Partners",
        duration: "2017 - 2020",
        description: "Specialized in high-net-worth individual cases and corporate transfers for Fortune 500 companies."
      },
      {
        position: "Immigration Attorney",
        organization: "Instituto Nacional de Migración (INM) - Legal Advisory",
        duration: "2015 - 2017",
        description: "Provided legal counsel on policy development and complex case interpretations."
      }
    ],
    certifications: [
      "Certified Immigration Specialist - Colegio de Abogados de México",
      "Corporate Immigration Certification - American Immigration Lawyers Association (AILA)",
      "Continuing Legal Education in Mexican Nationality Law - UNAM"
    ],
    bio: "María Elena González brings over 9 years of specialized experience in Mexican immigration law, with particular expertise in corporate immigration and investor visas. Having worked both in private practice and as a legal advisor to INM, she offers unique insights into Mexican immigration policy and procedures. Fluent in three languages, she has successfully guided over 300 clients through complex immigration processes, from Fortune 500 executive transfers to individual permanent residency applications.",
    achievements: [
      "Successfully handled 300+ immigration cases with 98% approval rate",
      "Led legal team for largest corporate transfer project in firm history (150 employees)",
      "Featured speaker at Mexico-US Business Immigration Conference 2023",
      "Published author: 'Corporate Immigration Strategies for Mexico' (2022)",
      "Recipient: Outstanding Immigration Attorney Award - Mexico Bar Association (2023)"
    ],
    email: "maria.gonzalez@mexicoimmigrationlawyer.com"
  },
  {
    id: "carlos-rivera",
    name: "Carlos Rivera, Esq.",
    title: "Senior Associate & Family Immigration Specialist",
    specializations: ["Family Immigration", "Citizenship & Naturalization", "Consular Processing"],
    languages: ["English", "Spanish"],
    education: [
      {
        degree: "Juris Doctor (J.D.), Family Law & Immigration",
        institution: "Universidad Panamericana",
        year: 2018
      },
      {
        degree: "Bachelor of International Relations",
        institution: "El Colegio de México",
        year: 2016
      }
    ],
    experience: [
      {
        position: "Senior Associate",
        organization: "Mexico Immigration Lawyer",
        duration: "2021 - Present",
        description: "Leading family immigration practice with focus on marriage-based visas and naturalization cases."
      },
      {
        position: "Immigration Attorney",
        organization: "Border Immigration Services",
        duration: "2019 - 2021",
        description: "Specialized in consular processing and family reunification cases along the US-Mexico border."
      },
      {
        position: "Legal Intern",
        organization: "Secretaría de Relaciones Exteriores (SRE)",
        duration: "2018 - 2019",
        description: "Assisted with citizenship and nationality law applications and policy research."
      }
    ],
    certifications: [
      "Family Immigration Law Certification - Mexican Bar Association",
      "Naturalization Law Specialist - SRE Certification Program",
      "Consular Relations Certificate - Diplomatic Academy of Mexico"
    ],
    bio: "Carlos Rivera specializes in family immigration and citizenship matters, having helped over 200 families navigate the complexities of Mexican immigration law. His experience includes extensive work with consular processing, making him particularly valuable for clients applying from abroad. Carlos is known for his compassionate approach and ability to handle sensitive family situations with cultural understanding and legal precision.",
    achievements: [
      "200+ successful family immigration cases",
      "Developed streamlined process for marriage-based applications reducing processing time by 30%",
      "Volunteer legal services for immigrant families - 100+ pro bono hours annually",
      "Expert testimony in Mexican Congressional hearings on family immigration reform (2023)",
      "Co-authored 'Guide to Mexican Family Immigration' handbook"
    ],
    email: "carlos.rivera@mexicoimmigrationlawyer.com"
  },
  {
    id: "ana-martinez",
    name: "Ana Sofía Martínez, Esq.",
    title: "Associate Attorney & Residency Specialist",
    specializations: ["Temporary Residency", "Permanent Residency", "Financial Solvency Cases"],
    languages: ["English", "Spanish", "French"],
    education: [
      {
        degree: "Juris Doctor (J.D.), Immigration & Administrative Law",
        institution: "Universidad Autónoma de Guadalajara",
        year: 2020
      },
      {
        degree: "Bachelor of Business Administration, International Business",
        institution: "Tecnológico de Monterrey",
        year: 2018
      }
    ],
    experience: [
      {
        position: "Associate Attorney",
        organization: "Mexico Immigration Lawyer",
        duration: "2022 - Present",
        description: "Focusing on individual residency applications and financial solvency documentation for retirees and remote workers."
      },
      {
        position: "Junior Attorney",
        organization: "Guadalajara Immigration Services",
        duration: "2020 - 2022",
        description: "Handled temporary and permanent residency applications with emphasis on documentation preparation."
      }
    ],
    certifications: [
      "Mexican Administrative Law Certificate - Universidad Autónoma de Guadalajara",
      "International Business Law Certificate - Tecnológico de Monterrey",
      "Financial Documentation Analysis for Immigration - Professional Certification"
    ],
    bio: "Ana Sofía Martínez brings a unique combination of legal expertise and business acumen to residency cases. With her background in international business, she excels at helping clients navigate the financial documentation requirements for Mexican residency. Her meticulous approach to case preparation has resulted in consistently high approval rates, particularly for complex financial solvency cases.",
    achievements: [
      "150+ successful residency applications",
      "Specializes in complex financial documentation cases with 96% approval rate",
      "Developed financial documentation checklist adopted firm-wide",
      "Fluent in three languages, serving diverse international clientele",
      "Rising Star Award - Young Lawyers Division, Mexican Bar Association (2023)"
    ],
    email: "ana.martinez@mexicoimmigrationlawyer.com"
  }
];

const AttorneyProfiles = () => {
  return (
    <>
      <Helmet>
        <title>Our Immigration Attorneys — Mexico Immigration Lawyer Team</title>
        <meta 
          name="description" 
          content="Meet our experienced Mexican immigration attorneys. Bilingual legal team specializing in residency, work visas, family immigration, and citizenship law." 
        />
        <meta property="og:title" content="Our Immigration Attorneys — Mexico Immigration Lawyer Team" />
        <meta property="og:description" content="Meet our experienced Mexican immigration attorneys specializing in all aspects of Mexican immigration law." />
        <link rel="canonical" href="https://mexicoimmigrationlawyer.com/attorneys" />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Our Legal Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our experienced immigration attorneys who combine deep knowledge of Mexican law with bicultural understanding to guide you through your immigration journey.
          </p>
        </div>

        {/* Team Overview Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-foreground font-medium">Years Combined Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">650+</div>
            <div className="text-foreground font-medium">Cases Handled</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-foreground font-medium">Languages Spoken</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-foreground font-medium">Success Rate</div>
          </div>
        </div>

        {/* Attorney Profiles */}
        <div className="space-y-12">
          {attorneys.map((attorney) => (
            <Card key={attorney.id} className="overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-8 p-6">
                {/* Profile Summary */}
                <div className="lg:col-span-1">
                  <div className="text-center lg:text-left">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary-accent/20 rounded-full mx-auto lg:mx-0 mb-4 flex items-center justify-center">
                      <div className="text-4xl font-bold text-primary">
                        {attorney.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">{attorney.name}</h2>
                    <p className="text-primary font-semibold mb-4">{attorney.title}</p>
                    
                    {/* Specializations */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">Specializations</h4>
                      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                        {attorney.specializations.map((spec) => (
                          <Badge key={spec} variant="secondary" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Languages */}
                    <div className="mb-4">
                      <div className="flex items-center justify-center lg:justify-start mb-2">
                        <Globe className="h-4 w-4 mr-2 text-primary" />
                        <span className="font-semibold text-foreground">Languages</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{attorney.languages.join(', ')}</p>
                    </div>

                    {/* Contact */}
                    {attorney.email && (
                      <div className="mb-4">
                        <a 
                          href={`mailto:${attorney.email}`}
                          className="inline-flex items-center text-primary hover:text-primary-hover text-sm group"
                        >
                          <Mail className="h-4 w-4 mr-2" />
                          Contact {attorney.name.split(' ')[0]}
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Detailed Information */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Bio */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">About</h3>
                    <p className="text-muted-foreground leading-relaxed">{attorney.bio}</p>
                  </div>

                  {/* Education */}
                  <div>
                    <div className="flex items-center mb-3">
                      <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                      <h3 className="text-lg font-semibold text-foreground">Education</h3>
                    </div>
                    <div className="space-y-2">
                      {attorney.education.map((edu, index) => (
                        <div key={index} className="border-l-2 border-primary/20 pl-4">
                          <div className="font-medium text-foreground">{edu.degree}</div>
                          <div className="text-muted-foreground text-sm">{edu.institution} • {edu.year}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <div className="flex items-center mb-3">
                      <Briefcase className="h-5 w-5 mr-2 text-primary" />
                      <h3 className="text-lg font-semibold text-foreground">Experience</h3>
                    </div>
                    <div className="space-y-3">
                      {attorney.experience.map((exp, index) => (
                        <div key={index} className="border-l-2 border-primary/20 pl-4">
                          <div className="font-medium text-foreground">{exp.position}</div>
                          <div className="text-primary text-sm">{exp.organization}</div>
                          <div className="text-muted-foreground text-sm mb-1">{exp.duration}</div>
                          {exp.description && (
                            <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div>
                    <div className="flex items-center mb-3">
                      <Award className="h-5 w-5 mr-2 text-primary" />
                      <h3 className="text-lg font-semibold text-foreground">Certifications</h3>
                    </div>
                    <ul className="space-y-1">
                      {attorney.certifications.map((cert, index) => (
                        <li key={index} className="text-muted-foreground text-sm">• {cert}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Key Achievements</h3>
                    <ul className="space-y-1">
                      {attorney.achievements.map((achievement, index) => (
                        <li key={index} className="text-muted-foreground text-sm">• {achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Team Approach Section */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-primary-accent/5 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">Our Team Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Continuous Education</h3>
              <p className="text-muted-foreground text-sm">
                Our team stays current with the latest changes in Mexican immigration law through ongoing education and professional development.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Bicultural Understanding</h3>
              <p className="text-muted-foreground text-sm">
                Fluent in multiple languages and cultures, we understand both North American expectations and Mexican procedures.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Collaborative Expertise</h3>
              <p className="text-muted-foreground text-sm">
                Each case benefits from our team's collective knowledge and specialized experience across different areas of immigration law.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-foreground">
            Ready to Work With Our Team?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Schedule a consultation to meet with one of our experienced immigration attorneys and discuss your specific case.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg"
              onClick={() => import('@/utils/calendly').then(({ openCalendlyPopup }) => openCalendlyPopup())}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Consultation
            </Button>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Contact Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AttorneyProfiles;