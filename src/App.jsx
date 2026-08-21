
import "./App.css";
import About_Us from "./components/About_Us";
import Projects from "./components/Projects";
import Careers from "./components/Careers";

function App() {
    return (
        <main className="min-h-screen overflow-hidden">
            <About_Us />
            <Projects />
            <Careers />
        </main>
    );
}

export default App;
