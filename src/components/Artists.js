import React, { useEffect, useState } from "react";
import { artists as mockArtistData } from "../data/artists_data";

export default function Artists() {
  const [artists, setArtists] = useState(null);

  useEffect(() => {
    const artistDataTimeout = setTimeout(() => {
      setArtists(mockArtistData);
    }, 1000);
    return () => clearTimeout(artistDataTimeout);
  }, [mockArtistData]);

  return (
    <main className="container">
      <h1 className="text-center">Artists</h1>
      <p>Pick one of the following artists to learn more information:</p>
      {!artists ? (
        <p>Loading...</p>
      ) : artists.length === 0 ? (
        <p>No artists found</p>
      ) : (
        <div className="list-group">
          {artists.map((artist) => {
            return (
              <button
                type="button"
                class="list-group-item list-group-item-action"
              >
                {artist.name}
              </button>
            );
          })}
        </div>
      )}
    </main>
  );
}
