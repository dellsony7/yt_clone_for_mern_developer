import MusicNoteIcon from "@mui/icons-material/MusicNote";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import logotube from "../images/logo.png";
import {
  Api,
  AttachMoney,
  DataObject,
  HealthAndSafety,
  MusicNote,
  Security,
  SportsFootballRounded,
} from "@mui/icons-material";

export const logo = { logotube };

export const categories = [
  { name: "New", icon: <HomeIcon /> },
  { name: "JavaScripts", icon: <CodeIcon /> },
  { name: "ReactJS", icon: <CodeIcon /> },
  { name: "MERN Stack", icon: <CodeIcon /> },
  { name: "WEB Dev", icon: <CodeIcon /> },
  { name: "Front End Dev", icon: <CodeIcon /> },
  { name: "ES6 classes", icon: <CodeIcon /> },
  { name: "CyberSecurity", icon: <Security /> },
  { name: "MongoDB", icon: <DataObject /> },
  { name: "ExpressJS", icon: <CodeIcon /> },
  { name: "API", icon: <Api /> },
  { name: "Foot Ball", icon: <SportsFootballRounded /> },
  { name: "Trading", icon: <AttachMoney /> },
  { name: "Music", icon: <MusicNoteIcon /> },
  { name: "Movie", icon: <OndemandVideoIcon /> },
  { name: "Gaming", icon: <SportsEsportsIcon /> },
  { name: "Live", icon: <LiveTvIcon /> },
  { name: "Sport", icon: <FitnessCenterIcon /> },
  { name: "Comedy", icon: <TheaterComedyIcon /> },
  { name: "Gym", icon: <FitnessCenterIcon /> },
  { name: "Health", icon: <HealthAndSafety /> },
  { name: "8D Musics", icon: <MusicNote /> },
  { name: "Crypto", icon: <DeveloperModeIcon /> },
];

export const demoThumbnailUrl = "";
export const demoChannelUrl = "/channel/@realmadrid";
export const demoVideoUrl = "/shorts/Byo436O1uT0";
export const demoChannelTitle = "React JS by Dellsony";
export const demoVideoTitle = "";
export const demoProfilePicture = "";
