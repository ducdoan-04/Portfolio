"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import "@/styles/globals.css";
import {
  Menu,
  X,
  Code,
  Film,
  Github,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Send,
  User,
} from "lucide-react";
// import { cn } from "@/lib/utils";
import { cn } from "../lib/utils"; // Adjust the path based on your project structure

// Định nghĩa kiểu SelectedItem
type SelectedItem = {
  id: number;
  title: string;
  image: string;
  description: string;
  tech?: string[];
  tools?: string[];
  link?: string;
  video?: string;
};

const codeProjects = [
  {
    id: 1,
    title: "Weather Forecast App",
    image: "/code1.jpg",
    description:
      "A React + OpenWeatherMap API project with real-time weather data.",
    tech: ["React", "Tailwind", "API"],
    link: "https://github.com/username/weather-app",
  },
  {
    id: 2,
    title: "Portfolio Website",
    image: "/code2.jpg",
    description:
      "A personal portfolio built with Next.js and Framer Motion animations.",
    tech: ["Next.js", "Framer Motion"],
    link: "https://github.com/username/portfolio",
  },
];

const videoProjects = [
  {
    id: 3,
    title: "TRÀ TẬP 2024 - ĐÔNG ẤM ĐẠI NGÀN",
    image: "/video1.jpg",
    description: "Edited with CapcutPro.",
    tools: ["Capcut Pro", "After Effects"],
    video: "https://www.youtube.com/embed/O32gRugN-vU",
  },
  {
    id: 4,
    title: "BIGGAME VER 09 - ULTIMATE",
    image: "/video2.jpg",
    description: "Fast-paced cuts and effects synced with beat.",
    tools: ["Final Cut Pro", "Motion"],
    video: "https://www.youtube.com/embed/PBFVCiqjt5Y",
  },
];

const skills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "JavaScript", level: 95 },
  { name: "TypeScript", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Video Editing", level: 95 },
  { name: "Motion Graphics", level: 85 },
  { name: "UI/UX Design", level: 75 },
];

const experiences = [
  {
    title: "Intership Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "Present",
    description:
      "Leading frontend development for enterprise applications using React and Next.js.",
  },
  {
    title: "Video Editor",
    company: "Creative Studios",
    period: "2020 - Present",
    description:
      "Created promotional videos and motion graphics for major brands.",
  },
  {
    title: "Web Developer",
    company: "Digital Agency",
    period: "2020 - Present",
    description:
      "Developed responsive websites and web applications for clients.",
  },
];

export default function Home() {
  const [tab, setTab] = useState("preview");
  // const [selected, setSelected] = useState(null);
  const [selected, setSelected] = useState<SelectedItem | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  // const contactFormRef = useRef(null);
  const contactFormRef = useRef<HTMLFormElement>(null); // Chỉ định kiểu HTMLFormElement

  const data =
    tab === "code" ? codeProjects : tab === "video" ? videoProjects : [];

  const getTabContent = () => {
    switch (tab) {
      case "preview":
        return <PreviewMeSection />;
      case "code":
      case "video":
        return (
          <ProjectsSection tab={tab} data={data} setSelected={setSelected} />
        );
      case "contact":
        return <ContactSection formRef={contactFormRef} />;
      default:
        return <PreviewMeSection />;
    }
  };
  const getHeroTitle = () => {
    switch (tab) {
      case "preview":
        return "About Me";
      case "code":
        return "Code Projects";
      case "video":
        return "Video Projects";
      case "contact":
        return "Get In Touch";
      default:
        return "About Me";
    }
  };

  const getHeroDescription = () => {
    switch (tab) {
      case "preview":
        return "Developer, video editor, and creative professional";
      case "code":
        return "Showcasing my development work and programming projects";
      case "video":
        return "A collection of my video editing and motion graphics work";
      case "contact":
        return "Let's connect and discuss your next project";
      default:
        return "Developer, video editor, and creative professional";
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#121212] text-[#333] dark:text-white">
      {/* Sidebar Navigation - Mobile */}
      <div className="lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="fixed top-4 right-4 z-50 p-2 bg-white dark:bg-[#1e1e1e] rounded-full shadow-md"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed inset-0 z-40 bg-white dark:bg-[#1e1e1e] p-8"
            >
              <div className="flex flex-col h-full justify-center items-center space-y-8">
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-[#333] dark:border-white">
                    <Image
                      src="/placeholder-user.svg?height=96&width=96&text=Avatar"
                      alt="Đức Đoan"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-bold">Đức Đoan</h2>
                </div>

                <nav className="flex flex-col items-center space-y-6 text-lg">
                  <button
                    onClick={() => {
                      setTab("preview");
                      setMenuOpen(false);
                    }}
                    className={cn(
                      "flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors",
                      tab === "preview"
                        ? "bg-black text-white"
                        : "hover:bg-gray-100 dark:hover:bg-[#2a2a2a]"
                    )}
                  >
                    <User size={20} />
                    <span>About Me</span>
                  </button>
                  <button
                    onClick={() => {
                      setTab("code");
                      setMenuOpen(false);
                    }}
                    className={cn(
                      "flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors",
                      tab === "code"
                        ? "bg-black text-white"
                        : "hover:bg-gray-100 dark:hover:bg-[#2a2a2a]"
                    )}
                  >
                    <Code size={20} />
                    <span>Code Projects</span>
                  </button>
                  <button
                    onClick={() => {
                      setTab("video");
                      setMenuOpen(false);
                    }}
                    className={cn(
                      "flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors",
                      tab === "video"
                        ? "bg-black text-white"
                        : "hover:bg-gray-100 dark:hover:bg-[#2a2a2a]"
                    )}
                  >
                    <Film size={20} />
                    <span>Video Projects</span>
                  </button>
                  <button
                    onClick={() => {
                      setTab("contact");
                      setMenuOpen(false);
                    }}
                    className={cn(
                      "flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors",
                      tab === "contact"
                        ? "bg-black text-white"
                        : "hover:bg-gray-100 dark:hover:bg-[#2a2a2a]"
                    )}
                  >
                    <Mail size={20} />
                    <span>Contact</span>
                  </button>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar - Desktop */}
        <aside className="hidden lg:flex lg:flex-col lg:w-64 xl:w-72 h-screen sticky top-0 p-6 bg-white dark:bg-[#1e1e1e] border-r border-gray-200 dark:border-[#333]">
          <div className="flex flex-col items-center space-y-6 mb-12">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#333] dark:border-white">
              <Image
                src="/placeholder-user.svg?height=128&width=128&text=Avatar"
                alt="Đức Đoan"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold">Đức Đoan</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Developer & Video Editor
            </p>
          </div>

          <nav className="flex flex-col space-y-4">
            <button
              onClick={() => setTab("preview")}
              className={cn(
                "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
                tab === "preview"
                  ? "bg-black text-white"
                  : "hover:bg-gray-100 dark:hover:bg-[#2a2a2a]"
              )}
            >
              <User size={20} />
              <span>About Me</span>
            </button>
            <button
              onClick={() => setTab("code")}
              className={cn(
                "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
                tab === "code"
                  ? "bg-black text-white"
                  : "hover:bg-gray-100 dark:hover:bg-[#2a2a2a]"
              )}
            >
              <Code size={20} />
              <span>Code Projects</span>
            </button>
            <button
              onClick={() => setTab("video")}
              className={cn(
                "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
                tab === "video"
                  ? "bg-black text-white"
                  : "hover:bg-gray-100 dark:hover:bg-[#2a2a2a]"
              )}
            >
              <Film size={20} />
              <span>Video Projects</span>
            </button>
            <button
              onClick={() => setTab("contact")}
              className={cn(
                "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
                tab === "contact"
                  ? "bg-black text-white"
                  : "hover:bg-gray-100 dark:hover:bg-[#2a2a2a]"
              )}
            >
              <Mail size={20} />
              <span>Contact</span>
            </button>
          </nav>

          <div className="mt-auto pt-6 border-t border-gray-200 dark:border-[#333]">
            <div className="flex justify-center space-x-4 mb-4">
              <a
                href="https://github.com/ducdoan-04"
                className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              © {new Date().getFullYear()} ducdoan.04
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-screen">
          {/* Hero Section */}
          <div className="relative h-[300px] lg:h-[400px]">
            <div className="absolute inset-0">
              <Image
                src="/placeholder.svg?height=400&width=1200&text=Cover+Image"
                alt="Cover"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#00000080] to-transparent flex items-end">
              <div className="container mx-auto px-6 py-12">
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {getHeroTitle()}
                </h1>
                <p className="text-white text-opacity-90 max-w-xl">
                  {getHeroDescription()}
                </p>
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {getTabContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="modal"
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white dark:bg-[#1e1e1e] rounded-xl w-full max-w-4xl max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="relative">
                {tab === "video" && selected.video ? (
                  <div className="relative pt-[56.25%]">
                    <iframe
                      src={selected.video}
                      title="Video Preview"
                      className="absolute top-0 left-0 w-full h-full"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <div className="relative h-[400px]">
                    <Image
                      src={`/code1.jpg?height=400&width=800&text=${encodeURIComponent(
                        selected.title || ""
                      )}`}
                      alt={selected.title || ""}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">{selected.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {selected.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {(tab === "code" ? selected.tech : selected.tools)?.map(
                    (label, i) => (
                      <span
                        key={i}
                        className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-[#2a2a2a] text-gray-800 dark:text-gray-200"
                      >
                        {label}
                      </span>
                    )
                  )}
                </div>

                <a
                  href={selected.link || selected.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  {tab === "code" ? (
                    <>
                      <Github size={18} />
                      <span>View on GitHub</span>
                    </>
                  ) : (
                    <>
                      <ExternalLink size={18} />
                      <span>Watch Full Video</span>
                    </>
                  )}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Preview Me Section Component
function PreviewMeSection() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Bio Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I&rsquo;m Đức Đoan, a passionate developer and video editor with
              over 5 years of experience creating digital experiences that
              engage and inspire.
            </p>
            <div className="flex flex-col space-y-2 mb-6">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-gray-500" />
                <span>work.ducdoan04@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-gray-500" />
                <span>+84 919 261 712</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-gray-500" />
                <span>DaNang, Vietnam</span>
              </div>
            </div>
            <div className="flex space-x-3">
              <a
                href="https://github.com/ducdoan-04"
                className="p-2 bg-gray-100 dark:bg-[#2a2a2a] rounded-full hover:bg-gray-200 dark:hover:bg-[#333] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-100 dark:bg-[#2a2a2a] rounded-full hover:bg-gray-200 dark:hover:bg-[#333] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-100 dark:bg-[#2a2a2a] rounded-full hover:bg-gray-200 dark:hover:bg-[#333] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-100 dark:bg-[#2a2a2a] rounded-full hover:bg-gray-200 dark:hover:bg-[#333] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          {/* Skills Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-[#2a2a2a] rounded-full h-2.5">
                    <div
                      className="bg-black dark:bg-white h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-[#333]"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black dark:bg-white"></div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <span>{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Projects Section Component
function ProjectsSection({
  tab,
  data,
  setSelected,
}: {
  tab: string;
  data: SelectedItem[];
  setSelected: React.Dispatch<React.SetStateAction<SelectedItem | null>>;
}) {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {data.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-[#1e1e1e] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
            onClick={() =>
              setSelected({
                id: item.id,
                title: item.title,
                image: item.image,
                description: item.description,
                tech: item.tech || [], // Đảm bảo tech luôn là mảng
                tools: item.tools || [], // Đảm bảo tools luôn là mảng
                link: item.link,
                video: item.video,
              })
            }
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={`/code1.jpg?height=192&width=384&text=${encodeURIComponent(
                  item.title
                )}`}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {tab === "video" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <div className="w-12 h-12 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                    <Film className="h-6 w-6 text-black" />
                  </div>
                </div>
              )}
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2 line-clamp-1">
                {item.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {(tab === "code" ? item.tech : item.tools)?.map((label, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-[#2a2a2a] text-gray-800 dark:text-gray-200"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Contact Section Component
// formRef: React.RefObject<HTMLFormElement | null>;
function ContactSection({
  formRef,
}: {
  formRef: React.RefObject<HTMLFormElement | null>;
}) {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Feel free to reach out to me through any of these channels.
            I&rsquo;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gray-100 dark:bg-[#2a2a2a] rounded-lg">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  work.ducdoan04@gmail.com
                </p>
                <a
                  href="mailto:work.ducdoan04@gmail.com"
                  className="text-sm text-black dark:text-white hover:underline"
                >
                  Send an email
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gray-100 dark:bg-[#2a2a2a] rounded-lg">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  +84 919 261 712
                </p>
                <a
                  href="tel:+84919261712"
                  className="text-sm text-black dark:text-white hover:underline"
                >
                  Call me
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gray-100 dark:bg-[#2a2a2a] rounded-lg">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  DaNang, Vietnam
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold mb-4">Connect with me</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ducdoan-04"
                className="p-3 bg-gray-100 dark:bg-[#2a2a2a] rounded-lg hover:bg-gray-200 dark:hover:bg-[#333] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-100 dark:bg-[#2a2a2a] rounded-lg hover:bg-gray-200 dark:hover:bg-[#333] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-100 dark:bg-[#2a2a2a] rounded-lg hover:bg-gray-200 dark:hover:bg-[#333] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-100 dark:bg-[#2a2a2a] rounded-lg hover:bg-gray-200 dark:hover:bg-[#333] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
          <form ref={formRef} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#333] bg-white dark:bg-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#333] bg-white dark:bg-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#333] bg-white dark:bg-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                placeholder="Subject"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#333] bg-white dark:bg-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                placeholder="Your message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              <Send size={18} />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
