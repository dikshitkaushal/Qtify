import { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { getNewAlbums, getSongs, getTopAlbums } from "./components/api/api";
import Section from "./components/Section/Section";
import styles from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import Albumssongs from "./components/Albumssongs/Albumssongs";
import Faq from "./components/Faq/Faq";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

  const fetchTopAlbums = async () => {
    let data = await getTopAlbums();
    setTopAlbums(data);
  };
  const fetchNewAlbums = async () => {
    let data = await getNewAlbums();
    setNewAlbums(data);
  };

  const fetchSongs = async () => {
    let data = await getSongs();
    setSongs(data);
  };

  useEffect(() => {
    fetchTopAlbums();
    fetchNewAlbums();
    fetchSongs();
  }, []);

  return (
    <div className="App">
      <Navbar topAlbums={topAlbums} newAlbums={newAlbums} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <div className={styles.sectionWrapper}>
                <Section data={topAlbums} type="album" title="Top Albums" />
                <Section data={newAlbums} type="album" title="New Albums" />
                <Section data={songs} type="song" title="Songs" />
                <Faq />
              </div>
            </>
          }
        />
        <Route
          path="/albums"
          element={<Albumssongs topAlbums={topAlbums} newAlbums={newAlbums} />}
        />
      </Routes>
    </div>
  );
}

export default App;
