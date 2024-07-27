import { Award } from "./Award";
import { Certificate } from "./Certificate";
import { Education } from "./Education";
import { Info } from "./Info";
import { Interest } from "./Interest";
import { Job } from "./Job";
import { Language } from "./Language";
import { Project } from "./Project";
import { Publication } from "./Publication";
import { Reference } from "./Reference";
import { Skill } from "./Skill";
import { Volunteer } from "./Volunteer";

export type Resume = {
  info: Info;
  jobs: Job[];
  volunteers: Volunteer[];
  educations: Education[];
  awards: Award[];
  certificates: Certificate[];
  publications: Publication[];
  skills: Skill[];
  languages: Language[];
  interests: Interest[];
  references: Reference[];
  projects: Project[];
};
