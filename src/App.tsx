/**
 * @license
 * TECHVIRITI - IFSA Cinematic 3D College Fest Experience
 */

import React, { useState, useEffect, useRef } from 'react';
import { ThreeWorld } from './components/ThreeWorld';
import { Navbar } from './components/Navbar';
import { HeroOverlay } from './components/HeroOverlay';
import { PortalWorld } from './components/PortalWorld';
import { WorkshopsSection } from './components/WorkshopsSection';
import { CompetitionsSection } from './components/CompetitionsSection';
import { EventsSection } from './components/EventsSection';
import { AboutContactModal } from './components/AboutContactModal';
import { RegisterModal } from './components/RegisterModal';
import { cyberAudio } from './utils/audioSynth';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('home');
  const [activeWorld, setActiveWorld] = useState<'hub' | 'workshops' | 'competitions' | 'events'>('hub');
  const [registerItem, setRegisterItem] = useState<{ title: string; category: string; price: string } | null>(null);
  const [aboutContactOpen, setAboutContactOpen] = useState<{ isOpen: boolean; tab: 'about' | 'contact' }>({
    isOpen: false,
    tab: 'about'
  });

  const isNavigatingRef = useRef(false);

  // Track Mouse Position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x: nx, y: ny });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Track Scroll Progress (0.0 to 1.0 for the camera drone flight)
  useEffect(() => {
    const handleScroll = () => {
      if (activeWorld !== 'hub' || isNavigatingRef.current) return;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) return;
      const progress = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 1.5)));
      setScrollProgress(progress);

      if (progress < 0.6) {
        setActiveSection('home');
      } else if (progress >= 0.6) {
        setActiveSection('events-world');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeWorld]);

  // Automated Camera Drone Flight (when user clicks "EXPLORE THE FEST →")
  const triggerDroneFlight = () => {
    cyberAudio.playClick(900);
    const targetScroll = window.innerHeight * 1.5;
    const startScroll = window.scrollY;
    const distance = targetScroll - startScroll;
    const duration = 1400;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Smooth cubic easing
      const ease = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      window.scrollTo(0, startScroll + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setScrollProgress(1);
        setActiveSection('events-world');
        setActiveWorld('hub');
      }
    };

    requestAnimationFrame(step);
  };

  // Fly back to Home Citadel
  const triggerReturnHome = () => {
    cyberAudio.playClick(750);
    const startScroll = window.scrollY;
    const duration = 1000;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / duration);
      const ease = 1 - Math.pow(1 - progress, 3);
      window.scrollTo(0, startScroll * (1 - ease));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setScrollProgress(0);
        setActiveSection('home');
        setActiveWorld('hub');
      }
    };

    requestAnimationFrame(step);
  };

  // Return directly to Observation Deck (Page 2 Hub)
  const returnToObservationDeck = () => {
    cyberAudio.playClick(880);
    isNavigatingRef.current = true;
    setActiveWorld('hub');
    setActiveSection('events-world');
    setScrollProgress(1);

    // Give DOM time to update min-h-[250vh] before clamping scroll
    requestAnimationFrame(() => {
      const target = window.innerHeight * 1.5;
      window.scrollTo({ top: target, behavior: 'instant' });
      requestAnimationFrame(() => {
        window.scrollTo({ top: target, behavior: 'instant' });
        setScrollProgress(1);
        setTimeout(() => {
          window.scrollTo({ top: target, behavior: 'instant' });
          setScrollProgress(1);
          isNavigatingRef.current = false;
        }, 60);
      });
    });
  };

  // Navigation Handler
  const handleNavigate = (sectionId: string) => {
    cyberAudio.playClick(880);
    if (sectionId === 'home') {
      if (activeWorld !== 'hub') {
        setActiveWorld('hub');
        setScrollProgress(0);
        setActiveSection('home');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        triggerReturnHome();
      }
    } else if (sectionId === 'events-world') {
      if (activeWorld !== 'hub') {
        returnToObservationDeck();
      } else if (scrollProgress < 0.5) {
        triggerDroneFlight();
      } else {
        returnToObservationDeck();
      }
    } else if (sectionId === 'workshops') {
      setActiveWorld('workshops');
      setActiveSection('workshops');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (sectionId === 'competitions') {
      setActiveWorld('competitions');
      setActiveSection('competitions');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (sectionId === 'events') {
      setActiveWorld('events');
      setActiveSection('events');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (sectionId === 'about') {
      setAboutContactOpen({ isOpen: true, tab: 'about' });
    } else if (sectionId === 'contact') {
      setAboutContactOpen({ isOpen: true, tab: 'contact' });
    }
  };

  return (
    <div className={`relative ${activeWorld === 'hub' ? 'min-h-[250vh]' : 'min-h-screen'} bg-black text-slate-100 selection:bg-sky-500 selection:text-slate-950 overflow-x-hidden font-space`}>
      {/* 1. PHOTO 1 WORLD: 3D Camera, Citadel, Explorer & Parallax (Only on Hub) */}
      {activeWorld === 'hub' && <ThreeWorld scrollProgress={scrollProgress} />}

      {/* 2. TOP NAVBAR & LEFT VERTICAL NAVIGATION */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        scrollProgress={scrollProgress}
        activeWorld={activeWorld}
        onRegisterClick={() => {
          cyberAudio.playClick(940);
          setRegisterItem({
            title: 'TECHVIRITI ALL-ACCESS CITADEL PASS',
            category: 'FULL FESTIVAL DELEGATE',
            price: '₹499 (EARLY BIRD)'
          });
        }}
      />

      {/* 3. HERO HOME PAGE OVERLAY (Clean Title, Subtitle, CTA, Stats) */}
      {activeWorld === 'hub' && (
        <HeroOverlay
          scrollProgress={scrollProgress}
          onExploreClick={triggerDroneFlight}
          onRegisterClick={() => {
            cyberAudio.playClick(940);
            setRegisterItem({
              title: 'TECHVIRITI ALL-ACCESS CITADEL PASS',
              category: 'FULL FESTIVAL DELEGATE',
              price: '₹499 (EARLY BIRD)'
            });
          }}
          mousePos={mousePos}
        />
      )}

      {/* 4. PHOTO 2 OBSERVATION DECK & DEDICATED SECTIONS */}
      {activeWorld === 'hub' && (
        <PortalWorld
          scrollProgress={scrollProgress}
          onSelectWorld={(world) => {
            cyberAudio.playClick(920);
            setActiveWorld(world);
            setActiveSection(world);
            window.scrollTo({ top: 0, behavior: 'instant' });
          }}
          onBackToHome={triggerReturnHome}
          onOpenRegister={() => {
            cyberAudio.playClick(940);
            setRegisterItem({
              title: 'TECHVIRITI ALL-ACCESS CITADEL PASS',
              category: 'FULL FESTIVAL DELEGATE',
              price: '₹499 (EARLY BIRD)'
            });
          }}
        />
      )}

      {/* 5. DEDICATED DESTINATION SECTORS */}
      {activeWorld !== 'hub' && (
        <main className="relative z-40 min-h-screen pt-20 pb-16 bg-slate-950/95">
          {activeWorld === 'workshops' && (
            <WorkshopsSection
              onBackToHub={returnToObservationDeck}
              onRegister={(item) => setRegisterItem(item)}
            />
          )}

          {activeWorld === 'competitions' && (
            <CompetitionsSection
              onBackToHub={returnToObservationDeck}
              onRegisterTeam={(item) => setRegisterItem(item)}
            />
          )}

          {activeWorld === 'events' && (
            <EventsSection
              onBackToHub={returnToObservationDeck}
              onReserveSeat={(item) => setRegisterItem(item)}
            />
          )}
        </main>
      )}

      {/* 6. REGISTRATION PASS MODAL */}
      {registerItem && (
        <RegisterModal
          item={registerItem}
          onClose={() => setRegisterItem(null)}
        />
      )}

      {/* 7. ABOUT & CONTACT MODAL */}
      {aboutContactOpen.isOpen && (
        <AboutContactModal
          activeTab={aboutContactOpen.tab}
          onClose={() => setAboutContactOpen({ isOpen: false, tab: 'about' })}
          onSwitchTab={(tab) => setAboutContactOpen({ isOpen: true, tab })}
        />
      )}
    </div>
  );
}
