import React, { useState, useEffect } from "react";

const Banner = () => {
  const [fact, setFact] = useState("");
  useEffect(() => {
    const URL = "https://catfact.ninja/fact";

    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setFact(data.fact);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>Cat Fact:</h1>
      <p>{fact}</p>
    </div>
  );
};

export default Banner;
