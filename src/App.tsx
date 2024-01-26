import "./App.css";
import { Particle } from "./Components/particle/Particle";
import { Footer } from "./layout/footer/footer";
import { Header } from "./layout/header/header";
import { Contact } from "./layout/section/contact/contact";
import { Main } from "./layout/section/main/main";
import { Skills } from "./layout/section/skills/skills";
import { Slogan } from "./layout/section/slogan/slogan";
import { Works } from "./layout/section/works/works";
import { GoTopBtn} from "./Components/goTopBtn";
import { Testimony } from "./layout/section/testimony/Testimony";

function App() {
  return (
    <div className="App">
      <Particle />
      <Header />
      <Main />
      <Skills />
      <Works />
      <Testimony />
      <Contact />
      <Slogan />
      <Footer />
      <GoTopBtn />
    </div>
  );
}

export default App;
