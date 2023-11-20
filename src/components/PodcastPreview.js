import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

// Preview component for each podcast
const PodcastPreview = ({ podcast }) => (
  <ul className="flex flex-wrap">
  <li key={podcast.id}>
    <h3>{podcast.title}</h3>
    <p>{podcast.description}</p>
  </li>
  </ul>
);

// Main PodcastApp component
export default function PodcastApp() {
  const [podcastData, setPodcastData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://podcast-api.netlify.app/shows");
        const data = await response.json();

        setPodcastData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div>
      <Navbar/>
      <h2>Podcasts</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {podcastData.map((podcast) => (
            <PodcastPreview key={podcast.id} podcast={podcast} />
          ))}
        </ul>
      )}
    </div>
  );
}
