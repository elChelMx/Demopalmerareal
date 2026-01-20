import React, { useState, useEffect } from 'react';
import { ShopProvider } from './context/ShopContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { Contact } from './pages/Contact';
import { DesignPreview } from './pages/DesignPreview';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Simple routing simulation since we are in a single-file capable environment 
  // (though structured in multiple files) without full Router dependency if not needed.
  // But standard practice suggests maintaining state for page visibility.
  
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'lines':
        // Reuse Home but scroll to lines section
        useEffect(() => {
           const el = document.getElementById('business-lines');
           if(el) el.scrollIntoView({ behavior: 'smooth' });
        }, []);
        return <Home onNavigate={handleNavigate} />;
      case 'store':
        return <Store />;
      case 'design':
        return <DesignPreview />;
      case 'projects':
        return <Contact />;
      case 'contact':
        // Footer contact info is enough, or redirect to projects for form
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <ShopProvider>
      <Layout onNavigate={handleNavigate} currentPage={currentPage}>
        {renderPage()}
      </Layout>
    </ShopProvider>
  );
};

export default App;