import React from 'react';
import TutorialPage from './components/TutorialPage';
import FAQPage from './components/Questions';
import Chat from './components/Chat'

function SupportPage() {
  return (
    <div className="p-4">
      <TutorialPage />
      <FAQPage />
      <Chat/>
    </div>
  );
}

export default SupportPage;
