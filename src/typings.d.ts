interface BaseBody {
  id: string;
  createdAt: string;
  updatedAt: string;
}

interface Image {
  title: string;
  url: string;
}

interface PageInfo extends BaseBody {
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
}

interface Social extends BaseBody {
  title: string;
  url: string;
}

interface Technology extends BaseBody {
  image: Image;
  progress: number;
  title: string;
}

interface Skill extends BaseBody {
  image: Image;
  progress: number;
  title: string;
}

interface Experience extends BaseBody {
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnd: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

interface Project extends BaseBody {
  image: Image;
  linkToBuild: string;
  summary: string;
  title: string;
  technologies: Technology[];
}
