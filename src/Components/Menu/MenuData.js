import { MdDashboard } from "react-icons/md";
import { RiContactsBook2Fill } from "react-icons/ri";
import { IoMdKey } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoPlaySkipForwardOutline } from "react-icons/io5";
import { GoGift } from "react-icons/go";
import { RiMessage2Line } from "react-icons/ri";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { RiSettings2Line } from "react-icons/ri";
export const data = [
  {
    name: "Dashboard",
    id: "dashboard",
    icon: <MdDashboard className="Menu-icon" />,
  },
  {
    name: "Memberships",
    id: "memberships",
    icon: <RiContactsBook2Fill className="Menu-icon" />,
  },
  {
    name: "KYC",
    id: "kyc",
    icon: <IoMdKey className="Menu-icon" />,
  },
  {
    name: "Notifications",
    id: "notifications",
    icon: <IoNotificationsOutline className="Menu-icon" />,
  },
  {
    name: "Slideshow",
    id: "slideshow",
    icon: <IoPlaySkipForwardOutline className="Menu-icon" />,
  },
  {
    name: "Referalls",
    id: "referalls",
    icon: <GoGift className="Menu-icon" />,
  },
  {
    name: "Complaints",
    id: "complaints",
    icon: <RiMessage2Line className="Menu-icon" />,
  },
  {
    name: "Announcements",
    id: "annoucements",
    icon: <HiOutlineSpeakerphone className="Menu-icon" />,
  },
  {
    name: "Settings",
    id: "settings",
    icon: <RiSettings2Line className="Menu-icon" />,
  },
];
