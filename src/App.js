import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Education from "./components/Education/Education";
import Header from "./components/Header/Headers";
import Intro from "./components/Introduction/Intro";
import Details from "./components/personalDetails/Details";

function App() {
  const [degree, setDegree] = useState([]);
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

  useEffect(() => {
    fetchEducationHandler();
  }, [fetchEducationHandler]);

  return (
    <div>
      <Header />
      <Intro />
      <section>
        {!isLodding && <Education degree={degree} />}
        {isLodding && <p>Lodding...</p>}
      </section>
      <Details />
    </div>
  );
}

export default App;
