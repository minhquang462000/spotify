import { ImageField } from "@refinedev/antd";
import * as React from "react";
import { ISong } from "src/interfaces";
export interface ISongAlbumProps {
  songs: ISong[];
}

export default function SongAlbum({ songs }: ISongAlbumProps) {
  return (
    <div
      className="scrollable-container "
      style={{ maxHeight: "160px", overflow: "auto", scrollBehavior: "smooth" }}
    >
      {songs.map((song) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-center",
            gap: "10px",
            marginTop: "15px",
          }}
          key={song._id}
        >
          <div
            style={{
              width: "55px",
              height: "55px",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <ImageField
              style={{
                width: "100%",
                objectFit: "cover",
                height: "100%",
              }}
              value={`http://localhost:3000/${song.images}`}
            />
          </div>
          <p style={{ margin: 0, fontSize: "18px" }}>{song.name}</p>
        </div>
      ))}
    </div>
  );
}
