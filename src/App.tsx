import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Rewards from './components/Rewards';
import SplineBackground from './components/ui/SplineBackground';
import RetroGrid from './components/ui/RetroGrid';
import PageTransition from './components/ui/PageTransition';
import InitialLoader from './components/ui/InitialLoader';
import ContentReveal from './components/ui/ContentReveal';
import './styles/animations.css';

function App() {
  return (
    <>
      <InitialLoader />
      <div className="min-h-screen">
        <RetroGrid />
        <Suspense fallback={null}>
          <SplineBackground />
        </Suspense>
        <PageTransition>
          <ContentReveal>
            <Navbar />
          </ContentReveal>
          <ContentReveal delay={0.2}>
            <Hero />
          </ContentReveal>
          <ContentReveal delay={0.4}>
            <Mission />
          </ContentReveal>
          <ContentReveal delay={0.6}>
            <Rewards />
          </ContentReveal>
        </PageTransition>
      </div>
    </>
  );
}

export default App;