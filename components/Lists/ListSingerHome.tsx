import Link from "next/link";
import * as React from "react";
import CardSingerHome from "../Cards/CardSingerHome";
import TitleList from "./TitleList";

export interface IListSingerHomeProps {}

export default function ListSingerHome(props: IListSingerHomeProps) {
  return (
    <div className="max-w-[1900px]">
      <TitleList titleList="Nghệ sĩ phổ biến" urlLink="" showMore={"Hiện tất cả"} />
      <div className="w-full flex flex-wrap max-h-[270px]  overflow-hidden px-3">
        <Link href={"artist/1"}>
          {" "}
          <CardSingerHome />
        </Link>
        <Link href={"artist/1"}>
          {" "}
          <CardSingerHome />
        </Link>
        <Link href={"artist/1"}>
          {" "}
          <CardSingerHome />
        </Link>
        <Link href={"artist/1"}>
          {" "}
          <CardSingerHome />
        </Link>
        <Link href={"artist/1"}>
          {" "}
          <CardSingerHome />
        </Link>
        <Link href={"artist/1"}>
          {" "}
          <CardSingerHome />
        </Link>
        <Link href={"artist/1"}>
          {" "}
          <CardSingerHome />
        </Link>
      </div>
    </div>
  );
}
