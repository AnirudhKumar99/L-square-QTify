import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tabs, Tab } from "@mui/material";
import Carousel from "./Carousel";
import Section from "./Section";
import "./SongsSection.css";
import Box from "@mui/material/Box";
const SongsSection = () => {
  const [genres, setGenres] = useState([]);
  const [songs, setSongs] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");

  const [filteredSongs, setFilteredSongs] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          "https://qtify-backend-labs.crio.do/genres"
        );
        const genres = [
          "All",
          ...response.data.data.map((genre) => genre.label),
        ];
        console.log(genres);
        setGenres(genres);
        setSelectedGenre("All");
      } catch (error) {
        console.error("Failed to fetch genres:", error);
      }
    };

    fetchGenres();
  }, []);
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const songsData = await axios.get(
          "https://qtify-backend-labs.crio.do/songs"
        );
        setSongs(songsData.data);
        setFilteredSongs(songsData.data);
      } catch (error) {
        console.error("Failed to fetch songs:", error);
      }
    };
    fetchSongs();
  }, [genres]);

  const handleTabChange = (event, newValue) => {
    setSelectedGenre(newValue);
    console.log(newValue);
    if (newValue === "All") {
      setFilteredSongs(songs);
    } else {
      const filtered = songs.filter((song) => song.genre.label === newValue);
      console.log(filtered);
      setFilteredSongs(filtered);
    }
  };

  return (
    <div className="songs-section">
      <Section
        title="Songs"
        isSongsSection={true}
        genres={genres}
        selectedGenre={selectedGenre}
        songs={filteredSongs}
        handleTabChange={handleTabChange}
      ></Section>
    </div>
  );
};

export default SongsSection;
