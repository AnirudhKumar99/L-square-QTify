import React from "react";
import { Chip } from "@mui/material";
import "./AlbumCard.css";

function AlbumCard({ album, isSongsSection }) {
  const imageUrl = album?.image;
  const count = isSongsSection ? album?.likes : album?.follows;
  const albumName = album?.title;
  console.log(isSongsSection,album.likes)
  return (
    <div className="album-card">
      <div className="album-image-container">
        <img src={imageUrl} alt={albumName} />
      </div>
      <div className="album-info">
        {count !== undefined && (
          <Chip
            label={`${count} ${isSongsSection ? "Likes" : "Follows"}`}
            size="small"
            className="follow-chip"
          />
        )}
        <h3 style={{ color: "#121212" }}>{albumName}</h3>
      </div>
    </div>
  );
}

export default AlbumCard;
