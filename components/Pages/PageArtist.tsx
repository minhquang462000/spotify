"use client";
import HeaderChild from "../RenderPageChild/HeaderChid";
import CardSingerPage from "../Cards/SingerPage/CardSingerPage";
import ListSongArtistPage from "../Lists/ListSongArtistPage";
import FooterChild from "../RenderPageChild/FooterChild";
import { useEffect, useRef, useState } from "react";

export interface IAppProps { }

export default function PageArtist(props: IAppProps) {
  const [isVisible, setIsVisible] = useState(0);
  const scrollRef = useRef<any>(null);
  const toggleVisibility = () => {
    if (scrollRef.current.scrollTop > 400) {
      setIsVisible(20);
    } else if (scrollRef.current.scrollTop > 50) {
      setIsVisible(10);
    } else {
      setIsVisible(0);
    }
  };
  useEffect(() => {
    const scrollElement = scrollRef.current;
    scrollElement.addEventListener("scroll", toggleVisibility);

    // Cleanup event listener on component unmount
    return () => {
      scrollElement.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  useEffect(() => {
    console.log(isVisible);
  }, [isVisible]);

  return (
    <div
      ref={scrollRef}
      className=" absolute overflow-y-scroll bg-[] z-20  top-0 right-0 body-childHome w-full h-full"
    >
      <HeaderChild
        isVisible={isVisible}
        hidden={false}
      />
      <CardSingerPage />
      <ListSongArtistPage isVisible={isVisible} />
    </div>
  );
}
