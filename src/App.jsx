import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Aos from "aos";

function App() {
    Aos.init();

    return (
        <div className="p-5 bg-gray-700 scroll-smooth">
            <Navbar />
            <Hero />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
