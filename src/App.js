import "./App.css";
import Education from "./components/Education/Education";
import Header from "./components/Header/Headers";
import Intro from "./components/Introduction/Intro";
import Details from "./components/personalDetails/Details";

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <Education/>
      <Details/>
    </div>
  );
}

export default App;
