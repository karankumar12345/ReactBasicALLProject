import React, { useEffect, useState } from "react";
import "./scroll.css"
function Scroll() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);
  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const data = await response.json();
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleScrollPercentage() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolledPercentage = (scrollTop / scrollHeight) * 100;
  
    setScrollPercentage(Math.min(scrolledPercentage, 100)); // Ensure scrollPercentage does not exceed 100
  }
  
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  // console.log(data,loading)
  console.log(data,scrollPercentage)
  return (
    <>
    <div className="top">
      <h1>Custom Scrool Indicator</h1>
      <div className="scroll-progress-tracking-container">
        <div className="current-progress-bar" style={{width:`${scrollPercentage}%`}}></div>
      </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataitem) => <p>{dataitem.title}</p>)
          : null}
      </div>
    </>
  );
}

export default Scroll;
