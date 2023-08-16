import { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { getNewAlbums, getTopAlbums } from "./components/api/api";
import Section from "./components/Section/Section";
import styles from "./App.module.css";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  const fetchTopAlbums = async () => {
    let data = await getTopAlbums();
    setTopAlbums(data);
  };
  const fetchNewAlbums = async () => {
    let data = await getNewAlbums();
    setNewAlbums(data);
  };

  useEffect(() => {
    fetchTopAlbums();
    fetchNewAlbums();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section data={topAlbums} type="album" title="Top Albums" />
        <Section data={newAlbums} type="album" title="New Albums" />
      </div>
    </div>
  );
}

export default App;
