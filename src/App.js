import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Education from "./components/Education/Education";
import Header from "./components/Header/Headers";
import Intro from "./components/Introduction/Intro";
import Details from "./components/personalDetails/Details";
import Experience from "./components/Experiences/Experience";
import Highlight from "./components/Highlight/Highlight";
import Project from "./components/Projects/Project";

function App() {
  const [degree, setDegree] = useState([]);
  const [experience, setExperience] = useState([]);
  const [highlight, setHighlight] = useState([]);
  const [project, setProject] = useState([]);
  const [isLodding, setIsLoadding] = useState(false);

  const fetchEducationHandler = useCallback(async () => {
    setIsLoadding(true);
    const response = await fetch(
      "https://resume-http-default-rtdb.firebaseio.com/education.json"
    );
    const data = await response.json();
    const loadedData = [];
    for (const key in data) {
      loadedData.push({
        id: key,
        name: data[key].name,
        year: data[key].year,
        place: data[key].place,
        percentage: data[key].percentage,
        college: data[key].college,
      });
    }
    setDegree(loadedData);
    setIsLoadding(false);
  }, []);

  const fetchExperienceHandler = useCallback(async () => {
    setIsLoadding(true);
    const response = await fetch(
      "https://resume-http-default-rtdb.firebaseio.com/experience.json"
    );
    const data = await response.json();
    const loadedData = [];
    for (const key in data) {
      loadedData.push({
        id: key,
        company: data[key].company,
        designation: data[key].designation,
        description: data[key].description,
        duration: data[key].duration,
      });
    }
    setExperience(loadedData);
    setIsLoadding(false);
  }, []);



  const fetchHighlightHandler = useCallback(async () => {
    setIsLoadding(true);
    const response = await fetch(
      "https://resume-http-default-rtdb.firebaseio.com/highlights.json"
    );
    const data = await response.json();
    const loadedData = [];
    for (const key in data) {
      loadedData.push({
        id: key,
        title: data[key].title,
        description: data[key].description,
      });
    }
    setHighlight(loadedData);
    setIsLoadding(false);
  }, []);


  const fetchProjectHandler = useCallback(async () => {
    setIsLoadding(true);
    const response = await fetch(
      "https://resume-http-default-rtdb.firebaseio.com/projects.json"
    );
    const data = await response.json();
    const loadedData = [];
    for (const key in data) {
      loadedData.push({
        id: key,
        name: data[key].name,
        technology: data[key].technology,
        URL: data[key].URL,
      });
    }
    setProject(loadedData);
    setIsLoadding(false);
  }, []);




  useEffect(() => {
    fetchEducationHandler();
    fetchExperienceHandler();
    fetchHighlightHandler();
    fetchProjectHandler()
  }, [fetchEducationHandler, fetchExperienceHandler, fetchHighlightHandler, fetchProjectHandler]);

  return (
    <div>
      <Header />
      <Intro />
      <section>
        {!isLodding && <Experience experience={experience} />}
        {isLodding && <p>Lodding...</p>}
      </section>
      <section>
        {!isLodding && <Education degree={degree} />}
        {isLodding && <p>Lodding...</p>}
      </section>
      <section>
        {!isLodding && <Highlight highlight={highlight} />}
        {isLodding && <p>Lodding...</p>}
      </section>
      <section>
        {!isLodding && <Project project={project} />}
        {isLodding && <p>Lodding...</p>}
      </section>
      <Details />
    </div>
  );
}

export default App;
