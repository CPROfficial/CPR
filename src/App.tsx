import { useState, useEffect } from 'react';
import MainLayout from './components/MainLayout';
import AdminPanel from './components/AdminPanel';
import TermsScreen from './components/TermsScreen';
import TeaserIntro from './components/TeaserIntro';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [showTeaser, setShowTeaser] = useState(true);
  const [showTerms, setShowTerms] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  const handleTeaserComplete = () => {
    setShowTeaser(false);
    setShowTerms(true);
  };

  const handleTermsAccept = () => {
    setShowTerms(false);
    setTimeout(() => setShowContent(true), 50);
  };

  if (currentPath === '/admin') {
    return <AdminPanel onBack={() => navigate('/')} />;
  }

  return (
    <>
      {showTeaser && <TeaserIntro onComplete={handleTeaserComplete} />}
      <div className={`transition-opacity duration-700 ${!showTerms && showContent ? 'opacity-100' : 'opacity-0'}`}>
        <MainLayout navigate={navigate} />
      </div>
      {showTerms && !showTeaser && <TermsScreen onAccept={handleTermsAccept} />}
    </>
  );
}

export default App;
