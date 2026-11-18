"use client";

import {useState } from "react";
import {
  Bell,
  Bookmark,
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


export default function Home(){
  const [isCollapsed, setIsCollapsed] = useState(false);
  return(
    <div className="grid min-h-screen  grid-rows-[72px_minmax(0,1fr)] bg-white text-zinc-950 transition-[grid-template-columns] duration-200 motion-reduce:transition-none"
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
      className="flex size-10 items-center justify-center rounded-md text-zinc-600 hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      onClick={()=> setIsCollapsed ((previous) => !previous)}
      aria-expanded={!isCollapsed}
      aria-controls="sidebar"
      >
        <PanelLeft size={22} aria-hidden="true" />
      </button>
      </div>
      <header className="border-b border-zinc-200"/>
      <aside id="sidebar" className="border-r border-zinc-200"/>
      <main/>
    </div>
  );
}
