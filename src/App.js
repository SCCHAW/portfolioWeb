import Narbar from "./component/navbar/narbar";
import Intro from "./component/intro/intro";
import Skill from "./component/skills/skills";
import Works from "./component/works/works";
import Contact from './component/contact/contact';
import Footer from "./component/footer/footer";

function App() {
  return (
    <div className="App">
      <Narbar />
      <Intro />
      <Skill />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
