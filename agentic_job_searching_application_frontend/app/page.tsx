"use client";

import {useState } from "react";
import {
  Bell,
  Bookmark,
  Sun,
  BriefcaseBusiness,
  FileText,
  Inbox,
  ListChecks,
  Moon,
  PanelLeft,
  SlidersHorizontal,
  UserRound,
  Zap
} from "lucide-react";

const navigationItems = [
  { id: "new-jobs", label: "New jobs", icon: BriefcaseBusiness },
  { id: "actions", label: "Actions", icon: ListChecks },
  { id: "preferences", label: "Job Preferences Settings", icon: SlidersHorizontal },
  { id: "tracked-jobs", label: "Tracked jobs", icon: Bookmark },
  { id: "cv", label: "Cv", icon: FileText },
  { id: "inbox", label: "Inbox", icon: Inbox },
  { id: "profile", label: "Profile", icon: UserRound },
];

export default function Home(){
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);
  const [credits, setCredits] = useState(0);

  return(
    <div className={`grid min-h-screen  grid-rows-[72px_minmax(0,1fr)] transition-[grid-template-columns] duration-200 motion-reduce:transition-none ${
      isDarkMode
      ? "bg-zinc-950 text-zinc-50"
      : "bg-white text-zinc-950"
    }`}
          style={{
            gridTemplateColumns: isCollapsed
            ? "72px minmax(0,1fr)"
            :"240px minmax(0,1fr)",
          }}
          >
      <div className="flex items-center justify-end border-b border-r border-zinc-200 px-4">
      <button 
      type="button" 
      aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      className={`flex size-10 items-center justify-center rounded-md ${
        isDarkMode ? "text-zinc-300 hover:bg-zinc-800" : "text-zinc-600 hover:bg-zinc-100"
      } focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`}
      onClick={()=> setIsCollapsed ((previous) => !previous)}
      aria-expanded={!isCollapsed}
      aria-controls="sidebar"
      >
        <PanelLeft size={22} aria-hidden="true" />
      </button>
      </div>
      <header className="flex items-center justify-between gap-4 border-b border-zinc-200 px-6">
        <h1 className= "text-2xl font-medium">
          New Jobs
        </h1>
        <div className="flex shrink-0 items-center gap-4">
          <button
          type="button"
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to Dark mode" }
          aria-pressed={isDarkMode}
          onClick={() => setIsDarkMode((previous) => !previous)}
          className={`flex size-10 items-center justify-center rounded-md ${
    isDarkMode ? "hover:bg-zinc-800" : "hover:bg-zinc-100"
  } focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`}
          >
           {isDarkMode ? (
    <Sun size={22} aria-hidden="true" />
  ) : (
    <Moon size={22} aria-hidden="true" />
  )}
          </button>
            <button
      type="button"
      aria-label="Notifications"
      className={`flex size-10 items-center justify-center rounded-md ${
        isDarkMode ? "hover:bg-zinc-800" : "hover:bg-zinc-100"
      } focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`}
    >
      <Bell size={22} aria-hidden="true" />
    </button>

    <button
      type="button"
      aria-label={`${credits} credits available`}
      className={`flex h-9 items-center justify-center gap-2 px-3 ${
        isDarkMode
          ? "bg-zinc-800 text-zinc-50 hover:bg-zinc-700"
          : "bg-zinc-200 text-zinc-950 hover:bg-zinc-300"
      } focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`}
    >
      <Zap size={20} aria-hidden="true" />
      <span className="text-sm">{credits}</span>
    </button>
        </div>
        </header>
      <aside
        id="sidebar"
        className={`min-h-0 overflow-hidden border-r px-2 py-8 ${
          isDarkMode ? "border-zinc-800" : "border-zinc-200"
        }`}
      >
        <nav aria-label="Main navigation">
          <ul className="space-y-5">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.id === "new-jobs";

              return (
                <li key={item.id}>
                  <button
                    type="button"
                    title={isCollapsed ? item.label : undefined}
                    aria-label={item.label}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex min-h-8 w-full items-center text-sm ${
                      isCollapsed ? "justify-center px-0" : "gap-3 px-2 text-left"
                    } ${
                      isActive
                        ? isDarkMode
                          ? "bg-zinc-800 font-medium"
                          : "bg-zinc-200 font-medium"
                        : isDarkMode
                          ? "hover:bg-zinc-800"
                          : "hover:bg-zinc-100"
                    } focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`}
                  >
                    <Icon size={18} className="shrink-0" aria-hidden="true" />
                    {!isCollapsed && (
                      <span className="min-w-0 truncate">{item.label}</span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

      </aside>
      <main/>
    </div>
  );
}
