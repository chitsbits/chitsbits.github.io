import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import About from './components/about';
import Banner from './components/banner';
import NavBar from './components/navBar';
import Projects from './components/projects';

// Animation variants for sliding
const pageVariants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

// Animated Page Wrapper
const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const location = useLocation();
  return (
    <React.Fragment>
      <Banner />
      <NavBar />
      <main className="main-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigate replace to="/about" />} />
            <Route
              path="/about"
              element={
                <AnimatedPage>
                  <About />
                </AnimatedPage>
              }
            />
            <Route
              path="/projects"
              element={
                <AnimatedPage>
                  <Projects />
                </AnimatedPage>
              }
            />
            <Route path="*" element={<Navigate replace to="/about" />} />
          </Routes>
        </AnimatePresence>
      </main>
    </React.Fragment>
  );
}

export default App;
