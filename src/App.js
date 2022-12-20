import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      console.log(res);
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div className="App">
      <button className="fetch_btn" onClick={fetchCatFact}>
        Generate Cat Fact
      </button>
      <div className="main_view">
        <p className="fact">{catFact}</p>
      </div>
    </div>
  );
}
