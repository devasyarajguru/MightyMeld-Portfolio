// MainApp.js
import BrowserRouter from './BrowserRouter';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

const routes = [
  { path: "/navbar", component: <Navbar /> },
  { path: "/home", component: <Home /> },
  { path: "/about", component: <About /> },
  { path: "/skills", component: <Skills /> },
];

const App = () => {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <BrowserRouter routes={routes} />
    </>
  );
};

export default App;
