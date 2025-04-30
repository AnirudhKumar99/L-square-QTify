import React, { useState, useEffect } from "react";
import AlbumCard from "./AlbumCard";
import Carousel from "./Carousel";
import axios from "axios";
import "./Section.css";
import Box from "@mui/material/Box";
import { Tabs, Tab } from "@mui/material";

function Section({
  title,
  apiUrl,
  isSongsSection,
  genres,
  selectedGenre,
  handleTabChange,
  songs,
}) {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const initialAlbumDisplayCount = 6;

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(
          !isSongsSection ? apiUrl : "https://qtify-backend-labs.crio.do/songs"
        );
        setAlbums(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching albums:", error);
        setError("Failed to load albums.");
        setLoading(false);
      }
    };

    fetchAlbums();
  }, [apiUrl,isSongsSection]);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  if (loading) {
    return <p>Loading {title}...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }
  return (
    <div className="section-container">
      <div className="section-header">
        <h2>{title}</h2>
        {!isSongsSection && albums.length > initialAlbumDisplayCount && (
          <button className="collapse-button" onClick={toggleShowAll}>
            {showAll ? "Show All" : "Collapse"}
          </button>
        )}
      </div>
      {isSongsSection && genres.length > 0 && (
        <Box sx={{ borderBottom: 1, borderColor: "divider", marginBottom: 2 }}>
          <Tabs
            value={selectedGenre}
            onChange={handleTabChange}
            className="songs-tabs"
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
          >
            {genres.map((genre) => (
              <Tab
                sx={{
                  color: "white",
                  "&.Mui-selected": {
                    color: "#34c94b",
                    fontWeight: 600,
                  },
                }}
                key={genre}
                label={genre}
                value={genre}
                className="songs-tab"
              />
            ))}
          </Tabs>
        </Box>
      )}
      {isSongsSection ? (
        <Carousel items={songs} isSongsSection={isSongsSection} />
      ) : showAll ? (
        <Carousel items={albums} type="album" />
      ) : (
        <div className="albums-grid">
          {albums.slice(0,6).map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Section;
