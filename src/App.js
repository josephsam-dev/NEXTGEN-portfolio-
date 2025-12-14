import React from 'react';
import { motion } from 'framer-motion'; // ← Add this
import HeroSection from './components/HeroSection';
import Storyboard from './components/Storyboard';
import VideoModal from './components/VideoModal';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div>
      <HeroSection />
      <Storyboard />
      <VideoModal />
      <ContactForm />
    </div>
  );
}

export default App;
