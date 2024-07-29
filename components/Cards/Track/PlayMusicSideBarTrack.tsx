"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FaExpand,
  FaPause,
  FaPlay,
  FaRegCommentAlt,
  FaSpotify,
  FaStepBackward,
  FaStepForward,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { MdShuffle } from "react-icons/md";
import { RxEnterFullScreen, RxExitFullScreen } from "react-icons/rx";
import { TbMicrophone2 } from "react-icons/tb";
import VolumeFunction from "./VolumeFunction";

export interface IPlayMusicSideBarTrackProps {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PlayMusicSideBarTrack(
  props: IPlayMusicSideBarTrackProps
) {
  const { isPlaying, setIsPlaying } = props;
  const audioRef = useRef<any>(null);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  // Loop
  const [isLooping, setIsLooping] = useState(false);
  const toggleLoop = () => {
    if (audioRef.current) {
      audioRef.current.loop = !isLooping;
      setIsLooping(!isLooping);
    }
  };

  // Audio
  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      const updateTime = () => {
        setCurrentTime(audio.currentTime);
        setDuration(audio.duration);
      };

      audio.addEventListener("timeupdate", updateTime);
      audio.addEventListener("loadedmetadata", updateTime);

      return () => {
        audio.removeEventListener("timeupdate", updateTime);
        audio.removeEventListener("loadedmetadata", updateTime);
      };
    }
  }, []);
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };
  const handleRangeChange = (event: any) => {
    audioRef.current.currentTime = event.target.value;
    setCurrentTime(event.target.value);
  };
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  // Fullscreen
  const [isFullScreen, setIsFullScreen] = useState(false);
  const containerRef = useRef<any>(null);
  const toggleFullScreen = () => {
    if (containerRef.current) {
      if (isFullScreen) {
        document.exitFullscreen();
      } else {
        containerRef.current.requestFullscreen();
      }
      setIsFullScreen(!isFullScreen);
    }
  };

  return (
    <section
      ref={containerRef}
      className=" fixed bottom-2 group bg-black w-full p-3 h-[80px] z-[889] right-0"
    >
      {isFullScreen && (
        <div
          style={{
            backgroundImage:
              "url('https://i.scdn.co/image/ab67616d0000b273e88e2e6c94ec9e1c0ab4d122')",
          }}
          className="w-full h-full -z-10 bg-cover absolute top-0 left-0"
        ></div>
      )}
      <div
        className={` flex ${
          isFullScreen
            ? "w-screen h-screen relative opacity-0 transition-all duration-500 group-hover:opacity-100 flex-col justify-end pb-[200px] text-[10px]   px-[50px]"
            : "justify-between  w-full   items-center  text-sm "
        }`}
      >
        <span
          className={`flex absolute top-10 left-10 items-center gap-4  ${
            !isFullScreen && "hidden"
          }`}
        >
          <FaSpotify size={40} />
          <span>
            <p>PHÁT TỪ ALBUM</p>
            <p className="font-bold text-xl">Đau Để Trưởng Thành</p>
          </span>
        </span>
        <div
          className={`w-max flex   ${
            isFullScreen ? "items-end gap-8 text-lg mb-[100px]" : "gap-2 "
          }`}
        >
          <img
            className={`${
              isFullScreen
                ? "h-[120px]"
                : "h-[60px] aspect-square rounded-md  object-cover"
            } aspect-square rounded-md  object-cover`}
            src="https://i.scdn.co/image/ab67616d00001e02e88e2e6c94ec9e1c0ab4d122"
            alt=""
          />
          <div className="flex justify-between gap-5 w-max items-center">
            <span className="full ">
              <p className="hover:underline w-full overflow-hidden truncate font-bold ">
                <Link href="#">Đau Để Trưởng Thành</Link>
              </p>
              <ul className="flex w-full font-bold text-[#a7a7a7] overflow-hidden">
                <li className="hover:underline ">
                  <Link href="#">Only C</Link>
                </li>
              </ul>
            </span>
            <button className={`${isFullScreen && "hidden"}`}>
              {" "}
              <FiPlusCircle size={15} />
            </button>
          </div>
        </div>
        <div
          className={`flex ${
            isFullScreen ? "w-full  flex-col-reverse gap-3" : "w-1/2 flex-col "
          }`}
        >
          <div className="flex items-center mb-2 justify-center gap-8 ">
            <button>
              {" "}
              <MdShuffle size={20} color="gray" />
            </button>
            <button>
              {" "}
              <FaStepBackward size={20} />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-[#fff] text-black p-2 rounded-full hover:bg-[#fff]"
            >
              {" "}
              {isPlaying ? <FaPause size={15} /> : <FaPlay size={15} />}
            </button>
            <button>
              <FaStepForward size={20} />
            </button>
            <button
              onClick={toggleLoop}
              className={` ${
                !isLooping
                  ? "text-[#fff]"
                  : "text-[#3be477] border-b border-[#3be477] pb-1 "
              } `}
            >
              <HiArrowPathRoundedSquare size={20} />
            </button>
          </div>
          <div className="flex items-center space-x-4 flex-grow mx-4">
            <span>{formatTime(currentTime)}</span>
            <input
              id="progress"
              type="range"
              min="0"
              max={duration || 0}
              step="0.1"
              value={currentTime}
              className="w-full h-1 bg-[#3be477] slider-thumb-audio rounded-lg"
              onChange={handleRangeChange}
            />
            <span>{formatTime(duration)}</span>
          </div>
          <audio
            ref={audioRef}
            src="http://localhost:3000/music/file/390ec3779b76b0debabf4c1660683f05.mp3"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          />
        </div>
        <VolumeFunction
          audioRef={audioRef}
          isFullScreen={isFullScreen}
          setIsPlaying={setIsPlaying}
          toggleFullScreen={toggleFullScreen}
        />
      </div>
    </section>
  );
}
