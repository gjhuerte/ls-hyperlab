import React from 'react';
import Navigation from './components/partials/Navigation';
import LandingPage from './components/partials/pages/LandingPage';

function App() {
  return (
    <React.Profiler
      id="base-layout"
      onRender={() => {}}>
      <Navigation />
      <LandingPage />
    </React.Profiler>
  );
}

export default App;
