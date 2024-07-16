
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import MyExperience from './components/MyExperience';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import AboutMe from './components/AboutMe';



function App() {
  
  return (
    <>
      <Header />
      <Nav />
      <AboutMe/>
      <MyExperience/>
      <Services/>
      <Portfolio/>
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
