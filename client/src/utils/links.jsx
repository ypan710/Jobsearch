import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";

const links = [
  {
    text: "add job",
    path: ".",
    icons: <FaWpforms />,
  },
  {
    text: "all jobs",
    path: "all-jobs",
    icons: <MdQueryStats />,
  },
  {
    text: "profile",
    path: "profile",
    icons: <ImProfile />,
  },
  {
    text: "stats",
    path: "stats",
    icons: <IoBarChartSharp />,
  },
  {
    text: "admin",
    path: "admin",
    icons: <MdAdminPanelSettings />,
  },
];

export default links;
