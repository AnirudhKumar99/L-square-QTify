// import React, { useState, useEffect } from 'react';
// import AlbumCard from './AlbumCard';
// import axios from 'axios';
// import './Section.css';

// function Section({ title, apiUrl }) {
//   const [albums, setAlbums] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showAll, setShowAll] = useState(false);
//   const displayedAlbums = showAll ? albums : albums.slice(0, 6); // Show first 6 or all

//   useEffect(() => {
//     const fetchAlbums = async () => {
//       try {
//         const response = await axios.get(apiUrl);
//         setAlbums(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching albums:', error);
//         setError('Failed to load albums.');
//         setLoading(false);
//       }
//     };

//     fetchAlbums();
//   }, [apiUrl]);

//   const toggleShowAll = () => {
//     setShowAll(!showAll);
//   };

//   if (loading) {
//     return <p>Loading {title}...</p>;
//   }

//   if (error) {
//     return <p className="error-message">{error}</p>;
//   }

//   return (
//     <div className="section-container">
//       <div className="section-header">
//         <h2>{title}</h2>
//         {albums.length > 6 && (
//           <button className="collapse-button" onClick={toggleShowAll}>
//             {showAll ? 'Collapse' : 'Show All'}
//           </button>
//         )}
//       </div>
//       <div className="albums-grid">
//         {displayedAlbums.map((album) => (
//           <AlbumCard key={album.id} album={album} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Section;
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

  useEffect(() => {
    // if(isSongsSection){
    //   // console.log("fronm songs");
    //   // return;
    //   apiUrl="https://qtify-backend-labs.crio.do/songs"
    // }
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
  }, [apiUrl]);

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
        {!isSongsSection && albums.length > 6 && (
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
      {/* {showAll ? (
        <Carousel albums={isSongsSection?songs:albums} isSongsSection={isSongsSection} />
      ) : (
        <div className="albums-grid">
          {albums.slice(0, 6).map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      )}
       */}
      {isSongsSection ? (
        <Carousel items={songs} isSongsSection={isSongsSection} />
      ) : showAll ? (
        <Carousel items={albums} type="album" />
      ) : (
        <div className="albums-grid">
          {albums.slice(0, 6).map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Section;
