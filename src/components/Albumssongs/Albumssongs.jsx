import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Headeralbum/Headeralbum";
import SongsTable from "./SongsTable/SongsTable";

const Albumssongs = ({ topAlbums, newAlbums }) => {
  let albums = [...topAlbums, ...newAlbums];
  let location = useLocation();
  let albumName = location.state.value;
  console.log("albums", albums);
  let album = albums.filter((item) => item.title === albumName);
  let songs = [];
  if (album.length) {
    songs = album[0].songs;
    console.log(songs);
  }
  return (
    <div style={{ padding: "30px 50px" }}>
      <Header data={album[0]} />
      <SongsTable data={songs} />
    </div>
  );
};

export default Albumssongs;
