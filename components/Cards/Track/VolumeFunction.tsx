import { useState } from "react";
import { FaRegCommentAlt, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { RxEnterFullScreen, RxExitFullScreen } from "react-icons/rx";
import { TbMicrophone2 } from "react-icons/tb";

export interface IVolumeFunctionProps {
  audioRef: any;
  isFullScreen: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  toggleFullScreen: () => void;
}

export default function VolumeFunction(props: IVolumeFunctionProps) {
  const { audioRef, isFullScreen, setIsPlaying, toggleFullScreen } = props;
  // Volume
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const handleVolumeChange = (event: any) => {
    const newVolume = parseFloat(event.target.value);
    if (newVolume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };
  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume;
        setIsMuted(false);
      } else {
        audioRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };
  return (
    <div
      className={`flex w-max mr-5 items-center space-x-4 ${
        isFullScreen && "absolute right-[50px] bottom-[210px]" 
      }`}
    >
      <button>
        {" "}
        <FaRegCommentAlt size={15} />
      </button>
      <button>
        <TbMicrophone2 size={15} />
      </button>
      <button onClick={toggleMute}>
        {" "}
        {isMuted ? <FaVolumeMute size={15} /> : <FaVolumeUp size={15} />}{" "}
      </button>
      <input
        type="range"
        id="volume"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={handleVolumeChange}
        className="ml-2 h-1 bg-[#3be477] slider-thumb-audio rounded-lg"
      />
      <button onClick={toggleFullScreen}>
        {" "}
        {isFullScreen ? (
          <RxExitFullScreen size={15} />
        ) : (
          <RxEnterFullScreen size={15} />
        )}
      </button>
    </div>
  );
}
