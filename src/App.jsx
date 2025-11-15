import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import BeforeAfter from './pages/BeforeAfter';

// Páginas de Projects
import SculptedSerenity from './pages/projects/SculptedSerenity';
import MarbleRadiance from './pages/projects/MarbleRadiance';
import MonochromeMasterpiece from './pages/projects/MonochromeMasterpiece';
import NordicLuminosity from './pages/projects/NordicLuminosity';
import SkylineRetreat from './pages/projects/SkylineRetreat';
import CelestialMarble from './pages/projects/CelestialMarble';
import LuminousHarmony from './pages/projects/LuminousHarmony';
import ElysianBath from './pages/projects/ElysianBath';
import MidnightVeins from './pages/projects/MidnightVeins';
import MarbleIllusions from './pages/projects/MarbleIllusions';

// Páginas de Features
import Glass from './pages/features/Glass';
import LEDs from './pages/features/LEDs';
import StandingShowers from './pages/features/StandingShowers';
import Tubs from './pages/features/Tubs';
import Vanity from './pages/features/Vanity';
import XLBathrooms from './pages/features/XLBathrooms';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/before-after" element={<BeforeAfter />} />
        
        {/* Rutas de Projects */}
        <Route path="/projects/sculpted-serenity" element={<SculptedSerenity />} />
        <Route path="/projects/marble-radiance" element={<MarbleRadiance />} />
        <Route path="/projects/monochrome-masterpiece" element={<MonochromeMasterpiece />} />
        <Route path="/projects/nordic-luminosity" element={<NordicLuminosity />} />
        <Route path="/projects/skyline-retreat" element={<SkylineRetreat />} />
        <Route path="/projects/celestial-marble" element={<CelestialMarble />} />
        <Route path="/projects/luminous-harmony" element={<LuminousHarmony />} />
        <Route path="/projects/elysian-bath" element={<ElysianBath />} />
        <Route path="/projects/midnight-veins" element={<MidnightVeins />} />
        <Route path="/projects/marble-illusions" element={<MarbleIllusions />} />
        
        {/* Rutas de Features */}
        <Route path="/features/glass" element={<Glass />} />
        <Route path="/features/leds" element={<LEDs />} />
        <Route path="/features/standing-showers" element={<StandingShowers />} />
        <Route path="/features/tubs" element={<Tubs />} />
        <Route path="/features/vanity" element={<Vanity />} />
        <Route path="/features/xl-bathrooms" element={<XLBathrooms />} />
      </Routes>
    </Router>
  );
}

export default App;