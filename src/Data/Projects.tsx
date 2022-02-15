type Link = {
  git?: string;
  live?: string;
};

type Project = {
  title: string;
  org: string;
  startDate: Date;
  endDate: Date;
  desc: string;
  techStack: string[];
  imgSrc?: any;
  links: Link;
};

export const ProjectsList: Project[] = [
  {
    title: "LOR System",
    org: "Sardar Patel Institute of Technology",
    startDate: new Date("06/01/2019"),
    endDate: new Date("08/01/2019"),
    desc: "temp",
    techStack: ["NodeJS", "Angular", "MongoDB", "ExpressJS"],
    links: { live: "https://lor.spit.ac.in" },
  },
  {
    title: "LOR System",
    org: "Sardar Patel Institute of Technology",
    startDate: new Date("06/01/2019"),
    endDate: new Date("08/01/2019"),
    desc: "temp",
    techStack: ["NodeJS", "Angular", "MongoDB", "ExpressJS"],
    links: { live: "https://lor.spit.ac.in" },
  },
  {
    title: "LOR System",
    org: "Sardar Patel Institute of Technology",
    startDate: new Date("06/01/2019"),
    endDate: new Date("08/01/2019"),
    desc: "temp",
    techStack: ["NodeJS", "Angular", "MongoDB", "ExpressJS"],
    links: { live: "https://lor.spit.ac.in" },
  },
  {
    title: "LOR System",
    org: "Sardar Patel Institute of Technology",
    startDate: new Date("06/01/2019"),
    endDate: new Date("08/01/2019"),
    desc: "temp",
    techStack: ["NodeJS", "Angular", "MongoDB", "ExpressJS"],
    links: { live: "https://lor.spit.ac.in" },
  },
  {
    title: "LOR System",
    org: "Sardar Patel Institute of Technology",
    startDate: new Date("06/01/2019"),
    endDate: new Date("08/01/2019"),
    desc: "temp",
    techStack: ["NodeJS", "Angular", "MongoDB", "ExpressJS"],
    links: { live: "https://lor.spit.ac.in" },
  },
  {
    title: "LOR System",
    org: "Sardar Patel Institute of Technology",
    startDate: new Date("06/01/2019"),
    endDate: new Date("08/01/2019"),
    desc: "temp",
    techStack: ["NodeJS", "Angular", "MongoDB", "ExpressJS"],
    links: { live: "https://lor.spit.ac.in" },
  },
];
