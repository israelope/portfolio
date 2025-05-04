"use client";

import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import dynamic from 'next/dynamic';

// Dynamically import heavy components
const Hero = dynamic(() => import('@/components/Hero'));
const Grid = dynamic(() => import('@/components/Grid'));
const Footer = dynamic(() => import('@/components/Footer'));
const Clients = dynamic(() => import('@/components/Clients'));
const Approach = dynamic(() => import('@/components/Approach'));
const Experience = dynamic(() => import('@/components/Experience'));
const RecentProjects = dynamic(() => import('@/components/RecentProjects'));

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}