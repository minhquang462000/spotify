import Link from "next/link";
import * as React from "react";
import CardSingerHome from "../Cards/CardSingerHome";
import TitleList from "./TitleList";

export interface IListSingerHomeProps {
}

export default function ListSingerHome(props: IListSingerHomeProps) {
  return (
    <div className='max-w-[1900px]'>
      <TitleList titleList='Nghệ sĩ phổ biến' urlLink="" showMore={true} />
      <div className="w-full grid grid-cols-6 max-h-[270px]  overflow-hidden px-3">
        <CardSingerHome />
        <CardSingerHome />
        <CardSingerHome />
        <CardSingerHome />
        <CardSingerHome />
        <CardSingerHome />
        <CardSingerHome />
      </div>
    </div>
  );
}
