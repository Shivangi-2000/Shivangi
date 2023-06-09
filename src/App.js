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
  const [isProjectClicked, setIsProjectClicked] = useState(false);
  const [isResumeClicked, setIsResumeClicked] = useState(false);
  const [isHomeClicked, setIsHomeClicked] = useState(true);
  const [personalDetail, setPersonalDetail] = useState([]);

  // Fetch personal details
  const fetchPersonalDetailHandler = useCallback(async () => {
    setIsLoadding(true);
    const response = await fetch(
      "https://resume-http-default-rtdb.firebaseio.com/personalDetails.json"
    );
    const data = await response.json();
    const loadedData = [];

    for (const key in data) {
      loadedData.push(data[key]);
    }

    setPersonalDetail(loadedData);
    setIsLoadding(false);
  }, []);

  // Fetch Educational details
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

  // Fetch Experience details
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

  // Fetch career highlights details
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

  // Fetch all the projects details
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

  const onClickProject = (isClicked) => {
    setIsProjectClicked(isClicked);
    setIsResumeClicked(false);
    setIsHomeClicked(false);
  };
  const onClickResume = (isClicked) => {
    setIsProjectClicked(false);
    setIsResumeClicked(isClicked);
    setIsHomeClicked(false);
  };

  const onClickHome = (isClicked) => {
    setIsHomeClicked(isClicked);
    setIsProjectClicked(false);
    setIsResumeClicked(false);
  };

  useEffect(() => {
    fetchPersonalDetailHandler();
    fetchEducationHandler();
    fetchExperienceHandler();
    fetchHighlightHandler();
    fetchProjectHandler();
  }, [
    fetchPersonalDetailHandler,
    fetchEducationHandler,
    fetchExperienceHandler,
    fetchHighlightHandler,
    fetchProjectHandler,
  ]);

  return (
    <>
      {isLodding && (
        <img src="loadingWheel.gif" alt="loading" className="load" />
      )}
      <div>
        {!isLodding && (
          <Header
            onProject={onClickProject}
            onResume={onClickResume}
            onHome={onClickHome}
            detail={personalDetail}
          />
        )}

        <section>{!isLodding && isHomeClicked && <Intro />}</section>

        <section>
          {!isLodding && isResumeClicked && (
            <Experience experience={experience} />
          )}

          {!isLodding && isResumeClicked && <Education degree={degree} />}

          {!isLodding && isResumeClicked && <Highlight highlight={highlight} />}
        </section>

        <section>
          {!isLodding && isProjectClicked && <Project project={project} />}
        </section>

        {!isLodding && <Details detail={personalDetail}/>}
      </div>
    </>
  );
}

export default App;
