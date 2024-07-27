import type { Resume as ResumeType } from "./types/Resume";
import { Resume } from "./components";

const resume: ResumeType = {
  info: {
    name: "Mario Lazzari",
    email: "mario.lazzari@gmail.com",
    image:
      "https://www.mariolazzari.it/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.61b7d0dd.png&w=384&q=75",
    label: "Full Stack JavaScript Developer",
    phone: "",
    location: {
      city: "Riva del Garda",
      address: "Via Archimede Martini 7/A",
      country: "Italia",
      zip: "38066",
      region: "Trento",
    },
    profiles: [],
    summary: "",
    url: "https://mariolazzari.it",
  },
  awards: [],
  certificates: [],
  educations: [],
  interests: [],
  jobs: [],
  languages: [],
  projects: [],
  publications: [],
  references: [],
  skills: [],
  volunteers: [],
};

function App() {
  return <Resume resume={resume} />;
}

export default App;
