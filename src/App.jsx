import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Navigationalbar from './components/Navigationalbar';
import Home from './pages/Home';
import About from './pages/About';
import Announcements from './pages/Announcement';
import Section3 from './pages/Section3';

function App() {
  

  return (
    <>
    <Navigationalbar />
    <Home />
    <About />
    <Announcements />
    <Section3 />
    </>
  )
}

export default App

