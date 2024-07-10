import React, { useState, useRef } from "react";
import { Card, Button, Progress, Typography } from "antd";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

const { Meta } = Card;
const { Text } = Typography;

interface MusicPlayerProps {
  title: string;
  singer: string;
  coverImage: string;
  audioSrc: string;
}
const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};
const MusicPlayer: React.FC<MusicPlayerProps> = ({
  title,
  singer,
  coverImage,
  audioSrc,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      setCurrentTime(currentTime);
      setProgress((currentTime / duration) * 100);
    }
  };
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };
  return (
    <Card
      cover={
        <img
          style={{
            maxHeight: "200px",
            maxWidth: "200px",
            objectFit: "cover",
            margin: "0 auto",
            padding: "30px 0 0 0",
          }}
          alt={title}
          src={coverImage}
        />
      }
      actions={[
        <Button
          type="text"
          icon={
            isPlaying ? <FaPauseCircle size={18} /> : <FaPlayCircle size={18} />
          }
          onClick={handlePlayPause}
          style={{
            color: "white",
            fontSize: "15px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          {isPlaying ? "Pause" : "Play"}
        </Button>,
      ]}
    >
      <Meta
        title={`Bài Hát : ${title}`}
        description={`Ca Sĩ Thể Hiện : ${singer}`}
      />
      <audio
        ref={audioRef}
        src={audioSrc}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
      />
      <Progress
        style={{ marginTop: "10px" }}
        percent={progress}
        showInfo={false}
      />
      <Text>
        {formatTime(currentTime)} / {formatTime(duration)}
      </Text>
    </Card>
  );
};

export default MusicPlayer;
